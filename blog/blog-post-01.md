---
title: A cool title
summary: Lorem Ipsum is simply dummy text.
imgSrc: "/assets/static/blog/images/blog_bg_4.jpg?key=80f04d7"
---
// Import any Vue Component. Even other .md files!
import YouTube from '~/components/YouTube.vue'
import AboutUs from '~/sections/AboutUs.md'

// Import any JSON if you need data.
import data from '~/data/youtube.json'

// Use front-matter fields anywhere.
# {{ $frontmatter.title }}
> {{ $frontmatter.summary }}

// Use your imported Vue Components.
<!-- <YouTube :id="data.id" />
<AboutUs /> -->