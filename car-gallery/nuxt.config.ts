// https://nuxt.com/docs/api/configuration/nuxt-config
import { NuxtConfig } from '@nuxt/types'

const config: NuxtConfig = {
    // Other Nuxt.js configuration...
    app:{
      pageTransition:{name:'route',mode:'out-in'},
     },
    modules: [
             '@pinia/nuxt',
      ],
    plugins: [
      // Other plugins...
      { src: '~/plugins/gsap.js', ssr: false },
      // { src: '~/plugins/globalMixins.js', mode: 'client' }
       ],
    // Other Nuxt.js configuration...
  }
  
  export default config