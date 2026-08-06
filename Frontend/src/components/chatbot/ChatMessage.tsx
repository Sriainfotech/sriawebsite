import type { ReactNode } from "react";
import { Link } from "react-router-dom";
import { ThumbsUp, ThumbsDown, User } from "lucide-react";
import { cn } from "@/lib/utils";

export interface FollowUpOption {
  label: string;
  targetId?: string;
  action?: string;
}

export interface ChatMessageData {
  id: string;
  role: "user" | "bot" | "error";
  text: string;
  link?: string | null;
  escalationCta?: string | null;
  escalationLink?: string | null;
  followUpOptions?: FollowUpOption[];
  logId?: string | null;
  // null = no feedback given yet, otherwise the thumb the user picked.
  feedback: boolean | null;
}

interface ChatMessageProps {
  message: ChatMessageData;
  onFollowUp: (label: string) => void;
  onFeedback: (messageId: string, logId: string, helpful: boolean) => void;
}

function ReplyLink({ to, children }: { to: string; children: ReactNode }) {
  const className =
    "mt-2 inline-block text-sm font-medium text-primary underline underline-offset-2 hover:no-underline";
  if (/^https?:\/\//.test(to)) {
    return (
      <a href={to} target="_blank" rel="noopener noreferrer" className={className}>
        {children}
      </a>
    );
  }
  return (
    <Link to={to} className={className}>
      {children}
    </Link>
  );
}

const ChatMessage = ({ message, onFollowUp, onFeedback }: ChatMessageProps) => {
  const isUser = message.role === "user";
  const isError = message.role === "error";

  const avatar = isUser ? (
    <div className="flex h-7 w-7 shrink-0 items-center justify-center rounded-full bg-primary/15 text-primary">
      <User size={15} />
    </div>
  ) : (
    <div className="h-7 w-7 shrink-0 overflow-hidden rounded-full bg-muted">
      <img src="https://ik.imagekit.io/hps6th7vy/sria/ai-face.png?tr=f-auto,q-auto,w-96" alt="" className="h-full w-full object-contain" />
    </div>
  );

  return (
    <div className={cn("flex flex-col", isUser ? "items-end" : "items-start")}>
      <div className={cn("flex max-w-[85%] items-end gap-2", isUser && "flex-row-reverse")}>
        {avatar}
        <div
          className={cn(
            "whitespace-pre-wrap break-words rounded-2xl px-3 py-2 text-sm",
            isUser && "rounded-br-sm bg-primary text-primary-foreground",
            !isUser && !isError && "rounded-bl-sm bg-muted text-foreground",
            isError && "rounded-bl-sm border border-destructive/30 bg-destructive/10 text-destructive",
          )}
        >
          {message.text}
          {message.link ? (
            <ReplyLink to={message.link}>Learn more</ReplyLink>
          ) : message.escalationLink ? (
            <ReplyLink to={message.escalationLink}>{message.escalationCta || "Talk to our team"}</ReplyLink>
          ) : null}
        </div>
      </div>

      {!isUser && !isError && !!message.followUpOptions?.length && (
        <div className="mt-2 flex max-w-[85%] flex-wrap gap-2 pl-9">
          {message.followUpOptions.map((opt, i) => (
            <button
              key={i}
              type="button"
              onClick={() => onFollowUp(opt.label)}
              className="rounded-full border border-input bg-background px-3 py-1 text-xs transition-colors hover:bg-accent hover:text-accent-foreground"
            >
              {opt.label}
            </button>
          ))}
        </div>
      )}

      {!isUser && !isError && message.logId && (
        <div className="mt-1 flex items-center gap-2 pl-9 text-muted-foreground">
          <button
            type="button"
            aria-label="This answer was helpful"
            disabled={message.feedback !== null}
            onClick={() => onFeedback(message.id, message.logId as string, true)}
            className={cn(
              "rounded p-1 transition-colors hover:text-primary disabled:cursor-not-allowed",
              message.feedback === true && "text-primary",
            )}
          >
            <ThumbsUp size={14} />
          </button>
          <button
            type="button"
            aria-label="This answer was not helpful"
            disabled={message.feedback !== null}
            onClick={() => onFeedback(message.id, message.logId as string, false)}
            className={cn(
              "rounded p-1 transition-colors hover:text-destructive disabled:cursor-not-allowed",
              message.feedback === false && "text-destructive",
            )}
          >
            <ThumbsDown size={14} />
          </button>
        </div>
      )}
    </div>
  );
};

export default ChatMessage;
