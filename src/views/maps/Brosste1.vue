<!-- eslint-disable prettier/prettier -->

<template>
    <sidebar />
    <div class="world_map">
        <div class="container brosste1">
            <div class="icn order dungeon dungeon-1"          @click="getEventList('evt022')" order="22"><dungeon /></div>            
            <div class="icn order soulevent soulevent-1"      @click="getEventList('evt023')" order="23"><soulevent /></div>
            <div class="icn order storyevent story-1"         @click="getEventList('evt024')" order="24"><storyevent /></div>
            <div class="icn order soulevent soulevent-2"      @click="getEventList('evt025')" order="25"><soulevent /></div>
            <div class="icn order soulevent soulevent-3"      @click="getEventList('evt026')" order="26"><soulevent /></div>
            <div class="icn order soulevent soulevent-4"      @click="getEventList('evt027')" order="27"><soulevent /></div>
            <div class="icn order storyevent story-2"         @click="getEventList('evt028')" order="28"><storyevent /></div>
            <div class="icn order dungeon dungeon-2"          @click="getEventList('evt029')" order="29"><dungeon /></div>  

            <div class="icn town town-1"                @click="getEventList('icn016')"><brosstetown /></div>
            <div class="icn town town-2"                @click="getEventList('icn017')"><brosstetown /></div>
            <div class="icn tablet tablet-1"            @click="getEventList('icn018')"><tablet /></div>
            <div class="icn tablet tablet-2"            @click="getEventList('icn019')"><tablet /></div>
            <div class="icn tablet tablet-3"            @click="getEventList('icn020')"><tablet /></div>

            <div class="icn soul soul-1"                @click="getSoulsList('b101')"><soul /></div>
            <div class="icn soul soul-2"                @click="getSoulsList('b102')"><soul /></div>
            <div class="icn soul soul-3"                @click="getSoulsList('b103')"><soul /></div>
            <div class="icn soul soul-4"                @click="getSoulsList('b104')"><soul /></div>
            <div class="icn soul soul-5"                @click="getSoulsList('b105')"><soul /></div>
            <div class="icn soul soul-6"                @click="getSoulsList('b106')"><soul /></div>
            <div class="icn soul soul-7"                @click="getSoulsList('b107')"><soul /></div>
            <div class="icn soul soul-8"                @click="getSoulsList('b108')"><soul /></div>
            <div class="icn soul soul-9"                @click="getSoulsList('b109')"><soul /></div>
            <div class="icn soul soul-10"               @click="getSoulsList('b110')"><soul /></div>
            <div class="icn soul soul-11"               @click="getSoulsList('b111')"><soul /></div>
            <div class="icn soul soul-12"               @click="getSoulsList('b112')"><soul /></div>
            <div class="icn soul soul-13"               @click="getSoulsList('b113')"><soul /></div>
            <div class="icn soul soul-14"               @click="getSoulsList('b114')"><soul /></div>
        </div>
    </div>
    <mapDetails :info="soulList" :mapName="'Brosste 1'" />
</template>

<script lang="ts">

//Components
import sidebar from '@/components/Sidebar.vue';
import mapDetails from '@/components/MapDetails.vue';

//Icons
import storyevent from '@/components/parts/storyevent.vue';
import soulevent from '@/components/parts/soulevent.vue';
import brosstetown from '@/components/parts/brosste_town.vue';
import tablet from '@/components/parts/tablet.vue';
import dungeon from '@/components/parts/dungeon.vue';
import soul from '@/components/parts/soul.vue';

//Data
import json_soulList from '@/assets/data/souls.json';
import json_eventList from '@/assets/data/events.json';

    export default {
        name: "Map_layout",
    components: { storyevent, soulevent, brosstetown, tablet, dungeon, soul, sidebar, mapDetails },
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
.brosste1 {
        background-image: url(@/assets/maps/Brosste_1.jpg);
        background-size: auto 100%;
        .icon-dungeon {width: 20px;}
        .icon-soul {width: 22px;}
        .icon-soul-event {width: 70px;}
        .icon-story-event {width: 59px;}
        .icon-tablet {width: 42px;}
        .icon-wilkiet_town {width: 70px;}
    }

    .dungeon-1 {transform: translate3d(401px, 142px, 0px);}
    .soulevent-1 {transform: translate3d(555px, 30px, 0px);}
    .story-1 {transform: translate3d(550px, 217px, 0px);}
    .soulevent-2 {transform: translate3d(441px, 351px, 0px);}
    .soulevent-3 {transform: translate3d(678px, 654px, 0px);}
    .soulevent-4 {transform: translate3d(646px, 808px, 0px);}
    .story-2 {transform: translate3d(689px, 101px, 0px);}
    .dungeon-2 {transform: translate3d(885px, 162px, 0px);}
    .town-1 {transform: translate3d(593px, 133px, 0px);}
    .town-2 {transform: translate3d(578px, 656px, 0px);}
    .tablet-1 {transform: translate3d(511px, 245px, 0px);}
    .tablet-2 {transform: translate3d(655px, 219px, 0px);}
    .tablet-3 {transform: translate3d(765px, 15px, 0px);}

    .soul-1 {transform: translate3d(286px, 143px, 0px);}
    .soul-2 {transform: translate3d(685px, 17px, 0px);}
    .soul-3 {transform: translate3d(377px, 460px, 0px);}
    .soul-4 {transform: translate3d(730px, 377px, 0px);}
    .soul-5 {transform: translate3d(845px, 775px, 0px);}
    .soul-6 {transform: translate3d(451px, 748px, 0px);}
    .soul-7 {transform: translate3d(699px, 277px, 0px)}
    .soul-8 {transform: translate3d(792px, 263px, 0px);}
    .soul-9 {transform: translate3d(792px, 95px, 0px);}
    .soul-10 {transform: translate3d(950px, 137px, 0px);}
    .soul-11 {transform: translate3d(529px, 189px, 0px);}
    .soul-12 {transform: translate3d(675px, 368px, 0px);}
    .soul-13 {transform: translate3d(703px, 777px, 0px);}
    .soul-14 {transform: translate3d(488px, 382px, 0px);}
</style>