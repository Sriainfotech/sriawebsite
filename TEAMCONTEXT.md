# Team Context — KB-Backed Chatbot

This document is a detailed, chronological record of everything done to build, fix, and refine the
Sria Infotech website's knowledge-base-backed chatbot. It exists so any teammate picking this up can
understand not just *what* the system looks like today, but *why* it looks that way — every bug found,
every fix applied, every judgement call made, and every piece of real user data that drove a decision.

---

## 1. Architecture overview

**Backend** (`Backend/`):
- `models/KBEntry.js` — Mongoose schema for the knowledge base. Fields: `category`, `subcategory`,
  `keywords` (string array), `question_patterns` (string array), `answer`, `link`, `depth`
  (`'full'|'brief'`), `follow_up_options`, `escalation_cta`, `escalation_link`, and (added later)
  `editedManually` (boolean, default `false`) — see §8.
- `models/ChatLog.js` — one document per chat turn: `sessionId`, `question`, `matchedEntryId`,
  `confidenceScore`, `helpful` (thumbs up/down, nullable), `timestamp`.
- `chatbot/matcher.js` — loads every `KBEntry` from MongoDB into an in-memory Fuse.js index and matches
  incoming questions against it. Exports `matchQuery({ message, sessionContext })` and `refreshIndex()`.
- `chatbot/sessionStore.js` — a plain in-memory `Map` (not MongoDB) tracking each session's
  `lastEntryId`/`lastTopic`/`lastCategory`, used for follow-up context ("what about pricing?" after a
  product question). 30-minute TTL, swept every 5 minutes.
- `server.js` — Express routes `POST /api/chatbot/query` and `POST /api/chatbot/feedback`. CORS is
  wide open (`origin: '*'`).
- `scripts/build-kb.js` — seeds/refreshes `kb_entries` from `Frontend/src/seo/routeMeta.ts` (SEO meta
  descriptions) plus `faqsData` blocks in the 5 product page `.tsx` files. See §8 for the safety work
  done on this script.
- `scripts/dry-run-build-kb.js` — a read-only mirror of `build-kb.js`'s logic, added so anyone can see
  exactly what a real run would create/modify/skip before ever touching the database.
- `scripts/test-matcher.js`, `scripts/test-sessionstore.js` — permanent test scripts (pre-existing).

**Frontend** (`Frontend/src/`):
- `components/chatbot/ChatWidget.tsx` — the floating chat widget: message thread, input row, mic
  (speech-to-text), speaker toggle (text-to-speech), and the floating toggle button/mascot icon.
- `components/chatbot/ChatMessage.tsx` — renders one message bubble, including the "Learn more" /
  escalation link (`ReplyLink`, which auto-detects `https://` links and opens them in a new tab instead
  of routing internally) and thumbs up/down feedback buttons.
- `components/layout/Layout.tsx` — hosts `<ChatWidget />` plus the WhatsApp floating button.

**Important architectural fact, confirmed by direct code inspection, not assumption:**
`matcher.js` reads live from MongoDB every time the index is built
(`Backend/chatbot/matcher.js:56`, `const entries = await KBEntry.find({}).lean();`) — there is no
static/local JSON file involved at runtime. The actual MongoDB collection name is **`kbentries`**
(Mongoose's default pluralization of the `KBEntry` model name, no explicit collection name was set) —
not `kb_entries`, despite that being the more natural-sounding name.

---

## 2. Voice input/output (Step 7)

Added to `ChatWidget.tsx`:
- **Feature detection**: `speechRecognitionSupported` / `speechSynthesisSupported`, computed once via
  `useMemo`, gate the mic button and speaker toggle without touching the rest of the widget.
- **Mic button (speech-to-text)**: click toggles `SpeechRecognition` on/off; transcribed text fills the
  input box (never auto-sends); pulses red while listening; shows "Didn't catch that, try again." on
  error, auto-dismissed after 4s.
- **Speaker toggle (text-to-speech)**: in the panel header, defaults OFF, in-memory only (same pattern
  as `sessionId` — no `localStorage`). Calls `speechSynthesis.cancel()` on toggle-off, on a new message
  arriving, and on unmount, so speech never overlaps or keeps talking after the fact.

### Bugs found and fixed during voice work
1. **Transcription accuracy**: the original mic code had `interimResults: false` and never set
   `continuous`, so Chrome ended the session at the very first pause and only ever read
   `event.results[0][0]` — later results were silently dropped. Fixed by setting
   `continuous: true`/`interimResults: true` and accumulating final segments in a ref
   (`finalTranscriptRef`), rebuilding only the trailing interim portion each event.
2. **Silence auto-stop firing instantly**: the 2-second silence timer was armed at `onstart`, before
   any speech was even detected — browsers buffer audio for a beat before the first interim result, so
   that startup gap alone could burn the whole budget. Fixed by only arming the timer inside `onresult`,
   not `onstart`.

---

## 3. The 404 that started the debugging chain

**Symptom**: `POST /api/chatbot/query` → `404 Cannot POST /api/chatbot/query`, even though the route
was clearly defined in `server.js`.

**Root cause #1**: a stale Node process on port 5000 predated the route's addition — restarting it
should have fixed it, but instead surfaced:

**Root cause #2**: `MODULE_NOT_FOUND: ./runtime_adapters` from the `mongodb` driver. The installed
`node_modules/mongodb` was corrupted/incomplete relative to `package-lock.json` (a plain `npm install`
didn't fix it, since npm trusted the lockfile and didn't re-verify files). Fixed by force-reinstalling
just that package: `npm install mongodb mongoose`, which added `mongodb: ^7.5.0` as an explicit
dependency in `package.json` and bumped `mongoose` to `^9.9.1`.

---

## 4. First real content bug: "what is the main goal of this company"

A user asked this and got the generic fallback. Root cause: the "About Sria Infotech" KB entry's
`question_patterns` were only template variants of "what is about sria infotech" — nothing matching a
goal/mission-style question, and Fuse.js's score for it (0.447) just missed the 0.4 acceptance
threshold. **Fixed** by adding the exact phrasing plus close variants as `question_patterns` on that
entry.

**Follow-up bug**: the *answer text itself* was a page meta-description ("Learn about Sria Infotech's
SAP consulting...") — awkward as a direct chatbot reply. Rewritten to a direct, declarative answer
("Our goal at Sria Infotech is to help businesses accelerate their digital transformation...").

---

## 5. Step 8 — Full QA pass

Systematic testing of `matcher.js`, `sessionStore.js`, the API routes, and the widget UI.

### 5.1 Edge cases (all passed except one)
- Empty/whitespace message → correct 400.
- Missing `sessionId` → correct 400.
- Punctuation/emoji-only message → graceful fallback, no error.
- Rapid concurrent requests, same session → no torn/corrupted session state (JS's single-threaded
  execution model protects this by construction).
- **Long message (1000+ words) with a keyword buried in the middle → FAILED, then fixed.**

### 5.2 The Fuse.js long-query bug (and the two follow-on bugs it caused)
**Bug**: Fuse.js's Bitap matcher splits any query over 32 characters into 32-char chunks and averages
the score across *all* of them. A 1000-word message became ~220 chunks; the one chunk containing the
real keyword scored near-zero but got diluted by ~219 irrelevant chunks, so the average never cleared
the threshold — a real keyword match silently failed.

**Fix attempt #1**: added a word-by-word retry in `matcher.js` for queries over `LONG_QUERY_RETRY_LENGTH`
(initially 32 chars) — if the whole-phrase match fails, retry each word individually and take the best
score.

**Regression this caused**: generic filler words ("is", "what", "in") are literal substrings of
`question_patterns` like "what is gatecheck," so they scored a coincidental perfect 0 — tied with the
real keyword — and the tie broke on insertion order (first word in the message won), not relevance.
Nonsense queries started matching real entries.

**Fix**: biased the tie-break toward longer/more specific words
(`adjustedScore = hit.score - word.length * 0.001`) — small enough to never flip a genuinely worse
match ahead of a better one, but enough to make a 9-character real keyword beat a 2-character filler
word on a tie.

**Regression #2 this caused**: even at the fixed tie-break, `LONG_QUERY_RETRY_LENGTH = 32` was firing on
*ordinary* moderate-length questions (34–47 chars), not just genuine walls of text — causing new false
positives (nonsense queries wrongly matching real entries; a legitimate NxDesk FAQ paraphrase matching
"SAP Support & Maintenance" instead). **Final fix**: raised the threshold to 150 characters — comfortably
past any realistic single-sentence question — so ordinary questions stay on the more reliable
whole-phrase path, and the word-retry only engages for genuine hundred-word-plus text.

### 5.3 Session expiry
Temporarily lowered `SESSION_TTL_MS` to 5 seconds, verified a follow-up used context while fresh and
correctly fell back to a clean match after expiry, then restored the constant to `30 * 60 * 1000` and
restarted.

### 5.4 Feedback route edge cases
- Nonexistent `logId` → correct 404, not a silent 200.
- Malformed (non-ObjectId) `logId` → correct 400.
- Same `logId` submitted twice → overwrites cleanly (`helpful` flips `true`→`false`), a deliberate
  "user changed their mind" behavior, not a bug.

### 5.5 Matcher index refresh
Confirmed `refreshIndex()` itself works (edit KB in Mongo directly, call it, see the change reflected)
but found an **architectural gap**: nothing in the running server calls it periodically — only once,
right after the initial Mongo connect. A live KB edit is invisible to the running server until it's
restarted. Flagged, not fixed (would be new scope).

### 5.6 The tone-rewrite pass (43 entries)
Found that **43 of 77 KB entries** (all of Services and Solutions, plus several About/Partners entries)
were bare-noun-phrase or imperative sentences copied verbatim from `routeMeta.ts`'s SEO meta
descriptions ("Plan and execute SAP version and release upgrades...", "SAP Ariba procurement...
implemented and supported by Sria Infotech..."). Rewrote all 43 into declarative "Sria Infotech
provides/delivers/offers X" sentences, using only facts already present — no new claims. Verb choice
was varied (provides/delivers/offers/implements/runs/etc.) rather than repeating "provides" everywhere.
Presented before/after samples for approval before the batch, per an explicit process the user set.

**Process failure caught here**: a "dry run" script accidentally executed for real because
`require()`-ing a script file runs its top-level code immediately — there was no flag/guard preventing
execution. Separately, 4 originally-approved rewrites were shown but never actually written in an
earlier turn. Both gaps were found via post-hoc verification and closed, but the user gave explicit,
lasting feedback: **dry-run/preview steps must be structurally gated (a flag, a separate confirm step,
a script that can't reach its write path without one) — not just "I'll show this before writing" as
prose.** This is saved as a standing memory for future work.

---

## 6. Mobile testing

### 6.1 Floating buttons not sitting at the true bottom edge
**Symptom** (screenshot): WhatsApp + chat toggle buttons floating well above the visible bottom of the
screen on a real phone, at initial page load.

**Root cause**: `min-h-screen`/`h-screen` (used by the Hero section and ~30 other files) compute
`100vh` against a taller "layout viewport" than what's actually visible before a mobile browser's
collapsible address bar has settled.

**Fix**: added `viewport-fit=cover` to the meta viewport tag, and overrode Tailwind's
`.min-h-screen`/`.h-screen` utility classes in `index.css` (`@layer utilities`) to progressively
enhance: `100vh` fallback → `-webkit-fill-available` (older iOS Safari) → `100dvh` (modern browsers,
tracks the real visible viewport). One change fixes every usage site at once.

### 6.2 Testing the fix on a real device
Found the laptop's local IP (`192.168.0.154`), confirmed the Vite dev server (`host: "::"`, port 8080)
was already LAN-reachable, and temporarily pointed `Frontend/.env`'s `VITE_API_BASE_URL` at
`http://192.168.0.154:5000/api` so the phone could reach the backend too (CORS needed no change,
`origin: '*'` already covers it). Reverted `.env` back to `http://localhost:5000/api` after testing was
confirmed working (chatbot, voice, and mobile layout all good).

---

## 7. Pre-push review

Before committing the accumulated work, ran a full audit:
- **`.env` safety**: confirmed `Backend/.env` is genuinely gitignored and untracked (`git check-ignore
  -v`, `git ls-files`) — not just assumed.
- **A pre-existing repo issue found, not caused by this work**: `Backend/node_modules` has 1,805 files
  tracked in git history despite `node_modules` being in `.gitignore` — likely committed before the
  ignore rule existed. The `mongodb`/`mongoose` reinstall (§3) touched 557 of them on disk, making them
  show as "modified." Flagged clearly: don't `git add -A`, stage explicit paths.
- Checked for leftover debug artifacts (console.log, stray one-off scripts) — none found; only the
  permanent test scripts remained.
- Verified backend starts clean, frontend TypeScript compiles with 0 errors, and the production build
  completes (`Prerendering complete.`) end to end.

---

## 8. Comprehensive content audit (triggered by real user complaints)

### 8.1 Missing company address
A real user asked "address of this company" and got the generic non-answer fallback. The "Office
Locations" KB entry was, again, a routeMeta.ts teaser with no actual address in it. Read the real page
(`Frontend/src/pages/About/Location.tsx`) — 5 real offices with addresses/phones/emails — and rewrote
the entry to include the real Hyderabad HQ address, with the other three offices summarized and a link
to the full page.

### 8.2 Duplicate product entries hijacking the plain "what is X" question
Auto Extract, NxDesk, and Jatayu each had **two** competing KB entries answering "what is X" — a thin
routeMeta-derived one and a genuinely richer one (real product details). The thin one was winning for
the plain phrasing because its patterns matched it exactly, while the richer one only matched the
longer "...and who can use it" phrasing. **Fixed** by merging: moved the plain patterns onto the richer
entry, deleted the redundant thin duplicate, for all three products. Verified the general "what
products do you have" overview and all individual FAQ entries still work afterward.

### 8.3 Systemic "X that Sria provide" phrasing gap
A real user asked "products that sria provide" and it fell back — scored 0.4933, the correct match by
far, but just over the 0.4 threshold. Tried adding `provide`/`offer` as **keywords** first — this did
nothing at all, because Fuse.js compares the *entire multi-word query* as one pattern against each
stored string, and a 27-character query structurally can't fuzzy-match a 7-character keyword regardless
of word overlap. The actual fix was adding the specific phrasings ("products/services/solutions that
sria provide," "...offered by sria") as `question_patterns` on the three category-overview entries.

### 8.4 Navbar-vs-KB structural audit
Read the real `Navbar.tsx` (the ground truth for site structure) and cross-referenced every dropdown
against the KB:
- **Confirmed real content bug, not just a KB gap**: the nav labels `/solutions/business` as "SAP
  Business Network for Logistics," and the *live page* (`Business.tsx`) is genuinely about that
  (freight/tendering/invoicing/S4HANA integration) — but `routeMeta.ts`'s SEO description for that same
  route (and the KB entry seeded from it) describes a completely different product, "SAP Business One."
  This means the wrong description is currently showing in Google search results for that page, not
  just in the chatbot. Flagged for a decision on whether to also fix `routeMeta.ts`/the live SEO tag
  (outside the agreed scope of touching that file without asking).
- Found 5 "orphan" KB entries (`SAP BTP`, `SAP PaPM`, 3 Strategy Consulting pages) that are real, live,
  routed pages — just not currently linked from the nav. Their KB content isn't wrong, just not
  "nav-current." No action taken, since the pages are genuinely reachable.
- `Alliances` and `Events` nav items correctly have no KB entry — they're genuine "coming soon"
  placeholders (`noindex: true` in `routeMeta.ts`).

**Follow-up on the Business One/Business Network mismatch**: pulled all three sources side by side to
confirm the mismatch precisely before anyone decides what to fix —
- The live page (`Business.tsx`) is genuinely "SAP Business Network": freight tendering/booking,
  document sharing, automated invoicing, dispute management, global track & trace, SAP S/4HANA/ECC
  integration. Its breadcrumb literally says "Business Network."
- `routeMeta.ts`'s title/description for that same `/solutions/business` route
  (`routeMeta.ts:291-295`) is "SAP Business One Solutions... for small and mid-sized enterprises" — a
  different SAP product entirely.
- The KB entry (seeded from that description) repeats the same wrong "Business One" content.

Confirmed the wrong SEO description is genuinely live in `routeMeta.ts` right now (i.e. this is what
Google would show in a search snippet for that URL), not just a chatbot-side content gap. Decision on
whether to fix `routeMeta.ts` (SEO-facing) and/or just the KB entry is still open — nothing was changed
yet, this was purely a confirm-before-deciding step.

### 8.5 "I want to know more about X" — the bot's own prompt it couldn't understand
The Products Overview answer ends with "Which one would you like to know more about?" — but "I want to
know more about nxify" scored 0.5785 and fell back. Same root cause as §8.3 (whole-phrase dilution).
Added `"i want to know more about X"` etc. to all 5 products.

**Regression this caused (same mistake repeated at smaller scale)**: adding 4 near-duplicate
"know more about X" patterns per product pushed the words "know"/"about"/"more" to dominate most of
each product's pattern array — turning GateCheck into a mini version of the earlier About-entry
over-broadening bug. Two real users' queries ("nx gen tech academy," "what about pricing?")
started **silently matching GateCheck** — a wrong answer with no visible sign anything was off. Caught
by pulling real `chat_logs` fallback data and testing suspicious-looking successes, not just fallbacks.
**Fixed** by trimming each product back to one canonical pattern instead of four.

### 8.6 NxGen Tech Academy / NxSys Digital
Two real users asked about these navbar links (external sites: `nxgentechacademy.com`,
`nxsysdigital.com`) and got fallbacks. Initially added KB entries describing them as unrelated
third-party sites — **the user then corrected this**: both are products Sria Infotech built and
operates itself (NxGen = a learning platform, NxSys = a B2B distribution portal). Rewrote both entries
to reflect actual ownership.

### 8.7 App Store and the three missing apps
A user asked "tell me about the cashora in apps" and it fell back, despite the App Store overview
entry mentioning Cashora by name. Found: no dedicated KB entry existed at all for the App Store page
itself (a real `build-kb.js` bug, see §9), and three of the ten listed apps (eSkoolia, HRMS, Cashora)
only existed as bare keywords inside one long combined answer — same Fuse dilution problem as §8.3/8.5.
Created individual entries for all three using the real short descriptions from `AppStore.tsx`,
described neutrally (not claiming Sria Infotech ownership, since that wasn't confirmed the way
NxGen/NxSys was).

Later, a real user asked "tell me about the Jatayu in apps" and it *still* fell back — because the
"in apps" contextual pattern had only been added to the App Store overview and the 3 newly-created
apps, never retroactively to Jatayu/NxDesk/Nxify (Auto Extract and GateCheck happened to pass by
coincidence). Added the missing patterns to all three, with collision checks confirming NxDesk's new
pattern doesn't hijack HRMS and Nxify's doesn't hijack the App Store overview.

---

## 9. Making `build-kb.js` safe to re-run

**The problem, discovered via a dry-run simulation**: `build-kb.js`'s `upsertEntry()` does an
unconditional `$set` of the entire freshly-computed document on every matching entry, every run — no
diff check, no awareness of manual edits. A dry run showed it would **revert 58 of 80 entries**
(72.5% of the KB) back to their original routeMeta-derived text, undoing essentially every fix in this
document.

**Fix — field-level protection**:
1. Added `editedManually: Boolean` (default `false`) to the `KBEntry` schema.
2. Migrated the 58 confirmed-diverging entries to `editedManually: true` in one explicit write, after
   showing the exact list (with document IDs) for confirmation first.
3. Updated `upsertEntry()`: if the matched existing entry has `editedManually: true`, skip the
   `answer`/`keywords`/`question_patterns` overwrite entirely — only refresh `link` if the route moved.
   Added a `Skipped N manually-edited entries` summary line.
4. New entries (genuinely new routes) still get created normally, `editedManually: false` by default.
5. Re-ran the dry run: confirmed `Would MODIFY: 0`, `Would SKIP: 58` (later 59, see below) — the
   protection holds.

**A migration-count discrepancy, investigated rather than shrugged off**: the migration matched 55
unique documents, not the expected 58. Traced it to 3 duplicate IDs in the candidate list — Auto
Extract, Jatayu, and NxDesk (the products merged in §8.2) each satisfy *two* of `build-kb.js`'s own
upsert filters simultaneously post-merge, so the same document was flagged as diverging twice. Verified
all 55 real, unique documents were correctly marked; not a bug.

### 9.1 The `/app-store` categorization bug
`categorize()` only matches path-prefix patterns (`/products/*`, etc.); `/app-store` is a flat top-level
route that never matched any of them, so it silently fell into `outOfScope` — no KB entry was ever
auto-generated for the App Store page. **Fixed** with an explicit `FLAT_ROUTE_CATEGORIES` map.

This surfaced a second issue: the auto-derived subcategory ("Product Catalogue," from the routeMeta
title) didn't match the manually-created entry's subcategory ("App Store"), so the upsert filter would
never find the existing document and would **create a duplicate** instead of skipping it. Fixed with a
`SUBCATEGORY_OVERRIDES` map forcing `/app-store` → `"App Store"`, then marked that entry
`editedManually: true` too. Confirmed via dry run at each step: categorize fix alone → `[CREATE]`
(would duplicate); subcategory fix → `[MODIFY]` (clean match, not yet protected); after marking
protected → `[SKIPPED]`.

---

## 10. Pricing — a real content gap, found via `chat_logs`, not guessed at

Queried real `chat_logs` for fallback/near-miss cases (filtering out ~97 of 119 entries that were this
conversation's own QA test traffic, keeping only genuine UUID `sessionId` sessions). Found a real user's
mid-conversation "what about pricing?" follow-up fell back even though the context-retry mechanism
(matching the follow-up against the previous topic) is specifically built for this case.

**Traced why, rather than assuming a bug**: reconstructed the session's exact message sequence from
`chat_logs`, confirmed the message 20 seconds earlier had matched successfully (so `lastTopic` was
genuinely populated, to "NxDesk" — not "GateCheck" as initially assumed; there was no GateCheck question
anywhere in that session). Confirmed the context-merge retry *did* run (the returned fallback shape is
only reachable after both the direct and context-merged attempts fail). **Root cause: there is no
pricing/cost information anywhere in the KB for any Sria Infotech product or service** — checked all 80
entries, found exactly one mention of pricing at all, on an unrelated SAP financial-analytics offering.
Even a perfectly-working retry has nothing relevant to find.

**Fix**: added a dedicated, category-wide `General/Pricing` KB entry ("We don't have published pricing
for our products and services, since it depends on your specific requirements — contact our team to
discuss pricing for your needs."), `editedManually: true` from creation. Collision-checked first: the 7
new keywords were completely unused anywhere else in the KB, and the new entry doesn't hijack any of 10
tested unrelated queries. The fix is strong enough that "what about pricing?" now resolves on the
*direct* match alone (score 0.0850), no longer dependent on session context at all.

---

## 11. UI polish — mascot icon, positioning, and the speech bubble

- Replaced the generic `lucide-react` `MessageCircle` icon with a custom mascot image
  (`Frontend/public/ai-bot-icon.png`) for the closed-state toggle button.
- Iteratively resized the button (went through several sizes — settled at `h-16 w-16`) and repositioned
  it multiple times per explicit direction changes:
  - Moved closer to the true bottom edge (`bottom-24/28` → `bottom-6/8`), an explicitly accepted
    tradeoff against the `CookieBanner`'s tap area while it's still showing.
  - Right-aligned specifically the bot-icon button (not the WhatsApp button or chat panel, which were
    briefly changed too and then correctly reverted per feedback) to match `FloatingButtons.tsx`'s
    `right-2` offset.
- Added a speech-bubble callout ("Hi!, How can I help you?") next to the icon when the chat is closed,
  through several rounds of repositioning per reference images provided:
  1. First: side-by-side flex row, bubble to the left, tail pointing right at the bot.
  2. Then: absolutely positioned at the icon's top-left corner.
  3. Then: back to a side-by-side layout (mirroring a reference image that showed the bubble on the
     right of a robot with a left-pointing tail).
  4. Final: bubble positioned directly **above** the bot's head (`absolute bottom-full`), with a
     **bordered** outline (`border-2 border-primary`) and a two-layer bordered tail (a rotated square
     with only two edges bordered — the standard CSS trick for a tail that reads as part of the bubble's
     outline, not a plain filled triangle) — matching a second reference image's style.
  5. Widened the bubble (`w-56`) on request.
- Each button-size change required recomputing the WhatsApp button's and chat panel's offsets to
  preserve the ~16px stacking gap between them — done consistently every time, not left stale.
- Added two Tailwind animations (`tailwind.config.ts`): `animate-float` (gentle vertical bob) on the
  mascot image, and reused the pre-existing `animate-pulse-glow` on the button itself, only in the
  closed state so the close (`X`) button isn't distractingly animated.
- Note: several of these UI edits happened while the file was being modified concurrently on the user's
  end mid-task (values changing between reads, e.g. momentarily landing on invalid Tailwind classes like
  `h-62`/`h-18`/`h-2` that silently produce no CSS) — each time, the current live state was re-read and
  worked from directly rather than assumed stale.
- Icon size went through further rounds after the above: `h-24`→`h-16`→`h-20`, settling smaller each
  time per explicit "decrease the height" follow-ups; each resize again required recomputing the
  WhatsApp/panel offsets to keep the stacking gap correct.
- Bubble placement was clarified further with two more reference images: first "top-left corner of the
  icon" (an `absolute bottom-full left-0` overlay), then a photo showing a bubble-with-tail *style*
  sample (not a placement instruction) which prompted moving the bubble back to directly **above** the
  bot's head with the bordered two-layer tail described above, and widening it to `w-56` per request.
- **Two-phase greeting text**: added a `greetingPhase` state (`"intro" | "prompt"`) with a one-time
  3-second `setTimeout` (later adjusted to 2s) that flips the bubble's text from an intro line to a
  prompt line. Fires once per page load, not per open/close toggle, so it doesn't replay every time the
  panel is closed and reopened. Final copy: **"Hi, I'm AIRA"** → **"How can I help you?"**
- **Font-family vs. style, made explicit**: checked `index.html` and confirmed only **Inter** and
  **Poppins** are actually loaded as web fonts on the site (the Navbar's `Questrial` font-family
  reference is a pre-existing dead stack — never loaded, silently falls back to Arial/Verdana). Asked
  which of the two to use for the greeting bubble rather than guessing a second time; confirmed
  **Poppins**. A first attempt at "change the font" had bundled in extra styling (`italic`,
  `tracking-wide`, `font-semibold`) beyond just the font-family — corrected back to a plain
  `font-medium` once the user clarified they meant the font-family specifically, not added style.

---

## 12. Standing process notes for future work on this codebase

- **Dry-run/preview steps must be structurally gated**, not just described in prose before a write —
  see §5.6. This is saved as a lasting memory (`feedback_dry_run_enforcement.md`).
- **Always restart the backend (`node server.js`) after any KB edit** — `matcher.js` only rebuilds its
  Fuse index on module load / initial Mongo connect; there's no live-refresh path (see §5.5).
- **Check for keyword/pattern collisions before adding anything to the KB** — Fuse.js's fuzzy matching
  is loose enough that a single overly-generic word (`about`, `know`, `more`) added to one entry can
  make it a magnet for unrelated queries. This happened twice (§4, §8.5) before the discipline of
  simulating-before-writing became standard practice.
- **`build-kb.js` is now safe to re-run** (§9) — but only because `editedManually` is being maintained.
  Any future manual DB edit to `answer`/`keywords`/`question_patterns` should also set
  `editedManually: true`, or it will be silently overwritten next time the script runs.
- **Real user signal lives in `chat_logs`** — but is heavily diluted by this conversation's own testing
  traffic. Filter by `sessionId` shape: this conversation's QA sessions use predictable string prefixes
  (`qa-`, `test-`, `repro-`, etc.); real browser sessions use proper UUIDs
  (`crypto.randomUUID()` from `ChatWidget.tsx`'s `createId()`).
