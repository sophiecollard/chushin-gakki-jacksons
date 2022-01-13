<template>
  <div class="columns">
  
    <div class="column is-two-thirds">
      <Title title="Jackson Stars RR-TN02 LTD" subtitle="2008"/>
      <Tags/>
      <Specs/>
    </div>

    <!-- <div class="column is-one-third">
      <CatalogueShot
        catalogueShot="/database/rhoads/jackson-stars-rr-tn02stb-blue-swirl.jpg"
        caption="RR-TN02 LTD in Blue Swirl"
        />
    </div> -->

  </div>  
</template>

<script>
// import CatalogueShot from '../../../../components/CatalogueShot.vue'
import Specs from './Specs.vue'
import Tags from './Tags.vue'
import Title from '../../../../components/Title.vue'

export default {
  name: 'JacksonStarsRRTN02LTD',
  components: {
    // CatalogueShot,
    Specs,
    Tags,
    Title
  }
}
</script>
