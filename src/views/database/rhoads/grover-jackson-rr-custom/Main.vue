<template>
  <div class="columns">
    
    <div class="column is-two-thirds">
      <Title title="Grover Jackson Randy Rhoads Custom" subtitle="1990-1994"/>
      <Tags/>
      <Overview/>
      <Specs/>
      <Gallery/>
      <CatalogueLinks/>
    </div>

    <div class="column is-one-third">
      <Extras catalogueShot="/database/rhoads/grover-jackson-rr-custom.png"/>
    </div>

  </div>
</template>

<script>
import CatalogueLinks from './CatalogueLinks.vue'
import Extras from '../../../../components/Extras.vue'
import Gallery from '../../../../components/Gallery.vue'
import Overview from './Overview.vue'
import Tags from './Tags.vue'
import Title from '../../../../components/Title.vue'
import Specs from './Specs.vue'

export default {
  name: 'GroverJacksonRRCustom',
  components: {
    CatalogueLinks,
    Extras,
    Gallery,
    Overview,
    Specs,
    Tags,
    Title
  }
}
</script>
