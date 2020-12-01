<template>
  <div class="nav-item__search">
    <input
      type="text"
      placeholder="Try search something"
      v-model="searchTerm"
      class="search-input"
    >
    <div
      class="search-results"
      v-if="searchResults.length > 0"
    >
      <g-link
        v-for="result in searchResults"
        :key="result.id"
        :to="result.path"
        class="result"
      >
        <h5>{{ result.title }}</h5>
        <p>{{ result.node.summary }}</p>
      </g-link>
    </div>
    <g-image
      src="/img/search.svg"
      alt=""
      class="search-image icon"
    />
  </div>
</template>

<script>
import Search from "gridsome-plugin-flexsearch/SearchMixin";

export default {
  mixins: [Search],
};
</script>

<style lang="scss" scoped>
@import "../sass/base/_variables.scss";

.search-input {
  border: 1px solid $gray-light;
  padding: 0.5em 1em;
  border-radius: 2em;
  min-width: 15rem;
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
  width: 150%;
  left: 0;
  top: 5rem;
  display: flex;
  flex-direction: column;
  z-index: 2;
  border: 1px solid $gray-light;
  border-radius: 0.25em;
  filter: drop-shadow(0.2em 0.2em 0.2em rgba($gray, 0.5));
  background: $white;
}
.result {
  width: 100%;
  border-bottom: 1px solid $gray-light;
  padding: 0.75em;
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
</style>