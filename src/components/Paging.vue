<template>
  <div class="paging">
    <g-link
      :to="previousPage"
      :class="[{ 'text-gray-400 hover:text-gray-400 cursor-not-allowed paging__button--prev' : !showPreviousPage }, 'paging__button--prev']"
    >
      <g-image
        src="../../static/img/slider-prev.svg"
        alt=""
      />Prev
    </g-link>
    <g-link
      :to="nextPage"
      :class="[{ 'text-gray-400 hover:text-gray-400 cursor-not-allowed paging__button--next' : !showNextPage }, 'paging__button--next']"
    >
      Next<g-image
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