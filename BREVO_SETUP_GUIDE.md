# Brevo Newsletter — Setup Guide

Reference for configuring (or re-configuring, e.g. under the client's own Brevo account)
the newsletter double opt-in integration. For current implementation status / known
issues, see [`NEWSLETTER_BREVO_STATUS.md`](NEWSLETTER_BREVO_STATUS.md) instead — this
doc is the "how to set it up from scratch" reference, not a status tracker.

---

## 1. How it works, in one paragraph

The site's newsletter form posts an email address to `/api/subscribe`, a Vercel
serverless function. That function calls Brevo's
`POST /v3/contacts/doubleOptinConfirmation` API with the email, the target list, and a
DOI ("double opt-in") email template. Brevo sends the visitor a confirmation email using
that template; when they click the confirm link, Brevo adds them to the list and
redirects them to a URL we specify. The API key never reaches the browser — it's only
readable by the serverless function, server-side.

---

## 2. Environment variables

Four variables, set in **Vercel → Project → Settings → Environment Variables** (Production
and Preview). Also mirror them into local `.env` for `vercel dev` testing — `.env` is
gitignored, never commit real values.

**None of these get a `VITE_` prefix.** Vite inlines any `VITE_*` variable into the
public client bundle. `BREVO_API_KEY` is a true secret (full account access) — if it
were ever prefixed `VITE_` and deployed, it would be exposed in the browser bundle to
anyone who opens devtools. If that ever happens, treat the key as compromised and
regenerate it immediately.

| Variable | What it is | How to get it |
|---|---|---|
| `BREVO_API_KEY` | Your Brevo API v3 key. Grants full account access via the API. | Brevo → click your account icon (top right) → **SMTP & API** (sometimes under Settings) → **API Keys** tab → **Generate a new API key**. Name it something identifiable (e.g. "Fenix Studio site"). Copy it immediately — Brevo only shows the full value once. |
| `BREVO_LIST_ID` | The numeric ID of the contact list confirmed subscribers get added to. | Brevo → **Contacts → Lists**. Either use an existing list or click **Create a list**. Open the list — the ID is in the URL: `.../contact/list-listing/id/{ID}`. That number is the value. |
| `BREVO_DOI_TEMPLATE_ID_PT` | The numeric ID of the Portuguese double opt-in confirmation email template. | See §3 below — this template isn't created directly; it's generated as a side effect of creating a Brevo **Form** with double opt-in enabled. |
| `BREVO_DOI_TEMPLATE_ID_EN` | The numeric ID of the English double opt-in confirmation email template. | Same process as above, done a second time for the English copy (§3). |
| `BREVO_DOI_TEMPLATE_ID` | Fallback template ID, used only if the locale-specific one above is missing/unset (e.g. before the English template exists yet, or an unrecognized locale is sent). | Same as `BREVO_DOI_TEMPLATE_ID_PT` — keep them in sync, or just set it once to the PT template and forget about it once both locale-specific vars are set. |
| `BREVO_DOI_REDIRECT_URL` | The full URL Brevo redirects the visitor to after they click "confirm" in the email. | Not fetched from Brevo — you decide this. Use the production site's URL, **with the `https://` scheme included** (e.g. `https://fenix-studio-eight.vercel.app/`). Brevo rejects a bare hostname with `invalid_parameter` / "Invalid redirection Url" — this exact mistake caused a production outage once already; double-check the scheme every time this changes. One value works for both languages — the site has no locale-in-URL routing (§6), so it just renders in whatever language is in that browser's `localStorage` when the redirect lands. |

After changing any of these in the Vercel dashboard, you must **redeploy** — env var
changes don't apply to already-built deployments. Vercel usually offers a "Redeploy"
prompt right after saving; otherwise trigger one from the Deployments tab.

---

## 3. Creating the DOI templates (do this twice per Brevo account — once per language)

Brevo doesn't let you author a double-opt-in confirmation template directly from the
Templates screen — the reliable path is to create a subscription **Form** with double
opt-in turned on, which generates a correctly-wired template (with the confirmation
link already embedded) as a side effect. The site sends the visitor's active language
to `/api/subscribe` (§6), so you need **two** templates — one Portuguese, one English —
each with its own template ID.

1. Brevo → **Marketing → Forms** → **Create a form** (or "Subscription form").
2. Give it a name that identifies the language (e.g. "Newsletter DOI — PT" / "— EN" —
   this name doesn't matter functionally, the form itself is never embedded on the
   site, but it keeps the two apart when you're picking a template later).
3. In the form's settings, enable **double opt-in** and select the list from §2 as the
   list new subscribers join.
4. Brevo will prompt you to choose/create a **confirmation email** for the double
   opt-in step. Use the default template it offers, or customize the copy/branding —
   just make sure the confirmation button's link keeps the `{{ doubleoptin }}` merge
   tag as its `href` (Brevo resolves this to the actual per-recipient confirmation URL
   at send time). Branded HTML versions, with this tag already wired into the button,
   are in [`brevo/doi-confirmation-template.pt.html`](brevo/doi-confirmation-template.pt.html)
   and [`brevo/doi-confirmation-template.en.html`](brevo/doi-confirmation-template.en.html)
   — paste the matching one's contents into the template editor's HTML/source view
   (Edit → look for a "code"/"source" toggle in the block options) rather than the
   drag-and-drop builder.
5. Save the form. Brevo now has an active template dedicated to this double opt-in flow.
6. Go to **Campaigns → Templates** (or **Templates → Email templates**), find the
   template that was just created (it's usually named something like "Double opt-in
   confirmation" or similar — the exact copy will match what you set in step 4).
7. Open it. The ID is in the URL: `.../templates/email/edit/{ID}`. That's
   `BREVO_DOI_TEMPLATE_ID_PT` (or `_EN`, depending on which one you just made).
8. Confirm the template is **Active** (not a draft) — an inactive template will cause
   Brevo to reject the API call.
9. Repeat steps 1–8 for the other language.

> ⚠️ **Critical, non-obvious step (found the hard way during a client-account migration,
> 2026-08-21)**: even a template that shows `isActive: true` and `doiTemplate: true` when
> fetched via the API can still be rejected by `doubleOptinConfirmation` with
> `400 invalid_parameter — "An active DOI template does not exist"`. The actual field that
> endpoint checks appears to be the template's internal **`tag`** — a working, originally
> Forms-flow-generated template has `"tag": "optin"`; a template created by duplicating
> another template, or re-selected in a Form's confirmation dropdown, can end up with
> `"tag": ""` (empty) despite looking identical and functioning fine everywhere else in the
> UI. Neither the Forms flow nor duplication reliably sets this tag on its own — it has to
> be checked and fixed by hand:
> 1. Fetch the template via Postman's **Get Template by ID** and check its `"tag"` field.
> 2. If it's not `"optin"`, open the template in Brevo's editor and set its tag to `optin`
>    (look for a tag/label field, possibly under advanced/hidden settings — it isn't always
>    in the main editor view).
> 3. Re-test the direct `doubleOptinConfirmation` call before trusting the template ID.
>
> This is exactly why the migration checklist in §5 says to verify each new template with
> Postman rather than just checking "Active" status in the dashboard — "Active" alone does
> not guarantee it'll actually work for this specific API call.

**The Forms are never used on the site.** Our custom-styled input + button (in
`src/components/HomeNewsletterSection/`) replaces Brevo's embeddable form UI entirely —
we only went through the Forms flow because it's the only way to generate a valid,
correctly-wired DOI template. Once you have both template IDs, you can ignore the forms
(don't publish/embed either of them).

**The logo only needs uploading once.** Both templates reference the same
`src/images/logo.png` via an `<img>` tag. Upload it through Brevo's image manager while
building the first template (see the `<img src="REPLACE_WITH_BREVO_HOSTED_URL">` comment
in either HTML file), then reuse that same hosted URL in the second template instead of
uploading the file twice.

### Customizing the templates

You can freely edit either template's subject line, body copy, and branding (logo, colors)
from the template editor — just don't touch the confirmation button's underlying link/URL
field. If you accidentally break it, easiest fix is to delete the button and re-drag a
fresh "Button" block from the editor's DOI-aware block library (it re-inserts the correct
link automatically) rather than trying to hand-repair the URL.

---

## 4. Verifying the setup (Postman)

There's a Postman collection at `postman/Fenix-Studio-Newsletter.postman_collection.json`
(safe to commit — no secrets) for testing directly against Brevo, bypassing our own API.
Useful when re-configuring under a new account, to isolate "is Brevo configured right?"
from "does our serverless function work?".

Import it, create an environment with `brevo_api_key`, `brevo_list_id`,
`brevo_template_id`, `brevo_redirect_url` (**populate the "Current Value" column, not
just "Initial Value"** — a common Postman import mistake that silently sends empty
headers), then run in order:

1. **Brevo Health Checks** — Get Account (is the key valid?), Get List by ID (does the
   list exist?), Get Template by ID (does the template exist and is it `isActive`?).
2. **Brevo Double Opt-in (direct)** — the exact call our function makes. Success = `201`,
   empty body.
3. **Your Vercel Endpoint** — `POST /api/subscribe`. Success = `200 {ok:true}`.

---

## 5. Checklist: migrating to the client's Brevo account

When the site moves to the client's own Brevo account:

- [ ] Client creates/grants access to a Brevo account (or invites you as a team member
      on theirs — check whether Brevo API keys are account-wide or scoped per user).
- [ ] Generate a fresh `BREVO_API_KEY` under the client's account (§2).
- [ ] Create/confirm the contact list, note its `BREVO_LIST_ID` (§2).
- [ ] Recreate **both** DOI templates via the Forms flow (§3) — **template IDs are
      account-specific and won't carry over**; you must redo this step twice (PT + EN)
      and get new values for `BREVO_DOI_TEMPLATE_ID_PT` and `BREVO_DOI_TEMPLATE_ID_EN`.
      **Then check each one's `tag` field is `"optin"` (§3 warning box)** — a template
      can look completely correct (Active, `doiTemplate: true`) and still fail the actual
      API call if this internal tag wasn't set, which neither the Forms flow nor
      duplicating a template reliably does.
- [ ] `BREVO_DOI_REDIRECT_URL` — reuse the same value unless the production domain is
      also changing. Double-check the `https://` scheme.
- [ ] Update all six vars (`BREVO_API_KEY`, `BREVO_LIST_ID`, `BREVO_DOI_TEMPLATE_ID_PT`,
      `BREVO_DOI_TEMPLATE_ID_EN`, `BREVO_DOI_TEMPLATE_ID` fallback, `BREVO_DOI_REDIRECT_URL`)
      in Vercel (Production **and** Preview environments) with the client's values, then
      redeploy.
- [ ] Re-run the Postman collection (§4) against the new account before considering it
      live.
- [ ] Authenticate the client's sending domain in Brevo (Settings → Senders & IP) —
      without it, confirmation emails send from a generic `@brevosend.com` address and
      are prone to landing in spam. See open item in `NEWSLETTER_BREVO_STATUS.md`.
- [ ] Regenerate/revoke the old (your) API key once the client's is confirmed working,
      so two live keys don't linger.

---

## 6. How the language is picked

The site has **no URL-based locale** (no `/en/`, `/pt/` path segments — see
`src/i18n/index.js`). The active language lives only in `i18next` state, persisted to
`localStorage.getItem("fenix.language")` in the visitor's browser, as either `"en-US"` or
`"pt-BR"`. The server has no other way to see it — no cookie, no header, no URL segment —
so it has to be told explicitly.

- **Client** (`src/components/HomeNewsletterSection/index.jsx`): sends `locale` (`"en"` or
  `"pt"`, derived from `i18next`'s language tag) alongside the email in the
  `POST /api/subscribe` body.
- **Server** (`api/subscribe.js`): reads `locale` from the request body, defaults to `"pt"`
  if missing or unrecognized (the site's primary market), and picks
  `BREVO_DOI_TEMPLATE_ID_EN` or `BREVO_DOI_TEMPLATE_ID_PT` accordingly — falling back to
  `BREVO_DOI_TEMPLATE_ID` if the locale-specific var isn't set.
- **Redirect URL** is the same single value for both languages — since there's no
  locale-in-URL routing, the page just renders in whatever language is already in that
  browser's `localStorage` when the redirect lands (same as any other page load on the
  site). No per-language redirect URL is needed.

One caveat worth knowing: if someone confirms the DOI email on a **different device or
browser** than the one they subscribed from, that second browser's `localStorage` may not
match — they'd land on the site in whatever language that browser/device defaults to,
independent of which template language they received. This is a pre-existing property of
the site's locale system, not something the newsletter integration introduces.

---

## 7. Welcome email automation

Unlike the DOI confirmation email, the "Welcome to Fenix Studios" email that follows it is
**not** triggered by our code — `api/subscribe.js` only ever makes the one
`doubleOptinConfirmation` call. This one is entirely configured on Brevo's side, as an
**Automation workflow** that fires when a contact is added to list `5`.

### Why a `LOCALE` attribute is needed

The automation's trigger only sees "a contact was added to this list" — it has no idea
which DOI template (language) got them there. So the language has to be stored as a
**contact attribute** at signup time instead. `api/subscribe.js` already sends
`attributes: { LOCALE: "PT" | "EN" }` on every subscribe call — the automation workflow
reads that attribute to decide which welcome email to send.

### Setup steps

1. **Create the `LOCALE` attribute first** (if it doesn't already exist): Brevo → Contacts
   → Settings (or a gear/attributes icon near the contacts list) → **Contact Attributes** →
   add a new attribute named `LOCALE`, type **Text** (or **Category** with values `PT`/`EN`
   if Brevo offers that type). Attributes referenced by the API before they exist are
   typically just dropped rather than erroring, so create this *before* testing — otherwise
   you'll get contacts with no `LOCALE` set and have to fix them by hand.
2. **Create both welcome email templates** the same way as the DOI ones (§3) — but this
   time as regular templates (**Campaigns → Templates → Create a template**), not through
   the Forms flow, since there's no `{{ doubleoptin }}` confirmation link needed here.
   Branded HTML is in [`brevo/welcome-template.pt.html`](brevo/welcome-template.pt.html) and
   [`brevo/welcome-template.en.html`](brevo/welcome-template.en.html) — same logo upload
   note applies (reuse the hosted URL from the DOI templates, don't re-upload).
3. **Build the automation**: Brevo → **Marketing → Automations** (or **Automation**) →
   Create a workflow.
   - **Trigger**: look for "Contact added to a list" (or a similarly-named list-membership
     trigger) and set the list to `5`. If Brevo's UI offers a more specific
     "double opt-in confirmed" trigger, that's an equally valid choice — either fires at the
     same point in the flow.
   - **Condition / split step**: branch on the `LOCALE` contact attribute — `LOCALE = EN` →
     one path, else (or `LOCALE = PT`) → the other path. The exact step name varies by
     Brevo's editor version — look for "Condition", "If/Else", or "Split" in the workflow
     step palette.
   - **Send email step** on each branch: pick the matching welcome template from step 2.
   - **Activate** the workflow — draft workflows don't run.
4. **Test**: subscribe with a throwaway address in each language, confirm the DOI email,
   and check that the correct welcome email arrives shortly after. Automations can have a
   short processing delay (not instant like the DOI email), so don't assume it's broken if
   it takes a minute or two.

If your Brevo plan/UI doesn't expose an "Automations" section at all, this feature may
require a paid tier — check Brevo's plan comparison before spending time hunting for it.

---

## 8. Related docs

- [`NEWSLETTER_BREVO_STATUS.md`](NEWSLETTER_BREVO_STATUS.md) — current implementation
  status, known issues, debugging notes.
- [`api/subscribe.js`](api/subscribe.js) — the serverless function itself; header
  comment mirrors the env var table above.
