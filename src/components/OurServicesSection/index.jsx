import { useContext, useState, useEffect, useRef, useCallback } from "react";
import { CommonContext } from "../../providers/CommonContext";
import SectionTopTitle from "../SectionTopTitle";
import {
  OurServicesSectionWrapper,
  OurServicesInner,
  OurServicesContent,
  OurServicesTitle,
  OurServicesExploreCta,
  OurServicesCarouselArea,
  OurServicesFadeArea,
  ServiceCard,
  ServiceCardTitle,
  ServiceCardBody,
  ServiceCardDescription,
  ServiceCardCta,
} from "./OurServicesElements";

const AUTOPLAY_DELAY = 5000;

// Scoped to this section only (not shared with ServicesPresentation) —
// order must match servicesPresentation.postProductionCards / vfxCards in the locale files.
const ABOUT_SERVICE_IMAGES = {
  "post-production": [
    "/services_photos_1360x547/Color Grading 1360x547 (0_00_00_11).jpg",
    "/services_photos_1360x547/Conform 1360x547 (0_00_03_08).jpg",
    "/services_photos_1360x547/Coordenação de Pós 1360x547 (0_00_01_11).jpg",
    "/services_photos_1360x547/Lab and Data Management 1360x547 (0_00_04_17).jpg",
    "/services_photos_1360x547/Master and Delivery 1360x547 (0_00_02_08).jpg",
  ],
  vfx: [
    "/services_photos_1360x547/3D 1360x547 (0_00_09_00).jpg",
    "/services_photos_1360x547/Compositing 1360x547 (0_00_06_24).jpg",
    "/services_photos_1360x547/Supervisão 1360x547 (0_00_11_01).jpg",
    "/services_photos_1360x547/Motion Graphics 1360x547 (0_00_09_23).jpg",
    "/services_photos_1360x547/Visualização 1360x547 (0_00_07_23).jpg",
  ],
};

const buildCards = (postProductionCards, vfxCards) => {
  const cards = [];
  const length = Math.max(postProductionCards.length, vfxCards.length);

  for (let i = 0; i < length; i++) {
    if (postProductionCards[i]) {
      cards.push({
        ...postProductionCards[i],
        service: "post-production",
        img: ABOUT_SERVICE_IMAGES["post-production"][i],
      });
    }
    if (vfxCards[i]) {
      cards.push({
        ...vfxCards[i],
        service: "vfx",
        img: ABOUT_SERVICE_IMAGES.vfx[i],
      });
    }
  }

  return cards;
};

const OurServicesSection = () => {
  const { t } = useContext(CommonContext);
  const [activeIndex, setActiveIndex] = useState(0);
  const intervalRef = useRef(null);

  const postProductionCards = t("servicesPresentation.postProductionCards", { returnObjects: true });
  const vfxCards = t("servicesPresentation.vfxCards", { returnObjects: true });
  const cards = buildCards(postProductionCards, vfxCards);

  const restartAutoplay = useCallback(() => {
    clearInterval(intervalRef.current);
    intervalRef.current = setInterval(() => {
      setActiveIndex((i) => (i + 1) % cards.length);
    }, AUTOPLAY_DELAY);
  }, [cards.length]);

  useEffect(() => {
    restartAutoplay();
    return () => clearInterval(intervalRef.current);
  }, [restartAutoplay]);

  return (
    <OurServicesSectionWrapper>
      <OurServicesInner>
        {/* Left column */}
        <OurServicesContent>
          <SectionTopTitle>{t("aboutPage.servicesSectionLabel")}</SectionTopTitle>
          <OurServicesTitle>{t("aboutPage.servicesTitle")}</OurServicesTitle>
          <OurServicesExploreCta to="/services">
            {t("aboutPage.servicesExploreCta")}
          </OurServicesExploreCta>
        </OurServicesContent>

        {/* Right column — fading sequence of cards */}
        <OurServicesCarouselArea>
          <OurServicesFadeArea>
            {cards.map((card, i) => (
              <ServiceCard
                key={i}
                to={card.service === "vfx" ? "/services/vfx" : "/services/post-production"}
                $img={card.img}
                $active={i === activeIndex}
              >
                <ServiceCardBody>
                  <ServiceCardTitle>{card.title}</ServiceCardTitle>
                  <ServiceCardDescription>{card.text}</ServiceCardDescription>
                  <ServiceCardCta>
                    {t("aboutPage.serviceCardCta")}
                  </ServiceCardCta>
                </ServiceCardBody>
              </ServiceCard>
            ))}
          </OurServicesFadeArea>
        </OurServicesCarouselArea>
      </OurServicesInner>
    </OurServicesSectionWrapper>
  );
};

export default OurServicesSection;
