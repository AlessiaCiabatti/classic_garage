<script>
import HeroLink from '../components/HeroLink.vue';
import image from '../assets/img/foto_classic_garage/image00007.jpeg'; // Importazione dell'immagine
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
      <!-- pirma riga -->
      <div class="row align-items-start">
        <div class="col-sm-12">
          <TopBodyLink little_title="CHI SIAMO" title_page="CLASSIC GARAGE"
            description="«Parlare di meccanica è raccontare la mia vita. Progetti, cambiamenti, nuovi inizi ma anche ricordi! Come il mio primo restauro di una Suzuki Samurai fatto con mio padre in un piccolo garage sotto casa. Da lì ha avuto tutto inizio!» Un'attrazione naturale per la meccanica in tutte le sue forme che, crescendo, trova la sua strada verso le macchine d'epoca. Nasce così la Classic Garage, fondata nel 2020 da un giovanissimo Damiano Sabba che, dopo un'esperienza decennale nel settore del restauro delle auto classiche, ha deciso di aprire la propria officina per dare sfogo alla sua immensa passione per il restauro meccanico delle auto." />
        </div>

        <div class="img_chi_siamo col-sm-12">
          <div class="col-sm-12 col-md-6 my_margin">
            <img class="my_w" src="../assets/img/prova.jpg" alt="">
          </div>
          <div class="col-sm-12 col-md-6 my_margin">
            <img class="my_w" src="../assets/img/prova.jpg" alt="">
          </div>
        </div>
      </div>

      <!-- seconda riga -->
      <div class="row align-items-start">
        <div class="col-sm-12">
          <TopBodyLink little_title="LAVORO"
            description="Il nostro lavoro parte prima di tutto dallo studio dei manuali d'officina dell'epoca in cui l'auto è stata concepita per far si che il risultato della riparazione svolta o del restauro integrale ottenga la stessa cura e la stessa qualità dell'epoca in cui è stata realizzata l'auto.
            Le continue difficoltà nel reperire alcuni tipi di ricambi ci ha portato alla consapevolezza che l'unica soluzione è quella di riprodurli con l'ausilio di macchine utensili.
            Per questa ragione alla Classic Garage troverete personale altamente qualificato nell'utilizzo del Tornio Parallelo e nell'utilizzo della fresatrice universale.
            Siamo attrezzati per lavorare ogni tipo di metallo, dell'acciaio, al ferro, all'alluminio, all'ottone, al rame."
            second_description="Quando un componente non si trova più in commercio noi ve lo ricostruiamo su misura.
            Siamo inoltre attrezzati per saldare qualsiasi tipo di metallo. Effettuiamo suldature a TIG, MIG, a Stagno, a Castori.
            Abbiamo inoltre una sabbiatrice attrezzata con microsfere di vetro per far tornare a nuovo i vostri componenti d'alluminio come collettori aspirazione, carburatori, scatole cambio e ogni altro pezzo in alluminio." 
            third_description="<strong class='motto'>Il nostro motto è: la cura per il dettaglio prima di tutto, restauriamo tutto il salvabile.</strong>"/>
        </div>

        <!-- <div class="img_chi_siamo col-sm-12">
          <div class="col-sm-12 col-md-6 my_margin">
            <img class="my_w" src="../assets/img/prova.jpg" alt="">
          </div>
          <div class="col-sm-12 col-md-6 my_margin">
            <img class="my_w" src="../assets/img/prova.jpg" alt="">
          </div>
        </div> -->
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
  width: 100%;
}

.img_chi_siamo.my_top {
  margin-top: -30px;
}

.img_chi_siamo:last-child {
  margin-bottom: 70px;
}

.motto {
  font-weight: bold;
  /* font-style: italic; */
  /* Aggiungi altri stili se necessario */
}

@media (min-width: 768px) {
  .img_chi_siamo.col-sm-12 {
    display: flex;
    justify-content: center;
  }

  .my_w {
    width: 90%;
  }
}


@media (min-width: 1200px) {}
</style>