import React, { useContext } from "react";
import { Navbar } from "../../components/Navbar";
import { Sidebar } from "../../components/Sidebar";
import { CommonContext } from "../../providers/CommonContext";
// import Seo from "../../components/Seo";
// import { studyInProgressSeo } from "../../components/Seo/Data";
import { Footer } from "../../components/Footer";
import FadeInAnimation from "../../components/FadeInAnimation";
import PageTitle from "../../components/PageTitle";
import StudyHeroSection from "../../components/StudyHeroSection";
import StudyCoursesSection from "../../components/StudyCoursesSection";
import { StudyInProgressPageContainer } from "./studyInProgressPageElements";

export const StudyInProgressPage = () => {
  const { t, isOpen, toggle } = useContext(CommonContext);

  return (
    <>
      {/* <Seo seoData={studyInProgressSeo} /> */}
      <Sidebar isOpen={isOpen} toggle={toggle} />
      <Navbar toggle={toggle} />

      <StudyInProgressPageContainer>
        <PageTitle
          title={t("studyPage.title")}
          breadcrumbs={[
            { label: t("menu.home"), to: "/" },
            { label: t("studyPage.breadcrumb") },
          ]}
        />

        <FadeInAnimation threshold={0.3}>
          <StudyHeroSection />
        </FadeInAnimation>

        <FadeInAnimation threshold={0.3}>
          <StudyCoursesSection />
        </FadeInAnimation>
      </StudyInProgressPageContainer>

      <Footer />
    </>
  );
};
