<script>
import Hero from '../components/Hero.vue';
  export default {
    components: {
      Hero,
    }
  }
</script>


<template>

  <section>
    <div class="d-none d-md-block">
      <div class="bg_header d-flex justify-content-center">
        <div class="header d-flex justify-content-center">
          <div class="logo">
            <img src="../assets/img/PROVA_DEFINITIVA_LOGO copia.png" alt="">
          </div>

          <div class="my_width">
            <ul class="menu nav-md d-flex justify-content-between">
              <li>
                <a href="#">Home</a>
              </li>
              <li>
                <a href="#">Chi Siamo</a>
              </li>
              <li>
                <a href="#">I Nostri Lavori</a>
              </li>
              <li>
                <a href="#">Servizi</a>
              </li>
              <li>
                <a href="#">Contatti</a>
              </li>
            </ul>

          </div>
        </div>
      </div>
    </div>


    <div class="nav d-sm-block d-md-none">
      <button class="menu-button" id="menuButton">Menu</button>
      <div class="dropdown-content" id="dropdownMenu">
        <a class="mt-5" href="#">Home</a>
        <a href="#">Chi Siamo</a>
        <a href="#">I Nostri Lavori</a>
        <a href="#">Servizi</a>
        <a href="#">Contatti</a>
      </div>
    </div>

    <!-- fai nuovo partials con solo hero -->
    <Hero />
  </section>

</template>

<style>
.bg_header {
  background-color: #10274E;
}

.header {
  height: 150px;
  width: 90%;
}

.logo img {
  width: 100px;
}

.my_width {
  width: 85%;
  /* padding-left: 150px; */
}

.menu,
.header {
  line-height: 150px;
}

.nav {
  position: relative;
}

.nav-md {
  display: flex;
  align-items: center;
}

.menu-button {
  background-color: #10274E;
}

.menu-button,
.nav-md {
  width: 100%;
  color: white;
  padding: 0px 16px;
  font-size: 20px;
  border: none;
  cursor: pointer;
}

.nav-md ul {
  padding-left: 0px;
  line-height: 60px;
  cursor: pointer;
}

.nav-md a,
li {
  color: white;
  text-decoration: none;
  list-style: none;
  font-size: 25px;
}

.dropdown-content {
  display: none;
  position: absolute;
  background-color: #10274E;
  z-index: 1;
  left: 0px;
  top: 60px;
  width: 100%;
  height: calc(100vh - 150px);
}

.dropdown-content a {
  color: #ffffff;
  text-decoration: none;
  border-bottom: 2px solid transparent;
  transition: border-bottom 0.3s ease;
  display: flex;
  justify-content: center;
  line-height: 50px;
  margin-bottom: 50px;
}

.dropdown-content a:hover,
.nav-md a:hover {
  border-bottom: 2px solid #a16b12;
  color: #a16b12;
}

@media (min-width: 768px) {
  .my_width {
    padding-left: 50px;
  }
}

@media (min-width: 1200px) {
  .my_width {
    padding-left: 150px;
  }
}
</style>