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
import ServiceContentBlock from "../../components/ServiceContentBlock";
import ServiceContactBanner from "../../components/ServiceContactBanner";

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
        <PageTitle
          title={t("servicesPage.title")}
          breadcrumbs={[
            { label: t("menu.home"), to: "/" },
            { label: t("servicesPage.title") },
          ]}
        />

        {/* Post-Production */}
        <FadeInAnimation threshold={0.2}>
          <ServiceContentBlock
            imageLeft={true}
            video="/videosHQ/Futuro_VFX_v001.mp4"
            topLabel={t("servicesPage.postProductionLabel")}
            title={t("servicesPage.postProductionTitle")}
            paragraphs={[
              t("servicesPage.postProductionBody1"),
              t("servicesPage.postProductionBody2"),
            ]}
            ctaLabel={t("servicesPage.postProductionCta")}
            ctaUrl="/services/post-production"
          />
        </FadeInAnimation>

        {/* VFX */}
        <FadeInAnimation threshold={0.2}>
          <ServiceContentBlock
            imageLeft={false}
            video="/videosHQ/Futuro_VFX_v001.mp4"
            topLabel={t("servicesPage.vfxLabel")}
            title={t("servicesPage.vfxTitle")}
            paragraphs={[
              t("servicesPage.vfxBody1"),
              t("servicesPage.vfxBody2"),
            ]}
            ctaLabel={t("servicesPage.vfxCta")}
            ctaUrl="/services/vfx"
          />
        </FadeInAnimation>

        {/* Contact Banner */}
        <FadeInAnimation threshold={0.2}>
          <ServiceContactBanner />
        </FadeInAnimation>
      </ServicesPageContainer>
      {/* FOOTER */}
      <Footer />
    </>
  );
};
