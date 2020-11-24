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

    <div class="single-work">
      <div class="single-work__container container">
        <div class="single-work__head-row row">
          <h2 class="single-work__title col-md-8">{{ $page.work.title }}</h2>
          <h4 class="single-work__date col-md-4">{{ $page.work.date }}</h4>
        </div>
        <div class="row">
          <div class="single-work__cover col-12">
            <g-image
              :src=$page.work.imgSrc
              alt=""
            />
          </div>
        </div>
        <div class="row">
          <div class="single-work__description col-12">
            <p v-html=$page.work.description></p>
          </div>
        </div>
        <div class="row">

          <div
            v-for="img in $page.work.otherImages"
            :key="img.id"
            class="single-work__other-image col-md-4"
          >
            <g-image
              :src=img.imgSrc
              :alt=img.imgAlt
            />
            <h5>{{ img.description }}</h5>
          </div>

        </div>

        <div class="single-work__fast-links-row row">

          <div class="single-work__fast-link single-work__fast-link--prev col-6">
            <template v-if=$page.prev>
              <g-link :to=$page.prev.path>
                <g-image
                  src="/img/slider-prev.svg"
                  alt=""
                />
                <h4>{{ $page.prev.title }}</h4>
              </g-link>
            </template>
          </div>

          <div
            v-if="$page.next"
            class="single-work__fast-link single-work__fast-link--next col-6"
          >
            <template v-if=$page.next>
              <g-link :to=$page.next.path>
                <h4>{{ $page.next.title }}</h4>
                <g-image
                  src="/img/slider-next.svg"
                  alt=""
                />
              </g-link>
            </template>
          </div>

        </div>

      </div>
    </div>

  </Layout>
</template>

<page-query>
query Work ($id: ID, $prevId: ID, $nextId: ID) {
  work (id: $id) {
    title
    date (format: "YYYY-MM-DD")
    description
    imgSrc
    otherImages {
      imgSrc
      imgAlt
      description
    }
  }
  prev: work (id: $prevId) {
    path
    title
  }
  next: work (id: $nextId) {
    path
    title
  }
}
</page-query>

<script>
export default {};
</script>

<style>
</style>