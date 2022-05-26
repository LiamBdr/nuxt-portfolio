<template>
  <section id="contact" class="home-contact">
    <h2 class="title-l">Prendre contact</h2>
    <p class="desc">
      Vous retrouvez, ci-dessous, l'ensemble de mon savoir-faire acquis grâce à
      mon cursus universitaire appliqué à travers mes expériences
      professionnelles et mes productions personnelles.
    </p>

    <div class="contact-content">
      <form class="contact-form" method="post" @submit.prevent="checkForm">
        <div class="container">
          <div>
            <label for="firstname">Prénom</label>
            <input
              id="firstname"
              v-model="form.firstname"
              type="text"
              name="name"
              placeholder="Votre prénom"
              required
            />
          </div>

          <div>
            <label for="lastname">Nom</label>
            <input
              id="lastname"
              v-model="form.lastname"
              type="text"
              name="name"
              placeholder="Votre nom"
              required
            />
          </div>
        </div>

        <label for="email">Email</label>
        <input
          id="email"
          v-model="form.email"
          type="email"
          name="email"
          placeholder="Votre email"
          required
        />

        <label for="message">Message</label>
        <textarea
          id="message"
          v-model="form.message"
          placeholder="Votre message"
          name="message"
          rows="5"
          required
        >
        </textarea>

        <input class="submit-btn" type="submit" value="Envoyer" />
      </form>

      <img
        class="contact-illu"
        src="~/assets/svg/contact-illu.svg"
        alt="Illustration contact"
      />
    </div>
  </section>
</template>

<script>
export default {
  name: "Contact",
  data() {
    return {
      form: {
        firstname: "",
        lastname: "",
        email: "",
        message: "",
      },
    };
  },
  mounted() {},
  methods: {
    checkForm() {
      console.log(this.form.firstname);
    },
  },
};
</script>

<style lang="scss">
.desc {
  text-align: center;
  font-weight: 300;
  margin-bottom: 30px;
}

.contact-content {
  position: relative;
  display: flex;
  align-items: center;
  justify-content: space-between;
}

.contact-illu {
  position: relative;
  width: 35%;
  object-fit: contain;
}

.contact-form {
  position: relative;
  width: 50%;

  display: flex;
  flex-direction: column;

  .container {
    display: flex;
    justify-content: space-between;

    div {
      flex: 0 0 48%;
    }
  }

  label {
    position: relative;
    display: block;

    font-size: 1.7rem;
    color: $text;
    margin-bottom: 5px;

    &::before {
      content: "• ";
      color: $tonic;
    }
  }

  input:not(.submit-btn),
  textarea {
    position: relative;
    width: 100%;
    padding: 7px 10px;
    margin-bottom: 20px;

    border-radius: 0;
    outline: none;
    border: none;

    font-family: inherit;
    font-size: 1.7rem;
    resize: none;

    border: 1px solid rgb(224, 224, 224);
  }

  .submit-btn {
    position: relative;
    display: inline-block;

    width: 140px;
    padding: 10px;

    outline: none;
    border: none;
    border-radius: 0;
    background: $tonic;

    color: white;
    font-weight: 700;
    font-size: 1.7rem;
    font-family: inherit;

    cursor: pointer;
    transition: all ease 0.1s;

    &:hover {
      background: darken($color: $tonic, $amount: 5);
    }
  }
}

@media (max-width: 1024px) {
  .contact-form {
    .container {
      flex-direction: column;
    }
  }

  .contact-illu {
    width: 40%;
  }
}

@media (max-width: 768px) {
  .contact-content {
    flex-direction: column;
  }

  .contact-form {
    width: 100%;
    margin-bottom: 30px;

    .container {
      flex-direction: row;
    }

    label,
    input:not(.submit-btn),
    textarea,
    .submit-btn {
      font-size: 1.4rem;
    }
  }

  .contact-illu {
    width: 55%;
  }
}

@media (max-width: 425px) {
  .contact-form {
    .container {
      flex-direction: column;
    }

    input:not(.submit-btn),
    textarea {
      margin-bottom: 10px;
    }
  }
}
</style>