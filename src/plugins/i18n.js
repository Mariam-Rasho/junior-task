import { createI18n } from 'vue-i18n'

const messages = {
  en: {
    welcome: 'Welcome',
    logout: 'Logout',
  },
  ar: {
    welcome: 'أهلاً وسهلاً',
    logout: 'تسجيل الخروج',
  },
}

const i18n = createI18n({
  legacy: false, // Composition API mode
  locale: 'en', // default locale
  fallbackLocale: 'en',
  messages,
})

export default i18n
