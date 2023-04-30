import i18n from 'i18next';
import {initReactI18next} from 'react-i18next';
import {Languages} from '../constants/languages.constant';
import english from './locales/en.json';

i18n.use(initReactI18next).init({
  resources: {
    en: {translation: english},
  },
  lng: Languages.En,
  fallbackLng: Languages.En,
  compatibilityJSON: 'v3',
  interpolation: {escapeValue: false},
});

export default i18n;
