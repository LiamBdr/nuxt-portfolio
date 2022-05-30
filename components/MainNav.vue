<template>
  <nav class="main-nav" :class="navClass">
    <a
      class="main-nav__link intro"
      @click="hideMobileNav"
      :class="activeNav === 'intro' ? 'toggle' : ''"
      href="#intro"
      >Accueil</a
    >
    <a
      class="main-nav__link about"
      @click="hideMobileNav"
      :class="activeNav === 'about' ? 'toggle' : ''"
      href="#about"
      >À propos</a
    >
    <a
      class="main-nav__link skills"
      @click="hideMobileNav"
      :class="activeNav === 'skills' ? 'toggle' : ''"
      href="#skills"
      >Compétences</a
    >
    <a
      class="main-nav__link works"
      @click="hideMobileNav"
      :class="activeNav === 'works' ? 'toggle' : ''"
      href="#works"
      >Réalisations</a
    >
    <a
      class="main-nav__link contact"
      @click="hideMobileNav"
      :class="activeNav === 'contact' ? 'toggle' : ''"
      href="#contact"
      >Contact</a
    >
  </nav>
</template>

<script>
export default {
  props: {
    navClass: String,
  },
  data() {
    return {
      activeNav: "intro",
    };
  },
  methods: {
    handleScroll() {
      //intro
      this.addActiveLinks("intro");

      //about
      this.addActiveLinks("about");

      //skills
      this.addActiveLinks("skills");

      //works
      this.addActiveLinks("works");

      //contact
      this.addActiveLinks("contact");
    },
    addActiveLinks(nav) {
      let triggerSectionToTop = document
        .querySelector("#" + nav)
        .getBoundingClientRect().top;

      let triggerSectionToBottom = document
        .querySelector("#" + nav)
        .getBoundingClientRect().bottom;

      if (
        triggerSectionToTop <= window.innerHeight / 2 &&
        triggerSectionToBottom >= window.innerHeight / 2
      ) {
        this.removeActiveLink();
        this.activeNav = nav;
      }
    },
    removeActiveLink() {
      document
        .querySelector(".main-nav__link." + this.activeNav)
        .classList.remove("active");
    },
    hideMobileNav() {
      this.$emit("showMobile", false);
    },
  },
  beforeMount() {
    window.addEventListener("scroll", this.handleScroll);
  },
  mounted() {
    document.addEventListener("load", this.handleScroll);
  },
  beforeDestroy() {
    window.removeEventListener("scroll", this.handleScroll);
  },
};
</script>

<style lang="scss">
.main-nav {
  position: relative;

  &__link {
    position: relative;
    display: inline-block;
    margin-left: 1.8em;

    color: #272626;
    text-decoration: none;
    font-size: 1.6rem;
    font-weight: 300;

    transition: all ease 0.2s;

    &.toggle {
      font-weight: 500;
      color: $tonic;
    }

    &:hover:not(.nuxt-link-active) {
      color: lighten(#272626, 40%);
    }

    &:not(:nth-last-child(1))::after {
      content: "";
      position: absolute;
      width: 1px;
      height: 100%;
      left: calc(100% + 0.9em);
      background: rgb(224, 224, 224);
    }
  }

  @media (max-width: 1024px) {
    display: none;
  }
}

.main-nav.mobile {
  position: fixed;
  top: -120vh;
  left: 0;

  height: 100vh;
  width: 100vw;
  padding-top: 70px;

  $space: 30px;

  background: white;
  z-index: 100;

  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  gap: $space;

  transition: top ease 0.2s;

  &.active {
    top: 0;
  }

  .main-nav__link {
    font-size: 1.7rem;

    &::after {
      top: calc(100% + $space/2);
      left: -50%;
      right: -50%;
      margin: 0 auto;
      width: 100px;
      height: 1px;
    }
  }

  @media (min-width: 1024px) {
    display: none;
  }
}
</style>