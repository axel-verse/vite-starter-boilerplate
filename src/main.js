import { createApp } from 'vue'
import { createHead } from '@vueuse/head'

import { router } from '/src/router/router.js'
import '/src/styles/app.scss'
import App from './App.vue'

// TODO: remove this comment block below if you do not want PWA. Otherwise uncomment this block

/*
import {registerSW} from "virtual:pwa-register";

const updateSW = registerSW({
    //
})
*/

createApp(App)
  .use(router)
  .use(createHead())
  // .use(updateSW)           // TODO: uncomment if PWA is needed. Otherwise remove this line
  .mount('#app')
