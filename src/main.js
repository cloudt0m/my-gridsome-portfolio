// This is the main.js file. Import global CSS and scripts here.
// The Client API can be used here. Learn more: gridsome.org/docs/client-api

import Layout from '~/layouts/Default.vue';
import VueScrollTo from 'vue-scrollto';
import VueSilentBox from 'vue-silentbox';
import VueFuse from 'vue-fuse';
import '~/sass/styles.scss';
// import '~/sass/github-markdown.css';

export default function(Vue, { appOptions, router, head, isClient }) {
  head.meta.push({
    key: 'og:description',
    name: 'og:description',
    content:
      'Homeway的個人網站，記錄了做過的網站、還有一些工作及電腦網路相關的隨筆文字',
  });

  head.meta.push({
    key: 'og:image',
    name: 'og:image',
    content: '/img/logo.svg',
  });

  router.beforeEach((to, _from, next) => {
    head.meta.push({
      key: 'og:url',
      name: 'og:url',
      content: process.env.GRIDSOME_BASE_PATH + to.path,
    });
    next();
  });
  Vue.component('Layout', Layout);

  Vue.use(VueScrollTo, {
    duration: 500,
    easing: 'ease-out',
  });
  Vue.use(VueSilentBox);
  appOptions.i18n.setLocaleMessage('en', require('../src/locales/en.json'));
  appOptions.i18n.setLocaleMessage('tw', require('../src/locales/tw.json'));

  Vue.filter('toUppercase', function(value) {
    if (!value) return '';
    value = value.toString();
    return value.toUpperCase();
  });
  Vue.use(VueFuse);
}
