<template>
    <div>
        <Sidebar />
        <Map @iconActive="selectedIcon" />
        <MapDetails :info="iconActive"/>
    </div>
</template>

<script>
import Sidebar from '../components/Sidebar.vue'
import Map from '../components/Map.vue'
import MapDetails from '../components/MapDetails.vue'

    export default {
        name: "Builder",
    components: { Sidebar, Map, MapDetails },
    data() {
        return {
            iconActive: undefined
        }
    },
    methods: {
        selectedIcon(e) {
            this.iconActive = e;
        }
    }
    }
</script>

<style lang="scss" scoped>

</style>