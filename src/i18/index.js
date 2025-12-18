import i18n from "i18next";
import { initReactI18next } from "react-i18next";

import esLogin from './locales/es/login.json';
import enLogin from './locales/en/login.json';

import esCommon from './locales/es/common.json';
import enCommon from './locales/en/common.json';

import esDashboard from './locales/es/dashboard.json';
import enDashboard from './locales/en/dashboard.json';

const getBrowserLanguage = () => {
    const lang = navigator.language.split('-')[0];
    return ['es', 'en'].includes(lang) ? lang : 'es';
}

i18n
.use(initReactI18next)
.init({
    resources: {
        es: {
            login: esLogin,
            common: esCommon,
            dashboard: esDashboard
        },
        en: {
            login: enLogin,
            common: enCommon,
            dashboard: enDashboard
        },
    },
    lng: localStorage.getItem("lang") || getBrowserLanguage(),
    fallbackLng: 'es',
    ns: ['login', 'common'],
    defaultNS: 'common',
    interpolation: {
        escapeValue: false,
    }
});

export default i18n;

