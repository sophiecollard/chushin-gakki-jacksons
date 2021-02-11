<template>
  <div class="columns">
  
    <div class="column is-two-thirds">
      <Title title="Jackson Stars RR-TN01" subtitle="2008"/>
      <Tags/>
      <Specs/>
    </div>

    <div class="column is-one-third">
      <Extras catalogueShot="/database/jackson-stars-rr-tn01stb.jpg"/>
    </div>

  </div>  
</template>

<script>
import Extras from '../../../../components/Extras.vue'
import Specs from './Specs.vue'
import Tags from './Tags.vue'
import Title from '../../../../components/Title.vue'

export default {
  name: 'JacksonStarsRRTN01',
  components: {
    Extras,
    Specs,
    Tags,
    Title
  }
}
</script>
