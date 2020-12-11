<template>
  <select
    v-model="currentLang"
    @change="langChanged"
  >
    <option
      v-for="lang in availableLang"
      :key="lang"
      :value="lang"
    >{{ lang | toUppercase }}</option>
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
      this.$router.push({
        path: this.$tp(this.$route.path, this.currentLang, true),
      });
    },
  },
};
</script>

<style lang="scss" scoped>
  select {
    font-size: 1rem;
  }
</style>