<template>
  <div class="works__slider col-12">
    <swiper
      ref="mySwiper"
      :options="swiperOptions"
    >
      <swiper-slide class="work-item" v-for="work in $static.works.edges" :key="work.node.id">
        <g-image
          :src="work.node.imgSrc"
          alt=""
          class="work-item__cover"
        />
        <g-link
          :to="work.node.path"
          class="work-item__link"
        >
          <h2 class="work-item__title">{{ work.node.title }}</h2>
        </g-link>
      </swiper-slide>
    </swiper>
    <button class="swiper-button swiper-button-prev">
      <g-image
        class="icon"
        src="../../static/img/slider-prev.svg"
        alt=""
      />
    </button>
    <button class="swiper-button swiper-button-next">
      <g-image
        class="icon"
        src="../../static/img/slider-next.svg"
        alt=""
      />
    </button>
    <!-- <div class="swiper-container">
      <div class="swiper-wrapper">

        <div class="swiper-slide work-item">
          <g-image
            src="../../static/img/works/works-expo.jpg"
            alt=""
            class="work-item__cover"
          >
          <a
            href=""
            class="work-item__link"
          >
            <h2 class="work-item__title">Taiwan Expo</h2>
          </a>
        </div>

        <div class="swiper-slide work-item">
          <g-image
            src="../../static/img/works/works-tpark.jpg"
            alt=""
            class="work-item__cover"
          >
          <a
            href=""
            class="work-item__link"
          >
            <h2 class="work-item__title">Tpark Website</h2>
          </a>
        </div>

        <div class="swiper-slide work-item">
          <g-image
            src="../../static/img/works/works-chhw.jpg"
            alt=""
            class="work-item__cover"
          >
          <a
            href=""
            class="work-item__link"
          >
            <h2 class="work-item__title">Changhua Hospital Website</h2>
          </a>
        </div>

        <div class="swiper-slide work-item">
          <g-image
            src="../../static/img/works/works-corigin.jpg"
            alt=""
            class="work-item__cover"
          >
          <a
            href=""
            class="work-item__link"
          >
            <h2 class="work-item__title">Corigin</h2>
          </a>
        </div>

        <div class="swiper-slide work-item">
          <g-image
            src="../../static/img/works/works-supervival.jpg"
            alt=""
            class="work-item__cover"
          >
          <a
            href=""
            class="work-item__link"
          >
            <h2 class="work-item__title">Supervival</h2>
          </a>
        </div>

      </div>

    </div>
    <div class="swiper-pagination"></div>
    <button class="swiper-button swiper-button-prev">
      <g-image
        class="icon"
        src="../../static/img/slider-prev.svg"
        alt=""
      >
    </button>
    <button class="swiper-button swiper-button-next">
      <g-image
        class="icon"
        src="../../static/img/slider-next.svg"
        alt=""
      >
    </button> -->
  </div>
</template>

<static-query>
  query {
    works: allWork {
      edges {
        node {
          title
          path
          imgSrc
        }
      }
    }
  }
</static-query>

<script>
export default {
  name: "slider",
  data() {
    return {
      swiperOptions: {
        loop: true,
        pagination: {
          el: ".swiper-pagination",
        },
        navigation: {
          nextEl: ".swiper-button-next",
          prevEl: ".swiper-button-prev",
        },
      },
    };
  },
  computed: {
    swiper() {
      return this.$refs.mySwiper.$swiper;
    },
  },
  mounted() {
    this.swiper.slideTo(3, 1000, false);
  },
};
</script>