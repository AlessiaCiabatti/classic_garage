<script>
export default {

}
</script>

<template>

  <div id="contatti">
    <div class="d-flex justify-content-center">
      <h3>CONTATTACI<i class="ms-2 fa-solid fa-user-pen"></i></h3>
    </div>

    <form>
      <input name="name" type="text" class="feedback-input" placeholder="Nome" />
      <input name="email" type="text" class="feedback-input" placeholder="Email" />
      <textarea name="text" class="feedback-input" placeholder="Scrivi qui il tuo messaggio"></textarea>
      <input class="mb-5" type="submit" value="INVIA" />
    </form>
  </div>

</template>



<style>
h3 {
  padding: 0px;
  font-size: 6vw;
  font-weight: bold;
  margin-top: 80px;
  margin-bottom: 50px;
}

form {
  width: 90%;
  margin: 0 auto;
  display: flex;
  flex-direction: column;
  align-items: center;
}

.feedback-input {
  /* color: white; */
  /* font-family: Helvetica, Arial, sans-serif; */
  /* font-weight: 500; */
  font-size: 18px;
  border-radius: 5px;
  /* line-height: 22px; */
  /* background-color: transparent; */
  border: 2px solid #193663;
  transition: all 0.3s;
  padding: 20px;
  margin-bottom: 18px;
  width: 100%;
  box-sizing: border-box;
  outline: 0;
}

.feedback-input:focus {
  border: 2px solid #193663;
}

textarea {
  height: 200px;
  line-height: 150%;
  resize: vertical;
}

[type="submit"] {
  /* font-family: 'Montserrat', Arial, Helvetica, sans-serif; */
  width: 40%;
  background: #193663;
  border-radius: 5px;
  border: 0;
  cursor: pointer;
  color: white;
  font-size: 24px;
  padding-top: 10px;
  padding-bottom: 10px;
  transition: all 0.3s;
  margin-top: -4px;
  font-weight: 700;
}

[type="submit"]:hover {
  background: #2f5a96;
  box-shadow: 5px 5px 10px rgba(0, 0, 0, 0.4)
}


@media (min-width: 768px) {
  form {
    width: 60%;
    margin: 50px auto;
  }

  h3 {
    padding: 0px;
    font-size: 4vw;
  }
}

@media (min-width: 1200px) {
  form {
    width: 60%;
    margin: 50px auto;
  }

  h3 {
    padding: 0px;
    font-size: 2.5vw;
  }
}
</style>