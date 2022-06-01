<template>
  <div class="work-el">
    <img
      :src="require(`~/assets/img/works/${image}`)"
      :alt="'Image d\'illustration ' + imgAlt"
    />
    <div>
      <p class="work-date">
        <em>{{ date }}</em>
      </p>
      <p>
        <strong> {{ title }} </strong>
      </p>
      <p>
        {{ desc }}
      </p>
      <a class="link" target="_blank" :href="link" rel="noopener">Visitez le site</a>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    image: String,
    imgAlt: String,
    date: String,
    title: String,
    desc: String,
    link: String,
  },
};
</script>

<style lang="scss">
.work-el {
  position: relative;
  width: 100%;
  height: 200px;

  margin-bottom: 40px;

  display: flex;
  align-items: center;
  justify-content: space-between;

  img {
    position: absolute;
    left: 0;
    height: 100%;
    width: 30%;
    object-fit: cover;
  }

  > div {
    position: absolute;
    right: 0;
    width: 67%;
    height: 100%;
    font-size: 1.7rem;

    display: flex;
    flex-direction: column;
    justify-content: center;
  }

  .work-date {
    position: absolute;
    top: 15px;
  }

  .link {
    position: absolute;
    bottom: 15px;
  }

  em {
    font-style: normal;

    &::before {
      content: "• ";
      color: $tonic;
    }
  }

  strong {
    font-weight: 500;
  }

  a {
    display: block;
    color: $tonic;
    text-decoration: none;
    margin-top: 10px;
    transition: all ease 0.1s;

    &:hover {
      color: lighten($tonic, 15%);
    }
  }

  &::after,
  &::before {
    content: "";
    position: absolute;
    bottom: 0;
    left: 0;

    width: 100%;
    height: 1px;
    background: rgb(224, 224, 224);
  }

  &::before {
    top: 0;
    bottom: auto;
  }
}

@media (max-width: 768px) {
  .work-el {
    min-height: 160px;
    height: auto;

    img {
      width: 100%;
      top: 0;
      height: 120px;
    }

    > div {
      position: relative;
      height: auto;
      width: 100%;
      margin-top: 120px;
      padding: 15px 0;
    }

    .work-date {
      position: relative;
      margin-bottom: 5px;
      top: 0;
    }

    .link {
      position: relative;
      bottom: 0;
    }
  }
}

@media (max-width: 425px) {
  .work-el {
    margin-bottom: 50px;

    img {
      width: 114%;
      top: 0;
      left: -7%;
      height: 100px;
    }

    > div {
      position: relative;
      text-align: justify;
      margin-top: 100px;
      padding: 15px 0;
    }

    .work-date {
      margin-bottom: 10px;
    }

    .link {
      margin-top: 20px;
    }
  }
}
</style>