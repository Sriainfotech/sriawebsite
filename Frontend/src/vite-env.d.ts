/// <reference types="vite/client" />

// GTM's dataLayer array — declared as a plain <script> global in index.html
// (Google Tag Manager loader), pushed to from React code (e.g. Contact.tsx's
// GA4 "generate_lead" conversion event) to fire tags without a hard
// dependency on the gtag.js/GTM library being loaded yet.
// window.gtag — set by the GA4 loader in index.html once it actually loads
// (deferred until consent + interaction); read from React (RouteSeo.tsx's
// SPA pageview tracking) with a typeof guard since it may not exist yet.
interface Window {
  dataLayer?: Record<string, unknown>[];
  gtag?: (...args: unknown[]) => void;
}

interface ImportMetaEnv {
  readonly VITE_API_BASE_URL?: string;
  readonly VITE_RECAPTCHA_SITE_KEY?: string;
}

interface ImportMeta {
  readonly env: ImportMetaEnv;
}
