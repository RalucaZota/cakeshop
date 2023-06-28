import './assets/main.css'
import{createApp } from "vue";
import App from './App.vue'
import router from './router'
import VueCarousel from '@chenfengyuan/vue-carousel';
import { library } from '@fortawesome/fontawesome-svg-core'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'
import { faBars } from '@fortawesome/free-solid-svg-icons'
import { faXmark } from '@fortawesome/free-solid-svg-icons'
import { faCartShopping } from '@fortawesome/free-solid-svg-icons'

app.config.compilerOptions.isCustomElement = (tag) => {
  return tag.startsWith('vue-') }

library.add(faBars, faXmark, faCartShopping)

createApp(App)
.component('font-awesome-icon', FontAwesomeIcon, VueCarousel.name, VueCarousel).use(router)
.mount('#app')

