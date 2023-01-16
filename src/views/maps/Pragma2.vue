<!-- eslint-disable prettier/prettier -->

<template>
    <main class="map_room"> 
        <sidebar />
        <div class="map_room__interact">
            
            <div class="map_room__display">

                <mapRoomHeader :currentMap="currentMap" :nextMap="nextMap" @changeTab="setActiveTab" />

                <div class="map_room__map" :class="currentMap">

                        <div class="icn order dungeon dungeon-1"          @click="getEventList('evt107')" order="107"><dungeon /></div>
                        <div class="icn order soulevent soulevent-1"      @click="getEventList('evt108')" order="108"><soulevent /></div>
                        <div class="icn order soulevent soulevent-2"      @click="getEventList('evt109')" order="109"><soulevent /></div>
                        <div class="icn order soulevent soulevent-3"      @click="getEventList('evt110')" order="110"><soulevent /></div>
                        <div class="icn order soulevent soulevent-4"      @click="getEventList('evt111')" order="111"><soulevent /></div>
                        <div class="icn order storyevent story-1"         @click="getEventList('evt112')" order="112"><storyevent /></div>
                        <div class="icn order soulevent soulevent-5"      @click="getEventList('evt113')" order="113"><soulevent /></div>
                        <div class="icn order soulevent soulevent-6"      @click="getEventList('evt114')" order="114"><soulevent /></div>
                        <div class="icn order soulevent soulevent-7"      @click="getEventList('evt115')" order="115"><soulevent /></div>
                        <div class="icn order storyevent story-2"         @click="getEventList('evt116')" order="116"><storyevent /></div>
                        <div class="icn order storyevent story-3"         @click="getEventList('evt117')" order="117"><storyevent /></div>
                        <div class="icn order dungeon dungeon-2"          @click="getEventList('evt118')" order="118"><dungeon /></div>
                        
                        <div class="icn town pragma town-1"               @click="getEventList('icn062')"><pragmatown /></div>
                        <div class="icn town pragma town-2"               @click="getEventList('icn063')"><pragmatown /></div>
                        <div class="icn tablet tablet-1"                  @click="getEventList('icn064')"><tablet /></div>
                        <div class="icn tablet tablet-2"                  @click="getEventList('icn065')"><tablet /></div>
                        <div class="icn tablet tablet-3"                  @click="getEventList('icn066')"><tablet /></div>
                        <div class="icn dungeon dungeon-3"                @click="getEventList('icn067')"><dungeon /></div>

                        <div class="icn soul soul-1"                      @click="getSoulsList('p201')"><soul /></div>
                        <div class="icn soul soul-2"                      @click="getSoulsList('p202')"><soul /></div>
                        <div class="icn soul soul-3"                      @click="getSoulsList('p203')"><soul /></div>
                        <div class="icn soul soul-4"                      @click="getSoulsList('p204')"><soul /></div>
                        <div class="icn soul soul-5"                      @click="getSoulsList('p205')"><soul /></div>
                        <div class="icn soul soul-6"                      @click="getSoulsList('p206')"><soul /></div>
                        <div class="icn soul soul-7"                      @click="getSoulsList('p207')"><soul /></div>
                        <div class="icn soul soul-8"                      @click="getSoulsList('p208')"><soul /></div>
                        <div class="icn soul soul-9"                      @click="getSoulsList('p209')"><soul /></div>
                        <div class="icn soul soul-10"                     @click="getSoulsList('p210')"><soul /></div>
                        <div class="icn soul soul-11"                     @click="getSoulsList('p211')"><soul /></div>
                        <div class="icn soul soul-12"                     @click="getSoulsList('p212')"><soul /></div>
                        <div class="icn soul soul-13"                     @click="getSoulsList('p213')"><soul /></div>
                        <div class="icn soul soul-14"                     @click="getSoulsList('p214')"><soul /></div>

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
        name: "Map_Pragma2",
    components: { storyevent, soulevent, pragmatown, tablet, dungeon, soul, sidebar, mapRoomHeader, mapDetails },
        data() {
            return {
                dataArray: [],
                currentMap: 'pragma-2',
                nextMap: 'pragma-3',
                tabSelect: '',
                defaultEvt: 'evt107'
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