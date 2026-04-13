import React, { useContext } from "react";
import { Navbar } from "../../components/Navbar";
import { Sidebar } from "../../components/Sidebar";
import { CommonContext } from "../../providers/CommonContext";
import Seo from "../../components/Seo";
import { contactSeo } from "../../components/Seo/Data";
import { Footer } from "../../components/Footer";
import PageTitle from "../../components/PageTitle";
import FadeInAnimation from "../../components/FadeInAnimation";
import { ContactPageContainer, ContactBody, MapWrapper } from "./contactPageElements";
import { EmailJsContactForm } from "../../components/EmailJsContactForm";
import NeedHelpCard from "../../components/NeedHelpCard";
import HomeNewsletterSection from "../../components/HomeNewsletterSection";

export const ContactPage = () => {
  const { t, isOpen, toggle } = useContext(CommonContext);

  return (
    <>
      {/* SEO */}
      <Seo seoData={contactSeo} />
      {/* MENU */}
      <Sidebar isOpen={isOpen} toggle={toggle} />
      <Navbar toggle={toggle} />
      {/* BODY */}
      <ContactPageContainer>
        <PageTitle
          title={t("contactPage.title")}
          breadcrumbs={[
            { label: t("menu.home"), to: "/" },
            { label: t("contactPage.title") },
          ]}
        />

        <FadeInAnimation threshold={0.2}>
          <ContactBody>
            <EmailJsContactForm />
            <NeedHelpCard />
          </ContactBody>
        </FadeInAnimation>

        {/* Map */}
        <MapWrapper>
          <iframe
            src="https://maps.google.com/maps?q=S%C3%A3o+Paulo,SP,Brasil&output=embed"
            title="Fenix Studios — São Paulo"
            allowFullScreen
            loading="lazy"
          />
        </MapWrapper>

        <FadeInAnimation threshold={0.2}>
          <HomeNewsletterSection />
        </FadeInAnimation>
      </ContactPageContainer>
      {/* FOOTER */}
      <Footer />
    </>
  );
};
