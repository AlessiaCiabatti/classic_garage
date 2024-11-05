import './assets/scss/main.scss';
import 'bootstrap';

import { createApp } from 'vue'
// import './style.css'
import App from './App.vue'

// fontawesome
import '@fortawesome/fontawesome-free/css/all.css'

import { router } from './router.js';
createApp(App).use(router).mount('#app')


// toggle menu dropdown
export function clickDropdown() {
  const menuButton = document.getElementById('menuButton');
  const dropdownMenu = document.getElementById('dropdownMenu');
  // click sui link del dropdown e si chiude dropdown
  // richiamo i link
  const dropdownLinks = dropdownMenu.querySelectorAll('a'); //seleziono i link

  // evento del click sul link
  if (menuButton && dropdownMenu) {
    let dropdownOpen = false;

    // gestisco il click sul bottone del menu
    menuButton.addEventListener('click', () => {
      dropdownOpen = !dropdownOpen; //alterno lo stato aperto/chiuso del menu
      dropdownMenu.style.display = dropdownOpen ? 'block' : 'none'; // Mostra o nasconde il menu
    });

    // aggiungo l'evento au link per chiudere il dropdown al click
    dropdownLinks.forEach((link) =>{
      link.addEventListener('click', () =>{
        dropdownMenu.style.display = 'none',
        dropdownOpen = false; //imposto lo stato su chiuso
      })
    })
  }
};


