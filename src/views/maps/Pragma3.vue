<!-- eslint-disable prettier/prettier -->

<template>
    <main class="map_room"> 
        <sidebar />
        <div class="map_room__interact">
            
            <div class="map_room__display">

                <mapRoomHeader :currentMap="currentMap" :nextMap="nextMap" @changeTab="setActiveTab" />

                <div class="map_room__map" :class="currentMap">

                        <div class="icn order dungeon dungeon-1"          @click="getEventList('evt119')" order="119"><dungeon /></div>
                        <div class="icn order soulevent soulevent-1"      @click="getEventList('evt120')" order="120"><soulevent /></div>
                        <div class="icn order soulevent soulevent-2"      @click="getEventList('evt121')" order="121"><soulevent /></div>
                        <div class="icn order soulevent soulevent-3"      @click="getEventList('evt122')" order="122"><soulevent /></div>
                        <div class="icn order storyevent story-1"         @click="getEventList('evt123')" order="123"><storyevent /></div>
                        <div class="icn order soulevent soulevent-4"      @click="getEventList('evt124')" order="124"><soulevent /></div>
                        <div class="icn order soulevent soulevent-5"      @click="getEventList('evt125')" order="125"><soulevent /></div>
                        <div class="icn order storyevent story-2"         @click="getEventList('evt126')" order="126"><storyevent /></div>
                        <div class="icn order storyevent story-3"         @click="getEventList('evt127')" order="127"><storyevent /></div>
                        <div class="icn order soulevent soulevent-6"      @click="getEventList('evt128')" order="128"><soulevent /></div>
                        <div class="icn order soulevent soulevent-7"      @click="getEventList('evt129')" order="129"><soulevent /></div>
                        <div class="icn order dungeon dungeon-2"          @click="getEventList('evt130')" order="130"><dungeon /></div>
                        <div class="icn order soulevent soulevent-8"      @click="getEventList('evt131')" order="131"><soulevent /></div>
                        <div class="icn town pragma town-1"               @click="getEventList('icn068')"><pragmatown /></div>
                        <div class="icn town pragma town-2"               @click="getEventList('icn069')"><pragmatown /></div>
                        <div class="icn tablet tablet-1"                  @click="getEventList('icn070')"><tablet /></div>
                        <div class="icn tablet tablet-2"                  @click="getEventList('icn071')"><tablet /></div>
                        <div class="icn tablet tablet-3"                  @click="getEventList('icn072')"><tablet /></div>

                        <div class="icn soul soul-1"                      @click="getSoulsList('p301')"><soul /></div>
                        <div class="icn soul soul-2"                      @click="getSoulsList('p302')"><soul /></div>
                        <div class="icn soul soul-3"                      @click="getSoulsList('p303')"><soul /></div>
                        <div class="icn soul soul-4"                      @click="getSoulsList('p304')"><soul /></div>
                        <div class="icn soul soul-5"                      @click="getSoulsList('p305')"><soul /></div>
                        <div class="icn soul soul-6"                      @click="getSoulsList('p306')"><soul /></div>
                        <div class="icn soul soul-7"                      @click="getSoulsList('p307')"><soul /></div>
                        <div class="icn soul soul-8"                      @click="getSoulsList('p308')"><soul /></div>
                        <div class="icn soul soul-9"                      @click="getSoulsList('p309')"><soul /></div>
                        <div class="icn soul soul-10"                     @click="getSoulsList('p310')"><soul /></div>
                        <div class="icn soul soul-11"                     @click="getSoulsList('p311')"><soul /></div>
                        <div class="icn soul soul-12"                     @click="getSoulsList('p312')"><soul /></div>
                        <div class="icn soul soul-13"                     @click="getSoulsList('p313')"><soul /></div>
                        <div class="icn soul soul-14"                     @click="getSoulsList('p314')"><soul /></div>
                        <div class="icn soul soul-15"                     @click="getSoulsList('p315')"><soul /></div>

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
import pragmatown from '@/components/parts/pragma_town.vue';
import tablet from '@/components/parts/tablet.vue';
import dungeon from '@/components/parts/dungeon.vue';
import soul from '@/components/parts/soul.vue';

//Data
import json_soulList from '@/assets/data/souls.json';
import json_eventList from '@/assets/data/events.json';
import json_bestiaryList from '@/assets/data/bestiary.json';

    export default {
        name: "Map_Pragma3",
    components: { storyevent, soulevent, pragmatown, tablet, dungeon, soul, sidebar, mapRoomHeader, mapDetails },
        data() {
            return {
                dataArray: [],
                currentMap: 'pragma-3',
                nextMap: 'ida-1',
                tabSelect: '',
                defaultEvt: 'evt119'
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