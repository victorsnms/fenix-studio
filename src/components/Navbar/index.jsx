import React, { useContext } from "react";
import ReactCountryFlag from "react-country-flag";
import { CommonContext } from "../../providers/CommonContext";
import { brandLogos } from "../../logos";
import { IconMenu, IconArrowDown } from "../../icons";
import {
  Nav,
  NavbarContainer,
  NavLogo,
  Logo,
  NavMenu,
  NavItem,
  NavLinksR,
  NavRight,
  LangToggle,
  MobileIcon,
} from "./NavBarElements";

export const Navbar = ({ toggle }) => {
  const { t, language, changeLanguage, toggleHome } = useContext(CommonContext);

  const flagCode  = language === "en-US" ? "BR" : "US";
  const langLabel = language === "en-US" ? "BR" : "EN";

  return (
    <Nav>
      <NavbarContainer>
        {/* Logo — SVG asset from Figma node 2191:9892, 193×50px */}
        <NavLogo to="/" onClick={toggleHome} aria-label={t("menu.accessibility.navLogoAlt")}>
          <Logo src={brandLogos.horizontalSvg} alt="Fenix Studios" />
        </NavLogo>

        {/* Desktop nav links — hidden on tablet/mobile */}
        <NavMenu>
          <NavItem>
            <NavLinksR to="/">{t("menu.home")}</NavLinksR>
          </NavItem>
          <NavItem>
            <NavLinksR to="/about">{t("menu.about")}</NavLinksR>
          </NavItem>
          <NavItem>
            <NavLinksR to="/reel">{t("menu.reel")}</NavLinksR>
          </NavItem>
          <NavItem>
            <NavLinksR to="/services">
              {t("menu.services")}
              <IconArrowDown size={12} aria-hidden="true" />
            </NavLinksR>
          </NavItem>
          <NavItem>
            <NavLinksR to="/study">{t("menu.study")}</NavLinksR>
          </NavItem>
          <NavItem>
            <NavLinksR to="/contact">{t("menu.contact")}</NavLinksR>
          </NavItem>
        </NavMenu>

        {/* Right controls: language toggle + hamburger (tablet/mobile only) */}
        <NavRight>
          <LangToggle
            onClick={changeLanguage}
            aria-label={t("menu.accessibility.flagBtnAriaLabel")}
          >
            <ReactCountryFlag
              countryCode={flagCode}
              svg
              style={{ width: "18px", height: "12px" }}
              aria-hidden="true"
            />
            {langLabel}
          </LangToggle>

          <MobileIcon
            onClick={toggle}
            aria-label={t("menu.accessibility.menuBurguerAriaLabel")}
          >
            <IconMenu size={24} aria-hidden="true" />
          </MobileIcon>
        </NavRight>
      </NavbarContainer>
    </Nav>
  );
};
