<template>
    <header class="map_room__header">
        <h2 class="map_room__title">{{ currentMap }}</h2>
        <div class="map_room__nextmap">
            <span>Next Map: </span>
            <p>{{ nextMap }}</p>
        </div>
        <div class="map_room__tabs">
            <button class="tab tab1" v-bind:class="{ 'active': tabSelect == 'tab1' }" @click="setActiveTab('tab1')">Event Info</button>
            <button class="tab tab2" v-bind:class="{ 'active': tabSelect == 'tab2' }" @click="setActiveTab('tab2')">Titles in area</button>
            <button class="tab tab3" v-bind:class="{ 'active': tabSelect == 'tab3' }" @click="setActiveTab('tab3')">Bestiary</button>
        </div>
    </header>
</template>

<script lang="ts">
    export default {
        name: "Map_Room_Headers",
        data() {
            return {
                tabSelect: 'tab1',
            }
        },
        props:
        {
            'currentMap': { type: String },
            'nextMap': { type: String },
        },
        beforeMount() {
            this.$emit('selectTab', this.tabSelect);
        },
        methods: {
            setActiveTab(val) {
                this.tabSelect = val;
                this.$emit('selectTab', val);
            }
        }
    }
</script>