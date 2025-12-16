import i18n from "i18next";
import { initReactI18next } from "react-i18next";

import esLogin from './locales/es/login.json';
import enLogin from './locales/en/login.json';


const getBrowserLanguage = () => {
    const lang = navigator.language.split('-')[0];
    return ['es', 'en'].includes(lang) ? lang : 'es';
}

i18n
.use(initReactI18next)
.init({
    resources: {
        es: {
            login: esLogin
        },
        en: {
            login: enLogin
        },
    },
    lng: localStorage.getItem("lang") || getBrowserLanguage(),
    fallbackLng: 'es',
    ns: ['login'],
    defaultNS: 'login',
    interpolation: {
        escapeValue: false,
    }
});

export default i18n;

