<template>
  <section id="contact" class="home-contact">
    <h2 class="title-l">Prendre contact</h2>
    <p class="desc">
      Contactez-moi via le formulaire ci-dessous pour une idée de projet ou pour
      toute autre question. Je vous répondrai dans les plus brefs délais.
    </p>

    <div class="contact-content">
      <form
        name="contact-form"
        class="contact-form"
        data-netlify="true"
        @submit.prevent="sendForm"
      >
        <div class="container">
          <div>
            <label for="firstname">Prénom</label>
            <input
              id="firstname"
              type="text"
              name="firstname"
              placeholder="Votre prénom"
              v-model="form.firstname"
            />
          </div>

          <div>
            <label for="lastname">Nom</label>
            <input
              id="lastname"
              type="text"
              name="lastname"
              placeholder="Votre nom"
              v-model="form.lastlame"
            />
          </div>
        </div>

        <label for="email">Email</label>
        <input
          id="email"
          type="email"
          name="email"
          placeholder="Votre email"
          v-model="form.email"
        />

        <label for="message">Message</label>
        <textarea
          id="message"
          placeholder="Votre message"
          name="message"
          rows="5"
          v-model="form.message"
        >
        </textarea>

        <input type="hidden" name="form-name" value="contact-form" />

        <!-- <div
          class="g-recaptcha"
          data-sitekey="6LcXcTsgAAAAAAOfqb02B_4MLjwTDb8lfr2ydPqW"
        ></div> -->

        <div class="contact-send">
          <button class="contact-submit" type="submit" value="Envoyer">
            <span>Envoyer</span>
            <svg
              class="contact-loading"
              width="25"
              height="25"
              viewBox="0 0 40 40"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <circle
                id="loading-circle"
                cx="20"
                cy="20"
                r="18"
                stroke="#FFFF"
                stroke-width="4"
              />
            </svg>
          </button>
          <div class="contact-validation"></div>
        </div>
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
  methods: {
    encode(data) {
      return Object.keys(data)
        .map(
          (key) => encodeURIComponent(key) + "=" + encodeURIComponent(data[key])
        )
        .join("&");
    },
    sendForm(event) {
      console.log("sending form");

      console.warn(
        this.encode({
          ...this.form,
        })
      );

      fetch("/", {
        method: "POST",
        headers: { "Content-Type": "application/x-www-form-urlencoded" },
        body: this.encode({
          'form-name': 'contact-form',
          ...this.form,
        }),
      })
        .then(() => console.log("form sent"))
        .catch((error) => alert(error));
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

  input:not(.contact-submit),
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
}

.contact-send {
  display: flex;
  align-items: center;
  margin-top: 20px;
}

.contact-submit {
  position: relative;
  display: inline-flex;

  justify-content: center;
  align-items: center;

  height: 40px;
  width: 140px;
  padding: 10px;

  outline: none;
  border: none;
  border-radius: 0;
  background: $tonic;

  color: white;
  font-weight: 500;
  font-size: 1.7rem;
  font-family: inherit;

  cursor: pointer;
  transition: all ease 0.1s;

  &:hover {
    background: darken($color: $tonic, $amount: 5);
  }

  &.loading {
    span {
      display: none;
    }

    .contact-loading {
      display: block;
    }
  }
}

//loading spinner
$small-stroke: 105;
$small-stroke-animate: 95;
$rotate: 25deg;
$rotate-origin: -32deg;

.contact-loading {
  display: none;

  height: 100% !important;
  width: 100% !important;

  margin: 0 auto;
  animation: loading-spinner-spin 2s linear infinite;
  will-change: transform;

  #loading-circle {
    stroke-dasharray: $small-stroke;
    stroke-dashoffset: $small-stroke;
    stroke-linecap: round;
    animation: loading-spinner-small 1.7s cubic-bezier(0.445, 0.05, 0.55, 0.95)
      infinite;
    transform-origin: center;
  }
}

@keyframes loading-spinner-spin {
  from {
    transform: rotate(0deg);
  }
  to {
    transform: rotate(360deg);
  }
}

@keyframes loading-spinner-small {
  0% {
    stroke-dashoffset: $small-stroke-animate;
    transform: scaleY(1);
  }
  49.99% {
    stroke-dashoffset: 0;
    transform: scaleY(1);
  }
  50% {
    stroke-dashoffset: 0;
    transform: scaleY(-1) rotate($rotate);
  }
  100% {
    stroke-dashoffset: $small-stroke-animate;
    transform: scaleY(-1) rotate($rotate-origin);
  }
}

.contact-validation {
  position: relative;
  display: none;

  font-size: 1.6rem;
  font-weight: 300;

  margin-left: 20px;

  &.valid {
    display: inline-block;
    color: $tonic;
  }

  &.error {
    display: inline-block;
    color: rgb(242, 52, 52);
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
    input:not(.contact-submit),
    textarea,
    .contact-submit {
      font-size: 1.4rem;
    }
  }

  .contact-illu {
    height: 250px;
    width: auto;
  }

  .contact-validation {
    font-size: 1.4rem;
  }
}

@media (max-width: 425px) {
  .contact-form {
    .container {
      flex-direction: column;
    }

    input:not(.contact-submit),
    textarea {
      margin-bottom: 10px;
    }
  }
}
</style>