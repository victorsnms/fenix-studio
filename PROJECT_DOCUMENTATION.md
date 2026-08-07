# Fenix Studios — Project Documentation

_Last updated: 2026-06-22_

A bilingual (PT-BR / EN-US) marketing site for **Fenix Studios**, a post-production & VFX studio.
Built with **React 18 + Vite 4**, styled with **styled-components**, internationalized with
**react-i18next**, routed with **react-router-dom v6**. Deployed via **gh-pages** (see
`package.json` `homepage`/`deploy` script).

---

## 1. Tech Stack

| Concern | Choice |
|---|---|
| Framework | React 18 (`type: module`, Vite 4) |
| Styling | styled-components 5 + CSS variables (`src/App.css` design tokens) |
| i18n | react-i18next (PT-BR default, EN-US) — strings in `src/i18n/locales/**` |
| Routing | react-router-dom v6 (`src/App.jsx`) |
| Carousels | embla-carousel (react / autoplay / auto-scroll) |
| Icons | react-icons, centralized in `src/icons.js` |
| Email/forms | `@emailjs/browser` (client-side) |
| SEO | react-helmet / react-helmet-async (`src/components/Seo`) |
| Deploy | gh-pages → `https://victorsnms.github.io/fenix-studio` |

Scripts: `npm run dev` (Vite), `build`, `preview`, `lint`, `deploy` (gh-pages).

---

## 2. Pages / Routes

All routes are declared in [`src/App.jsx`](src/App.jsx). "Linked" = reachable from the
Navbar/Sidebar menu.

| Route | Page component | Status | In menu? | Notes |
|---|---|---|---|---|
| `/` | `HomePage` | ✅ Live | Yes (Home) | Hero video, reel, about, clients, filmography marquee, study teaser, newsletter |
| `/about` | `AboutPage` | ✅ Live | Yes (Sobre) | Intro, **Our Team** (7 real members), Our Services fade carousel, newsletter |
| `/services` | `ServicesPage` | ✅ Live | Yes (Serviços) | Two content blocks (Post-Production / VFX), each links to its sub-page |
| `/services/post-production` | `PostProductionPage` | ✅ Live | Yes (dropdown) | Hero video, timeline, services accordion, **contact form**, newsletter |
| `/services/vfx` | `VFXPage` | ✅ Live | Yes (dropdown) | Hero video, timeline, services accordion, **contact form** |
| `/reels` | `ReelPage` | ✅ Live | Yes (Reels) | Media gallery (YouTube modal), newsletter |
| `/contact` | `ContactPage` | ✅ Live | Yes (Contato) | **Contact form**, NeedHelp card, Google Map embed, newsletter |
| `/study` | `StudyPage` | ⚠️ Live placeholder | Yes (Aprenda) | "Coming soon" + **early-access lead form** (EmailJS). Will be replaced by `/study-in-progress` |
| `/study-in-progress` | `StudyInProgressPage` | 🚧 In progress | No (hidden) | Future Study page: hero + course grid w/ search & filter modal. **SEO intentionally commented out** until it replaces `/study` |
| `*` | `PageNotFound` | ✅ Live | — | 404 fallback (custom 404 image, dark bg) |

### Pending / to-do on pages
- **`/study-in-progress` → `/study` cutover**: when courses are real, swap the route, re-enable
  its SEO (3 commented lines in `StudyInProgressPage.jsx` + the `studyInProgressSeo` export in
  `Seo/Data.js`), and retire the old "coming soon" `StudyPage`.
- **Course data is mocked** (`studyPage.categories` in both locale files): 7 placeholder courses
  with `buttonUrl: "http://www.google.com"`, placeholder image, and mocked facets
  (level/duration/format/language). EN course titles/descriptions are now translated; replace all
  with real catalog data when available.
- **EN locale gap (pre-existing)**: some deeper content historically shipped PT-only in the EN
  file; the study course block has been translated, but a full EN audit of `en-us/common.json` is
  recommended before launch.

---

## 3. Component Inventory (`src/components`)

Grouped by role. Each folder follows the `index.jsx` + `XxxElements.js` (styled-components)
convention.

**Layout / chrome**: `Navbar`, `Sidebar`, `Footer`, `PageTitle`, `Breadcrumb`, `Seo`,
`FadeInAnimation`, `SectionTopTitle`.

**Home sections**: `HomeReelSection`, `HomeAboutSection`, `HomeClientsSection`,
`HomeStudySection`, `HomeNewsletterSection`, `MarqueeInfinite` (filmography), `VideoBackground`.

**About**: `AboutIntroSection`, `OurTeamSection` (modal bios), `OurServicesSection` (cross-fade
card carousel linking to service pages).

**Services**: `ServiceContentBlock` (image/video + text), `ServicesPresentation` (hover-accordion
of service cards, per-service data), `ServiceContactBanner`, `NeedHelpCard`.

**Reels / media**: `MediaGallery` (filter bar + grid + YouTube iframe modal).

**Study (new)**: `StudyHeroSection`, `StudyCoursesSection` (course grid + desktop pill filter +
tablet/mobile search & filter modal with mocked facets).

**Forms / services**: `EmailJsContactForm` (shared contact form).

**Generic / older (some unused)**: `ClientList`, `ContactInfo`, `ImageGallery`, `LogoList`,
`MarqueeSection`, `PageDescription`, `ServicesGif`, `SkillsList`, `StudyCourses` (legacy, **dead
code** — superseded by `StudyCoursesSection`), `TestimonyColumns`, `Text`.

> Cleanup opportunity: `StudyCourses` is confirmed unused; safe to delete.

---

## 4. Services / Integrations

There are **two** external-service touchpoints. (Plus the Google Maps embed on Contact, which is
a static iframe — no key, nothing to manage.)

### 4.1 Contact / Lead Forms — EmailJS  ⚠️ _Code complete, needs production config + client test_

**What it does**: client-side form submission via EmailJS (no backend). One shared form
component + one bespoke lead form.

**Where used**:
- `EmailJsContactForm` → Contact page, Post-Production page, VFX page (name, phone, email,
  subject dropdown, message).
- `StudyPage` → separate "early access" lead form (name, phone, email), own optional template
  (`VITE_EMAILJS_TEMPLATE_STUDY_ID`, falls back to the main template).

**Env vars** (in `.env`, correctly **gitignored** ✅, not tracked):
```
VITE_EMAILJS_SERVICE_ID
VITE_EMAILJS_TEMPLATE_ID
VITE_EMAILJS_PUBLIC_KEY
VITE_EMAILJS_TEMPLATE_STUDY_ID   # optional, study form only
```
> ⚠️ These are `VITE_`-prefixed, so they are **embedded in the client bundle**. That's expected
> for EmailJS (public key is meant to be public), but it means anyone can read them — see
> hardening notes below.

**Status**: implementation is wired and reads env vars; needs (a) the production env vars set on
the deploy target, and (b) a real end-to-end send test by the client (their EmailJS account).

**Code review — works, but recommend before launch:**

| Severity | Finding | Fix |
|---|---|---|
| Med (UX) | `EmailJsContactForm` gives **no user feedback** — success/failure only `console.log`. A visitor can't tell if it sent. | Add success/error UI + reset, like `StudyPage` already does (it sets `sent` + resets). |
| Med (UX) | **No submit/loading state** → double-submit possible, no spinner. | Disable button while sending; show pending state. |
| Med (spam) | **No spam protection.** EmailJS free tier ≈ 200 emails/month; bots can drain it and spam the inbox. | Enable EmailJS dashboard **reCAPTCHA** + **domain allow-list**; optionally a honeypot field. |
| Low | **Validation inconsistency**: phone label shows `*` (required) but the input is **not** `required`; message has no `*` but **is** `required`. | Align labels with actual `required` attributes. |
| Low | Error handler uses `(onSuccess, onError)` with no `.catch`; a thrown error pre-network is unhandled. | Use `.then().catch()` and surface errors to UI. |
| Low | Study form shows only a `✓` on success, silent on error. | Add an error message branch. |

None are blockers; the form will function once env vars + EmailJS templates are live. The
spam/feedback items are the ones worth doing before public launch.

### 4.2 Newsletter — Brevo  🚧 _Code complete, blocked on config/auth_

> **📄 See [`NEWSLETTER_BREVO_STATUS.md`](NEWSLETTER_BREVO_STATUS.md) for the full, current
> status** — decisions, Brevo IDs, env vars, the active blocker, and remaining steps.

**Where used**: `HomeNewsletterSection` renders on **Home, About, Contact, Reels** (the red band
above the footer): an email input + "Inscrever"/"Subscribe" button.

**Chosen solution**: **Brevo** with **double opt-in**, called from a **Vercel serverless
function** (`api/subscribe.js`) so the Brevo API key stays server-side. This corresponds to
"Option B" in Section 5 below.

**Status**: implemented and pushed (commit `e78a5ea`) — the component now POSTs to
`/api/subscribe` with loading/success/error states. **Not yet working in production**: the
endpoint returns `provider_error`, and direct Brevo API calls are returning `401` during
debugging. Details and next steps in the status doc above.

**Note**: requires Vercel (the function can't run on GitHub Pages / static hosting).

---

## 5. Newsletter — Options, Costs & Recommendation  _(historical — decision made: Brevo)_

> Kept for reference on pricing/alternatives. The client chose **Brevo**; see §4.2 and
> `NEWSLETTER_BREVO_STATUS.md` for what was actually built.

**Important framing**: a "newsletter" is **two jobs**:
1. **Capture** subscribers (easy — the UI already exists).
2. **Compose & broadcast** campaigns to them, with unsubscribe handling, deliverability
   (SPF/DKIM), bounce handling, and LGPD/CAN-SPAM compliance (the hard, ongoing part).

Off-the-shelf services give you **#2 for free** (a dashboard to write & send). If you build your
own, #1 is trivial but #2 is a real project. **For a low-traffic client, a managed service is
almost always the right call.** Build-your-own makes sense mainly if you want recurring hosting
revenue or need deep custom integration.

> All free-tier numbers below are **as of early 2026 — verify current limits before committing**,
> they change often.

### 5.1 Option A — Managed service, public embed form (no backend)  ⭐ _Recommended_

Keep the existing styled input/button; POST to the provider's **public form endpoint** (no secret
key in the client). Provider hosts the subscriber list + campaign sender + unsubscribe/compliance.

| Service | Free tier (approx, early 2026) | Ease | Notes |
|---|---|---|---|
| **MailerLite** | ~1,000 subscribers / 12k emails/mo | ★★★★★ | Clean API + public embed; great PT support; best all-rounder for this size |
| **EmailOctopus** | ~2,500 subs / 10k emails/mo | ★★★★★ | Cheapest paid tiers; built on Amazon SES; simple API |
| **Brevo (ex-Sendinblue)** | 300 emails/day, unlimited contacts | ★★★★ | Good if list grows large but sends are low-volume |
| **Kit (ex-ConvertKit)** | up to ~10k subscribers | ★★★★ | Creator-focused, generous free tier |
| **Beehiiv** | ~2,500 subscribers | ★★★★ | Modern, good analytics |
| **Mailchimp** | ~500 contacts / 1k sends/mo | ★★★ | Most well-known but stingiest free tier now + heavier |
| **Netlify Forms** | 100 submissions/mo (capture only) | ★★★ | If the site moves to Netlify, can capture signups with zero code — but it does **not** send campaigns |

- **Cost to you/client**: **$0** at expected traffic.
- **Effort**: **~1–2 hours** — swap `handleSubscribe` to `fetch()` the provider endpoint, add
  success/error states, wire double-opt-in if desired.
- **Best pick**: **MailerLite** (DX + PT) or **EmailOctopus** (cheapest upgrade path).

### 5.2 Option B — Managed service via a small serverless proxy

Same providers, but call their **authenticated API** from a tiny serverless function so the API
key stays secret (enables double opt-in, tagging, richer data).
- **Cost**: still ~$0 (free function tier).
- **Effort**: **~3–5 hours**. Only worth it over Option A if you need server-side control.

### 5.3 Option C — Build-your-own *capture + welcome email* (Claude-built, hosted by you)

A small serverless `/api/subscribe` that validates the email, stores it, and sends a welcome
email. **Does NOT include a campaign composer/sender** — you'd still send broadcasts manually or
export the list.

- **Stack** (all have free tiers): host on **Cloudflare Workers** or **Vercel**; store in
  **Cloudflare D1 / KV**, **Supabase**, **Turso**, or **Upstash**; send via **Resend**
  (3,000 emails/mo free, very Claude-friendly) or **Amazon SES** ($0.10/1,000 — cheapest at scale).
- **Cost**: **~$0/month** at this traffic.
- **Effort (Claude-assisted)**: **~1–2 days** including DB, endpoint, validation, double opt-in,
  unsubscribe link, and deploy.
- **Caveat**: you now own deliverability (SPF/DKIM/DMARC on the client's domain), bounce/abuse
  handling, and LGPD compliance. Reasonable, but it's real maintenance.

### 5.4 Option D — Full custom newsletter (capture + campaign composer/sender + admin UI)

A true self-hosted mini-Mailchimp.
- **Effort**: **~1–2 weeks**. **Not recommended** for a low-traffic client — managed services do
  this better and cheaper.

### 5.5 Hosting platforms — is Vercel the best?

| Platform | Verdict for a tiny subscribe API |
|---|---|
| **Cloudflare Workers/Pages** ⭐ | **Best value**: ~100k requests/day free, built-in **D1** (SQLite) + **KV**, cron, cheap at scale. Ideal for an always-on tiny endpoint. |
| **Vercel** | Excellent DX, generous free tier, has Cron Jobs. Great if the front-end also moves here. Slightly pricier than Cloudflare past free tier. |
| **Netlify** | Comparable to Vercel; **Netlify Forms** can even capture signups with zero backend (100/mo free). |
| **Supabase** | DB + edge functions + auth in one free project — can host the whole Option C. |
| **Render / Railway / Fly.io** | For a real always-on server (~$5/mo). Overkill here. |

**Recommendation**: if building (Option C), use **Cloudflare** (Workers + D1) + **Resend**. If
not building, **MailerLite/EmailOctopus** (Option A) and skip hosting entirely.

### 5.6 If you host it and bill the client — pricing & margin

At this traffic your hard cost is effectively **$0** (free tiers) or a small fixed fee if you pick
a paid sender (~$9/mo). So **don't price cost-plus — price for maintenance + value**:

- **Recommended model**: a flat **monthly hosting & maintenance retainer** of **~R$80–R$200 /
  ~$15–$40 per month** (covers your time for deliverability monitoring, list exports, fixes).
- **If you do choose cost-plus** on a paid sender tier, apply a **50–100% margin** over hard cost,
  with a floor that covers ~30 min/month of your time.
- **One-time build fee** (Option C): bill the ~1–2 days of setup separately (e.g.
  **R$1,500–R$3,000 / ~$300–$600**), then the monthly retainer on top.

> Rationale: recurring micro-infra for a small client is priced on *peace of mind and upkeep*, not
> server cost. A flat retainer is easier to justify than a per-email markup and protects you when
> a free tier changes.

### 5.7 Recommendation summary (for today's client meeting)

1. **Fastest / cheapest / lowest-risk**: **Option A with MailerLite or EmailOctopus** — ~$0,
   ~1–2 h, client gets a real campaign dashboard immediately. **Default recommendation.**
2. **If the client wants you to own it & pay you monthly**: **Option C on Cloudflare + Resend**,
   ~1–2 days build, ~$0 infra, charge a **R$80–R$200/mo retainer** (+ one-time build fee). Only
   adds value if they specifically want a self-owned list / custom flow.
3. **Avoid** Option D (full custom sender) — not worth it at this scale.

Either way, also revisit the **EmailJS contact form** spam protection + success UI (Section 4.1)
before public launch.

---

## 6. Quick "Definition of Done" checklist before launch

- [ ] EmailJS: production env vars set on deploy target; client sends a real test from each form
      (Contact, Post-Production, VFX, Study early-access).
- [ ] EmailJS: enable reCAPTCHA + domain allow-list; add success/error UI + submit-disabled state.
- [x] Newsletter: provider chosen (Brevo) and `HomeNewsletterSection` wired to `/api/subscribe`.
- [ ] Newsletter: finish Brevo config + fix the `provider_error` / `401` blocker, verify the full
      double-opt-in flow end to end, and authenticate the sending domain
      → see [`NEWSLETTER_BREVO_STATUS.md`](NEWSLETTER_BREVO_STATUS.md).
- [ ] Study: decide `/study` vs `/study-in-progress` cutover; replace mocked course data & links;
      re-enable SEO if cutting over.
- [ ] EN locale audit of `src/i18n/locales/en/en-us/common.json`.
- [ ] Remove dead `StudyCourses` component.
- [ ] Replace placeholder external links (`http://www.google.com`) and social links if any remain.
