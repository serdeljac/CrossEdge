<!-- eslint-disable prettier/prettier -->

<template>
    <sidebar />
    <div class="world_map">
        <div class="container wilkiet1">
            <div class="icn storyevent story-1"         @click="getEventList('')"><storyevent /></div>
            <div class="icn storyevent story-2"         @click="getEventList('')"><storyevent /></div>
            <div class="icn storyevent story-3"         @click="getEventList('')"><storyevent /></div>
            <div class="icn storyevent story-4"         @click="getEventList('')"><storyevent /></div>
            <div class="icn storyevent story-5"         @click="getEventList('')"><storyevent /></div>
            <div class="icn soulevent soulevent-1"      @click="getEventList('')"><soulevent /></div>
            <div class="icn soulevent soulevent-2"      @click="getEventList('')"><soulevent /></div>
            <div class="icn soulevent soulevent-3"      @click="getEventList('')"><soulevent /></div>
            <div class="icn soulevent soulevent-4"      @click="getEventList('')"><soulevent /></div>
            <div class="icn soulevent soulevent-5"      @click="getEventList('')"><soulevent /></div>
            <div class="icn soulevent soulevent-6"      @click="getEventList('')"><soulevent /></div>
            <div class="icn soulevent soulevent-7"      @click="getEventList('')"><soulevent /></div>
            <div class="icn soulevent soulevent-8"      @click="getEventList('')"><soulevent /></div>
            <div class="icn soulevent soulevent-9"      @click="getEventList('')"><soulevent /></div>
            <div class="icn town town-1"                @click="getEventList('')"><wilkiettown /></div>
            <div class="icn town town-2"                @click="getEventList('')"><wilkiettown /></div>
            <div class="icn town town-3"                @click="getEventList('')"><wilkiettown /></div>
            <div class="icn tablet tablet-1"            @click="getEventList('')"><tablet /></div>
            <div class="icn tablet tablet-2"            @click="getEventList('')"><tablet /></div>
            <div class="icn tablet tablet-3"            @click="getEventList('')"><tablet /></div>
            <div class="icn tablet tablet-4"            @click="getEventList('')"><tablet /></div>
            <div class="icn dungeon dungeon-1"          @click="getEventList('')"><dungeon /></div>
            <div class="icn dungeon dungeon-2"          @click="getEventList('')"><dungeon /></div>
            <div class="icn soul soul-1"                @click="getSoulsList('')"><soul /></div>
            <div class="icn soul soul-2"                @click="getSoulsList('')"><soul /></div>
            <div class="icn soul soul-3"                @click="getSoulsList('')"><soul /></div>
            <div class="icn soul soul-4"                @click="getSoulsList('')"><soul /></div>
            <div class="icn soul soul-5"                @click="getSoulsList('')"><soul /></div>
            <div class="icn soul soul-6"                @click="getSoulsList('')"><soul /></div>
            <div class="icn soul soul-7"                @click="getSoulsList('')"><soul /></div>
            <div class="icn soul soul-8"                @click="getSoulsList('')"><soul /></div>
            <div class="icn soul soul-9"                @click="getSoulsList('')"><soul /></div>
            <div class="icn soul soul-10"               @click="getSoulsList('')"><soul /></div>
            <div class="icn soul soul-11"               @click="getSoulsList('')"><soul /></div>
            <div class="icn soul soul-12"               @click="getSoulsList('')"><soul /></div>
            <div class="icn soul soul-13"               @click="getSoulsList('')"><soul /></div>
            <div class="icn soul soul-14"               @click="getSoulsList('')"><soul /></div>
            <div class="icn soul soul-15"               @click="getSoulsList('')"><soul /></div>
            <div class="icn soul soul-16"               @click="getSoulsList('')"><soul /></div>
        </div>
    </div>
    <mapDetails :info="soulList" :mapName="'Wilkiet 1'" />
</template>

<script lang="ts">

//Components
import sidebar from '@/components/Sidebar.vue';
import mapDetails from '@/components/MapDetails.vue';

//Icons
import storyevent from '@/components/parts/storyevent.vue';
import soulevent from '@/components/parts/soulevent.vue';
import wilkiettown from '@/components/parts/wilkiet_town.vue';
import tablet from '@/components/parts/tablet.vue';
import dungeon from '@/components/parts/dungeon.vue';
import soul from '@/components/parts/soul.vue';

//Data
import json_soulList from '@/assets/data/souls.json';
import json_eventList from '@/assets/data/events.json';

    export default {
        name: "Map_layout",
    components: { storyevent, soulevent, wilkiettown, tablet, dungeon, soul, sidebar, mapDetails },
        data() {
            return {
                soulList: null,
            }
        },
        methods: {
            getSoulsList(id) {
                const getInfo = json_soulList[2];
                const x = getInfo.data.filter(function(e) {return e.ID == id});
                this.soulList = x;
            },
            getEventList(id) {
                const getInfo = json_eventList[2];
                const x = getInfo.data.filter(function (e) { return e.ID == id });
                this.soulList = x;
            }
        },
    }
</script>

<style lang="scss" scoped>
    .wilkiet1 {background-image: url(@/assets/maps/Wilkiet_1.jpg);}

</style>