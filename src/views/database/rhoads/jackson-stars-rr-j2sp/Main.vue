<template>
  <div class="columns">
  
    <div class="column is-two-thirds">
      <Title title="Jackson Stars RR-J2SP" subtitle="2005-2006"/>
      <Tags/>
      <Overview/>
      <Specs/>
      <Gallery/>
    </div>

    <div class="column is-one-third">
      <CatalogueShot catalogueShot="/database/jackson-stars-rrj2sp.jpg"/>
    </div>

  </div>  
</template>

<script>
import CatalogueShot from '../../../../components/CatalogueShot.vue'
import Overview from './Overview.vue'
import Specs from './Specs.vue'
import Tags from './Tags.vue'
import Title from '../../../../components/Title.vue'

export default {
  name: 'JacksonStarsRRJ2SP',
  components: {
    CatalogueShot,
    Overview,
    Specs,
    Tags,
    Title
  }
}
</script>
