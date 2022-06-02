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
      title: "Liam Boudraa | Développeur web",
      meta: [
        {
          hid: "description",
          name: "description",
          content: "🖥 Conception de sites internet sur-mesure // page vitrine, boutique e-commerce, site dynamique, landing page. Consultez mon portfolio ici",
        },
      ],
    };
  },
};
</script>