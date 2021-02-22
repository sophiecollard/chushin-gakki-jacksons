<template>
  <div class="columns">

    <div class="column is-two-thirds">
      <Title title="Jackson RR24" subtitle="2006-2011"/>
      <Tags/>
      <Specs/>
      <CatalogueLinks/>
    </div>

    <div class="column is-one-third">
      <CatalogueShot
        catalogueShot="/database/rhoads/jackson-rr24-gold-black.jpg"
        caption="2009 Limited Edition in Gold with Black Bevels"
        />
      <CatalogueShot
        catalogueShot="/database/rhoads/jackson-rr24-limited-edition.png"
        caption="2006 Limited Edition with ivory binding and reverse sharkfin inlays"
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
  name: 'JacksonRR24',
  components: {
    CatalogueLinks,
    CatalogueShot,
    Specs,
    Tags,
    Title
  }
}
</script>
