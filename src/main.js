import { createApp } from 'vue'
import App from './App.vue'

import { createMetaManager } from 'vue-meta'
import { router } from '/src/router.js'
// import {store} from "./store.js";

/*
import {registerSW} from "virtual:pwa-register";

const updateSW = registerSW({
    //
})
*/

import '/src/styles/app.scss'

createApp(App)
  // .use(store)              // TODO: create VueX store
  .use(router)
  .use(createMetaManager())
  // .use(updateSW)           // TODO: create PWA
  .mount('#app')
