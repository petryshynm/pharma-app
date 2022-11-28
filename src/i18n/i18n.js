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

!localStorage.getItem('lang') && localStorage.setItem('lang', 'en')
const lang = localStorage.getItem('lang') 

i18n
  .use(initReactI18next) 
  .init({
    resources,
    lng: lang, 
    interpolation: {
      escapeValue: false, 
    },
  });

i18n.changeLanguage(lang);

export default i18n;
