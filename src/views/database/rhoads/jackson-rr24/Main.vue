<template>
  <div class="columns">

    <div class="column is-two-thirds">
      <Title title="Jackson RR24" subtitle="2006-2011"/>
      <Tags/>
      <Specs/>
      <CatalogueLinks/>
    </div>

    <div class="column is-one-third">
      <Extras catalogueShot="/database/rhoads/jackson-rr24-black-yellow.jpg"/>
      <Extras catalogueShot="/database/rhoads/jackson-rr24-limited-edition.png"/>
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
  name: 'JacksonRR24',
  components: {
    CatalogueLinks,
    Extras,
    Specs,
    Tags,
    Title
  }
}
</script>
