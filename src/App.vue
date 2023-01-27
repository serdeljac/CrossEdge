<template>
  <sidebar @detectSize="detectSize"/>
  <main class="main-content" :class="{'mobile': sidebarMode}">
    <RouterView />
  </main>
  <footerMain />
</template>

<script lang="ts">
import sidebar from '@/components/Sidebar.vue';
import footerMain from '@/views/footer.vue';

  export default {
    name: "AppMount",
  components: { sidebar, footerMain },
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