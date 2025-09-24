import { Icon } from '@iconify/vue'
// Composables
import { createApp } from 'vue'
import VueApexCharts from 'vue3-apexcharts'
// Plugins
import { registerPlugins } from '@/plugins'

import App from './App.vue'
// import i18n from './plugins/i18n'
import i18n from './i18n'
import vuetify from './plugins/vuetify'
// Styles
import 'unfonts.css'

const app = createApp(App)

registerPlugins(app)

app.use(vuetify)
  .use(i18n)
  .use(VueApexCharts)
  .component('icon', Icon)
  .mount('#app')
