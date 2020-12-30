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
            <h2 class="post-list-item__title">{{ $t('tag') + ": " + $page.tag.title }}</h2>
          </div>
        </div>
        <div
          class="row"
          v-for="post in showPages"
          :key="post.id"
        >
          <div class="posts-list-item col-12">
            <h2 class="posts-list-item__title">{{ post.title }}</h2>
            <h5 class="posts-list-item__date">{{ post.date }}</h5>
            <p class="posts-list-item__description j-post-description">{{ post.summary }}</p>
            <g-link
              :to="$context.locale + post.path"
              class="btn btn--primary"
            >{{ $t('more') }}</g-link>
          </div>
        </div>
        <paging
          v-if="totalPages > 1"
          :basePath="'/' + $context.locale + `/tag/${$page.tag.title}`"
          :currentPage="currentPage"
          :totalPages="totalPages"
        />
      </div>
    </div>
  </Layout>
</template>

<page-query>
query Tag ($id: ID!, $page: Int) {
  tag: tag (id: $id) {
    title
    belongsTo (page: $page, perPage: 3) @paginate {
      totalCount
      pageInfo {
        totalPages
        currentPage
      }
    }
  }
  twPosts: allPost (filter: {lang: {eq: "tw"}}) {
    edges {
      node {
        title
        summary
        lang
        date (format: "YYYY-MM-DD")
        path
        tags {
          title
        }
      }
    }
  }
  enPosts: allPost (filter: {lang: {eq: "en"}}) {
    edges {
      node {
        title
        summary
        lang
        date (format: "YYYY-MM-DD")
        path
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
    title: "標籤索引",
    meta: [
      {
        key: "og:title",
        name: "og:title",
        content: `標籤索引 - Homeway's Website`,
      },
    ],
  },
  components: {
    Paging,
  },
  data() {
    return {
      perPage: 3,
    };
  },
  computed: {
    currentPage() {
      const pageNumber = parseInt(this.$route.params.page);
      return pageNumber ? pageNumber : 1;
    },
    pages() {
      const enPages = this.$page.enPosts.edges.map((page) => page.node);
      const twPages = this.$page.twPosts.edges.map((page) => page.node);
      const currentLang = this.$context.locale;
      if (currentLang == "en") {
        return enPages;
      } else {
        return twPages;
      }
    },
    totalPages() {
      return Math.ceil(this.pages.length / this.perPage);
    },
    showPages() {
      const begin = (this.currentPage - 1) * this.perPage;
      const end = this.currentPage * this.perPage;
      return this.pages.slice(begin, end);
    },
  },
};
</script>

<style>
</style>