<template>
  <div class="columns">
  
    <div class="column is-two-thirds">
      <Title title="Grover Jackson RR .I-170"/>
      <Tags/>
      <Specs/>
    </div>

    <div class="column is-one-third">
      <Extras catalogueShot="/database/grover-jackson-rr-i-170.png"/>
    </div>

  </div>
</template>

<script>
import Extras from '../../../../components/Extras'
import Specs from './Specs.vue'
import Tags from './Tags.vue'
import Title from '../../../../components/Title.vue'

export default {
  name: 'JacksonRRI170',
  components: {
    Extras,
    Specs,
    Tags,
    Title
  }
}
</script>
