import { LogoWrapper, LogosMaster, EmblaCarousel, EmblaContainer, EmblaSlide, LogoSection, CarouselButtonLeft, CarouselButtonRight } from "./LogoListElements";

import { useCallback, useContext, useMemo } from "react";
import useEmblaCarousel from "embla-carousel-react";
import Autoplay from "embla-carousel-autoplay";
import FadeInAnimation from "../FadeInAnimation";
import { CommonContext } from "../../providers/CommonContext";

import { FaPlayCircle } from "react-icons/fa";

const LogoList = ({ imgPathArray, noBackground, children }) => {
  const [emblaRef, emblaApi] = useEmblaCarousel({ loop: true, duration: 5, breakpoints: { "(max-width: 768px)": { loop: true, align: "start" } } }, [Autoplay()]);
  const { createLogos } = useContext(CommonContext);
  const logos = useMemo(() => createLogos(imgPathArray), [imgPathArray, createLogos]);

  const scrollPrev = useCallback(() => {
    if (emblaApi) emblaApi.scrollPrev();
  }, [emblaApi]);
  const scrollNext = useCallback(() => {
    if (emblaApi) emblaApi.scrollNext();
  }, [emblaApi]);

  return (
    <LogoSection noBackground={noBackground}>
      <FadeInAnimation threshold={1} transitionDelay={0.5}>
        <LogoWrapper>
          <CarouselButtonLeft className="embla__prev" onClick={scrollPrev}>
            <FaPlayCircle
              style={{
                width: "30px",
                height: "30px",
                color: "#727272",
                transform: "scale(-1, 1)",
                cursor: "pointer",
              }}
            />
          </CarouselButtonLeft>
          {children}
          {logos.length < 6 ? (
            <LogosMaster qty={logos.length}>{logos}</LogosMaster>
          ) : (
            <EmblaCarousel qty={logos.length} ref={emblaRef}>
              <EmblaContainer>
                {logos.map((logo, index) => (
                  <EmblaSlide key={index}>{logo}</EmblaSlide>
                ))}
              </EmblaContainer>
            </EmblaCarousel>
          )}
          <CarouselButtonRight className="embla__next" onClick={scrollNext}>
            <FaPlayCircle
              style={{
                width: "30px",
                height: "30px",
                color: "#727272",
                cursor: "pointer",
              }}
            />
          </CarouselButtonRight>
        </LogoWrapper>
      </FadeInAnimation>
    </LogoSection>
  );
};

export default LogoList;
