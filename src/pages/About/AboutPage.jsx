import React, { useContext } from "react";
import { Navbar } from "../../components/Navbar";
import { Sidebar } from "../../components/Sidebar";
import { CommonContext } from "../../providers/CommonContext";
import Seo from "../../components/Seo";
import { aboutSeo } from "../../components/Seo/Data";
import { Footer } from "../../components/Footer";
import PageTitle from "../../components/PageTitle";
import FadeInAnimation from "../../components/FadeInAnimation";
import { AboutPageContainer } from "./aboutPageElements";
import AboutIntroSection from "../../components/AboutIntroSection";
import OurTeamSection from "../../components/OurTeamSection";
import OurServicesSection from "../../components/OurServicesSection";
import HomeNewsletterSection from "../../components/HomeNewsletterSection";

export const AboutPage = () => {
  const { t, isOpen, toggle } = useContext(CommonContext);
  return (
    <>
      {/* SEO*/}
      <Seo seoData={aboutSeo} />
      {/* MENU */}
      <Sidebar isOpen={isOpen} toggle={toggle} />
      <Navbar toggle={toggle} />
      {/* BODY */}
      <AboutPageContainer>
        <PageTitle
          title={t("aboutPage.title")}
          breadcrumbs={[
            { label: t("menu.home"), to: "/" },
            { label: t("aboutPage.title") },
          ]}
        />
        <FadeInAnimation threshold={0.2}>
          <AboutIntroSection />
        </FadeInAnimation>
        <FadeInAnimation threshold={0.2}>
          <OurTeamSection />
        </FadeInAnimation>
        <FadeInAnimation threshold={0.2}>
          <OurServicesSection />
        </FadeInAnimation>
        <FadeInAnimation threshold={0.2}>
          <HomeNewsletterSection />
        </FadeInAnimation>
      </AboutPageContainer>
      {/* FOOTER */}
      <Footer />
    </>
  );
};

// const skillsList = ["On Set Supervision and Practical Element Photography", "Concept, Look-Development and Pre-Visualization", "CG Environments / Set Extensions", "Modeling, Texturing, Lighting", "Animation"];
// const skillsList2 = ["Effects", "Matte Painting ", "Motion Graphics", "Compositing", " Digital Make-Up/Beauty Work"];
