<template>
  <section class="hero is-dark">
    <!-- title -->
    <div class="container">

      <div class="hero-body">
        <router-link to="/">
          <p class="title">
            Chushin Gakki Jacksons &#38; Charvels
          </p>
          <p class="subtitle">
            An opinionated guide to Japanese-made Jackson and Charvel guitars from the 90s and 2000s
          </p>
        </router-link>
      </div>
      <!-- menu -->
      <!-- <div class="hero-footer">
        <div class="tabs">
          <ul>
            <li class="is-active"><a>Model Database</a></li>
            <li><a>Catalogue Scans</a></li>
            <li><a>Reviews</a></li>
          </ul>
        </div>
      </div> -->

    </div>
  </section>
</template>

<script>
export default {
  name: 'Header',
  props: {
    activeMenuSection: String
  }
}
</script>
