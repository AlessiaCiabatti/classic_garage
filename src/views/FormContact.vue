<script>
import HeroLink from '../components/HeroLink.vue';
import image from '../assets/img/placeholder.jpg'; // Importazione dell'immagine
import TopBodyLink from '../components/TopBodyLink.vue';

export default {
  components: {
    HeroLink,
    TopBodyLink
  },
  data() {
    return {
      image,
      form: {
        name: '',
        email: '',
        message: ''
      },
      message: '',
      success: false
    };
  },
  methods: {
    async submitForm() {
      const formData = new URLSearchParams();
      formData.append('name', this.form.name);
      formData.append('email', this.form.email);
      formData.append('message', this.form.message);
      formData.append('btn-send', 'true'); // Questo assicura che 'btn-send' sia presente

      try {
        const response = await fetch('contact_form.php', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/x-www-form-urlencoded'
          },
          body: formData.toString()
        });
        const result = await response.json();
        this.message = result.message;
        this.success = result.status === 'success';
      } catch (error) {
        this.message = 'Errore di rete. Riprova più tardi.';
        this.success = false;
      }
    }
  }
};
</script>

<template>

  <HeroLink title="Contatti" :image="image" />

  <section class="form_contact body_link">
    <div class="my_container">
      <TopBodyLink little_title="CONTATTI" title_page="CLASSIC GARAGE" />
    </div>

    <form @submit.prevent="submitForm">
      <h3 class="text-center prova mb-5">Contattaci<i class="ms-2 fa-solid fa-user-pen"></i></h3>
      <div v-if="message" :class="{ 'alert': true, 'alert-success': success, 'alert-danger': !success }">
        {{ message }}
      </div>
      <input class="p-3 mb-3 text" type="text" v-model="form.name" placeholder="Nome">
      <input class="p-3 mb-3 email" type="email" v-model="form.email" placeholder="E-mail">
      <textarea class="p-3 mb-5 textarea" v-model="form.message" rows="4" placeholder="Messaggio"></textarea>
      <button type="submit" name="btn-send">Invia</button>
    </form>

  </section>


</template>



<style>
.alert {
  padding: 15px;
  margin-top: 10px;
}

.alert-success {
  background-color: #d4edda;
  color: #155724;
}

.alert-danger {
  background-color: #f8d7da;
  color: #721c24;
}

.form_contact h3 {
  padding: 0px;
  font-size: 7vw;
  font-weight: bold;
  margin-top: 50px;
  margin-bottom: 30px;
}

form {
  width: 90%;
  margin: 0 auto;
  display: flex;
  flex-direction: column;
}

.feedback-input {
  font-size: 18px;
  border-radius: 5px;
  /* border: 2px solid #193663; */
  transition: all 0.3s;
  padding: 15px;
  margin-bottom: 18px;
  width: 100%;
  box-sizing: border-box;
  outline: 0;
}

.feedback-input:focus {
  /* border: 2px solid #193663; */
}

textarea {
  height: 200px;
  line-height: 150%;
  resize: vertical;
}

.text,
.email,
.textarea {
  border-radius: 5px;
  border: 1px solid #193663;
}

[type="submit"] {
  /* width: 40%; */
  background: #DB9129;
  border-radius: 5px;
  border: 0;
  cursor: pointer;
  color: white;
  font-size: 24px;
  padding-top: 10px;
  padding-bottom: 10px;
  transition: all 0.3s;
  /* margin-top: -4px; */
  font-weight: 700;
  margin-bottom: 100px;
}

[type="submit"]:hover {
  background: #f9b556;
  box-shadow: 5px 5px 10px rgba(0, 0, 0, 0.4)
}


@media (min-width: 768px) {
  form {
    width: 80%;
    margin: 0px auto;
  }

  .form_contact h3 {
    padding: 0px;
    font-size: 3.5vw;
  }

  [type="submit"] {
    width: 50%;
    margin: 0 auto;
    margin-bottom: 100px;
  }

}

@media (min-width: 1200px) {
  form {
    width: 60%;
    margin: 0px auto;
  }

  .form_contact h3 {
    padding: 0px;
    font-size: 2vw;
  }

  textarea {
    height: 250px;
    line-height: 150%;
    resize: vertical;
  }
}
</style>