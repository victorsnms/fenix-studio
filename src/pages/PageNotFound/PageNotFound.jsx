import React, { useContext } from "react";
import { Navbar } from "../../components/Navbar";
import { Sidebar } from "../../components/Sidebar";
import { CommonContext } from "../../providers/CommonContext";
import Seo from "../../components/Seo";
import { homeSeo } from "../../components/Seo/Data";
import {
  PageNotFoundContainer,
  NotFoundImage,
  NotFoundText,
  NotFoundCTA,
} from "./pageNotFound";

export const PageNotFound = () => {
  const { t, isOpen, toggle } = useContext(CommonContext);

  return (
    <>
      <Seo seoData={homeSeo} />
      <Sidebar isOpen={isOpen} toggle={toggle} />
      <Navbar toggle={toggle} />
      <PageNotFoundContainer>
        <NotFoundImage src="/404/404_v00.png" alt="404" />
        <NotFoundText>{t("pagenotfound.description")}</NotFoundText>
        <NotFoundCTA to="/">{t("pagenotfound.cta")}</NotFoundCTA>
      </PageNotFoundContainer>
    </>
  );
};
