<template>
  <Layout>
    <div class="banner-page">
      <div class="banner-page__container container">
        <div class="banner-page__row row">
          <div class="col-md-6 banner-page__title">
            <img
              src="../../static/img/blog-banner-title.svg"
              alt=""
            />
          </div>
          <div class="col-md-6 banner-page__image">
            <img
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
            <h2 class="posts-list-item__title">{{ post.node.title }}</h2>
            <h5 class="posts-list-item__date">{{ post.node.date }}</h5>
            <p class="posts-list-item__description j-post-description">{{ post.node.summary }}</p>
            <g-link
              :to="post.node.path"
              class="btn btn--primary"
            >More</g-link>
          </div>
        </div>
      </div>
    </div>
  </Layout>
</template>

<page-query>
query {
	posts: allPost {
    edges {
      node {
        id
        title
        summary
        path
      }
    }
  }
}
</page-query>

<script>
export default {
  metaInfo: {
    title: "Blog Posts",
  },
};
</script>

<style>
</style>