<template>
  <div class="landing-select">
    <div class="site-banner">
      <img src="../assets/crossedge_logo.jpg" alt="Cross Edge" />
    </div>

    <div class="columns">
      <div class="column is-one-thirds contents guides">
        <h2>Guides</h2>
        <ul>
          <li>True Ending Guide</li>
          <li>Synthesis Tombs</li>
          <li>Arcane Tombs</li>
          <li>Secret Albums</li>
          <li>Active Skills</li>
          <li>Costumes</li>
          <li>Titles</li>
        </ul>
      </div>
      <div class="column is-one-thirds contents worldmaps">
        <h2>Maps</h2>
        <ul>
          <li><router-link :to="{ name: 'zeine 1',}">Zeine - Area 1</router-link></li>
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
