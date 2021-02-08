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
          <router-view v-on:update-catalogue-shot="updateCatalogueShot"/>
        </div>
        <!-- extras -->
        <div class="column is-one-quarter">
          <Extras v-bind:catalogueShot="extrasCatalogueShot"/>
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
  },
  data: function () {
    return {
      extrasCatalogueShot: 'https://bulma.io/images/placeholders/320x640.png'
    }
  },
  methods: {
    updateCatalogueShot: function (catalogueShot) {
      if (typeof catalogueShot != undefined) {
        this.extrasCatalogueShot = catalogueShot
      } else {
        this.extrasCatalogueShot = 'https://bulma.io/images/placeholders/320x640.png'
      }
    }
  }
}
</script>
