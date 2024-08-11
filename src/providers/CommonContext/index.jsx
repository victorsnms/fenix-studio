import React, { createContext, useState } from "react";
import { animateScroll as scroll } from "react-scroll";
import { useTranslation } from "react-i18next";
import FadeInAnimation from "../../components/FadeInAnimation";
import { ImageLogo } from "../../components/LogoList/LogoListElements";

export const CommonContext = createContext();

export const CommonInfoProvider = ({ children }) => {
  const [t, i18n] = useTranslation(["common"]);
  const [scrollNav, setscrollNav] = useState(false);
  const [isOpen, setIsOpen] = useState(false);

  const footerContent = t("footer", { returnObjects: true });
  const language = i18n.language;

  const changeLanguage = () => {
    const switchLanguage = language === "en-US" ? "pt-BR" : "en-US";
    i18n.changeLanguage(switchLanguage);
    localStorage.setItem("fenix.language", switchLanguage);
  };

  const createLogos = (imgPathArray) => {
    return imgPathArray.map((img, index) =>
      imgPathArray.length < 6 ? (
        <FadeInAnimation key={index} threshold={1} transitionDelay={(index + 1) * 0.33}>
          <ImageLogo key={index} src={img.path} alt={img.alt} loading="lazy" />
        </FadeInAnimation>
      ) : (
        <ImageLogo key={index} src={img.path} alt={img.alt} />
      )
    );
  };

  const toggle = () => {
    setIsOpen(!isOpen);
  };

  const toggleHome = () => {
    scroll.scrollToTop();
  };

  return (
    <CommonContext.Provider
      value={{
        t,
        language,
        toggle,
        isOpen,
        footerContent,
        toggleHome,
        scrollNav,
        changeLanguage,
        createLogos,
      }}
    >
      {children}
    </CommonContext.Provider>
  );
};
