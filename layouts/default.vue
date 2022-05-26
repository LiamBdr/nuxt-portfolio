<template>
  <div>
    <Header @showMobile="displayMobileMenu" />
    <MainNav navClass="mobile" :class="{ active: showMobileMenu }" />
    <Nuxt />
    <!-- <Footer /> -->
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