import { MarqueeContainer, MarqueeGroup, MarqueeImage, MarqueeImageContainer, MarqueeWrapper } from "./MarqueeInfiniteElements";
import { useTranslation } from "react-i18next";

const MarqueeInfinite = ({ noBackground, direction = "normal", imageSection = "marqueeImages" }) => {
  const [t] = useTranslation(["images"]);
  const images = t(`${imageSection}`, { returnObjects: true });

  return (
    <MarqueeWrapper>
      <MarqueeContainer>
        <MarqueeGroup>
          {images.map((image, i) => (
            <MarqueeImageContainer key={i} threshold={0.1} transitionDelay={i < 12 ? (1 + i) * 0.2 : (23 - i) * 0.2}>
              <MarqueeImage src={image.path} alt={image.alt} />
            </MarqueeImageContainer>
          ))}
          {images.map((image, i) => (
            <MarqueeImageContainer key={i} threshold={0.1} transitionDelay={(1 + i) * 0.2}>
              <MarqueeImage src={image.path} alt={image.alt} />
            </MarqueeImageContainer>
          ))}
        </MarqueeGroup>
      </MarqueeContainer>
    </MarqueeWrapper>
  );
};

export default MarqueeInfinite;
