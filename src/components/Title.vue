<template>
  <div class="block">
    <h1 class="title">{{ title }}</h1>
    <p class="subtitle" v-show=hasSubtitle>{{ subtitle }}</p>
  </div>
</template>

<script>
export default {
  name: 'Title',
  props: {
    title: String,
    subtitle: String
  },
  data: function() {
    return {
      hasSubtitle: typeof this.subtitle !== 'undefined'
    }
  }
}
</script>
