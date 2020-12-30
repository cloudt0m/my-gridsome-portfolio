<template>
  <Layout>
    <div class="banner-page">
      <div class="banner-page__container container">
        <div class="banner-page__row row">
          <div class="col-md-6 banner-page__title">
            <g-image
              src="../../static/img/work-banner-title.svg"
              alt=""
            />
          </div>
          <div class="col-md-6 banner-page__image">
            <g-image
              src="../../static/img/work-banner.svg"
              alt=""
            />
          </div>
        </div>
      </div>
    </div>

    <div class="works-list">
      <div class="works-container container">

        <div
          class="works-list-item row"
          v-for="work in $page.works.edges"
          :key="work.node.id"
        >
          <div class="works-list-item__cover">
            <g-image
              :src=work.node.imgSrc
              alt=""
            />
          </div>
          <div class="works-list-item__content">
            <h4 class="works-list-item__title">{{ work.node.title }}</h4>
            <h5 class="works-list-item__date">{{ work.node.date }}</h5>
            <p
              class="works-list-item__description"
              v-html=work.node.summary
            >

            </p>
            <g-link
              :to="'/' + $context.locale + work.node.path"
              class="btn btn--primary"
            >{{ $t('more') }}</g-link>
          </div>
        </div>

      </div>
    </div>
  </Layout>
</template>

<page-query>
query($locale: String) {
  works: allWork(filter: {lang: {eq: $locale}}) {
    edges {
      node {
        id
        title
        summary
        date (format: "YYYY-MM-DD")
        path
        imgSrc
      }
    }
  }
}
</page-query>

<script>
export default {
  metaInfo: {
    title: "作品",
    meta: [
      {
        key: "og:title",
        name: "og:title",
        content: `作品 - Homeway's Website`,
      },
    ],
  },
};
</script>

<style>
</style>