<template>
  <section class="section">
    <div class="container">
      <div class="columns">
        <!-- menu -->
        <div class="column is-one-quarter">
          <Menu activeMenuSection="database" currentPage="grover-jackson-rr-custom"/>
        </div>
        <!-- page contents -->
        <div class="column">
          <Main/>
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
import Main from './Main.vue'
import Extras from './Extras.vue'

export default {
  name: 'Body',
  components: {
    Menu,
    Main,
    Extras
  },
  props: {
    activeMenuSection: String
  }
}
</script>
