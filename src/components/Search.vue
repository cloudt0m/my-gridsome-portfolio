<template>
  <div class="nav-item__search">
    <input
      type="text"
      :placeholder="$t('trySearch')"
      v-model="searchTerm"
      class="search-input"
      @blur="isResultVisible = false"
      @focus="isResultVisible = true"
    >
    <transition name="fade">
      <div
        class="search-results"
        v-if="searchResults.length > 0 && isResultVisible"
      >
        <g-link
          v-for="(result, index) in searchResults"
          :key="index"
          :to="$context.locale + '/' + result.path"
          class="result"
        >
          <h5>{{ result.title }}</h5>
          <p>{{ result.node.summary }}</p>
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

<script>
import FlexSearch from "flexsearch";

export default {
  data() {
    return {
      isResultVisible: false,
      searchTerm: "",
      search: null,
    };
  },
  computed: {
    searchResults() {
      const searchTerm = this.searchTerm;
      if (searchTerm.length < 3) return [];
      const results = this.search.search({
        query: searchTerm,
        limit: 5,
        suggest: true,
      });
      const currentLangResults = results.filter(
        (res) => res.node.lang == this.$context.locale
      );
      return currentLangResults;
    },
  },
  async mounted() {
    // Some flexsearch options, and helper functions
    const { flexsearch, loadIndex } = this.$flexsearch;
    // Create a flexsearch instance, and load our config options, plus our custom tokenizer function
    const search = new FlexSearch({
      ...flexsearch,
      tokenize: function (str) {
        const chineseStringArray = str
          .split("")
          .filter((char) => /\p{Script=Han}/u.test(char));
        const englishStringArray = str
          .toLowerCase()
          .match(/\p{Script=Han}+|\p{Script=Latin}+/gu);
        if (str.match(/\p{Script=Han}/u)) {
          return [
            ...chineseStringArray,
            ...(englishStringArray ? englishStringArray : []),
          ];
        } else {
          return englishStringArray;
        }
      },
    });
    // Make search available on this
    this.search = search;
    // Load our index data into flexsearch
    await loadIndex(search);
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
