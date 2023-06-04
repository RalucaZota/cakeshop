import './assets/main.css'

import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
/* import the fontawesome core */
import { library } from '@fortawesome/fontawesome-svg-core'

/* import font awesome icon component */
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'
import { faJs, faVuejs } from '@fortawesome/free-brands-svg-icons';



/* import specific icons */
import { faBars } from '@fortawesome/free-solid-svg-icons'
import { faBarsProgress } from '@fortawesome/free-solid-svg-icons'
import { faXmark } from '@fortawesome/free-solid-svg-icons'



/* add icons to the library */
library.add(faBars, faXmark, faBarsProgress)

createApp(App)
.component('font-awesome-icon', FontAwesomeIcon).use(router)
.mount('#app')
