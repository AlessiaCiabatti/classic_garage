import './assets/scss/main.scss';
import 'bootstrap';

import { createApp } from 'vue'
// import './style.css'
import App from './App.vue'

createApp(App).mount('#app')

document.getElementById("menuButton").addEventListener("click", function() {
  const dropdownMenu = document.getElementById("dropdownMenu");
  // Alterna la visualizzazione del menu a tendina
  dropdownMenu.style.display = dropdownMenu.style.display === "block" ? "none" : "block";
});

// Chiudi il menu se si clicca al di fuori di esso
window.addEventListener("click", function(event) {
  if (!event.target.matches('.menu-button')) {
      const dropdowns = document.getElementsByClassName("dropdown-content");
      for (let i = 0; i < dropdowns.length; i++) {
          dropdowns[i].style.display = "none";
      }
  }
});
