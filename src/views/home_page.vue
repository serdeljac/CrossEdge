<template>
  <div class="landing-select">
    <div class="site-banner">
      <img src="../assets/crossedge_logo.jpg" alt="Cross Edge" />
    </div>

    <div class="columns">
      <div class="column is-one-thirds contents guides">
        <h2>Guides</h2>
        <ul>
          <li><router-link :to="{name: 'trueend',}">True Ending Guide</router-link></li>
          <li><router-link :to="{name: 'items',}">Synthesis Tombs</router-link></li>
          <li><router-link :to="{ name: 'items',}">Arcane Tombs</router-link></li>
          <li><router-link :to="{ name: 'items',}">Secret Albums</router-link></li>
          <li><router-link :to="{ name: 'items',}">Active Skills</router-link></li>
          <li><router-link :to="{ name: 'items',}">Costumes</router-link></li>
          <li><router-link :to="{ name: 'titles',}">Titles</router-link></li>
        </ul>
      </div>
      <div class="column is-one-thirds contents worldmaps">
        <h2>Maps</h2>
        <ul>
          <li>Zeine - Area 1</li>
          <li>Zeine - Area 2</li>
          <li>Zeine - Area 3</li>
          <li>Wilkiet - Area 1</li>
          <li>Wilkiet - Area 2</li>
          <li>Wilkiet - Area 3</li>
          <li>Brosste - Area 1</li>
          <li>Brosste - Area 2</li>
          <li>Brosste - Area 3</li>
          <li>Pragma - Area 1</li>
          <li>Pragma - Area 2</li>
          <li>Pragma - Area 3</li>
          <li>Ida - Area 1</li>
          <li>Ida - Area 2</li>
          <li>Ida - Area 3</li>
        </ul>
      </div>
      <div class="column is-one-thirds contents dungeons">
        <h2>Dungeons</h2>
        <ul>
          <li>Renuit</li>
          <li>Dungeon - 2</li>
          <li>Dungeon - 3</li>
          <li>Dungeon - 4</li>
        </ul>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "Home",
};
</script>

<style lang="scss" scoped></style>
