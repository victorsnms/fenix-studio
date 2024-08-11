import useEmblaCarousel from "embla-carousel-react";
import { EmblaFilmContainer, EmblaFilmSlide, MarqueeContainer, MarqueeWrapper } from "./MarqueeInfiniteElements";
import { useTranslation } from "react-i18next";
import { EmblaCarousel } from "../LogoList/LogoListElements";
import emblaCarouselAutoScroll from "embla-carousel-auto-scroll";
import BlurredImage from "../BlurredImage";

const MarqueeInfinite = ({ imageSection = "marqueeImages" }) => {
  const [t] = useTranslation(["images"]);
  const images = t(`${imageSection}`, { returnObjects: true });
  const [emblaRef] = useEmblaCarousel({ loop: true, breakpoints: { "(max-width: 768px)": { loop: true, align: "start" } } }, [emblaCarouselAutoScroll({ stopOnInteraction: false, stopOnMouseEnter: true, speed: 1 })]);

  return (
    <MarqueeWrapper>
      <MarqueeContainer threshold={1} transitionDelay={0.5}>
        <EmblaCarousel qty={images.length} ref={emblaRef}>
          <EmblaFilmContainer>
            {images.map((image, index) => (
              <EmblaFilmSlide key={index}>
                <BlurredImage src={image.path} alt={image.alt} pathSmall={image.pathSmall} />
              </EmblaFilmSlide>
            ))}
          </EmblaFilmContainer>
        </EmblaCarousel>
      </MarqueeContainer>
    </MarqueeWrapper>
  );
};

export default MarqueeInfinite;
