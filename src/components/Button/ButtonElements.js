/**
 * Button Design System — Fenix Studios
 * Source: Figma "Fenix Studios Final" — node 2191:10466 "Button"
 *
 * All button variants are defined here as styled-components.
 * Import from this file to use design-system-aligned buttons.
 *
 * Usage:
 *   import { PrimaryButton, SecondaryButton } from '../Button/ButtonElements';
 *   <PrimaryButton onClick={...}>Começar Agora</PrimaryButton>
 *
 * Shared traits (all text buttons):
 *   - Font:      Peridot PE Variable, Bold (700)
 *   - Size:      16px
 *   - Case:      uppercase
 *   - Cursor:    pointer
 */

import styled from "styled-components";

// ─── Shared base ─────────────────────────────────────────────────────────────
const ButtonBase = styled.button`
  display: inline-flex;
  align-items: center;
  justify-content: center;
  font-family: var(--ds-font-brand);
  font-weight: var(--ds-font-weight-bold);
  font-size: 16px;
  text-transform: uppercase;
  white-space: nowrap;
  cursor: pointer;
  border: none;
  background: transparent;
  transition: background 0.2s ease, color 0.2s ease, border-color 0.2s ease;
`;

// ─── Primary Button ───────────────────────────────────────────────────────────
// Figma: node 2191:10472 — 199×64, solid red bg
// Default: bg #e20613, white text
// Hover:   bg #af0a14
export const PrimaryButton = styled(ButtonBase)`
  background: var(--color-primary);
  color: var(--color-white);
  height: 64px;
  padding: 10px 28px;

  &:hover {
    background: var(--color-primary-hover);
  }
`;

// ─── Secondary Button ─────────────────────────────────────────────────────────
// Figma: node 2191:10477 — 199×64, transparent with white border
// Default: transparent bg, 1px solid white border, white text
// Hover:   bg #af0a14, no border
export const SecondaryButton = styled(ButtonBase)`
  background: transparent;
  color: var(--color-white);
  border: 1px solid var(--color-white);
  height: 64px;
  padding: 10px 28px;

  &:hover {
    background: var(--color-primary-hover);
    border-color: var(--color-primary-hover);
  }
`;

// ─── Compact Button ───────────────────────────────────────────────────────────
// Figma: node 2191:10482 "Botão estilo 5" — 199×40 (shorter variant of Secondary)
// Default: transparent bg, 1px solid white border, white text
// Hover:   bg #af0a14
export const CompactButton = styled(ButtonBase)`
  background: transparent;
  color: var(--color-white);
  border: 1px solid var(--color-white);
  height: 40px;
  padding: 10px 28px;

  &:hover {
    background: var(--color-primary-hover);
    border-color: var(--color-primary-hover);
  }
`;

// ─── Bio Button ───────────────────────────────────────────────────────────────
// Figma: node 2191:10514 "Component 9" — 117×40
// Default: transparent bg, 1px solid white border, white text
// Hover:   white bg, red (#e20613) text  ← inverted
export const BioButton = styled(ButtonBase)`
  background: transparent;
  color: var(--color-white);
  border: 1px solid var(--color-white);
  height: 40px;
  padding: 6px 28px;

  &:hover {
    background: var(--color-white);
    color: var(--color-primary);
    border-color: var(--color-white);
  }
`;

// ─── Menu Text Button ─────────────────────────────────────────────────────────
// Figma: node 2191:10467 "Menu Text" — 132×48, used in navbar links
// Default: white text, no bg, no border
// Hover:   red (#e20613) text
export const MenuTextButton = styled(ButtonBase)`
  color: var(--color-white);
  padding: 10px;
  height: 48px;

  &:hover {
    color: var(--color-primary);
  }
`;

// ─── Text Button ─────────────────────────────────────────────────────────────
// Figma: node 2191:10492 "Text" — inline text link (e.g. "VER BIO")
// Default: white text
// Hover:   red (#e20613) text
export const TextButton = styled(ButtonBase)`
  color: var(--color-white);
  padding: 0;

  &:hover {
    color: var(--color-primary);
  }
`;

// ─── Back to Top Button ───────────────────────────────────────────────────────
// Figma: node 2191:10487 "back to top" — 50×50 square
// Default: bg #a1343a (deep red), box-shadow
// Hover:   bg #af0a14
export const BackToTopButton = styled(ButtonBase)`
  background: var(--color-primary-dark);
  color: var(--color-white);
  width: 50px;
  height: 50px;
  padding: 16px;
  box-shadow: 0px 0px 5px 0px rgba(0, 0, 0, 0.5);

  &:hover {
    background: var(--color-primary-hover);
  }
`;

// ─── Play Button ─────────────────────────────────────────────────────────────
// Figma: node 2191:10507 "Play Button" — 84×84 circle
// Default: bg #e20613, border-radius 42px
// Hover:   bg #af0a14
export const PlayButton = styled(ButtonBase)`
  background: var(--color-primary);
  color: var(--color-white);
  width: 84px;
  height: 84px;
  border-radius: 42px;

  &:hover {
    background: var(--color-primary-hover);
  }
`;

// ─── Close Button ─────────────────────────────────────────────────────────────
// Figma: node 2191:10497 "Close" — 62×62, transparent with close icon inside
export const CloseButton = styled(ButtonBase)`
  color: var(--color-white);
  width: 62px;
  height: 62px;
  padding: 10px;

  &:hover {
    color: var(--color-primary);
  }
`;

// ─── Arrow Button ─────────────────────────────────────────────────────────────
// Figma: node 2191:10523 / 2191:10532 "arrow - left / right" — 36×34
// Default: 1px solid #515151 border
// Active:  1px solid white border
export const ArrowButton = styled(ButtonBase)`
  width: 36px;
  height: 34px;
  padding: 8px;
  border: 1px solid #515151;
  color: var(--color-white);

  &:hover,
  &.active {
    border-color: var(--color-white);
  }
`;

// ─── Search Button ────────────────────────────────────────────────────────────
// Figma: node 2191:10541 "Search Button" — 53×53 square
// Default: bg #e20613
// Hover:   bg #af0a14
export const SearchButton = styled(ButtonBase)`
  background: var(--color-primary);
  color: var(--color-white);
  width: 53px;
  height: 53px;
  padding: 10px;

  &:hover {
    background: var(--color-primary-hover);
  }
`;
