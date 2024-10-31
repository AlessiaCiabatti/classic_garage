<script>
export default {

}
</script>


<template>

  <section>
    <div class="header p-0">
      <div>
        <img src="../assets/img/PROVA_DEFINITIVA_LOGO copia.png" alt="">
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

    <div class="nav-md d-flex d-none d-md-block">
      <ul class="d-flex justify-content-around">
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

    <div class="hero">
      <img src="../assets/img/placeholder.jpg" alt="">
    </div>
  </section>

</template>

<style>
.header {
  background-color: rgb(255, 255, 255);
  height: 150px;
  display: flex;
  align-items: center;
  justify-content: center;

  img {
    width: 110px;
  }
}

.nav {
  position: relative;
}

.menu-button, .nav-md {
  background-color: #10274E;
  width: 100%;
  color: white;
  height: 60px;
  padding: 0px 16px;
  font-size: 20px;
  border: none;
  cursor: pointer;
}

.nav-md ul{
  padding-left: 0px;
  line-height: 60px;
  cursor: pointer;
}

.nav-md a, li{
  color: white;
  text-decoration: none;
  list-style: none;
}

.dropdown-content {
  display: none;
  position: absolute;
  background-color: #10274E;
  z-index: 1;
  left: 0px;
  top: 60px;
  width: 100%;
  height: calc(100vh - 210px);
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

.hero img {
  width: 100vw;
  height: calc(100vh - 210px);
  object-fit: cover;
  object-position: 59% 100%;
}
</style>