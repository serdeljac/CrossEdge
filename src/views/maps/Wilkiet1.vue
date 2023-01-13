<!-- eslint-disable prettier/prettier -->

<template>
    <main class="map_room"> 
        <sidebar />
        <div class="map_room__interact">
            
            <div class="map_room__display">

                <mapRoomHeader :currentMap="currentMap" :nextMap="nextMap" @changeTab="setActiveTab" />

                <div class="map_room__map" :class="currentMap">


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
                        <div class="icn order soulevent soulevent-8"      @click="getEventList('evt045')" order="45"><soulevent /></div>

                        <div class="icn town wilkiet town-1"              @click="getEventList('icn008')"><wilkiettown /></div>
                        <div class="icn town wilkiet town-2"              @click="getEventList('icn009')"><wilkiettown /></div>
                        <div class="icn town wilkiet town-3"              @click="getEventList('icn010')"><wilkiettown /></div>
                        <div class="icn tablet tablet-1"                  @click="getEventList('icn011')"><tablet /></div>
                        <div class="icn tablet tablet-2"                  @click="getEventList('icn012')"><tablet /></div>
                        <div class="icn tablet tablet-3"                  @click="getEventList('icn013')"><tablet /></div>
                        <div class="icn tablet tablet-4"                  @click="getEventList('icn014')"><tablet /></div>
                        <div class="icn tablet tablet-5"                  @click="getEventList('icn015')"><tablet /></div>

                        <div class="icn soul soul-1"                      @click="getSoulsList('w101')"><soul /></div>
                        <div class="icn soul soul-2"                      @click="getSoulsList('w102')"><soul /></div>
                        <div class="icn soul soul-3"                      @click="getSoulsList('w103')"><soul /></div>
                        <div class="icn soul soul-4"                      @click="getSoulsList('w104')"><soul /></div>
                        <div class="icn soul soul-5"                      @click="getSoulsList('w105')"><soul /></div>
                        <div class="icn soul soul-6"                      @click="getSoulsList('w106')"><soul /></div>
                        <div class="icn soul soul-7"                      @click="getSoulsList('w107')"><soul /></div>
                        <div class="icn soul soul-8"                      @click="getSoulsList('w108')"><soul /></div>
                        <div class="icn soul soul-9"                      @click="getSoulsList('w109')"><soul /></div>
                        <div class="icn soul soul-10"                     @click="getSoulsList('w110')"><soul /></div>
                        <div class="icn soul soul-11"                     @click="getSoulsList('w111')"><soul /></div>
                        <div class="icn soul soul-12"                     @click="getSoulsList('w112')"><soul /></div>
                        <div class="icn soul soul-13"                     @click="getSoulsList('w113')"><soul /></div>
                        <div class="icn soul soul-14"                     @click="getSoulsList('w114')"><soul /></div>
                        <div class="icn soul soul-15"                     @click="getSoulsList('w115')"><soul /></div>
                        <div class="icn soul soul-16"                     @click="getSoulsList('w116')"><soul /></div>


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
        name: "Map_Wilkiet1",
    components: { storyevent, soulevent, wilkiettown, tablet, dungeon, soul, sidebar, mapRoomHeader, mapDetails },
        data() {
            return {
                dataArray: [],
                currentMap: 'wilkiet-1',
                nextMap: 'brosste-1',
                tabSelect: '',
                defaultEvt: 'evt009'
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