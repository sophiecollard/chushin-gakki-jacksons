<template>
  <div class="timeline">
    <Title title="Timeline" subtitle=""/>
    <br/>

    <h2 class="title is-4">The early 90s</h2>
    <h4 class="subtitle is-6">
      Many consider this to be the golden era of Japanese-made Jacksons. In 1990, Jackson launched its famed Pro
      series, with specs and a build quality on par those of with USA-made models. Meanwhile, models produced
      exclusively for the domestic Japanese market were introduced under the brand name Grover Jackson.
    </h4>

    <br/>

    <h2 class="title is-6">Jackson Pro Series</h2>
    <p><router-link to="/db/rr/jackson-rr-pro">Jackson Rhoads Pro</router-link></p>
    <p><router-link to="/db/sl/jackson-soloist-archtop-pro">Jackson Soloist Archtop Pro</router-link></p>
    <p><router-link to="/db/sl/jackson-soloist-pro">Jackson Soloist Pro</router-link></p>

    <br/>

    <h2 class="title is-6">Grover Jackson Professional Series</h2>
    <p><router-link to="/db/rr/grover-jackson-dan-spitz">Grover Jackson Dan Spitz Professional</router-link></p>
    <p><router-link to="/db/rr/grover-jackson-rr-professional">Grover Jackson RR Standard/Professional</router-link></p>

    <br/>

    <h2 class="title is-6">Grover Jackson Custom Series</h2>
    <p><router-link to="/db/rr/grover-jackson-rr-custom">Grover Jackson RR Custom</router-link></p>

    <br/>

    <h2 class="title is-4">The late 90s</h2>
    <h4 class="subtitle is-6">
      With the Pro series being discontinued in 1995, the late 90s proved a lot less interesting for fans of
      Japanese-made Jacksons. While high-end models continued to be produced for the domestic Japanese market under the
      Grover Jackson brand name, the rest of the world had to contend with models made for the budget-minded customer.
      The typical import Jackson of this era features a bolt-on neck, a rosewood fretboard instead of ebony, inferior
      hardware and the use of a celluloid material referred to as 'MOTO' or 'Pearloid' for inlays in place of the
      mother of pearl that had adorned the early 90s Pro series.
    </h4>

    <br/>

    <h2 class="title is-6">Grover Jackson I and S Series</h2>
    <p><router-link to="/db/rr/grover-jackson-rr-i170">Grover Jackson RR .I-170</router-link></p>
    <p><router-link to="/db/rr/grover-jackson-rr-i195">Grover Jackson RR .I-195</router-link></p>
    <p><router-link to="/db/rr/grover-jackson-rr-s350">Grover Jackson RR .S-350</router-link></p>

    <br/>

    <h2 class="title is-4">The 2000s</h2>
    <!-- <h4 class="subtitle is-6">Blah blah blah</h4> -->

    <br/>

    <h2 class="title is-6">Jackson Pro Series</h2>
    <p><router-link to="/db/rr/jackson-rr24">Jackson RR24</router-link></p>
    <p><router-link to="/db/rr/jackson-rr24m">Jackson RR24M</router-link></p>
    <p><router-link to="/db/rr/jackson-rr5">Jackson RR5</router-link></p>
    <p><router-link to="/db/rr/jackson-rr5fr">Jackson RR5FR</router-link></p>
    <p><router-link to="/db/sl/jackson-sls3">Jackson SLS3</router-link></p>

    <br/>

    <p><router-link to="/db/rr/jackson-kevin-bond">Jackson Kevin Bond Signature Rhoads</router-link></p>
    <p><router-link to="/db/rr/jackson-matt-tuck">Jackson Matt Tuck Signature Rhoads</router-link></p>

    <br/>

    <p><router-link to="/db/rr/jackson-rr-elite-fsr">Jackson Rhoads Elite FSR (2011 Limited Edition)</router-link></p>

    <br/>

    <h2 class="title is-6">Jackson MG Series</h2>
    <p><router-link to="/db/sl/jackson-slsmg">Jackson SLSMG</router-link></p>

    <br/>
    
    <h2 class="title is-6">Jackson Stars J1 Series</h2>
    <p><router-link to="/db/rr/jackson-stars-rr-j1">Jackson Stars RR-J1</router-link></p>
    
    <br/>

    <h2 class="title is-6">Jackson Stars J2 Series</h2>
    <p><router-link to="/db/rr/jackson-stars-rr-j2">Jackson Stars RR-J2</router-link></p>
    <p><router-link to="/db/rr/jackson-stars-rr-j2sp">Jackson Stars RR-J2SP</router-link></p>
    <p><router-link to="/db/wr/jackson-stars-wr-j2">Jackson Stars WR-J2</router-link></p>

    <br/>

    <h2 class="title is-6">Jackson Stars TN01 Series</h2>
    <p><router-link to="/db/rr/jackson-stars-rr-tn01">Jackson Stars RR-TN01</router-link></p>

    <br/>

    <h2 class="title is-6">Jackson Stars TN02 Series</h2>
    <p><router-link to="/db/rr/jackson-stars-rr-tn02">Jackson Stars RR-TN02</router-link></p>
    <p><router-link to="/db/wr/jackson-stars-wr-tn02">Jackson Stars WR-TN02</router-link></p>

    <br/>

    <p><router-link to="/db/rr/jackson-stars-rr-tn02stb-ltd">Jackson Stars RR-TN02 STB LTD (2008 Limited Edition)</router-link></p>
    <p><router-link to="/db/rr/jackson-stars-rr-tn02stb-ash">Jackson Stars RR-TN02 STB ASH (2009 Limited Edition)</router-link></p>
    <p><router-link to="/db/rr/jackson-stars-rr-tn02stb-wal">Jackson Stars RR-TN02 STB WAL (2009 Limited Edition)</router-link></p>

  </div>
</template>

<script>
import Title from '@/components/Title.vue'

export default {
  name: 'Timeline',
  components: {
    Title
  }
}
</script>
