import React, { useContext, useRef, useState } from "react";
import emailjs from "@emailjs/browser";
import { Navbar } from "../../components/Navbar";
import { Sidebar } from "../../components/Sidebar";
import { CommonContext } from "../../providers/CommonContext";
import Seo from "../../components/Seo";
import { studySeo } from "../../components/Seo/Data";
import { Footer } from "../../components/Footer";
import FadeInAnimation from "../../components/FadeInAnimation";
import PageTitle from "../../components/PageTitle";
import SectionTopTitle from "../../components/SectionTopTitle";
import {
  StudyPageContainer,
  StudyBody,
  StudyContentSide,
  StudyTitle,
  StudyBody2,
  StudyFormCard,
  StudyFormText,
} from "./studyPageElements";
import {
  FormTitle,
  FormSubtitle,
  ContactForm,
  FormField,
  Label,
  Input,
  SubmitButton,
} from "../../components/EmailJsContactForm/EmailJsContactFormElements";

export const StudyPage = () => {
  const { t, isOpen, toggle } = useContext(CommonContext);
  const form = useRef();
  const [sent, setSent] = useState(false);

  const serviceID = `${import.meta.env.VITE_EMAILJS_SERVICE_ID}`;
  const templateID = `${import.meta.env.VITE_EMAILJS_TEMPLATE_STUDY_ID || import.meta.env.VITE_EMAILJS_TEMPLATE_ID}`;
  const publicKey = `${import.meta.env.VITE_EMAILJS_PUBLIC_KEY}`;

  const sendEmail = (e) => {
    e.preventDefault();
    emailjs
      .sendForm(serviceID, templateID, form.current, { publicKey })
      .then(
        () => { setSent(true); form.current.reset(); },
        (error) => console.log("FAILED...", error.text)
      );
  };

  return (
    <>
      <Seo seoData={studySeo} />
      <Sidebar isOpen={isOpen} toggle={toggle} />
      <Navbar toggle={toggle} />

      <StudyPageContainer>
        <FadeInAnimation threshold={0.5}>
          <PageTitle
            title={t("studyPage.title")}
            breadcrumbs={[
              { label: t("menu.home"), to: "/" },
              { label: t("studyPage.breadcrumb") },
            ]}
          />
        </FadeInAnimation>

        <FadeInAnimation threshold={0.3}>
          <StudyBody>
            {/* Left: content */}
            <StudyContentSide>
              <SectionTopTitle>{t("studyPage.sectionLabel")}</SectionTopTitle>
              <StudyTitle>{t("studyPage.sectionTitle")}</StudyTitle>
              <StudyBody2>
                <p>{t("studyPage.bodyText1")}</p>
                <p>{t("studyPage.bodyText2")}</p>
              </StudyBody2>
            </StudyContentSide>

            {/* Right: early access form */}
            <StudyFormCard>
              <FormTitle>{t("studyPage.formTitle")}</FormTitle>
              <StudyFormText>{t("studyPage.formText")}</StudyFormText>
              <FormSubtitle>{t("studyPage.formSubtitle")}</FormSubtitle>

              <ContactForm ref={form} onSubmit={sendEmail}>
                <FormField style={{ marginBottom: "16px" }}>
                  <Label htmlFor="study_name">{t("studyPage.formNameLabel")} *</Label>
                  <Input
                    type="text"
                    name="study_name"
                    id="study_name"
                    placeholder={t("studyPage.formNameLabel")}
                    required
                  />
                </FormField>

                <FormField style={{ marginBottom: "16px" }}>
                  <Label htmlFor="study_phone">{t("studyPage.formPhoneLabel")} *</Label>
                  <Input
                    type="text"
                    name="study_phone"
                    id="study_phone"
                    placeholder={t("studyPage.formPhoneLabel")}
                    required
                  />
                </FormField>

                <FormField style={{ marginBottom: "24px" }}>
                  <Label htmlFor="study_email">{t("studyPage.formEmailLabel")} *</Label>
                  <Input
                    type="email"
                    name="study_email"
                    id="study_email"
                    placeholder={t("studyPage.formEmailLabel")}
                    required
                  />
                </FormField>

                <SubmitButton type="submit" style={{ width: "100%" }}>
                  {sent ? "✓" : t("studyPage.formCta")}
                </SubmitButton>
              </ContactForm>
            </StudyFormCard>
          </StudyBody>
        </FadeInAnimation>
      </StudyPageContainer>

      <Footer />
    </>
  );
};
