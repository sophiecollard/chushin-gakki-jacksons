<template>
  <div class="columns">
  
    <!-- core content -->
    <div class="column is-two-thirds">

      <Title title="Jackson Stars RR-J2SP" subtitle="2005-2006"/>

      <!-- tags -->
      <div class="block">
        <span class="tag is-primary">Mid 2000s</span>
        <span class="tag is-danger">Japanese Market Exclusive</span>
        <span class="tag is-link">MOP Inlays</span>
      </div>

      <!-- overview -->
      <div class="block">
        <h2 class="title is-4">Overview</h2>
        <p>
          The unofficial Alexi Laiho signature.
        </p>
      </div>

      <!-- specs -->
      <div class="block">
        <h2 class="title is-4">Specs</h2>
        <p><strong>Construction:</strong> Neck-through body</p>
        <p><strong>Scale:</strong> 25.5" (648 mm)</p>
        <p><strong>Number of frets:</strong> 24</p>
        <p><strong>Body:</strong> Alder</p>
        <p><strong>Neck:</strong> Maple</p>
        <p><strong>Fingerboard:</strong> Ebony</p>
        <p><strong>Inlays:</strong> MOP Sharkfins</p>
        <p><strong>Binding:</strong> Ivory</p>
        <p><strong>Pickup:</strong> EMG-H3 with EMG-PA2 boost</p>
        <p><strong>Controls:</strong> 1x Volume, Switch for boost</p>
        <p><strong>Bridge:</strong> Schaller double locking tremolo</p>
        <p><strong>Bridge Mount:</strong> Recessed</p>
        <p><strong>Finishes:</strong> Black, Black with Yellow Bevels, Black with Gold Pinstripes</p>
        <p><strong>Hardware:</strong> Gold</p>
        <p><strong>Price:</strong> <i>Black:</i> &#165;165,000 (with gig bag)</p>
        <p><strong style="color: white;">Price:</strong> <i>Black with Yellow Bevels:</i> &#165;215,000 (with gig bag)</p>
        <p><strong style="color: white;">Price:</strong> <i>Black with Gold Pinstripes:</i> &#165;215,000 (with gig bag)</p>
      </div>

      <Gallery/>

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
  name: 'JacksonStarsRRJ2SP',
  components: {
    Extras,
    Title
  }
}
</script>
