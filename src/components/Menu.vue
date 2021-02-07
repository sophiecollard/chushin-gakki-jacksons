<template>
  <aside class="menu">
    <p class="menu-label">Model Database</p>
    <ul class="menu-list">
      <li><a>Dinky</a></li>
      <li><a>Soloist</a></li>
      <li>
        <a>Rhoads</a>
        <ul>
          <li><router-link to="/db/rr/jackson-rr-professional">Jackson RR Professional</router-link></li>
          <li><router-link to="/db/rr/grover-jackson-rr-professional">Grover Jackson RR Professional</router-link></li>
          <li><router-link class="is-active" to="/db/rr/grover-jackson-rr-custom">Grover Jackson RR Custom</router-link></li>
          <li><router-link to="/db/rr/grover-jackson-dan-spitz">Grover Jackson Dan Spitz Professional</router-link></li>
          <li><router-link to="/db/rr/grover-jackson-rr-i195">Grover Jackson RR .I-195</router-link></li>
          <li><router-link to="/db/rr/grover-jackson-rr-i170">Grover Jackson RR .I-170</router-link></li>
          <li><router-link to="/db/rr/grover-jackson-rr-s350">Grover Jackson RR .S-350</router-link></li>
          <li><router-link to="/db/rr/jackson-stars-rr-j1">Jackson Stars RR-J1</router-link></li>
          <li><router-link to="/db/rr/jackson-stars-rr-j2sp">Jackson Stars RR-J2SP</router-link></li>
          <li><router-link to="/db/rr/jackson-stars-rr-tn01">Jackson Stars RR-TN01</router-link></li>
          <li><router-link to="/db/rr/jackson-kevin-bond">Jackson Kevin Bond Signature Rhoads</router-link></li>
          <li><router-link to="/db/rr/jackson-rr24">Jackson RR24</router-link></li>
          <li><router-link to="/db/rr/jackson-rr24m">Jackson RR24M</router-link></li>
          <li><router-link to="/db/rr/jackson-matt-tuck">Jackson Matt Tuck Signature Rhoads</router-link></li>
        </ul>
      </li>
      <li><a>King V</a></li>
      <li><a>Kelly</a></li>
      <li><a>Warrior</a></li>
      <li><a>Other</a></li>
    </ul>
    <p class="menu-label">Catalogue Scans</p>
    <ul class="menu-list">
      <li><a>Grover Jackson 1999-2000</a></li>
      <li><a>Jackson Stars 2004</a></li>
      <li><a>Jackson Stars 2005</a></li>
      <li><a>Jackson Stars 2008</a></li>
    </ul>
    <p class="menu-label">Reviews</p>
    <ul class="menu-list">
      <li><a>2007 Jackson Stars RR Custom</a></li>
      <li><a>2005 Jackson Stars RR Semi-Custom</a></li>
      <li><a>1992 Grover Jackson RR Custom</a></li>
    </ul>
  </aside>  
</template>

<script>
export default {
  name: 'Menu',
  props: {
    activeMenuSection: String,
    currentPage: String
  }
}
</script>
