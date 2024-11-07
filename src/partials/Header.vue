<script>
import { clickDropdown } from '../main';

export default {
  mounted() {
    clickDropdown(); // Richiama la funzione per gestire il dropdown
  },
};
</script>


<template>
  <section>
    <div class="d-none d-md-block">
      <div class="bg_header d-flex justify-content-center">
        <div class="header d-flex justify-content-center">
          <div class="logo">
            <img src="../assets/img/PROVA_DEFINITIVA_LOGO.png" alt="">
          </div>

          <div class="my_width">
            <ul id="my_menu" class="menu nav-md d-flex justify-content-between">
              <li>
                <RouterLink to="/">Home<i class="ms-2 fa-solid fa-house"></i></RouterLink>
              </li>
              <li>
                <RouterLink to="/chi-siamo">Chi Siamo<i class="ms-2 fa-solid fa-address-card"></i></RouterLink>
              </li>
              <li>
                <RouterLink to="/lavori">I Nostri Lavori<i class="ms-2 fa-solid fa-car"></i></RouterLink>
              </li>
              <li>
                <RouterLink to="/servizi">Servizi<i class="ms-2 fa-solid fa-wrench"></i></RouterLink>
              </li>
              <li>
                <!-- section id="contatti" -->
                <a href="#contatti" class="contatti">Contatti<i class="ms-2 fa-solid fa-pen"></i></a>
              </li>
            </ul>

          </div>
        </div>
      </div>
    </div>

    <div class="nav-sm header d-block d-md-none d-flex align-items-center justify-content-around">
      <div class="logo">
        <img src="../assets/img/PROVA_DEFINITIVA_LOGO.png" alt="">
      </div>
      <div class="btn p-0 d-flex align-items-center">
        <button class="menu-button" id="menuButton">Menu<i class="ms-2 pt-1 fa-solid fa-gear"></i></button>
        <div class="dropdown-content" id="dropdownMenu">
          <div class="menu_mobile">
            <RouterLink to="/">Home<i class="ms-2 fa-solid fa-house"></i>
            </RouterLink>
            <RouterLink to="/chi-siamo">Chi Siamo<i class="ms-2 fa-solid fa-address-card"></i></RouterLink>
            <RouterLink to="/lavori">I Nostri Lavori<i class="ms-2 fa-solid fa-car"></i></RouterLink>
            <RouterLink to="/servizi">Servizi<i class="ms-2 fa-solid fa-wrench"></i></RouterLink>
            <!-- section id="contatti" -->
            <a href="#contatti" class="contatti">Contatti<i class="ms-2 fa-solid fa-pen"></i></a>
          </div>
        </div>
      </div>
    </div>
  </section>

</template>

<style>
.bg_header,
.nav-sm {
  background: linear-gradient(to bottom, #193663, #365a8b);
}

.header {
  height: 150px;
  width: 100%;
  border-bottom: 2px solid #DB9129;
}

.logo img {
  width: 100px;
}

.my_width {
  width: 85%;
}

.menu,
.header {
  line-height: 150px;
}

.nav-sm {
  height: 150px;
}

.nav-sm a {
  display: flex;
  align-items: center;
}

.fa-gear {
  color: white;
  font-size: 20px;
}

.menu-button,
.nav-md {
  background: none;
  width: 100%;
  color: white;
  font-size: 25px;
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

.btn {
  border: none;
  cursor: pointer;
}

.dropdown-content {
  display: none;
  position: absolute;
  background: linear-gradient(to bottom, #193663, #264c80);
  z-index: 3;
  left: 0px;
  top: 150px;
  width: 100%;
  height: calc(100vh - 150px);
  padding-top: 60px;
}

.menu_mobile {
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
}

.dropdown-content a {
  font-size: 25px;
  color: #ffffff;
  text-decoration: none;
  /* border-bottom: 2px solid transparent; */
  transition: border-bottom 0.3s ease;
  display: flex;
  justify-content: center;
  line-height: 50px;
  margin-bottom: 50px;
}

.router-link-exact-active {
  border-bottom: 2px solid #DB9129;
  color: #DB9129 !important;
}

a.contatti {
  color: #DB9129;
}

/* `sm` applies to x-small devices (portrait phones, less than 576px) */
@media (max-width: 575.98px) {}

/* Small devices (landscape phones, 576px and up) */
@media (min-width: 576px) {}

@media (min-width: 768px) {

  .nav-md a,
  li {
    font-size: 18px;
    /* margin-left: 20px; */
  }

  .logo img {
    width: 100px;
  }
}

@media (min-width: 1200px) {

  .nav-md a,
  li {
    font-size: 25px;
  }

  .my_width {
    padding-left: 150px;
  }
}
</style>