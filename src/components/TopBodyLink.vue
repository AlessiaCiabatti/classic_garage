<script>
export default {
  props: {
    little_title: {
      type: String,
      required: true
    },
    title_page: {
      type: String,
      required: true
    },
    description: {
      type: String,
      required: true
    }
  }
}
</script>


<template>
  <div class="d-flex align-items-end">
    <div class="vertical_line"></div>
    <h4 class="ms-3 mb-0">{{ little_title }}</h4>
  </div>
  <div>
    <h1 class="text-start">{{ title_page }}</h1>
  </div>
  <div>
    <p class="text-start">{{ description }}</p>
  </div>
</template>


<style>
.home h1 {
  margin-top: 50px;
  font-size: 12vw;
}

.vertical_line {
  border-left: 10px solid #DB9129;
  height: 30px;

}

.home p {
  letter-spacing: 2px;
  margin-bottom: 50px;
  margin-top: 50px;
  font-weight: 400;
}


@media (min-width: 768px) {

  .vertical_line {
    font-size: 2.5vw;

  }

  .home h4 {
    font-size: 2.8vw;
  }

  .home h1 {
    font-size: 7vw;
  }

  .home p {
    letter-spacing: 2px;
    margin-bottom: 50px;
    margin-top: 50px;
    font-size: 2vw;
    font-weight: 400;
  }
}


@media (min-width: 1200px) {

  .vertical_line {
    height: 1.8vw;

  }

  .home h4 {
    font-size: 1.3vw;
  }

  .home h1 {
    font-size: 3.3vw;
  }

  .home p {
    letter-spacing: 2px;
    margin-bottom: 80px;
    margin-top: 50px;
    font-size: 1vw;
    font-weight: 400;
    width: 80%;
  }
}
</style>