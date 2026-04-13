import { useState, useCallback, useContext } from "react";
import useEmblaCarousel from "embla-carousel-react";
import { CommonContext } from "../../providers/CommonContext";
import {
  ServicesPresentationSection,
  DesktopCards,
  ServiceCard,
  CardOverlay,
  CardInner,
  CardLeft,
  CardTitleVertical,
  CardRight,
  CardBody,
  CardCTA,
  CarouselOuter,
  CarouselViewport,
  CarouselContainer,
  CarouselSlide,
  MobileCard,
  MobileCardOverlay,
  MobileCardContent,
  MobileCardTitle,
  NavBtn,
} from "./ServicesPresentationElements";

const CARD_IMAGES = [
  { en: "/services/Comp_EN.png",          pt: "/services/Comp_PT.png" },
  { en: "/services/MattePainting_PTEN.png", pt: "/services/MattePainting_PTEN.png" },
  { en: "/services/Visu_EN.png",          pt: "/services/Visu_PT.png" },
  { en: "/services/Motion_PTEN.png",      pt: "/services/Motion_PTEN.png" },
  { en: "/services/Sup_EN.png",           pt: "/services/Sup_PT.png" },
];

const ArrowLeft = () => (
  <svg viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M12.5 15L7.5 10L12.5 5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
  </svg>
);

const ArrowRight = () => (
  <svg viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M7.5 5L12.5 10L7.5 15" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
  </svg>
);

const ServicesPresentation = ({ scrollTargetId = "contact-form" }) => {
  const { t, language } = useContext(CommonContext);
  const [hoveredIdx, setHoveredIdx] = useState(null);
  const [emblaRef, emblaApi] = useEmblaCarousel({ loop: true, align: "start" });

  const cards = t("servicesPresentation.cards", { returnObjects: true });
  const isPt = language === "pt-BR";

  const scrollToContact = () => {
    document.getElementById(scrollTargetId)?.scrollIntoView({ behavior: "smooth" });
  };

  const scrollPrev = useCallback(() => emblaApi?.scrollPrev(), [emblaApi]);
  const scrollNext = useCallback(() => emblaApi?.scrollNext(), [emblaApi]);

  return (
    <ServicesPresentationSection>
      {/* Desktop: hover-expand accordion */}
      <DesktopCards onMouseLeave={() => setHoveredIdx(null)}>
        {Array.isArray(cards) &&
          cards.map((card, i) => {
            const expanded = hoveredIdx === i;
            const img = isPt ? CARD_IMAGES[i].pt : CARD_IMAGES[i].en;

            return (
              <ServiceCard
                key={i}
                $img={img}
                $expanded={expanded}
                onMouseEnter={() => setHoveredIdx(i)}
              >
                <CardOverlay $expanded={expanded} />
                <CardInner>
                  {/* Vertical title — always visible, stays on left */}
                  <CardLeft>
                    <CardTitleVertical>{card.title}</CardTitleVertical>
                  </CardLeft>

                  {/* Body + CTA — revealed on expand, clipped when collapsed */}
                  <CardRight $visible={expanded}>
                    <CardBody>{card.text}</CardBody>
                    <CardCTA onClick={scrollToContact}>
                      {t("servicesPresentation.ctaLabel")}
                    </CardCTA>
                  </CardRight>
                </CardInner>
              </ServiceCard>
            );
          })}
      </DesktopCards>

      {/* Tablet / Mobile: Embla carousel, always-expanded layout */}
      <CarouselOuter>
        <CarouselViewport ref={emblaRef}>
          <CarouselContainer>
            {Array.isArray(cards) &&
              cards.map((card, i) => {
                const img = isPt ? CARD_IMAGES[i].pt : CARD_IMAGES[i].en;
                return (
                  <CarouselSlide key={i}>
                    <MobileCard $img={img}>
                      <MobileCardOverlay />
                      <MobileCardContent>
                        <MobileCardTitle>{card.title}</MobileCardTitle>
                        <CardBody>{card.text}</CardBody>
                        <CardCTA onClick={scrollToContact}>
                          {t("servicesPresentation.ctaLabel")}
                        </CardCTA>
                      </MobileCardContent>
                    </MobileCard>
                  </CarouselSlide>
                );
              })}
          </CarouselContainer>
        </CarouselViewport>

        <NavBtn $side="left" onClick={scrollPrev} aria-label="Previous">
          <ArrowLeft />
        </NavBtn>
        <NavBtn $side="right" onClick={scrollNext} aria-label="Next">
          <ArrowRight />
        </NavBtn>
      </CarouselOuter>
    </ServicesPresentationSection>
  );
};

export default ServicesPresentation;
