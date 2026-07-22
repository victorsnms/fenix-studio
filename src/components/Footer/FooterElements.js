import styled from "styled-components";
import { Link } from "react-router-dom";

// ─── Shell ────────────────────────────────────────────────────────────────────
export const FooterContainer = styled.footer`
  position: relative;
  width: 100%;
  background-color: var(--color-primary);
  overflow: hidden;
  color: var(--color-white);
`;

/** Decorative phoenix watermark — large, clipped, bottom-right */
export const FooterWatermark = styled.div`
  position: absolute;
  bottom: -299px;
  right: -80px;
  width: 764px;
  height: 780px;
  pointer-events: none;
  user-select: none;

  img {
    display: block;
    width: 100%;
    height: 100%;
    object-fit: contain;
    filter: brightness(0) invert(1);
    opacity: 0.12;
  }

  @media (max-width: 768px) {
    bottom: -98px;
    right: -283px;
  }

  @media (max-width: 480px) {
    bottom: -142px;
    right: -325px;
  }
`;

// ─── Main content area ────────────────────────────────────────────────────────
export const FooterInner = styled.div`
  position: relative;
  z-index: 1;
  max-width: 1380px;
  margin: 0 auto;
  padding: 65px 30px 0;

  @media (max-width: 768px) {
    padding: 60px 20px 0;
  }
`;

/** 4-column grid on desktop → 2 on tablet → 1 on mobile */
export const FooterMain = styled.div`
  display: grid;
  grid-template-columns: 1.6fr 1fr 1fr 1fr;
  gap: 48px;
  align-items: start;

  @media (max-width: 1024px) {
    grid-template-columns: 1fr 1fr;
    gap: 48px 32px;
  }

  @media (max-width: 560px) {
    grid-template-columns: 1fr;
    gap: 48px;
  }
`;

// ─── Column 1 — Logo + Slogan ─────────────────────────────────────────────────
export const FooterBrandCol = styled.div`
  display: flex;
  flex-direction: column;
  gap: 45px;
`;

export const FooterLogo = styled.img`
  display: block;
  width: 219px;
  height: 56.58px;   /* exact Figma dimensions — node 2191:10257 */
  object-fit: contain;
  object-position: left center;
`;

export const FooterSlogan = styled.p`
  font-family: var(--ds-font-brand);
  font-weight: var(--ds-font-weight-heavy);
  font-size: 26px;
  line-height: 28.8px;
  text-transform: uppercase;
  color: var(--color-white);
  max-width: 337px;
  margin: 0;
`;

// ─── Columns 2 & 3 — Nav links (Institucional / Serviços) ────────────────────
export const FooterNavCol = styled.nav`
  display: flex;
  flex-direction: column;
  gap: 30px;
`;

export const FooterColTitle = styled.h3`
  font-family: var(--ds-font-brand);
  font-weight: var(--ds-font-weight-heavy);
  font-size: 26px;
  line-height: 24px;
  text-transform: uppercase;
  color: var(--color-white);
  margin: 0;
`;

export const FooterNavList = styled.ul`
  list-style: none;
  margin: 0;
  padding: 0;
  display: flex;
  flex-direction: column;
  gap: 25px;
`;

export const FooterNavItem = styled.li``;

export const FooterNavLink = styled(Link)`
  font-family: var(--ds-font-brand);
  font-weight: var(--ds-font-weight-regular);
  font-size: 16px;
  line-height: 28px;
  text-transform: uppercase;
  color: var(--color-white);
  text-decoration: none;
  transition: opacity 0.2s ease;

  &:hover,
  &:focus-visible {
    opacity: 0.75;
    outline: none;
  }

  &:focus-visible {
    text-decoration: underline;
  }
`;

// ─── Column 4 — Social Media ──────────────────────────────────────────────────
export const FooterSocialCol = styled.div`
  display: flex;
  flex-direction: column;
  gap: 30px;
`;

export const FooterSocialList = styled.ul`
  list-style: none;
  margin: 0;
  padding: 0;
  display: flex;
  flex-wrap: wrap;
  gap: 6px;
`;

export const FooterSocialItem = styled.li``;

/** 44×44 white square icon button */
export const FooterSocialLink = styled.a`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 44px;
  height: 44px;
  background: var(--color-white);
  color: var(--color-primary);
  font-size: 16px;
  text-decoration: none;
  transition: opacity 0.2s ease;
  flex-shrink: 0;

  &:hover,
  &:focus-visible {
    opacity: 0.85;
    outline: 2px solid var(--color-white);
    outline-offset: 2px;
  }
`;

// ─── Bottom bar ───────────────────────────────────────────────────────────────
export const FooterBottom = styled.div`
  position: relative;
  z-index: 1;
  max-width: 1380px;
  margin: 40px auto 0;
  padding: 20px 0px 24px;
  border-top: 1px solid var(--color-white);
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 16px;

  font-family: var(--ds-font-brand);
  font-weight: var(--ds-font-weight-semibold);
  font-size: 16px;
  line-height: 28.8px;
  text-transform: uppercase;
  color: var(--color-white);

  @media (max-width: 768px) {
    flex-direction: column;
    align-items: flex-start;
    padding: 0 20px 24px;
    gap: 4px;
  }
`;

export const FooterCopyright = styled.span``;

export const FooterCredits = styled.div`
  display: flex;
  align-items: center;
  gap: 4px;
  flex-wrap: wrap;

  a {
    color: var(--color-white);
    text-decoration: none;

    &:hover,
    &:focus-visible {
      text-decoration: underline;
    }
  }
`;

export const FooterTermsLink = styled(Link)`
  color: var(--color-white);
  text-decoration: none;
  white-space: nowrap;

  &:hover,
  &:focus-visible {
    text-decoration: underline;
  }
`;
