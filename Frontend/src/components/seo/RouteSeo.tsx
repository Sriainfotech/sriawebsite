import { useEffect, useRef } from "react";
import { useLocation } from "react-router-dom";
import Seo from "./Seo";
import {
  ROUTE_META,
  DEFAULT_META,
  NOT_FOUND_META,
  BLOG_POST_FALLBACK_META,
  isKnownRoute,
  isBlogPostPath,
} from "@/seo/routeMeta";

/**
 * Renders the correct <title>/description/canonical for the current route.
 * Mounted once near the router root so every route gets unique metadata
 * without each page component needing its own <Seo /> call.
 */
const RouteSeo = () => {
  const { pathname, search } = useLocation();
  const meta =
    ROUTE_META[pathname] ??
    (isBlogPostPath(pathname)
      ? BLOG_POST_FALLBACK_META
      : isKnownRoute(pathname)
        ? DEFAULT_META
        : NOT_FOUND_META);

  // GA4 SPA pageview tracking. gtag's own automatic pageview (on the
  // initial page load) is deliberately disabled in index.html
  // (send_page_view: false) since GA loading itself is deferred until
  // first interaction/consent — by the time it's ready the visitor may
  // already be on a different route than at initial parse. That initial
  // loader fires the FIRST page_view itself (for whatever route is active
  // the moment GA finishes loading); this effect covers every route change
  // after that. window.gtag won't exist yet if GA hasn't loaded (no
  // consent/interaction yet) — skip silently rather than queuing/erroring,
  // matching the site's existing gtag not being ready.
  const isFirstRender = useRef(true);
  useEffect(() => {
    if (isFirstRender.current) {
      // The very first render's pageview is handled by the GA loader
      // itself once it actually loads (see index.html) — sending one here
      // too would double-count whenever GA happens to already be active
      // (e.g. analytics was accepted on a prior visit, so it's ready
      // before this component even mounts).
      isFirstRender.current = false;
      return;
    }
    if (typeof window.gtag !== "function") return;
    window.gtag("event", "page_view", {
      page_path: pathname + search,
      page_title: meta.title,
    });
  }, [pathname, search, meta.title]);

  return (
    <Seo
      title={meta.title}
      description={meta.description}
      canonicalPath={pathname}
      noindex={meta.noindex}
    />
  );
};

export default RouteSeo;
