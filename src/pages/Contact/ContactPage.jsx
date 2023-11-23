import React, { useContext } from "react";
import { Navbar } from "../../components/Navbar";
import { Sidebar } from "../../components/Sidebar";
import { CommonContext } from "../../providers/CommonContext";
import Seo from "../../components/Seo";
import { contactSeo } from "../../components/Seo/Data";
import { Footer } from "../../components/Footer";
import PageTitle from "../../components/PageTitle";
import FadeInAnimation from "../../components/FadeInAnimation";
import { ContactInfoWrapper, ContactPageContainer } from "./contactPageElements";
import ContactInfo from "../../components/ContactInfo";

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
        <FadeInAnimation threshold={0.5}>
          <PageTitle title={t("contactPage.title")} lightText={true} />
        </FadeInAnimation>
        <ContactInfoWrapper>
          <ContactInfo info={t("contactPage.info", { returnObjects: true })}></ContactInfo>
        </ContactInfoWrapper>
      </ContactPageContainer>
      {/* FOOTER */}
      <Footer />
    </>
  );
};
