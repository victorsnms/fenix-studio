/**
 * Logo Design System — Fenix Studios
 * Source: Figma "Fenix Studios Final" — node 6:192 "Logo"
 *
 * This file is the single source of truth for all logo assets.
 * Import from here to keep logo usage consistent across the project.
 *
 * Usage:
 *   import { brandLogos, clientLogos } from '../logos';
 *   <img src={brandLogos.icon} alt="Fenix Studios" />
 */

// ─── Brand Logos ─────────────────────────────────────────────────────────────
// Figma node 6:192 — brand logo variants defined by the design system.
//
// Variants (from Figma):
//   icon            — Phoenix icon only, no background        (node 32:1146, ~497×509)
//   favicon         — Icon on dark square background          (node 32:1143, 511×511)
//   faviconRound    — Icon on rounded-rect background         (node 32:1186, 512×512)
//   horizontalWhite — All-white SVG logo for colored bg       (node 32:1167, 219×56.58)  ✓ exported
//   horizontal      — Horizontal PNG, white text + red icon   (node 32:1167, ~563×146)
//   horizontalB     — Horizontal logo, black text + red       (node 32:1148, ~564×147)
//   verticalA       — Vertical stacked variant A              (node 32:1266, 107×157)
//   verticalB       — Vertical stacked variant B              (node 32:1285, 107×157)
//
// NOTE: Only the assets that are currently present in src/images/ are mapped.
//       Add new paths here as new logo files are exported and placed in the project.

import _icon             from './images/logo.png';             // phoenix icon (favicon/dark bg)
import _horizontal       from './images/logoTextRedWhite.png'; // horizontal PNG, white text + red icon
import _horizontalSvg    from './images/logoNav.svg';          // horizontal SVG, white text + red icon (193×50) — Figma nav asset
import _horizontalWhite  from './images/logoTextWhite.svg';    // all-white SVG — use on colored backgrounds

export const brandLogos = {
  /** Phoenix icon on dark background — used in Navbar, Footer watermark, PageNotFound */
  icon:             _icon,

  /** All-white SVG horizontal logo — use on the red footer or any colored background */
  horizontalWhite:  _horizontalWhite,

  /** Horizontal SVG logo — white text + red phoenix icon — use on dark/black backgrounds (Figma nav asset, 193×50) */
  horizontalSvg:    _horizontalSvg,

  /** Horizontal PNG logo — white text + red phoenix icon — use on dark/black backgrounds */
  horizontal:       _horizontal,

  // Not yet exported from Figma:
  // faviconRound: './images/logoFaviconRound.png',  // node 32:1186
  // horizontalB:  './images/logoTextBlack.png',     // node 32:1148 (black text, light bg)
  // verticalA:    './images/logoVerticalA.png',     // node 32:1266
  // verticalB:    './images/logoVerticalB.png',     // node 32:1285
};

// ─── Brand Logo Dimensions ────────────────────────────────────────────────────
// Reference sizes from Figma — use these for aspect-ratio-safe rendering.
export const brandLogoDimensions = {
  icon:         { width: 511,  height: 511  },  // node 32:1143 / 32:1146
  favicon:      { width: 511,  height: 511  },  // node 32:1143
  faviconRound: { width: 512,  height: 512  },  // node 32:1186
  horizontal:   { width: 563,  height: 146  },  // node 32:1167
  horizontalB:  { width: 564,  height: 147  },  // node 32:1148
  verticalA:    { width: 107,  height: 157  },  // node 32:1266
  verticalB:    { width: 107,  height: 157  },  // node 32:1285
};

// ─── Client Logos ─────────────────────────────────────────────────────────────
// Figma node 6:253 "Logo" section — streaming / production company logos
// displayed in the client marquee and logo-grid sections.

import _amc        from './images/clientLogos/AMC+_Logo.png';
import _disneyPlus from './images/clientLogos/Disney+_logo.png';
import _globo      from './images/clientLogos/globofilmes_Logo.png';
import _hbo        from './images/clientLogos/HBOmax_Logo.png';
import _hulu       from './images/clientLogos/Hulu_Logo.png';
import _netflix    from './images/clientLogos/Netflix_logo.png';
import _paramount  from './images/clientLogos/Paramount+_Logo.png';
import _paris      from './images/clientLogos/Paris_logo.png';
import _prime      from './images/clientLogos/Primevideo_Logo.png';
import _sony       from './images/clientLogos/Sony_logo.png';
import _starz      from './images/clientLogos/Starz_logo.png';
import _telecine   from './images/clientLogos/Telecine_Logo.png';

export const clientLogos = [
  { id: 'amc',       src: _amc,       alt: 'AMC+'          },
  { id: 'disney',    src: _disneyPlus, alt: 'Disney+'      },
  { id: 'globo',     src: _globo,     alt: 'Globofilmes'   },
  { id: 'hbo',       src: _hbo,       alt: 'HBO Max'       },
  { id: 'hulu',      src: _hulu,      alt: 'Hulu'          },
  { id: 'netflix',   src: _netflix,   alt: 'Netflix'       },
  { id: 'paramount', src: _paramount, alt: 'Paramount+'    },
  { id: 'paris',     src: _paris,     alt: 'Paris'         },
  { id: 'prime',     src: _prime,     alt: 'Prime Video'   },
  { id: 'sony',      src: _sony,      alt: 'Sony'          },
  { id: 'starz',     src: _starz,     alt: 'Starz'         },
  { id: 'telecine',  src: _telecine,  alt: 'Telecine'      },
];

// ─── Default export ───────────────────────────────────────────────────────────
const logos = { brandLogos, brandLogoDimensions, clientLogos };
export default logos;
