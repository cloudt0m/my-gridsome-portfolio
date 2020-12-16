<template>
  <div class="works__slider col-12">
    <swiper
      ref="mySwiper"
      :options="swiperOptions"
    >
      <swiper-slide class="work-item" v-for="work in works" :key="work.node.id">
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
  </div>
</template>

<script>
export default {
  props: ['works'],
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
};
</script>