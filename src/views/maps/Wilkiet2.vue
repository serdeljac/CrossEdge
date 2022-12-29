<!-- eslint-disable prettier/prettier -->

<template>
    <sidebar />
    <div class="world_map">
        <div class="container wilkiet2">
            <div class="icn order dungeon dungeon-1"          @click="getEventList('evt030')" order="30"><dungeon /></div>            
            <div class="icn order storyevent story-1"         @click="getEventList('evt033')" order="33"><storyevent /></div>
            <div class="icn order town town-1"                @click="getEventList('evt034')" order="34"><wilkiettown /></div>
            <div class="icn order soulevent soulevent-1"      @click="getEventList('evt035')" order="35"><soulevent /></div>
            <div class="icn order soulevent soulevent-2"      @click="getEventList('evt036')" order="36"><soulevent /></div>
            <div class="icn order soulevent soulevent-3"      @click="getEventList('evt037')" order="37"><soulevent /></div>
            <div class="icn order soulevent soulevent-4"      @click="getEventList('evt038')" order="38"><soulevent /></div>
            <div class="icn order storyevent story-2"         @click="getEventList('evt039')" order="39"><storyevent /></div>
            <div class="icn order storyevent story-3"         @click="getEventList('evt040')" order="40"><storyevent /></div>
            <div class="icn order dungeon dungeon-2"          @click="getEventList('evt041')" order="41"><dungeon /></div>  
            <div class="icn order soulevent soulevent-5"      @click="getEventList('')" order="?"><soulevent /></div>
            
            <div class="icn town town-2"                @click="getEventList('icn021')"><wilkiettown /></div>
            <div class="icn tablet tablet-1"            @click="getEventList('icn022')"><tablet /></div>
            <div class="icn tablet tablet-2"            @click="getEventList('icn023')"><tablet /></div>
            <div class="icn tablet tablet-3"            @click="getEventList('icn024')"><tablet /></div>
            <div class="icn tablet tablet-4"            @click="getEventList('icn025')"><tablet /></div>
            <div class="icn dungeon dungeon-3"          @click="getEventList('icn026')"><dungeon /></div>  

            <div class="icn soul soul-1"                @click="getSoulsList('w201')"><soul /></div>
            <div class="icn soul soul-2"                @click="getSoulsList('w202')"><soul /></div>
            <div class="icn soul soul-3"                @click="getSoulsList('w203')"><soul /></div>
            <div class="icn soul soul-4"                @click="getSoulsList('w204')"><soul /></div>
            <div class="icn soul soul-5"                @click="getSoulsList('w205')"><soul /></div>
            <div class="icn soul soul-6"                @click="getSoulsList('w206')"><soul /></div>
            <div class="icn soul soul-7"                @click="getSoulsList('w207')"><soul /></div>
            <div class="icn soul soul-8"                @click="getSoulsList('w208')"><soul /></div>
            <div class="icn soul soul-9"                @click="getSoulsList('w209')"><soul /></div>
            <div class="icn soul soul-10"               @click="getSoulsList('w210')"><soul /></div>
            <div class="icn soul soul-11"               @click="getSoulsList('w211')"><soul /></div>
            <div class="icn soul soul-12"               @click="getSoulsList('w212')"><soul /></div>
            <div class="icn soul soul-13"               @click="getSoulsList('w213')"><soul /></div>
            <div class="icn soul soul-14"               @click="getSoulsList('w214')"><soul /></div>
        </div>
    </div>
    <mapDetails :info="soulList" :mapName="'Wilkiet 2'" />
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
.wilkiet2 {
        background-image: url(@/assets/maps/Wilkiet_2.jpg);
        .icon-dungeon {width: 20px;}
        .icon-soul {width: 18px;}
        .icon-soul-event {width: 70px;}
        .icon-story-event {width: 59px;}
        .icon-tablet {width: 42px;}
        .icon-wilkiet_town {width: 70px;}
    }

    .dungeon-1 {transform: translate3d(980px, 511px, 0px);}
    .story-1 {transform: translate3d(840px, 450px, 0px);}
    .town-1 {transform: translate3d(772px, 410px, 0px);}
    .soulevent-1 {transform: translate3d(612px, 510px, 0px);}
    .soulevent-2 {transform: translate3d(1180px, 607px, 0px);}
    .soulevent-3 {transform: translate3d(329px, 508px, 0px);}
    .soulevent-4 {transform: translate3d(620px, 332px, 0px);}
    .story-2 {transform: translate3d(493px, 479px, 0px);}
    .story-3 {transform: translate3d(273px, 385px, 0px);}
    .dungeon-2 {transform: translate3d(147px, 294px, 0px);}
    .soulevent-5 {transform: translate3d(88px, 308px, 0px);}

    .town-2 {transform: translate3d(242px, 258px, 0px);}
    .tablet-1 {transform: translate3d(668px, 412px, 0px);}
    .tablet-2 {transform: translate3d(406px, 431px, 0px);}
    .tablet-3 {transform: translate3d(275px, 309px, 0px);}
    .tablet-4 {transform: translate3d(282px, 194px, 0px);}
    .dungeon-3 {transform: translate3d(502px, 345px, 0px);}

    .soul-1 {transform: translate3d(1056px, 522px, 0px);}
    .soul-2 {transform: translate3d(687px, 544px, 0px);}
    .soul-3 {transform: translate3d(776px, 279px, 0px);}
    .soul-4 {transform: translate3d(496px, 595px, 0px);}
    .soul-5 {transform: translate3d(407px, 572px, 0px);}
    .soul-6 {transform: translate3d(413px, 262px, 0px);}
    .soul-7 {transform: translate3d(363px, 352px, 0px);}
    .soul-8 {transform: translate3d(186px, 500px, 0px);}
    .soul-9 {transform: translate3d(99px, 411px, 0px);}
    .soul-10 {transform: translate3d(35px, 260px, 0px);}
    .soul-11 {transform: translate3d(853px, 410px, 0px);}
    .soul-12 {transform: translate3d(1111px, 609px, 0px);}
    .soul-13 {transform: translate3d(649px, 493px, 0px);}
    .soul-14 {transform: translate3d(476px, 365px, 0px);}
</style>