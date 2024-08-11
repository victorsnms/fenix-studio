import React, { useContext } from "react";
import { FooterContainer, FooterWrap, FooterBrand, FooterBrandText, SocialLogo, Logo, SocialMedia, SocialMediaList, SocialMediaItem, SocialIconLink, SocialIcon, FooterLinksContainer, FooterLinksList, FooterLinkItem, FooterLink, WebSiteRights, WebSiteRightsText } from "./FooterElements";
import { FaLinkedin, FaTwitter, FaInstagram, FaYoutube, FaFacebook } from "react-icons/fa";
import fenixLogo from "../../images/logo.png";
import { CommonContext } from "../../providers/CommonContext";

const socialIcon = {
  Linkedin: <FaLinkedin />,
  Facebook: <FaFacebook />,
  Instagram: <FaInstagram />,
  Twitter: <FaTwitter />,
  Youtube: <FaYoutube />,
};

export const Footer = () => {
  const { t, toggleHome, footerContent } = useContext(CommonContext);

  return (
    <FooterContainer>
      <FooterWrap>
        <FooterBrand>
          <SocialLogo to="/" onClick={toggleHome}>
            <Logo src={fenixLogo} alt={footerContent.accessibility.altLogo} style={{ maxHeight: "100px" }} />
          </SocialLogo>
          <FooterBrandText>{footerContent.shortText}</FooterBrandText>
        </FooterBrand>

        <FooterLinksContainer>
          <FooterLinksList>
            {footerContent.pageLinks.map((pageLink, index) => (
              <FooterLinkItem key={index}>
                <FooterLink to={pageLink.path}>{pageLink.title}</FooterLink>
              </FooterLinkItem>
            ))}
          </FooterLinksList>
        </FooterLinksContainer>

        <SocialMedia>
          <SocialMediaList>
            {footerContent.socialLinks.map((socialLink, index) => (
              <SocialMediaItem key={index}>
                <SocialIconLink href={socialLink.link} target="_blank">
                  <SocialIcon>{socialIcon[socialLink.media]}</SocialIcon>
                  {socialLink.media}
                </SocialIconLink>
              </SocialMediaItem>
            ))}
          </SocialMediaList>
        </SocialMedia>
      </FooterWrap>
      <WebSiteRights>
        <WebSiteRightsText>
          ©{new Date().getFullYear()} {t("footer.rights")}
          <a href="https://www.linkedin.com/in/victor--martins/" target="_blank" rel="noreferrer">
            {t("footer.developed")} Victor Martins
          </a>
        </WebSiteRightsText>
      </WebSiteRights>
    </FooterContainer>
  );
};
