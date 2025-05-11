<script>
import HeroLink from '../components/HeroLink.vue';
import TopBodyLink from '../components/TopBodyLink.vue';
import image from '/img/image00007.jpg'; // Importazione dell'immagine
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
          image: 'img/image00015.jpeg',
          title: 'REVISIONE CAMBI',
          description: 'Siamo specializzati nella revisione completa di cambi manuali e di differenziali e quando effettuiamo la revisione di un cambio ci occupiamo di reperire tutti i componenti che necessitino di essere sostituiti.',
        },
        {
          image: 'img/image00031.jpeg',
          title: 'CREAZIONI',
          description: 'Siamo specializzati nella realizzazione di tubazioni in rame per l\'impianto frenante oppure per le linee benzina.',
        },
        {
          image: 'img/image00006.jpeg',
          title: 'REVISIONE CARBURATORE',
          description: 'Siamo specializzati nella revisione integrale dei carburatori di vari brand come SOLEX, WEBER, DELL\'ORTO, ZENIT, ecc',
        },
        {
          image: 'img/image00025.jpeg',
          title: 'COSTRUZIONE SCARICHI SU MISURA',
          description: 'Costruiamo sistemi di scarico su misura per tutti i tipi di esegenze sia in ferro che in acciaio inox con saldature a tig oppure MIG di altissima qualità.',
        },
        {
          image: 'img/image00016.jpeg',
          title: 'IMPIANTO ELETTRICO',
          description: 'Quando restauriamo un\'auto ci occupiamo anche dell\'installazione dell\'impianto elettrico e del collegamento di esso sia che venga rigenerato sia nel caso che venga sostituito con uno nuovo.',
        },
        {
          image: 'img/image00034.jpeg',
          title: 'IMPIANTI FRENANTI',
          description: 'Siamo specializzati nel ripristino e nella revisione di impianti frenanti a taburo con cilindretti idraulici e con meccanismo a corda o a bacchetta.',
        },
        {
          image: 'img/image00033.jpeg',
          title: 'GANASCE',
          description: 'Ci occupiamo di far sostituire i ferodi della ganasce oppure di trovare componenti nuovi o rigenerati.',
        },
        {
          image: 'img/image00032.jpeg',
          title: 'PINZE FRENI',
          description: 'Ci occupiamo anche della revisione delle pinze dei freni per impianti frenanti a disco e della rettifica di tamburi o dischi dei freni.',
        },
        {
          image: 'img/image00021.jpeg',
          title: 'FRESATURA E TORNITURA',
          description: 'Siamo specializzati nella tornitura e nella fresatura di ogni tipo di metallo con altissima precisione.',
        },
        {
          image: 'img/image00029.jpeg',
          title: 'IMPIANTI AD INIEZIONE',
          description: 'Siamo specializzati nel ripristino e nella riparazione di impianti di Iniezione Bosch K-Jetronic e Ke-Jetronic.',
        },
        {
          image: 'img/image00023.jpeg',
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

  <section class="body_link servizi">
    <div class="my_container text-center">
      <div class="row align-items-start">
        <div class="col-12">
          <TopBodyLink little_title="SERVIZI" title_page="CLASSIC GARAGE"
            description="Qui alla Classic Garage siamo specializzati nella revisione completa dei motori dalle autovetture partendo da quelle degli anni 30 a carburatore, per passare alle versioni più moderne a iniezione meccanica fino ad arrivare a quelle ad iniezione elettronica. Oltre all'aspetto meccanico curiamo anche l'aspetto estetico del motore oltre a quello di tutte le altre parti che compongono l'auto." />
        </div>
      </div>

      <div class="my-5">
        <div class="row">
          <!-- Ciclo v-for per creare le card dinamicamente -->
          <div v-for="(card, index) in cardServiziSection" :key="index"
            class="col-md-12 col-lg-6 col-xl-4 mb-4 d-flex justify-content-center">
            <div class="card d-flex justify-content-center">
              <div class="card-body d-flex flex-column align-items-center">
                <img :src="card.image" class="card-img-top" alt="Card image" />
                <h4 class="card-title mt-3">{{ card.title }}</h4>
                <p class="card-text">{{ card.description }}</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<style scoped>
.servizi {
  margin-bottom: 50px;
}

.servizi .card {
  background-color: #fff;
  border-radius: 15px;
  box-shadow: 0 4px 15px rgba(0, 0, 0, 0.1);
  overflow: hidden;
  transition: transform 0.3s ease, box-shadow 0.3s ease;
}

.servizi .card:hover {
  transform: translateY(-5px);
  box-shadow: 0 12px 30px rgba(0, 0, 0, 0.15);
}

.servizi .card-img-top {
  width: 100%; /* Imposta la larghezza dell'immagine al 100% */
  height: 350px; /* Imposta un'altezza fissa per tutte le immagini */
  object-fit: cover; /* Mantiene il contenuto dell'immagine coprendo la dimensione dell'elemento */
  object-position: center; /* Centra l'immagine per evitare distorsioni */
  border-bottom: 2px solid #eee; /* Aggiungi una separazione visiva tra immagine e testo */
}

.servizi .card-body {
  padding: 20px;
  text-align: center;
}

.servizi .card-title {
  font-size: 1.3rem;
  font-weight: bold;
  color: #333;
  margin-top: 15px;
}

.servizi .card-text {
  font-size: 1rem;
  color: #666;
  margin-top: 10px;
  line-height: 1.5;
}

/* Media query per dispositivi più piccoli */
@media (max-width: 768px) {
  .servizi .card {
    width: 100%;
    margin-bottom: 30px;
  }

  .servizi .card-body {
    padding: 15px;
  }
}

@media (min-width: 768px) {
  .servizi .card-img-top {
    height: 250px;
  }
}

@media (min-width: 992px) {
  .servizi .card-img-top {
    height: 300px;
  }
}

@media (min-width: 1200px) {
  .servizi .card {
    width: 90%;
    margin-bottom: 50px;
  }

  .servizi .card-img-top {
    height: 350px; /* Altezza maggiore per schermi più grandi */
  }
}

</style>