import { useState, useContext } from "react";
import { CommonContext } from "../../providers/CommonContext";
import {
  NewsletterSection,
  NewsletterInner,
  NewsletterTitle,
  NewsletterFormColumn,
  NewsletterFormWrap,
  NewsletterInput,
  NewsletterButton,
  NewsletterMessage,
} from "./HomeNewsletterElements";

const EMAIL_RE = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

const HomeNewsletterSection = () => {
  const { t } = useContext(CommonContext);
  const [email, setEmail] = useState("");
  // idle | loading | success | error | invalid
  const [status, setStatus] = useState("idle");

  const handleSubscribe = async () => {
    if (status === "loading") return;

    if (!EMAIL_RE.test(email.trim())) {
      setStatus("invalid");
      return;
    }

    setStatus("loading");
    try {
      const res = await fetch("/api/subscribe", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email: email.trim() }),
      });

      if (res.ok) {
        setStatus("success");
        setEmail("");
      } else {
        setStatus("error");
      }
    } catch {
      setStatus("error");
    }
  };

  const handleChange = (e) => {
    setEmail(e.target.value);
    // Clear any prior message once the user starts editing again
    if (status !== "idle" && status !== "loading") setStatus("idle");
  };

  const handleKeyDown = (e) => {
    if (e.key === "Enter") handleSubscribe();
  };

  const message =
    status === "success"
      ? { type: "success", text: t("newsletter.success") }
      : status === "error"
      ? { type: "error", text: t("newsletter.error") }
      : status === "invalid"
      ? { type: "error", text: t("newsletter.invalid") }
      : null;

  return (
    <NewsletterSection>
      <NewsletterInner>
        <NewsletterTitle>{t("newsletter.title")}</NewsletterTitle>
        <NewsletterFormColumn>
          <NewsletterFormWrap>
            <NewsletterInput
              type="email"
              placeholder={t("newsletter.placeholder")}
              value={email}
              onChange={handleChange}
              onKeyDown={handleKeyDown}
              aria-label={t("newsletter.placeholder")}
              disabled={status === "loading"}
            />
            <NewsletterButton
              onClick={handleSubscribe}
              disabled={status === "loading"}
            >
              {status === "loading" ? t("newsletter.sending") : t("newsletter.cta")}
            </NewsletterButton>
          </NewsletterFormWrap>
          {message && (
            <NewsletterMessage $type={message.type} role="status" aria-live="polite">
              {message.text}
            </NewsletterMessage>
          )}
        </NewsletterFormColumn>
      </NewsletterInner>
    </NewsletterSection>
  );
};

export default HomeNewsletterSection;
