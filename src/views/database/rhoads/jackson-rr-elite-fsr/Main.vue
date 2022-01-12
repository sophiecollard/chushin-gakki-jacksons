<template>
  <div class="columns">

    <div class="column is-two-thirds">
      <Title title="Jackson Rhoads Elite FSR" subtitle="2011"/>
      <Tags/>
      <Intro/>
      <Specs/>
      <ExternalResources/>
      <CatalogueLinks/>
    </div>

    <div class="column is-one-third">
      <CatalogueShot catalogueShot="/database/rhoads/jackson-rr-elite-fsr-black-yellow.png"/>
    </div>

  </div>  
</template>

<script>
import CatalogueShot from '../../../../components/CatalogueShot.vue'
import Intro from './Intro.vue'
import ExternalResources from './ExternalResources.vue'
import Specs from './Specs.vue'
import Tags from './Tags.vue'
import Title from '../../../../components/Title.vue'

export default {
  name: 'JacksonRREliteFSR',
  components: {
    CatalogueShot,
    Intro,
    ExternalResources,
    Specs,
    Tags,
    Title
  }
}
</script>
