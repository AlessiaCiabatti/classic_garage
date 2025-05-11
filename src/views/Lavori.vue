<script>
import HeroLink from '../components/HeroLink.vue';
import TopBodyLink from '../components/TopBodyLink.vue';
import image from '/img/image00007.jpg'; // Importazione dell'immagine

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
          image: 'img/ALFA ROMEO JUNIOR ZAGATO.JPG',
          title: 'ALFA ROMEO JUNIOR ZAGATO - 1973',
          // description: '',
        },
        {
          image: 'img/ALFA ROMEO GIULIETTA SPIDER.JPG',
          title: 'ALFA ROMEO GIULIETTA SPIDER - 1962',
          // description: '',
        },
        {
          image: 'img/fiat 1100 E SUPERGIOIELLO.JPG',
          title: 'FIAT 1100 E SUPERGIOIELLO - 1949',
          // description: '',
        },
        {
          image: 'img/FERRARI 400I GIULIETTA SPIDER.JPG',
          title: 'FERRARI 400I - 1983',
          title2: 'ALFA ROMEO GIULIETTA SPIDER - 1963',
          // description: '',
        },
      ]
    };
  }

}
</script>

<template>
  <HeroLink title="I Nostri Lavori" :image="image" />

  <section class="body_link lavori">
    <div class="my_container text-center">
      <div class="col-12">
        <TopBodyLink little_title="I NOSTRI LAVORI" title_page="CLASSIC GARAGE" />
      </div>

      <div class="lavori-list mt-5">
        <div v-for="(card, index) in cardLavoriSection" :key="index"
          class="lavori-item d-flex flex-column flex-md-row align-items-center mb-5"
          :class="{ reverse: index % 2 !== 0 }">
          <div class="lavori-image">
            <img :src="card.image" :alt="card.title" />
          </div>
          <div class="lavori-content text-start">
            <h4>{{ card.title }}</h4>
            <h4>{{ card.title2 }}</h4>
            <!-- <p>{{ card.description }}</p> -->
          </div>
        </div>
      </div>
    </div>
  </section>
</template>



<style scoped>
.lavori {
  margin-bottom: 50px;
}

.lavori-list {
  display: flex;
  flex-direction: column;
  gap: 40px;
  margin-top: 40px;
}

.lavori-item {
  display: flex;
  gap: 20px;
  align-items: center;
  text-align: left;
  flex-wrap: wrap;
  justify-content: space-around;
}

.lavori-item.reverse {
  flex-direction: row-reverse;
}

.lavori-image img {
  width: 100%;
  max-width: 600px;
  height: 350px;
  height: auto;
  object-fit: cover;
  border-radius: 10px;
  box-shadow: 0 4px 20px rgba(0, 0, 0, 0.1);
}

.lavori-content {
  max-width: 500px;
  padding: 10px;
}

.lavori-content h4 {
  font-size: 1.5rem;
  margin-bottom: 10px;
}

.lavori-content p {
  font-size: 1rem;
  color: #555;
}

@media (max-width: 768px) {
  .lavori-item {
    flex-direction: column !important;
    text-align: center;
  }

  .lavori-content {
    max-width: 100%;
  }
}
</style>