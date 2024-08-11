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

i18n.use(initReactI18next).init({
  resources,
  defaultNS: "common",
  lng: localStorage.getItem("fenix.language") ?? navigator.language,
  interpolation: {
    escapeValue: false,
  },
});

export default i18n;
