<script>
export default {

}
</script>

<template>
  <!-- mobile -->
  <div class="hero d-flex justify-content-center align-items-center d-block d-md-none">
    <div class="bg_hero d-flex flex-column justify-content-center">

      <div class="height_lines">
        <div>
          <div class="line_top"></div>
          <div class="line_top_second"></div>
        </div>
      </div>

      <div>
        <div>
          <h1 class="text-white text-center mb-0">CLASSIC GARAGE</h1>
          <p class="text-white text-center mb-0">Restauriamo il passato, guidiamo verso il futuro</p>
        </div>
      </div>

      <div class="height_lines d-flex flex-column justify-content-center">
        <div class="d-flex justify-content-end">
          <div class="line_bottom"></div>
          <div class="line_bottom_second"></div>
        </div>
      </div>

    </div>
    <img src="/img/image00007.jpg" alt="">
  </div>

  <!-- pc -->
  <div class="hero d-none d-md-block">
    <div class="bg_hero d-flex justify-content-between align-items-center">

      <div class="height_lines">
        <div>
          <div class="line_top"></div>
          <div class="line_top_second"></div>
        </div>
      </div>

      <div>
        <div>
          <h1 class="text-white text-center mb-0">CLASSIC GARAGE</h1>
          <p class="text-white text-center mb-0">Restauriamo il passato, guidiamo verso il futuro</p>
        </div>
      </div>

      <div class="height_lines">
        <div class="d-flex justify-content-end">
          <div class="line_top bottom"></div>
          <div class="line_top_second"></div>
        </div>
      </div>

    </div>
    <img src="/img/image00007.jpg" alt="">
  </div>

</template>

<style>
.hero img {
  width: 100%;
  height: calc(100vh - 150px);
  object-fit: cover;
  object-position: 59% 70%;
  position: relative;
}

.bg_hero {
  background-color: rgba(0, 0, 0, 0.5);
  height: calc(100vh - 150px);
  width: 100%;
  height: calc(100vh - 150px);
  position: absolute;
  z-index: 1;
}

.line_top,
.line_top_second,
.line_bottom,
.line_bottom_second {
  border: 4px solid #DB9129;
  position: absolute;
  z-index: 2;
}

.height_lines {
  height: 50px;
}

.line_top, .line_bottom_second {
  width: 170px;
}

.line_top_second, .line_bottom {
  width: 235px;
  margin-top: 30px;
}

.title {
  position: absolute;
  /* z-index: 2; */
  text-align: center;
}

h1 {
  font-size: 14vw;
  font-weight: bold;
}

p {
  font-size: 2.7vw;
  font-family: system-ui, -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
  font-weight: 400;
  letter-spacing: 3px;
}

@media (min-width: 768px) {

  .line_top {
    width: 12%;
  }

  .line_top_second {
    width: 21%;
    margin-top: 30px;
  }

  h1 {
    font-size: 8vw;
  }

  p {
    font-size: 1.5vw;
    letter-spacing: 3px;
  }


}

@media (min-width: 1200px) {
  p {
    font-size: 1.5vw;
    letter-spacing: 6px;
  }
}
</style>
