<!-- eslint-disable prettier/prettier -->

<template>
    <sidebar />
    <div class="world_map">
        <div class="container zeine1">
            <div class="icn order storyevent story-1"         @click="getEventList('evt001')" order="1"><storyevent /></div>
            <div class="icn order storyevent story-2"         @click="getEventList('evt002')" order="2"><storyevent /></div>
            <div class="icn order storyevent story-3"         @click="getEventList('evt003')" order="3"><storyevent /></div>
            <div class="icn order town town-1"                @click="getEventList('evt004')" order="4"><zeinetown /></div>
            <div class="icn order storyevent story-4"         @click="getEventList('evt005')" order="5"><storyevent /></div>
            <div class="icn order storyevent story-5"         @click="getEventList('evt006')" order="6"><storyevent /></div>
            <div class="icn order storyevent story-6"         @click="getEventList('evt007')" order="7"><storyevent /></div>
            <div class="icn order dungeon dungeon-1"          @click="getEventList('evt008')" order="8"><dungeon /></div>
            <div class="icn order soulevent soulevent-1"      @click="getEventList('')"       order="?"><soulevent /></div>

            <div class="icn town town-2"                @click="getEventList('icn001')"><zeinetown /></div>
            <div class="icn tablet tablet-1"            @click="getEventList('icn002')"><tablet /></div>
            <div class="icn tablet tablet-2"            @click="getEventList('icn003')"><tablet /></div>
            <div class="icn tablet tablet-3"            @click="getEventList('icn004')"><tablet /></div>
            <div class="icn tablet tablet-4"            @click="getEventList('icn005')"><tablet /></div>
            <div class="icn tablet tablet-5"            @click="getEventList('icn006')"><tablet /></div>
            <div class="icn dungeon dungeon-2"          @click="getEventList('icn007')"><dungeon /></div>

            <div class="icn soul soul-1"                @click="getSoulsList('z101')"><soul /></div>
            <div class="icn soul soul-2"                @click="getSoulsList('z102')"><soul /></div>
            <div class="icn soul soul-3"                @click="getSoulsList('z103')"><soul /></div>
            <div class="icn soul soul-4"                @click="getSoulsList('z104')"><soul /></div>
            <div class="icn soul soul-5"                @click="getSoulsList('z105')"><soul /></div>
            <div class="icn soul soul-6"                @click="getSoulsList('z106')"><soul /></div>
            <div class="icn soul soul-7"                @click="getSoulsList('z107')"><soul /></div>
            <div class="icn soul soul-8"                @click="getSoulsList('z108')"><soul /></div>
            <div class="icn soul soul-9"                @click="getSoulsList('z109')"><soul /></div>
            <div class="icn soul soul-10"               @click="getSoulsList('z110')"><soul /></div>
        </div>
    </div>
    <mapDetails :info="soulList" :mapName="'Zeine 1'" />
</template>

<script lang="ts">

//Components
import sidebar from '@/components/Sidebar.vue';
import mapDetails from '@/components/MapDetails.vue';

//Icons
import storyevent from '@/components/parts/storyevent.vue';
import soulevent from '@/components/parts/soulevent.vue';
import zeinetown from '@/components/parts/zeine_town.vue';
import tablet from '@/components/parts/tablet.vue';
import dungeon from '@/components/parts/dungeon.vue';
import soul from '@/components/parts/soul.vue';

//Data
import json_soulList from '@/assets/data/souls.json';
import json_eventList from '@/assets/data/events.json';

    export default {
        name: "Map_layout",
    components: { storyevent, soulevent, zeinetown, tablet, dungeon, soul, sidebar, mapDetails },
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
.zeine1 {
        background-image: url(@/assets/maps/Zeine_1.jpg);
        .icon-dungeon {width: 20px;}
        .icon-soul {width: 22px;}
        .icon-soul-event {width: 70px;}
        .icon-story-event {width: 70px;}
        .icon-tablet {width: 42px;}
        .icon-zeine-town {width: 49px;}
    }
    
    .story-1 {transform: translate3d(1013px, 706px, 0px);}
    .story-2 {transform: translate3d(1054px, 654px, 0px);}
    .story-3 {transform: translate3d(1077px, 599px, 0px);}
    .story-4 {transform: translate3d(921px, 429px, 0px);}
    .story-5 {transform: translate3d(680px, 549px, 0px);}
    .story-6 {transform: translate3d(298px, 174px, 0px);}
    .story-7 {transform: translate3d(680px, 549px, 0px);}
    .soulevent-1 {transform: translate3d(511px, 381px, 0px);}
    .town-1 {transform: translate3d(908px, 473px, 0px);}
    .town-2 {transform: translate3d(282px, 283px, 0px);}
    .tablet-1 {transform: translate3d(1153px, 560px, 0px);}
    .tablet-2 {transform: translate3d(646px, 497px, 0px);}
    .tablet-3 {transform: translate3d(759px, 460px, 0px);}
    .tablet-4 {transform: translate3d(837px, 472px, 0px);}
    .tablet-5 {transform: translate3d(690px, 115px, 0px);}
    .dungeon-1 {transform: translate3d(757px, 267px, 0px);}
    .dungeon-2 {transform: translate3d(961px, 330px, 0px);}
    .soul-1 {transform: translate3d(971px, 704px, 0px);}
    .soul-2 {transform: translate3d(1134px, 525px, 0px)}
    .soul-3 {transform: translate3d(567px, 562px, 0px);}
    .soul-4 {transform: translate3d(440px, 434px, 0px);}
    .soul-5 {transform: translate3d(60px, 240px, 0px);}
    .soul-6 {transform: translate3d(606px, 118px, 0px);}
    .soul-7 {transform: translate3d(762px, 600px, 0px);}
    .soul-8 {transform: translate3d(881px, 301px, 0px);}
    .soul-9 {transform: translate3d(392px, 107px, 0px);}
    .soul-10 {transform: translate3d(393px, 654px, 0px);}
</style>