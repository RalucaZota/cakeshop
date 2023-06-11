import './assets/main.css'
import{createApp } from "vue";
import App from './App.vue'
import router from './router'
import { BootstrapVue, IconsPlugin } from 'bootstrap-vue';
import { library } from '@fortawesome/fontawesome-svg-core'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'
import { faBars } from '@fortawesome/free-solid-svg-icons'
import { faXmark } from '@fortawesome/free-solid-svg-icons'
import { faCartShopping } from '@fortawesome/free-solid-svg-icons'
import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap/dist/css/bootstrap.min.css';


/* add icons to the library */
library.add(faBars, faXmark, faCartShopping)
app.use(BootstrapVue);
app.use(IconsPlugin);
const app = createApp(App)
.component('font-awesome-icon', FontAwesomeIcon).use(router)
.mount('#app')

