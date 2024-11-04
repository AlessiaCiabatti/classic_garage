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

  if (menuButton && dropdownMenu) {
    let isDropdownOpen = false;

    // gestisco il click sul bottone del menu
    menuButton.addEventListener('click', () => {
      isDropdownOpen = !isDropdownOpen; //alterno lo stato aperto/chiuso del menu
      dropdownMenu.style.display = isDropdownOpen ? 'block' : 'none'; // Mostra o nasconde il menu
    });
  }
}