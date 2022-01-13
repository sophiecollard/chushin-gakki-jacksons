<template>
  <div class="home">
    <!-- <img alt="Vue logo" src="../assets/logo.png">
    <HelloWorld msg="Welcome to Your Vue.js App"/> -->
    <Title title="Welcome!" subtitle=""/>
    <br/>
    <p>
      The website you've just landed on is the very first iteration of a project that aims to become the best source of
      information on Jackson (and perhaps at some point Charvel) guitars made at the Chushin Gakki plant in Japan
      between the early 90s and 2011.
    </p>
    <br/>
    <p>
      This project is very much a work in progress still. You will quickly notice as you browse through the menu for
      the model database that the Rhoads section is the only one for which I have managed to compile a near-exhaustive
      list of all the neck-through models ever produced at the Chushin Gakki plant. A number of bold-on Rhoads were
      also produced there over the years, but I'll leave them out for the time being since I'm not certain how much
      interest there is for those. I've also started making entries for a handful of Soloist and Warrior models, but
      many more remain to be added.
    </p>
    <br/>
    <p>
      If your favourite MIJ Jackson is missing from the model database, why not contribute via a pull request to this
      project's <a href="https://github.com/sophiecollard/chushin-gakki-jacksons">Github</a> repository?
    </p>
  </div>
</template>

<script>
// @ is an alias to /src
// import HelloWorld from '@/components/HelloWorld.vue'
import Title from '@/components/Title.vue'

export default {
  name: 'Home',
  components: {
    // HelloWorld
    Title
  }
}
</script>
