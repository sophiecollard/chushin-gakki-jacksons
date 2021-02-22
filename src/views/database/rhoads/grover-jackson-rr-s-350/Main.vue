<template>
  <div class="columns">

    <div class="column is-two-thirds">
      <Title title="Grover Jackson RR .S-350"/>
      <Tags/>
      <Specs/>
      <CatalogueLinks/>
    </div>

    <div class="column is-one-third">
      <CatalogueShot catalogueShot="/database/grover-jackson-rr-s-350.png"/>
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
  name: 'JacksonRRS350',
  components: {
    CatalogueLinks,
    CatalogueShot,
    Specs,
    Tags,
    Title
  }
}
</script>
