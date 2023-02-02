<template>
  <sidebar @detectSize="sidebarSize"/>
  <main class="main-content" :class="{'mobile': sidebarMode, 'map_overview': mapOverview}">
    <headerMain v-if="!mapOverview"/>
    <RouterView @mapOverview="checkLink"/>
  </main>
  <footerMain :mapOverview="mapOverview"/>
</template>

<script lang="ts">
import sidebar from '@/components/sidebar.vue';
import headerMain from '@/components/main-header.vue';
import footerMain from '@/components/footer.vue';

  export default {
    name: "AppMount",
  components: { sidebar, headerMain, footerMain },
    data() {
      return {
        sidebarMode: true,
        mapOverview: false
      }
    },
    methods: {
      sidebarSize(size) {
        this.sidebarMode = size;
      },
      checkLink(val) {
        this.mapOverview = val;
      }
    }
  }
</script>

<style lang="scss">
  @import './style/index.scss';
</style>