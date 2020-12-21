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
        <div class="row">
          <div class="posts-list-item col-12 pb-0">
            <h2 class="post-list-item__title">Tag: {{ $page.tag.title }}</h2>
          </div>
        </div>
        <template v-for="post in pages">
          <div
            class="row"
            :key="post.id"
          >
            <div class="posts-list-item col-12">
              <h2 class="posts-list-item__title">{{ post.title }}</h2>
              <h5 class="posts-list-item__date">{{ post.date }}</h5>
              <p class="posts-list-item__description j-post-description">{{ post.summary }}</p>
              <g-link
                :to="post.path"
                class="btn btn--primary"
              >{{ $t('more') }}</g-link>
            </div>
          </div>
        </template>
        <div class="row">
          <div class="col-12">
            <paging
              v-if="totalPages > 1"
              :basePath="'/' + $context.locale + '/tag/' + $page.tag.title"
              :currentPage="currentPage"
              :totalPages="totalPages"
            />
          </div>
        </div>
      </div>
    </div>
  </Layout>
</template>

<page-query>
query Tag ($id: ID!, $page: Int) {
  tag: tag (id: $id) {
    title
    belongsTo (page: $page, perPage: 3, sortBy: "date", order: DESC) @paginate {
      totalCount
      pageInfo {
        totalPages
        currentPage
      }
      edges {
        node {
          ... on Post {
            title
            date (format: "YYYY-MM-DD")
            path
            summary
            lang
            tags {
              title
            }
          }
        }
      }    
    }
  }
  posts: allPost(filter: {tags: {contains: [$id]}}) {
    edges {
      node {
        id
        title
        date (format: "YYYY-MM-DD")
        path
        summary
        lang
        tags {
          title
        }
      }
    }
  }
}
</page-query>

<script>
import Paging from "../components/Paging.vue";
export default {
  metaInfo: {
    title: "Blog Posts",
  },
  components: {
    Paging,
  },
  computed: {
    pages() {
      const data = this.$page.posts.edges
        .map((edge) => edge.node)
        .filter((page) => page.lang == this.$context.locale);
      return data
    },
    currentPage() {
      const currentPage = parseInt(this.$route.params.page);
      return currentPage ? currentPage : 1;
    },
    totalPages() {
      const perPage = 3;
      const data = this.$page.posts.edges
        .map((edge) => edge.node)
        .filter((page) => page.lang == this.$context.locale);
      const totalPages =
        data.length % perPage
          ? Math.floor(data.length / perPage) + 1
          : Math.floor(data.length / perPage);
      return totalPages;
    },
  },
};
</script>

<style>
</style>