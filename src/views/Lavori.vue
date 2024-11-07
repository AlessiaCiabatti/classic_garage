<script>
import HeroLink from '../components/HeroLink.vue';
import TopBodyLink from '../components/TopBodyLink.vue';
import image from '../assets/img/placeholder.jpg'; // Importazione dell'immagine

export default {
  components: {
    HeroLink,
    TopBodyLink,
  },
  data() {
    return {
      image // Aggiungi l'immagine ai dati
    };
  }

}
</script>

<template>
  <HeroLink title="I Nostri Lavori" :image="image" />
  <!-- passa l'immagine come props -->

  <section class="body_link lavori">
    <div class="my_container text-center top_link">
      <div class="row align-items-start">
        <div class="col-12">

          <TopBodyLink little_title="I NOSTRI LAVORI" title_page="CLASSIC GARAGE" />

        </div>

        <div class="col-sm-12 col-xl-6 p-0">
          <div class="card">
            <img src="../assets/img/placeholder.jpg" class="card-img-top" alt="...">
            <div class="card-body d-flex mt-5 my_mb">
              <div class="vertical_line"></div>
              <div class="my_ms">
                <h4 class="text-start">TITOLO CARD</h4>
                <p class="card-text text-start">Specialisti nel restauro e manutenzione di macchine d'epoca, con
                  passione e precisione senza tempo.
                  Sed bibendum ipsum dignissim. Integer ac dui at odio facilisis blandit ac non eros. Specialisti nel
                  restauro e manutenzione di macchine d'epoca, con
                  passione e precisione senza tempo.
                  Sed bibendum ipsum dignissim. Integer ac dui at odio facilisis blandit ac non eros</p>
              </div>
            </div>
          </div>
        </div>

        <div class="col-sm-12 col-xl-6 p-0 f-end">
          <div class="card">
            <img src="../assets/img/placeholder.jpg" class="card-img-top" alt="...">
            <div class="card-body d-flex mt-5 my_mb">
              <div class="vertical_line"></div>
              <div class="my_ms">
                <h4 class="text-start">TITOLO CARD</h4>
                <p class="card-text text-start">Specialisti nel restauro e manutenzione di macchine d'epoca, con
                  passione e precisione senza tempo.
                  Sed bibendum ipsum dignissim. Integer ac dui at odio facilisis blandit ac non eros.</p>
              </div>
            </div>
          </div>
        </div>

        <div class="col-sm-12 col-xl-6 p-0">
          <div class="card">
            <img src="../assets/img/placeholder.jpg" class="card-img-top" alt="...">
            <div class="card-body d-flex mt-5 my_mb">
              <div class="vertical_line"></div>
              <div class="my_ms">
                <h4 class="text-start">TITOLO CARD</h4>
                <p class="card-text text-start">Specialisti nel restauro e manutenzione di macchine d'epoca, con
                  passione e precisione senza tempo.
                  Sed bibendum ipsum dignissim. Integer ac dui at odio facilisis blandit ac non eros.</p>
              </div>
            </div>
          </div>
        </div>

        <div class="col-sm-12 col-xl-6 p-0 f-end">
          <div class="card">
            <img src="../assets/img/placeholder.jpg" class="card-img-top" alt="...">
            <div class="card-body d-flex mt-5 my_mb">
              <div class="vertical_line"></div>
              <div class="my_ms">
                <h4 class="text-start">Titolo card</h4>
                <p class="card-text text-start">Specialisti nel restauro e manutenzione di macchine d'epoca, con
                  passione e precisione senza tempo.</p>
              </div>
            </div>
          </div>
        </div>


      </div>
    </div>
  </section>

</template>

<style>
.card {
  border: none;
  /* width: 100%; */
}

.card img {
  border-top-left-radius: 0px;
  border-top-right-radius: 0px;
}

.card-body {
  padding-left: 0px;
}

.card .vertical_line {
  height: auto;
}

.my_ms {
  margin-left: 25px;
}

.my_mb {
  margin-bottom: 100px;
}

@media (min-width: 1200px) {

  .lavori .card {
    border: none;
    width: 95%;
  }


  .f-end {
    display: flex;
    justify-content: end;
  }
}
</style>