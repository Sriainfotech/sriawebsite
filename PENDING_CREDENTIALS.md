# Pending Credentials

Features that are fully built and wired end-to-end in the codebase, but
stay inactive on the live site until a real credential is supplied. Check
here before re-flagging one of these as "missing" or "not implemented" —
the code exists; only the key does not.

## reCAPTCHA v3 (contact form)

- **Status:** Implemented, inactive.
- **Frontend:** `Frontend/src/lib/recaptcha.ts` loads `grecaptcha` and gets
  a token on submit; `Frontend/src/pages/Contact.tsx` calls it and attaches
  the token to the form payload.
- **Backend:** `Backend/server.js`'s `verifyRecaptcha()` checks the token
  against Google's siteverify endpoint before accepting a submission.
- **Why it looks "not present" on a live audit:** both env vars are
  intentionally left blank. With no site key, the frontend skips loading
  `grecaptcha` entirely (logs a console warning, submits without a token —
  by design, so the form isn't broken while this is pending). With no
  secret key, the backend skips verification (logs a warning, accepts
  submissions as before) rather than rejecting everything.
- **To activate:** register the production domain at
  https://www.google.com/recaptcha/admin, then set:
  - `Frontend/.env` → `VITE_RECAPTCHA_SITE_KEY`
  - `Backend/.env` → `RECAPTCHA_SECRET_KEY`

  No code changes needed — it activates itself once both are set.

## GA4 (site-wide analytics)

- **Status:** Implemented (Aug 2026), inactive.
- **Frontend:** `Frontend/index.html` has a deferred, consent-gated
  `gtag.js` loader; `Frontend/src/components/seo/RouteSeo.tsx` fires a
  pageview on every client-side route change.
- **Why it looks "not present":** `VITE_GA_MEASUREMENT_ID` is blank —
  the loader detects that and skips entirely rather than sending a broken
  request.
- **To activate:** create a GA4 property at https://analytics.google.com,
  then set `Frontend/.env` → `VITE_GA_MEASUREMENT_ID` (format `G-XXXXXXXXXX`).
