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
    },
    second_description: {
      type: String,
      required: true
    },
    third_description: {
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
  <div>
    <p class="text-start">{{ second_description }}</p>
  </div>
  <div>
    <p class="text-start">{{ third_description }}</p>
  </div>
</template>


<style>
.body_link h1 {
  margin-top: 50px;
  font-size: 12vw;
}

.vertical_line {
  border-left: 10px solid #DB9129;
  height: 30px;

}

.body_link p {
  letter-spacing: 2px;
  margin-bottom: 50px;
  margin-top: 50px;
  font-weight: 400;
}


@media (min-width: 768px) {

  .vertical_line {
    font-size: 2.5vw;

  }

  .body_link h4 {
    font-size: 2.8vw;
  }

  .body_link h1 {
    font-size: 7vw;
  }

  .body_link p {
    font-size: 2vw;
  }
}


@media (min-width: 1200px) {

  .vertical_line {
    height: 1.8vw;

  }

  .body_link h4 {
    font-size: 1.3vw;
  }

  .body_link h1 {
    font-size: 3.3vw;
  }

  .body_link p {
    margin-bottom: 80px;
    font-size: 1vw;
    width: 80%;
  }
}
</style>