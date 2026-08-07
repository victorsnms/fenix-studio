import React, { useContext } from "react";
import { Link } from "react-router-dom";
import {
  FooterContainer,
  FooterWatermark,
  FooterInner,
  FooterMain,
  FooterBrandCol,
  FooterLogo,
  FooterSlogan,
  FooterNavCol,
  FooterColTitle,
  FooterNavList,
  FooterNavItem,
  FooterNavLink,
  FooterSocialCol,
  FooterSocialList,
  FooterSocialItem,
  FooterSocialLink,
  FooterBottom,
  FooterCredits,
  FooterTermsLink,
} from "./FooterElements";
import {
  IconInstagram,
  IconWhatsapp,
  IconTiktok,
  IconLinkedin,
  IconYoutube,
  IconTwitter,
  IconFacebook,
} from "../../icons";
import { brandLogos } from "../../logos";
import { CommonContext } from "../../providers/CommonContext";

const SOCIAL_ICON_MAP = {
  Instagram: <IconInstagram size={16} aria-hidden="true" />,
  Whatsapp:  <IconWhatsapp  size={16} aria-hidden="true" />,
  TikTok:    <IconTiktok    size={16} aria-hidden="true" />,
  Linkedin:  <IconLinkedin  size={16} aria-hidden="true" />,
  Youtube:   <IconYoutube   size={16} aria-hidden="true" />,
  Twitter:   <IconTwitter   size={16} aria-hidden="true" />,
  Facebook:  <IconFacebook  size={16} aria-hidden="true" />,
};

export const Footer = () => {
  const { footerContent, toggleHome } = useContext(CommonContext);

  return (
    <FooterContainer role="contentinfo">
      {/* Decorative watermark — hidden from assistive tech */}
      <FooterWatermark aria-hidden="true">
        <img src={brandLogos.icon} alt="" />
      </FooterWatermark>

      <FooterInner>
        <FooterMain>
          {/* ── Column 1: Logo + Slogan ── */}
          <FooterBrandCol>
            <Link to="/" onClick={toggleHome} aria-label={footerContent.accessibility.altLogo}>
              <FooterLogo src={brandLogos.horizontalWhite} alt="Fenix Studios" />
            </Link>
            <FooterSlogan>{footerContent.shortText}</FooterSlogan>
          </FooterBrandCol>

          {/* ── Column 2: Institucional ── */}
          <FooterNavCol aria-label={footerContent.institucionalTitle}>
            <FooterColTitle>{footerContent.institucionalTitle}</FooterColTitle>
            <FooterNavList>
              {footerContent.institucionalLinks.map((link, i) => (
                <FooterNavItem key={i}>
                  <FooterNavLink to={link.path}>{link.title}</FooterNavLink>
                </FooterNavItem>
              ))}
            </FooterNavList>
          </FooterNavCol>

          {/* ── Column 3: Serviços ── */}
          <FooterNavCol aria-label={footerContent.servicosTitle}>
            <FooterColTitle>{footerContent.servicosTitle}</FooterColTitle>
            <FooterNavList>
              {footerContent.serviceLinks.map((link, i) => (
                <FooterNavItem key={i}>
                  <FooterNavLink to={link.path}>{link.title}</FooterNavLink>
                </FooterNavItem>
              ))}
            </FooterNavList>
          </FooterNavCol>

          {/* ── Column 4: Social Media ── */}
          <FooterSocialCol>
            <FooterColTitle>{footerContent.socialMediaTitle}</FooterColTitle>
            <FooterSocialList
              aria-label={footerContent.accessibility.socialMediaSectionLabel}
            >
              {footerContent.socialLinks.map((socialLink, i) => (
                <FooterSocialItem key={i}>
                  <FooterSocialLink
                    href={socialLink.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={socialLink.media}
                  >
                    {SOCIAL_ICON_MAP[socialLink.media]}
                  </FooterSocialLink>
                </FooterSocialItem>
              ))}
            </FooterSocialList>
          </FooterSocialCol>
        </FooterMain>
      </FooterInner>

      {/* ── Bottom bar ── */}
      <FooterBottom>
        <FooterCredits>
          &copy;{new Date().getFullYear()} {footerContent.rights} {footerContent.madeBy}{" "}
          <FooterTermsLink to="/rael-design">Rael Design</FooterTermsLink>
          {" "}&amp;{" "}
          <FooterTermsLink to="/victor-martins">Victor Martins</FooterTermsLink>
        </FooterCredits>

        <FooterTermsLink to={footerContent.termsPath}>
          {footerContent.terms}
        </FooterTermsLink>
      </FooterBottom>
    </FooterContainer>
  );
};
