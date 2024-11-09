<script>
import HeroHome from '../components/HeroHome.vue';
import TopBodyLink from '../components/TopBodyLink.vue';

export default {
  components: {
    HeroHome,
    TopBodyLink
  }
}
</script>

<template>
  <HeroHome />
  <section class="body_link">
    <div class="my_container text-center">
      <div class="row align-items-start">
        <div class="col-sm-12 col-xl-6">

          <TopBodyLink little_title="PERCH&Eacute; SCEGLIERE" title_page="CLASSIC GARAGE" description="Specialisti nel restauro e manutenzione di macchine d'epoca, con passione e
              precisione senza tempo. Classic Garage è il punto di riferimento per gli amanti delle auto d'epoca che
              cercano un servizio di restauro e manutenzione di altissimo livello." />

          <div class="list_check">
            <table>
              <tbody>
                <tr>
                  <th scope="row"><img class="check" src="../assets/img/check.png" alt=""></th>
                  <td>Professionalità e Passione</td>
                </tr>
                <tr>
                  <th scope="row"><img class="check" src="../assets/img/check.png" alt=""></th>
                  <td>Attenzione ai Dettagli</td>
                </tr>
                <tr>
                  <th scope="row"><img class="check" src="../assets/img/check.png" alt=""></th>
                  <td colspan="2">Esperienza e Competenza Specializzata</td>
                </tr>
              </tbody>
            </table>
          </div>

        </div>

        <div class="right d-flex justify-content-between col-sm-12 col-xl-6 p-0">
          <div class="d-flex justify-content-start">
            <img src="../assets/img/placeholder.jpg" alt="">
          </div>
          <div class="last_img d-flex justify-content-end">
            <img src="../assets/img/placeholder.jpg" alt="">
          </div>
        </div>
      </div>
    </div>
  </section>

</template>

<style>
.body_link{
  padding-top: 100px;
}

td {
  display: flex;
  line-height: 20px;
  margin: 0 20px;
  font-size: 4.7vw;
}

tr {
  height: 30px;
}

.check {
  width: 20px;
  margin-bottom: 50px;
}

.list_check {
  margin-bottom: 70px;
}

.right {
  margin-bottom: 100px;
}

.right img {
  width: 90%;
  height: 375px;
  object-fit: cover;
}

.last_img {
  margin-top: 100px;
}

@media (min-width: 768px) {

  td {
    display: flex;
    line-height: 35px;
    margin: 0 50px;
    font-size: 4vw;
  }

  .check {
    width: 35px;
    margin-bottom: 50px;
  }

  .right img {
    height: 670px;
  }

}


@media (min-width: 1200px) {
  td {
    display: flex;
    line-height: 35px;
    margin: 0 50px;
    font-size: 1.5vw;
  }

  .check {
    width: 35px;
    margin-bottom: 50px;
  }


}
</style>