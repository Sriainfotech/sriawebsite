import { useLocation } from "react-router-dom";
import Seo from "./Seo";
import { ROUTE_META, DEFAULT_META, NOT_FOUND_META, isKnownRoute } from "@/seo/routeMeta";

/**
 * Renders the correct <title>/description/canonical for the current route.
 * Mounted once near the router root so every route gets unique metadata
 * without each page component needing its own <Seo /> call.
 */
const RouteSeo = () => {
  const { pathname } = useLocation();
  const meta = ROUTE_META[pathname] ?? (isKnownRoute(pathname) ? DEFAULT_META : NOT_FOUND_META);

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
