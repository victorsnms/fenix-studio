import React, { useEffect, useState, useContext } from "react";
import { FaBars } from "react-icons/fa";
import { CommonContext } from "../../providers/CommonContext";
import fenixLogo from "../../images/logo.png";
import isMobileOrTablet from "../../utils/isMobile";
import ReactCountryFlag from "react-country-flag";
import { Nav, NavbarContainer, NavLogo, MobileIcon, NavMenu, NavItem, Logo, Flag, NavLinksR } from "./NavBarElements";

export const Navbar = ({ toggle, darkMode = false }) => {
  const { t, language, changeLanguage, toggleHome } = useContext(CommonContext);
  const [isMT, setIsMT] = useState(false);

  useEffect(() => {
    setIsMT(isMobileOrTablet(946));
  }, []);
  return (
    <>
      <Nav>
        <NavbarContainer>
          <NavLogo to="/" onClick={toggleHome}>
            <Logo src={fenixLogo} alt={t("menu.accessibility.navLogoAlt")} />
          </NavLogo>
          <MobileIcon onClick={toggle} aria-label={t("menu.accessibility.menuBurguerAriaLabel")}>
            <FaBars />
          </MobileIcon>
          <NavMenu aria-hidden={isMT ? true : false}>
            <NavItem>
              <NavLinksR to="/">{t("menu.home")}</NavLinksR>
            </NavItem>
            <NavItem>
              <NavLinksR to="/about">{t("menu.about")}</NavLinksR>
            </NavItem>
            <NavItem>
              <NavLinksR to="/contact">{t("menu.contact")}</NavLinksR>
            </NavItem>
            <NavItem>
              <NavLinksR to="/reels">{t("menu.reel")}</NavLinksR>
            </NavItem>
            <NavItem>
              <NavLinksR to="/services">{t("menu.services")}</NavLinksR>
            </NavItem>
            <NavItem>
              <NavLinksR to="/study">{t("menu.study")}</NavLinksR>
            </NavItem>
            <NavItem>
              <Flag onClick={changeLanguage} aria-label={t("menu.accessibility.flagBtnAriaLabel")}>
                <ReactCountryFlag countryCode={language === "en-US" ? "BR" : "US"} svg alt="" />
                <span>{language === "en-US" ? "pt-BR" : "en-US"}</span>
              </Flag>
            </NavItem>
          </NavMenu>
        </NavbarContainer>
      </Nav>
    </>
  );
};
