/**
 * plugins/vuetify.js
 *
 * Framework documentation: https://vuetifyjs.com`
 */

// Import Iconify components
// Composables
import { createVuetify } from 'vuetify'
import * as components from 'vuetify/components'
import * as directives from 'vuetify/directives'
import { fa } from 'vuetify/iconsets/fa'
import { aliases, mdi } from 'vuetify/iconsets/mdi'
import { Icon } from '@iconify/vue'
// Styles
import '@mdi/font/css/materialdesignicons.css'

import 'vuetify/styles'

// https://vuetifyjs.com/en/introduction/why-vuetify/#feature-guides
export default createVuetify({
  rtl: true,
  components,
  directives,
  theme: {
    defaultTheme: 'system',
  },
  icons: {
    defaultSet: 'mdi', // Set default icon set
    sets: {
      mdi,
      fa,
    },
    aliases: {
      ...aliases,
      ...fa.aliases,
      // Add custom aliases if needed
      'custom-icon': 'mdi:account',
    },
  },
})
