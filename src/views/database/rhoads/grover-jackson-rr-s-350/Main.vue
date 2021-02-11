<template>
  <div class="columns">

    <div class="column is-two-thirds">
      <Title title="Grover Jackson RR .S-350"/>
      <Tags/>
      <Specs/>
    </div>

    <div class="column is-one-third">
      <Extras catalogueShot="/database/grover-jackson-rr-s-350.png"/>
    </div>

  </div>  
</template>

<script>
import Extras from '../../../../components/Extras.vue'
import Specs from './Specs.vue'
import Tags from './Tags.vue'
import Title from '../../../../components/Title.vue'

export default {
  name: 'JacksonRRS350',
  components: {
    Extras,
    Specs,
    Tags,
    Title
  }
}
</script>
