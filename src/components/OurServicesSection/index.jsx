import { useContext, useState, useCallback, useEffect } from "react";
import useEmblaCarousel from "embla-carousel-react";
import { CommonContext } from "../../providers/CommonContext";
import SectionTopTitle from "../SectionTopTitle";
import {
  OurServicesSectionWrapper,
  OurServicesInner,
  OurServicesContent,
  OurServicesTitle,
  OurServicesExploreCta,
  OurServicesCarouselArea,
  OurServicesEmblaViewport,
  OurServicesEmblaContainer,
  OurServicesEmblaSlide,
  ServiceNavBtn,
  ServiceCard,
  ServiceCardTitle,
  ServiceCardBody,
  ServiceCardDescription,
  ServiceCardCta,
} from "./OurServicesElements";

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

const OurServicesSection = () => {
  const { t } = useContext(CommonContext);
  const [canScrollPrev, setCanScrollPrev] = useState(false);
  const [canScrollNext, setCanScrollNext] = useState(true);

  const cards = t("aboutPage.serviceCards", { returnObjects: true });

  const [emblaRef, emblaApi] = useEmblaCarousel({ loop: false, align: "start" });

  const updateScrollState = useCallback(() => {
    if (!emblaApi) return;
    setCanScrollPrev(emblaApi.canScrollPrev());
    setCanScrollNext(emblaApi.canScrollNext());
  }, [emblaApi]);

  useEffect(() => {
    if (!emblaApi) return;
    updateScrollState();
    emblaApi.on("select", updateScrollState);
    emblaApi.on("reInit", updateScrollState);
    return () => {
      emblaApi.off("select", updateScrollState);
      emblaApi.off("reInit", updateScrollState);
    };
  }, [emblaApi, updateScrollState]);

  const scrollPrev = useCallback(() => emblaApi && emblaApi.scrollPrev(), [emblaApi]);
  const scrollNext = useCallback(() => emblaApi && emblaApi.scrollNext(), [emblaApi]);

  return (
    <OurServicesSectionWrapper>
      <OurServicesInner>
        {/* Left column */}
        <OurServicesContent>
          <SectionTopTitle>{t("aboutPage.servicesSectionLabel")}</SectionTopTitle>
          <OurServicesTitle>{t("aboutPage.servicesTitle")}</OurServicesTitle>
          <OurServicesExploreCta href="/services">
            {t("aboutPage.servicesExploreCta")}
          </OurServicesExploreCta>
        </OurServicesContent>

        {/* Right column — carousel */}
        <OurServicesCarouselArea>
          <ServiceNavBtn
            onClick={scrollPrev}
            aria-label="Previous"
            $hidden={!canScrollPrev}
            $side="left"
          >
            <ArrowLeft />
          </ServiceNavBtn>

          <OurServicesEmblaViewport ref={emblaRef}>
            <OurServicesEmblaContainer>
              {cards.map((card, i) => (
                <OurServicesEmblaSlide key={i}>
                  <ServiceCard $img={card.imagePath}>
                    <ServiceCardBody>
                      <ServiceCardTitle>{card.title}</ServiceCardTitle>
                      <ServiceCardDescription>{card.description}</ServiceCardDescription>
                      <ServiceCardCta href={card.ctaUrl}>
                        {t("aboutPage.serviceCardCta")}
                      </ServiceCardCta>
                    </ServiceCardBody>
                  </ServiceCard>
                </OurServicesEmblaSlide>
              ))}
            </OurServicesEmblaContainer>
          </OurServicesEmblaViewport>

          <ServiceNavBtn
            onClick={scrollNext}
            aria-label="Next"
            $hidden={!canScrollNext}
            $side="right"
          >
            <ArrowRight />
          </ServiceNavBtn>
        </OurServicesCarouselArea>
      </OurServicesInner>
    </OurServicesSectionWrapper>
  );
};

export default OurServicesSection;
