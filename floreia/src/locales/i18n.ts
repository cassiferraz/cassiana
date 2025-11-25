import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import ptBR from './pt-BR';
import es from './es';
import en from './en';

const resources = {
  'pt-BR': {
    translation: ptBR,
  },
  es: {
    translation: es,
  },
  en: {
    translation: en,
  },
};

i18n.use(initReactI18next).init({
  resources,
  lng: 'pt-BR', // idioma padrão
  fallbackLng: 'pt-BR',
  compatibilityJSON: 'v3',
  interpolation: {
    escapeValue: false,
  },
});

export default i18n;
