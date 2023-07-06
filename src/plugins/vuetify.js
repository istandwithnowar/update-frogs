/**
 * plugins/vuetify.js
 *
 * Framework documentation: https://vuetifyjs.com`
 */

// Styles
import '@mdi/font/css/materialdesignicons.css'
import 'vuetify/styles'

// Composables
import { createVuetify } from 'vuetify'
import { md3 } from 'vuetify/blueprints'
// import { aliases, fa } from 'vuetify/iconsets/fa'
// import { mdi } from 'vuetify/iconsets/mdi'

// import { useAppStore } from '@/store/app';
// const store = useAppStore()
// import { getActivePinia } from 'pinia'
  
// const useAppStoreEr = useAppStore()
// console.log('useAppStoreEr: ', useAppStoreEr)
// const { theme } = useAppStoreEr

// https://vuetifyjs.com/en/introduction/why-vuetify/#feature-guides
export default createVuetify({
  // theme: theme,
  theme: {
    defaultTheme: 'light'
  },
  blueprint: md3,
  // theme: {
  //   themes: {
  //     light: {
  //       colors: {
  //         primary: '#1867C0',
  //         secondary: '#5CBBF6',
  //       },
  //     },
  //   },
  // },
  // icons: {
  //   defaultSet: 'mdi',
  //   aliases,
  //   sets: {
  //     mdi,
  //     fa,
  //   },
  // },
})
