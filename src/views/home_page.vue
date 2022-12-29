<template>
  <div class="landing-select">
    <div class="site-banner">
      <img src="../assets/crossedge_logo.jpg" alt="Cross Edge" />
    </div>

    <div class="columns">
      <!-- <div class="column is-one-thirds contents guides">
        <h2>Guides</h2>
        <ul>
          <li><router-link :to="{ name: 'true end',}">True Ending Guide</router-link></li>
          <li><router-link :to="{ name: 'synthesis',}">Synthesis Tombs</router-link></li>
          <li><router-link :to="{ name: 'arcane',}">Arcane Tombs</router-link></li>
          <li><router-link :to="{ name: 'secret',}">Secret Albums</router-link></li>
          <li><router-link :to="{ name: 'active skills',}">Active Skills</router-link></li>
          <li><router-link :to="{ name: 'costumes',}">Costumes</router-link></li>
          <li><router-link :to="{ name: 'titles',}">Titles</router-link></li>
        </ul>
      </div> -->
      <div class="column is-one-thirds contents worldmaps">
        <h2>Maps</h2>
        <ul>
          <li><router-link :to="{ name: 'zeine 1',}">Zeine - Area 1</router-link></li>
          <li><router-link :to="{ name: 'zeine 2',}">Zeine - Area 2</router-link></li>
          <!-- <li><router-link :to="{ name: 'zeine 3',}">Zeine - Area 3</router-link></li> -->
          <li><router-link :to="{ name: 'wilkiet 1',}">Wilkiet - Area 1</router-link></li>
          <!-- <li><router-link :to="{ name: 'wilkiet 2',}">Wilkiet - Area 2</router-link></li> -->
          <!-- <li><router-link :to="{ name: 'wilkiet 3',}">Wilkiet - Area 3</router-link></li> -->
          <li><router-link :to="{ name: 'brosste 1',}">Brosste - Area 1</router-link></li>
          <!-- <li><router-link :to="{ name: 'brosste 2',}">Brosste - Area 2</router-link></li> -->
          <!-- <li><router-link :to="{ name: 'brosste 3',}">Brosste - Area 3</router-link></li> -->
          <!-- <li><router-link :to="{ name: 'pragma 1',}">Pragma - Area 1</router-link></li> -->
          <!-- <li><router-link :to="{ name: 'pragma 2',}">Pragma - Area 2</router-link></li> -->
          <!-- <li><router-link :to="{ name: 'pragma 3',}">Pragma - Area 3</router-link></li> -->
          <!-- <li><router-link :to="{ name: 'ida 1',}">Ida - Area 1</router-link></li> -->
          <!-- <li><router-link :to="{ name: 'ida 2',}">Ida - Area 2</router-link></li> -->
          <!-- <li><router-link :to="{ name: 'ida 3',}">Ida - Area 3</router-link></li> -->
        </ul>
      </div>
      <!-- <div class="column is-one-thirds contents dungeons">
        <h2>Dungeons</h2>
        <ul>
          <li><router-link :to="{ name: 'renuit',}">Renuit</router-link></li>
          <li><router-link :to="{ name: 'reveldead',}">Reveldead</router-link></li>
          <li><router-link :to="{ name: 'midbase',}">Midbase</router-link></li>
          <li><router-link :to="{ name: 'hellzeit',}">Hellzeit</router-link></li>
          <li><router-link :to="{ name: 'laurelite',}">Laurelite</router-link></li>
          <li><router-link :to="{ name: 'charlephene',}">Charlephene</router-link></li>
          <li><router-link :to="{ name: 'arcadia',}">Arcadia</router-link></li>
          <li><router-link :to="{ name: 'bell kant',}">Bell Kant</router-link></li>
          <li><router-link :to="{ name: 'fett road',}">Fett Road</router-link></li>
          <li><router-link :to="{ name: 'sazaruka',}">Sazaruka</router-link></li>
          <li><router-link :to="{ name: 'ripquake',}">Ripquake</router-link></li>
          <li><router-link :to="{ name: 'en delite',}">En Delite</router-link></li>
          <li><router-link :to="{ name: 'ea canal',}">Ea Canal (DLC)</router-link></li>
          <li><router-link :to="{ name: 'nachtlark',}">Nachtlark (DLC)</router-link></li>
          <li><router-link :to="{ name: 'fiesta barra',}">Fiesta Barra (DLC)</router-link></li>
          <li><router-link :to="{ name: 'schine baal',}">Schine Baal (DLC)</router-link></li>
          <li><router-link :to="{ name: 'UNKNOWN',}">UNKNOWN</router-link></li>
        </ul>
      </div> -->
    </div>
  </div>
</template>

<script>
export default {
  name: "Home",
};
</script>
