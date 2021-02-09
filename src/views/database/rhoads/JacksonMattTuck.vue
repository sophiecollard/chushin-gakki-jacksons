<template>
  <div class="columns">
  
    <!-- core content -->
    <div class="column is-two-thirds">
      <Title title="Jackson Matt Tuck Signature Rhoads"/>
    </div>
  
    <!-- catalogue shot -->
    <div class="column is-one-third">
      <Extras catalogueShot="http://www.redox.com.ua/uploads/posts/2010-05/1274855416_2913024899v1_hi-dfb2c7d3b7d9254c8afb61a16f6ee941.jpg"/>
    </div>

  </div>  
</template>

<script>
import Extras from '../../../components/Extras.vue'
import Title from '../../../components/Title.vue'

export default {
  name: 'JacksonMattTuck',
  components: {
    Extras,
    Title
  }
}
</script>
