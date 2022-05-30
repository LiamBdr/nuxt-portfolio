<template>
  <header class="main-header">
    <div class="main-header__name">Liam Boudraa<span>.fr</span></div>
    <MainNav />

    <div
      class="kebab-menu"
      :class="{ active: hideMobileMenu }"
      @click="showMobile"
    >
      <div class="circle"></div>
      <div class="circle"></div>
      <div class="circle"></div>
      <div class="circle"></div>
      <div class="circle"></div>
    </div>
  </header>
</template>

<style lang="scss">
.main-header {
  position: fixed;
  top: 0;
  left: 0;
  z-index: 150;

  height: 70px;
  width: 100%;
  padding: 0 10%;

  display: flex;
  align-items: center;
  justify-content: space-between;

  background: white;
  border-bottom: 1px solid rgb(224, 224, 224);
  box-shadow: 0 5px 30px rgba($color: #000000, $alpha: 0.05);

  &__name {
    position: relative;
    height: 100%;

    font-family: "Poppins";
    font-size: 2.2rem;
    font-weight: 600;

    display: flex;
    align-items: center;

    & span {
      color: $tonic;
    }
  }

  @media (max-width: 768px) {
    padding: 0 5%;
  }
}

//KEBAB MENU
.kebab-menu {
  position: relative;
  height: auto;
  padding: 5px;

  transition: all 300ms cubic-bezier(0.175, 0.885, 0.32, 1.275);
  cursor: pointer;

  display: none;

  .circle {
    $size: 6px;
    $margin: 4px;
    $padding: 5px;

    width: $size;
    height: $size;
    margin: $margin;
    background: #312f2f;
    border-radius: 50%;
    transition: all ease 0.2s;

    &:nth-child(4),
    &:nth-child(5) {
      position: absolute;
      opacity: 0;
      top: 0;
      bottom: 0;
      margin: auto 0;
    }

    &:nth-child(4) {
      left: calc(($padding + $margin) - ($size + $margin));
    }

    &:nth-child(5) {
      right: calc(($padding + $margin) - ($size + $margin));
    }
  }

  &.active {
    transform: rotate(45deg);

    .circle {
      opacity: 1;
    }
  }
}

@media (max-width: 1024px) {
  .kebab-menu {
    display: inline-block;
  }
}
</style>

<script>
export default {
  props: {
    hideMobileMenu: Boolean,
  },
  head() {
    return {
      title: "Liam Boudraa | Développeur web",
      meta: [
        {
          hid: "description",
          name: "description",
          content: "Home page description",
        },
      ],
    };
  },
  data() {
    return {
      toggleMobileMenu: this.hideMobileMenu,
    };
  },
  methods: {
    showMobile() {
      //send action to default.vue
      this.toggleMobileMenu = !this.toggleMobileMenu;
      //send action to default.vue
      this.$emit("showMobile", this.toggleMobileMenu);
    },
  },
  watch: {
    hideMobileMenu() {
      this.toggleMobileMenu = this.hideMobileMenu;
    },
  },
};
</script>