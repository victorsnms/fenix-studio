import { MarqueeContainer, MarqueeImage, MarqueeImageContainer, MarqueeWrapper } from "./MarqueeSectionElements";
import { useInView } from "react-intersection-observer";
import { useTranslation } from "react-i18next";

const MarqueeAnimationContainer = ({ children, threshold, transitionDelay, className, ...props }) => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold,
  });

  return (
    <div ref={ref}>
      <MarqueeContainer className={`${className || ""} marquee ${inView ? "is-visible" : ""}`} transitionDelay={transitionDelay} {...props}>
        {children}
      </MarqueeContainer>
    </div>
  );
};

const MarqueeSection = ({ noBackground, direction = "normal", imageSection = "marqueeImages" }) => {
  const [t] = useTranslation(["images"]);
  const images = t(`${imageSection}`, { returnObjects: true });

  return (
    <MarqueeWrapper noBackground={noBackground}>
      <MarqueeAnimationContainer threshold={0.5} direction={direction}>
        {images.slice(0, 5).map((image, index) => (
          <MarqueeImageContainer key={index}>
            <MarqueeImage src={image.path} alt={image.alt} />
          </MarqueeImageContainer>
        ))}
      </MarqueeAnimationContainer>
    </MarqueeWrapper>
  );
};

export default MarqueeSection;
