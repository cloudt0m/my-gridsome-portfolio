<template>
  <div id="app">
    <header>
      <nav
        id="j-nav"
        class="nav"
      >
        <div class="nav__topbar"></div>
        <div class="container-fluid nav__container">
          <div class="row nav__row">
            <div class="nav__logo col-md-4 col-lg-6">
              <g-link to="/">
                <g-image
                  src="/img/logo.svg"
                  alt=""
                />
              </g-link>
              <button
                class="btn hamburger d-md-none"
                @click="toggleNav"
              >
                <svg
                  class="current-color h-3 w-3"
                  viewBox="0 0 20 20"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M0 3h20v2H0V3zm0 6h20v2H0V9zm0 6h20v2H0v-2z"
                    fill="gray"
                  />
                </svg>

              </button>
            </div>
            <ul
              class="nav__items col-md-8 col-lg-6"
              :class="isNavOpen ? 'show' : ''"
            >
              <li class="nav-item">
                <search />
              </li>

              <li class="nav-item">
                <a v-if="$route.path === '/'"
                  href="/#about"
                  v-scroll-to="'#about'"
                  class="nav-item__link"
                >{{ $t('about') | toUppercase }}</a>
                <g-link v-else
                  to="/#about"
                  v-scroll-to="'#about'"
                  class="nav-item__link"
                >{{ $t('about') | toUppercase }}</g-link>
              </li>

              <li class="nav-item">
                <g-link
                  to="/works"
                  class="nav-item__link"
                >{{ $t('works') | toUppercase }}</g-link>
              </li>

              <li class="nav-item">
                <g-link
                  to="/blog"
                  class="nav-item__link"
                >{{ $t('blog') | toUppercase }}</g-link>
              </li>

              <li class="nav-item">
                <lang-switcher />
              </li>

            </ul>
          </div>
        </div>
      </nav>

    </header>

    <!-- MAIN -->
    <main>

      <!-- ================== Block Main Top ================== -->

      <slot />

      <!-- ================== Block Main Bottom ================== -->

    </main>

    <!-- footer -->

    <footer
      id="j-footer"
      class="footer"
    >
      <p>Copyright 2020. All rights reserved.</p>
    </footer>

  </div>
</template>

<script>
import Search from "~/components/Search";
import LangSwitcher from "~/components/LangSwitcher";

export default {
  data() {
    return {
      isNavOpen: false,
    };
  },
  components: {
    Search,
    LangSwitcher
  },
  methods: {
    toggleNav() {
      this.isNavOpen = !this.isNavOpen;
    },
  },
};
</script>

<style>
</style>