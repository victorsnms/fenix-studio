import React, { useContext } from "react";
import { Navbar } from "../../components/Navbar";
import { Sidebar } from "../../components/Sidebar";
import { CommonContext } from "../../providers/CommonContext";
import Seo from "../../components/Seo";
import { servicesSeo } from "../../components/Seo/Data";
import { Footer } from "../../components/Footer";
import FadeInAnimation from "../../components/FadeInAnimation";
import PageTitle from "../../components/PageTitle";
import { ServicesPageContainer } from "./servicesPageElements";
import Text from "../../components/Text";
import ImageGallery from "../../components/ImageGallery";

export const ServicesPage = () => {
  const { t, isOpen, toggle } = useContext(CommonContext);

  return (
    <>
      {/* SEO */}
      <Seo seoData={servicesSeo} />
      {/* MENU */}
      <Sidebar isOpen={isOpen} toggle={toggle} />
      <Navbar toggle={toggle} />
      {/* BODY */}
      <ServicesPageContainer>
        <FadeInAnimation threshold={0.5}>
          <PageTitle title={t("servicesPage.title")} lightText={true} />
        </FadeInAnimation>

        <Text {...servicesTitle}>{t("servicesPage.text1title")}</Text>
        <Text {...servicesText}>{t("servicesPage.text1content")}</Text>
        {/* <MarqueeSection noBackground imageSection="marqueeImages" /> */}
        <ImageGallery imageSection="ServicesGalleryImages" />
        {/* DO NOT DELETE May use latter */}
        {/* <Text {...servicesTitle}>{t("servicesPage.text2title")}</Text> */}
        {/* <Text {...servicesText}>{t("servicesPage.text2content")}</Text> */}
        {/* <ImageGallery imageSection="OurArtistsImages" /> */}
      </ServicesPageContainer>
      {/* FOOTER */}
      <Footer />
    </>
  );
};

const servicesTitle = {
  lightBg: false,
  lightText: true,
  textAlign: "center",
  fontSize: "2em",
  textMargin: "0 auto",
  textMaxWidth: "720px",
  containerPadding: "20px 50px",
  fontWeight: "700",
  color: "#ed1c24",
};

const servicesText = {
  lightBg: false,
  lightText: true,
  textAlign: "center",
  fontSize: "1.5em",
  textMargin: "0 auto",
  textMaxWidth: "720px",
  containerPadding: "20px 50px",
};
