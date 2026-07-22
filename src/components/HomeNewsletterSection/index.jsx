import { useState, useContext } from "react";
import { CommonContext } from "../../providers/CommonContext";
import {
  NewsletterSection,
  NewsletterInner,
  NewsletterTitle,
  NewsletterFormWrap,
  NewsletterInput,
  NewsletterButton,
} from "./HomeNewsletterElements";

const HomeNewsletterSection = () => {
  const { t } = useContext(CommonContext);
  const [email, setEmail] = useState("");

  const handleSubscribe = () => {
    console.log("Newsletter email:", email);
  };

  const handleKeyDown = (e) => {
    if (e.key === "Enter") handleSubscribe();
  };

  return (
    <NewsletterSection>
      <NewsletterInner>
        <NewsletterTitle>{t("newsletter.title")}</NewsletterTitle>
        <NewsletterFormWrap>
          <NewsletterInput
            type="email"
            placeholder={t("newsletter.placeholder")}
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            onKeyDown={handleKeyDown}
            aria-label={t("newsletter.placeholder")}
          />
          <NewsletterButton onClick={handleSubscribe}>
            {t("newsletter.cta")}
          </NewsletterButton>
        </NewsletterFormWrap>
      </NewsletterInner>
    </NewsletterSection>
  );
};

export default HomeNewsletterSection;
