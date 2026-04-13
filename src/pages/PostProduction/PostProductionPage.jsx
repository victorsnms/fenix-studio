import React, { useContext } from "react";
import { Navbar } from "../../components/Navbar";
import { Sidebar } from "../../components/Sidebar";
import { CommonContext } from "../../providers/CommonContext";
import Seo from "../../components/Seo";
import { postProductionSeo } from "../../components/Seo/Data";
import { Footer } from "../../components/Footer";
import FadeInAnimation from "../../components/FadeInAnimation";
import PageTitle from "../../components/PageTitle";
import { EmailJsContactForm } from "../../components/EmailJsContactForm";
import NeedHelpCard from "../../components/NeedHelpCard";
import ServicesPresentation from "../../components/ServicesPresentation";
import {
  PostProductionPageContainer,
  PostProductionIntroSection,
  PostProductionHeroImage,
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
} from "./postProductionPageElements";

export const PostProductionPage = () => {
  const { t, isOpen, toggle } = useContext(CommonContext);
  const steps = t("postProductionPage.steps", { returnObjects: true });

  return (
    <>
      <Seo seoData={postProductionSeo} />
      <Sidebar isOpen={isOpen} toggle={toggle} />
      <Navbar toggle={toggle} />

      <PostProductionPageContainer>
        {/* Breadcrumb + Title */}
        <PageTitle
          title={t("postProductionPage.title")}
          breadcrumbs={[
            { label: t("menu.home"), to: "/" },
            { label: t("menu.services"), to: "/services" },
            { label: t("postProductionPage.breadcrumb") },
          ]}
        />

        {/* Intro: hero image + body text */}
        <FadeInAnimation threshold={0.2}>
          <PostProductionIntroSection>
            <PostProductionHeroImage
              src="/images/404bg.png"
              alt={t("postProductionPage.title")}
            />
            <PostProductionIntroCopy>
              <p>{t("postProductionPage.introBody1")}</p>
              <p>{t("postProductionPage.introBody2")}</p>
            </PostProductionIntroCopy>
          </PostProductionIntroSection>
        </FadeInAnimation>

        {/* Timeline */}
        <FadeInAnimation threshold={0.2}>
          <TimelineSection>
            <TimelineHeader>
              <TimelineTitle>{t("postProductionPage.timelineTitle")}</TimelineTitle>
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
          <ServicesPresentation scrollTargetId="contact-form" />
        </FadeInAnimation>

        {/* Contact form + Need Help */}
        <FadeInAnimation threshold={0.2}>
          <PostProductionBody id="contact-form">
            <EmailJsContactForm />
            <NeedHelpCard />
          </PostProductionBody>
        </FadeInAnimation>
      </PostProductionPageContainer>

      <Footer />
    </>
  );
};
