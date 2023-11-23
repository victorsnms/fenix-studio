import React, { createContext, useCallback, useEffect, useState } from "react";
import { animateScroll as scroll } from "react-scroll";
import { useTranslation } from "react-i18next";
// import { useScrollLock } from "../../hooks/use-scroll-lock.hook";
import FadeInAnimation from "../../components/FadeInAnimation";
import { ImageLogo } from "../../components/LogoList/LogoListElements";

export const CommonContext = createContext();

export const CommonInfoProvider = ({ children }) => {
  const [t, i18n] = useTranslation(["common"]);
  const [scrollNav, setscrollNav] = useState(false);
  // const [hover, setHover] = useState(false)
  const [isOpen, setIsOpen] = useState(false);
  // const [showVideo, setShowVideo] = useState(false)
  // const [translateY, setTranslateY] = useState(0)
  // const [scale, setScale] = useState(1)
  // const { lockScroll, unlockScroll } = useScrollLock()

  const footerContent = t("footer", { returnObjects: true });
  //   const services = t("stickyServices", { returnObjects: true });
  //   const team = t("team", { returnObjects: true });
  //   const testimonials = t("testimonials", { returnObjects: true });
  //   const platforms = t("platforms", { returnObjects: true });
  const language = i18n.language;

  const changeLanguage = () => {
    const switchLanguage = language === "en-US" ? "pt-BR" : "en-US";
    i18n.changeLanguage(switchLanguage);
    localStorage.setItem("language", switchLanguage);
  };

  const createLogos = (imgPathArray) => {
    return imgPathArray.map((img, index) =>
      imgPathArray.length < 6 ? (
        <FadeInAnimation key={index} threshold={1} transitionDelay={(index + 1) * 0.33}>
          <ImageLogo key={index} src={img.path} alt={img.alt} />
        </FadeInAnimation>
      ) : (
        <ImageLogo key={index} src={img.path} alt={img.alt} />
      )
    );
  };

  //   const changeNav = () => {
  //     if (window.scrollY >= 80) {
  //       setscrollNav(true);
  //     } else {
  //       setscrollNav(false);
  //     }
  //   };

  //   const onHover = () => {
  //     setHover(!hover);
  //   };

  //   const handleShowVideo = () => {
  //     setShowVideo(!showVideo);
  //   };

  const toggle = () => {
    setIsOpen(!isOpen);
  };

  const toggleHome = () => {
    scroll.scrollToTop();
  };

  //   const longStringsFormatter = (string, stringPos) => {
  //     const formattedString = string.split("").map((element, index) => {
  //       if (index < stringPos) {
  //         return element;
  //       } else if (index === stringPos) {
  //         return "...";
  //       } else if (index > stringPos) {
  //         return "";
  //       }
  //       return "";
  //     });

  //     return formattedString.join("");
  //   };

  //   const handleScroll = useCallback(() => {
  //     const scrollPosition = window.scrollY;
  //     const maxScroll = window.innerHeight;
  //     const scrollProgress = (scrollPosition * 100) / maxScroll;

  //     if (scrollPosition <= maxScroll * 0.85) {
  //       setTranslateY(scrollPosition * 1.2);
  //       setScale(0.027 * scrollProgress + 1);
  //     }
  //   }, []);

  //   useEffect(() => {
  //     if (showVideo === true) {
  //       lockScroll();
  //     } else {
  //       unlockScroll();
  //     }

  //     window.addEventListener("scroll", handleScroll);

  //     return () => window.removeEventListener("scroll", handleScroll);
  //   }, [handleScroll, showVideo, lockScroll, unlockScroll]);

  //   useEffect(() => {
  //     window.addEventListener("scroll", changeNav);
  //   }, []);

  return (
    <CommonContext.Provider
      value={{
        t,
        // i18n,
        language,
        // hover,
        // onHover,
        toggle,
        isOpen,
        footerContent,
        toggleHome,
        // lockScroll,
        // unlockScroll,
        scrollNav,
        // showVideo,
        // handleShowVideo,
        // translateY,
        // scale,
        changeLanguage,
        // changeNav,
        // longStringsFormatter,
        // services,
        // team,
        // platforms,
        // testimonials,
        createLogos,
      }}
    >
      {children}
    </CommonContext.Provider>
  );
};
