# Domain & Hosting — GoDaddy + Vercel

Reference for the client call about setting up the production domain. Answers the three
questions directly, then walks through the actual setup.

---

## TL;DR

- **GoDaddy hosts the domain name only** — not the website files, not env vars, not the
  serverless function. Keep it that way.
- **Vercel stays the host** — files, build, `api/subscribe.js`, all env vars. Nothing about
  hosting changes; you just point the domain at it.
- **Connect them via DNS**: buy/keep the domain at GoDaddy, add a couple of DNS records
  there that point to Vercel. Takes minutes, not a migration.
- **The Vercel account question is separate and worth resolving today** — see §3.

---

## 1. Why GoDaddy can't host this site (the files)

GoDaddy's own hosting product is built for traditional static/PHP sites (or WordPress) —
upload files via FTP, no build step. This project needs more than that:

- **A build step**: the site is written in JSX/Vite and compiled (`npm run build`) into
  static output. GoDaddy hosting doesn't run that pipeline for you.
- **A serverless function**: `api/subscribe.js` (the newsletter integration) runs as a
  Vercel serverless function — real backend code that executes per-request. GoDaddy's
  standard hosting has no equivalent; the newsletter would simply stop working.
- **SPA routing**: `vercel.json` has a rewrite rule so deep links and page refreshes
  resolve correctly for a single-page React app. That's Vercel-specific config with no
  direct GoDaddy equivalent.

Moving file hosting to GoDaddy would mean losing the newsletter feature entirely and
rebuilding the deploy pipeline from scratch, for no real benefit. There's no reason to do
this — Vercel already does what a modern React app needs, for free at this traffic level.

**So: GoDaddy = where the domain name is registered. Vercel = where the site actually
runs.** This is a completely standard split — most professional sites work this way,
registrar and host are rarely the same company.

---

## 2. Connecting the GoDaddy domain to Vercel

### In Vercel

1. Open the project → **Settings → Domains**.
2. Add the domain (e.g. `fenixstudios.com`) and, separately, `www.fenixstudios.com` if you
   want both to work (Vercel lets you redirect one to the other — pick which is canonical).
3. Vercel will show you **exact DNS records to add** — typically an `A` record for the
   root/apex domain and a `CNAME` for `www`. **Copy the values Vercel shows you at that
   moment** rather than reusing values from memory or an old guide — Vercel is the
   authoritative source and these can change.

### In GoDaddy

4. Go to the domain → **DNS Management** (sometimes called "Manage DNS").
5. Add the records exactly as Vercel specified (same type, name/host, and value/points-to).
6. **Don't delete existing records you don't recognize** without checking first — if the
   client already has email set up on this domain (e.g. Google Workspace `MX` records for
   `contato@fenixstudios.com`), those must stay untouched. Only add/modify the records
   Vercel asked for.

### Decision point: individual records vs. switching nameservers

Vercel also offers a "use Vercel as your DNS" option (pointing the domain's nameservers
entirely to Vercel), which hands over *all* DNS management, not just the site's records.

- **Recommended for this project**: keep GoDaddy as the DNS host, just add the specific
  A/CNAME records Vercel asks for. Lower risk of breaking something else on the domain
  (email, other subdomains), and the client keeps DNS control in the platform they already
  know.
- Only switch nameservers to Vercel if there's nothing else on the domain to worry about
  and you specifically want Vercel to manage everything.

### After adding the records

7. Propagation is usually fast (minutes to a few hours), rarely up to 24–48h. Vercel's
   Domains page shows a status indicator that flips to **"Valid Configuration"** once it
   sees the records.
8. **SSL/HTTPS is automatic** — Vercel provisions a certificate once the domain resolves
   to it. No separate certificate purchase or setup needed.

---

## 3. The Vercel account question — resolve this in the call

The project currently deploys from **your personal Vercel account**, not the client's. This
is worth surfacing explicitly rather than leaving implicit — it affects who has ultimate
control, who gets billed if usage ever exceeds the free tier, and what happens if the
working relationship ends.

Two reasonable paths, both fine — this is a business decision, not a technical one:

| Option | What it means | When it makes sense |
|---|---|---|
| **Transfer the project to the client's own Vercel account** | Client creates a Vercel account (or you create one for them); use Vercel's **Transfer Project** feature to move this exact project over — deployment history, env vars, and domain config all come with it. You'd be added back as a collaborator if you're still maintaining it. | Client wants full ownership/control, standard for a site meant to outlive the current engagement. |
| **Keep it on your account, client just owns the domain** | Domain stays registered to the client at GoDaddy (client should always own their own domain regardless of the hosting choice); site hosting stays under your Vercel account as part of an ongoing service relationship. | Common in retainer/managed-hosting arrangements, as long as it's clearly communicated and the client is fine with it. |

**The one thing that shouldn't be ambiguous either way: the client should own the GoDaddy
domain registration itself**, regardless of which Vercel account hosts the site — that's
the piece that's expensive/disruptive to untangle later if it's registered under the wrong
account.

If moving to the client's account, Vercel's transfer flow is: **Project Settings → Advanced
→ Transfer Project** (or similar — Vercel's UI wording may vary slightly by the time you do
this). It asks for the destination account/team and handles moving env vars and domains
along with it.

---

## 4. Housekeeping once the real domain is live

A few things reference the current `fenix-studio-eight.vercel.app` URL directly and need
updating once the real domain is connected — otherwise they'll keep pointing at the old
Vercel URL even after the domain switch:

- **`BREVO_DOI_REDIRECT_URL`** (Vercel env var) — currently
  `https://fenix-studio-eight.vercel.app/`. Update to the new domain, redeploy. (See
  `BREVO_SETUP_GUIDE.md` §2 — same "must include `https://`" gotcha applies.)
- **Welcome email templates** — [`brevo/welcome-template.pt.html`](brevo/welcome-template.pt.html)
  and [`brevo/welcome-template.en.html`](brevo/welcome-template.en.html) hardcode the CTA
  button's link to `https://fenix-studio-eight.vercel.app/`. Update both in Brevo's template
  editor (and in these repo files, to keep them in sync) once the domain changes.
- **`src/components/Seo/Data.js` and `src/components/Seo/index.jsx`** — the default social
  share image URL is hardcoded to `http://fenix-studios.com/src/images/logo.png`. Two
  things to fix here, not just one:
  1. It's `http://`, not `https://` — should be secure.
  2. It points at a source file path (`/src/images/...`), which won't resolve in a
     production build (Vite hashes and moves bundled assets). This should point at a real
     public, stable asset URL (e.g. something served from `public/`) once the real domain
     is live — worth fixing regardless of which domain ends up in use.

## 5. One inconsistency to resolve with the client on this call

The codebase already references **two different spellings** of the domain, and they
disagree:

- `src/components/Seo/Data.js` (SEO image URLs): **`fenix-studios.com`** (with a hyphen)
- `src/i18n/locales/{pt,en-us}/common.json` (`contactEmail`, shown on the site): **`fenixstudios.com`** (no hyphen)

Worth asking the client directly: **which domain did they actually register at GoDaddy —
`fenixstudios.com` or `fenix-studios.com`?** Whichever it is, the other one needs fixing in
the codebase (probably the SEO file, since the contact email is customer-facing and more
likely to be the "real" one) — otherwise social share previews will point at the wrong
domain even after everything else is connected correctly.

---

## 6. Quick talking points for the call

- "GoDaddy will handle the domain name; the actual website keeps running on Vercel like it
  does now — we're just pointing your domain at it."
- "This won't break anything that's already working, including the newsletter."
- "We should decide today whether the Vercel project moves to your own account, or stays
  managed under mine as part of our ongoing arrangement — either is fine, just want it
  explicit."
- "Can you confirm the exact domain you registered — `fenixstudios.com` or
  `fenix-studios.com`? The code currently has both, and needs to be consistent with
  whichever one is real."
- "If you already have email set up on this domain (Google Workspace, etc.), let's confirm
  those DNS records before I touch anything, so we don't break your inbox."
