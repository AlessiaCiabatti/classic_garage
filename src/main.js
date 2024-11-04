import './assets/scss/main.scss';
import 'bootstrap';

import { createApp } from 'vue'
// import './style.css'
import App from './App.vue'

// fontawesome
import '@fortawesome/fontawesome-free/css/all.css'

import { router } from './router.js';
createApp(App).use(router).mount('#app')
