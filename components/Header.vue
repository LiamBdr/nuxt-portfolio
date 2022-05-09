<template>
  <header class="main-header">
    <div class="main-header__name">Liam Boudraa<span>.fr</span></div>

    <MainNav/>

    <div
      class="kebab-menu"
      :class="{ active: toggleMobileMenu }"
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
  position: relative;
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
}

//KEBAB MENU
.kebab-menu {
  position: absolute;
  height: auto;

  right: 10%;
  margin: auto 0;

  transition: all 300ms cubic-bezier(0.175, 0.885, 0.32, 1.275);
  cursor: pointer;

  display: none;

  .circle {
    $size: 6px;

    width: $size;
    height: $size;
    margin: 4px;
    background: #312f2f;
    border-radius: 50%;
    transition: all ease 0.2s;

    &:nth-child(4),
    &:nth-child(5) {
      position: absolute;
      opacity: 0;
      top: 50%;
      left: 50%;
      margin-top: -3px;
    }

    &:nth-child(4) {
      margin-left: -14px;
    }

    &:nth-child(5) {
      margin-left: 7px;
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
      toggleMobileMenu: false,
    };
  },
  methods: {
    showMobile() {
      this.toggleMobileMenu = !this.toggleMobileMenu;
      this.$emit("showMobile", this.toggleMobileMenu);
    },
  },
};
</script>