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
    <div class="bg_footer footer_line">
      <div class="my_container text-center">
        <div class="row align-items-start">
          <div class="col-sm-12 col-md-12 col-lg-8">
            <ContactForm />
          </div>
          <div class="right_footer col-sm-12 col-md-12 col-lg-4">
            <div class="contattaci d-flex flex-column align-items-start">
              <h3 class="text-white mb-3">Informazioni<i class="ms-2 fa-solid fa-circle-info"></i></h3>
              <div class="d-flex flex-column align-items-start text-white">
                <p class="mb-0">VIA BOLOGNA 16</p>
                <p class="mb-0">QUARRATA (PT)</p>
                <p>51039</p>
              </div>
              <div class="d-flex flex-column align-items-start text-white">
                <h3 class="mt-2 mb-3">Orari</h3>
                <p class="mb-0">Lun - Ven</p>
                <p>8.30 - 19.30</p>
                <p class="mb-0">Sab</p>
                <p>8.30 - 12.30</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div class="text-center">
      <p class="copyright pt-2 mb-0">Copyright © 2024 Classic Garage</p>
      <p class="copyright pb-2 mb-0 mt-2">Made by<a href="https://alessiaciabatti.altervista.org/" target="_blank"> Alessia Ciabatti</a><i class="fa-solid fa-arrow-left"></i></p>
    </div>
  </footer>
</template>



<style>
.bg_footer {
  background: linear-gradient(to top, #193663, #264c80);
  padding-bottom: 70px;
}

.footer_line {
  border-top: 2px solid #DB9129;
}

.my_container {
  width: 80%;
  margin: 0 auto;
}

.copyright{
  font-size: 12px;
}

.copyright a{
  color: black;
  cursor: pointer;
  text-decoration: none;
}

.copyright a:hover{
  text-decoration: underline;
}

@media (min-width: 768px) {
  h3 {
    padding: 0px;
    font-size: 3vw;
  }
}

@media (min-width: 1200px) {
  h3 {
    padding: 0px;
    font-size: 1.5vw;
    margin-top: 70px;
  }
}

</style>