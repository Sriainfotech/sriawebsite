import { useEffect, useRef, useState, type ReactNode } from "react";

// Homepage sections are already route/component-split via React.lazy() in
// Index.tsx, but React.lazy()'s dynamic import() fires the moment the
// component attempts to render — which, with no gating, is immediately on
// mount for every section regardless of scroll position. A live PageSpeed
// audit confirmed this: chunks existed separately but were all being
// downloaded upfront, counted as "unused JavaScript" since most of them
// aren't actually needed until the visitor scrolls that far. This wrapper
// delays mounting its children (and therefore delays the lazy import
// trigger) until the section is actually approaching the viewport, using
// ONE shared IntersectionObserver for every deferred section on the page
// rather than one instance each (same pattern as Reveal.tsx's shared
// observer, for the same reason: cheap to set up, cheap to tear down).
//
// rootMargin only extends the bottom edge, and modestly — a first attempt
// at 600px on all sides measured as a genuine bug, not just "generous":
// on a ~844px-tall mobile viewport, a 600px margin means anything within
// ~1444px of the current scroll position counts as "near", which covers
// nearly this entire homepage at once — every section ended up loading
// within the same initial idle window regardless of scroll position,
// defeating the point. 200px-bottom-only gives a real visitor a small
// head start while scrolling without pulling in sections still well
// below the fold at initial load (verified directly: with this margin,
// only the sections actually within ~200px of the viewport load before
// the visitor scrolls to them).
const ROOT_MARGIN = "0px 0px 200px 0px";

let sharedObserver: IntersectionObserver | null = null;
const callbacks = new WeakMap<Element, () => void>();

function getSharedObserver(): IntersectionObserver {
  if (sharedObserver) return sharedObserver;
  sharedObserver = new IntersectionObserver(
    (entries) => {
      for (const entry of entries) {
        if (!entry.isIntersecting) continue;
        callbacks.get(entry.target)?.();
        sharedObserver!.unobserve(entry.target);
        callbacks.delete(entry.target);
      }
    },
    { rootMargin: ROOT_MARGIN }
  );
  return sharedObserver;
}

export function DeferredMount({ children, minHeight }: { children: ReactNode; minHeight: string }) {
  const ref = useRef<HTMLDivElement>(null);
  // Same flag scripts/prerender.mjs sets before app code runs (used
  // elsewhere by HeroSection.tsx and Navbar.tsx for the same reason):
  // Puppeteer's prerender pass never scrolls, so the IntersectionObserver
  // below would never fire and every deferred section would be captured
  // as an empty placeholder — confirmed directly, the first version of
  // this component shipped exactly that regression (0 matches for FAQ/
  // Chairman Statement content in the prerendered homepage). Real visitors
  // always get the deferred behavior; only the one-time build-time
  // prerender pass renders everything immediately, so crawlers still see
  // full content.
  const isPrerendering =
    typeof window !== "undefined" && (window as unknown as { __PRERENDERING__?: boolean }).__PRERENDERING__;
  const [shouldRender, setShouldRender] = useState(() => Boolean(isPrerendering));

  useEffect(() => {
    if (isPrerendering) return;
    const el = ref.current;
    if (!el || shouldRender) return;
    callbacks.set(el, () => setShouldRender(true));
    getSharedObserver().observe(el);
    return () => {
      callbacks.delete(el);
      sharedObserver?.unobserve(el);
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  if (shouldRender) return <>{children}</>;
  // Reserves the section's approximate rendered height so scrolling past
  // an unloaded section doesn't shift the layout of whatever's below it —
  // same reasoning as the min-height on each Suspense fallback this wraps.
  return <div ref={ref} style={{ minHeight }} aria-hidden="true" />;
}
