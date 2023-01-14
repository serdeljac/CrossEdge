<!-- eslint-disable prettier/prettier -->

<template>
    <main class="map_room"> 
        <sidebar />
        <div class="map_room__interact">
            
            <div class="map_room__display">

                <mapRoomHeader :currentMap="currentMap" :nextMap="nextMap" @changeTab="setActiveTab" />

                <div class="map_room__map" :class="currentMap">

                        <div class="icn order dungeon dungeon-1"          @click="getEventList('evt085')" order="85"><dungeon /></div>
                        <div class="icn order storyevent story-1"         @click="getEventList('evt086')" order="86"><storyevent /></div>
                        <div class="icn order storyevent story-2"         @click="getEventList('evt087')" order="87"><storyevent /></div>
                        <div class="icn order soulevent soulevent-1"      @click="getEventList('evt088')" order="88"><soulevent /></div>
                        <div class="icn order soulevent soulevent-2"      @click="getEventList('evt089')" order="89"><soulevent /></div>
                        <div class="icn order soulevent soulevent-3"      @click="getEventList('evt090')" order="90"><soulevent /></div>                                                
                        <div class="icn order storyevent story-3"         @click="getEventList('evt091')" order="91"><storyevent /></div>
                        <div class="icn order soulevent soulevent-4"      @click="getEventList('evt092')" order="92"><soulevent /></div>
                        <div class="icn order soulevent soulevent-5"      @click="getEventList('evt093')" order="93"><soulevent /></div>
                        <div class="icn order storyevent story-4"         @click="getEventList('evt094')" order="94"><storyevent /></div>
                        <div class="icn order dungeon dungeon-2"          @click="getEventList('evt095')" order="95"><dungeon /></div>
                        <div class="icn order soulevent soulevent-6"      @click="getEventList('evt096')" order="96"><soulevent /></div>
                        <div class="icn town brosste town-1"              @click="getEventList('icn048')"><brosstetown /></div>
                        <div class="icn town brosste town-2"              @click="getEventList('icn049')"><brosstetown /></div>
                        <div class="icn tablet tablet-1"                  @click="getEventList('icn050')"><tablet /></div>
                        <div class="icn tablet tablet-2"                  @click="getEventList('icn051')"><tablet /></div>
                        <div class="icn tablet tablet-3"                  @click="getEventList('icn052')"><tablet /></div>
                        <div class="icn tablet tablet-4"                  @click="getEventList('icn053')"><tablet /></div>
                        <div class="icn tablet tablet-5"                  @click="getEventList('icn054')"><tablet /></div>

                        <div class="icn soul soul-1"                      @click="getSoulsList('b301')"><soul /></div>
                        <div class="icn soul soul-2"                      @click="getSoulsList('b302')"><soul /></div>
                        <div class="icn soul soul-3"                      @click="getSoulsList('b303')"><soul /></div>
                        <div class="icn soul soul-4"                      @click="getSoulsList('b304')"><soul /></div>
                        <div class="icn soul soul-5"                      @click="getSoulsList('b305')"><soul /></div>
                        <div class="icn soul soul-6"                      @click="getSoulsList('b306')"><soul /></div>
                        <div class="icn soul soul-7"                      @click="getSoulsList('b307')"><soul /></div>
                        <div class="icn soul soul-8"                      @click="getSoulsList('b308')"><soul /></div>
                        <div class="icn soul soul-9"                      @click="getSoulsList('b309')"><soul /></div>
                        <div class="icn soul soul-10"                     @click="getSoulsList('b310')"><soul /></div>
                        <div class="icn soul soul-11"                     @click="getSoulsList('b311')"><soul /></div>
                        <div class="icn soul soul-12"                     @click="getSoulsList('b312')"><soul /></div>
                        <div class="icn soul soul-13"                     @click="getSoulsList('b313')"><soul /></div>
                        <div class="icn soul soul-14"                     @click="getSoulsList('b314')"><soul /></div>

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
import brosstetown from '@/components/parts/brosste_town.vue';
import tablet from '@/components/parts/tablet.vue';
import dungeon from '@/components/parts/dungeon.vue';
import soul from '@/components/parts/soul.vue';

//Data
import json_soulList from '@/assets/data/souls.json';
import json_eventList from '@/assets/data/events.json';
import json_bestiaryList from '@/assets/data/bestiary.json';

    export default {
        name: "Map_Brosste1",
    components: { storyevent, soulevent, brosstetown, tablet, dungeon, soul, sidebar, mapRoomHeader, mapDetails },
        data() {
            return {
                dataArray: [],
                currentMap: 'brosste-3',
                nextMap: 'pragma-1',
                tabSelect: '',
                defaultEvt: 'evt085'
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