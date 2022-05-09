<template>
  <div>
    <Header 
        @showMobile="displayMobileMenu"
    />
    <MainNav
      navClass="mobile"
      :class="{ active: showMobileMenu }"
    />
    <main>
      <Nuxt />
    </main>
    <!-- <Footer /> -->
  </div>
</template>

<style lang="scss">
main {
  padding: 20px 10%;
}
</style>

<script>
export default {
  data() {
    return {
      showMobileMenu: false,
    };
  },
   methods: {
    displayMobileMenu(bool) {
      this.showMobileMenu = bool
    },
  },
};
</script>