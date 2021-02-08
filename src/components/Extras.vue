<template>
  <div>

    <!-- catalogue shot -->
    <div class="box" style="box-shadow: 0 0 0 0;">
      <figure class="image is-320x640">
        <img v-bind:src=catalogueShot>
      </figure>
    </div>

  </div>
</template>

<script>
export default {
  name: 'Extras',
  props: {
    catalogueShot: String
  }
}
</script>
