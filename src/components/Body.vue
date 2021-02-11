<template>
  <section class="section">
    <div class="container">
      <div class="columns">
        <!-- menu -->
        <div class="column is-one-quarter">
          <Menu activeMenu="database" activeSection="rhoads"/>
        </div>
        <!-- core contents and extras -->
        <div class="column is-three-quarters">
          <router-view/>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
import Menu from './Menu.vue'

export default {
  name: 'Body',
  components: {
    Menu
  }
}
</script>
