import i18n from "i18next";
import { initReactI18next } from "react-i18next";
import { TRANSLATIONS_EN } from "./en/translations";
import { TRANSLATIONS_MD } from "./md/translations";
import { TRANSLATIONS_UA } from "./ua/translations";
import { TRANSLATIONS_RU } from "./ru/translations";

const resources = {
  en: {
    translation: TRANSLATIONS_EN,
  },
  md: {
    translation: TRANSLATIONS_MD,
  },
  ua: {
    translation: TRANSLATIONS_UA,
  },
  ru: {
    translation: TRANSLATIONS_RU,
  },
};

i18n
  .use(initReactI18next) 
  .init({
    resources,
    lng: "en", 
    interpolation: {
      escapeValue: false, 
    },
  });

i18n.changeLanguage("en");

export default i18n;
