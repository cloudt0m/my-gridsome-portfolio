<template>
  <Layout>
    <section class="banner banner--index">
      <div class="container">
        <div class="row banner__row">
          <div class="banner__words col-lg-6">
            <h1 v-html="$t('welcome.title')"></h1>
            <h3
              class="mb-5"
              v-html="$t('welcome.description')"
            ></h3>
            <a
              href="#about"
              v-scroll-to="'#about'"
              class="btn btn--secondary"
            >{{ $t('aboutMyself') }}</a>
          </div>
          <div class="banner__image col-lg-6">
            <g-image
              src="../../static/img/index-banner.svg"
              alt=""
            />
          </div>
        </div>
      </div>
    </section>

    <section
      id="about"
      class="about"
    >
      <div class="container about__container">
        <div class="row about__row--top">
          <div class="about__photo col-md-3"></div>
          <div class="about__description offset-md-1 col-md-8">
            <p>{{ $t('aboutDescription') }}</p>
            <ul class="about__social-links">

              <li class="social-link">
                <g-image
                  class="icon"
                  src="../../static/img/mail.svg"
                  alt=""
                />
                <a href="mailto://cloudtom@gmail.com">
                  <strong>cloudtom@gmail.com</strong>
                </a>
              </li>

            </ul>
          </div>
        </div>
        <div class="row about__row--bottom">
          <div class="about__skill-container col-md-4">
            <p class="about__skill-description">
              {{ $t('aboutExperience') }}
            </p>
            <ul class="about__skill">

              <li
                class="skill-item"
                v-for="skill in $t('aboutSkills')"
                :key="skill.id"
              >
                <g-image
                  class="icon"
                  src="../../static/img/list-icon.svg"
                  alt=""
                />
                <p>
                  {{ skill }}
                </p>
              </li>

            </ul>
          </div>
          <div class="about__skill-image col-md-8">
            <g-image
              src="../../static/img/skill-image.svg"
              alt=""
            />
          </div>
        </div>
      </div>
    </section>

    <section class="works">
      <div class="container works__container">
        <h2 class="section-title">{{ $t('works') | toUppercase }}</h2>
        <index-slider :works="getLocaleFiltered('works')" />
        <div class="works__description">
          <p v-html="$t('worksDescription')"></p>
          <g-link
            :to="$context.locale + '/works'"
            class="btn btn--primary"
          >{{ $t('worksButton') }}</g-link>
        </div>
      </div>
    </section>

    <section class="blog">
      <g-image
        class="blog__overlay"
        src="../../static/img/memphis-wave.svg"
        alt=""
      />
      <div class="container blog__container">
        <h2 class="section-title">{{ $t('blogPosts') | toUppercase }}</h2>
        <div class="blog__posts row">

          <div
            class="post-item col-md-4"
            v-for="(post, index) in getLocaleFiltered('posts')"
            :key="index"
          >
            <div class="post-item__cover">
              <g-image
                :src="post.node.imgSrc"
                alt=""
              />
            </div>
            <div class="post-item__description">
              <h4>{{ post.node.title }}</h4>
              <v-clamp
                autoresize
                :max-lines="3"
                class="post-item__description-text"
              >{{ post.node.summary }}
              </v-clamp>
              <g-link
                :to="$context.locale + post.node.path"
                class="btn btn--primary"
              >{{ $t('readButton') }}</g-link>
            </div>
          </div>

        </div>
      </div>
    </section>

  </Layout>
</template>

<page-query>
  query {
    posts: allPost {
      edges {
        node {
          title
          summary
          path
          date (format: "YYYY-MM-DD")
          imgSrc
          lang
        }
      }
    }
    works: allWork {
      edges {
        node {
          title
          path
          imgSrc
          lang
        }
      }
    }
  }
</page-query>

<script>
import IndexSlider from "../components/IndexSlider";
import VClamp from "vue-clamp";

export default {
  metaInfo: {
    title: "首頁",
    meta: [
      {
        key: "og:title",
        name: "og:title",
        content: `Homeway's Website`,
      },
      {
        key: "og:description",
        name: "og:description",
        content:
          "Homeway的個人網站，記錄了做過的網站、還有一些工作及電腦網路相關的隨筆文字",
      },
    ],
  },
  components: {
    IndexSlider,
    VClamp,
  },
  methods: {
    getLocaleFiltered(type) {
      const locale = this.$context.locale;
      const data = this.$page[type].edges;
      return data.filter(d => d.node.lang == locale);
    },
  },
};
</script>

<style>
.home-links a {
  margin-right: 1rem;
}
</style>
