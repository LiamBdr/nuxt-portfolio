<template>
  <div>
    <Header @showMobile="displayMobileMenu" :hideMobileMenu="showMobileMenu" />
    <MainNav
      @showMobile="displayMobileMenu"
      navClass="mobile"
      :class="{ active: showMobileMenu }"
    />
    <Nuxt />
    <Footer />
  </div>
</template>

<script>
export default {
  data() {
    return {
      showMobileMenu: false,
    };
  },
  methods: {
    displayMobileMenu(bool) {
      this.showMobileMenu = bool;
    },
  },
};
</script>