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
    <script src="https://cdnjs.cloudflare.com/ajax/libs/gsap/3.10.4/gsap.min.js"></script>
    <script src="https://cdnjs.cloudflare.com/ajax/libs/gsap/3.10.4/ScrollTrigger.min.js"></script>
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