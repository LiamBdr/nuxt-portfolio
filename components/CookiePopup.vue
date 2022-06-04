<template>
  <div :class="{ hide: hideCookie }" class="cookie-popup">
    <img src="~/assets/svg/cookie.svg" alt="" srcset="" />
    <p>
      Afin de vous garantir la meilleure expérience possible, ce site utilise
      des cookies.
    </p>
    <div>
      <button @click="setCookie">D'accord</button>
      <a href="">En savoir plus</a>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      hideCookie: true,
    };
  },
  methods: {
    setCookie() {
      const d = new Date();
      d.setTime(d.getTime() + 30 * 24 * 60 * 60 * 1000);
      //expires in 30 days
      let expires = "expires=" + d.toUTCString();
      document.cookie =
        "bdrcookie=" + true + ";" + expires + ";path=/; secure;";
      this.hideCookie = true;
    },
    getCookie() {
      return document.cookie.split(";").some((c) => {
        return c.trim().startsWith("bdrcookie" + "=");
      });
    },
    checkCookie() {
      if (this.getCookie() !== true) {
        //no cookies detected -> display the pop-up
        this.hideCookie = false;
      }
    },
  },
  mounted() {
    this.checkCookie();
  },
};
</script>

<style lang="scss">
.cookie-popup {
  position: fixed;
  z-index: 10;

  bottom: 20px;
  right: 20px;

  height: auto;
  width: 280px;
  padding: 30px;
  padding-bottom: 15px;

  background: white;
  border: 1px solid rgb(224, 224, 224);
  box-shadow: 0 5px 30px rgba(black, 10%);

  &.hide {
    display: none;
  }

  img {
    position: relative;
    display: block;
    margin: 0 auto;

    height: 50px;
    margin-top: -55px;
    margin-bottom: 15px;
  }

  p {
    position: relative;
    width: 100%;

    font-size: 1.3rem;
    line-height: 160%;
    color: $text;

    margin-bottom: 15px;
  }

  > div {
    display: flex;
    align-items: center;
    justify-content: space-between;
  }

  button {
    position: relative;

    padding: 5px 15px;

    outline: none;
    border: none;
    border-radius: 0;
    background: $tonic;

    color: white;
    font-weight: 500;
    font-size: 1.4rem;
    font-family: inherit;

    cursor: pointer;
    transition: all ease 0.1s;

    &:hover {
      background: darken($color: $tonic, $amount: 5);
    }
  }

  a {
    position: relative;
    font-size: 1.3rem;
    line-height: 100%;
    font-weight: 300;
    color: rgb(125, 125, 125);
    text-decoration: none;

    width: auto;
    margin-left: auto;

    &:hover {
      color: darken(rgb(125, 125, 125), 30%);
    }
  }
}

@media (max-width: 768px) {
  .cookie-popup {
    padding: 15px;

    right: 0;
    left: 0;
    margin: 0 auto;

    img {
      height: 50px;
      margin-top: -45px;
      margin-bottom: 10px;
    }

    p,
    a {
      font-size: 1.1rem;
    }

    button {
      font-size: 1.2rem;
    }
  }
}
</style>