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
import PageDescription from "../../components/PageDescription";
import TestimonyColumns from "../../components/TestimonyColumns";
import { ServicesGif } from "../../components/ServicesGif";

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
        <FadeInAnimation threshold={0.5}>
          <PageTitle title={t("aboutPage.title")} lightText={true} />
        </FadeInAnimation>
        <FadeInAnimation threshold={0.2}>
          <PageDescription text={t("aboutPage.pageDescription1")} />
          <PageDescription text={t("aboutPage.pageDescription2")} />
          <PageDescription text={t("aboutPage.pageDescription3")} />
          {/* <SkillsList skillList={skillsList} skillList2={skillsList2}></SkillsList> */}
          <ServicesGif />
        </FadeInAnimation>
        <TestimonyColumns testimonyList={t("testimonyList", { returnObjects: true })} main />
        <TestimonyColumns testimonyList={t("testimonyListArtists", { returnObjects: true })} />
      </AboutPageContainer>
      {/* FOOTER */}
      <Footer />
    </>
  );
};

// const skillsList = ["On Set Supervision and Practical Element Photography", "Concept, Look-Development and Pre-Visualization", "CG Environments / Set Extensions", "Modeling, Texturing, Lighting", "Animation"];
// const skillsList2 = ["Effects", "Matte Painting ", "Motion Graphics", "Compositing", " Digital Make-Up/Beauty Work"];
