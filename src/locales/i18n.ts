import i18n from "i18next";
import { initReactI18next } from "react-i18next";
import EN from "./en.json";
import ES from "./es.json";

i18n.use(initReactI18next).init({
  fallbackLng: "es",
  returnNull: true,
  lowerCaseLng: true,
  returnObjects: true,
  resources: {
    es: {
      translation: ES,
    },
    en: {
      translation: EN,
    },
  },
  supportedLngs: ["es", "en"],
  interpolation: {
    escapeValue: false,
  },
  debug: false,
});

export default i18n;
