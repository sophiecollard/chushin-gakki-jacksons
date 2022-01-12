<template>
  <div class="block">
    <h2 class="title is-4">External Resources</h2>
    <PastListings/>
  </div>
</template>

<script>
import PastListings from './PastListings.vue'

export default {
  name: 'ExternalResources',
  components: {
    PastListings
  }
}
</script>
