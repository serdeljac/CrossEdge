<!-- eslint-disable prettier/prettier -->

<template>
    <main class="map_room"> 
        <sidebar />
        <div class="map_room__interact">
            
            <div class="map_room__display">

                <mapRoomHeader :currentMap="currentMap" :nextMap="nextMap" @changeTab="setActiveTab" />

                <div class="map_room__map" :class="currentMap">

                        <div class="icn order dungeon dungeon-1"          @click="getEventList('evt030')" order="30"><dungeon /></div>
                        <div class="icn order storyevent story-1"         @click="getEventList('evt033')" order="33"><storyevent /></div>
                        <div class="icn order town wilkiet town-1"        @click="getEventList('evt034')" order="34"><wilkiettown /></div>
                        <div class="icn order soulevent soulevent-1"      @click="getEventList('evt035')" order="35"><soulevent /></div>
                        <div class="icn order soulevent soulevent-2"      @click="getEventList('evt036')" order="36"><soulevent /></div>
                        <div class="icn order soulevent soulevent-3"      @click="getEventList('evt037')" order="37"><soulevent /></div>                        
                        <div class="icn order soulevent soulevent-4"      @click="getEventList('evt038')" order="38"><soulevent /></div>                        
                        <div class="icn order storyevent story-2"         @click="getEventList('evt039')" order="39"><storyevent /></div>
                        <div class="icn order storyevent story-3"         @click="getEventList('evt040')" order="40"><storyevent /></div>
                        <div class="icn order dungeon dungeon-2"          @click="getEventList('evt041')" order="41"><dungeon /></div>
                        <div class="icn order soulevent soulevent-5"      @click="getEventList('evt100')" order="100"><soulevent /></div>                        

                        <div class="icn town wilkiet town-2"              @click="getEventList('icn021')"><wilkiettown /></div>
                        <div class="icn tablet tablet-1"                  @click="getEventList('icn022')"><tablet /></div>
                        <div class="icn tablet tablet-2"                  @click="getEventList('icn023')"><tablet /></div>
                        <div class="icn tablet tablet-3"                  @click="getEventList('icn024')"><tablet /></div>
                        <div class="icn tablet tablet-4"                  @click="getEventList('icn025')"><tablet /></div>
                        <div class="icn dungeon dungeon-3"                @click="getEventList('icn026')"><dungeon /></div>

                        <div class="icn soul soul-1"                      @click="getSoulsList('w201')"><soul /></div>
                        <div class="icn soul soul-2"                      @click="getSoulsList('w202')"><soul /></div>
                        <div class="icn soul soul-3"                      @click="getSoulsList('w203')"><soul /></div>
                        <div class="icn soul soul-4"                      @click="getSoulsList('w204')"><soul /></div>
                        <div class="icn soul soul-5"                      @click="getSoulsList('w205')"><soul /></div>
                        <div class="icn soul soul-6"                      @click="getSoulsList('w206')"><soul /></div>
                        <div class="icn soul soul-7"                      @click="getSoulsList('w207')"><soul /></div>
                        <div class="icn soul soul-8"                      @click="getSoulsList('w208')"><soul /></div>
                        <div class="icn soul soul-9"                      @click="getSoulsList('w209')"><soul /></div>
                        <div class="icn soul soul-10"                     @click="getSoulsList('w210')"><soul /></div>
                        <div class="icn soul soul-11"                     @click="getSoulsList('w211')"><soul /></div>
                        <div class="icn soul soul-12"                     @click="getSoulsList('w212')"><soul /></div>
                        <div class="icn soul soul-13"                     @click="getSoulsList('w213')"><soul /></div>
                        <div class="icn soul soul-14"                     @click="getSoulsList('w214')"><soul /></div>



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
        name: "Map_Wilkiet2",
    components: { storyevent, soulevent, wilkiettown, tablet, dungeon, soul, sidebar, mapRoomHeader, mapDetails },
        data() {
            return {
                dataArray: [],
                currentMap: 'wilkiet-2',
                nextMap: 'zeine-2',
                tabSelect: '',
                defaultEvt: 'evt030'
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