<template>
  <div class="columns">
  
    <div class="column is-two-thirds">
      <Title title="Grover Jackson RR .I-195"/>
      <Tags/>
      <Specs/>
    </div>

    <div class="column is-one-third">
      <Extras catalogueShot="/database/grover-jackson-rr-i-195.png"/>
    </div>

  </div>  
</template>

<script>
import Extras from '../../../../components/Extras.vue'
import Specs from './Specs.vue'
import Tags from './Tags.vue'
import Title from '../../../../components/Title.vue'

export default {
  name: 'JacksonRRI195',
  components: {
    Extras,
    Specs,
    Tags,
    Title
  }
}
</script>
