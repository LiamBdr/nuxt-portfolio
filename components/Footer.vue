<template>
  <footer class="main-footer">
    <div class="footer-top">
      <div class="footer-col">
        <div class="main-header__name">Liam Boudraa<span>.fr</span></div>
        <p>
          Création de sites sur mesure, boutique e-commerce, landing page,
          portfolio et bien d'autres...
        </p>
      </div>

      <div class="footer-col">
        <h4>Me contacter</h4>
        <ul>
          <li>
            <a class="footer-link" href="tel:+33678463935">06 78 46 39 35</a>
          </li>
          <li>
            <a class="footer-link" href="mailto:contact@liam-boudraa.fr">
              contact@liam-boudraa.fr
            </a>
          </li>
        </ul>
      </div>

      <div class="footer-col">
        <h4>Me retrouver</h4>
        <a
          class="footer-picto"
          href="https://github.com/LiamBdr"
          target="_blank"
        >
          <img src="~/assets/svg/github.svg" alt="Pictogramme github" />
        </a>
        <a
          class="footer-picto"
          href="https://www.linkedin.com/in/liamboudraa/"
          target="_blank"
        >
          <img src="~/assets/svg/linkedin.svg" alt="Pictogramme linkedin" />
        </a>
      </div>
    </div>

    <div class="footer-bottom">
      <p>Copyright © {{ currentYear }} Liam Boudraa. Tous droits réservés.</p>
      <p>Site créé avec 🔥 à Troyes 🇫🇷</p>
    </div>
  </footer>
</template>

<style lang="scss">
.main-footer {
  position: relative;
  padding: 40px 10% 25px 10%;
  background: #fafafb;
  margin-top: 50px;
}

.footer-top {
  position: relative;
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: stretch;
}

.footer-col {
  padding: 0 5%;

  &:nth-child(1) {
    flex: 0 0 35%;
    padding: 0;
  }

  h4 {
    font-weight: 500;
    font-size: 1.7rem;
    margin-bottom: 10px;
    margin-top: 3px;
  }

  ul {
    list-style: none;
  }

  li {
    font-size: 1.7rem;
    font-weight: 300;

    display: flex;
    align-items: center;

    &::before {
      content: "\2022";
      color: $tonic;
      margin-right: 6px;
    }
  }

  .main-header__name {
    margin-bottom: 10px;
    height: auto;
  }

  p {
    font-weight: 300;
    font-size: 1.5rem;
  }

  .footer-picto {
    display: inline-flex;
    margin-right: 15px;
    transition: all ease 0.1s;

    img {
      width: 25px;
    }

    &:hover {
      filter: opacity(0.8);
    }
  }

  .footer-link {
    position: relative;
    text-decoration: none;
    cursor: pointer;
    font-size: 1.5rem;
    transition: all ease 0.1s;

    &:hover {
      color: lighten($text, 30%);
    }
  }
}

.footer-bottom {
  position: relative;

  margin-top: 30px;
  padding-top: 30px;

  border-top: 1px solid #e7e7e9;

  display: flex;
  justify-content: space-between;

  p {
    width: auto;
    color: #8795a1;
    font-weight: 300;
    font-size: 1.5rem;
  }
}

@media (max-width: 1024px) {
  .footer-col {
    padding: 0 10px;
  }
}

//réduire font-size
@media (max-width: 768px) {
  .main-footer {
    margin-top: 30px;
    padding: 30px 5% 20px 5%;
  }

  .footer-top {
    flex-wrap: wrap;
  }

  .footer-col {
    padding: 0;

    .main-header__name {
      font-size: 1.9rem;
      margin-bottom: 7px;
    }

    h4 {
      font-size: 1.5rem;
    }

    p,
    .footer-link {
      font-size: 1.4rem;
    }

    &:nth-child(1) {
      flex: unset;
      margin-bottom: 25px;
    }

    &:nth-child(2),
    &:nth-child(3) {
      display: inline-block;
      width: 50%;
    }
  }

  .footer-bottom {
    padding-top: 15px;
    flex-direction: column;
    align-items: center;

    p {
      font-size: 1.4rem;
      text-align: center;
    }

    p:nth-last-child(1) {
      margin-top: 10px;
    }
  }
}

@media (max-width: 425px) {
  .main-footer {
    margin-top: 0;
    padding: 25px 5% 20px 5%;
  }

  .footer-col {
    margin: 10px 0 !important;

    &:nth-child(2),
    &:nth-child(3) {
      width: 100%;
    }
  }
}
</style>

<script>
export default {
  data() {
    return {
      currentYear: new Date().getFullYear(),
    };
  },
};
</script>