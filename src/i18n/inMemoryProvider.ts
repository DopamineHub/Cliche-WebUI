import polyglotI18nProvider from 'ra-i18n-polyglot';
import { TranslationMessages } from 'ra-core';
import messagesEn from './messagesEn';
import messagesZh from './messagesZh';

const i18nTables = new Map<string, TranslationMessages>([
    ['en', messagesEn],
    ['zh', messagesZh],
]);
const i18nProvider = polyglotI18nProvider(
    locale => i18nTables.get(locale) || messagesEn,
    'en', // default locale
    [
        { locale: 'en', name: 'English' },
        { locale: 'zh', name: 'Chinese Simplified' },
    ],
);


export default i18nProvider;
