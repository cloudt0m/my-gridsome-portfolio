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
            <a
              href="/"
              class="nav__logo col-md-4 col-lg-6"
            >
              <img
                src="../../static/img/logo.svg"
                alt=""
              >
            </a>
            <ul class="nav__items offset-md-2 offset-lg-2 col-md-6 col-lg-4">
              <li class="nav-item">
                <button class="nav-item__search">
                  <img
                    src="../../static/img/search.svg"
                    alt=""
                  >
                </button>
              </li>

              <li class="nav-item">
                <a
                  href="/#about"
                  class="nav-item__link"
                >About</a>
              </li>

              <li class="nav-item">
                <a
                  href="/works"
                  class="nav-item__link"
                >Works</a>
              </li>

              <li class="nav-item">
                <a
                  href="/blog"
                  class="nav-item__link"
                >Blog</a>
              </li>

            </ul>
          </div>
        </div>
      </nav>

    </header>

    <!-- MAIN -->
    <main>

      <!-- ================== Block Main Top ================== -->

      <slot/>

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
export default {};
</script>

<style>
</style>