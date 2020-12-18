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
        <template v-for="post in $page.tag.belongsTo.edges">
          <div
            class="row"
            v-if="post.node.lang == $context.locale"
            :key="post.node.id"
          >
            <div class="posts-list-item col-12">
              <h2 class="posts-list-item__title">{{ post.node.title }}</h2>
              <h5 class="posts-list-item__date">{{ post.node.date }}</h5>
              <p class="posts-list-item__description j-post-description">{{ post.node.summary }}</p>
              <g-link
                :to="post.node.path"
                class="btn btn--primary"
              >{{ $t('more') }}</g-link>
            </div>
          </div>
        </template>
        <div class="row">
          <div class="col-12">
            <paging
              v-if="$page.tag.belongsTo.pageInfo.totalPages > 1"
              :base="`/tag/${$page.tag.title}`"
              :currentPage="$page.tag.belongsTo.pageInfo.currentPage"
              :totalPages="$page.tag.belongsTo.pageInfo.totalPages"
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
    belongsTo (page: $page, perPage: 3) @paginate {
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
};
</script>

<style>
</style>