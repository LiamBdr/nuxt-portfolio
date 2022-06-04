<template>
  <main>
    <HomeIntro />
    <HomeAbout />
    <HomeSkills />
    <HomeWorks />
    <HomeContact />
  </main>
</template>

<script>
export default {
  name: "IndexPage",
  head() {
    return {
      meta: [
        {
          hid: "description",
          name: "description",
          content:
            "Conception de sites internet sur mesure, landing page, boutique e-commerce et bien d'autres. Découvrez toutes mes réalisations made in Troyes 🇫🇷",
        },
        {
          hid: "home-keywords",
          name: "keywords",
          content:
            "développeur web, développement site internet, création de site vitrine, site sur mesure, développeur Troyes",
        },
        {
          hid: "home-auhtors",
          name: "authors",
          content: "Liam BOUDRAA",
        },
        {
          hid: "home-robots",
          name: "robots",
          content: "all",
        },
        {
          hid: "og-title",
          property: "og:title",
          content: "Liam Boudraa - Développeur web passionné - Portfolio",
        },
        {
          hid: "og-description",
          property: "og:description",
          content:
            "Conception de sites internet sur mesure, landing page, boutique e-commerce et bien d'autres. Découvrez toutes mes réalisations made in Troyes 🇫🇷",
        }
      ],
    };
  },
};
</script>