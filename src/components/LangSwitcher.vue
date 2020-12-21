<template>
  <select
    v-model="currentLang"
    @change="langChanged"
  >
    <option
      v-for="lang in availableLang"
      :key="lang"
      :value="lang"
    >
      <template v-if="lang == 'tw'">中文</template>
      <template v-else>{{ lang | toUppercase }}</template>
    </option>
  </select>
</template>

<script>
export default {
  data() {
    return {
      currentLang: this.$i18n.locale.toString(),
      availableLang: this.$i18n.availableLocales,
    };
  },
  methods: {
    langChanged() {
      const currentPath = this.$route.path;
      let nextPath;
      const blogRegex = /(blog\/[a-z])\w+/;
      const worksRegex = /(works\/[a-z])\w+/;
      const tagRegex = /(tag\/[a-z])\w+/;
      if (currentPath.match(blogRegex)) {
        nextPath = "/" + this.$context.locale + "/blog";
      }
      if (currentPath.match(worksRegex)) {
        nextPath = "/" + this.$context.locale + "/works";
      }
      if (currentPath.match(tagRegex)) {
        nextPath = "/" + this.$context.locale + "/blog";
        this.$router.push({ path: this.$tp(nextPath, this.currentLang, true) });
      } else {
        this.$router.push({
          path: this.$tp(
            nextPath ? nextPath : this.$route.path,
            this.currentLang,
            true
          ),
        });
      }
    },
  },
};
</script>

<style lang="scss" scoped>
select {
  font-size: 1rem;
  font-weight: 600;
  -webkit-appearance: none;
  -moz-appearance: none;
  appearance: none;
  background: transparent;
  background-image: url("data:image/svg+xml;utf8,<svg fill='black' height='24' viewBox='0 0 24 24' width='24' xmlns='http://www.w3.org/2000/svg'><path d='M7 10l5 5 5-5z'/><path d='M0 0h24v24H0z' fill='none'/></svg>");
  background-repeat: no-repeat;
  background-position-x: 100%;
  background-position-y: 5px;
  margin-right: 2rem;
  padding: 0.5rem;
  padding-right: 1.5rem;
  &:active,
  &:focus {
    border: 0;
    outline: 0;
  }
}
</style>