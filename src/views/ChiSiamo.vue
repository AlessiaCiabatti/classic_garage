<script>
import HeroLink from '../components/HeroLink.vue';
import image from '../assets/img/placeholder.jpg'; // Importazione dell'immagine
import TopBodyLink from '../components/TopBodyLink.vue';

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
  <HeroLink title="Chi Siamo" :image="image" />
  <!-- passa l'immagine come props -->

  <section class="body_link chi_siamo">
    <div class="my_container text-center">
      <div class="row align-items-start">
        <div class="col-12">

          <TopBodyLink little_title="CHI SIAMO" title_page="CLASSIC GARAGE"
            description="Dal 2020 la nostra officina è un punto di riferimento per gli appassionati di macchine d'epoca. Fondata sulla passione per la meccanica classica e l'artigianalità, ci dedichiamo al restauro e alla manutenzione di veicoli storici, riportando alla luce la bellezza senza tempo delle auto di una volta."
            second_description="Uniamo competenze tecniche avanzate a un'attenzione scrupolosa per i dettagli. Ogni restauro è un'opera d'arte, eseguita con materiali originali e tecniche fedeli all'epoca del veicolo, garantendo autenticità e qualità in ogni fase del processo. Scegliendo noi, scegli professionalità, esperienza e una cura appassionata per ogni progetto." />

        </div>

        <div class="right col-12 p-0">
          <div class="text-center">
            <div class="row d-flex justify-content-between">
              <div class="my_w col-sm-12 col-lg-4 my_margin">
                <img src="../assets/img/prova.jpg" alt="">
              </div>
              <div class="my_w col-sm-12 col-lg-4 my_margin">
                <img src="../assets/img/prova.jpg" alt="">
              </div>
              <div class="my_w col-sm-12 col-lg-4">
                <img src="../assets/img/prova.jpg" alt="">
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<style>
.chi_siamo p {
  width: 100%;
}

.chi_siamo .right {
  margin-top: 50px;
}

.chi_siamo .my_margin {
  margin-bottom: 50px;
}

.my_w {
  width: 100vw;
}

.chi_siamo .right img {
  height: 100%;
  width: 100%;
}


@media (min-width: 1200px) {
  .chi_siamo .right {
    margin-top: 0px;
  }

  .chi_siamo .my_margin {
    margin-bottom: 0px;
  }

  .my_w {
    width: 28vw;
  }

  .chi_siamo .right img {
    height: 100%;
    width: 100%;
  }
}
</style>