import styled from "styled-components";
import { Link } from "react-router-dom";

export const FooterContainer = styled.footer`
  width: 100%;
  background-color: #151515;
`;

export const FooterWrap = styled.div`
  width: 90%;
  max-width: 1300px;
  padding: 4em 24px 2em;
  display: grid;
  grid-template-columns: 1fr;
  text-align: center;
  margin: 0 auto;

  @media (min-width: 768px) {
    grid-template-columns: 50% 25% 25%;
    text-align: left;
  }
`;

export const FooterBrand = styled.div`
  color: #f6f7f8;
  @media (max-width: 768px) {
    margin-bottom: 20px;
  }
  @media (min-width: 768px) {
    display: flex;
    flex-direction: column;
    align-items: start;
  }
`;

export const SocialLogo = styled(Link)`
  color: #f6f7f8;
  cursor: pointer;
  text-decoration: none;
  font-size: 1.5rem;
  font-weight: 500;
`;

export const Logo = styled.img`
  max-width: 140px;
  margin-bottom: 12px;
`;

export const FooterBrandText = styled.p`
  max-width: 400px;
  margin: 0 auto;
  font-size: 18px;

  @media (min-width: 768px) {
    margin: 0;
  }
`;

export const FooterLinksContainer = styled.nav`
  @media (min-width: 768px) {
    margin-top: 0;
  }
`;

export const FooterLinksList = styled.ul`
  display: flex;
  justify-content: center;
  list-style-type: none;
  flex-wrap: wrap;
  row-gap: 10px;

  @media (min-width: 768px) {
    border-right: 3px solid #f6f7f8cc;
    display: block;
    margin-top: 0;
  }

  @media (max-width: 768px) {
    margin-bottom: 20px;
  }
`;

export const FooterLinkItem = styled.li`
  font-size: 14px;

  &:not(:last-child)::after {
    content: "|";
    padding: 0.5rem;
    color: #f6f7f8;
    text-decoration: none;
  }

  @media (min-width: 768px) {
    &:not(:last-child) {
      margin-bottom: 1rem;
    }
    text-align: center;

    &:not(:last-child)::after {
      content: none;
      padding: 0;
    }
  }
`;

export const FooterLink = styled(Link)`
  color: #f6f7f8;
  text-decoration: none;

  &:hover {
    color: #ed1c24;
    transform: 0.3s ease-out;
  }
`;

export const SocialMedia = styled.div`
  @media (min-width: 768px) {
    display: flex;
    align-items: center;
    justify-content: center;
  }
`;

export const SocialMediaList = styled.ul`
  list-style-type: none;
`;

export const SocialMediaItem = styled.li`
  &:not(:last-child) {
    margin-bottom: 0.77rem;
  }
`;

export const SocialIconLink = styled.a`
  display: flex;
  justify-content: center;
  color: #f6f7f8;
  font-size: 14px;
  text-decoration: none;

  &:hover {
    color: #ed1c24;
    transform: 0.3s ease-out;
  }

  @media (min-width: 768px) {
    justify-content: center;
  }
`;

export const SocialIcon = styled.span`
  display: inline-block;
  padding: 2px 8px 2px 0;
`;

export const WebSiteRights = styled.div`
  width: 90%;
  padding: 0 24px;
  max-width: 1300px;
  color: white;
  margin: 0 auto;
  padding-bottom: 2em;
  text-align: center;
  @media (min-width: 768px) {
    text-align: start;
  }
`;

export const WebSiteRightsText = styled.small`
  display: flex;
  flex-direction: column;
  color: white;
  a {
    color: white;
    text-underline-offset: 3px;
  }
`;
