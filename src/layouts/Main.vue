<template>
  <div class="layout">
    <header class="header">
      <strong>
        <g-link to="/">{{ $static.metadata.siteName }}</g-link>
      </strong>
      <nav class="nav">
        <g-link
          class="nav__link"
          to="/#about"
        >About</g-link>
        <g-link
          class="nav__link"
          to="/work/"
        >Work</g-link>
        <g-link
          class="nav__link"
          to="/blog/"
        >Blog</g-link>
      </nav>
    </header>
    <slot />
  </div>
</template>

<static-query>
query {
  metadata {
    siteName
  }
}
</static-query>
