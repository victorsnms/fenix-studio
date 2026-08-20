// Vercel serverless function — newsletter subscription via Brevo (double opt-in).
//
// Runs server-side ONLY, so the Brevo API key is never exposed to the browser.
// Set these in the Vercel project's Environment Variables (NOT VITE_-prefixed —
// they must stay server-side):
//   BREVO_API_KEY           — your Brevo API v3 key
//   BREVO_LIST_ID           — id of the contact list confirmed subscribers join
//   BREVO_DOI_TEMPLATE_ID   — id of the Brevo "Double opt-in" email template
//   BREVO_DOI_REDIRECT_URL  — URL Brevo redirects to after the user confirms
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

  const apiKey = process.env.BREVO_API_KEY;
  const listId = Number(process.env.BREVO_LIST_ID);
  const templateId = Number(process.env.BREVO_DOI_TEMPLATE_ID);
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
    // Temporarily relaying Brevo's own status/code/message (its generic error
    // shape, not user PII) so this is diagnosable from the browser Network
    // tab without needing Vercel dashboard log access. Remove once the
    // integration is confirmed working end-to-end.
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
