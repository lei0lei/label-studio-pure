import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';

import zh from '../../../../locales/zh.json';
import en from '../../../../locales/en.json';

// 这里可以根据需要添加更多语言

i18n
  .use(initReactI18next)
  .init({
    resources: {
      zh: { translation: zh },
      en: { translation: en },
    },
    lng: 'zh', // 默认语言
    fallbackLng: 'en',
    interpolation: { escapeValue: false },
  });

export default i18n;
