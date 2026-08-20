// Public info (a domain, not a secret), so VITE_ prefix is correct here — unlike the
// Brevo API key, this is meant to reach the client bundle.
const SITE_URL = import.meta.env.VITE_SITE_URL || "https://fenixstudios.com.br";

// logo.png is served from public/ (unprocessed, stable path) rather than imported from
// src/images/ — social crawlers fetch OG image URLs directly with no build context, so
// this needs a real absolute URL that resolves after build, not a src/ path Vite would
// hash and relocate.

export const aboutSeo = {
  title: "Fenix Studios - About",
  description: "About Page",
  keywords:
    "video editing, cinematic effects, movie post-production, visual storytelling, advanced video techniques, film enhancement, creative editing solutions, digital media magic, cinematic innovation, special effects mastery, Fenix Studios, visual arts, film production excellence, dynamic editing, media transformation, about ,about us",
  imageURL: `${SITE_URL}/logo.png`,
};

export const contactSeo = {
  title: "Fenix Studios - Contact Us",
  description: "Contact Us Page",
  keywords:
    "video editing, cinematic effects, movie post-production, visual storytelling, advanced video techniques, film enhancement, creative editing solutions, digital media magic, cinematic innovation, special effects mastery, Fenix Studios, visual arts, film production excellence, dynamic editing, media transformation, contact ,contact us",
  imageURL: `${SITE_URL}/logo.png`,
};

export const homeSeo = {
  title: "Fenix Studios - Home Page",
  description: "Fenix Studios",
  keywords:
    "video editing, cinematic effects, movie post-production, visual storytelling, advanced video techniques, film enhancement, creative editing solutions, digital media magic, cinematic innovation, special effects mastery, Fenix Studios, visual arts, film production excellence, dynamic editing, media transformation, home",
  imageURL: `${SITE_URL}/logo.png`,
};

export const reelSeo = {
  title: "Fenix Studios - Reel",
  description: "Reel Page",
  keywords:
    "video editing, cinematic effects, movie post-production, visual storytelling, advanced video techniques, film enhancement, creative editing solutions, digital media magic, cinematic innovation, special effects mastery, Fenix Studios, visual arts, film production excellence, dynamic editing, media transformation, reel, reels",
  imageURL: `${SITE_URL}/logo.png`,
};

export const servicesSeo = {
  title: "Fenix Studios - Services",
  description: "Services Page",
  keywords:
    "video editing, cinematic effects, movie post-production, visual storytelling, advanced video techniques, film enhancement, creative editing solutions, digital media magic, cinematic innovation, special effects mastery, Fenix Studios, visual arts, film production excellence, dynamic editing, media transformation, services , service",
  imageURL: `${SITE_URL}/logo.png`,
};

export const postProductionSeo = {
  title: "Fenix Studios - Pós Produção",
  description: "Post Production Page",
  keywords:
    "video editing, cinematic effects, movie post-production, visual storytelling, advanced video techniques, film enhancement, creative editing solutions, digital media magic, cinematic innovation, special effects mastery, Fenix Studios, post production, pos producao",
  imageURL: `${SITE_URL}/logo.png`,
};

export const vfxSeo = {
  title: "Fenix Studios - VFX",
  description: "VFX Page",
  keywords:
    "vfx, visual effects, motion graphics, cg, compositing, animation, rigging, concept art, Fenix Studios, efeitos visuais",
  imageURL: `${SITE_URL}/logo.png`,
};

export const studySeo = {
  title: "Fenix Studios - Study",
  description: "Study Page",
  keywords:
    "video editing, cinematic effects, movie post-production, visual storytelling, advanced video techniques, film enhancement, creative editing solutions, digital media magic, cinematic innovation, special effects mastery, Fenix Studios, visual arts, film production excellence, dynamic editing, media transformation, study",
  imageURL: `${SITE_URL}/logo.png`,
};

export const studyInProgressSeo = {
  title: "Fenix Studios - Study (In Progress)",
  description: "Study Page Preview",
  keywords:
    "video editing, cinematic effects, movie post-production, visual storytelling, advanced video techniques, film enhancement, creative editing solutions, digital media magic, cinematic innovation, special effects mastery, Fenix Studios, visual arts, film production excellence, dynamic editing, media transformation, study",
  imageURL: `${SITE_URL}/logo.png`,
};
