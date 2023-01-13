<!-- eslint-disable prettier/prettier -->

<template>
    <main class="map_room"> 
        <sidebar />
        <div class="map_room__interact">
            
            <div class="map_room__display">
                <mapRoomHeader :currentMap="currentMap" :nextMap="nextMap" @changeTab="setActiveTab" />

                <div class="map_room__map" :class="currentMap">

                    <div class="contain events">
                        <div class="icn order dungeon dungeon-1"          @click="getEventList('evt042')" order="42"><dungeon /></div>
                        <div class="icn order storyevent story-1"         @click="getEventList('evt043')" order="43"><storyevent /></div>
                        <div class="icn order soulevent soulevent-1"      @click="getEventList('evt044')" order="44"><soulevent /></div>
                        <div class="icn order soulevent soulevent-2"      @click="getEventList('evt046')" order="46"><soulevent /></div>
                        <div class="icn order storyevent story-2"         @click="getEventList('evt047')" order="47"><storyevent /></div>
                        <div class="icn order soulevent soulevent-3"      @click="getEventList('evt048')" order="48"><soulevent /></div>
                        <div class="icn order soulevent soulevent-4"      @click="getEventList('evt049')" order="49"><soulevent /></div>
                        <div class="icn order storyevent story-3"         @click="getEventList('evt050')" order="50"><storyevent /></div>
                        <div class="icn order dungeon dungeon-2"          @click="getEventList('evt051')" order="51"><dungeon /></div>
                        
                        <div class="icn town ziene town-1"                      @click="getEventList('icn027')"><zeinetown /></div>
                        <div class="icn town ziene town-2"                      @click="getEventList('icn028')"><zeinetown /></div>
                        <div class="icn tablet tablet-1"                  @click="getEventList('icn029')"><tablet /></div>
                        <div class="icn tablet tablet-2"                  @click="getEventList('icn030')"><tablet /></div>
                        <div class="icn tablet tablet-3"                  @click="getEventList('icn031')"><tablet /></div>
                        <div class="icn tablet tablet-4"                  @click="getEventList('icn032')"><tablet /></div>

                        <div class="icn soul soul-1"                      @click="getSoulsList('z201')"><soul /></div>
                        <div class="icn soul soul-2"                      @click="getSoulsList('z202')"><soul /></div>
                        <div class="icn soul soul-3"                      @click="getSoulsList('z203')"><soul /></div>
                        <div class="icn soul soul-4"                      @click="getSoulsList('z204')"><soul /></div>
                        <div class="icn soul soul-5"                      @click="getSoulsList('z205')"><soul /></div>
                        <div class="icn soul soul-6"                      @click="getSoulsList('z206')"><soul /></div>
                        <div class="icn soul soul-7"                      @click="getSoulsList('z207')"><soul /></div>
                        <div class="icn soul soul-8"                      @click="getSoulsList('z208')"><soul /></div>
                        <div class="icn soul soul-9"                      @click="getSoulsList('z209')"><soul /></div>
                        <div class="icn soul soul-10"                     @click="getSoulsList('z210')"><soul /></div>
                        <div class="icn soul soul-11"                     @click="getSoulsList('z211')"><soul /></div>
                        <div class="icn soul soul-12"                     @click="getSoulsList('z212')"><soul /></div>
                        <div class="icn soul soul-13"                     @click="getSoulsList('z213')"><soul /></div>
                        <div class="icn soul soul-14"                     @click="getSoulsList('z214')"><soul /></div>
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
        name: "Map_Zeine2",
        components: { storyevent, soulevent, zeinetown, tablet, dungeon, soul, sidebar, mapRoomHeader, mapDetails },
        data() {
            return {
                dataArray: [],
                currentMap: 'zeine-2',
                nextMap: 'zeine-3',
                tabSelect: '',
                defaultEvt: 'evt042'
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