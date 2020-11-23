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
            <g-link
              to="/"
              class="nav__logo col-md-4 col-lg-6"
            >
              <g-image
                src="/img/logo.svg"
                alt=""
              />
            </g-link>
            <ul class="nav__items offset-md-2 offset-lg-2 col-md-6 col-lg-4">
              <li class="nav-item">
                <button class="nav-item__search">
                  <g-image
                    src="/img/search.svg"
                    alt=""
                  />
                </button>
              </li>

              <li class="nav-item">
                <g-link
                  to="/#about"
                  class="nav-item__link"
                >About</g-link>
              </li>

              <li class="nav-item">
                <g-link
                  to="/works"
                  class="nav-item__link"
                >Works</g-link>
              </li>

              <li class="nav-item">
                <g-link
                  to="/blog"
                  class="nav-item__link"
                >Blog</g-link>
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