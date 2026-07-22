import useEmblaCarousel from "embla-carousel-react";
import emblaCarouselAutoScroll from "embla-carousel-auto-scroll";
import {
  ClientsSection,
  ClientsCarouselWrap,
  ClientsEmblaContainer,
  ClientsEmblaSlide,
  FilmStripCard,
  FilmStripLogoWrap,
} from "./HomeClientsElements";

import Logo1 from "../../images/clientLogos/AMC+_Logo.png";
import Logo2 from "../../images/clientLogos/Disney+_logo.png";
import Logo3 from "../../images/clientLogos/globofilmes_Logo.png";
import Logo4 from "../../images/clientLogos/HBOmax_Logo.png";
import Logo5 from "../../images/clientLogos/Hulu_Logo.png";
import Logo6 from "../../images/clientLogos/Netflix_logo.png";
import Logo7 from "../../images/clientLogos/Paramount+_Logo.png";
import Logo8 from "../../images/clientLogos/Paris_logo.png";
import Logo9 from "../../images/clientLogos/Primevideo_Logo.png";
import Logo10 from "../../images/clientLogos/Sony_logo.png";
import Logo11 from "../../images/clientLogos/Starz_logo.png";
import Logo12 from "../../images/clientLogos/Telecine_Logo.png";

const logos = [
  { path: Logo1, alt: "AMC+" },
  { path: Logo2, alt: "Disney+" },
  { path: Logo3, alt: "Globo Filmes" },
  { path: Logo4, alt: "HBO Max" },
  { path: Logo5, alt: "Hulu" },
  { path: Logo6, alt: "Netflix" },
  { path: Logo7, alt: "Paramount" },
  { path: Logo8, alt: "Paris" },
  { path: Logo9, alt: "Prime Video" },
  { path: Logo10, alt: "Sony" },
  { path: Logo11, alt: "Starz" },
  { path: Logo12, alt: "Telecine" },
];

const autoScrollOpts = (direction) => ({
  direction,
  stopOnInteraction: false,
  stopOnMouseEnter: false,
  speed: 1,
});

const LogoStrip = ({ emblaRef, items }) => (
  <ClientsCarouselWrap>
    <div style={{ overflow: "hidden" }} ref={emblaRef}>
      <ClientsEmblaContainer>
        {items.map((logo, index) => (
          <ClientsEmblaSlide key={index}>
            <FilmStripCard>
              <FilmStripLogoWrap>
                <img src={logo.path} alt={logo.alt} loading="lazy" />
              </FilmStripLogoWrap>
            </FilmStripCard>
          </ClientsEmblaSlide>
        ))}
      </ClientsEmblaContainer>
    </div>
  </ClientsCarouselWrap>
);

const HomeClientsSection = () => {
  const [emblaRef1] = useEmblaCarousel(
    { loop: true },
    [emblaCarouselAutoScroll(autoScrollOpts("forward"))]
  );
  const [emblaRef2] = useEmblaCarousel(
    { loop: true },
    [emblaCarouselAutoScroll(autoScrollOpts("backward"))]
  );

  return (
    <ClientsSection>
      <LogoStrip emblaRef={emblaRef1} items={logos} />
      <LogoStrip emblaRef={emblaRef2} items={[...logos].reverse()} />
    </ClientsSection>
  );
};

export default HomeClientsSection;
