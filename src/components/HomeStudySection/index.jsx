import { useContext } from "react";
import { CommonContext } from "../../providers/CommonContext";
import SectionTopTitle from "../SectionTopTitle";
import {
  StudySection,
  StudyInner,
  StudyHeader,
  StudyHeaderLeft,
  StudyBigTitle,
  StudyExploreCTA,
  StudyGrid,
  StudyRightColumn,
  StudyFeaturedCard,
  StudySmallCard,
  StudyCardImageWrap,
  StudyCardImage,
  StudyCardDecor,
  StudyCardContent,
  StudyCardCategory,
  StudyCategoryDot,
  StudyCardTitle,
  StudyCardCTA,
} from "./HomeStudyElements";

const StudyCard = ({ card, ctaLabel, featured = false }) => {
  const CardWrapper = featured ? StudyFeaturedCard : StudySmallCard;
  return (
    <CardWrapper>
      <StudyCardImageWrap>
        <StudyCardImage src={`/${card.imagePath}`} alt={card.title} loading="lazy" />
        <StudyCardDecor />
      </StudyCardImageWrap>
      <StudyCardContent>
        <StudyCardCategory>
          <StudyCategoryDot />
          {card.category}
        </StudyCardCategory>
        <StudyCardTitle>{card.title}</StudyCardTitle>
        <StudyCardCTA to={card.ctaUrl}>{ctaLabel}</StudyCardCTA>
      </StudyCardContent>
    </CardWrapper>
  );
};

const HomeStudySection = () => {
  const { t } = useContext(CommonContext);
  const cards = t("homePage.studyFeaturedCards", { returnObjects: true });
  const ctaLabel = t("homePage.studyCardCta");

  return (
    <StudySection>
      <StudyInner>
        <StudyHeader>
          <StudyHeaderLeft>
            <SectionTopTitle>{t("homePage.studyTitle")}</SectionTopTitle>
            <StudyBigTitle>{t("homePage.studySectionTitle")}</StudyBigTitle>
          </StudyHeaderLeft>
          <StudyExploreCTA to="/study">{t("homePage.studySectionCta")}</StudyExploreCTA>
        </StudyHeader>

        <StudyGrid>
          <StudyCard card={cards[0]} ctaLabel={ctaLabel} featured />
          <StudyRightColumn>
            <StudyCard card={cards[1]} ctaLabel={ctaLabel} />
            <StudyCard card={cards[2]} ctaLabel={ctaLabel} />
          </StudyRightColumn>
        </StudyGrid>
      </StudyInner>
    </StudySection>
  );
};

export default HomeStudySection;
