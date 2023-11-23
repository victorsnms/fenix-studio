import React, { useEffect, useState, useContext } from "react";
import { SidebarContainer, Icon, CloseIcon, SidebarWrapper, SidebarMenu, SideBtnWrap, SidebarRoute, Flag, SidebarItem, SidebarLinkR } from "./SidebarElements";
import ReactCountryFlag from "react-country-flag";
import isMobileOrTablet from "../../utils/isMobile";
import { CommonContext } from "../../providers/CommonContext";

export const Sidebar = ({ isOpen, toggle }) => {
  const { t, language, changeLanguage } = useContext(CommonContext);
  const [isMT, setIsMT] = useState(false);

  useEffect(() => {
    setIsMT(isMobileOrTablet(946));
  }, []);

  return (
    <SidebarContainer isOpen={isOpen} onClick={toggle} aria-hidden={isMT && isOpen ? false : true}>
      <Icon onClick={toggle} aria-label={t("menu.accessibility.menuBurguerAriaLabel")} tabIndex={isOpen ? 0 : -1}>
        <CloseIcon />
      </Icon>
      <SidebarWrapper id="sidebar" role="dialog" aria-modal={true}>
        <SidebarMenu>
          <SidebarItem>
            <SidebarLinkR to="/about" onClick={toggle} tabIndex={isOpen ? 0 : -1}>
              {t("menu.about")}
            </SidebarLinkR>
          </SidebarItem>
          <SidebarItem>
            <SidebarLinkR to="/contact" onClick={toggle} tabIndex={isOpen ? 0 : -1}>
              {t("menu.contact")}
            </SidebarLinkR>
          </SidebarItem>
          <SidebarItem>
            <SidebarLinkR to="/reel" onClick={toggle} tabIndex={isOpen ? 0 : -1}>
              {t("menu.reel")}
            </SidebarLinkR>
          </SidebarItem>
          <SidebarItem>
            <SidebarLinkR to="/services" onClick={toggle} tabIndex={isOpen ? 0 : -1}>
              {t("menu.services")}
            </SidebarLinkR>
          </SidebarItem>
          <SidebarItem>
            <SidebarLinkR to="/study" onClick={toggle} tabIndex={isOpen ? 0 : -1}>
              {t("menu.study")}
            </SidebarLinkR>
          </SidebarItem>
          <SidebarItem>
            <Flag onClick={changeLanguage} aria-label={t("menu.accessibility.flagBtnAriaLabel")} tabIndex={isOpen ? 0 : -1}>
              <ReactCountryFlag countryCode={language === "en-US" ? "BR" : "US"} svg alt="" />
              <span>{language === "en-US" ? "pt-BR" : "en-US"}</span>
            </Flag>
          </SidebarItem>
        </SidebarMenu>
      </SidebarWrapper>
    </SidebarContainer>
  );
};
