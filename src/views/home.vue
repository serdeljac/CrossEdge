<template>

    <div class="landing">
      <header class="landing_header">
        <img src="../assets/crossedge_logo.jpg" alt="Cross Edge" />
        <div class="platform">
          <p>PS3/XBOX</p>
        </div>
        <div>
          <h1>Cross Edge Interactive Guide <span>v1.0.0</span></h1>
        </div>
      </header>

      <div class="landing_contents">
        <section class="landing_contents-mapRoom" @click="pageChange('mapRoom')">
          <div class="section-img">
            <img src="../assets/icons/homemaps.jpg" />
          </div>
          <h2>Maps</h2>
        </section>
        <section class="landing_contents-dungeons">
          <div class="section-img"></div>
          <h2>Dungeons</h2>
        </section>
        <section class="landing_contents-playTips">
          <div class="section-img"></div>
          <h2>Playthrough Tips</h2>
        </section>
        <section class="landing_contents-titles">
          <div class="section-img"></div>
          <h2>Titles</h2>
        </section>
        <section class="landing_contents-inventory">
          <div class="section-img"></div>
          <h2>Inventory</h2>
        </section>
        <section class="landing_contents-toolTeam">
          <div class="section-img"></div>
          <h2>Tool: Team Build</h2>
        </section>
        <section class="landing_contents-toolSynth">
          <div class="section-img"></div>
          <h2>Tool: Synthesis Guide</h2>
        </section>
      </div>
    </div>

</template>

<script lang="ts">
import gsap from 'gsap';

export default {
  name: "homePage",
  methods: {
    pageChange(pg) {
      if (pg == 'mapRoom') {
        this.$router.push({ name: 'mapRoom'});
      }
    },
  }
};
</script>
