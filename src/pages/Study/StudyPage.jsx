import React, { useContext } from "react";
import { Navbar } from "../../components/Navbar";
import { Sidebar } from "../../components/Sidebar";
import { CommonContext } from "../../providers/CommonContext";
import Seo from "../../components/Seo";
import { studySeo } from "../../components/Seo/Data";
import { Footer } from "../../components/Footer";
import FadeInAnimation from "../../components/FadeInAnimation";
import PageTitle from "../../components/PageTitle";
import { StudyPageContainer } from "./studyPageElements";
import StudyCourses from "../../components/StudyCourses";

export const StudyPage = () => {
  const { t, isOpen, toggle } = useContext(CommonContext);
  return (
    <>
      {/* SEO */}
      <Seo seoData={studySeo} />
      {/* MENU */}
      <Sidebar isOpen={isOpen} toggle={toggle} />
      <Navbar toggle={toggle} />
      {/* BODY */}
      <StudyPageContainer>
        <FadeInAnimation threshold={0.5}>
          <PageTitle title={t("studyPage.title")} subtitle={t("studyPage.subtitle1")} subtitle2={t("studyPage.subtitle2")} lightText={true} />
        </FadeInAnimation>
        <StudyCourses categoriesList={t("studyPage.categories", { returnObjects: true })} />
      </StudyPageContainer>
      {/* FOOTER */}
      <Footer />
    </>
  );
};
