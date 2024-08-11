import React, { useContext } from "react";
import { Navbar } from "../../components/Navbar";
import { Sidebar } from "../../components/Sidebar";
import { CommonContext } from "../../providers/CommonContext";
import { Footer } from "../../components/Footer";
import Seo from "../../components/Seo";
import { homeSeo } from "../../components/Seo/Data";
import { HomePageContainer } from "../Home/HomePageElements";
import { LogoAndTextContainer, MainTextContainer, PageNotFoundContainer, PageNotFoundDescriptionText, PageNotFoundLogo, PageNotFoundMessageText, PageNotFoundNumberText } from "./pageNotFound";
import fenixLogo from "../../images/logo.png";

export const PageNotFound = () => {
  const { isOpen, toggle } = useContext(CommonContext);
  const { t, footerContent } = useContext(CommonContext);
  return (
    <>
      {/* SEO */}
      <Seo seoData={homeSeo} />
      {/* Menu */}
      <Sidebar isOpen={isOpen} toggle={toggle} />
      <Navbar toggle={toggle} />
      <HomePageContainer>
        <PageNotFoundContainer>
          <LogoAndTextContainer>
            <PageNotFoundLogo src={fenixLogo} alt={footerContent.accessibility.altLogo} />
            <MainTextContainer>
              <PageNotFoundNumberText>404</PageNotFoundNumberText>
              <PageNotFoundMessageText>{t("pagenotfound.title")}</PageNotFoundMessageText>
            </MainTextContainer>
          </LogoAndTextContainer>
          <PageNotFoundDescriptionText>{t("pagenotfound.description")}</PageNotFoundDescriptionText>
        </PageNotFoundContainer>
      </HomePageContainer>
      {/* FOOTER */}
      <Footer />
    </>
  );
};
