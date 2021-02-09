<template>
  <div class="columns">
  
    <!-- core content -->
    <div class="column is-two-thirds">

      <Title title="Jackson Stars RR-J1"/>

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
          The Rhoads model offering the widest range of options.
          Available in three different bridge configurations (Floyd Rose Original, Kahler or
          Tune-o-matic), two different pickup configurations (Seymour Duncan SH-1n/TB-5 or EMG-81s)
          and five finishes.
        </p>
      </div>

      <!-- specs -->
      <div class="block">
        <h2 class="title is-4">Specs</h2>
        <p><strong>Construction:</strong> Neck-through body</p>
        <p><strong>Scale:</strong> 25.5" (648 mm)</p>
        <p><strong>Number of frets:</strong> 24</p>
        <p><strong>Body:</strong> Ash with 5A Flame Maple Veneer on see-through finishes</p>
        <p><strong>Neck:</strong> Maple</p>
        <p><strong>Fingerboard:</strong> Ebony</p>
        <p><strong>Inlays:</strong> MOP Sharkfins</p>
        <p><strong>Binding:</strong> Ivory</p>
        <p><strong>Pickups:</strong> <i>RR-J1/RR-J1K/RR-J1B:</i> Seymour Duncan SH-1n (neck), TN-5 (bridge)</p>
        <p><strong style="color: white;">Pickups:</strong> <i>RR-J1E/RR-J1EK/RR-J1BE:</i> EMG-81 (neck and bridge)</p>
        <p><strong>Controls:</strong> 2x Volume, 1x Tone, 3-Way Toggle Switch</p>
        <p><strong>Bridge:</strong> <i>RR-J1/RR-J1E:</i> Original Floyd Rose</p>
        <p><strong style="color: white;">Bridge:</strong> <i>RR-J1K/RR-J1EK:</i> Kahler</p>
        <p><strong style="color: white;">Bridge:</strong> <i>RR-J1B/RR-J1BE:</i> Tune-o-matic</p>
        <p><strong>Bridge Mount:</strong> Recessed</p>
        <p><strong>Finishes:</strong> Black, Trans. Black, Trans. Snow White, Trans. Red, Trans. Blue</p>
        <p><strong>Hardware:</strong> Black</p>
        <p><strong>Price:</strong> <i>RR-J1</i> &#165;220,000 (as per 2005 catalogue)</p>
        <p><strong style="color: white;">Price:</strong> <i>RR-J1E</i> &#165;225,000 (as per 2005 catalogue)</p>
        <p><strong style="color: white;">Price:</strong> <i>RR-J1K</i> &#165;240,000 (as per 2005 catalogue)</p>
        <p><strong style="color: white;">Price:</strong> <i>RR-J1EK</i> &#165;245,000 (as per 2005 catalogue)</p>
        <p><strong style="color: white;">Price:</strong> <i>RR-J1B</i> &#165;170,000 (as per 2005 catalogue)</p>
        <p><strong style="color: white;">Price:</strong> <i>RR-J1BE</i> &#165;175,000 (as per 2005 catalogue)</p>
      </div>

      <Gallery/>

      <!-- catalogue links -->
      <div class="block">
        <h2 class="title is-4">Catalogue Links</h2>
        <p>
          <a href="https://assets.contentful.com/4jcppgetbqrc/3iCpjrv77GoSGUikC4e20C/95ff2e8c8340c1bfa1941eafd488a3ae/JacksonSTARS-2004-Japan-catalog.pdf">
            Jackson Stars catalogue (2004, Japan)
          </a>
        </p>
        <p>
          <a href="https://assets.contentful.com/4jcppgetbqrc/5WK9lDAZaM8oQsWkUwmya6/66e2313e506179680c361000b65f17d0/JacksonSTARS-2005-JapanOnly-catalog.pdf">
            Jackson Stars catalogue (2005, Japan)
          </a>
        </p>
      </div>

    </div>

    <!-- catalogue shot -->
    <div class="column is-one-third">
      <Extras catalogueShot="/database/jackson-stars-rr-j1.png"/>
    </div>

  </div>  
</template>

<script>
import Extras from '../../../components/Extras.vue'
import Title from '../../../components/Title.vue'

export default {
  name: 'JacksonStarsRRJ1',
  components: {
    Extras,
    Title
  }
}
</script>
