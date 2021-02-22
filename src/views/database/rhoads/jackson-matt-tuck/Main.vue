<template>
  <div class="columns">
  
    <div class="column is-two-thirds">
      <Title title="Jackson Matt Tuck Signature Rhoads" subtitle="2008-2010"/>
      <Tags/>
      <Specs/>
      <CatalogueLinks/>
    </div>
  
    <div class="column is-one-third">
      <CatalogueShot catalogueShot="/database/rhoads/jackson-matt-tuck-sparkle.png"/>
    </div>

  </div>  
</template>

<script>
import CatalogueLinks from './CatalogueLinks.vue'
import CatalogueShot from '../../../../components/CatalogueShot.vue'
import Specs from './Specs.vue'
import Tags from './Tags.vue'
import Title from '../../../../components/Title.vue'

export default {
  name: 'JacksonMattTuck',
  components: {
    CatalogueLinks,
    CatalogueShot,
    Specs,
    Tags,
    Title
  }
}
</script>
