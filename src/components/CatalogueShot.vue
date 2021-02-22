<template>
  <div class="box" style="box-shadow: 0 0 0 0;">
    <figure class="image is-320x640">
      <img v-bind:src=catalogueShot>
    </figure>
    <p class="content">
      <i>
        {{ caption }}
      </i>
    </p>
  </div>
</template>

<script>
export default {
  name: 'CatalogueShot',
  props: {
    catalogueShot: String,
    caption: String
  }
}
</script>
