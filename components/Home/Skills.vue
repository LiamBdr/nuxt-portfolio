<template>
  <section id="skills" class="home-skills">
    <h2 class="title-l">Mes compétences</h2>
    <p class="desc">
      Vous retrouvez, ci-dessous, l'ensemble de mon savoir-faire acquis grâce à
      mon cursus universitaire appliqué à travers mes expériences
      professionnelles et mes productions personnelles.
    </p>

    <div class="skills-icons">
      <figure>
        <i class="devicon-html5-plain colored"></i>
        <figcaption>HTML5</figcaption>
      </figure>

      <figure>
        <i class="devicon-css3-plain colored"></i>
        <figcaption>CSS3</figcaption>
      </figure>

      <figure>
        <i class="devicon-javascript-plain colored"></i>
        <figcaption>Javascript Es6</figcaption>
      </figure>

      <figure>
        <i class="devicon-sass-original colored"></i>
        <figcaption>Sass</figcaption>
      </figure>

      <figure>
        <i class="devicon-nuxtjs-plain colored"></i>
        <figcaption>NuxtJs</figcaption>
      </figure>

      <figure>
        <i class="devicon-symfony-original colored"></i>
        <figcaption>Symfony</figcaption>
      </figure>

      <figure>
        <img
          src="~/assets/svg/icons/api-platform.svg"
          alt="Api Platform Icon"
        />
        <figcaption>Api Platform</figcaption>
      </figure>

      <figure>
        <i class="devicon-wordpress-plain colored"></i>
        <figcaption>Wordpress</figcaption>
      </figure>

      <figure>
        <i class="devicon-woocommerce-plain colored"></i>
        <figcaption>Woocommerce</figcaption>
      </figure>

      <figure>
        <img src="~/assets/svg/icons/prestashop.svg" alt="Prestashop Icon" />
        <figcaption>Prestashop</figcaption>
      </figure>
    </div>
  </section>
</template>

<style lang="scss">
.desc {
  text-align: center;
  font-weight: 300;
  width: 80%;
  margin-left: 10%;
}

.skills-icons {
  display: flex;
  flex-wrap: wrap;
  justify-content: center;

  margin-top: 60px;

  figure {
    position: relative;
    display: flex;
    flex-direction: column;
    align-items: center;
    flex: 1 1 calc(20% - 10px);

    padding: 20px;

    i,
    img {
      height: 60px;
      font-size: 60px;
      margin-bottom: 15px;
    }

    figcaption {
      font-size: 1.5rem;
      color: $text;
      line-height: 110%;
      text-align: center;
    }

    &::after {
      content: "";
      position: absolute;
      right: 0;
      height: 60%;
      top: 20%;
      width: 1px;
      background: rgb(224, 224, 224);
    }

    &:nth-child(5n)::after {
      content: unset;
    }
  }
}

@media (max-width: 1024px) {
  .skills-icons {
    figure {
      flex: 1 1 calc(30% - 20px);

      &:nth-child(3n)::after,
      &:nth-last-child(1)::after {
        content: unset;
      }
      &:nth-child(5)::after {
        content: "";
      }
    }
  }
}

@media (max-width: 768px) {
  .skills-icons {
    margin-top: 40px;

    figure {
      flex: 1 1 calc(49%);
      i,
      img {
        height: 50px;
        font-size: 50px;
        margin-bottom: 15px;
      }

      &:nth-child(1n)::after {
        content: "";
      }

      &:nth-child(2n)::after {
        content: unset;
      }
    }
  }
}

@media (max-width: 425px) {
  .desc {
    width: 100%;
    margin-left: 0;
  }

  .skills-icons {
    margin-top: 30px;

    figure {
      padding: 15px;

      i,
      img {
        height: 45px;
        font-size: 45px;
        margin-bottom: 10px;
      }

      figcaption {
        font-size: 1.3rem;
      }
    }
  }
}
</style>

<script>
export default {
  name: "Skills",
  beforeMount() {
    //gsap animation
    gsap.from(".skills-icons figure", {
      scrollTrigger: {
        trigger: ".home-skills",
      },
      delay: 0.3,
      duration: 0.7,
      y: 10,
      opacity: 0,
      stagger: 0.2,
    });
  },
};
</script>