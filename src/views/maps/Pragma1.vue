<!-- eslint-disable prettier/prettier -->

<template>
    <main class="map_room"> 
        <sidebar />
        <div class="map_room__interact">
            
            <div class="map_room__display">

                <mapRoomHeader :currentMap="currentMap" :nextMap="nextMap" @changeTab="setActiveTab" />

                <div class="map_room__map" :class="currentMap">

                        <div class="icn order dungeon dungeon-1"          @click="getEventList('evt097')" order="97"><dungeon /></div>
                        <div class="icn order storyevent story-1"         @click="getEventList('evt098')" order="98"><storyevent /></div>
                        <div class="icn order soulevent soulevent-1"      @click="getEventList('evt101')" order="101"><soulevent /></div>
                        <div class="icn order storyevent story-2"         @click="getEventList('evt102')" order="102"><storyevent /></div>
                        <div class="icn order soulevent soulevent-2"      @click="getEventList('evt103')" order="103"><soulevent /></div>
                        <div class="icn order storyevent story-3"         @click="getEventList('evt104')" order="104"><storyevent /></div>
                        <div class="icn order soulevent soulevent-3"      @click="getEventList('evt105')" order="105"><soulevent /></div>                                                
                        <div class="icn order dungeon dungeon-2"          @click="getEventList('evt106')" order="106"><dungeon /></div>
                        
                        <div class="icn town pragma town-1"               @click="getEventList('icn055')"><brosstetown /></div>
                        <div class="icn town pragma town-2"               @click="getEventList('icn056')"><brosstetown /></div>
                        <div class="icn tablet tablet-1"                  @click="getEventList('icn057')"><tablet /></div>
                        <div class="icn tablet tablet-2"                  @click="getEventList('icn058')"><tablet /></div>
                        <div class="icn tablet tablet-3"                  @click="getEventList('icn059')"><tablet /></div>
                        <div class="icn tablet tablet-4"                  @click="getEventList('icn060')"><tablet /></div>
                        <div class="icn tablet tablet-5"                  @click="getEventList('icn061')"><tablet /></div>

                        <div class="icn soul soul-1"                      @click="getSoulsList('p101')"><soul /></div>
                        <div class="icn soul soul-2"                      @click="getSoulsList('p102')"><soul /></div>
                        <div class="icn soul soul-3"                      @click="getSoulsList('p103')"><soul /></div>
                        <div class="icn soul soul-4"                      @click="getSoulsList('p104')"><soul /></div>
                        <div class="icn soul soul-5"                      @click="getSoulsList('p105')"><soul /></div>
                        <div class="icn soul soul-6"                      @click="getSoulsList('p106')"><soul /></div>
                        <div class="icn soul soul-7"                      @click="getSoulsList('p107')"><soul /></div>
                        <div class="icn soul soul-8"                      @click="getSoulsList('p108')"><soul /></div>
                        <div class="icn soul soul-9"                      @click="getSoulsList('p109')"><soul /></div>
                        <div class="icn soul soul-10"                     @click="getSoulsList('p110')"><soul /></div>
                        <div class="icn soul soul-11"                     @click="getSoulsList('p111')"><soul /></div>
                        <div class="icn soul soul-12"                     @click="getSoulsList('p112')"><soul /></div>
                        <div class="icn soul soul-13"                     @click="getSoulsList('p113')"><soul /></div>
                        <div class="icn soul soul-14"                     @click="getSoulsList('p114')"><soul /></div>

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
                currentMap: 'pragma-1',
                nextMap: 'pragma-2',
                tabSelect: '',
                defaultEvt: 'evt097'
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