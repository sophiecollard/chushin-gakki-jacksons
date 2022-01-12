<template>
  <div class="columns">
  
    <div class="column is-two-thirds">
      <Title title="Jackson Stars WR-J2" subtitle="2004-2006"/>
      <Tags/>
      <Specs/>
      <Gallery/>
      <CatalogueLinks/>
    </div>

    <div class="column is-one-third">
      <CatalogueShot
        catalogueShot="/database/warrior/jackson-stars-wr-j2.png"
        caption="WR-J2 in Blood Splatter"
        />
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
  name: 'JacksonStarsWRJ2',
  components: {
    CatalogueLinks,
    CatalogueShot,
    Specs,
    Tags,
    Title
  }
}
</script>
