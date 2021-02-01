<template>
  <div class="works__slider col-12">
    <div v-swiper:mySwiper="swiperOptions">
      <div class="swiper-wrapper">
        <div
          class="work-item swiper-slide"
          v-for="work in works"
          :key="work.node.id"
        >
          <img
            :src="work.node.imgSrc.src"
            :srcset="work.node.imgSrc.srcset"
            alt=""
            class="work-item__cover"
          />
          <g-link
            :to="work.node.path"
            class="work-item__link"
          >
            <h2 class="work-item__title">{{ work.node.title }}</h2>
          </g-link>
        </div>
      </div>
    </div>
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
import {
  Swiper as SwiperClass,
  Navigation,
  Pagination,
} from "swiper/swiper.esm";
import getAwesomeSwiper from "vue-awesome-swiper/dist/exporter";

SwiperClass.use([Pagination, Navigation]);
const { directive } = getAwesomeSwiper(SwiperClass);

export default {
  props: ["works"],
  name: "slider",
  directives: {
    swiper: directive,
  },
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
      return this.mySwiper.$swiper;
    },
  },
  mounted() {
    window.addEventListener("load", () => {
      this.mySwiper.update();
    });
  },
};
</script>