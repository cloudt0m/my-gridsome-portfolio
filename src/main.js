// This is the main.js file. Import global CSS and scripts here.
// The Client API can be used here. Learn more: gridsome.org/docs/client-api

import Layout from '~/layouts/Default.vue';
import {
  Swiper as SwiperClass,
  Navigation,
  Pagination,
} from 'swiper/swiper.esm';
import getAwesomeSwiper from 'vue-awesome-swiper/dist/exporter';
import VueScrollTo from 'vue-scrollto';
import '~/sass/styles.scss';
// import '~/sass/github-markdown.css';

export default function(Vue, { router, head, isClient }) {
  Vue.component('Layout', Layout);
  SwiperClass.use([Pagination, Navigation]);
  Vue.use(getAwesomeSwiper(SwiperClass));
  const { Swiper, SwiperSlide } = getAwesomeSwiper(SwiperClass);
  Vue.use(VueScrollTo, {
    duration: 500,
    easing: 'ease-out',
  });
}
