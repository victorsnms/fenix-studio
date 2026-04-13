import React, { useState, useContext } from "react";
import { useNavigate } from "react-router-dom";
import { CommonContext } from "../../providers/CommonContext";
import { brandLogos } from "../../logos";
import {
  IconClose,
  IconArrowDown,
  IconPhone,
  IconEmail,
  IconLocation,
  IconInstagram,
  IconWhatsapp,
  IconTiktok,
  IconLinkedin,
  IconYoutube,
} from "../../icons";
import {
  SidebarContainer,
  SidebarHeader,
  SidebarLogo,
  SidebarLogoImg,
  CloseBtn,
  SidebarScrollArea,
  SidebarMenu,
  SidebarItem,
  SidebarLinkR,
  ServicesBtn,
  SidebarSubMenu,
  SidebarSubItem,
  SidebarSubLinkR,
  SidebarContact,
  SidebarContactGrid,
  SidebarContactItem,
  SidebarSocial,
  SidebarSocialList,
  SidebarSocialLink,
  SidebarCTAWrap,
  SidebarCTABtn,
} from "./SidebarElements";

const SOCIAL_ICONS = [
  { icon: <IconInstagram size={16} aria-hidden="true" />, label: "Instagram",  href: "https://www.instagram.com/fenix/" },
  { icon: <IconLinkedin  size={16} aria-hidden="true" />, label: "LinkedIn",   href: "https://www.linkedin.com/company/fenix/" },
  { icon: <IconYoutube   size={16} aria-hidden="true" />, label: "YouTube",    href: "https://www.youtube.com/fenix" },
  { icon: <IconWhatsapp  size={16} aria-hidden="true" />, label: "WhatsApp",   href: "https://www.whatsapp.com/catalog/558100000000/?app_absent=0" },
  { icon: <IconTiktok    size={16} aria-hidden="true" />, label: "TikTok",     href: "https://www.tiktok.com/@fenix" },
];

export const Sidebar = ({ isOpen, toggle }) => {
  const { t } = useContext(CommonContext);
  const [servicesOpen, setServicesOpen] = useState(false);
  const navigate = useNavigate();

  const handleLinkClick = () => {
    toggle();
    setServicesOpen(false);
  };

  const handleCTAClick = () => {
    handleLinkClick();
    navigate("/contact");
  };

  return (
    <SidebarContainer
      isOpen={isOpen}
      aria-hidden={!isOpen}
      role="dialog"
      aria-modal={true}
      aria-label={t("menu.accessibility.menuBurguerAriaLabel")}
    >
      {/* ── Header ── */}
      <SidebarHeader>
        <SidebarLogo to="/" onClick={handleLinkClick} aria-label={t("menu.accessibility.navLogoAlt")}>
          <SidebarLogoImg src={brandLogos.horizontalSvg} alt="Fenix Studios" />
        </SidebarLogo>
        <CloseBtn onClick={toggle} aria-label="Fechar menu">
          <IconClose size={22} aria-hidden="true" />
        </CloseBtn>
      </SidebarHeader>

      {/* ── Scrollable body ── */}
      <SidebarScrollArea>
        <SidebarMenu>
          <SidebarItem>
            <SidebarLinkR to="/" onClick={handleLinkClick} tabIndex={isOpen ? 0 : -1}>
              {t("menu.home")}
            </SidebarLinkR>
          </SidebarItem>

          <SidebarItem>
            <SidebarLinkR to="/about" onClick={handleLinkClick} tabIndex={isOpen ? 0 : -1}>
              {t("menu.about")}
            </SidebarLinkR>
          </SidebarItem>

          <SidebarItem>
            <SidebarLinkR to="/reel" onClick={handleLinkClick} tabIndex={isOpen ? 0 : -1}>
              {t("menu.reel")}
            </SidebarLinkR>
          </SidebarItem>

          {/* Serviços — accordion */}
          <SidebarItem>
            <ServicesBtn
              isOpen={servicesOpen}
              onClick={() => setServicesOpen((v) => !v)}
              aria-expanded={servicesOpen}
              tabIndex={isOpen ? 0 : -1}
            >
              {t("menu.services")}
              <IconArrowDown size={16} aria-hidden="true" />
            </ServicesBtn>

            <SidebarSubMenu isOpen={servicesOpen} aria-hidden={!servicesOpen}>
              <SidebarSubItem>
                <SidebarSubLinkR to="/services" onClick={handleLinkClick} tabIndex={isOpen && servicesOpen ? 0 : -1}>
                  {t("menu.servicesPostProduction")}
                </SidebarSubLinkR>
              </SidebarSubItem>
              <SidebarSubItem>
                <SidebarSubLinkR to="/services" onClick={handleLinkClick} tabIndex={isOpen && servicesOpen ? 0 : -1}>
                  {t("menu.servicesVfx")}
                </SidebarSubLinkR>
              </SidebarSubItem>
            </SidebarSubMenu>
          </SidebarItem>

          <SidebarItem>
            <SidebarLinkR to="/study" onClick={handleLinkClick} tabIndex={isOpen ? 0 : -1}>
              {t("menu.study")}
            </SidebarLinkR>
          </SidebarItem>

          <SidebarItem>
            <SidebarLinkR to="/contact" onClick={handleLinkClick} tabIndex={isOpen ? 0 : -1}>
              {t("menu.contact")}
            </SidebarLinkR>
          </SidebarItem>
        </SidebarMenu>

        {/* ── Contact info ── */}
        <SidebarContact>
          <SidebarContactGrid>
            <SidebarContactItem>
              <IconPhone size={14} style={{ transform: "scaleX(-1)" }} aria-hidden="true" />
              contato@fenixstudio.com
            </SidebarContactItem>
            <SidebarContactItem>
              <IconLocation size={14} aria-hidden="true" />
              São Paulo – SP, Brasil
            </SidebarContactItem>
            <SidebarContactItem>
              <IconEmail size={14} aria-hidden="true" />
              contato@fenixstudio.com
            </SidebarContactItem>
          </SidebarContactGrid>
        </SidebarContact>

        {/* ── Social icons ── */}
        <SidebarSocial>
          <SidebarSocialList>
            {SOCIAL_ICONS.map(({ icon, label, href }) => (
              <SidebarSocialLink
                key={label}
                href={href}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={label}
                tabIndex={isOpen ? 0 : -1}
              >
                {icon}
              </SidebarSocialLink>
            ))}
          </SidebarSocialList>
        </SidebarSocial>

        {/* ── CTA ── */}
        <SidebarCTAWrap>
          <SidebarCTABtn to="/contact" onClick={handleLinkClick} tabIndex={isOpen ? 0 : -1}>
            {t("menu.contactCta")}
          </SidebarCTABtn>
        </SidebarCTAWrap>
      </SidebarScrollArea>
    </SidebarContainer>
  );
};
