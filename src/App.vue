<template>
  <sidebar  />
  <main class="content">
    <RouterView />
  </main>
</template>

<script lang="ts">
import sidebar from '@/components/Sidebar.vue';

  export default {
    name: "AppMount",
    components: { sidebar },
    data() {
      return {
        sidebarMode: true
      }
    },
    methods: {
    }
  }
</script>

<style lang="scss">
  @import './style/index.scss';
</style>