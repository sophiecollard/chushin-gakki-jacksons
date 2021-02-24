<template>
  <div class="columns">

    <div class="column is-two-thirds">
      <Title title="Jackson RR5" subtitle="2001-2011"/>
      <Tags/>
      <Specs/>
      <CatalogueLinks/>
    </div>

    <div class="column is-one-third">
      <CatalogueShot
        catalogueShot="/database/rhoads/jackson-rr5-ivory.jpg"
        caption="RR5 in Ivory with Black Pinstripes"
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
  name: 'JacksonRR5',
  components: {
    CatalogueLinks,
    CatalogueShot,
    Specs,
    Tags,
    Title
  }
}
</script>
