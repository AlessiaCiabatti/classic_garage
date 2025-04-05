<script>
import HeroLink from '../components/HeroLink.vue';
import TopBodyLink from '../components/TopBodyLink.vue';
import image from '../assets/img/foto_classic_garage/image00007.jpeg'; // Importazione dell'immagine

export default {
  components: {
    HeroLink,
    TopBodyLink,
  },
  data() {
    return {
      image, // Aggiungi l'immagine ai dati

      cardLavoriSection: [
        {
          image: 'src/assets/img/foto_classic_garage/image00015.jpeg',
          title: 'REVISIONE CAMBI',
          description: 'Siamo anche specializzati nella revisione completa di cambi manuali e di differenziali e quando effettuiamo la revisione di un cambio ci occupiamo di reperire tutti i componenti che necessitino di essere sostituiti.',
        },
        {
          image: 'src/assets/img/foto_classic_garage/image00006.jpeg',
          title: 'REVISIONE CARBURATORE',
          description: 'Siamo specializzati nella revisione integrale dei carburatori di vari brand come SOLEX, WEBER, DELL\'ORTO, ZENIT, ecc',
        },
        {
          image: 'src/assets/img/foto_classic_garage/image00025_ritaglio.jpg',
          title: 'COSTRUZIONE SCARICHI SU MISURA',
          description: 'Costruiamo anche sistemi di scarico su misura per tutti i tipi di esegenze sia in ferro che in acciaio inox con saldature a tig oppure MIG di altissima qualità.',
        },
        {
          image: 'src/assets/img/foto_classic_garage/image00021.jpeg',
          title: 'FRESATURA E TORNITURA',
          description: 'Siamo specializzati nella tornitura e nella fresatura di ogni tipo di metallo con altissima precisione.',
        },
        {
          image: 'src/assets/img/foto_classic_garage/image00016.jpeg',
          title: 'IMPIANTO ELETRICO',
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
          image: 'src/assets/img/prova.jpg',
          title: 'IMPIANTI AD INIEZIONE',
          description: 'Siamo specializzati nel ripristino e nella riparazione di impianti di Iniezione Bosch K-Jetronic e Ke-Jetronic.',
        },
        {
          image: 'src/assets/img/foto_classic_garage/image00023.jpeg',
          title: 'ZINCATURA',
          description: 'Ci occupiamo di fare zincare tutta la bulloneria e le varie parti che hanno perso di lucentezza, e verniciando tutti i componenti che lo necessitino.',
        },
        {
          image: 'src/assets/img/prova.jpg',
          title: 'CREAZIONI',
          description: 'Siamo specializzati nella realizzazione di tubazioni in rame per l\'impianto frenante oppure per le linee benzina.',
        },
      ]
    };
  }

}
</script>

<template>
  <HeroLink title="I Nostri Lavori" :image="image" />
  <!-- passa l'immagine come props -->

  <section class="body_link lavori">
    <div class="my_container text-center">
      <div class="col-12">

        <TopBodyLink little_title="I NOSTRI LAVORI" title_page="CLASSIC GARAGE" />

      </div>

      <div class="row align-items-start cardLacvoriSection">

        <div v-for="(card, index) in cardLavoriSection" :key="inex" class="col-sm-12 col-xl-6 p-0">
          <div class="card">
            <img :src="card.image" class="card-img-top" alt="...">
            <div class="card-body d-flex mt-5 my_mb">
              <div class="vertical_line"></div>
              <div class="my_ms">
                <h4 class="text-start">{{ card.title }}</h4>
                <p class="card-text text-start">{{ card.description }}</p>
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

  img.card-img-top {
    height: 55vh;
    width: 90%;
    object-fit: cover;
  }
}
</style>