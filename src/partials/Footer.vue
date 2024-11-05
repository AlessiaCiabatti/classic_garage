<script>
import ContactForm from '../components/ContactForm.vue';
export default {
  components: {
    ContactForm,
  }
}
</script>

<template>


  <footer>
    <div class="contact_line">
      <ContactForm />
    </div>

    <div class="bg_footer">
      <div class="left d-flex flex-column align-items-center">

        <div class="link_footer">
          <RouterLink to="/">Home<i class="ms-2 fa-solid fa-house"></i>
          </RouterLink>
          <RouterLink to="/chi-siamo">Chi Siamo<i class="ms-2 fa-solid fa-address-card"></i></RouterLink>
          <RouterLink to="/lavori">I Nostri Lavori<i class="ms-2 fa-solid fa-car"></i></RouterLink>
          <RouterLink to="/servizi">Servizi<i class="ms-2 fa-solid fa-wrench"></i></RouterLink>
          <a href="#contatti" class="contatti">Contatti<i class="ms-2 fa-solid fa-pen"></i></a>
        </div>
      </div>

      <div class="right d-flex flex-column align-items-center">
        <div>
          <img class="logo" src="../assets/img/PROVA_DEFINITIVA_LOGO.png" alt="">
        </div>
        <div>
          <p class="text-white text-center">Restauriamo macchine d'epoca con cura artigianale, preservando la
            storia su quattro
            ruote.
          </p>
        </div>
      </div>
    </div>

    <div class="text-center">
      PROVA
    </div>
  </footer>
</template>



<style>
.contact_line {
  border-top: 2px solid #DB9129;
  border-bottom: 2px solid #DB9129;
}

.bg_footer {
  background: linear-gradient(to top, #193663, #264c80);
}

footer h3 {
  margin: 0;
  padding: 50px 0px 30px 0;
}

footer img.logo {
  width: 100px;
  padding-bottom: 20px;
  padding-top: 30px;
}

.link_footer {
  display: flex;
  justify-content: space-around;
  width: 100%;
}

footer p {
  padding-bottom: 50px;
  margin: 0 3px;
}

ul {
  padding-left: 0px;
  line-height: 60px;
  cursor: pointer;
}

.bg_footer a,
.bg_footer li {
  color: white;
  text-decoration: none;
  list-style: none;
  margin: 50px 0 30px 0;
  font-size: 3.2vw;
}

footer .router-link-exact-active {
  border-bottom: none;
}

.line_white {
  border: 2px solid white;
  margin-top: 50px;
}


@media (min-width: 768px) {
  .left {
    width: 70%;
    margin: 0 auto;
  }

  .right {
    width: 80%;
    margin: 0 auto;
  }

  footer img.logo {
    width: 150px;
    padding-bottom: 20px;
    padding-top: 60px;
  }

  .bg_footer a,
  .bg_footer li {
    color: white;
    text-decoration: none;
    list-style: none;
    margin: 100px 0 30px 0;
    font-size: 2.5vw;
  }

  .link_footer {
    display: flex;
    justify-content: space-between;
    width: 100%;
  }

}

@media (min-width: 1200px) {
  .left {
    width: 60%;
    margin: 0 auto;
  }

  .right {
    width: 50%;
    margin: 0 auto;
  }

  footer img.logo {
    width: 180px;
    padding-bottom: 20px;
    padding-top: 100px;
  }

  footer p {
    padding-bottom: 50px;
  }

  .bg_footer a,
  .bg_footer li {
    color: white;
    text-decoration: none;
    list-style: none;
    margin: 100px 0 30px 0;
    font-size: 1.5vw;
  }

}
</style>