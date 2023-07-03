import './assets/main.css'
import{ createApp, Vue } from "vue";
import App from './App.vue'
import router from './router'
import { library } from '@fortawesome/fontawesome-svg-core'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'
import { faBars } from '@fortawesome/free-solid-svg-icons'
import { faXmark } from '@fortawesome/free-solid-svg-icons'
import { faCartShopping } from '@fortawesome/free-solid-svg-icons'
import VueNumericInput from 'vue-numeric-input';
import 'vuetify/styles'
import { createVuetify } from 'vuetify'
import * as components from 'vuetify/components'
import * as directives from 'vuetify/directives';

Vue.use(VueNumericInput)
const vuetify = createVuetify({
    components,
    directives,
  })
library.add(faBars, faXmark, faCartShopping)

createApp(App)
.component('font-awesome-icon', FontAwesomeIcon).use(router, vuetify)
.mount('#app')

