import styled from "styled-components";
import FadeInAnimation from "../FadeInAnimation";

/**
 * Fixed wrapper — the fade lives on FadeInAnimation, positioning lives here.
 *
 * z-index 90 deliberately sits below every overlay on the site (MediaGallery
 * popup + Navbar 100, Sidebar 999, modals 1000) so the button can never cover
 * one, while still clearing page content (z-index 1–3).
 */
export const ScrollTopWrapper = styled(FadeInAnimation)`
  position: fixed;
  right: 30px;
  /* Clears the sticky header, then 30px of breathing room below it. Derived
     from the shared token so it follows any change to the Navbar height. */
  top: calc(var(--ds-header-height) + 30px);
  z-index: 90;

  @media (max-width: 1024px) {
    display: none;
  }
`;

export const ScrollTopButton = styled.button`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 50px;
  height: 50px;
  padding: 0;
  border: none;
  background: var(--color-primary-dark);
  color: var(--color-white);
  cursor: pointer;
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.45);
  transition: background 0.2s ease, transform 0.2s ease, box-shadow 0.2s ease;

  svg {
    display: block;
    width: 18px;
    height: 18px;
  }

  &:hover {
    background: var(--color-primary-hover);
    box-shadow: 0 6px 16px var(--color-overlay-55);
  }

  &:focus-visible {
    outline: 2px solid var(--color-white);
    outline-offset: 2px;
  }

  /* Nudge is decorative — skip it for users who asked to reduce motion. */
  @media (prefers-reduced-motion: no-preference) {
    &:hover {
      transform: translateY(-2px);
    }
  }
`;
