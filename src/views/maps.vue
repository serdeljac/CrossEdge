<template>
    <div class="map_room size-map">
        <div class="map_room__display">

            <header class="map_room__header">
                <h2 class="map_room__title">{{ static['currentMap'] }}</h2>
                <div class="map_room__nextmap">
                    <span>Next Map: </span>
                    <p>{{ static['nextMap'] }}</p>
                </div>
                <div class="map_room__tabs">
                    <button class="tab tab1" :class="{ 'active': tabSelect == 'tab1' }" @click="setActiveTab('tab1')">Event Info</button>
                    <button class="tab tab2" :class="{ 'active': tabSelect == 'tab2' }" @click="setActiveTab('tab2')">Titles in area</button>
                    <button class="tab tab3" :class="{ 'active': tabSelect == 'tab3' }" @click="setActiveTab('tab3')">Bestiary</button>
                </div>
            </header>

            <div class="map_room__map" :class="static['currentMap']">
                <div class="contain events">
                    <router-view 
                        @setDefaults="appendDefaults"
                        @evtSelect="evtSelect"/>
                </div>
            </div>
        </div>
        <mapDetails
            :defaults="static"
            :tabOpen="tabSelect"
            :info="dataArray"
             />
    </div>
    
</template>

<script lang="ts">

import mapDetails from '@/components/MapDetails.vue';
import json_soulList from '@/assets/data/souls.json';
import json_eventList from '@/assets/data/events.json';
import json_bestiaryList from '@/assets/data/bestiary.json';

    export default {
        name: 'MapRoom',
        props: ['selectedMap'],
        components: { mapDetails },
        data() {
            return {
                static: {
                    'type': '',
                    'event': '',
                    'tab': '',
                    'nextMap': '',
                    'currentMap': '',
                },
                soulArray: {},
                evetArray: {},
                bestArray: {},
                dataArray: {},
                tabSelect: 'tab1'
            }
        },
        beforeMount() {
            this.soulArray = json_soulList[2];
            this.evetArray = json_eventList[2];
            this.bestArray = json_bestiaryList[2];
        },
        methods: {
            setActiveTab(tab) {
                this.tabSelect = tab;
                if (tab == 'tab1') {
                    const a = this.static['event'];
                    const x = this.evetArray.data.filter(function (e) { return e.ID == a });
                    this.dataArray = x;
                } else {
                    const a = this.static['currentMap'];
                    const x = this.bestArray.data.filter(function (e) { return e.zone == a });
                    this.dataArray = x;
                }
            },
            appendDefaults(arr) {
                this.static['type'] = arr[0];
                this.static['event'] = arr[1];
                this.static['tab'] = arr[2];
                this.static['nextMap'] = arr[3];
                this.static['currentMap'] = this.selectedMap;
                this.evtSelect(arr);
            },
            evtSelect(arr) {
                this.tabSelect = arr[2];
                if (arr[0] == 'events') {
                    const x = this.evetArray.data.filter(function (e) { return e.ID == arr[1] });
                    this.dataArray = x;
                } else if (arr[0] == 'souls') {
                    const x = this.soulArray.data.filter(function (e) { return e.ID == arr[1] });
                    this.dataArray = x;
                }
            },
        }
    }
</script>