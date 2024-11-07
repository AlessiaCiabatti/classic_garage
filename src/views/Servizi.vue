<script>
import HeroLink from '../components/HeroLink.vue';
import TopBodyLink from '../components/TopBodyLink.vue';
import image from '../assets/img/placeholder.jpg'; // Importazione dell'immagine
export default {
  components: {
    HeroLink,
    TopBodyLink
  },
  data() {
    return {
      image // Aggiungi l'immagine ai dati
    };
  }

}
</script>

<template>
  <HeroLink title="Servizi" :image="image" />
  <!-- passa l'immagine come props -->

  <section class="body_link servizi">
    <div class="my_container text-center top_link">
      <div class="row align-items-start">

        <div class="col-12">
          <TopBodyLink little_title="SERVIZI" title_page="CLASSIC GARAGE"
            description="Specialisti nel restauro e manutenzione di macchine d'epoca, con passione e precisione senza tempo.
            Sed bibendum ipsum dignissim. Integer ac dui at odio facilisis blandit ac non eros. Integer ac dui at odio facilisis blandit ac non eros." />
        </div>

      </div>
    </div>
    
  </section>

</template>

<style>
.servizi {
  margin-bottom: 100px
}

.servizi p {
  width: 100%;
}

.servizi img {
  width: 100%;
}

.card .vertical_line {
  height: auto;
}

@media (min-width: 768px) {
  .servizi_main {
    /* display: flex;
    flex-direction: row-reverse; */
  }
}

/* .my_ms {
  margin-left: 25px;
}

.my_mb {
  margin-bottom: 100px;
}

@media (min-width: 1200px) {

  .card {
    border: none;
    width: 90%;
  }


  .f-end {
    display: flex;
    justify-content: end;
  }
} */
</style>