import i18n from "i18next";
import { initReactI18next } from "react-i18next";

// translations
import englishTranslation from "./en/App";
import frenchTranslation from "./fr/App";

const getUserLanguage = () =>
  window.navigator.userLanguage || window.navigator.language;

i18n
  // pass the i18n instance to react-i18next.
  .use(initReactI18next)
  // init i18next
  // for all options read
  // https://www.i18next.com/overview/configuration-options
  .init({
    debug: false,
    lng: "en",
    fallbackLng: "en",
    interpolation: {
      escapeValue: false, // not needed for react as it escapes by default
    },
    resources: {
      en: {
        translation: englishTranslation,
      },
      fr: {
        translation: frenchTranslation,
      },
    },
  });

export default i18n;
