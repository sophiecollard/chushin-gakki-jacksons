<template>
  <div class="columns">

    <div class="column is-two-thirds">
      <Title title="Jackson RR24M" subtitle="2008-2009"/>
      <Tags/>
      <Specs/>
      <CatalogueLinks/>
    </div>

    <div class="column is-one-third">
      <Extras catalogueShot="/database/jackson-rr24m-white.jpg"/>
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
  name: 'JacksonRR24M',
  components: {
    CatalogueLinks,
    Extras,
    Specs,
    Tags,
    Title
  }
}
</script>
