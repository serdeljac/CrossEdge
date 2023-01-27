<template>
    <div class="landing">

        <section class="landing_contents-mapRoom" @click="routerPush('mapRoom')">
          <div class="section-img">
            <img src="../assets/icons/homemaps.jpg" />
          </div>
          <h2>Maps</h2>
        </section>

        <section class="landing_contents-dungeons">
          <div class="section-img"></div>
          <h2>Dungeons</h2>
        </section>

        <section class="landing_contents-playTips" @click="routerPush('playthrough')">
          <div class="section-img"></div>
          <h2>Playthrough Tips</h2>
        </section>

        <section class="landing_contents-titles" @click="routerPush('titles')">
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
</template>

<script lang="ts">

export default {
  name: "homePage",
  methods: {
      routerPush(x) {
        this.$router.push({ name: x });
      }
    },
};
</script>
