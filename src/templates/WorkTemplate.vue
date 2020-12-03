<template>
  <Layout>
    <div class="banner-page">
      <div class="banner-page__container container">
        <div class="banner-page__row row">
          <div class="col-md-6 banner-page__title">
            <g-image
              src="/img/work-banner-title.svg"
              alt=""
            />
          </div>
          <div class="col-md-6 banner-page__image">
            <g-image
              src="/img/work-banner.svg"
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
          <div class="single-work__date col-md-4">
            <h4>{{ $page.work.date }}</h4>
            <g-link :to=$page.work.link>
              <g-image
                src="/img/external-link.svg"
                class="icon"
              />
            </g-link>
          </div>
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
          <silent-box :gallery="getImgArray($page.work.otherImages)">
            <template v-slot:silentbox-item="{ silentboxItem }">
              <g-image
                :src=silentboxItem.src
                :alt=silentboxItem.description
              />
              <h5>{{ silentboxItem.description }}</h5>
            </template>
          </silent-box>

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
    link
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
export default {
  methods: {
    getImgArray(mutatedImgArray) {
      return mutatedImgArray.map((img) => {
        return { ...img, src: img.imgSrc.src };
      });
    },
  },
};
</script>

<style lang="scss">
@import "../sass/base/_mixins.scss";

#silentbox-gallery {
  display: flex;
  flex-wrap: wrap;
}
.silentbox-item {
  position: relative;
  width: 100%;
  padding-right: 15px;
  padding-left: 15px;
  flex: 0 0 33.33333%;
  max-width: 33.33333%;
  h5 {
    margin-top: 1em;
  }
  @include atMedium {
    max-width: 100%;
    flex: 1 1 100%;
    margin-bottom: 1.5em;
    h5 {
      text-align: center;
    }
  }
}
</style>