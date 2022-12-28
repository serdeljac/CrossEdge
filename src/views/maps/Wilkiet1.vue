<!-- eslint-disable prettier/prettier -->

<template>
    <sidebar />
    <div class="world_map">
        <div class="container wilkiet1">
            <div class="icn order dungeon dungeon-1"          @click="getEventList('evt009')" order="1"><dungeon /></div>            
            <div class="icn order storyevent story-1"         @click="getEventList('evt010')" order="2"><storyevent /></div>
            <div class="icn order storyevent story-2"         @click="getEventList('evt011')" order="3"><storyevent /></div>
            <div class="icn order storyevent story-3"         @click="getEventList('evt012')" order="4"><storyevent /></div>
            <div class="icn order soulevent soulevent-1"      @click="getEventList('evt013')" order="5"><soulevent /></div>
            <div class="icn order soulevent soulevent-2"      @click="getEventList('evt014')" order="6"><soulevent /></div>
            <div class="icn order soulevent soulevent-3"      @click="getEventList('evt015')" order="7"><soulevent /></div>
            <div class="icn order storyevent story-4"         @click="getEventList('evt016')" order="8"><storyevent /></div>
            <div class="icn order soulevent soulevent-4"      @click="getEventList('evt017')" order="9"><soulevent /></div>
            <div class="icn order soulevent soulevent-5"      @click="getEventList('evt018')" order="10"><soulevent /></div>
            <div class="icn order storyevent story-5"         @click="getEventList('evt019')" order="11"><storyevent /></div>
            <div class="icn order soulevent soulevent-6"      @click="getEventList('evt020')" order="12"><soulevent /></div>
            <div class="icn order dungeon dungeon-2"          @click="getEventList('evt021')" order="13"><dungeon /></div>            
            <div class="icn order soulevent soulevent-7"      @click="getEventList('evt022')" order="14"><soulevent /></div>
            <div class="icn order soulevent soulevent-8"      @click="getEventList('evt023')" order="15"><soulevent /></div>
            <div class="icn order soulevent soulevent-9"      @click="getEventList('evt024')" order="16"><soulevent /></div>



            <div class="icn town town-1"                @click="getEventList('')"><wilkiettown /></div>
            <div class="icn town town-2"                @click="getEventList('')"><wilkiettown /></div>
            <div class="icn town town-3"                @click="getEventList('')"><wilkiettown /></div>
            <div class="icn tablet tablet-1"            @click="getEventList('')"><tablet /></div>
            <div class="icn tablet tablet-2"            @click="getEventList('')"><tablet /></div>
            <div class="icn tablet tablet-3"            @click="getEventList('')"><tablet /></div>
            <div class="icn tablet tablet-4"            @click="getEventList('')"><tablet /></div>
            

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
.wilkiet1 {
        background-image: url(@/assets/maps/Wilkiet_1.jpg);
        .icon-dungeon {width: 20px;}
        .icon-soul {width: 22px;}
        .icon-soul-event {width: 70px;}
        .icon-story-event {width: 59px;}
        .icon-tablet {width: 42px;}
        .icon-zeine-town {width: 49px;}
    }

    .dungeon-1 {transform: translate3d(1148px, 199px, 0px);}
    .story-1 {transform: translate3d(1035px, 188px, 0px)}
    .story-2 {transform: translate3d(958px, 389px, 0px);}
</style>