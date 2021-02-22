<template>
  <div class="columns">
  
    <div class="column is-two-thirds">
      <Title title="Jackson Stars RR-J1" subtitle="2002-2007"/>
      <Tags/>
      <Overview/>
      <Specs/>
      <Gallery/>
      <CatalogueLinks/>
    </div>

    <div class="column is-one-third">
      <CatalogueShot
        catalogueShot="/database/rhoads/jackson-stars-rr-j1be.png"
        caption="RR-J1BE in TRS (Transparent Red)"
        />
    </div>

  </div>  
</template>

<script>
import CatalogueLinks from './CatalogueLinks.vue'
import CatalogueShot from '../../../../components/CatalogueShot.vue'
import Overview from './Overview.vue'
import Specs from './Specs.vue'
import Tags from './Tags.vue'
import Title from '../../../../components/Title.vue'

export default {
  name: 'JacksonStarsRRJ1',
  components: {
    CatalogueLinks,
    CatalogueShot,
    Overview,
    Specs,
    Tags,
    Title
  }
}
</script>
