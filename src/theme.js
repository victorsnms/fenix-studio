/**
 * Design System Tokens — Fenix Studios
 * Sources:
 *   - node 30:223 "Cor"     — colors, shadows
 *   - node 31:1026 "Espaços" — spacing scale, typography additions
 *
 * These tokens are the single source of truth for all design decisions.
 * CSS custom properties derived from these tokens are declared in App.css (:root).
 */

// ─── Primary Palette ───────────────────────────────────────────────────────
// The 5 master brand colors from the Figma color style page.
export const brandColors = {
  red: '#E20613',
  black: '#000000',
  dark: '#262626',
};

// ─── Secondary Palette ─────────────────────────────────────────────────────
// Named color variables from the Figma design system.
export const palette = {
  red: '#FF2D46',
  yellow: '#FFC700',
  blue: '#2388FF',
  green: '#63DE77',
};

// ─── Neutral Palette ───────────────────────────────────────────────────────
// Neutral colors/N from the Figma variable definitions.
export const neutral = {
  n800: '#19213D',
  n700: '#353E5C',
  n600: '#6D758F',
  n400: '#E1E4ED',
  n300: '#F1F3F7',
  n200: '#F8FAFF',
  n100: '#FFFFFF',
};

// ─── Spacing Scale ─────────────────────────────────────────────────────────
// From Figma node 31:1026 "Espaços" — spacer symbols at each size.
// Based on a 4px base unit with multiples of 8px beyond 16px.
export const spacing = {
  s4:   '4px',
  s8:   '8px',
  s12:  '12px',
  s16:  '16px',
  s24:  '24px',
  s32:  '32px',
  s40:  '40px',
  s48:  '48px',
  s56:  '56px',
  s64:  '64px',
  s72:  '72px',
  s80:  '80px',
  s88:  '88px',
  s96:  '96px',
  s112: '112px',
  s128: '128px',
  s168: '168px',
  s200: '200px',
};

// ─── Icon Sizes ────────────────────────────────────────────────────────────
// From Figma node 2154:2298 "Ícones" — icon usage sizes across the design.
// Full icon catalogue (react-icons mappings) is in src/icons.js.
export const iconSizes = {
  xs:   12,   // label icons, inline text
  sm:   16,   // social media list items (Listitem → Link inner SVG)
  md:   20,   // medium UI elements
  base: 24,   // default UI icons: close, arrows, hamburger
  lg:   25,   // contact icons (Border frame SVG with 1px red border)
  xl:   32,   // feature icons
};

// ─── Shadows ───────────────────────────────────────────────────────────────
// Neutral/Shadow 01, 02, and 03 from Figma.
export const shadows = {
  shadow01: '0px 0.5px 2px 0px rgba(25, 33, 61, 0.11)',
  shadow02: '0px 1px 4px 0px rgba(25, 33, 61, 0.08)',
  shadow03: '0px 2px 6px 0px rgba(25, 33, 61, 0.14)',
};

// ─── Typography ────────────────────────────────────────────────────────────
// Source: Figma node 30:280 "Tipografia"
export const typography = {
  // Font families
  fontBrand:  '"Peridot PE Variable", sans-serif',  // brand display headings
  fontUI:     '"Inter", sans-serif',                // UI / display scale
  fontBody:   '"Chillax", "Montserrat", sans-serif', // body copy

  // Font weights for Peridot PE Variable
  weights: {
    light:     300,
    regular:   400,
    semiBold:  600,
    bold:      700,
    extraBold: 800,
    black:     900,
    heavy:     950,
  },

  // Brand type scale — base 8px, ×2 per step (Figma node 30:311)
  // letterSpacing expressed as px value from Figma
  brandScale: {
    4:   { fontSize: '4px',   fontWeight: 600, letterSpacing: '0.14px', lineHeight: 1 },
    8:   { fontSize: '8px',   fontWeight: 600, letterSpacing: '0.28px', lineHeight: 1 },
    16:  { fontSize: '16px',  fontWeight: 600, letterSpacing: '0.56px', lineHeight: 1 },
    32:  { fontSize: '32px',  fontWeight: 900, letterSpacing: '1.12px', lineHeight: 1 },
    64:  { fontSize: '64px',  fontWeight: 900, letterSpacing: '2.24px', lineHeight: 1 },
    128: { fontSize: '128px', fontWeight: 950, letterSpacing: '4.48px', lineHeight: 1 },
  },

  // UI display scale — Inter (Figma node 30:223 / 31:1026)
  display: {
    1:          { fontSize: '12px', fontWeight: 400, lineHeight: '18px', letterSpacing: '0' },
    '1-upper':  { fontSize: '12px', fontWeight: 600, lineHeight: '18px', letterSpacing: '8px' },
    2:          { fontSize: '14px', fontWeight: 600, lineHeight: '20px', letterSpacing: '0' },
    '2-xbold':  { fontSize: '14px', fontWeight: 800, lineHeight: '20px', letterSpacing: '0' },
    3:          { fontSize: '16px', fontWeight: 600, lineHeight: '22px', letterSpacing: '0' },
    4:          { fontSize: '18px', fontWeight: 600, lineHeight: '24px', letterSpacing: '0' },
  },
};

// ─── Semantic Tokens ───────────────────────────────────────────────────────
// Project-specific mappings from design tokens to use-case names.
// These are also exposed as CSS custom properties (see App.css).
export const semantic = {
  // Backgrounds
  background: '#151515',
  bgDarker: '#0d0d0d',
  surface: '#222633',
  bgLight: '#f9f9f9',
  // Brand
  primary:      '#E20613',
  primaryHover: '#AF0A14',   // button hover / active state
  primaryDark:  '#A1343A',   // back-to-top default bg
  iconMuted:    '#9D9D9D',   // muted icon color (sidebar contact icons)
  // Text
  text: '#F6F7F8',
  textMuted: 'rgba(246, 247, 248, 0.8)',
  white: '#FFFFFF',
  // UI
  border: '#CCCCCC',
  // Overlays
  overlay30: 'rgba(0, 0, 0, 0.3)',
  overlay50: 'rgba(0, 0, 0, 0.5)',
  overlay55: 'rgba(0, 0, 0, 0.55)',
  overlay70: 'rgba(0, 0, 0, 0.7)',
  overlay80: 'rgba(0, 0, 0, 0.8)',
};

const theme = {
  brandColors,
  palette,
  neutral,
  spacing,
  iconSizes,
  shadows,
  typography,
  semantic,
};

export default theme;
