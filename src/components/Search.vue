<template>
  <div class="nav-item__search">
    <input
      type="text"
      :placeholder="$t('trySearch')"
      v-model="query"
      class="search-input"
      @input="softReset"
      @keyup="performSearch"
      @blur="isResultVisible = false"
      @focus="isResultVisible = true"
    >
    <transition name="fade">
      <div
        class="search-results"
        v-if="results.length > 0 && isResultVisible"
      >
        <g-link
          v-for="(result, index) in results"
          :key="index"
          :to="$context.locale + '/' + result.item.path"
          class="result"
        >
          <h5>{{ result.item.title }}</h5>
          <p>{{ result.item.summary }}</p>
        </g-link>
      </div>
    </transition>
    <g-image
      src="/img/search.svg"
      alt=""
      class="search-image icon"
    />
  </div>
</template>

<static-query>
query {
  allPost {
    edges {
      node {
        id
        path
        title
        summary
        lang
        tags {
          title
        }
      }
    }
  }
  allWork {
    edges {
      node {
        id
        path
        title
        summary
        lang
      }
    }
  }
}
</static-query>

<script>
export default {
  data() {
    return {
      query: "",
      results: [],
      isResultVisible: false,
      options: {
        shouldSort: true,
        includeMatches: true,
        threshold: 0.5,
        location: 0,
        distance: 500,
        maxPatternLength: 32,
        minMatchCharLength: 1,
        keys: ["title", "summary", "tags"],
      },
    };
  },
  methods: {
    reset() {
      this.query = "";
    },
    softReset() {
      this.isResultVisible = true;
    },
    performSearch() {
      this.$search(this.query, this.pages, this.options).then((res) => {
        this.results = res;
      });
    },
  },
  computed: {
    pages() {
      let results = [];
      const allPosts = this.$static.allPost.edges
        .map((edge) => edge.node)
        .filter((page) => page.lang == this.$context.locale);
      allPosts.forEach((page) => {
        const tags = page.tags.map((tag) => tag.title);
        results.push({
          path: page.path,
          title: page.title,
          summary: page.summary,
          tags,
        });
      });
      const allWorks = this.$static.allWork.edges
        .map((edge) => edge.node)
        .filter((page) => page.lang == this.$context.locale);
      allWorks.forEach((page) => {
        results.push({
          path: page.path,
          title: page.title,
          summary: page.summary,
        });
      });
      return results;
    },
  },
};
</script>

<style lang="scss" scoped>
@import "../sass/base/_variables.scss";
@import "../sass/base/_mixins.scss";

.search-input {
  border: 1px solid $gray-light;
  padding: 0.5em 1em;
  border-radius: 2em;
  min-width: 12rem;
  font-size: 1rem;
}

.search-image {
  position: absolute;
  right: 1rem;
  top: 0;
  bottom: 0;
  margin: auto;
  width: 1rem;
  height: 1rem;
}

.search-results {
  position: absolute;
  width: 20rem;
  left: 0;
  top: 3.5rem;
  display: flex;
  flex-direction: column;
  z-index: 2;
  border: 1px solid $gray-light;
  border-radius: 0.25em;
  filter: drop-shadow(0.2em 0.2em 0.2em rgba($gray, 0.5));
  background: $white;
  max-height: 30rem;
  overflow: hidden;
  overflow-y: auto;
  @include atMedium {
    left: -4rem;
  }
}
.result {
  width: 100%;
  border-bottom: 1px solid $gray-light;
  padding: 0.75em;
  transition: 0.3s;
  background: transparent;
  &:hover {
    background: $gray-lighter;
  }
  h5 {
    margin-bottom: 0.5em;
  }
  p {
    margin: 0;
  }
  &:last-child {
    border: 0;
  }
}

.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.3s;
}
.fade-enter,
.fade-leave-to {
  opacity: 0;
}
</style>
