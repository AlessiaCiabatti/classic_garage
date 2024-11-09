<script>
// import ContactForm from '../components/ContactForm.vue';
export default {
  components: {
    // ContactForm,
  }
}
</script>

<template>

  <section class="footer">
    <div class="footer_line"></div>
    <div class="my_container">
      <div class="row align-items-start footer_padding">
        <div class="col-sm-12 col-md-4">
          <div>
            <h3 class="text-white">Menu<i class="ms-2 fa-solid fa-ellipsis-vertical"></i></h3>
            <ul id="my_menu" class="nav-md ps-0">
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
                <RouterLink to="/form-contact" class="contatti">Contatti<i class="ms-2 fa-solid fa-pen"></i>
                </RouterLink>
              </li>
            </ul>
          </div>
        </div>

        <div class="col-sm-12 col-md-4">
          <div class="text-white">
            <h3 class="mb-3">Informazioni<i class="ms-2 fa-solid fa-circle-info"></i></h3>
            <div>
              <p class="mb-0">VIA BOLOGNA 16</p>
              <p class="mb-0">QUARRATA (PT)</p>
              <p>51039</p>
            </div>
          </div>

          <div class="text-white orari">
            <h3 class="mt-2 mb-3">Orari<i class="ms-2 fa-solid fa-clock"></i></h3>
            <p class="mb-0">Lun - Ven</p>
            <p>8.30 - 19.30</p>
            <p class="mb-0">Sab</p>
            <p>8.30 - 12.30</p>
          </div>
        </div>

        <div class="last_column col-sm-12 col-md-4 d-flex flex-column justify-content-between">
          <div class="logo text-white">
            <img src="../assets/img/PROVA_DEFINITIVA_LOGO.png" alt="">
            <p class="mt-3">Restauriamo macchine d'epoca con cura artigianale, preservando la storia su
              quattro ruote.</p>
          </div>
          <div class="text-white">
            <a class="inst" href="https://www.instagram.com/classic__garage_?igsh=MWZkcDI2azRvZjFkMQ=="><i class="fa-brands fa-instagram"></i></a>
          </div>
        </div>
      </div>

      <div class="bottom_footer text-white mt-3">
        <div class="line_white"></div>
        <div>
          <p class="copyright mb-0">Copyright © 2024 Classic Garage</p>
        </div>
        <div>
          <p class="copyright pb-2 mb-0">Made by
            <a class="porfolio" href="https://alessiaciabatti.altervista.org/" target="_blank">Alessia Ciabatti</a>
            <!-- <i class="fa-solid fa-arrow-left"></i> -->
          </p>
        </div>
      </div>
    </div>


  </section>

</template>



<style>
.footer {
  background: linear-gradient(to top, #193663, #365a8b);
}

.footer_line {
  border-top: 2px solid #DB9129;
}

.my_container {
  width: 85%;
  margin: 0 auto;
}

.footer_padding {
  padding-top: 70px;
  padding-bottom: 50px;
}

.footer li {
  line-height: 25px;
}

.footer a {
  font-size: 4.4vw;
}

.footer .nav-md,
.footer .orari {
  margin-bottom: 40px;
}

.footer p {
  width: 70%;
}

.footer a {
  color: white;
}

.footer .inst {
  font-size: 35px;
}

.footer .copyright,
.footer .porfolio {
  font-size: 10px;
  letter-spacing: 0px;
}


@media (min-width: 768px) {
  .footer a {
    font-size: 2.5vw;
    line-height: 40px;
  }

  .footer p {
    width: 100%;
  }

  .last_column {
    height: 300px;
  }

  .bottom_footer {
    display: flex;
    flex-direction: column;
    align-items: center;
    line-height: 0px;
  }

}

@media (min-width: 992px) {
  .footer a {
    font-size: 2vw;
    line-height: 40px;
  }

}

@media (min-width: 1200px) {
  .footer a {
    font-size: 1vw;
    line-height: 40px;
  }

  h3 {
    padding: 0px;
    font-size: 1.5vw;
  }

  .footer p {
    font-size: 0.8vw;
  }

  .footer .logo {
    /* display: flex;
    flex-direction: column;
    align-items: center; */
  }

}
</style>