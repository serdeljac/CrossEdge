<!-- eslint-disable prettier/prettier -->

<template>
    <sidebar />
    <div class="world_map">
        <div class="container wilkiet1">
            <div class="icn order dungeon dungeon-1"          @click="getEventList('evt009')" order="9"><dungeon /></div>            
            <div class="icn order storyevent story-1"         @click="getEventList('evt010')" order="10"><storyevent /></div>
            <div class="icn order storyevent story-2"         @click="getEventList('evt011')" order="11"><storyevent /></div>
            <div class="icn order storyevent story-3"         @click="getEventList('evt012')" order="12"><storyevent /></div>
            <div class="icn order soulevent soulevent-1"      @click="getEventList('evt013')" order="13"><soulevent /></div>
            <div class="icn order soulevent soulevent-2"      @click="getEventList('evt014')" order="14"><soulevent /></div>
            <div class="icn order soulevent soulevent-3"      @click="getEventList('evt015')" order="15"><soulevent /></div>
            <div class="icn order storyevent story-4"         @click="getEventList('evt016')" order="16"><storyevent /></div>
            <div class="icn order storyevent story-5"         @click="getEventList('evt017')" order="17"><storyevent /></div>
            <div class="icn order soulevent soulevent-4"      @click="getEventList('evt018')" order="18"><soulevent /></div>
            <div class="icn order storyevent story-6"         @click="getEventList('evt019')" order="19"><storyevent /></div>
            <div class="icn order soulevent soulevent-5"      @click="getEventList('evt020')" order="20"><soulevent /></div>
            <div class="icn order dungeon dungeon-2"          @click="getEventList('evt021')" order="21"><dungeon /></div>  
            <div class="icn order soulevent soulevent-6"      @click="getEventList('evt031')" order="31"><soulevent /></div>
            <div class="icn order soulevent soulevent-7"      @click="getEventList('evt032')" order="32"><soulevent /></div>
            <div class="icn order soulevent soulevent-8"      @click="getEventList('')" order="?"><soulevent /></div>

            <div class="icn town town-1"                @click="getEventList('icn008')"><wilkiettown /></div>
            <div class="icn town town-2"                @click="getEventList('icn009')"><wilkiettown /></div>
            <div class="icn town town-3"                @click="getEventList('icn010')"><wilkiettown /></div>
            <div class="icn tablet tablet-1"            @click="getEventList('icn011')"><tablet /></div>
            <div class="icn tablet tablet-2"            @click="getEventList('icn012')"><tablet /></div>
            <div class="icn tablet tablet-3"            @click="getEventList('icn013')"><tablet /></div>
            <div class="icn tablet tablet-4"            @click="getEventList('icn014')"><tablet /></div>
            <div class="icn tablet tablet-5"            @click="getEventList('icn015')"><tablet /></div>

            <div class="icn soul soul-1"                @click="getSoulsList('w101')"><soul /></div>
            <div class="icn soul soul-2"                @click="getSoulsList('w102')"><soul /></div>
            <div class="icn soul soul-3"                @click="getSoulsList('w103')"><soul /></div>
            <div class="icn soul soul-4"                @click="getSoulsList('w104')"><soul /></div>
            <div class="icn soul soul-5"                @click="getSoulsList('w105')"><soul /></div>
            <div class="icn soul soul-6"                @click="getSoulsList('w106')"><soul /></div>
            <div class="icn soul soul-7"                @click="getSoulsList('w107')"><soul /></div>
            <div class="icn soul soul-8"                @click="getSoulsList('w108')"><soul /></div>
            <div class="icn soul soul-9"                @click="getSoulsList('w109')"><soul /></div>
            <div class="icn soul soul-10"               @click="getSoulsList('w110')"><soul /></div>
            <div class="icn soul soul-11"               @click="getSoulsList('w111')"><soul /></div>
            <div class="icn soul soul-12"               @click="getSoulsList('w112')"><soul /></div>
            <div class="icn soul soul-13"               @click="getSoulsList('w113')"><soul /></div>
            <div class="icn soul soul-14"               @click="getSoulsList('w114')"><soul /></div>
            <div class="icn soul soul-15"               @click="getSoulsList('w115')"><soul /></div>
            <div class="icn soul soul-16"               @click="getSoulsList('w116')"><soul /></div>
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
        .icon-soul {width: 18px;}
        .icon-soul-event {width: 70px;}
        .icon-story-event {width: 59px;}
        .icon-tablet {width: 42px;}
        .icon-wilkiet_town {width: 70px;}
    }

    .dungeon-1 {transform: translate3d(1148px, 199px, 0px);}
    .story-1 {transform: translate3d(1035px, 188px, 0px)}
    .story-2 {transform: translate3d(946px, 387px, 0px);}
    .story-3 {transform: translate3d(763px, 345px, 0px);}
    .soulevent-1 {transform: translate3d(1199px, 325px, 0px);}
    .soulevent-2 {transform: translate3d(1044px, 243px, 0px);}
    .soulevent-3 {transform: translate3d(703px, 540px, 0px);}
    .story-4 {transform: translate3d(412px, 549px, 0px);}
    .story-5 {transform: translate3d(385px, 393px, 0px);}
    .soulevent-4 {transform: translate3d(566px, 357px, 0px);}
    .story-6 {transform: translate3d(531px, 215px, 0px);}
    .soulevent-5 {transform: translate3d(723px, 123px, 0px);}
    .dungeon-2 {transform: translate3d(652px, 766px, 0px);}
    .soulevent-6 {transform: translate3d(371px, 265px, 0px);}
    .soulevent-7 {transform: translate3d(179px, 284px, 0px);}
    .soulevent-8 {transform: translate3d(900px, 305px, 0px);}
    .town-1 {transform: translate3d(934px, 249px, 0px);}
    .town-2 {transform: translate3d(620px, 479px, 0px);}
    .town-3 {transform: translate3d(395px, 194px, 0px);}
    .tablet-1 {transform: translate3d(720px, 463px, 0px);}
    .tablet-2 {transform: translate3d(439px, 508px, 0px);}
    .tablet-3 {transform: translate3d(400px, 257px, 0px);}
    .tablet-4 {transform: translate3d(426px, 695px, 0px);}
    .tablet-5 {transform: translate3d(847px, 618px, 0px);}

    .soul-1 {transform: translate3d(842px, 280px, 0px);}
    .soul-2 {transform: translate3d(1120px, 343px, 0px);}
    .soul-3 {transform: translate3d(1004px, 426px, 0px);}
    .soul-4 {transform: translate3d(681px, 451px, 0px);}
    .soul-5 {transform: translate3d(373px, 603px, 0px);}
    .soul-6 {transform: translate3d(332px, 401px, 0px);}
    .soul-7 {transform: translate3d(526px, 352px, 0px);}
    .soul-8 {transform: translate3d(858px, 42px, 0px);}
    .soul-9 {transform: translate3d(588px, 37px, 0px);}
    .soul-10 {transform: translate3d(333px, 114px, 0px);}
    .soul-11 {transform: translate3d(49px, 293px, 0px);}
    .soul-12 {transform: translate3d(143px, 571px, 0px);}
    .soul-13 {transform: translate3d(566px, 546px, 0px);}
    .soul-14 {transform: translate3d(865px, 106px, 0px);}
    .soul-15 {transform: translate3d(214px, 430px, 0px);}
    .soul-16 {transform: translate3d(571px, 261px, 0px);}
</style>