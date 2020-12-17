<template>
  <Layout>
    <div class="banner-page">
      <div class="banner-page__container container">
        <div class="banner-page__row row">
          <div class="col-md-6 banner-page__title">
            <g-image
              src="../../static/img/blog-banner-title.svg"
              alt=""
            />
          </div>
          <div class="col-md-6 banner-page__image">
            <g-image
              src="../../static/img/blog-banner.svg"
              alt=""
            />
          </div>
        </div>
      </div>
    </div>

    <div class="single-post">
      <div class="single-post__container container">
        <div class="row">
          <div class="single-post-item col-12">
            <h2 class="single-post-item__title">{{ $page.post.title }}</h2>
            <h5 class="single-post-item__date">{{ $page.post.date }}</h5>
            <div class="markdown-body">
              <VueRemarkContent />
            </div>
            <div class="single-post-item__tags">
              <g-link
                :to="tag.path"
                class="btn btn--sm btn--gray"
                v-for="tag in $page.post.tags"
                :key="tag.id"
              >{{ tag.title }}</g-link>
            </div>
            <g-link
              :to="'/' + $context.locale + '/blog'"
              class="btn btn--bordered"
            >{{ $t('back') }}</g-link>
          </div>
        </div>
      </div>
    </div>
  </Layout>
</template>

<!-- Front-matter fields can be queried from GraphQL layer -->
<page-query>
query Post ($path: String!) {
  post (path: $path) {
    title
    date (format: "YYYY-MM-DD")
    content
    tags {
      title
      path
    }
  }
}
</page-query>