<template>
  <sidebar @detectSize="detectSize"/>
  <main class="main-content" :class="{'mobile': sidebarMode}">
    <headerMain />
    <RouterView />
  </main>
  <footerMain />
</template>

<script lang="ts">
import sidebar from '@/components/Sidebar.vue';
import headerMain from '@/components/header.vue';
import footerMain from '@/components/footer.vue';

  export default {
    name: "AppMount",
  components: { sidebar, headerMain, footerMain },
    data() {
      return {
        sidebarMode: true
      }
    },
    methods: {
      detectSize(size) {
        this.sidebarMode = size;
        console.log(size);
      }
    }
  }
</script>

<style lang="scss">
  @import './style/index.scss';
</style>