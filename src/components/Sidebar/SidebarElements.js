import styled from "styled-components";
import { Link as LinkR } from "react-router-dom";

// ─── Overlay / Shell ──────────────────────────────────────────────────────────
export const SidebarContainer = styled.aside`
  position: fixed;
  z-index: 999;
  inset: 0;
  background: var(--color-bg-darker);
  display: flex;
  flex-direction: column;
  transition: opacity 0.3s ease-in-out, visibility 0.3s ease-in-out;
  opacity: ${({ isOpen }) => (isOpen ? 1 : 0)};
  visibility: ${({ isOpen }) => (isOpen ? "visible" : "hidden")};
  pointer-events: ${({ isOpen }) => (isOpen ? "auto" : "none")};
`;

// ─── Close button ─────────────────────────────────────────────────────────────
export const Icon = styled.button`
  position: absolute;
  top: 20px;
  right: 20px;
  background: transparent;
  border: none;
  cursor: pointer;
  color: var(--color-white);
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 8px;
  font-size: 24px;
  transition: color 0.2s ease;

  &:hover,
  &:focus-visible {
    color: var(--color-primary);
    outline: none;
  }
`;

// ─── Content ──────────────────────────────────────────────────────────────────
export const SidebarWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  flex: 1;
`;

export const SidebarMenu = styled.ul`
  list-style: none;
  margin: 0;
  padding: 0;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 8px;
`;

export const SidebarItem = styled.li`
  display: flex;
`;

export const SidebarLinkR = styled(LinkR)`
  font-family: var(--ds-font-brand);
  font-weight: var(--ds-font-weight-bold);
  font-size: 28px;
  line-height: 1.2;
  text-transform: uppercase;
  color: var(--color-white);
  text-decoration: none;
  padding: 12px 24px;
  transition: color 0.2s ease;

  &:hover,
  &:focus-visible {
    color: var(--color-primary);
    outline: none;
  }

  &:focus-visible {
    text-decoration: underline;
  }
`;

// ─── Language toggle (bottom of sidebar) ─────────────────────────────────────
export const Flag = styled.button`
  display: flex;
  align-items: center;
  gap: 10px;
  background: transparent;
  border: none;
  cursor: pointer;
  color: var(--color-white);
  font-family: var(--ds-font-brand);
  font-weight: var(--ds-font-weight-bold);
  font-size: 18px;
  text-transform: uppercase;
  padding: 12px 24px;
  margin-top: 16px;
  transition: color 0.2s ease;

  &:hover,
  &:focus-visible {
    color: var(--color-primary);
    outline: none;
  }
`;
