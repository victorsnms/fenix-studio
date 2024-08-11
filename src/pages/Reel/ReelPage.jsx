import React, { useContext } from "react";
import { Navbar } from "../../components/Navbar";
import { Sidebar } from "../../components/Sidebar";
import { CommonContext } from "../../providers/CommonContext";
import Seo from "../../components/Seo";
import { reelSeo } from "../../components/Seo/Data";
import { Footer } from "../../components/Footer";
import { ReelPageContainer, ReelPageTitle } from "./reelPageElements";
import { MediaGallery } from "../../components/MediaGallery";
import FadeInAnimation from "../../components/FadeInAnimation";
import PageTitle from "../../components/PageTitle";

export const ReelPage = () => {
  const { t, isOpen, toggle } = useContext(CommonContext);
  return (
    <>
      {/* SERVICE PAGE SETUP */}
      <Seo seoData={reelSeo} />
      {/* MENU */}
      <Sidebar isOpen={isOpen} toggle={toggle} />
      <Navbar toggle={toggle} />
      {/* BODY */}
      <ReelPageContainer>
        <FadeInAnimation threshold={0.5}>
          <PageTitle title={t("reelPage.title")} lightText={true} />
        </FadeInAnimation>
        <MediaGallery />
        {/* <VideoContainer>
          <iframe src="https://www.youtube.com/embed/YTh4OuZ1nfA" frameBorder="0" allow="autoplay; encrypted-media" allowFullScreen title="Fenix Studio Video" style={{ aspectRatio: "16/9", boxShadow: "0 32px 49px 0 rgba(0,0,0,.7)" }} width="80%" />
        </VideoContainer> */}

        {/* Breakdowns */}
        <FadeInAnimation threshold={0.1}>
          <div style={{ maxWidth: "1300px", marginLeft: "auto", marginRight: "auto" }}>
            <ReelPageTitle>{t("menu.breakdowns")}</ReelPageTitle>
          </div>
          <MediaGallery />
        </FadeInAnimation>
      </ReelPageContainer>
      {/* FOOTER */}
      <Footer />
    </>
  );
};
