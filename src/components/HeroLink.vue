<script>
export default {
  props: {
    title: {
      type: String,
      required: true
    },
    image: {
      type: String,
      required: true
    }
  }
}
</script>

<template>
  <!-- mobile -->
  <div class="hero_link d-block d-md-none">
    <div class="bg_hero_link d-flex flex-column justify-content-center">

      <div class="height_lines_link">
        <div>
          <div class="line_top_link"></div>
          <div class="line_top_second_link"></div>
        </div>
      </div>

      <div>
        <div>
          <h2 class="text-white text-center mb-0">{{ title }}</h2>
        </div>
      </div>

    </div>
    <img :src="image" alt="Hero Image">
  </div>

  <!-- pc -->
  <div class="hero_link d-none d-md-block">
    <div class="bg_hero_link d-flex flex-column justify-content-center">

      <div>
        <div>
          <div class="line_top_link"></div>
          <div class="line_top_second_link"></div>
        </div>
      </div>

      <div>
        <div>
          <h2 class="text-white mb-0">{{ title }}</h2>
        </div>
      </div>

    </div>
    <img :src="image" alt="Hero Image">
  </div>


</template>

<style>
.hero_link img {
  width: 100%;
  height: 50vh;
  object-fit: cover;
  object-position: 59% 80%;
  position: relative;
}

.bg_hero_link {
  background-color: rgba(0, 0, 0, 0.5);
  height: 50vh;
  width: 100%;
  position: absolute;
  z-index: 1;
}

.line_top_link,
.line_top_second_link {
  border: 4px solid #DB9129;
  position: absolute;
  z-index: 2;
}

.height_lines_link {
  height: 50px;
}

.line_top_link {
  width: 170px;
}

.line_top_second_link {
  width: 235px;
  margin-top: 30px;
}

h2 {
  font-size: 10vw;
  font-weight: bold;
}

@media (min-width: 768px) {

  .line_top_link {
    width: 12%;
  }

  .line_top_second_link {
    width: 21%;
    margin-top: 30px;
  }

  h2 {
    font-size: 5vw;
    padding-left: 25%;
  }

}

@media (min-width: 1200px) {
  h2 {
    font-size: 3vw;
  }
}
</style>
