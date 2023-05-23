// https://nuxt.com/docs/api/configuration/nuxt-config
import { NuxtConfig } from '@nuxt/types'
import { resolve, dirname } from 'node:path'
import { fileURLToPath } from 'url'
import VueI18nVitePlugin from '@intlify/unplugin-vue-i18n/vite'
const config: NuxtConfig = {
    // Other Nuxt.js configuration...
    app:{
      pageTransition:{name:'route',mode:'out-in'},
     },
    modules: [
             '@pinia/nuxt',
      ],
      vite: {
        plugins: [
          VueI18nVitePlugin({
            include: [
              resolve(dirname(fileURLToPath(import.meta.url)), './locales/*.json')
            ]
          })
        ]
      }
    
  }
  
  export default config