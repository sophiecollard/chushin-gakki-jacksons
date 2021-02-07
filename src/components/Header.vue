<template>
  <section class="hero is-link">
    <!-- title -->
    <div class="hero-body">
      <p class="title">
        Chushin Gakki Jacksons &#38; Charvels
      </p>
      <p class="subtitle">
        Japanese-made Jackson and Charvel guitars from the early 90s to the late 2000s
      </p>
    </div>
    <!-- menu -->
    <div class="hero-footer">
      <div class="tabs">
        <ul>
          <li class="is-active"><a>Model Database</a></li>
          <li><a>Catalogue Scans</a></li>
          <li><a>Reviews</a></li>
        </ul>
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
