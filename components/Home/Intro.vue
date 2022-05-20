<template>
  <section id="intro" class="home-intro">
    <div class="text-col">
      <h1 class="home-intro__title">
        Développeur web<br />
        <span>{{ paper }}</span>
      </h1>

      <p class="home-intro__desc">
        Bonjour je suis Liam Boudraa, étudiant à l’Institut universitaire de
        technologique de Troyes dans le domaine du web.
      </p>
      <p class="home-intro__desc">
        Je réalise des solutions digitales pour l'ensemble des acteurs du
        numérique :
      </p>
      <ul class="home-intro__list">
        <li class="home-intro__item">Entreprises</li>
        <li class="home-intro__item">Associations</li>
        <li class="home-intro__item">Indépendants</li>
      </ul>
    </div>

    <div class="anim-col">
      <lottie-player
        id="home-lottie"
        src="https://assets3.lottiefiles.com/packages/lf20_pwohahvd.json"
        background="transparent"
        speed="1"
        loop
      ></lottie-player>
      <script src="https://unpkg.com/@lottiefiles/lottie-player@latest/dist/lottie-player.js"></script>
    </div>
  </section>
</template>

<style lang="scss">
.home-intro {
  position: relative;
  width: 100%;
  min-height: calc(85vh - 70px);

  display: flex;
  align-items: center;
  justify-content: center;

  .text-col {
    position: relative;
    width: 50%;
  }

  &__title {
    $font-size: 5.5rem;

    font-size: $font-size;
    line-height: $font-size + 1.5;
    font-weight: 500;

    margin-bottom: 2rem;

    span {
      position: relative;
      color: $tonic;
      display: inline-block;

      &::after {
        position: absolute;
        content: "";

        right: -5px;
        top: 10%;
        height: 80%;
        width: 2px;
        background: rgb(224, 224, 224);
        animation: typebar 1s infinite;
      }
    }
  }

  &__desc,
  &__list {
    position: relative;
    font-weight: 300;
    color: $text;

    margin-bottom: 1rem;
  }

  &__list {
    list-style-position: inside;
  }

  &__item::marker {
    color: $tonic;
    background: $tonic;
  }
}

.anim-col {
  position: relative;
  width: 50%;

  #home-lottie {
    width: 100%;
  }
}

@media (max-width: 1024px) {
  .home-intro {
    flex-direction: column;
    padding: 20px 0;

    .text-col,
    .anim-col {
      width: 100%;
    }
  }

  .anim-col #home-lottie {
    width: 80%;
    margin: 0 auto;
  }
}

@media (max-width: 768px) {
  .home-intro {
    padding: 10px 0;

    &__title {
      $font-size: 4rem;

      font-size: $font-size;
      line-height: $font-size + 1.5;
    }
  }
}

@keyframes typebar {
  0%,
  50% {
    background: rgb(224, 224, 224);
  }
  51%,
  100% {
    background: transparent;
  }
}
</style>


<script>
export default {
  name: "Intro",
  data() {
    return {
      typedText: ["passioné", "créatif", "rigoureux", "polyvalent"],
      paper: "",
      typingIndex: -1,
      typingArray: 0,
    };
  },
  mounted() {
    this.printingLoop();
  },
  methods: {
    printingLoop() {
      setTimeout(() => {
        this.typingIndex++;
        // index of letter
        const x = this.typingIndex % this.typedText[this.typingArray].length;
        // printing letter
        this.paper += this.typedText[this.typingArray][x];

        if (this.paper.length === this.typedText[this.typingArray].length) {
          // delete the word
          setTimeout(() => {
            this.deleteLoop();
          }, 1500);
        } else {
          this.printingLoop();
        }
      }, Math.random() * (400 - 100) + 100);
    },
    deleteLoop() {
      const deleteInterval = setInterval(() => {
        if (this.paper.length > 0) {
          this.paper = this.paper.slice(0, -1);
        } else {
          clearInterval(deleteInterval);

          //changing currentTyped
          this.typingArray + 1 < this.typedText.length
            ? this.typingArray++
            : (this.typingArray = 0);
          this.typingIndex = -1;
          this.printingLoop();
        }
      }, 100);
    },
  },
};
</script>