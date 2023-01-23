<!-- eslint-disable prettier/prettier -->

<template>
    <main class="map_room"> 
        
        <div class="map_room__interact">
            
            <div class="map_room__display">

                <mapRoomHeader :currentMap="currentMap" :nextMap="nextMap" @changeTab="setActiveTab" />

                <div class="map_room__map" :class="currentMap">

                        <div class="icn order dungeon dungeon-1"          @click="getEventList('evt022')" order="22"><dungeon /></div>
                        <div class="icn order soulevent soulevent-1"      @click="getEventList('evt023')" order="23"><soulevent /></div>
                        <div class="icn order storyevent story-1"         @click="getEventList('evt024')" order="24"><storyevent /></div>
                        <div class="icn order soulevent soulevent-2"      @click="getEventList('evt025')" order="25"><soulevent /></div>
                        <div class="icn order soulevent soulevent-3"      @click="getEventList('evt026')" order="26"><soulevent /></div>                        
                        <div class="icn order soulevent soulevent-4"      @click="getEventList('evt027')" order="27"><soulevent /></div>
                        <div class="icn order storyevent story-2"         @click="getEventList('evt028')" order="28"><storyevent /></div>
                        <div class="icn order dungeon dungeon-2"          @click="getEventList('evt029')" order="29"><dungeon /></div>

                        <div class="icn town brosste town-1"              @click="getEventList('icn016')"><brosstetown /></div>
                        <div class="icn town brosste town-2"              @click="getEventList('icn017')"><brosstetown /></div>
                        <div class="icn tablet tablet-1"                  @click="getEventList('icn018')"><tablet /></div>
                        <div class="icn tablet tablet-2"                  @click="getEventList('icn019')"><tablet /></div>
                        <div class="icn tablet tablet-3"                  @click="getEventList('icn020')"><tablet /></div>

                        <div class="icn soul soul-1"                      @click="getSoulsList('b101')"><soul /></div>
                        <div class="icn soul soul-2"                      @click="getSoulsList('b102')"><soul /></div>
                        <div class="icn soul soul-3"                      @click="getSoulsList('b103')"><soul /></div>
                        <div class="icn soul soul-4"                      @click="getSoulsList('b104')"><soul /></div>
                        <div class="icn soul soul-5"                      @click="getSoulsList('b105')"><soul /></div>
                        <div class="icn soul soul-6"                      @click="getSoulsList('b106')"><soul /></div>
                        <div class="icn soul soul-7"                      @click="getSoulsList('b107')"><soul /></div>
                        <div class="icn soul soul-8"                      @click="getSoulsList('b108')"><soul /></div>
                        <div class="icn soul soul-9"                      @click="getSoulsList('b109')"><soul /></div>
                        <div class="icn soul soul-10"                     @click="getSoulsList('b110')"><soul /></div>
                        <div class="icn soul soul-11"                     @click="getSoulsList('b111')"><soul /></div>
                        <div class="icn soul soul-12"                     @click="getSoulsList('b112')"><soul /></div>
                        <div class="icn soul soul-13"                     @click="getSoulsList('b113')"><soul /></div>
                        <div class="icn soul soul-14"                     @click="getSoulsList('b114')"><soul /></div>

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
                currentMap: 'brosste-1',
                nextMap: 'wilkiet-2',
                tabSelect: '',
                defaultEvt: 'evt022'
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