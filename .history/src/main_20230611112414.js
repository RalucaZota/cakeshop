import './assets/main.css'

import { createApp } from 'vue'
import App from './App.vue'
import router from './router'



import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-vue/dist/bootstrap-vue.css'
import { library } from '@fortawesome/fontawesome-svg-core'


import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'

import { faBars } from '@fortawesome/free-solid-svg-icons'
import { faXmark } from '@fortawesome/free-solid-svg-icons'
import { faCartShopping } from '@fortawesome/free-solid-svg-icons'



/* add icons to the library */
library.add(faBars, faXmark, faCartShopping)

createApp(App)
.component('font-awesome-icon', FontAwesomeIcon).use(router)
.mount('#app')

