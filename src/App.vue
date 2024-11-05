<script>
import Header from './partials/Header.vue';
import Footer from './partials/Footer.vue';
// footer

  export default {
    components: {
      Header,
      Footer,
    }
  }
</script>


<template>
  <Header />
  <router-view></router-view>
  <Footer />
</template>

<style>
@import url('https://fonts.googleapis.com/css2?family=Oswald:wght@400;700&display=swap');

*{
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

body{
  font-family: 'Oswald', sans-serif;
}

</style>