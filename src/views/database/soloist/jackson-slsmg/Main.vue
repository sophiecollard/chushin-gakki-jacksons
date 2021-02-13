<template>
  <div class="columns">

    <div class="column is-two-thirds">
      <Title title="Jackson SLSMG" subtitle="2002-2011"/>
      <Tags/>
      <Specs/>
      <Gallery/>
      <CatalogueLinks/>
    </div>

    <div class="column is-one-third">
      <Extras catalogueShot="/database/soloist/jackson-slsmg-satin-black.jpg"/>
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
  name: 'JacksonSLSMG',
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
