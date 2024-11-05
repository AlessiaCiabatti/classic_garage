<script>
import HeroLink from '../components/HeroLink.vue';
import image from '../assets/img/placeholder.jpg'; // Importazione dell'immagine
  export default {
    components:{
      HeroLink,
    },
    data() {
      return {
        image // Aggiungi l'immagine ai dati
      };
    }
      
  }
</script>

<template>
  <HeroLink 
  title="Servizi"
  :image="image" /> 
  <!-- passa l'immagine come props -->
</template>

<style>

</style>