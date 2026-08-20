// Vercel serverless function — newsletter subscription via Brevo (double opt-in).
//
// Runs server-side ONLY, so the Brevo API key is never exposed to the browser.
// Set these in the Vercel project's Environment Variables (NOT VITE_-prefixed —
// they must stay server-side):
//   BREVO_API_KEY              — your Brevo API v3 key
//   BREVO_LIST_ID              — id of the contact list confirmed subscribers join
//   BREVO_DOI_TEMPLATE_ID_PT   — id of the Portuguese DOI email template
//   BREVO_DOI_TEMPLATE_ID_EN   — id of the English DOI email template
//   BREVO_DOI_TEMPLATE_ID      — fallback template id, used if the locale-specific
//                                one above isn't set (e.g. only one language exists
//                                yet, or an unrecognized locale was sent)
//   BREVO_DOI_REDIRECT_URL     — URL Brevo redirects to after the user confirms
//
// The site has no URL-based locale (see src/i18n/index.js — language lives only in
// i18next state / localStorage), so the client tells us which language was active
// via `locale` in the request body ("en" or "pt"). Defaults to "pt" — the site's
// primary market — if missing or unrecognized.
//
// Note: this endpoint only runs on Vercel (or `vercel dev`). It will 404 under
// plain `npm run dev` (Vite doesn't execute serverless functions).

const EMAIL_RE = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

export default async function handler(req, res) {
  if (req.method !== "POST") {
    res.setHeader("Allow", "POST");
    return res.status(405).json({ error: "method_not_allowed" });
  }

  // Vercel's Node runtime parses JSON bodies into req.body; guard just in case.
  let body = req.body;
  if (typeof body === "string") {
    try { body = JSON.parse(body); } catch { body = {}; }
  }

  const email = (body?.email || "").trim().toLowerCase();
  if (!EMAIL_RE.test(email)) {
    return res.status(400).json({ error: "invalid_email" });
  }

  const locale = body?.locale === "en" ? "en" : "pt";
  const localeTemplateId =
    locale === "en" ? process.env.BREVO_DOI_TEMPLATE_ID_EN : process.env.BREVO_DOI_TEMPLATE_ID_PT;

  const apiKey = process.env.BREVO_API_KEY;
  const listId = Number(process.env.BREVO_LIST_ID);
  const templateId = Number(localeTemplateId || process.env.BREVO_DOI_TEMPLATE_ID);
  const redirectionUrl = process.env.BREVO_DOI_REDIRECT_URL;

  if (!apiKey || !listId || !templateId || !redirectionUrl) {
    console.error("[subscribe] Missing Brevo env vars");
    return res.status(500).json({ error: "server_misconfigured" });
  }

  try {
    const brevoRes = await fetch(
      "https://api.brevo.com/v3/contacts/doubleOptinConfirmation",
      {
        method: "POST",
        headers: {
          accept: "application/json",
          "content-type": "application/json",
          "api-key": apiKey,
        },
        body: JSON.stringify({
          email,
          includeListIds: [listId],
          templateId,
          redirectionUrl,
          // Stored on the contact so a Brevo Automation workflow (e.g. a
          // welcome email sent after DOI confirmation) can branch on it —
          // the workflow only sees "contact added to list", not which DOI
          // template/locale sent them there, so this is the only way it
          // knows which language to reply in. Must be predefined as a
          // contact attribute in Brevo first (see BREVO_SETUP_GUIDE.md).
          attributes: { LOCALE: locale.toUpperCase() },
        }),
      }
    );

    // Brevo returns 201/204 on success (the DOI email is queued).
    if (brevoRes.status === 201 || brevoRes.status === 204) {
      return res.status(200).json({ ok: true });
    }

    const data = await brevoRes.json().catch(() => ({}));

    // Already subscribed / pending confirmation: treat as success so we don't
    // leak whether an address is on the list, and the UX stays friendly.
    if (brevoRes.status === 400 && data?.code === "duplicate_parameter") {
      return res.status(200).json({ ok: true, already: true });
    }

    console.error("[subscribe] Brevo error", brevoRes.status, data);
    // Relaying Brevo's own status/code/message (its generic error shape, not
    // user PII) so failures are diagnosable from the browser Network tab
    // without needing Vercel dashboard log access.
    return res.status(502).json({
      error: "provider_error",
      providerStatus: brevoRes.status,
      providerCode: data?.code,
      providerMessage: data?.message,
    });
  } catch (err) {
    console.error("[subscribe] request failed", err);
    return res.status(500).json({ error: "unexpected" });
  }
}
