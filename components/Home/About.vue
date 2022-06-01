<template>
  <section id="about" class="home-about">
    <h2 class="title-l">A propos de moi</h2>

    <div class="about-panel-nav">
      <a @click="panelDisplay('presentation')" class="presentation active">
        Présentation
        <div class="underline"></div>
      </a>
      <a @click="panelDisplay('formation')" class="formation">
        Formations
        <div class="underline"></div>
      </a>
      <a @click="panelDisplay('experience')" class="experience">
        Expériences
        <div class="underline"></div>
      </a>
    </div>

    <div class="about-panel presentation">
      <div class="about-panel__text">
        <p>
          Salut 👋 ! Je m'appelle Liam, j’ai {{ age }} ans et je suis originaire
          de Chaumont.
        </p>
        <p>
          Actuellement étudiant en deuxième année de DUT Métiers du Multimédia
          et de l’Internet à Troyes. J’y apprends l’ensemble des connaissances
          et techniques nécessaires à la réalisation d’un site web.
        </p>
        <p>
          Passionné par l'univers du web depuis plusieurs années, je continue de
          développer mes compétences avec des technologies d'actualité.
        </p>
      </div>
      <img
        class="about-panel__img"
        src="~/assets/svg/about-presentation.svg"
        alt="Photographie ordinateur"
      />
    </div>

    <div class="about-panel formation hidden">
      <div class="about-panel__text">
        <p>
          <em>2022 | IUT de Troyes</em>
          <br />
          <strong>DUT Métiers du Multimédia et de l'Internet</strong>
          <i> Spécialité développement web back-end </i>
          Durant ces deux années j'ai grandement enrichi mes compétences en
          programmation spécialisé web.
        </p>
        <div class="separator"></div>
        <p>
          <em>2020 | Lycée Bouchardon de Chaumont</em>
          <br />
          <strong>Baccalauréat économique et social</strong>
          <i>Spécialité mathématiques - option euro Anglais</i>
          J'y ai crée mes premières pages web en intégrant l'option Informatique
          et sciences du numérique dès la Seconde.
        </p>
      </div>
      <img
        class="about-panel__img"
        src="~/assets/svg/about-formation.svg"
        alt="Illustration formation"
      />
    </div>

    <div class="about-panel experience hidden">
      <div class="about-panel__text">
        <p>
          <em>2022 | 2 mois</em>
          <br />
          <strong>Stage dans l'agence web TalkyWalky</strong>
          <i>Développeur back-end</i>
          J'ai réalisé plusieurs modules pour des clients de l'agence sur le CMS
          e-commerce Prestashop.
        </p>
        <div class="separator"></div>
        <p>
          <em>2022 | 3 semaines</em>
          <br />
          <strong>Stage au sein de l'association DiscTroyes</strong>
          <i>Développeur full-stack</i>
          J'ai effectué une refonte complète du site de l'association des
          maquettes jusqu'au développement avec mon camarade
          <a
            href="https://fabien-curfs.fr/"
            target="_blank"
            rel="noopener noreferrer"
            >Fabien</a
          >.
        </p>
      </div>
      <img
        class="about-panel__img"
        src="~/assets/svg/about-experiences.svg"
        alt="Illustration expèrience"
      />
    </div>
  </section>
</template>

<style lang="scss">
.about-panel-nav {
  position: relative;
  max-width: 60%;

  display: flex;
  justify-content: center;
  align-items: center;

  margin: 0 auto 40px auto;

  a {
    $space: 3rem;
    position: relative;

    font-size: 2.2rem;
    text-decoration: none;
    font-weight: 300;
    text-align: center;

    flex: 1 1 0;

    color: #616060;
    cursor: pointer;
    transition: color ease 0.1s;

    &:not(:nth-last-child(1))::after {
      content: "";
      position: absolute;
      top: 0;
      right: 0;

      height: 100%;
      width: 1px;
      background: rgb(224, 224, 224);
    }

    &:hover:not(.active) {
      color: lighten(#616060, 15%);
    }

    &.active {
      color: rgb(20, 19, 19);

      .underline {
        position: absolute;
        width: 70%;
        left: 15%;
        height: 2px;
        background: $tonic;
        transform-origin: left;
      }
    }
  }
}

.about-panel {
  position: relative;
  width: 100%;
  min-height: 400px;

  display: flex;
  align-items: center;
  justify-content: space-between;

  font-size: 1.7rem;
  line-height: 165%;
  font-weight: 300;
  color: $text;

  &.hidden {
    display: none;
  }

  &__text {
    position: relative;
    width: 50%;

    p:not(:nth-last-child(1)) {
      margin-bottom: 10px;
    }

    strong {
      display: block;
      font-weight: 400;
    }

    i {
      display: block;
      font-style: normal;
      font-weight: 200;
      margin-bottom: 10px;
    }

    a {
      position: relative;
      text-decoration: none;
      color: $tonic;
      transition: all ease 0.1s;

      &:hover {
        color: lighten($tonic, 15%);
      }
    }

    em {
      font-style: normal;

      &::before {
        content: "• ";
        color: $tonic;
      }
    }
  }

  &__img {
    position: absolute;
    right: 0;
    height: 100%;
    width: 40%;
    object-fit: contain;
  }

  .separator {
    height: 1px;
    width: 100%;
    background: rgb(224, 224, 224);
    margin: 25px 0;
  }
}

@media (max-width: 1024px) {
  .about-panel-nav {
    margin: 0 auto 40px auto;
    max-width: 80%;
  }
}

@media (max-width: 768px) {
  .about-panel-nav {
    max-width: 100%;

    a {
      font-size: 1.8rem;
    }
  }

  .about-panel {
    flex-direction: column;

    &__text {
      width: 100%;
    }

    &__img {
      position: relative;
      margin-top: 15px;
      width: 50%;
    }
  }
}

@media (max-width: 425px) {
  .about-panel-nav {
    flex-wrap: wrap;
    a {
      font-size: 1.6rem;
    }
  }

  .about-panel {
    &__img {
      width: 70%;
    }
  }
}
</style>

<script>
export default {
  name: "About",
  data() {
    return {
      panelActive: "presentation",
      age: new Date().getFullYear() - 2003,
    };
  },
  mounted() {},
  methods: {
    panelDisplay(nav) {
      document
        .querySelector(".about-panel-nav ." + this.panelActive + "")
        .classList.remove("active");
      document
        .querySelector(".about-panel." + this.panelActive + "")
        .classList.add("hidden");
      this.panelActive = nav;
      document
        .querySelector(".about-panel-nav ." + this.panelActive + "")
        .classList.add("active");
      document
        .querySelector(".about-panel." + this.panelActive + "")
        .classList.remove("hidden");
    },
  },
};
</script>
