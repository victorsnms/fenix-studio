# Newsletter (Brevo) — Implementation Status

_Last updated: 2026-08-20 · Branch: `develop`/`master` · Status: **working end-to-end in production**_

Pick-up doc for the newsletter feature. Code is written, committed and pushed. The remaining
work is **configuration + debugging**, not development.

---

## 1. Decisions made

| Decision | Choice | Why |
|---|---|---|
| Provider | **Brevo** | Client's pick. Free tier fits expected low traffic. |
| Opt-in type | **Double opt-in (DOI)** | Anti-spam best practice; LGPD/GDPR posture. Contact only joins the list after clicking the confirmation email. |
| Architecture | **Vercel serverless function** (`/api/subscribe`) | Brevo's API key is a **true secret** (full account access). It must never reach the browser. |
| Hosting | **Vercel** | Required — the function can't run on GitHub Pages (static only). |
| Course/UI | Kept the existing custom-styled input + button | We do **not** use Brevo's embeddable iframe/hosted form. |

### ⚠️ Security rule for this integration
Brevo vars must **NOT** be `VITE_`-prefixed. Vite inlines any `VITE_*` var into the client
bundle, which would publicly expose the API key. (EmailJS is the opposite case — its "public
key" is designed to be public, hence `VITE_EMAILJS_*` is correct.)

> Historical note: the Brevo vars were briefly created as `VITE_BREVO_*` and renamed to
> `BREVO_*` before any deploy. If a build+deploy ever happened while they were `VITE_`-prefixed,
> **regenerate the Brevo API key**.

---

## 2. What's built (committed & pushed)

Commit **`e78a5ea`** — "Add newsletter subscription via Brevo double opt-in (serverless /api/subscribe)"

### `api/subscribe.js` (new — Vercel serverless function)
- POST-only; validates + normalizes the email server-side.
- Calls Brevo `POST https://api.brevo.com/v3/contacts/doubleOptinConfirmation` with
  `{ email, includeListIds: [LIST_ID], templateId, redirectionUrl }`.
- Reads secrets from `process.env` — never exposed to the client.
- Response mapping:
  | Condition | Returns |
  |---|---|
  | Brevo 201/204 | `200 { ok: true }` |
  | Brevo `duplicate_parameter` (already subscribed) | `200 { ok: true, already: true }` — deliberately treated as success so we don't leak list membership |
  | Invalid email | `400 { error: "invalid_email" }` |
  | Missing env vars | `500 { error: "server_misconfigured" }` |
  | Any other Brevo response | `502 { error: "provider_error" }` |
  | Thrown exception | `500 { error: "unexpected" }` |

### `src/components/HomeNewsletterSection/` (updated)
Renders on **Home, About, Contact, Reels** (the red band above the footer).
- Replaced the old `console.log` stub with a real `POST /api/subscribe`.
- State machine: `idle → loading → success | error | invalid`.
- Button shows "Sending…" and disables during submit; input clears on success; status message
  appears under the form; message clears when the user edits the field again.
- Client-side email validation before hitting the API.
- New styled components: `NewsletterFormColumn`, `NewsletterMessage` (green success / red error).

### i18n (PT + EN)
Added under `newsletter.`: `sending`, `success`, `error`, `invalid`.

---

## 3. Brevo account setup (done)

| Item | Value | Where found |
|---|---|---|
| Contact list | **"Newsletter Subscribers"** → **ID `5`** | Contacts → Lists (URL `.../list-listing/id/5`) |
| DOI email template | **"Confirmação Double opt-in do Modelo Padrão"** → **ID `2`**, Active | Templates (URL `.../templates/email/edit/2`) |
| Form | Created, **"Sign-up confirmation: Double confirmation email"** enabled | Marketing → Forms |

**What the list is for:** it's the audience bucket. Confirmed subscribers land in list `5`; when
sending a campaign you select this list as recipients.

**The Brevo Form itself is not used on the site.** It was only created because that flow is what
generates a valid DOI template (with the confirmation link wired in). Ignore the iframe/share
link it produced — our custom UI + API call replace it.

---

## 4. Environment variables

Six vars, **no `VITE_` prefix** (was four — split into per-locale template IDs when the DOI
email became language-aware, 2026-08-20; see §8):

```
BREVO_API_KEY               # Brevo API v3 key (secret — full account access)
BREVO_LIST_ID=5
BREVO_DOI_TEMPLATE_ID_PT=2  # Portuguese DOI template
BREVO_DOI_TEMPLATE_ID_EN=   # English DOI template (fill in once created — §9)
BREVO_DOI_TEMPLATE_ID=2     # fallback if a locale-specific one above is unset
BREVO_DOI_REDIRECT_URL=https://fenix-studio-eight.vercel.app/
```

- **Local `.env`** — all set except `BREVO_DOI_TEMPLATE_ID_EN`, pending the English template
  being created in Brevo (see §8). Only used by `vercel dev` (see §6). `.env` is gitignored ✅
- **Vercel dashboard** (Project → Settings → Environment Variables) — **this is what production
  reads.** Must be set there and redeployed. **`BREVO_DOI_TEMPLATE_ID_EN` still needs to be
  added there** once you have the English template's ID — until then, the fallback
  `BREVO_DOI_TEMPLATE_ID` (Portuguese) is used for English visitors too.

### ⚠️ Known config bug to verify in Vercel
`BREVO_DOI_REDIRECT_URL` was originally saved **without the `https://` scheme**
(`fenix-studio-ea0lwj1el-...vercel.app`). Brevo validates this as a URL, so a bare hostname can
cause rejection. Fixed in local `.env`; **confirm it's also fixed in the Vercel dashboard** — it
is a prime suspect for the production `provider_error`.

---

## 5. Resolved: production `provider_error` (2026-08-20)

### Root cause
`POST https://fenix-studio-eight.vercel.app/api/subscribe` was returning `502 { "error":
"provider_error" }`. Brevo's real response, surfaced via the debug fields described below,
was:
```json
{ "providerStatus": 400, "providerCode": "invalid_parameter", "providerMessage": "Invalid redirection Url" }
```

Cause: the `BREVO_DOI_REDIRECT_URL` env var **in the Vercel dashboard** was missing the
`https://` scheme (a stale value from before this was first documented as a risk in §4).
Local `.env` had the correct value the whole time, which is why this only showed up in
production. Fixed by correcting the value in Vercel → Settings → Environment Variables and
redeploying.

### How it was diagnosed
`api/subscribe.js` was temporarily (now permanently, see below) changed to relay Brevo's own
`status`/`code`/`message` on a failed call:
```json
{ "error": "provider_error", "providerStatus": 400, "providerCode": "invalid_parameter", "providerMessage": "Invalid redirection Url" }
```
This made the exact failure visible straight from the browser's Network tab, without needing
Vercel dashboard log access. **Decision: kept permanently** (not reverted after diagnosis) —
Brevo's error shape here is its own generic taxonomy, not user PII, so relaying it costs
nothing and keeps future debugging fast. The client-side newsletter form
(`src/components/HomeNewsletterSection/index.jsx`) also `console.error`s the full response
body on failure for the same reason.

### Full flow confirmed working (2026-08-20)
Submit on production → DOI email received → clicked confirm → contact appeared in Brevo
list `5` (`victorsantows@gmail.com`, confirmed via Contacts → Lists → Newsletter
Subscribers). The email landed in **Spam** — expected, see the sending-domain item in §7.

### Postman 401 (separate, still unresolved — no longer blocking)
This was a *different* investigation (testing Brevo directly, bypassing our function) that
was paused before the redirect-URL bug was found, and is now moot for shipping since the
real endpoint works. Left here in case Postman testing is picked up again later:

`GET https://api.brevo.com/v3/account` → `401 { "message": "authentication not found in
headers", "code": "unauthorized" }`, despite the `api-key` header being present and
correctly spelled. Leading theory, never confirmed: Postman's environment editor had the key
in "Initial Value" but not "Current Value" (a common import gotcha that sends an empty
header) — check that column next time this is picked up.

---

## 6. Testing

### Postman collection (uncommitted — see §8)
- `postman/Fenix-Studio-Newsletter.postman_collection.json` — safe to commit, no secrets.
- `postman/Fenix-Studio-Newsletter.postman_environment.json` — **contains the real API key**,
  gitignored via `postman/*.postman_environment.json`.

Import both, select the environment, then run in order:
1. **Brevo Health Checks** — Get Account (key valid?), Get List by ID (list `5` exists?),
   Get Template by ID (template `2` exists **and** `isActive`?).
2. **Brevo Double Opt-in (direct)** — the exact call our function makes. Success = **201**, empty body.
3. **Your Vercel Endpoint** — `POST /api/subscribe`. Success = **200 `{ok:true}`**.

### Local testing caveat
`npm run dev` (Vite) **cannot run serverless functions** — `/api/subscribe` will 404 locally.
To test end-to-end locally, use `vercel dev` (Vercel CLI + local `.env`). Otherwise test against
the deployed Vercel URL.

---

## 7. Remaining work

- [x] ~~Resolve the Postman 401~~ — superseded; the production endpoint itself was confirmed
      working directly (§5), so this is no longer a blocker. Left unresolved as a minor,
      non-blocking item if Postman testing is picked up again.
- [x] ~~Verify `BREVO_DOI_REDIRECT_URL` in the Vercel dashboard~~ — this was the actual bug;
      fixed 2026-08-20 (§5).
- [x] ~~Re-test `POST /api/subscribe`~~ — confirmed `200 {ok:true}` in production.
- [x] ~~Full end-to-end~~ — confirmed: submit → DOI email → click confirm → contact appears in
      Brevo list `5`. (2026-08-20)
- [x] ~~Design a branded DOI email template~~ — done; see §8 for the template file + setup
      guide. Uses the site's actual brand colors/logo instead of Brevo's default.
- [x] ~~Make the DOI email language-aware~~ — code done (client sends `locale`, server picks
      the matching template). **Not fully live yet**: the English DOI template still needs to
      be created in Brevo (§8) and its ID set as `BREVO_DOI_TEMPLATE_ID_EN` in the Vercel
      dashboard. Until then, English-language visitors receive the Portuguese confirmation
      email (falls back to `BREVO_DOI_TEMPLATE_ID`).
- [ ] **Authenticate the sending domain** in Brevo (Settings → Senders & IP). Currently the
      sender is `victorsantows@gmail.com` and Brevo warns *"Your domain is not authenticated…we
      replace your domain with [@brevosend.com]"*. **Confirmed causing spam-folder delivery**
      (the 2026-08-20 test email landed in Spam) — should be done before real launch, no longer
      just a theoretical risk.
- [ ] Consider swapping the DOI template's sender to a branded studio address once the domain
      is authenticated.
- [ ] **No self-service unsubscribe exists yet.** Today, a confirmed subscriber can only be
      removed (a) manually by Victor in Brevo → Contacts, or (b) automatically via the
      mandatory unsubscribe footer Brevo injects into actual marketing **campaigns** — which
      only applies once real newsletter campaigns start going out, not right after DOI
      confirmation. Given double opt-in was chosen partly for LGPD/GDPR posture (§1), and those
      regimes generally expect an easy way to withdraw consent at any time, this is worth
      closing eventually: an `/api/unsubscribe` endpoint (removes the contact from the list via
      Brevo's contacts API) + a minimal confirmation page. Explicitly deferred as backlog for
      now, not urgent.
- [ ] **"Welcome to Fenix Studios" email — partially implemented, not live yet.** Code side
      is done: `api/subscribe.js` now sends a `LOCALE` (`PT`/`EN`) contact attribute on every
      subscribe call, and both branded welcome templates exist
      ([`brevo/welcome-template.pt.html`](brevo/welcome-template.pt.html),
      [`brevo/welcome-template.en.html`](brevo/welcome-template.en.html)). **Still needed, on
      the Brevo side**: create the `LOCALE` contact attribute, upload both templates, and
      build a Brevo Automation workflow (trigger: contact added to list `5` → branch on
      `LOCALE` → send the matching template). Full instructions in `BREVO_SETUP_GUIDE.md` §7.
      Until that workflow is built and activated, no welcome email sends at all — the DOI
      confirmation remains the only automated email.
- [ ] Real newsletter **content/campaigns** — nothing is scheduled or automated beyond the DOI
      confirmation. Sending actual newsletter issues to list `5` is a manual step in Brevo's
      Campaigns section whenever there's something to send.

---

## 8. The DOI email templates

The DOI confirmation email uses a branded HTML template (not Brevo's plain default) matching
the site's dark theme (`#0d0d0d`/`#151515` background, `#e20613` red accent, uppercase bold
CTA matching the site's button style). **Two versions exist, one per site language**:
[`brevo/doi-confirmation-template.pt.html`](brevo/doi-confirmation-template.pt.html) and
[`brevo/doi-confirmation-template.en.html`](brevo/doi-confirmation-template.en.html).
`api/subscribe.js` picks between `BREVO_DOI_TEMPLATE_ID_PT`/`_EN` based on a `locale` field
the client sends — see `BREVO_SETUP_GUIDE.md` §6 for the full mechanism.

- The confirmation button's `href` must keep the `{{ doubleoptin }}` merge tag — Brevo resolves
  it to the actual per-recipient confirmation URL at send time. Don't hand-edit that link.
- The header logo is `src/images/logo.png` (icon-only mark, paired with a "FENIX STUDIOS" text
  label in the template since the icon alone has no text). It had to be uploaded through Brevo's
  own inline image block (not the "Attachments" panel, which just attaches a downloadable file
  instead of embedding one) to get a hosted URL for the `<img src>` — only needs uploading once,
  both language templates reuse the same hosted URL.
- Full setup instructions — how to (re)create both templates via the Forms flow, how to get each
  env var, and a migration checklist for swapping to the client's own Brevo account — are in
  [`BREVO_SETUP_GUIDE.md`](BREVO_SETUP_GUIDE.md).

---

## 9. Related context

- Full site docs: [`PROJECT_DOCUMENTATION.md`](PROJECT_DOCUMENTATION.md) (§4.2 covers the
  newsletter's pre-Brevo state; §5 has the original provider comparison/costs analysis).
- The other integration, **EmailJS** (contact forms), is separate and unaffected. It still has
  open pre-launch items — no spam protection, and no success/error UI on the main contact form.
  See `PROJECT_DOCUMENTATION.md` §4.1.
- [`BREVO_SETUP_GUIDE.md`](BREVO_SETUP_GUIDE.md) — the "how to configure this from scratch"
  reference (env vars, DOI template creation, client-account migration checklist). This doc
  (`NEWSLETTER_BREVO_STATUS.md`) is the status/history tracker; that one is the setup how-to.
