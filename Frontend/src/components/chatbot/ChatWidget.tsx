import { useEffect, useRef, useState, type FormEvent } from "react";
import { MessageCircle, X, Send } from "lucide-react";
import axiosInstance from "@/lib/axios";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import ChatMessage, { type ChatMessageData } from "./ChatMessage";

const WELCOME_MESSAGE: ChatMessageData = {
  id: "welcome",
  role: "bot",
  text: "Hi! I'm the Sria Infotech assistant. Ask me about our products, services, or solutions.",
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

  useEffect(() => {
    if (threadRef.current) {
      threadRef.current.scrollTop = threadRef.current.scrollHeight;
    }
  }, [messages, isLoading, isOpen]);

  const sendMessage = async (text: string) => {
    const trimmed = text.trim();
    if (!trimmed || isLoading) return;

    setMessages((prev) => [...prev, { id: createId(), role: "user", text: trimmed, feedback: null }]);
    setInput("");

    if (GREETING_REGEX.test(trimmed)) {
      setMessages((prev) => [
        ...prev,
        {
          id: createId(),
          role: "bot",
          text: `Hi, ${timeOfDayGreeting()}. How can I help you today?`,
          feedback: null,
        },
      ]);
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
          aria-label="Chat with us"
          className="fixed bottom-[160px] right-4 z-[9999] flex h-[500px] max-h-[70vh] w-[90vw] max-w-[360px] flex-col overflow-hidden rounded-xl border border-border bg-background shadow-2xl sm:bottom-[184px] sm:right-6"
        >
          <div className="flex items-center justify-between bg-primary px-4 py-3 text-primary-foreground">
            <span className="font-heading text-sm font-semibold">Chat with us</span>
            <button
              type="button"
              aria-label="Close chat"
              onClick={() => setIsOpen(false)}
              className="rounded p-1 hover:bg-primary-foreground/10"
            >
              <X size={18} />
            </button>
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

          <form onSubmit={handleSubmit} className="flex items-center gap-2 border-t border-border p-2">
            <Input
              value={input}
              onChange={(e) => setInput(e.target.value)}
              placeholder="Type a message..."
              aria-label="Message"
              className="h-9"
            />
            <Button type="submit" size="icon" className="h-9 w-9 shrink-0" disabled={isLoading || !input.trim()}>
              <Send size={16} />
            </Button>
          </form>
        </div>
      )}

      {/*
        bottom-24 on mobile (not bottom-6) — CookieBanner sits at bottom-4 and
        spans nearly the full viewport width there, so a lower offset put this
        button underneath/overlapping the banner's tap area before it's dismissed.
      */}
      <button
        type="button"
        aria-label={isOpen ? "Close chat" : "Open chat"}
        onClick={() => setIsOpen((o) => !o)}
        className="fixed bottom-24 right-4 z-[9999] flex h-12 w-12 items-center justify-center rounded-full bg-primary text-primary-foreground shadow-lg transition-all hover:scale-110 hover:shadow-2xl sm:bottom-28 sm:right-6 sm:h-14 sm:w-14"
      >
        {isOpen ? <X className="h-6 w-6" /> : <MessageCircle className="h-6 w-6" />}
      </button>
    </>
  );
};

export default ChatWidget;
