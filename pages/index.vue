<template>
  <main>
    <HomeIntro />
    <HomeAbout />
    <HomeSkills />
    <HomeWorks />
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
          content: "Home page description",
        },
      ],
    };
  },
};
</script>