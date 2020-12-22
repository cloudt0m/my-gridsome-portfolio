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

    <div class="posts-list">
      <div class="posts-list__container container">
        <div
          class="row"
          v-for="post in $page.posts.edges"
          :key="post.id"
        >
          <div class="posts-list-item col-12">
            <g-link :to=post.node.path>
              <h2 class="posts-list-item__title">{{ post.node.title }}</h2>
            </g-link>
            <h5 class="posts-list-item__date">{{ post.node.date }}</h5>
            <p class="posts-list-item__description j-post-description">{{ post.node.summary }}</p>
            <g-link
              :to="'/' + $context.locale + post.node.path"
              class="btn btn--primary"
            >{{ $t('more') }}</g-link>
          </div>
        </div>
      </div>
    </div>
    <paging
      v-if="$page.posts.pageInfo.totalPages > 1"
      :basePath="'/' + $context.locale + '/blog'"
      :totalPages="$page.posts.pageInfo.totalPages"
      :currentPage="$page.posts.pageInfo.currentPage"
    ></paging>
  </Layout>
</template>

<page-query>
query($page: Int, $locale: String) {
	posts: allPost(filter: {lang: {eq: $locale}}, sortBy: "date", order: DESC, perPage: 3, page: $page) @paginate {
    totalCount
    pageInfo {
      totalPages
      currentPage
    }
    edges {
      node {
        id
        title
        summary
        path
        date (format: "YYYY-MM-DD")
      }
    }
  }
}
</page-query>

<script>
import Paging from "../components/Paging";

export default {
  metaInfo: {
    title: "Blog Posts",
  },
  components: {
    Paging,
  },
};
</script>

<style>
</style>