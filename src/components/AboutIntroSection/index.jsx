import { useContext } from "react";
import { CommonContext } from "../../providers/CommonContext";
import SectionTopTitle from "../SectionTopTitle";
import {
  AboutIntroSection,
  AboutIntroInner,
  AboutIntroContent,
  AboutIntroTitle,
  AboutIntroBody,
  AboutIntroCTA,
  AboutIntroImageWrap,
  AboutIntroImage,
  AboutIntroDecor,
} from "./AboutIntroElements";

const AboutIntroSectionComponent = () => {
  const { t } = useContext(CommonContext);

  return (
    <AboutIntroSection>
      <AboutIntroInner>
        <AboutIntroContent>
          <SectionTopTitle>{t("aboutPage.sectionLabel")}</SectionTopTitle>
          <AboutIntroTitle>{t("aboutPage.sectionTitle")}</AboutIntroTitle>
          <AboutIntroBody>
            <p>{t("aboutPage.pageDescription1")}</p>
            <p>{t("aboutPage.pageDescription2")}</p>
            <p>{t("aboutPage.pageDescription3")}</p>
          </AboutIntroBody>
          <AboutIntroCTA onClick={() => document.getElementById("our-team")?.scrollIntoView({ behavior: "smooth" })}>
            {t("aboutPage.teamCta")}
          </AboutIntroCTA>
        </AboutIntroContent>

        <AboutIntroImageWrap>
          <AboutIntroImage src="/about/SobreaFenixStudios (0;00;08;17).jpg" alt={t("aboutPage.sectionTitle")} loading="lazy" />
          <AboutIntroDecor />
        </AboutIntroImageWrap>
      </AboutIntroInner>
    </AboutIntroSection>
  );
};

export default AboutIntroSectionComponent;
