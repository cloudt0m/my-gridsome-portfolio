<template>
  <Layout>
    <section class="banner banner--index">
      <div class="container">
        <div class="row banner__row">
          <div class="banner__words col-lg-5">
            <h1>Hello, <br />I’m Homeway </h1>
            <h3>I’m a web designer, <br />and a frontend developer</h3>
            <button class="btn btn--secondary">About Myself</button>
          </div>
          <div class="banner__image col-lg-7">
            <g-image
              src="../../static/img/index-banner.svg"
              alt=""
            />
          </div>
        </div>
      </div>
    </section>

    <section class="about">
      <div class="container about__container">
        <div class="row about__row--top">
          <div class="about__photo col-md-3"></div>
          <div class="about__description offset-md-1 col-md-8">
            <p>I’m a developer who have enthusiasm on thinking and trying, and have experience on building web apps. I keep learning in my free time, and make my code better and better.</p>
            <ul class="about__social-links">

              <li class="social-link">
                <g-image
                  class="icon"
                  src="../../static/img/mail.svg"
                  alt=""
                />
                <a href="mailto://cloudtom@gmail.com">
                  <strong>cloudtom@gmail.com</strong>
                </a>
              </li>

            </ul>
          </div>
        </div>
        <div class="row about__row--bottom">
          <div class="about__skill-container col-md-4">
            <p class="about__skill-description">
              I’m experienced at following:
            </p>
            <ul class="about__skill">

              <li class="skill-item">
                <g-image
                  class="icon"
                  src="../../static/img/list-icon.svg"
                  alt=""
                />
                <p>
                  HTML / CSS / SCSS
                </p>
              </li>

              <li class="skill-item">
                <g-image
                  class="icon"
                  src="../../static/img/list-icon.svg"
                  alt=""
                />
                <p>
                  HTML Template Engine
                </p>
              </li>

              <li class="skill-item">
                <g-image
                  class="icon"
                  src="../../static/img/list-icon.svg"
                  alt=""
                />
                <p>
                  JavaScript / TypeScript
                </p>
              </li>

              <li class="skill-item">
                <g-image
                  class="icon"
                  src="../../static/img/list-icon.svg"
                  alt=""
                />
                <p>
                  Angular / Vue
                </p>
              </li>

              <li class="skill-item">
                <g-image
                  class="icon"
                  src="../../static/img/list-icon.svg"
                  alt=""
                />
                <p>
                  Git / Version Control
                </p>
              </li>

              <li class="skill-item">
                <g-image
                  class="icon"
                  src="../../static/img/list-icon.svg"
                  alt=""
                />
                <p>
                  UI Design
                </p>
              </li>

            </ul>
          </div>
          <div class="about__skill-image col-md-8">
            <g-image
              src="../../static/img/skill-image.svg"
              alt=""
            />
          </div>
        </div>
      </div>
    </section>

    <section class="works">
      <div class="container works__container">
        <h2 class="section-title">WORKS</h2>
        <index-slider />
        <div class="works__description">
          <p>Wanna see more?<br />Here’s the collection of website works during these years.</p>
          <g-link
            to="/works"
            class="btn btn--primary"
          >More Works</g-link>
        </div>
      </div>
    </section>

    <section class="blog">
      <g-image
        class="blog__overlay"
        src="../../static/img/memphis-wave.svg"
        alt=""
      />
      <div class="container blog__container">
        <h2 class="section-title">BLOG POSTS</h2>
        <div class="blog__posts row">

          <div
            class="post-item col-md-4"
            v-for="post in $static.posts.edges"
            :key="post.id"
          >
            <div class="post-item__cover">
              <g-image
                :src="post.node.imgSrc"
                alt=""
              />
            </div>
            <div class="post-item__description">
              <h4>{{ post.node.title }}</h4>
              <v-clamp
                autoresize
                :max-lines="3"
                class="post-item__description-text"
              >{{ post.node.summary }}
              </v-clamp>
              <g-link
                :to="post.node.path"
                class="btn btn--primary"
              >Read</g-link>
            </div>
          </div>

        </div>
      </div>
    </section>

  </Layout>
</template>

<static-query>
  query {
    posts: allPost {
      edges {
        node {
          title
          summary
          path
          date (format: "YYYY-MM-DD")
          imgSrc
        }
      }
    }
  }
</static-query>

<script>
import IndexSlider from "../components/IndexSlider";
import VClamp from "vue-clamp";

export default {
  metaInfo: {
    title: "Main Page",
  },
  components: {
    IndexSlider,
    VClamp,
  },
  data() {
    return {
      text:
        "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum",
    };
  },
};
</script>

<style>
.home-links a {
  margin-right: 1rem;
}
</style>
