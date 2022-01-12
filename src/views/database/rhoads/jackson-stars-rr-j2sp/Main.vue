<template>
  <div class="columns">
  
    <div class="column is-two-thirds">
      <Title title="Jackson Stars RR-J2SP" subtitle="2005-2006"/>
      <Tags/>
      <Intro/>
      <Specs/>
      <Gallery/>
    </div>

    <div class="column is-one-third">
      <CatalogueShot catalogueShot="/database/rhoads/jackson-stars-rrj2sp.jpg"/>
    </div>

  </div>  
</template>

<script>
import CatalogueShot from '../../../../components/CatalogueShot.vue'
import Intro from './Intro.vue'
import Specs from './Specs.vue'
import Tags from './Tags.vue'
import Title from '../../../../components/Title.vue'

export default {
  name: 'JacksonStarsRRJ2SP',
  components: {
    CatalogueShot,
    Intro,
    Specs,
    Tags,
    Title
  }
}
</script>
