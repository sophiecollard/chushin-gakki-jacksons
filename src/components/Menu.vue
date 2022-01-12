<template>
  <aside class="menu">
    <p class="menu-label" v-show=databaseMenuShown>Model Database</p>
    <ul class="menu-list" v-show=databaseMenuShown>
      <li>
        <a v-on:click=toggleSoloistSection>Soloist</a>
        <ul v-show=soloistSectionExpanded>
          <li><router-link to="/db/sl/jackson-soloist-pro">Jackson Soloist Pro</router-link></li>
          <li><router-link to="/db/sl/jackson-soloist-archtop-pro">Jackson Soloist Archtop Pro</router-link></li>
          <li><router-link to="/db/sl/jackson-soloist-xl">Jackson Soloist XL</router-link></li>
          <li><router-link to="/db/sl/jackson-slsmg">Jackson SLSMG</router-link></li>
          <li><router-link to="/db/sl/jackson-sls3">Jackson SLS3</router-link></li>
        </ul>
      </li>
      <li>
        <a v-on:click=toggleRhoadsSection>Rhoads</a>
        <ul v-show=rhoadsSectionExpanded>
          <li><router-link to="/db/rr/jackson-rr-pro">Jackson Rhoads Pro</router-link></li>
          <li><router-link to="/db/rr/jackson-rr24">Jackson RR24</router-link></li>
          <li><router-link to="/db/rr/jackson-rr24m">Jackson RR24M</router-link></li>
          <li><router-link to="/db/rr/jackson-rr5">Jackson RR5</router-link></li>
          <li><router-link to="/db/rr/jackson-rr5fr">Jackson RR5FR</router-link></li>
          <li><router-link to="/db/rr/jackson-kevin-bond">Jackson Kevin Bond Signature Rhoads</router-link></li>
          <li><router-link to="/db/rr/jackson-matt-tuck">Jackson Matt Tuck Signature Rhoads</router-link></li>
          <li><router-link to="/db/rr/grover-jackson-dan-spitz">Grover Jackson Dan Spitz Professional</router-link></li>
          <li><router-link to="/db/rr/grover-jackson-rr-professional">Grover Jackson RR Standard/Professional</router-link></li>
          <li><router-link to="/db/rr/grover-jackson-rr-custom">Grover Jackson RR Custom</router-link></li>
          <li><router-link to="/db/rr/grover-jackson-rr-i195">Grover Jackson RR .I-195</router-link></li>
          <li><router-link to="/db/rr/grover-jackson-rr-i170">Grover Jackson RR .I-170</router-link></li>
          <li><router-link to="/db/rr/grover-jackson-rr-s350">Grover Jackson RR .S-350</router-link></li>
          <li><router-link to="/db/rr/jackson-stars-rr-j1">Jackson Stars RR-J1</router-link></li>
          <li><router-link to="/db/rr/jackson-stars-rr-j2">Jackson Stars RR-J2</router-link></li>
          <li><router-link to="/db/rr/jackson-stars-rr-j2sp">Jackson Stars RR-J2SP</router-link></li>
          <li><router-link to="/db/rr/jackson-stars-rr-tn01">Jackson Stars RR-TN01</router-link></li>
          <li><router-link to="/db/rr/jackson-stars-rr-tn02">Jackson Stars RR-TN02</router-link></li>
          <li><router-link to="/db/rr/jackson-stars-rr-tn02stb-swirl">Jackson Stars RR-TN02STB LTD "Swirl" (Limited Edition)</router-link></li>
          <li><router-link to="/db/rr/jackson-stars-rr-tn02stb-ash">Jackson Stars RR-TN02STB ASH (Limited Edition)</router-link></li>
          <li><router-link to="/db/rr/jackson-stars-rr-tn02stb-wal">Jackson Stars RR-TN02STB WAL (Limited Edition)</router-link></li>
        </ul>
      </li>
      <!-- <li>
        <a v-on:click=toggleKingVSection>King V</a>
        <ul v-show=kingVSectionExpanded>
          <li><a>Jackson King V Professional</a></li>
          <li><a>Grover Jackson King V Custom</a></li>
          <li><a>Grover Jackson Dave Mustaine Professional</a></li>
        </ul>
      </li> -->
      <!-- <li>
        <a v-on:click=toggleKellySection>Kelly</a>
        <ul v-show=kellySectionExpanded>
          <li><a>Grover Jackson Kelly Custom</a></li>
        </ul>
      </li> -->
      <!-- <li>
        <a v-on:click=toggleWarriorSection>Warrior</a>
        <ul v-show=warriorSectionExpanded>
          <li><a>Jackson Warrior Professional</a></li>
        </ul>
      </li> -->
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
      soloistSectionExpanded: this.activeSection == 'soloist',
      rhoadsSectionExpanded: this.activeSection == 'rhoads',
      kingVSectionExpanded: this.activeSection == 'king-v',
      kellySectionExpanded: this.activeSection == 'kelly',
      warriorSectionExpanded: this.activeSection == 'warrior'
    }
  },
  methods: {
    toggleSoloistSection () {
      this.soloistSectionExpanded = !this.soloistSectionExpanded
    },
    toggleRhoadsSection () {
      this.rhoadsSectionExpanded = !this.rhoadsSectionExpanded
    },
    toggleKingVSection () {
      this.kingVSectionExpanded = !this.kingVSectionExpanded
    },
    toggleKellySection () {
      this.kellySectionExpanded = !this.kellySectionExpanded
    },
    toggleWarriorSection () {
      this.warriorSectionExpanded = !this.warriorSectionExpanded
    }
  }
}
</script>
