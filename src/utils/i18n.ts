import { initReactI18next } from 'react-i18next';
import i18n from 'i18next';

import resources from '../translations';

i18n.use(initReactI18next).init({
  interpolation: { escapeValue: false },
  lng: 'en',
  resources,
});

export default i18n;
