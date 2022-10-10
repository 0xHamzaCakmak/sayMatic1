import i18n from "i18next";
import { initReactI18next } from "react-i18next";
import Backend from "i18next-xhr-backend";
import LanguageDetector from "i18next-browser-languagedetector";
import translationEN from "./en.json";
import translationTR from "./tr.json";

//Creating object with the variables of imported translation files
const resources = {
    en: {
      translation: translationEN,
    },
    tr: {
      translation: translationTR,
    },
  };
  
  //i18N Initialization
  
  i18n
    .use(initReactI18next)
    .init({
      resources,
      lng:"en", //default language
      keySeparator: false,
      interpolation: {
        escapeValue: false,
      },
    });
  
  export default i18n;