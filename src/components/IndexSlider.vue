<template>
  <div class="works__slider col-12">
    <swiper
      ref="mySwiper"
      :options="swiperOptions"
    >
      <swiper-slide class="work-item">
        <img
          src="../../static/img/works/works-expo.jpg"
          alt=""
          class="work-item__cover"
        />
        <g-link
          to="/"
          class="work-item__link"
        >
          <h2 class="work-item__title">Taiwan Expo</h2>
        </g-link>
      </swiper-slide>
      <swiper-slide class="work-item">
        <img
          src="../../static/img/works/works-expo.jpg"
          alt=""
          class="work-item__cover"
        />
        <g-link
          to="/"
          class="work-item__link"
        >
          <h2 class="work-item__title">Taiwan Expo</h2>
        </g-link>
      </swiper-slide>
      <swiper-slide class="work-item">
        <img
          src="../../static/img/works/works-expo.jpg"
          alt=""
          class="work-item__cover"
        />
        <g-link
          to="/"
          class="work-item__link"
        >
          <h2 class="work-item__title">Taiwan Expo</h2>
        </g-link>
      </swiper-slide>
    </swiper>
    <button class="swiper-button swiper-button-prev">
      <img
        class="icon"
        src="../../static/img/slider-prev.svg"
        alt=""
      />
    </button>
    <button class="swiper-button swiper-button-next">
      <img
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
    console.log("Current Swiper instance object", this.swiper);
    this.swiper.slideTo(3, 1000, false);
  },
};
</script>