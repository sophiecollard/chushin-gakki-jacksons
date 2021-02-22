<template>
  <div class="columns">

    <div class="column is-two-thirds">
      <Title title="Jackson Soloist Archtop Pro" subtitle="1990-1992"/>
      <Tags/>
      <Specs/>
      <CatalogueLinks/>
    </div>

    <div class="column is-one-third">
      <CatalogueShot catalogueShot="/database/soloist/jackson-soloist-archtop-pro-trem.png"/>
      <CatalogueShot catalogueShot="/database/soloist/jackson-soloist-archtop-pro-ht.png"/>
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
  name: 'JacksonSoloistArchtopPro',
  components: {
    CatalogueLinks,
    CatalogueShot,
    Specs,
    Tags,
    Title
  }
}
</script>
