import { useEffect, useRef, useState, type CSSProperties, type ReactNode } from "react";

// Drop-in replacement for the sitewide `motion.div` scroll-reveal pattern —
// <motion.div initial={{opacity:0,y:20}} whileInView={{opacity:1,y:0}}
//   viewport={{once:true}} transition={{duration:0.6, delay}}> — used
// hundreds of times across the site purely for a one-shot fade+slide-in on
// scroll. That pattern is visually simple but not cheap: every single
// motion.div instantiates its own framer-motion animation controller AND
// its own IntersectionObserver. A real mobile Lighthouse audit (Aug 2026)
// showed framer-motion's vendor chunk as the single largest main-thread
// cost sitewide (3.6s of a homepage's 8.1s total main-thread work), and
// ProductLayout/ServicePageLayout/SolutionPageLayout/CustomerStoryLayout
// alone account for 100+ of these across every product/service/solution
// page.
//
// This produces the identical visual effect — same fade, same slide
// distance, same duration/delay/easing feel, still viewport-triggered and
// one-shot — but via plain CSS transitions (GPU-composited, no per-frame
// JS) driven by ONE shared IntersectionObserver instance for the entire
// page instead of one per element. Framer-motion itself is untouched and
// still used elsewhere for anything actually interactive (drag, gestures,
// layout animation, AnimatePresence) — this only replaces the "fade in
// once when scrolled into view" building block.
const ROOT_MARGIN = "0px 0px -40px 0px";
const THRESHOLD = 0.1;

let sharedObserver: IntersectionObserver | null = null;
const revealCallbacks = new WeakMap<Element, () => void>();

function getSharedObserver(): IntersectionObserver {
  if (sharedObserver) return sharedObserver;
  sharedObserver = new IntersectionObserver(
    (entries) => {
      for (const entry of entries) {
        if (!entry.isIntersecting) continue;
        revealCallbacks.get(entry.target)?.();
        sharedObserver!.unobserve(entry.target);
        revealCallbacks.delete(entry.target);
      }
    },
    { threshold: THRESHOLD, rootMargin: ROOT_MARGIN }
  );
  return sharedObserver;
}

export interface RevealProps {
  children: ReactNode;
  className?: string;
  /** Starting vertical offset in px (matches framer's `initial={{ y }}`). Positive = slides up into place. */
  y?: number;
  /** Starting horizontal offset in px (matches framer's `initial={{ x }}`). */
  x?: number;
  /** Starting scale (matches framer's `initial={{ scale }}`), e.g. 0.94. */
  scale?: number;
  /** Seconds, matches framer's transition.delay. */
  delay?: number;
  /** Seconds, matches framer's transition.duration. Framer's default here is 0.5-0.6s sitewide. */
  duration?: number;
  style?: CSSProperties;
}

export function Reveal({
  children,
  className,
  y = 20,
  x = 0,
  scale,
  delay = 0,
  duration = 0.6,
  style,
}: RevealProps) {
  const ref = useRef<HTMLDivElement>(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    revealCallbacks.set(el, () => setVisible(true));
    getSharedObserver().observe(el);
    return () => {
      revealCallbacks.delete(el);
      sharedObserver?.unobserve(el);
    };
  }, []);

  const hiddenTransform = [
    x || y ? `translate(${x}px, ${y}px)` : "",
    scale !== undefined ? `scale(${scale})` : "",
  ]
    .filter(Boolean)
    .join(" ");

  return (
    <div
      ref={ref}
      className={className}
      style={{
        opacity: visible ? 1 : 0,
        transform: visible ? "none" : hiddenTransform || undefined,
        transitionProperty: "opacity, transform",
        transitionDuration: `${duration}s`,
        transitionTimingFunction: "cubic-bezier(0.16, 1, 0.3, 1)",
        transitionDelay: `${delay}s`,
        ...style,
      }}
    >
      {children}
    </div>
  );
}
