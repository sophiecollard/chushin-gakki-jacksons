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
      <div class="hero-footer">
        <div class="tabs">
          <ul>
            <li class="is-active"><router-link to="/">Home</router-link></li>
            <li><router-link to="/timeline">Timeline</router-link></li>
          </ul>
        </div>
      </div>

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
