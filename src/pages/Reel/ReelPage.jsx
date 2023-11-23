import React, { useContext } from "react";
import { Navbar } from "../../components/Navbar";
import { Sidebar } from "../../components/Sidebar";
import { CommonContext } from "../../providers/CommonContext";
import Seo from "../../components/Seo";
import { reelSeo } from "../../components/Seo/Data";
import { Footer } from "../../components/Footer";
import FadeInAnimation from "../../components/FadeInAnimation";
import PageTitle from "../../components/PageTitle";
import { ReelPageContainer, VideoContainer } from "./reelPageElements";

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
        <VideoContainer>
          <iframe
            src="https://www.youtube.com/embed/YTh4OuZ1nfA"
            frameBorder="0"
            allow="autoplay; encrypted-media"
            allowFullScreen
            title="Fenix Studio Video"
            style={{ aspectRatio: "16/9", boxShadow: "0 32px 49px 0 rgba(0,0,0,.7)" }}
            width="80%"
          />
        </VideoContainer>
      </ReelPageContainer>
      {/* FOOTER */}
      <Footer />
    </>
  );
};
