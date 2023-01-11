<!-- eslint-disable prettier/prettier -->

<template>
    <main class="map_room"> 
        <sidebar />
        <div class="map_room__interact">
            
            <div class="map_room__display">
                <mapRoomHeader :currentMap="currentMap" :nextMap="nextMap" @changeTab="setActiveTab" />

                <div class="map_room__map" :class="currentMap">

                    <div class="contain events">
                        <div class="icn order dungeon dungeon-1"          @click="getEventList('evt052')" order="52"><dungeon /></div>
                        <div class="icn order soulevent soulevent-1"      @click="getEventList('evt053')" order="53"><soulevent /></div>
                        <div class="icn order soulevent soulevent-2"      @click="getEventList('evt054')" order="54"><soulevent /></div>
                        <div class="icn order storyevent story-1"         @click="getEventList('evt055')" order="55"><storyevent /></div>
                        <div class="icn order soulevent soulevent-3"      @click="getEventList('evt056')" order="56"><soulevent /></div>
                        <div class="icn order soulevent soulevent-4"      @click="getEventList('evt057')" order="57"><soulevent /></div>
                        <div class="icn order storyevent story-2"         @click="getEventList('evt058')" order="58"><storyevent /></div>
                        <div class="icn order soulevent soulevent-5"      @click="getEventList('evt059')" order="59"><soulevent /></div>
                        <div class="icn order storyevent story-3"         @click="getEventList('evt060')" order="60"><storyevent /></div>
                        <div class="icn order dungeon dungeon-2"          @click="getEventList('evt061')" order="61"><dungeon /></div>
                        
                        <div class="icn town town-1"                      @click="getEventList('icn033')"><zeinetown /></div>
                        <div class="icn town town-2"                      @click="getEventList('icn034')"><zeinetown /></div>
                        <div class="icn tablet tablet-1"                  @click="getEventList('icn035')"><tablet /></div>
                        <div class="icn tablet tablet-2"                  @click="getEventList('icn036')"><tablet /></div>
                        <div class="icn tablet tablet-3"                  @click="getEventList('icn037')"><tablet /></div>

                        <div class="icn soul soul-1"                      @click="getSoulsList('z301')"><soul /></div>
                        <div class="icn soul soul-2"                      @click="getSoulsList('z302')"><soul /></div>
                        <div class="icn soul soul-3"                      @click="getSoulsList('z303')"><soul /></div>
                        <div class="icn soul soul-4"                      @click="getSoulsList('z304')"><soul /></div>
                        <div class="icn soul soul-5"                      @click="getSoulsList('z305')"><soul /></div>
                        <div class="icn soul soul-6"                      @click="getSoulsList('z306')"><soul /></div>
                        <div class="icn soul soul-7"                      @click="getSoulsList('z307')"><soul /></div>
                        <div class="icn soul soul-8"                      @click="getSoulsList('z308')"><soul /></div>
                        <div class="icn soul soul-9"                      @click="getSoulsList('z309')"><soul /></div>
                        <div class="icn soul soul-10"                     @click="getSoulsList('z310')"><soul /></div>
                        <div class="icn soul soul-11"                     @click="getSoulsList('z311')"><soul /></div>
                        <div class="icn soul soul-12"                     @click="getSoulsList('z312')"><soul /></div>
                        <div class="icn soul soul-13"                     @click="getSoulsList('z313')"><soul /></div>
                        <div class="icn soul soul-14"                     @click="getSoulsList('z314')"><soul /></div>
                    </div>
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
import zeinetown from '@/components/parts/zeine_town.vue';
import tablet from '@/components/parts/tablet.vue';
import dungeon from '@/components/parts/dungeon.vue';
import soul from '@/components/parts/soul.vue';

//Data
import json_soulList from '@/assets/data/souls.json';
import json_eventList from '@/assets/data/events.json';
import json_bestiaryList from '@/assets/data/bestiary.json';

    export default {
        name: "Map_Zeine3",
        components: { storyevent, soulevent, zeinetown, tablet, dungeon, soul, sidebar, mapRoomHeader, mapDetails },
        data() {
            return {
                dataArray: [],
                currentMap: 'zeine-3',
                nextMap: 'wilkiet-3',
                tabSelect: '',
                defaultEvt: 'evt052'
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