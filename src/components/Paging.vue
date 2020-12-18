<template>
  <div class="paging">
    <g-link
      :to="previousPage"
      class="paging__arrow"
      :class="[{ 'text-gray-400 hover:text-gray-400 cursor-not-allowed paging__button--prev' : !showPreviousPage }, 'paging__button--prev']"
    >
      <g-image
        src="../../static/img/slider-prev.svg"
        alt=""
      />
    </g-link>
    <div class="paging__number-wrapper">
      <div
        v-for="index in totalPages"
        :key="index"
      >
        <g-link
          :to="(index != 1) ? (basePath + '/' + index) : basePath"
          class="paging__number"
          :class="[{ 'text-gray-400 hover:text-gray-400 cursor-not-allowed paging__button--next' : index == currentPage }]"
        >
          {{ index }}
        </g-link>
      </div>
    </div>
    <g-link
      :to="nextPage"
      class="paging__arrow"
      :class="[{ 'text-gray-400 hover:text-gray-400 cursor-not-allowed paging__button--next' : !showNextPage }, 'paging__button--next']"
    >
      <g-image
        src="../../static/img/slider-next.svg"
        alt=""
      />
    </g-link>
  </div>
</template>

<script>
export default {
  props: ["basePath", "totalPages", "currentPage"],
  computed: {
    showPreviousPage() {
      return this.currentPage !== 1;
    },
    previousPage() {
      return [0, 1].includes(this.currentPage - 1)
        ? this.basePath
        : `${this.basePath}/${this.currentPage - 1}`;
    },
    showNextPage() {
      return this.currentPage !== this.totalPages;
    },
    nextPage(currentPage, totalPages) {
      return this.totalPages > this.currentPage
        ? `${this.basePath}/${this.currentPage + 1}`
        : `${this.basePath}/${this.currentPage}`;
    },
  },
};
</script>

<style lang="scss" scoped>
@import "../sass/base/_mixins.scss";

.paging {
  padding: 0 0 6em 0;
  display: flex;
  justify-content: center;
  align-items: center;
  @include atMedium {
    padding: 0 0 3em 0;
  }
  &__arrow {
    width: 2em;
  }
  &__number-wrapper {
    padding: 0 1.5em;
    display: flex;
    justify-content: center;
    align-items: center;
  }
  &__number {
    display: block;
    text-align: center;
    width: 2em;
  }
}
</style>