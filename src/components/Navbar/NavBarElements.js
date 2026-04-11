import styled from "styled-components";
import { Link as LinkR } from "react-router-dom";

// ─── Shell ────────────────────────────────────────────────────────────────────
// Heights from Figma: desktop ~120px (py-35 + 50px logo), tablet 90px, mobile 68px
export const Nav = styled.nav`
  position: sticky;
  top: 0;
  z-index: 100;
  width: 100%;
  height: 120px;
  background: var(--color-bg-darker);

  @media (max-width: 1024px) {
    height: 90px;
  }

  @media (max-width: 480px) {
    height: 68px;
  }
`;

export const NavbarContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  height: 100%;
  max-width: 1380px;
  margin: 0 auto;
  padding: 0 30px;

  @media (max-width: 480px) {
    padding: 0 15px;
  }
`;

// ─── Logo ─────────────────────────────────────────────────────────────────────
// Figma: 193×50px on desktop/tablet (node 2191:9892), 150×38.86px on mobile (node 2191:9840)
export const NavLogo = styled(LinkR)`
  display: flex;
  align-items: center;
  text-decoration: none;
  flex-shrink: 0;
`;

export const Logo = styled.img`
  display: block;
  width: 193px;
  height: 50px;
  object-fit: contain;
  object-position: left center;

  @media (max-width: 480px) {
    width: 150px;
    height: 38.86px;
  }
`;

// ─── Desktop Nav Menu ─────────────────────────────────────────────────────────
// Figma: links container gap-[32px], each link p-[10px], font 18px Bold Peridot uppercase
export const NavMenu = styled.ul`
  display: flex;
  align-items: center;
  list-style: none;
  margin: 0;
  padding: 0;
  gap: 0;

  @media (max-width: 1024px) {
    display: none;
  }
`;

export const NavItem = styled.li`
  display: flex;
  align-items: center;
`;

export const NavLinksR = styled(LinkR)`
  font-family: var(--ds-font-brand);
  font-weight: var(--ds-font-weight-bold);
  font-size: 18px;
  line-height: 28px;
  text-transform: uppercase;
  color: var(--color-white);
  text-decoration: none;
  padding: 10px;
  display: flex;
  align-items: center;
  gap: 8px;
  transition: color 0.2s ease;
  white-space: nowrap;

  &:hover,
  &:focus-visible {
    color: var(--color-primary);
    outline: none;
  }

  &:focus-visible {
    text-decoration: underline;
  }
`;

// ─── Right-side controls (lang toggle + hamburger) ────────────────────────────
export const NavRight = styled.div`
  display: flex;
  align-items: center;
  gap: 8px;
  flex-shrink: 0;
`;

// Figma: flag + "EN" text, Bold 18px Peridot, gap-[8px]
export const LangToggle = styled.button`
  display: flex;
  align-items: center;
  gap: 8px;
  background: transparent;
  border: none;
  cursor: pointer;
  padding: 8px;
  color: var(--color-white);
  font-family: var(--ds-font-brand);
  font-weight: var(--ds-font-weight-bold);
  font-size: 18px;
  line-height: 28px;
  text-transform: uppercase;
  transition: color 0.2s ease;

  &:hover,
  &:focus-visible {
    color: var(--color-primary);
    outline: none;
  }

  @media (max-width: 480px) {
    font-size: 16px;
    gap: 5px;
    padding: 6px;
  }
`;

// Hamburger — hidden on desktop, shown on tablet/mobile
export const MobileIcon = styled.button`
  display: none;
  align-items: center;
  justify-content: center;
  background: transparent;
  border: none;
  cursor: pointer;
  color: var(--color-white);
  font-size: 24px;
  padding: 8px;
  transition: color 0.2s ease;

  &:hover,
  &:focus-visible {
    color: var(--color-primary);
    outline: none;
  }

  @media (max-width: 1024px) {
    display: flex;
  }
`;
