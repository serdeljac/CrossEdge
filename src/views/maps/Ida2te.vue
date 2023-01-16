<!-- eslint-disable prettier/prettier -->

<template>
    <main class="map_room"> 
        <sidebar />
        <div class="map_room__interact">
            
            <div class="map_room__display">

                <mapRoomHeader :currentMap="currentMap" :nextMap="nextMap" @changeTab="setActiveTab" />

                <div class="map_room__map ida-2te">

                        <div class="icn storyevent story-1"               @click="getEventList('evt148')"><storyevent /></div>
                        <div class="icn storyevent story-2"               @click="getEventList('evt149')"><storyevent /></div>
                        <div class="icn storyevent story-3"               @click="getEventList('evt150')"><storyevent /></div>
                        <div class="icn storyevent story-4"               @click="getEventList('evt151')"><storyevent /></div>
                        <div class="icn storyevent story-5"               @click="getEventList('evt152')"><storyevent /></div>
                        <div class="icn storyevent story-6"               @click="getEventList('evt153')"><storyevent /></div>
                        <div class="icn storyevent story-7"               @click="getEventList('evt154')"><storyevent /></div>
                        <div class="icn storyevent story-8"               @click="getEventList('evt155')"><storyevent /></div>
                        <div class="icn storyevent story-9"               @click="getEventList('evt156')"><storyevent /></div>
                        <div class="icn storyevent story-10"              @click="getEventList('evt157')"><storyevent /></div>
                        <div class="icn storyevent story-11"              @click="getEventList('evt158')"><storyevent /></div>
                        <div class="icn storyevent story-12"              @click="getEventList('evt159')"><storyevent /></div>
                        <div class="icn storyevent story-13"              @click="getEventList('evt160')"><storyevent /></div>
                        <div class="icn town ida town-1"                  @click="getEventList('icn080')"><ida2town /></div>

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
import ida2town from '@/components/parts/ida2_town.vue';
import tablet from '@/components/parts/tablet.vue';
import dungeon from '@/components/parts/dungeon.vue';
import soul from '@/components/parts/soul.vue';

//Data
import json_soulList from '@/assets/data/souls.json';
import json_eventList from '@/assets/data/events.json';
import json_bestiaryList from '@/assets/data/bestiary.json';

    export default {
        name: "Map_Ida2_TrueEnd",
    components: { storyevent, soulevent, ida2town, tablet, dungeon, soul, sidebar, mapRoomHeader, mapDetails },
        data() {
            return {
                dataArray: [],
                currentMap: 'ida-2 (True End)',
                nextMap: '',
                tabSelect: '',
                defaultEvt: 'icn080'
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