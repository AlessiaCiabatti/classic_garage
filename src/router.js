// 1 installa vue router: npm install vue-router@4
// 2 nuovo file: router.js
// 3:
import { createRouter, createWebHashHistory } from "vue-router";

// 4: importa i ifle
import Home from './views/Home.vue';
import ChiSiamo from './views/ChiSiamo.vue';
import Lavori from './views/Lavori.vue';
import Servizi from './views/Servizi.vue';
import FormContact from './views/FormContact.vue';

// 5: definisci le rotte
const router = createRouter({
  history: createWebHashHistory(),
  // la pagina si carica all'inizio
  scrollBehavior(to, from, savedPosition) {
    return { top: 0 };
  },
  routes: [
    {
      path: '/',
      name: 'home',
      component: Home
    },
    {
      path: '/chi-siamo',
      name: 'chi-siamo',
      component: ChiSiamo
    },
    {
      path: '/lavori',
      name: 'lavori',
      component: Lavori
    },
    {
      path: '/servizi',
      name: 'servizi',
      component: Servizi
    },
    {
      path: '/form-contact',
      name: 'form-contact',
      component: FormContact,
    },
  ]
});

// 6:
export { router };