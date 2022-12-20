import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';

import translationsFR from './locales/fr.json';
import translationsEN from './locales/en.json';

i18n
  //  .use(LanguageDetector)
  .use(initReactI18next)
  .init({
    debug: true, // DEV ONLY
    load: 'languageOnly',
    fallbackLng: 'fr',
    interpolation: {
      escapeValue: false,
    },
    resources: {
      fr: {
        translation: translationsFR,
      },
      en: {
        translation: translationsEN,
      },
    },
  });

export default i18n;
