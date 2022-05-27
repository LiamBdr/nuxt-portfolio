<template>
  <nav class="main-nav" :class="navClass">
    <NuxtLink class="main-nav__link" to="/">Accueil</NuxtLink>
    <a class="main-nav__link" href="#about">À propos</a>
    <a class="main-nav__link" href="#skills">Compétences</a>
    <a class="main-nav__link" href="#works">Réalisations</a>
    <a class="main-nav__link" href="#contact">Contact</a>
  </nav>
</template>

<script>
export default {
  props: {
    navClass: String,
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

    &.nuxt-link-active {
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
  top: 0;
  left: 130vw;

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

  transition: all ease 0.4s;

  &.active {
    left: 0;
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