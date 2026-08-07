# Newsletter (Brevo) — Implementation Status

_Last updated: 2026-07-22 · Branch: `develop` · Status: **code complete, blocked on Brevo auth (401)**_

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

Four vars, **no `VITE_` prefix**:

```
BREVO_API_KEY            # Brevo API v3 key (secret — full account access)
BREVO_LIST_ID=5
BREVO_DOI_TEMPLATE_ID=2
BREVO_DOI_REDIRECT_URL=https://fenix-studio-eight.vercel.app/
```

- **Local `.env`** — all four set. Only used by `vercel dev` (see §6). `.env` is gitignored ✅
- **Vercel dashboard** (Project → Settings → Environment Variables) — **this is what production
  reads.** Must be set there and redeployed.

### ⚠️ Known config bug to verify in Vercel
`BREVO_DOI_REDIRECT_URL` was originally saved **without the `https://` scheme**
(`fenix-studio-ea0lwj1el-...vercel.app`). Brevo validates this as a URL, so a bare hostname can
cause rejection. Fixed in local `.env`; **confirm it's also fixed in the Vercel dashboard** — it
is a prime suspect for the production `provider_error`.

---

## 5. Current blocker

### Symptom A — production endpoint
`POST https://fenix-studio-eight.vercel.app/api/subscribe` → `{ "error": "provider_error" }`

Per §2's table, `provider_error` means **Brevo returned something other than 201/204**. It's a
catch-all, so it doesn't identify the failing field on its own. Check the Vercel **function logs**
— `api/subscribe.js` logs Brevo's real status + body via `console.error("[subscribe] Brevo error", …)`.

### Symptom B — Postman direct-to-Brevo (where debugging stopped)
`GET https://api.brevo.com/v3/account` → **`401 Unauthorized`**
```json
{ "message": "authentication not found in headers", "code": "unauthorized" }
```

Confirmed so far:
- Header row `api-key` exists, is spelled correctly (lowercase), and is ✅ enabled.
- Authorization tab was set to **No Auth** (to avoid conflicting with the raw header).
- Still 401 → strongly suggests **`{{brevo_api_key}}` is resolving to an empty string**.

**Next step (untested):** In Postman, open the environment editor (eye icon 👁 next to the
environment dropdown) and check the **"Current Value"** column — not just "Initial Value".
Imported environments often leave *Current Value* blank, which sends the header empty.
Paste the key into **Current Value** for `brevo_api_key` (and verify the other four vars), Save,
re-run.

If Current Value *is* populated and it still 401s, suspect stray whitespace/newline in the pasted
key, or that the key was revoked — regenerate in Brevo → Settings → SMTP & API → API Keys.

### Debugging order (important)
1. Get **Brevo direct** (Postman) working first — that isolates Brevo config from our function.
2. Only once Brevo direct returns **201**, test `/api/subscribe`.
   - Brevo direct ✅ + our endpoint ❌ ⇒ problem is **Vercel env vars**.
   - Both ❌ ⇒ problem is **Brevo config** (key/list/template/redirect URL).

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

- [ ] **Resolve the Postman 401** (§5) → confirms the API key itself is good.
- [ ] Run Brevo **direct DOI call** → confirms list `5` + template `2` + redirect URL are all valid.
- [ ] Verify all four `BREVO_*` vars in the **Vercel dashboard** (esp. the `https://` on the
      redirect URL), then redeploy.
- [ ] Re-test `POST /api/subscribe` → expect `200 {ok:true}`.
- [ ] Full end-to-end: submit via the site UI → receive DOI email → click confirm → verify the
      contact appears in Brevo list `5` → confirm redirect lands correctly.
- [ ] **Authenticate the sending domain** in Brevo (Settings → Senders & IP). Currently the
      sender is `victorsantows@gmail.com` and Brevo warns *"Your domain is not authenticated…we
      replace your domain with [@brevosend.com]"*. Not blocking, but hurts deliverability
      (spam-folder risk) — should be done before real launch.
- [ ] Consider swapping the DOI template's sender to a branded studio address once the domain
      is authenticated.

---

## 8. Uncommitted work in the tree

```
 M .gitignore     # adds: postman/*.postman_environment.json
?? postman/       # collection (safe) + environment (gitignored, has the key)
```

Committing `postman/` will include **only** the collection — the environment file is ignored.

---

## 9. Related context

- Full site docs: [`PROJECT_DOCUMENTATION.md`](PROJECT_DOCUMENTATION.md) (§4.2 covers the
  newsletter's pre-Brevo state; §5 has the original provider comparison/costs analysis).
- The other integration, **EmailJS** (contact forms), is separate and unaffected. It still has
  open pre-launch items — no spam protection, and no success/error UI on the main contact form.
  See `PROJECT_DOCUMENTATION.md` §4.1.
