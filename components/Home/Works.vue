<template>
  <section id="works" class="home-works">
    <h2 class="title-l">Mes réalisations</h2>

    <WorkEl
      image="barter.png"
      imgAlt="BarterJailer"
      date="Avril 2022"
      title="Site de jeu pour le projet de fin de DUT"
      desc=" Réalisation d'un site de jeu permettant de faire des parties de carte
          en ligne contre d'autres joueurs"
      link="http://mmi20d07.mmi-troyes.fr/jeu/"
    />

    <WorkEl
      image="frisbee.jpg"
      imgAlt="frisbee"
      date="Janvier 2022"
      title="Refonte du site de l'association Disctroy(es)"
      desc="Création d'un nouveau site pour l'association d'ultimate frisbee
          troyenne : DiscTroy(es)"
      link="https://disctroyes.fr/"
    />

    <WorkEl
      image="puzzle.jpg"
      imgAlt="énigmes"
      date="Décembre 2021"
      title="Jeu de réflexion en ligne"
      desc=" Développement d'un site comportant plusieurs énigmes à résoudre avec
          un classement des joueurs"
      link="http://mmi20d07.mmi-troyes.fr/m3202/"
    />

    <WorkEl
      image="bdr.jpg"
      imgAlt="ancien portfolio"
      date="Novembre 2021"
      title="Ancien portfolio personnel"
      desc="Conception de mon ancien site personnel avec l'ensemble de mes travaux"
      link="/old"
    />

    <WorkEl
      image="leviers.jpg"
      imgAlt="trading"
      date="Mars 2021"
      title="Calculateur pour le trading de cryptomonnaies"
      desc="Site d'entraîenemnt pour calculer des prises de positions lors de
          trades de cryptomonnaies"
      link="https://liam-boudraa.fr/levier/calc.html"
    />
  </section>
</template>

<style lang="scss">
@media (max-width: 425px) {
  .work-el:nth-last-child(1) {
    margin-bottom: 0;
  }
}
</style>

<script>
export default {
  name: "Works",
  beforeMount() {
    const worksEls = gsap.utils.toArray(".work-el");

    //loop to anime each works element
    worksEls.forEach((text, i) => {
      gsap.from(text, {
        scrollTrigger: {
          trigger: text,
          start: "top 70%",
        },
        duration: 0.7,
        y: 20,
        opacity: 0,
      });
    });
  },
};
</script>