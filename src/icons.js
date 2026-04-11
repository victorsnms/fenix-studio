/**
 * Icon Design System — Fenix Studios
 * Source: Figma "Fenix Studios Final" — node 2154:2298 "Ícones"
 *
 * All icons are mapped to react-icons (already installed).
 * Import icons from this file to stay consistent with the design system.
 *
 * Usage:
 *   import { IconInstagram, IconClose } from '../icons';
 *   <IconInstagram size={16} />
 */

// ─── Social Media Icons ──────────────────────────────────────────────────────
// Figma: "Listitem → Link" frames (44×44 white square, 16×16 SVG inside).
// Used in: Footer, Sidebar, any social link list.
export {
  FaTwitter    as IconTwitter,
  FaInstagram  as IconInstagram,
  FaLinkedin   as IconLinkedin,
  FaYoutube    as IconYoutube,
  FaFacebook   as IconFacebook,
  FaWhatsapp   as IconWhatsapp,
  FaTiktok     as IconTiktok,
  FaPinterest  as IconPinterest,
} from 'react-icons/fa';

// ─── Contact Icons ────────────────────────────────────────────────────────────
// Figma: "Border" frames (47×47, 25×25 SVG, 1px #E20613 border).
// Used in: Contact page, contact info section.
export {
  FaPhone        as IconPhone,
  FaEnvelope     as IconEmail,
  FaMapMarkerAlt as IconLocation,
} from 'react-icons/fa';

// ─── Navigation / UI Icons ───────────────────────────────────────────────────
// Figma: standalone icon instances (24×24).
// Used in: Navbar, Sidebar, scroll-to-top button, accordions.
export {
  FaBars       as IconMenu,
  FaTimes      as IconClose,
  FaChevronUp  as IconArrowUp,
  FaChevronDown as IconArrowDown,
  FaPlay       as IconPlay,
  FaPlayCircle as IconPlayCircle,
} from 'react-icons/fa';

export {
  MdKeyboardArrowUp   as IconKeyboardArrowUp,
  MdKeyboardArrowDown as IconKeyboardArrowDown,
} from 'react-icons/md';

// ─── Flag / Language Icons ───────────────────────────────────────────────────
// Figma: "united-states" (18×12 PNG) and Brazil flag (SVG vector).
// Used in: Navbar flag toggle, Sidebar flag toggle.
// Note: rendered via react-country-flag (already installed).
// Usage: <ReactCountryFlag countryCode="US" /> / <ReactCountryFlag countryCode="BR" />
export const FLAG_US = 'US';
export const FLAG_BR = 'BR';

// ─── Content Icons ───────────────────────────────────────────────────────────
// Figma: second icon row — star rating, movie/edit, filter slider.
export {
  FaStar       as IconStar,
  FaStarHalf   as IconStarHalf,
  FaRegStar    as IconStarEmpty,
  FaFilm       as IconFilm,
  FaSlidersH   as IconFilter,
} from 'react-icons/fa';

// ─── Icon Size Scale ─────────────────────────────────────────────────────────
// Based on Figma icon usage sizes across the design.
export const ICON_SIZES = {
  xs:  12,   // label icons, inline text
  sm:  16,   // social media list items (Listitem → Link inner SVG)
  md:  20,   // medium UI elements
  base: 24,  // default UI icons (close, arrows, hamburger)
  lg:  25,   // contact icons (Border frame SVG)
  xl:  32,   // feature icons
};
