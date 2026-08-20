import { useContext, useEffect, useState } from "react";
import videoBg from "/videosHQ/Video_Site.mp4";
import SectionTopTitle from "../SectionTopTitle";
import { CommonContext } from "../../providers/CommonContext";
import { IconArrowDown } from "../../icons";
import {
  VideoContainer,
  HeroContent,
  HeroTitle,
  HeroSubtitle,
  HeroCta,
  ScrollDownIndicator,
} from "./VideoBackgroundElements";

const scrollPastHero = () => {
  const prefersReducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
  window.scrollTo({
    top: window.innerHeight,
    behavior: prefersReducedMotion ? "auto" : "smooth",
  });
};

/** Treat anything within this many pixels of the top as "at the top". */
const AT_TOP_THRESHOLD_PX = 20;

export const VideoBackground = ({ label, title, subtitle, ctaLabel, ctaTo = "/services" }) => {
  const { t } = useContext(CommonContext);
  const [isAtTop, setIsAtTop] = useState(true);

  useEffect(() => {
    const update = () => setIsAtTop(window.scrollY <= AT_TOP_THRESHOLD_PX);

    update(); // handle a reload that restores a scrolled position
    window.addEventListener("scroll", update, { passive: true });

    return () => window.removeEventListener("scroll", update);
  }, []);

  return (
    <VideoContainer>
      <div className="overlay" />
      <video src={videoBg} autoPlay loop muted playsInline />

      {(label || title || subtitle || ctaLabel) && (
        <HeroContent>
          {label    && <SectionTopTitle style={{ marginBottom: "20px" }}>{label}</SectionTopTitle>}
          {title    && <HeroTitle>{title}</HeroTitle>}
          {subtitle && <HeroSubtitle>{subtitle}</HeroSubtitle>}
          {ctaLabel && <HeroCta to={ctaTo}>{ctaLabel}</HeroCta>}
        </HeroContent>
      )}

      {isAtTop && (
        <ScrollDownIndicator
          type="button"
          onClick={scrollPastHero}
          aria-label={t("menu.accessibility.scrollDown")}
        >
          <IconArrowDown />
        </ScrollDownIndicator>
      )}
    </VideoContainer>
  );
};
