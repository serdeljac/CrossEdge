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
                        <div class="icn order soulevent soulevent-4"      @click="getEventList('evt124')" order="124"><soulevent /></div>
                        <div class="icn order storyevent story-1"         @click="getEventList('evt123')" order="123"><storyevent /></div>
                        <div class="icn order storyevent story-2"         @click="getEventList('evt126')" order="126"><storyevent /></div>
                        <div class="icn order storyevent story-3"         @click="getEventList('evt127')" order="127"><storyevent /></div>
                        <div class="icn order storyevent story-4"         @click="getEventList('evt127')" order="127"><storyevent /></div>
                        
                        
                        <div class="icn town ida town-1"                  @click="getEventList('icn073')"><idatown /></div>
                        <div class="icn town ida town-2"                  @click="getEventList('icn074')"><idatown /></div>
                        <div class="icn tablet tablet-1"                  @click="getEventList('icn075')"><tablet /></div>
                        <div class="icn tablet tablet-2"                  @click="getEventList('icn076')"><tablet /></div>
                        <div class="icn tablet tablet-3"                  @click="getEventList('icn077')"><tablet /></div>
                        <div class="icn tablet tablet-4"                  @click="getEventList('icn078')"><tablet /></div>
                        <div class="icn dungeon dungeon-2"                @click="getEventList('icn079')"><dungeon /></div>

                        <div class="icn soul soul-1"                      @click="getSoulsList('i101')"><soul /></div>
                        <div class="icn soul soul-2"                      @click="getSoulsList('i102')"><soul /></div>
                        <div class="icn soul soul-3"                      @click="getSoulsList('i103')"><soul /></div>
                        <div class="icn soul soul-4"                      @click="getSoulsList('i104')"><soul /></div>
                        <div class="icn soul soul-5"                      @click="getSoulsList('i105')"><soul /></div>
                        <div class="icn soul soul-6"                      @click="getSoulsList('i106')"><soul /></div>
                        <div class="icn soul soul-7"                      @click="getSoulsList('i107')"><soul /></div>
                        <div class="icn soul soul-8"                      @click="getSoulsList('i108')"><soul /></div>
                        <div class="icn soul soul-9"                      @click="getSoulsList('i109')"><soul /></div>
                        <div class="icn soul soul-10"                     @click="getSoulsList('i110')"><soul /></div>
                        <div class="icn soul soul-11"                     @click="getSoulsList('i111')"><soul /></div>
                        <div class="icn soul soul-12"                     @click="getSoulsList('i112')"><soul /></div>

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
import idatown from '@/components/parts/ida_town.vue';
import tablet from '@/components/parts/tablet.vue';
import dungeon from '@/components/parts/dungeon.vue';
import soul from '@/components/parts/soul.vue';

//Data
import json_soulList from '@/assets/data/souls.json';
import json_eventList from '@/assets/data/events.json';
import json_bestiaryList from '@/assets/data/bestiary.json';

    export default {
        name: "Map_Ida1",
    components: { storyevent, soulevent, idatown, tablet, dungeon, soul, sidebar, mapRoomHeader, mapDetails },
        data() {
            return {
                dataArray: [],
                currentMap: 'ida-1',
                nextMap: '',
                tabSelect: '',
                defaultEvt: 'evt132'
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