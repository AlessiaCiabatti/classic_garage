<script>
import HeroLink from '../components/HeroLink.vue';
import TopBodyLink from '../components/TopBodyLink.vue';
import image from '../assets/foto_classic_garage/image00007.jpeg'; // Importazione dell'immagine
export default {
  components: {
    HeroLink,
    TopBodyLink
  },
  data() {
    return {
      image, // Aggiungi l'immagine ai dati

      // crea array di oggetti per elementi dentro card
      cardServiziSection: [
        {
          image: 'src/assets/foto_classic_garage/image00015.jpeg',
          title: 'REVISIONE CAMBI',
          description: 'Siamo specializzati nella revisione completa di cambi manuali e di differenziali e quando effettuiamo la revisione di un cambio ci occupiamo di reperire tutti i componenti che necessitino di essere sostituiti.',
        },
        {
          image: 'src/assets/img/prova.jpg',
          title: 'CREAZIONI',
          description: 'Siamo specializzati nella realizzazione di tubazioni in rame per l\'impianto frenante oppure per le linee benzina.',
        },
        {
          image: 'src/assets/foto_classic_garage/image00006.jpeg',
          title: 'REVISIONE CARBURATORE',
          description: 'Siamo specializzati nella revisione integrale dei carburatori di vari brand come SOLEX, WEBER, DELL\'ORTO, ZENIT, ecc',
        },
        {
          image: 'src/assets/foto_classic_garage/image00025.jpeg',
          title: 'COSTRUZIONE SCARICHI SU MISURA',
          description: 'Costruiamo sistemi di scarico su misura per tutti i tipi di esegenze sia in ferro che in acciaio inox con saldature a tig oppure MIG di altissima qualità.',
        },
        {
          image: 'src/assets/foto_classic_garage/image00016.jpeg',
          title: 'IMPIANTO ELETTRICO',
          description: 'Quando restauriamo un\'auto ci occupiamo anche dell\'installazione dell\'impianto elettrico e del collegamento di esso sia che venga rigenerato sia nel caso che venga sostituito con uno nuovo.',
        },
        {
          image: 'src/assets/img/prova.jpg',
          title: 'IMPIANTI FRENANTI',
          description: 'Siamo specializzati nel ripristino e nella revisione di impianti frenanti a taburo con cilindretti idraulici e con meccanismo a corda o a bacchetta.',
        },
        {
          image: 'src/assets/img/prova.jpg',
          title: 'GANASCE',
          description: 'Ci occupiamo di far sostituire i ferodi della ganasce oppure di trovare componenti nuovi o rigenerati.',
        },
        {
          image: 'src/assets/img/prova.jpg',
          title: 'PINZE FRENI',
          description: 'Ci occupiamo anche della revisione delle pinze dei freni per impianti frenanti a disco e della rettifica di tamburi o dischi dei freni.',
        },
        {
          image: 'src/assets/foto_classic_garage/image00021.jpeg',
          title: 'FRESATURA E TORNITURA',
          description: 'Siamo specializzati nella tornitura e nella fresatura di ogni tipo di metallo con altissima precisione.',
        },
        {
          image: 'src/assets/foto_classic_garage/image00029.jpeg',
          title: 'IMPIANTI AD INIEZIONE',
          description: 'Siamo specializzati nel ripristino e nella riparazione di impianti di Iniezione Bosch K-Jetronic e Ke-Jetronic.',
        },
        {
          image: 'src/assets/foto_classic_garage/image00023.jpeg',
          title: 'ZINCATURA',
          description: 'Ci occupiamo di fare zincare tutta la bulloneria e le varie parti che hanno perso di lucentezza, e verniciando tutti i componenti che lo necessitino.',
        },
      ],
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
            description="Qui alla Classic Garage siamo specializzati nella revisione completa dei motori dalle autovetture partendo da quelle degli anni 30 a carburatore, per passare alle versioni più moderne a iniezione meccanica fino ad arrivare a quelle ad iniezione elettronica.
            Oltre all'aspetto meccanico curiamo anche l'aspetto estetico del motore oltre a quello di tutte le altre parti che compongono l'auto." />
        </div>

      </div>

      <div class="my-5">
        <div class="row card_servizi">

          <!-- Card 1 -->
          <!-- ciclo v-for elementi dentro card_serviziSection: [...} -->
          <div v-for="(card, index) in cardServiziSection" :key="index"
            class="col-md-12 col-lg-6 col-xl-4 mb-4 d-flex justify-content-center">
            <div class="card d-flex justify-content-center">
              <div class="card-body d-flex mt-3">
                <div class="vertical_line"></div>
                <div>
                  <div class="pt-3 my_ms mb-3 d-flex justify-content-start">
                    <img :src="card.image" class="card-img-top" alt="Card image" />
                  </div>
                  <div class="my_ms">
                    <h4 class="text-start">{{ card.title }}</h4>
                    <p class="card-text text-start">{{ card.description }}</p>
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

/* .servizi p {
  width: 100%;
} */

.servizi h4 {
  margin-top: 50px;
}

.servizi p.card-text.text-start {
  margin-top: 20px;
}

.servizi .card {
  width: 80%;
  /* background-color: rgb(220, 220, 220); */
}

.servizi .card img {
  width: 170px;
  height: 120px;
  object-fit: cover;
  object-position: 30% 10%;
}

.servizi .card-body {
  padding-left: 16px;
}

.card .vertical_line {
  height: auto;
}

@media (min-width: 768px) {

  .servizi .card img {
    width: 450px;
    height: 300px;
    object-fit: cover;
    object-position: 30% 10%;
  }


}

@media (min-width: 992px) {
  .servizi .card img {
    width: 35vw;
    height: 40vh;
    object-fit: cover;
    object-position: 30% 10%;
  }
}

@media (min-width: 1200px) {
  .servizi .card {
    width: 100%;
    margin-bottom: 50px;
    /* background-color: rgb(220, 220, 220); */
  }

  .servizi .card img {
    width: 22vw;
    height: 30vh;
    object-fit: cover;
    object-position: 30% 10%;
  }
}
</style>