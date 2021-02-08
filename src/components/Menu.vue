<template>
  <aside class="menu">
    <p class="menu-label" v-show=databaseMenuShown>Model Database</p>
    <ul class="menu-list" v-show=databaseMenuShown>
      <li><a>Dinky</a></li>
      <li>
        <a v-on:click=toggleSoloistSection>Soloist</a>
        <ul v-show=soloistSectionExpanded>
          <li>Jackson Soloist Professional</li>
        </ul>
      </li>
      <li>
        <a v-on:click=toggleRhoadsSection>Rhoads</a>
        <ul v-show=rhoadsSectionExpanded>
          <li><router-link to="/db/rr/jackson-rr-professional">Jackson RR Professional</router-link></li>
          <li><router-link to="/db/rr/grover-jackson-rr-professional">Grover Jackson RR Standard/Professional</router-link></li>
          <li><router-link class="is-active" to="/db/rr/grover-jackson-rr-custom">Grover Jackson RR Custom</router-link></li>
          <li><router-link to="/db/rr/grover-jackson-dan-spitz">Grover Jackson Dan Spitz Professional</router-link></li>
          <li><router-link to="/db/rr/grover-jackson-rr-i195">Grover Jackson RR .I-195</router-link></li>
          <li><router-link to="/db/rr/grover-jackson-rr-i170">Grover Jackson RR .I-170</router-link></li>
          <li><router-link to="/db/rr/grover-jackson-rr-s350">Grover Jackson RR .S-350</router-link></li>
          <li><router-link to="/db/rr/jackson-stars-rr-j1">Jackson Stars RR-J1</router-link></li>
          <li><router-link to="/db/rr/jackson-stars-rr-j2sp">Jackson Stars RR-J2SP</router-link></li>
          <li><router-link to="/db/rr/jackson-stars-rr-tn01">Jackson Stars RR-TN01</router-link></li>
          <li><router-link to="/db/rr/jackson-kevin-bond">Jackson Kevin Bond Signature Rhoads</router-link></li>
          <li><router-link to="/db/rr/jackson-rr24">Jackson RR24</router-link></li>
          <li><router-link to="/db/rr/jackson-rr24m">Jackson RR24M</router-link></li>
          <li><router-link to="/db/rr/jackson-matt-tuck">Jackson Matt Tuck Signature Rhoads</router-link></li>
        </ul>
      </li>
      <li><a>King V</a></li>
      <li><a>Kelly</a></li>
      <li><a>Warrior</a></li>
      <li><a>Other</a></li>
    </ul>
    <p class="menu-label" v-show=catalogueScansMenuShown>Catalogue Scans</p>
    <ul class="menu-list" v-show=catalogueScansMenuShown>
      <li><a>Grover Jackson 1999-2000</a></li>
      <li><a>Jackson Stars 2004</a></li>
      <li><a>Jackson Stars 2005</a></li>
      <li><a>Jackson Stars 2008</a></li>
    </ul>
    <p class="menu-label" v-show=reviewsMenuShown>Reviews</p>
    <ul class="menu-list" v-show=reviewsMenuShown>
      <li><a>2007 Jackson Stars RR Custom</a></li>
      <li><a>2005 Jackson Stars RR Semi-Custom</a></li>
      <li><a>1992 Grover Jackson RR Custom</a></li>
    </ul>
  </aside>  
</template>

<script>
export default {
  name: 'Menu',
  props: {
    activeMenu: String,
    activeSection: String
  },
  data: function () {
    return {
      // menus toggle
      databaseMenuShown: this.activeMenu == 'database',
      catalogueScansMenuShown: this.activeMenu == 'catalogue-scans',
      reviewsMenuShown: this.activeMenu == 'reviews',
      // database sections toggle
      dinkySectionExpanded: this.activeSection == 'dinky',
      soloistSectionExpanded: this.activeSection == 'soloist',
      rhoadsSectionExpanded: this.activeSection == 'rhoads',
      kingVSectionExpanded: this.activeSection == 'king-v',
      kellySectionExpanded: this.activeSection == 'kelly',
      warriorSectionExpanded: this.activeSection == 'warrior',
      otherSectionExpanded: this.activeSection == 'other'
    }
  },
  methods: {
    toggleSoloistSection: function () {
      this.soloistSectionExpanded = !this.soloistSectionExpanded
    },
    toggleRhoadsSection: function () {
      this.rhoadsSectionExpanded = !this.rhoadsSectionExpanded
    }
  }
}
</script>
