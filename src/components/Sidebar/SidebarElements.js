import styled, { css } from "styled-components";
import { Link as LinkR } from "react-router-dom";

// ─── Overlay / Shell ──────────────────────────────────────────────────────────
export const SidebarContainer = styled.aside`
  position: fixed;
  z-index: 999;
  inset: 0;
  background: var(--color-bg-darker);
  display: flex;
  flex-direction: column;
  overflow: hidden;
  transition: opacity 0.3s ease-in-out, visibility 0.3s ease-in-out;
  opacity: ${({ isOpen }) => (isOpen ? 1 : 0)};
  visibility: ${({ isOpen }) => (isOpen ? "visible" : "hidden")};
  pointer-events: ${({ isOpen }) => (isOpen ? "auto" : "none")};
`;

// ─── Header (logo + close button) ─────────────────────────────────────────────
// Mirrors the navbar header bar height so the logo aligns visually
export const SidebarHeader = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  flex-shrink: 0;
  height: 90px;
  padding: 0 20px 0 20px;
  border-bottom: 1px solid rgba(255, 255, 255, 0.12);

  @media (max-width: 480px) {
    height: 68px;
    padding: 0 15px;
  }
`;

export const SidebarLogo = styled(LinkR)`
  display: flex;
  align-items: center;
  text-decoration: none;
  flex-shrink: 0;
`;

export const SidebarLogoImg = styled.img`
  display: block;
  width: 150px;
  height: 38.86px;
  object-fit: contain;
  object-position: left center;
`;

export const CloseBtn = styled.button`
  display: flex;
  align-items: center;
  justify-content: center;
  background: transparent;
  border: none;
  cursor: pointer;
  color: var(--color-white);
  font-size: 22px;
  padding: 8px;
  flex-shrink: 0;
  transition: color 0.2s ease;

  &:hover,
  &:focus-visible {
    color: var(--color-primary);
    outline: none;
  }
`;

// ─── Scrollable content area ───────────────────────────────────────────────────
export const SidebarScrollArea = styled.div`
  flex: 1;
  overflow-y: auto;
  display: flex;
  flex-direction: column;
  padding-bottom: 24px;

  /* Custom scrollbar */
  &::-webkit-scrollbar { width: 4px; }
  &::-webkit-scrollbar-track { background: transparent; }
  &::-webkit-scrollbar-thumb { background: rgba(255,255,255,0.15); border-radius: 2px; }
`;

// ─── Nav link list ─────────────────────────────────────────────────────────────
export const SidebarMenu = styled.ul`
  list-style: none;
  margin: 0;
  padding: 0;
`;

// Every item has a bottom divider
export const SidebarItem = styled.li`
  border-bottom: 1px solid rgba(255, 255, 255, 0.12);
`;

const linkBase = css`
  font-family: var(--ds-font-brand);
  font-weight: var(--ds-font-weight-bold);
  font-size: 18px;
  line-height: 1.2;
  text-transform: uppercase;
  color: var(--color-white);
  text-decoration: none;
  display: flex;
  align-items: center;
  width: 100%;
  padding: 18px 20px;
  transition: color 0.2s ease;

  &:hover,
  &:focus-visible {
    color: var(--color-primary);
    outline: none;
  }

  @media (max-width: 480px) {
    padding: 16px 15px;
  }
`;

export const SidebarLinkR = styled(LinkR)`
  ${linkBase}
`;

// ─── Services accordion button ─────────────────────────────────────────────────
export const ServicesBtn = styled.button`
  ${linkBase}
  background: transparent;
  border: none;
  cursor: pointer;
  justify-content: space-between;

  svg {
    flex-shrink: 0;
    transition: transform 0.25s ease;
    transform: ${({ isOpen }) => (isOpen ? "rotate(180deg)" : "rotate(0deg)")};
  }
`;

// Sub-menu (PÓS PRODUÇÃO, VFX)
export const SidebarSubMenu = styled.ul`
  list-style: none;
  margin: 0;
  padding: 0;
  overflow: hidden;
  max-height: ${({ isOpen }) => (isOpen ? "200px" : "0")};
  transition: max-height 0.3s ease;
`;

export const SidebarSubItem = styled.li`
  border-top: 1px solid rgba(255, 255, 255, 0.08);
`;

export const SidebarSubLinkR = styled(LinkR)`
  font-family: var(--ds-font-brand);
  font-weight: var(--ds-font-weight-bold);
  font-size: 15px;
  line-height: 1.2;
  text-transform: uppercase;
  color: var(--color-white);
  text-decoration: none;
  display: flex;
  align-items: center;
  width: 100%;
  padding: 14px 20px 14px 44px;
  transition: color 0.2s ease;

  &:hover,
  &:focus-visible {
    color: var(--color-primary);
    outline: none;
  }

  @media (max-width: 480px) {
    padding: 12px 15px 12px 36px;
  }
`;

// ─── Contact info section ──────────────────────────────────────────────────────
export const SidebarContact = styled.div`
  padding: 24px 20px 0;

  @media (max-width: 480px) {
    padding: 20px 15px 0;
  }
`;

// 2-col on tablet, 1-col on mobile
export const SidebarContactGrid = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 16px 24px;

  @media (max-width: 480px) {
    grid-template-columns: 1fr;
    gap: 14px;
  }
`;

export const SidebarContactItem = styled.div`
  display: flex;
  align-items: center;
  gap: 10px;
  color: rgba(255, 255, 255, 0.75);
  font-family: var(--ds-font-brand);
  font-weight: var(--ds-font-weight-regular);
  font-size: 12px;
  line-height: 1.4;
  text-transform: uppercase;
  letter-spacing: 0.05em;

  svg {
    flex-shrink: 0;
    color: var(--color-icon-muted);
  }
`;

// ─── Social icons ─────────────────────────────────────────────────────────────
export const SidebarSocial = styled.div`
  padding: 20px 20px 0;

  @media (max-width: 480px) {
    padding: 18px 15px 0;
  }
`;

export const SidebarSocialList = styled.div`
  display: flex;
  align-items: center;
  gap: 8px;
`;

export const SidebarSocialLink = styled.a`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 40px;
  height: 40px;
  /* border: 1px solid rgba(255, 255, 255, 0.3); */
  color: var(--color-white);
  text-decoration: none;
  transition: border-color 0.2s ease, color 0.2s ease, background 0.2s ease;

  &:hover,
  &:focus-visible {
    border-color: var(--color-primary);
    color: var(--color-primary);
    outline: none;
  }
`;

// ─── CTA button ───────────────────────────────────────────────────────────────
export const SidebarCTAWrap = styled.div`
  padding: 20px 20px 0;

  @media (max-width: 480px) {
    padding: 18px 15px 0;
  }
`;

export const SidebarCTABtn = styled(LinkR)`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  padding: 18px 24px;
  background: var(--color-primary);
  color: var(--color-white);
  font-family: var(--ds-font-brand);
  font-weight: var(--ds-font-weight-bold);
  font-size: 16px;
  line-height: 1.2;
  text-transform: uppercase;
  text-decoration: none;
  letter-spacing: 0.08em;
  transition: background 0.2s ease;

  &:hover,
  &:focus-visible {
    background: var(--color-primary-hover);
    outline: none;
  }
`;
