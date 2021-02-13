<template>
  <div class="columns">

    <div class="column is-two-thirds">
      <Title title="Jackson Randy Rhoads Pro" subtitle="1990-1995"/>
      <Tags/>
      <Specs/>
      <CatalogueLinks/>
    </div>

    <div class="column is-one-third">
      <Extras catalogueShot="/database/jackson-rr-pro.png"/>
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
  name: 'JacksonRRPro',
  components: {
    CatalogueLinks,
    Extras,
    Specs,
    Tags,
    Title
  }
}
</script>
