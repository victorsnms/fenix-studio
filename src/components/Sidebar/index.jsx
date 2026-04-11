import React, { useContext } from "react";
import ReactCountryFlag from "react-country-flag";
import { CommonContext } from "../../providers/CommonContext";
import { IconClose } from "../../icons";
import {
  SidebarContainer,
  Icon,
  SidebarWrapper,
  SidebarMenu,
  SidebarItem,
  SidebarLinkR,
  Flag,
} from "./SidebarElements";

export const Sidebar = ({ isOpen, toggle }) => {
  const { t, language, changeLanguage } = useContext(CommonContext);

  const flagCode  = language === "en-US" ? "BR" : "US";
  const langLabel = language === "en-US" ? "BR" : "EN";

  return (
    <SidebarContainer
      isOpen={isOpen}
      aria-hidden={!isOpen}
      aria-label="Navigation menu"
    >
      <Icon
        onClick={toggle}
        aria-label={t("menu.accessibility.menuBurguerAriaLabel")}
        tabIndex={isOpen ? 0 : -1}
      >
        <IconClose size={24} aria-hidden="true" />
      </Icon>

      <SidebarWrapper id="sidebar" role="dialog" aria-modal={true}>
        <SidebarMenu>
          <SidebarItem>
            <SidebarLinkR to="/" onClick={toggle} tabIndex={isOpen ? 0 : -1}>
              {t("menu.home")}
            </SidebarLinkR>
          </SidebarItem>
          <SidebarItem>
            <SidebarLinkR to="/about" onClick={toggle} tabIndex={isOpen ? 0 : -1}>
              {t("menu.about")}
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
            <SidebarLinkR to="/contact" onClick={toggle} tabIndex={isOpen ? 0 : -1}>
              {t("menu.contact")}
            </SidebarLinkR>
          </SidebarItem>

          <SidebarItem>
            <Flag
              onClick={changeLanguage}
              aria-label={t("menu.accessibility.flagBtnAriaLabel")}
              tabIndex={isOpen ? 0 : -1}
            >
              <ReactCountryFlag
                countryCode={flagCode}
                svg
                style={{ width: "22px", height: "auto" }}
                aria-hidden="true"
              />
              {langLabel}
            </Flag>
          </SidebarItem>
        </SidebarMenu>
      </SidebarWrapper>
    </SidebarContainer>
  );
};
