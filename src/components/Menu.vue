<template>
  <aside class="menu">
    <p class="menu-label">Model Database</p>
    <ul class="menu-list">
      <li><a>Dinky</a></li>
      <li><a>Soloist</a></li>
      <li>
        <a>Rhoads</a>
        <ul>
          <li><a>Jackson RR Professional</a></li>
          <li><router-link to="/db/rr/grover-jackson-rr-professional">Grover Jackson RR Professional</router-link></li>
          <li><router-link class="is-active" to="/db/rr/grover-jackson-rr-custom">Grover Jackson RR Custom</router-link></li>
          <li><router-link to="/db/rr/grover-jackson-dan-spitz">Grover Jackson Dan Spitz Professional</router-link></li>
          <li><a>Grover Jackson RR .I-195</a></li>
          <li><a>Grover Jackson RR .I-170</a></li>
          <li><a>Grover Jackson RR .S-350</a></li>
          <li><a>Jackson Stars RR-J1</a></li>
          <li><a>Jackson Stars RR-J2SP</a></li>
          <li><a>Jackson Stars RR-TN01</a></li>
          <li><a>Jackson Kevin Bond Signature Rhoads</a></li>
          <li><a>Jackson RR24</a></li>
          <li><a>Jackson RR24M</a></li>
          <li><a>Jackson Matt Tuck Signature Rhoads</a></li>
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
