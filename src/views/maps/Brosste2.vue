<!-- eslint-disable prettier/prettier -->

<template>
    <main class="map_room"> 
        <sidebar />
        <div class="map_room__interact">
            
            <div class="map_room__display">

                <mapRoomHeader :currentMap="currentMap" :nextMap="nextMap" @changeTab="setActiveTab" />

                <div class="map_room__map" :class="currentMap">

                        <div class="icn order dungeon dungeon-1"          @click="getEventList('evt075')" order="75"><dungeon /></div>
                        <div class="icn order storyevent story-1"         @click="getEventList('evt076')" order="76"><storyevent /></div>
                        <div class="icn order soulevent soulevent-1"      @click="getEventList('evt077')" order="77"><soulevent /></div>
                        <div class="icn order soulevent soulevent-2"      @click="getEventList('evt078')" order="78"><soulevent /></div>
                        <div class="icn order soulevent soulevent-3"      @click="getEventList('evt079')" order="79"><soulevent /></div>                        
                        <div class="icn order storyevent story-2"         @click="getEventList('evt080')" order="80"><storyevent /></div>
                        <div class="icn order storyevent story-3"         @click="getEventList('evt081')" order="81"><storyevent /></div>
                        <div class="icn order soulevent soulevent-4"      @click="getEventList('evt082')" order="82"><soulevent /></div>
                        <div class="icn order soulevent soulevent-5"      @click="getEventList('evt083')" order="83"><soulevent /></div>
                        <div class="icn order dungeon dungeon-2"          @click="getEventList('evt084')" order="84"><dungeon /></div>

                        <div class="icn town brosste town-1"              @click="getEventList('icn042')"><brosstetown /></div>
                        <div class="icn town brosste town-2"              @click="getEventList('icn043')"><brosstetown /></div>
                        <div class="icn tablet tablet-1"                  @click="getEventList('icn044')"><tablet /></div>
                        <div class="icn tablet tablet-2"                  @click="getEventList('icn045')"><tablet /></div>
                        <div class="icn tablet tablet-3"                  @click="getEventList('icn046')"><tablet /></div>
                        <div class="icn dungeon dungeon-3"          @click="getEventList('icn047')"><dungeon /></div>

                        <div class="icn soul soul-1"                      @click="getSoulsList('b201')"><soul /></div>
                        <div class="icn soul soul-2"                      @click="getSoulsList('b202')"><soul /></div>
                        <div class="icn soul soul-3"                      @click="getSoulsList('b203')"><soul /></div>
                        <div class="icn soul soul-4"                      @click="getSoulsList('b204')"><soul /></div>
                        <div class="icn soul soul-5"                      @click="getSoulsList('b205')"><soul /></div>
                        <div class="icn soul soul-6"                      @click="getSoulsList('b206')"><soul /></div>
                        <div class="icn soul soul-7"                      @click="getSoulsList('b207')"><soul /></div>
                        <div class="icn soul soul-8"                      @click="getSoulsList('b208')"><soul /></div>
                        <div class="icn soul soul-9"                      @click="getSoulsList('b209')"><soul /></div>
                        <div class="icn soul soul-10"                     @click="getSoulsList('b210')"><soul /></div>
                        <div class="icn soul soul-11"                     @click="getSoulsList('b211')"><soul /></div>
                        <div class="icn soul soul-12"                     @click="getSoulsList('b212')"><soul /></div>
                        <div class="icn soul soul-13"                     @click="getSoulsList('b213')"><soul /></div>
                        <div class="icn soul soul-14"                     @click="getSoulsList('b214')"><soul /></div>
                        <div class="icn soul soul-15"                     @click="getSoulsList('b215')"><soul /></div>
                        <div class="icn soul soul-16"                     @click="getSoulsList('b216')"><soul /></div>

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
                currentMap: 'brosste-2',
                nextMap: 'brosste-3',
                tabSelect: '',
                defaultEvt: 'evt075'
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