import React, { useContext } from "react";
import { Navbar } from "../../components/Navbar";
import { Sidebar } from "../../components/Sidebar";
import { CommonContext } from "../../providers/CommonContext";
import { Footer } from "../../components/Footer";
import Seo from "../../components/Seo";
import { homeSeo } from "../../components/Seo/Data";
import { CourseCTA, HomePageContainer, PaddingWrapper, PlatformImage, PlatformImageContainer, PlatformSection, PlatformText, PlatformTextContainer, PlatformTitle, PlatformsSectionWrapper, SectionTitle, VideoContainer } from "./HomePageElements";
import ClientList from "../../components/ClientList";
import Logo from "../../images/logo.png";
import MarqueeInfinite from "../../components/MarqueeInfinite";
import isMobileOrTablet from "../../utils/isMobile";
import { VideoBackground } from "../../components/VideoBackground";
import FadeInAnimation from "../../components/FadeInAnimation";

export const HomePage = () => {
  const { t, isOpen, toggle, toggleHome } = useContext(CommonContext);
  const isMobile = isMobileOrTablet(768);
  return (
    <>
      {/* SEO */}
      <Seo seoData={homeSeo} />
      {/* Menu */}
      <Sidebar isOpen={isOpen} toggle={toggle} />
      <Navbar toggle={toggle} />
      <HomePageContainer>
        <VideoBackground />
        {/* Studio Reel */}
        <FadeInAnimation threshold={0.5}>
          <div style={{ maxWidth: "1300px", marginLeft: "auto", marginRight: "auto" }}>
            <SectionTitle>{t("menu.studioreels")}</SectionTitle>
          </div>
          <VideoContainer>
            <iframe src="https://www.youtube.com/embed/YTh4OuZ1nfA" frameBorder="0" allow="autoplay; encrypted-media" allowFullScreen title="Fenix Studio Video" style={{ aspectRatio: "16/9", boxShadow: "0 32px 49px 0 rgba(0,0,0,.7)" }} width={isMobile ? "90%" : "80%"} />
          </VideoContainer>
        </FadeInAnimation>
        {/* Filmography */}
        <FadeInAnimation threshold={0.5}>
          <div style={{ maxWidth: "1300px", marginLeft: "auto", marginRight: "auto", marginTop: "100px" }}>
            <SectionTitle style={{ marginBottom: "20px" }}>{t("menu.filmography")}</SectionTitle>
          </div>
          <MarqueeInfinite noBackground imageSection="filmImages" />
        </FadeInAnimation>
        {/* Clients */}
        <FadeInAnimation threshold={0.5}>
          <PaddingWrapper paddingY="100px">
            <div style={{ maxWidth: "1300px", marginLeft: "auto", marginRight: "auto" }}>
              <SectionTitle style={{ marginBottom: "20px" }}>{t("menu.clients")}</SectionTitle>
            </div>
            <ClientList noTrusted noBackground />
          </PaddingWrapper>
        </FadeInAnimation>
        <PlatformsSectionWrapper>
          {/* Study Section */}
          <PlatformSection threshold={0.25}>
            <PlatformTextContainer inverted>
              <PlatformTitle>{t("homePage.studyTitle")}</PlatformTitle>
              <PlatformText>{t("homePage.studyText")}</PlatformText>
              <CourseCTA onClick={toggleHome} to={t("homePage.studyCTAUrl")}>
                {t("homePage.studyCTALabel")}
              </CourseCTA>
            </PlatformTextContainer>
            <PlatformImageContainer>
              <PlatformImage src={Logo} alt="Logo" height="200px" mobileHeight="150px" />
            </PlatformImageContainer>
          </PlatformSection>
        </PlatformsSectionWrapper>
      </HomePageContainer>
      {/* FOOTER */}
      <Footer />
    </>
  );
};
