import { useEffect, useMemo, useRef, useState, type FormEvent } from "react";
import { X, Send, Mic, MicOff, Volume2, VolumeX } from "lucide-react";
import axiosInstance from "@/lib/axios";
import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import ChatMessage, { type ChatMessageData } from "./ChatMessage";

// The Web Speech API has no official TS lib types; these cover just the
// surface this component touches, cast from `window` at call sites below.
type SpeechRecognitionResultLike = {
  isFinal: boolean;
  [alternativeIndex: number]: { transcript: string };
};
type SpeechRecognitionEventLike = {
  resultIndex: number;
  results: { length: number; [i: number]: SpeechRecognitionResultLike };
};
type SpeechRecognitionLike = {
  lang: string;
  continuous: boolean;
  interimResults: boolean;
  maxAlternatives: number;
  onstart: (() => void) | null;
  onresult: ((event: SpeechRecognitionEventLike) => void) | null;
  onerror: (() => void) | null;
  onend: (() => void) | null;
  start: () => void;
  stop: () => void;
};

// How long to wait after the last onresult event (interim or final) before
// treating the user as done talking and auto-stopping the mic.
const SILENCE_AUTO_STOP_MS = 2000;

const WELCOME_MESSAGE: ChatMessageData = {
  id: "welcome",
  role: "bot",
  text: "Hi!, How can I help you?",
  feedback: null,
};

// crypto.randomUUID requires a secure context; older/insecure contexts fall
// back to a random string since this id is only ever a session grouping key,
// never used for anything security-sensitive.
function createId() {
  if (typeof crypto !== "undefined" && "randomUUID" in crypto) {
    return crypto.randomUUID();
  }
  return `${Date.now()}-${Math.random().toString(36).slice(2)}`;
}

// A bare "hi"/"hello" is too short and low-signal for the KB's fuzzy matcher
// — it ends up scoring some unrelated entry as the closest match instead of
// falling back. Greetings are handled locally, entirely client-side, so the
// reply also reflects the visitor's own local time rather than the server's.
const GREETING_REGEX = /^(hi+|hello+|hey+|good\s*(morning|afternoon|evening|day))[\s!.]*$/i;

function timeOfDayGreeting(date = new Date()) {
  const hour = date.getHours();
  if (hour < 12) return "good morning";
  if (hour < 17) return "good afternoon";
  return "good evening";
}

const ChatWidget = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState<ChatMessageData[]>([WELCOME_MESSAGE]);
  const [input, setInput] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  // Kept in memory only for the component's lifetime — no localStorage/sessionStorage.
  const [sessionId] = useState(createId);
  const threadRef = useRef<HTMLDivElement>(null);

  // --- Voice input (speech-to-text) ---
  const [isListening, setIsListening] = useState(false);
  const [voiceInputError, setVoiceInputError] = useState<string | null>(null);
  const recognitionRef = useRef<SpeechRecognitionLike | null>(null);
  // Accumulates finalized segments across the whole listening session so
  // later onresult events can't clobber earlier ones — only the trailing
  // interim segment is ever replaced.
  const finalTranscriptRef = useRef("");
  const silenceTimerRef = useRef<ReturnType<typeof setTimeout> | null>(null);

  // --- Voice output (text-to-speech) ---
  // In-memory only, defaults OFF, consistent with the sessionId approach above.
  const [voiceEnabled, setVoiceEnabled] = useState(false);

  // The floating bubble's text: an intro line for the first 3 seconds, then
  // switches to the prompt line for good. Runs once per mount (not per
  // isOpen toggle), so it doesn't replay every time the panel is closed.
  const [greetingPhase, setGreetingPhase] = useState<"intro" | "prompt">("intro");
  useEffect(() => {
    const timer = setTimeout(() => setGreetingPhase("prompt"), 2000);
    return () => clearTimeout(timer);
  }, []);

  const speechRecognitionSupported = useMemo(
    () =>
      typeof window !== "undefined" &&
      !!((window as any).SpeechRecognition || (window as any).webkitSpeechRecognition),
    [],
  );
  const speechSynthesisSupported = useMemo(() => typeof window !== "undefined" && "speechSynthesis" in window, []);

  useEffect(() => {
    if (threadRef.current) {
      threadRef.current.scrollTop = threadRef.current.scrollHeight;
    }
  }, [messages, isLoading, isOpen]);

  // Auto-dismiss the inline "didn't catch that" notice after a few seconds.
  useEffect(() => {
    if (!voiceInputError) return;
    const timer = setTimeout(() => setVoiceInputError(null), 4000);
    return () => clearTimeout(timer);
  }, [voiceInputError]);

  // Stop any active recognition/speech on unmount so nothing keeps running
  // (e.g. a background tab) after the widget is gone.
  useEffect(() => {
    return () => {
      if (silenceTimerRef.current) clearTimeout(silenceTimerRef.current);
      recognitionRef.current?.stop();
      if (speechSynthesisSupported) window.speechSynthesis.cancel();
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const clearSilenceTimer = () => {
    if (silenceTimerRef.current) {
      clearTimeout(silenceTimerRef.current);
      silenceTimerRef.current = null;
    }
  };

  // Restarts the 2s countdown; if it ever fires uninterrupted, the user has
  // gone quiet long enough that we treat them as done talking.
  const armSilenceTimer = () => {
    clearSilenceTimer();
    silenceTimerRef.current = setTimeout(() => {
      recognitionRef.current?.stop();
    }, SILENCE_AUTO_STOP_MS);
  };

  const speak = (text: string) => {
    if (!voiceEnabled || !speechSynthesisSupported) return;
    // Cancel whatever's currently speaking so answers never overlap/queue.
    window.speechSynthesis.cancel();
    const utterance = new SpeechSynthesisUtterance(text);
    window.speechSynthesis.speak(utterance);
  };

  const toggleVoiceOutput = () => {
    setVoiceEnabled((prev) => {
      const next = !prev;
      if (!next && speechSynthesisSupported) {
        window.speechSynthesis.cancel();
      }
      return next;
    });
  };

  const toggleListening = () => {
    if (!speechRecognitionSupported) return;

    // Toggle off / guard against double-clicks spawning a second session.
    if (isListening || recognitionRef.current) {
      clearSilenceTimer();
      recognitionRef.current?.stop();
      return;
    }

    finalTranscriptRef.current = "";

    const SpeechRecognitionCtor = (window as any).SpeechRecognition || (window as any).webkitSpeechRecognition;
    const recognition: SpeechRecognitionLike = new SpeechRecognitionCtor();
    recognition.lang = "en-US";
    recognition.continuous = true;
    recognition.interimResults = true;
    recognition.maxAlternatives = 1;

    recognition.onstart = () => {
      setVoiceInputError(null);
      setIsListening(true);
      // Don't arm the silence timer yet — browsers buffer audio for a beat
      // before the very first interim result comes back, and that startup
      // gap alone could eat the whole 2s budget before any speech is even
      // detected. The countdown only starts once onresult fires below, so
      // it measures gaps between actual speech, not mic-open-to-first-word.
    };
    recognition.onresult = (event) => {
      // Reset the silence countdown on every event — interim or final both
      // count as "still talking".
      armSilenceTimer();

      // Chrome re-fires onresult as it refines speech; results before
      // event.resultIndex were already finalized in an earlier event, so
      // only walk from there. Final segments are appended once to the
      // running transcript (never overwritten); the interim segment is
      // rebuilt from scratch each time since it's still in flux.
      let interimTranscript = "";
      for (let i = event.resultIndex; i < event.results.length; i++) {
        const result = event.results[i];
        const transcript = result[0]?.transcript ?? "";
        if (result.isFinal) {
          finalTranscriptRef.current += transcript + " ";
        } else {
          interimTranscript += transcript;
        }
      }
      setInput((finalTranscriptRef.current + interimTranscript).trim());
    };
    recognition.onerror = () => {
      clearSilenceTimer();
      setVoiceInputError("Didn't catch that, try again.");
    };
    recognition.onend = () => {
      clearSilenceTimer();
      setIsListening(false);
      recognitionRef.current = null;
    };

    recognitionRef.current = recognition;
    recognition.start();
  };

  const closeChat = () => {
    setIsOpen(false);
    clearSilenceTimer();
    recognitionRef.current?.stop();
    if (speechSynthesisSupported) window.speechSynthesis.cancel();
  };

  const sendMessage = async (text: string) => {
    const trimmed = text.trim();
    if (!trimmed || isLoading) return;

    // A new send always wins over speech from a previous answer still playing.
    if (speechSynthesisSupported) window.speechSynthesis.cancel();

    setMessages((prev) => [...prev, { id: createId(), role: "user", text: trimmed, feedback: null }]);
    setInput("");

    if (GREETING_REGEX.test(trimmed)) {
      const greeting = `Hi, ${timeOfDayGreeting()}. How can I help you today?`;
      setMessages((prev) => [
        ...prev,
        {
          id: createId(),
          role: "bot",
          text: greeting,
          feedback: null,
        },
      ]);
      speak(greeting);
      return;
    }

    setIsLoading(true);

    try {
      const { data } = await axiosInstance.post("/chatbot/query", {
        message: trimmed,
        sessionId,
      });
      setMessages((prev) => [
        ...prev,
        {
          id: createId(),
          role: "bot",
          text: data.answer,
          link: data.link,
          escalationCta: data.escalationCta,
          escalationLink: data.escalationLink,
          followUpOptions: data.followUpOptions || [],
          logId: data.logId || null,
          feedback: null,
        },
      ]);
      speak(data.answer);
    } catch {
      setMessages((prev) => [
        ...prev,
        {
          id: createId(),
          role: "error",
          text: "Sorry, something went wrong reaching our assistant. Please try again in a moment.",
          feedback: null,
        },
      ]);
    } finally {
      setIsLoading(false);
    }
  };

  const handleFeedback = async (messageId: string, logId: string, helpful: boolean) => {
    // Reflect the choice immediately and disable both buttons; feedback is
    // best-effort, so a failed write shouldn't interrupt the conversation.
    setMessages((prev) => prev.map((m) => (m.id === messageId ? { ...m, feedback: helpful } : m)));
    try {
      await axiosInstance.post("/chatbot/feedback", { logId, helpful });
    } catch {
      // no-op
    }
  };

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    sendMessage(input);
  };

  return (
    <>
      {isOpen && (
        <div
          role="dialog"
          aria-label="Chat with AIRA"
          className="fixed bottom-[136px] right-4 z-[9999] flex h-[500px] max-h-[70vh] w-[90vw] max-w-[360px] flex-col overflow-hidden rounded-xl border border-border bg-background shadow-2xl sm:bottom-[160px] sm:right-6"
        >
          <div className="flex items-center justify-between bg-primary px-4 py-3 text-primary-foreground">
            <span className="font-heading text-sm font-semibold">Chat with AIRA</span>
            <div className="flex items-center gap-1">
              <button
                type="button"
                aria-label={voiceEnabled ? "Turn off spoken replies" : "Turn on spoken replies"}
                title={
                  speechSynthesisSupported
                    ? voiceEnabled
                      ? "Spoken replies on"
                      : "Spoken replies off"
                    : "Voice output not supported in this browser"
                }
                disabled={!speechSynthesisSupported}
                onClick={toggleVoiceOutput}
                aria-pressed={voiceEnabled}
                className="rounded p-1 hover:bg-primary-foreground/10 disabled:cursor-not-allowed disabled:opacity-40"
              >
                {voiceEnabled ? <Volume2 size={18} /> : <VolumeX size={18} />}
              </button>
              <button type="button" aria-label="Close chat" onClick={closeChat} className="rounded p-1 hover:bg-primary-foreground/10">
                <X size={18} />
              </button>
            </div>
          </div>

          <div ref={threadRef} className="flex-1 space-y-3 overflow-y-auto px-3 py-3">
            {messages.map((m) => (
              <ChatMessage key={m.id} message={m} onFollowUp={sendMessage} onFeedback={handleFeedback} />
            ))}
            {isLoading && (
              <div className="flex w-fit items-center gap-1 rounded-2xl rounded-bl-sm bg-muted px-3 py-2">
                <span className="h-1.5 w-1.5 animate-bounce rounded-full bg-muted-foreground [animation-delay:-0.3s]" />
                <span className="h-1.5 w-1.5 animate-bounce rounded-full bg-muted-foreground [animation-delay:-0.15s]" />
                <span className="h-1.5 w-1.5 animate-bounce rounded-full bg-muted-foreground" />
              </div>
            )}
          </div>

          {voiceInputError && (
            <div className="border-t border-border bg-destructive/10 px-3 py-1.5 text-xs text-destructive">
              {voiceInputError}
            </div>
          )}

          <form onSubmit={handleSubmit} className="flex items-center gap-2 border-t border-border p-2">
            <Input
              value={input}
              onChange={(e) => setInput(e.target.value)}
              placeholder={isListening ? "Listening..." : "Type a message..."}
              aria-label="Message"
              className="h-9"
            />
            <Button
              type="button"
              size="icon"
              variant={isListening ? "destructive" : "outline"}
              className={cn("h-9 w-9 shrink-0", isListening && "animate-pulse")}
              disabled={!speechRecognitionSupported}
              title={speechRecognitionSupported ? (isListening ? "Stop listening" : "Speak your message") : "Voice input not supported in this browser"}
              aria-label={isListening ? "Stop voice input" : "Start voice input"}
              aria-pressed={isListening}
              onClick={toggleListening}
            >
              {speechRecognitionSupported && isListening ? <MicOff size={16} /> : <Mic size={16} />}
            </Button>
            <Button type="submit" size="icon" className="h-9 w-9 shrink-0" disabled={isLoading || !input.trim()}>
              <Send size={16} />
            </Button>
          </form>
        </div>
      )}

      {/*
        Deliberately close to the true bottom edge (bottom-6/8, not bottom-24/28)
        per explicit request — this does mean it can sit under/near the
        CookieBanner's tap area (bottom-4) while that's still showing, before
        the user dismisses it. Known tradeoff, not an oversight.

        Bubble sits directly above the bot's head with a bordered outline
        (two-layer rotated-square tail: an outer colored square plus an
        inner white one is the standard CSS trick for a tail that reads as
        part of a bordered bubble, not just a plain triangle).
      */}
      <div className="fixed bottom-6 right-2 z-[9888] sm:bottom-8">
        {!isOpen && (
          <div className="absolute bottom-full right-4 mb-1 w-28 animate-float rounded-lg border-2 border-primary bg-white px-3 py-1.5 shadow-xl">
            <span className="font-[Poppins,Arial,sans-serif] text-xs font-medium text-slate-800">
              {greetingPhase === "intro" ? "Hi, I'm AIRA" : "How can I help you?"}
            </span>
            {/* Speech-bubble tail pointing down at the bot's head */}
            <div className="absolute bottom-[-7px] right-10 h-3 w-3 rotate-45 border-b-2 border-r-2 border-primary bg-white" />
          </div>
        )}
        <button
          type="button"
          aria-label={isOpen ? "Close chat" : "Open chat"}
          onClick={() => (isOpen ? closeChat() : setIsOpen(true))}
          className="flex h-20 w-20 shrink-0 items-center justify-center rounded-full transition-all hover:scale-110 hover:shadow-2xl"
        >
          <img src="/ai-bot-icon.png" alt="" className="h-full w-full object-contain" />
        </button>
      </div>
    </>
  );
};

export default ChatWidget;
