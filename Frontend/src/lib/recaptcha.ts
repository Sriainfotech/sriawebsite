// Google reCAPTCHA v3 (invisible — no user-facing challenge). Loads the
// grecaptcha script lazily, only once, and only if a site key is actually
// configured — so local/dev environments without a real key (see .env,
// VITE_RECAPTCHA_SITE_KEY) don't break the form, they just skip the token
// and the backend logs a warning instead of rejecting the submission (see
// Backend/server.js's RECAPTCHA_SECRET_KEY check — same "degrade gracefully
// until real keys are configured" pattern already used for EMAIL_USER/PASS
// in that same file).

declare global {
  interface Window {
    grecaptcha?: {
      ready: (cb: () => void) => void;
      execute: (siteKey: string, opts: { action: string }) => Promise<string>;
    };
  }
}

const SITE_KEY = import.meta.env.VITE_RECAPTCHA_SITE_KEY as string | undefined;

let scriptLoadPromise: Promise<void> | null = null;

function loadScript(): Promise<void> {
  if (scriptLoadPromise) return scriptLoadPromise;
  scriptLoadPromise = new Promise((resolve, reject) => {
    const existing = document.querySelector<HTMLScriptElement>("script[data-recaptcha-v3]");
    if (existing) {
      existing.addEventListener("load", () => resolve());
      return;
    }
    const script = document.createElement("script");
    script.src = `https://www.google.com/recaptcha/api.js?render=${SITE_KEY}`;
    script.async = true;
    script.defer = true;
    script.dataset.recaptchaV3 = "true";
    script.onload = () => resolve();
    script.onerror = () => reject(new Error("Failed to load reCAPTCHA script"));
    document.head.appendChild(script);
  });
  return scriptLoadPromise;
}

/**
 * Resolves a fresh reCAPTCHA v3 token scoped to `action` (e.g.
 * "contact_form"), or `null` if no site key is configured yet, or if
 * anything about loading/executing reCAPTCHA fails — callers should submit
 * without a token in that case rather than blocking the user, since a
 * missing/failed reCAPTCHA token is a config/network issue, not something
 * the visitor did wrong.
 */
export async function getRecaptchaToken(action: string): Promise<string | null> {
  if (!SITE_KEY) {
    console.warn(
      "reCAPTCHA site key not configured (VITE_RECAPTCHA_SITE_KEY) — submitting without a token."
    );
    return null;
  }
  try {
    await loadScript();
    return await new Promise<string | null>((resolve) => {
      window.grecaptcha?.ready(() => {
        window.grecaptcha!
          .execute(SITE_KEY, { action })
          .then(resolve)
          .catch((err) => {
            console.warn("reCAPTCHA execute failed:", err);
            resolve(null);
          });
      });
    });
  } catch (err) {
    console.warn("reCAPTCHA unavailable:", err);
    return null;
  }
}
