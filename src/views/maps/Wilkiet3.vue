<!-- eslint-disable prettier/prettier -->

<template>
    <main class="map_room"> 
        <sidebar />
        <div class="map_room__interact">
            
            <div class="map_room__display">

                <mapRoomHeader :currentMap="currentMap" :nextMap="nextMap" @changeTab="setActiveTab" />

                <div class="map_room__map" :class="currentMap">

                        <div class="icn order dungeon dungeon-1"          @click="getEventList('evt062')" order="62"><dungeon /></div>
                        <div class="icn order storyevent story-1"         @click="getEventList('evt064')" order="64"><storyevent /></div>
                        <div class="icn order soulevent soulevent-1"      @click="getEventList('evt065')" order="65"><soulevent /></div>
                        <div class="icn order soulevent soulevent-2"      @click="getEventList('evt066')" order="66"><soulevent /></div>
                        <div class="icn order soulevent soulevent-3"      @click="getEventList('evt067')" order="67"><soulevent /></div>                        
                        <div class="icn order storyevent story-2"         @click="getEventList('evt068')" order="68"><storyevent /></div>
                        <div class="icn order soulevent soulevent-4"      @click="getEventList('evt069')" order="69"><soulevent /></div>
                        <div class="icn order soulevent soulevent-5"      @click="getEventList('evt070')" order="70"><soulevent /></div>
                        <div class="icn order soulevent soulevent-6"      @click="getEventList('evt071')" order="71"><soulevent /></div>                   
                        <div class="icn order storyevent story-3"         @click="getEventList('evt072')" order="72"><storyevent /></div>
                        <div class="icn order storyevent story-4"         @click="getEventList('evt073')" order="73"><storyevent /></div>
                        <div class="icn order dungeon dungeon-2"          @click="getEventList('evt074')" order="74"><dungeon /></div>
                        <div class="icn order soulevent soulevent-7"      @click="getEventList('evt099')" order="99"><soulevent /></div>                        

                        <div class="icn town wilkiet town-1"              @click="getEventList('icn038')"><wilkiettown /></div>
                        <div class="icn town wilkiet town-2"              @click="getEventList('icn039')"><wilkiettown /></div>
                        <div class="icn tablet tablet-1"                  @click="getEventList('icn040')"><tablet /></div>
                        <div class="icn tablet tablet-2"                  @click="getEventList('icn041')"><tablet /></div>

                        <div class="icn soul soul-1"                      @click="getSoulsList('w301')"><soul /></div>
                        <div class="icn soul soul-2"                      @click="getSoulsList('w302')"><soul /></div>
                        <div class="icn soul soul-3"                      @click="getSoulsList('w303')"><soul /></div>
                        <div class="icn soul soul-4"                      @click="getSoulsList('w304')"><soul /></div>
                        <div class="icn soul soul-5"                      @click="getSoulsList('w305')"><soul /></div>
                        <div class="icn soul soul-6"                      @click="getSoulsList('w306')"><soul /></div>
                        <div class="icn soul soul-7"                      @click="getSoulsList('w307')"><soul /></div>
                        <div class="icn soul soul-8"                      @click="getSoulsList('w308')"><soul /></div>
                        <div class="icn soul soul-9"                      @click="getSoulsList('w309')"><soul /></div>
                        <div class="icn soul soul-10"                     @click="getSoulsList('w310')"><soul /></div>
                        <div class="icn soul soul-11"                     @click="getSoulsList('w311')"><soul /></div>
                        <div class="icn soul soul-12"                     @click="getSoulsList('w312')"><soul /></div>
                        <div class="icn soul soul-13"                     @click="getSoulsList('w313')"><soul /></div>
                        <div class="icn soul soul-14"                     @click="getSoulsList('w314')"><soul /></div>

                </div>

            </div>
            <mapDetails :info="dataArray" :mapName="currentMap" :tabOpen="tabSelect"/>
        </div>
    </main>

</template>

<script lang="ts">

//Components
import sidebar from '@/components/Sidebar.vue';
import mapRoomHeader from '@/components/MapRoomHeader.vue';
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
import json_bestiaryList from '@/assets/data/bestiary.json';

    export default {
        name: "Map_Wilkiet3",
    components: { storyevent, soulevent, wilkiettown, tablet, dungeon, soul, sidebar, mapRoomHeader, mapDetails },
        data() {
            return {
                dataArray: [],
                currentMap: 'wilkiet-3',
                nextMap: 'brosste-2',
                tabSelect: '',
                defaultEvt: 'evt062'
            }
        },
        mounted() {
            window.addEventListener("resize", this.adjustIcons);
            this.getEventList(this.defaultEvt);
        },
        methods: {
            getSoulsList(id) {
                this.tabSelect = 'tab1';
                const getInfo = json_soulList[2];
                const x = getInfo.data.filter(function(e) {return e.ID == id});
                this.dataArray = x;
            },
            getEventList(id) {
                this.tabSelect = 'tab1';
                const getInfo = json_eventList[2];
                const x = getInfo.data.filter(function (e) { return e.ID == id });
                this.dataArray = x;
            },
            getBestiaryList(id) {
                const getInfo = json_bestiaryList[2];
                const x = getInfo.data.filter(function (e) { return e.zone == id });
                this.dataArray = x;
            },
            setActiveTab(x) {
                this.tabSelect = x;

                if (x == 'tab1') {
                    this.getEventList(this.defaultEvt);
                }else if (x == 'tab2') {
                    this.getBestiaryList(this.currentMap);
                } else if (x == 'tab3') {
                    this.getBestiaryList(this.currentMap);
                }

            },
        },
    }
</script>

<style lang="scss" scoped>

</style>