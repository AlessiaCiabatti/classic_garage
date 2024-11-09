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
    <div class="my_container text-center">
      <div class="row align-items-start">

        <div class="col-12">
          <TopBodyLink little_title="SERVIZI" title_page="CLASSIC GARAGE"
            description="Specialisti nel restauro e manutenzione di macchine d'epoca, con passione e precisione senza tempo.
            Sed bibendum ipsum dignissim. Integer ac dui at odio facilisis blandit ac non eros. Integer ac dui at odio facilisis blandit ac non eros." />
        </div>

      </div>

      <div class="container my-5">
        <div class="row">
          <!-- Card 1 -->
          <div class="col-md-6 col-lg-4 mb-4  d-flex justify-content-center">
            <div class="card d-flex justify-content-center">
              <div class="card-body d-flex mt-3">
                <div class="vertical_line"></div>
                <div>
                  <div class="pt-3 my_ms mb-3 d-flex justify-content-start">
                    <img src="../assets/img/check.png" class="card-img-top" alt="...">
                  </div>
                  <div class="my_ms">
                    <h4 class="text-start">TITOLO CARD</h4>
                    <p class="card-text text-start">Specialisti nel restauro e manutenzione di macchine d'epoca, con
                      passione e precisione senza tempo.
                      Sed bibendum ipsum dignissim.</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <!-- Card 2 -->
          <div class="col-md-6 col-lg-4 mb-4  d-flex justify-content-center">
            <div class="card d-flex justify-content-center">
              <div class="card-body d-flex mt-3">
                <div class="vertical_line"></div>
                <div>
                  <div class="pt-3 my_ms mb-3 d-flex justify-content-start">
                    <img src="../assets/img/check.png" class="card-img-top" alt="...">
                  </div>
                  <div class="my_ms">
                    <h4 class="text-start">TITOLO CARD</h4>
                    <p class="card-text text-start">Specialisti nel restauro e manutenzione di macchine d'epoca, con
                      passione e precisione senza tempo.
                      Sed bibendum ipsum dignissim.</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <!-- Card 3 -->
          <div class="col-md-6 col-lg-4 mb-4  d-flex justify-content-center">
            <div class="card d-flex justify-content-center">
              <div class="card-body d-flex mt-3">
                <div class="vertical_line"></div>
                <div>
                  <div class="pt-3 my_ms mb-3 d-flex justify-content-start">
                    <img src="../assets/img/check.png" class="card-img-top" alt="...">
                  </div>
                  <div class="my_ms">
                    <h4 class="text-start">TITOLO CARD</h4>
                    <p class="card-text text-start">Specialisti nel restauro e manutenzione di macchine d'epoca, con
                      passione e precisione senza tempo.
                      Sed bibendum ipsum dignissim.</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <!-- Card 4 -->
          <div class="col-md-6 col-lg-4 mb-4  d-flex justify-content-center">
            <div class="card d-flex justify-content-center">
              <div class="card-body d-flex mt-3">
                <div class="vertical_line"></div>
                <div>
                  <div class="pt-3 my_ms mb-3 d-flex justify-content-start">
                    <img src="../assets/img/check.png" class="card-img-top" alt="...">
                  </div>
                  <div class="my_ms">
                    <h4 class="text-start">TITOLO CARD</h4>
                    <p class="card-text text-start">Specialisti nel restauro e manutenzione di macchine d'epoca, con
                      passione e precisione senza tempo.
                      Sed bibendum ipsum dignissim.</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <!-- Card 5 -->
          <div class="col-md-6 col-lg-4 mb-4  d-flex justify-content-center">
            <div class="card d-flex justify-content-center">
              <div class="card-body d-flex mt-3">
                <div class="vertical_line"></div>
                <div>
                  <div class="pt-3 my_ms mb-3 d-flex justify-content-start">
                    <img src="../assets/img/check.png" class="card-img-top" alt="...">
                  </div>
                  <div class="my_ms">
                    <h4 class="text-start">TITOLO CARD</h4>
                    <p class="card-text text-start">Specialisti nel restauro e manutenzione di macchine d'epoca, con
                      passione e precisione senza tempo.
                      Sed bibendum ipsum dignissim.</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <!-- Card 6 -->
          <div class="col-md-6 col-lg-4 mb-4  d-flex justify-content-center">
            <div class="card d-flex justify-content-center">
              <div class="card-body d-flex mt-3">
                <div class="vertical_line"></div>
                <div>
                  <div class="pt-3 my_ms mb-3 d-flex justify-content-start">
                    <img src="../assets/img/check.png" class="card-img-top" alt="...">
                  </div>
                  <div class="my_ms">
                    <h4 class="text-start">TITOLO CARD</h4>
                    <p class="card-text text-start">Specialisti nel restauro e manutenzione di macchine d'epoca, con
                      passione e precisione senza tempo.
                      Sed bibendum ipsum dignissim.</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <!-- Card 7 -->
          <div class="col-md-6 col-lg-4 mb-4  d-flex justify-content-center">
            <div class="card d-flex justify-content-center">
              <div class="card-body d-flex mt-3">
                <div class="vertical_line"></div>
                <div>
                  <div class="pt-3 my_ms mb-3 d-flex justify-content-start">
                    <img src="../assets/img/check.png" class="card-img-top" alt="...">
                  </div>
                  <div class="my_ms">
                    <h4 class="text-start">TITOLO CARD</h4>
                    <p class="card-text text-start">Specialisti nel restauro e manutenzione di macchine d'epoca, con
                      passione e precisione senza tempo.
                      Sed bibendum ipsum dignissim.</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <!-- Card 8 -->
          <div class="col-md-6 col-lg-4 mb-4  d-flex justify-content-center">
            <div class="card d-flex justify-content-center">
              <div class="card-body d-flex mt-3">
                <div class="vertical_line"></div>
                <div>
                  <div class="pt-3 my_ms mb-3 d-flex justify-content-start">
                    <img src="../assets/img/check.png" class="card-img-top" alt="...">
                  </div>
                  <div class="my_ms">
                    <h4 class="text-start">TITOLO CARD</h4>
                    <p class="card-text text-start">Specialisti nel restauro e manutenzione di macchine d'epoca, con
                      passione e precisione senza tempo.
                      Sed bibendum ipsum dignissim.</p>
                  </div>
                </div>
              </div>
            </div>
          </div>

        </div>
      </div>



    </div>

  </section>

</template>

<style>
/*  */

/*  */
.servizi {
  margin-bottom: 50px
}

.servizi p {
  width: 100%;
}

.servizi img {
  width: 100%;
}

.servizi .card {
  width: 100%;
  /* background-color: rgb(220, 220, 220); */
}

.servizi .card img {
  width: 30%;
}

.servizi .card-body {
  padding-left: 16px;
}

.card .vertical_line {
  height: auto;
}

@media (min-width: 768px) {

  .servizi .card {
    /* width: 35vw; */
  }

}

@media (min-width: 1200px) {
  .servizi .card {
    width: 100%;
    margin-bottom: 50px;
    /* background-color: rgb(220, 220, 220); */
  }
}
</style>