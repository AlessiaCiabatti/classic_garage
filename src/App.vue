<script>
import Header from './partials/Header.vue';
// footer

  export default {
    components: {
      Header,
    }
  }
</script>


<template>
  <Header />
  <router-view></router-view>
  <!-- footer -->
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