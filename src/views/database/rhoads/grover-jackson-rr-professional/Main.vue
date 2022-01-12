<template>
  <div class="columns">

    <div class="column is-two-thirds">
      <Title title="Grover Jackson Randy Rhoads Standard/Professional" subtitle="1990-1994"/>
      <Tags/>
      <Intro/>
      <Specs/>
      <CatalogueLinks/>
    </div>

    <div class="column is-one-third">
      <CatalogueShot catalogueShot="/database/rhoads/grover-jackson-rr-professional.png"/>
    </div>

  </div>  
</template>

<script>
import CatalogueLinks from './CatalogueLinks.vue'
import CatalogueShot from '../../../../components/CatalogueShot.vue'
import Intro from './Intro.vue'
import Specs from './Specs.vue'
import Tags from './Tags.vue'
import Title from '../../../../components/Title.vue'

export default {
  name: 'GroverJacksonRRProfessional',
  components: {
    CatalogueLinks,
    CatalogueShot,
    Intro,
    Specs,
    Tags,
    Title
  }
}
</script>
