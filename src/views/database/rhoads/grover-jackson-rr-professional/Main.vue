<template>
  <div class="columns">

    <div class="column is-two-thirds">
      <Title title="Grover Jackson Randy Rhoads Standard/Professional" subtitle="1990-1994"/>
      <Tags/>
      <Overview/>
      <Specs/>
      <Gallery/>
      <CatalogueLinks/>
    </div>

    <div class="column is-one-third">
      <Extras catalogueShot="http://www.redox.com.ua/uploads/posts/2010-05/1274855416_2913024899v1_hi-dfb2c7d3b7d9254c8afb61a16f6ee941.jpg"/>
    </div>

  </div>  
</template>

<script>
import CatalogueLinks from './CatalogueLinks.vue'
import Extras from '../../../../components/Extras.vue'
import Gallery from '../../../../components/Gallery.vue'
import Overview from './Overview.vue'
import Specs from './Specs.vue'
import Tags from './Tags.vue'
import Title from '../../../../components/Title.vue'

export default {
  name: 'GroverJacksonRRProfessional',
  components: {
    CatalogueLinks,
    Extras,
    Gallery,
    Overview,
    Specs,
    Tags,
    Title
  }
}
</script>
