import i18n from 'i18next'
import { initReactI18next } from 'react-i18next'
import * as Localization from 'expo-localization'
import en from './en.json'
import pt from './pt.json'

const resources = {
    en: {
        translation: en
    },
    pt: {
        translation: pt
    }
}

i18n
    .use(initReactI18next)
    .init({
        resources,
        lng: Localization.locale,
        fallbackLng: 'en',
        interpolation: {
            escapeValue: false
        }
    })

export default i18n