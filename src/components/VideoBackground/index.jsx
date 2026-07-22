import videoBg from "/videosHQ/Video_Site.mp4";
import SectionTopTitle from "../SectionTopTitle";
import {
  VideoContainer,
  HeroContent,
  HeroTitle,
  HeroSubtitle,
  HeroCta,
} from "./VideoBackgroundElements";

export const VideoBackground = ({ label, title, subtitle, ctaLabel, ctaTo = "/services" }) => {
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
    </VideoContainer>
  );
};
