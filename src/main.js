import { createApp } from 'vue'
import App from './App.vue'
import './registerServiceWorker'
import router from './router'
import './assets/tailwind.css'

/* import the fontawesome core */
import { library } from '@fortawesome/fontawesome-svg-core'

/* import font awesome icon component */
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'

/* import specific icons */
import { faAnglesLeft, faHouse, faUser} from '@fortawesome/free-solid-svg-icons'

library.add(faAnglesLeft, faHouse, faUser)

createApp(App).use(router).component('font-awesome-icon', FontAwesomeIcon).mount('#app')
