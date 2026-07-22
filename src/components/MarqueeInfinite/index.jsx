import useEmblaCarousel from "embla-carousel-react";
import {
  EmblaFilmContainer,
  EmblaFilmSlide,
  FilmCardWrapper,
  FilmCardImageWrap,
  FilmMeta,
  FilmRating,
  FilmRatingText,
  FilmTitle,
  MarqueeContainer,
  MarqueeWrapper,
} from "./MarqueeInfiniteElements";
import { useTranslation } from "react-i18next";
import { EmblaCarousel } from "../LogoList/LogoListElements";
import emblaCarouselAutoScroll from "embla-carousel-auto-scroll";
import BlurredImage from "../BlurredImage";

const ImdbIcon = () => (
  <svg width="32" height="16" viewBox="0 0 32 16" fill="none" xmlns="http://www.w3.org/2000/svg" aria-label="IMDb">
    <rect width="32" height="16" rx="2" fill="#F5C518" />
    <text x="2" y="12" fontFamily="Arial, sans-serif" fontWeight="bold" fontSize="10" fill="#000000">IMDb</text>
  </svg>
);

const StarIcon = () => (
  <svg width="12" height="12" viewBox="0 0 24 24" fill="#F5C518" aria-hidden="true">
    <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
  </svg>
);

const MarqueeInfinite = ({ imageSection = "marqueeImages", noBackground, showMeta }) => {
  const [t] = useTranslation(["images"]);
  const images = t(`${imageSection}`, { returnObjects: true });
  const [emblaRef] = useEmblaCarousel(
    { loop: true, breakpoints: { "(max-width: 768px)": { loop: true, align: "start" } } },
    [emblaCarouselAutoScroll({ stopOnInteraction: false, stopOnMouseEnter: true, speed: 1 })]
  );

  return (
    <MarqueeWrapper noBackground={noBackground}>
      <MarqueeContainer threshold={1} transitionDelay={0.5}>
        <EmblaCarousel qty={images.length} ref={emblaRef}>
          <EmblaFilmContainer>
            {images.map((image, index) =>
              showMeta ? (
                <EmblaFilmSlide key={index}>
                  <FilmCardWrapper href={image.imdbUrl} target="_blank" rel="noopener noreferrer">
                    <FilmCardImageWrap>
                      <BlurredImage src={image.path} alt={image.alt} pathSmall={image.pathSmall} />
                    </FilmCardImageWrap>
                    <FilmMeta>
                      <FilmRating>
                        <ImdbIcon />
                        <StarIcon />
                        <FilmRatingText>{image.rating}</FilmRatingText>
                      </FilmRating>
                      {image.title && <FilmTitle>{image.title}</FilmTitle>}
                    </FilmMeta>
                  </FilmCardWrapper>
                </EmblaFilmSlide>
              ) : (
                <EmblaFilmSlide key={index}>
                  <BlurredImage src={image.path} alt={image.alt} pathSmall={image.pathSmall} />
                </EmblaFilmSlide>
              )
            )}
          </EmblaFilmContainer>
        </EmblaCarousel>
      </MarqueeContainer>
    </MarqueeWrapper>
  );
};

export default MarqueeInfinite;
