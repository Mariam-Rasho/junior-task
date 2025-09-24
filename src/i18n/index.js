import { createI18n } from 'vue-i18n'
import ar from './ar.json'
import en from './en.json'

const i18n = createI18n({
  legacy: false,
  locale: 'en', // default language
  fallbackLocale: 'en',
  messages: {
    en,
    ar,
  },
})

export default i18n
