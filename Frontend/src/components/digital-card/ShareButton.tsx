import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Share2, MessageCircle, Send, Mail, Link2, X, Check } from "lucide-react";
import type { CardData } from "@/lib/digitalCard";

export function ShareButton({ data }: { data: CardData }) {
  const [open, setOpen] = useState(false);
  const [copied, setCopied] = useState(false);

  const shareUrl = typeof window !== "undefined" ? window.location.href : data.website;
  const shareText = `${data.name} — ${data.designation} at ${data.company}`;

  const nativeShare = async () => {
    if (typeof navigator !== "undefined" && navigator.share) {
      try {
        await navigator.share({ title: data.name, text: shareText, url: shareUrl });
        setOpen(false);
        return;
      } catch {
        /* user cancelled */
      }
    }
    setOpen((v) => !v);
  };

  const copyLink = async () => {
    try {
      await navigator.clipboard.writeText(shareUrl);
      setCopied(true);
      setTimeout(() => setCopied(false), 1600);
    } catch {
      /* ignore */
    }
  };

  const encoded = encodeURIComponent(`${shareText} — ${shareUrl}`);
  const options = [
    {
      label: "WhatsApp",
      icon: MessageCircle,
      href: `https://wa.me/?text=${encoded}`,
    },
    {
      label: "Telegram",
      icon: Send,
      href: `https://t.me/share/url?url=${encodeURIComponent(shareUrl)}&text=${encodeURIComponent(shareText)}`,
    },
    {
      label: "Email",
      icon: Mail,
      href: `mailto:?subject=${encodeURIComponent(shareText)}&body=${encoded}`,
    },
  ];

  return (
    <div className="fixed right-4 top-4 z-40">
      <motion.button
        whileTap={{ scale: 0.9 }}
        whileHover={{ scale: 1.05 }}
        onClick={nativeShare}
        aria-label="Share this card"
        className="flex h-11 w-11 items-center justify-center rounded-full border border-orange-100 bg-white/90 text-slate-900 shadow-lg backdrop-blur-md"
      >
        {open ? <X className="h-5 w-5" /> : <Share2 className="h-5 w-5" />}
      </motion.button>
      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0, y: -8, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: -8, scale: 0.95 }}
            transition={{ duration: 0.18 }}
            className="absolute right-0 mt-2 flex w-52 flex-col overflow-hidden rounded-2xl border border-orange-100 bg-white/95 p-1.5 shadow-lg backdrop-blur-md"
          >
            {options.map((o) => (
              <a
                key={o.label}
                href={o.href}
                target="_blank"
                rel="noreferrer"
                className="flex items-center gap-3 rounded-xl px-3 py-2.5 text-sm text-slate-900 hover:bg-orange-50"
              >
                <o.icon className="h-4 w-4 text-orange-500" />
                {o.label}
              </a>
            ))}
            <button
              onClick={copyLink}
              className="flex items-center gap-3 rounded-xl px-3 py-2.5 text-left text-sm text-slate-900 hover:bg-orange-50"
            >
              {copied ? (
                <Check className="h-4 w-4 text-orange-500" />
              ) : (
                <Link2 className="h-4 w-4 text-orange-500" />
              )}
              {copied ? "Link copied" : "Copy Link"}
            </button>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
