<template>
  <div class="columns">
  
    <div class="column is-two-thirds">
      <Title title="Jackson Stars RR-TN02STB ASH" subtitle="2009"/>
      <Tags/>
      <Specs/>
    </div>

    <div class="column is-one-third">
      <CatalogueShot catalogueShot="/database/rhoads/jackson-stars-rr-tn02stb-ash.jpg"/>
    </div>

  </div>  
</template>

<script>
import CatalogueShot from '../../../../components/CatalogueShot.vue'
import Specs from './Specs.vue'
import Tags from './Tags.vue'
import Title from '../../../../components/Title.vue'

export default {
  name: 'JacksonStarsRRTN02STBAsh',
  components: {
    CatalogueShot,
    Specs,
    Tags,
    Title
  }
}
</script>
