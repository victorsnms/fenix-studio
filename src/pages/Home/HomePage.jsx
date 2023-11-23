import React, { useContext } from "react";
import { Navbar } from "../../components/Navbar";
import { Sidebar } from "../../components/Sidebar";
import { CommonContext } from "../../providers/CommonContext";
import { Footer } from "../../components/Footer";
import Seo from "../../components/Seo";
import { homeSeo } from "../../components/Seo/Data";
import {
  CourseCTA,
  HomePageContainer,
  PaddingWrapper,
  PlatformImage,
  PlatformImageContainer,
  PlatformSection,
  PlatformText,
  PlatformTextContainer,
  PlatformTitle,
  PlatformsSectionWrapper,
  VideoContainer,
} from "./HomePageElements";
import ClientList from "../../components/ClientList";
import Logo from "../../images/logo.png";
import MarqueeInfinite from "../../components/MarqueeInfinite";

export const HomePage = () => {
  const { t, isOpen, toggle, toggleHome } = useContext(CommonContext);
  return (
    <>
      {/* SEO */}
      <Seo seoData={homeSeo} />
      {/* Menu */}
      <Sidebar isOpen={isOpen} toggle={toggle} />
      <Navbar toggle={toggle} />
      <HomePageContainer>
        <MarqueeInfinite noBackground imageSection="filmImages" />
        <VideoContainer>
          <iframe
            src="https://www.youtube.com/embed/YTh4OuZ1nfA"
            frameBorder="0"
            allow="autoplay; encrypted-media"
            allowFullScreen
            title="Fenix Studio Video"
            style={{ aspectRatio: "16/9", boxShadow: "0 32px 49px 0 rgba(0,0,0,.7)" }}
            width="80%"
          />
        </VideoContainer>
        <PaddingWrapper paddingY="100px">
          <ClientList noTrusted noBackground />
        </PaddingWrapper>
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
