import { useContext } from "react";
import { useNavigate } from "react-router-dom";
import { CommonContext } from "../../providers/CommonContext";
import SectionTopTitle from "../SectionTopTitle";
import {
  StudyHeroSectionWrapper,
  StudyHeroInner,
  StudyHeroImageWrap,
  StudyHeroImage,
  StudyHeroContent,
  StudyHeroTitle,
  StudyHeroBody,
  StudyHeroCTA,
} from "./StudyHeroElements";

const StudyHeroSection = () => {
  const { t } = useContext(CommonContext);
  const navigate = useNavigate();

  return (
    <StudyHeroSectionWrapper>
      <StudyHeroInner>
        <StudyHeroImageWrap>
          <StudyHeroImage
            src="/study/study-fenix.png"
            alt={t("studyPage.heroTitle")}
            loading="lazy"
          />
        </StudyHeroImageWrap>

        <StudyHeroContent>
          <SectionTopTitle>{t("studyPage.heroLabel")}</SectionTopTitle>
          <StudyHeroTitle>{t("studyPage.heroTitle")}</StudyHeroTitle>
          <StudyHeroBody>
            <p>{t("studyPage.subtitle1")}</p>
            <p>{t("studyPage.subtitle2")}</p>
          </StudyHeroBody>
          <StudyHeroCTA onClick={() => navigate("/")}>
            {t("studyPage.heroCta")}
          </StudyHeroCTA>
        </StudyHeroContent>
      </StudyHeroInner>
    </StudyHeroSectionWrapper>
  );
};

export default StudyHeroSection;
