<template>
    <div>
        <Sidebar />
        <Map />
    </div>
</template>

<script>
import Sidebar from '../components/Sidebar.vue'
import Map from '../components/Map.vue'
    export default {
        name: "Builder",
    components: { Sidebar, Map },
    }
</script>

<style lang="scss" scoped>

</style>