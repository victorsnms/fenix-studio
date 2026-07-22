import React, { useContext } from "react";
import { Navbar } from "../../components/Navbar";
import { Sidebar } from "../../components/Sidebar";
import { CommonContext } from "../../providers/CommonContext";
import Seo from "../../components/Seo";
import { vfxSeo } from "../../components/Seo/Data";
import { Footer } from "../../components/Footer";
import FadeInAnimation from "../../components/FadeInAnimation";
import PageTitle from "../../components/PageTitle";
import { EmailJsContactForm } from "../../components/EmailJsContactForm";
import NeedHelpCard from "../../components/NeedHelpCard";
import ServicesPresentation from "../../components/ServicesPresentation";
import {
  PostProductionPageContainer,
  PostProductionIntroSection,
  PostProductionHeroVideo,
  PostProductionIntroCopy,
  TimelineSection,
  TimelineHeader,
  TimelineTitle,
  TimelineLine,
  TimelineDivider,
  TimelineSteps,
  TimelineStep,
  StepNumber,
  StepTitle,
  PostProductionBody,
} from "../PostProduction/postProductionPageElements";

export const VFXPage = () => {
  const { t, isOpen, toggle } = useContext(CommonContext);
  const steps = t("vfxPage.steps", { returnObjects: true });

  return (
    <>
      <Seo seoData={vfxSeo} />
      <Sidebar isOpen={isOpen} toggle={toggle} />
      <Navbar toggle={toggle} />

      <PostProductionPageContainer>
        <PageTitle
          title={t("vfxPage.title")}
          breadcrumbs={[
            { label: t("menu.home"), to: "/" },
            { label: t("menu.services"), to: "/services" },
            { label: t("vfxPage.breadcrumb") },
          ]}
        />

        {/* Intro: hero image + body text */}
        <FadeInAnimation threshold={0.2}>
          <PostProductionIntroSection>
            <PostProductionHeroVideo
              src="/videosHQ/Video_NossosServicos.mp4"
              autoPlay
              loop
              muted
              playsInline
            />
            <PostProductionIntroCopy>
              <p>{t("vfxPage.introBody1")}</p>
              <p>{t("vfxPage.introBody2")}</p>
            </PostProductionIntroCopy>
          </PostProductionIntroSection>
        </FadeInAnimation>

        {/* Timeline */}
        <FadeInAnimation threshold={0.2}>
          <TimelineSection>
            <TimelineHeader>
              <TimelineTitle>{t("vfxPage.timelineTitle")}</TimelineTitle>
              <TimelineLine />
            </TimelineHeader>
            <TimelineDivider />
            <TimelineSteps>
              {Array.isArray(steps) &&
                steps.map((step) => (
                  <TimelineStep key={step.number}>
                    <StepNumber>{step.number}</StepNumber>
                    <StepTitle>{step.title}</StepTitle>
                  </TimelineStep>
                ))}
            </TimelineSteps>
          </TimelineSection>
        </FadeInAnimation>

        {/* Services Presentation */}
        <FadeInAnimation threshold={0.2}>
          <ServicesPresentation scrollTargetId="vfx-contact-form" service="vfx" />
        </FadeInAnimation>

        {/* Contact form + Need Help */}
        <FadeInAnimation threshold={0.2}>
          <PostProductionBody id="vfx-contact-form">
            <EmailJsContactForm />
            <NeedHelpCard />
          </PostProductionBody>
        </FadeInAnimation>
      </PostProductionPageContainer>

      <Footer />
    </>
  );
};
