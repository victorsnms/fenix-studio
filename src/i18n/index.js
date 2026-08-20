import i18n from "i18next";
import { initReactI18next } from "react-i18next";

import ptCommon from "./locales/pt/common.json";
import ptImages from "./locales/pt/images.json";
import enCommon from "./locales/en/en-us/common.json";
import enImages from "./locales/en/en-us/images.json";

const resources = {
  "pt-BR": { ...ptCommon, ...ptImages },
  "en-US": { ...enCommon, ...enImages },
};

// resources only has exact keys "pt-BR"/"en-US". Raw navigator.language (e.g. "en-GB",
// "pt", "en") won't match either one, and with no fallbackLng, every t() call then
// returns undefined instead of translated content — crashing any component that
// expects an array (.map on undefined) or object (destructuring undefined) back.
// Browser/OS locale settings vary enough between browsers that this reliably broke in
// Chrome while working in Firefox (which likely already had a valid cached value from
// earlier testing in its own separate localStorage).
const normalizeLanguage = (lang) => (lang?.toLowerCase().startsWith("pt") ? "pt-BR" : "en-US");

i18n.use(initReactI18next).init({
  resources,
  defaultNS: "common",
  lng: localStorage.getItem("fenix.language") ?? normalizeLanguage(navigator.language),
  fallbackLng: "pt-BR",
  interpolation: {
    escapeValue: false,
  },
});

export default i18n;
