import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';

import ptCommon from './locales/pt/common.json';
import ptProjects from './locales/pt/projects.json';
import ptPosts from './locales/pt/posts.json';
import ptImages from './locales/pt/images.json';
import enCommon from './locales/en/en-us/common.json';
import enProjects from './locales/en/en-us/projects.json';
import enPosts from './locales/en/en-us/posts.json';
import enImages from './locales/en/en-us/images.json';


const resources = {
    'pt-BR': {...ptCommon, ...ptProjects, ...ptPosts, ...ptImages},
    'en-US': {...enCommon, ...enProjects, ...enPosts, ...enImages}
}

i18n.use(initReactI18next).init({
    resources,
    defaultNS : 'common',
    lng: localStorage.getItem('language') ?? navigator.language,
    interpolation: {
        escapeValue: false,
    }
});

export default i18n;
