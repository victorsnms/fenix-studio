import React, { useContext } from "react";
import { Navbar } from "../../components/Navbar";
import { Sidebar } from "../../components/Sidebar";
import { CommonContext } from "../../providers/CommonContext";
import { Footer } from "../../components/Footer";
import Seo from "../../components/Seo";
import { homeSeo } from "../../components/Seo/Data";
import { FilmographyTitle, HomePageContainer } from "./HomePageElements";
import HomeStudySection from "../../components/HomeStudySection";
import HomeNewsletterSection from "../../components/HomeNewsletterSection";
import HomeClientsSection from "../../components/HomeClientsSection";
import MarqueeInfinite from "../../components/MarqueeInfinite";
import { VideoBackground } from "../../components/VideoBackground";
import HomeAboutSection from "../../components/HomeAboutSection";
import HomeReelSection from "../../components/HomeReelSection";
import FadeInAnimation from "../../components/FadeInAnimation";
import SectionTopTitle from "../../components/SectionTopTitle";

export const HomePage = () => {
  const { t, isOpen, toggle } = useContext(CommonContext);
  return (
    <>
      {/* SEO */}
      <Seo seoData={homeSeo} />
      {/* Menu */}
      <Sidebar isOpen={isOpen} toggle={toggle} />
      <Navbar toggle={toggle} />
      <HomePageContainer>
        <VideoBackground
          label={t("homePage.heroLabel")}
          title={t("homePage.heroTitle")}
          subtitle={t("homePage.heroSubtitle")}
          ctaLabel={t("homePage.heroCta")}
          ctaTo="/services"
        />
        {/* About Section */}
        <FadeInAnimation threshold={0.5}>
          <HomeAboutSection />
        </FadeInAnimation>
        {/* Studio Reel */}
        <FadeInAnimation threshold={0.5}>
          <HomeReelSection />
        </FadeInAnimation>
        {/* Filmography */}
        <FadeInAnimation threshold={0.5}>
          <div style={{ maxWidth: "1300px", marginLeft: "auto", marginRight: "auto", marginTop: "100px", display: "flex", flexDirection: "column", alignItems: "center", gap: "12px" }}>
            <SectionTopTitle center>{t("homePage.filmographyLabel")}</SectionTopTitle>
            <FilmographyTitle>{t("homePage.filmographyTitle")}</FilmographyTitle>
          </div>
          <MarqueeInfinite noBackground imageSection="filmImages" showMeta />
        </FadeInAnimation>
        {/* Clients */}
        <FadeInAnimation threshold={0.5}>
          <div style={{ maxWidth: "1300px", marginLeft: "auto", marginRight: "auto", marginTop: "100px", display: "flex", flexDirection: "column", alignItems: "center", gap: "12px" }}>
            <SectionTopTitle center>{t("homePage.clientsLabel")}</SectionTopTitle>
            <FilmographyTitle>{t("homePage.clientsTitle")}</FilmographyTitle>
          </div>
          <HomeClientsSection />
        </FadeInAnimation>
        {/* Study Section - hidden for now*/}        
        {/* <FadeInAnimation threshold={0.5}>
          <HomeStudySection />
        </FadeInAnimation> */}
        {/* Newsletter */}
        <HomeNewsletterSection />
      </HomePageContainer>
      {/* FOOTER */}
      <Footer />
    </>
  );
};
