<!-- eslint-disable prettier/prettier -->

<template>
    <main class="map_room"> 
        <sidebar />
        <div class="map_room__interact">
            
            <div class="map_room__display">
                <header class="map_room__header">
                        <div class="map_room__title">
                            <h2>{{ currentMap }}</h2>
                        </div>
                        <div class="map_room__nextmap">
                            <span>Next Map: </span>
                            <p>{{ nextMap }}</p>
                        </div>
                        <div class="map_room__tabs">
                            <button class="tab tab1" v-bind:class="{ 'active': tabSelect == 'tab1' }" @click="setActiveTab('tab1')">Event Info</button>
                            <button class="tab tab2" v-bind:class="{ 'active': tabSelect == 'tab2' }" @click="setActiveTab('tab2')">Titles in area</button>
                            <button class="tab tab3" v-bind:class="{ 'active': tabSelect == 'tab3' }" @click="setActiveTab('tab3')">Bestiary</button>
                        </div>
                </header>

                <div class="map_room__map" :class="currentMap">

                    <div class="contain events">
                        <div class="icn order storyevent story-1"         @click="getEventList('evt001')" order="1"><storyevent /></div>
                        <div class="icn order storyevent story-2"         @click="getEventList('evt002')" order="2"><storyevent /></div>
                        <div class="icn order storyevent story-3"         @click="getEventList('evt003')" order="3"><storyevent /></div>
                        <div class="icn order town town-1"                @click="getEventList('evt004')" order="4"><zeinetown /></div>
                        <div class="icn order storyevent story-4"         @click="getEventList('evt005')" order="5"><storyevent /></div>
                        <div class="icn order storyevent story-5"         @click="getEventList('evt006')" order="6"><storyevent /></div>
                        <div class="icn order storyevent story-6"         @click="getEventList('evt007')" order="7"><storyevent /></div>
                        <div class="icn order dungeon dungeon-1"          @click="getEventList('evt008')" order="8"><dungeon /></div>
                        <div class="icn order soulevent soulevent-1"      @click="getEventList('evt063')" order="63"><soulevent /></div>

                        <div class="icn town town-2"                      @click="getEventList('icn001')"><zeinetown /></div>
                        <div class="icn tablet tablet-1"                  @click="getEventList('icn002')"><tablet /></div>
                        <div class="icn tablet tablet-2"                  @click="getEventList('icn003')"><tablet /></div>
                        <div class="icn tablet tablet-3"                  @click="getEventList('icn004')"><tablet /></div>
                        <div class="icn tablet tablet-4"                  @click="getEventList('icn005')"><tablet /></div>
                        <div class="icn tablet tablet-5"                  @click="getEventList('icn006')"><tablet /></div>
                        <div class="icn dungeon dungeon-2"                @click="getEventList('icn007')"><dungeon /></div>

                        <div class="icn soul soul-1"                      @click="getSoulsList('z101')"><soul /></div>
                        <div class="icn soul soul-2"                      @click="getSoulsList('z102')"><soul /></div>
                        <div class="icn soul soul-3"                      @click="getSoulsList('z103')"><soul /></div>
                        <div class="icn soul soul-4"                      @click="getSoulsList('z104')"><soul /></div>
                        <div class="icn soul soul-5"                      @click="getSoulsList('z105')"><soul /></div>
                        <div class="icn soul soul-6"                      @click="getSoulsList('z106')"><soul /></div>
                        <div class="icn soul soul-7"                      @click="getSoulsList('z107')"><soul /></div>
                        <div class="icn soul soul-8"                      @click="getSoulsList('z108')"><soul /></div>
                        <div class="icn soul soul-9"                      @click="getSoulsList('z109')"><soul /></div>
                        <div class="icn soul soul-10"                     @click="getSoulsList('z110')"><soul /></div>
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
        name: "Map_Zeine1",
        components: { storyevent, soulevent, zeinetown, tablet, dungeon, soul, sidebar, mapDetails },
        data() {
            return {
                dataArray: null,
                currentMap: 'zeine-1',
                nextMap: 'wilkiet-1',
                tabSelect: 'tab1',
                defaultEvt: 'evt001'
            }
        },
        mounted() {
            window.addEventListener("resize", this.adjustIcons);
            this.getEventList('evt001');
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