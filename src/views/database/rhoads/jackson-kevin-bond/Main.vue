<template>
  <div class="columns">

    <div class="column is-two-thirds">
      <Title title="Jackson Kevin Bond Signature Rhoads" subtitle="2005-2008"/>
      <Tags/>
      <Specs/>
      <CatalogueLinks/>
    </div>
  
    <div class="column is-one-third">
      <Extras catalogueShot="/database/jackson-kevin-bond-red.jpg"/>
    </div>

  </div>  
</template>

<script>
import CatalogueLinks from './CatalogueLinks.vue'
import Extras from '../../../../components/Extras.vue'
import Specs from './Specs.vue'
import Tags from './Tags.vue'
import Title from '../../../../components/Title.vue'

export default {
  name: 'JacksonKevinBond',
  components: {
    CatalogueLinks,
    Extras,
    Specs,
    Tags,
    Title
  }
}
</script>
