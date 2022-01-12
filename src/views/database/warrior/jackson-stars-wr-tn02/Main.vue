<template>
  <div class="columns">
  
    <div class="column is-two-thirds">
      <Title title="Jackson Stars WR-TN02" subtitle="2007-2009"/>
      <Tags/>
      <Specs/>
    </div>

    <div class="column is-one-third">
      <CatalogueShot
        catalogueShot="/database/warrior/jackson-stars-wr-tn02.jpg"
        caption="WR-TN02 in GMG (Gun Metal Grey)"/>
    </div>

  </div>  
</template>

<script>
import CatalogueShot from '../../../../components/CatalogueShot.vue'
import Specs from './Specs.vue'
import Tags from './Tags.vue'
import Title from '../../../../components/Title.vue'

export default {
  name: 'JacksonStarsWRTN02',
  components: {
    CatalogueShot,
    Specs,
    Tags,
    Title
  }
}
</script>
