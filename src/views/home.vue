<template>
    <div class="landing">

        <section class="landing_contents-mapRoom" @click="routerPush('mapRoom')">
          <div class="section-img">
            <img src="../assets/icons/homemaps.jpg" />
          </div>
          <h2>Maps</h2>
        </section>

        <section class="landing_contents-dungeons" @click="routerPush('dunMapRoom')">
          <div class="section-img">
            <img src="../assets/icons/homedungeon.jpg" />
          </div>
          <h2>Dungeons</h2>
        </section>

        <section class="landing_contents-playTips" @click="routerPush('playthrough')">
          <div class="section-img">
            <img src="../assets/icons/homeplaythrough.jpg" />
          </div>
          <h2>Playthrough Tips</h2>
        </section>

        <section class="landing_contents-titles" @click="routerPush('titles')">
          <div class="section-img">
            <img src="../assets/icons/hometitles.jpg" />
          </div>
          <h2>Titles</h2>
        </section>

        <section class="landing_contents-inventory" @click="routerPush('inv-weapons')">
          <div class="section-img">
            <img src="../assets/icons/homeinventory.jpg" />
          </div>
          <h2>Inventory</h2>
        </section>

        <section class="landing_contents-bestiary" @click="routerPush('bestiary')">
          <div class="section-img">
            <img src="../assets/icons/homebestiary.jpg" />
          </div>
          <h2>Bestiary</h2>
        </section>

        <section class="landing_contents-toolTeam homenull">
          <div class="section-img">
            <img src="../assets/icons/hometeambuild.jpg" />
          </div>
          <h2>Tool: Team Build</h2>
        </section>

        <section class="landing_contents-toolSynth homenull">
          <div class="section-img">
            <img src="../assets/icons/homesynthguide.jpg" />
          </div>
          <h2>Tool: Synthesis Generator</h2>
        </section>

    </div>
</template>

<script lang="ts">

export default {
  name: "homePage",
  beforeMount() {
    this.$emit('mapOverview', false);
  },
  methods: {
      routerPush(x) {
        this.$router.push({ name: x });
      }
    },
};
</script>
