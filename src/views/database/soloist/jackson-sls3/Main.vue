<template>
  <div class="columns">

    <div class="column is-two-thirds">
      <Title title="Jackson SLS3" subtitle="2009-2011"/>
      <Tags/>
      <Specs/>
      <Gallery/>
      <CatalogueLinks/>
    </div>

    <div class="column is-one-third">
      <Extras catalogueShot="/database/soloist/jackson-sls3-white.jpg"/>
    </div>

  </div>  
</template>

<script>
import CatalogueLinks from './CatalogueLinks.vue'
import Extras from '../../../../components/Extras.vue'
import Gallery from '../../../../components/Gallery.vue'
import Specs from './Specs.vue'
import Tags from './Tags.vue'
import Title from '../../../../components/Title.vue'

export default {
  name: 'JacksonSLS3',
  components: {
    CatalogueLinks,
    Extras,
    Gallery,
    Specs,
    Tags,
    Title
  }
}
</script>
