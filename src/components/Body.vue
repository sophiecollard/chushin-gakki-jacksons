<template>
  <section class="section">
    <div class="container">
      <div class="columns">
        <!-- menu -->
        <div class="column is-one-quarter">
          <Menu activeMenu="database" activeSection="rhoads"/>
        </div>
        <!-- page contents -->
        <div class="column">
          <router-view/>
        </div>
        <!-- extras -->
        <div class="column is-one-quarter">
          <Extras/>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
import Menu from './Menu.vue'
import Extras from './Extras.vue'

export default {
  name: 'Body',
  components: {
    Menu,
    Extras
  },
  props: {
    activeMenuSection: String
  }
}
</script>
