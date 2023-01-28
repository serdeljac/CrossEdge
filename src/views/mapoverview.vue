<template>
    <div class="map-overview size-map">
        <div class="map-overview__display">

            <header class="map-overview__header">
                <h2 class="map-overview__title">{{ properMapName }}</h2>
                <div class="map-overview__nextmap">
                    <span>Next Map: </span>
                    <p @click="chooseMap">{{ properMapName }}</p>
                </div>
                <div class="map-overview__tabs">
                    <button class="tab tab1" :class="{ 'active': tabSelect == 'tab1' }" @click="setActiveTab('tab1')">Event Info</button>
                    <button class="tab tab2" :class="{ 'active': tabSelect == 'tab2' }" @click="setActiveTab('tab2')">Titles in area</button>
                    <button class="tab tab3" :class="{ 'active': tabSelect == 'tab3' }" @click="setActiveTab('tab3')">Bestiary</button>
                </div>
            </header>

            <div class="map-overview__map" :class="properClassName">
                <div class="contain events">
                    <zeine1 v-if="selectedMap=='zeine-1'" @setDefaults="appendDefaults" @evtSelect="evtSelect" />
                    <zeine2 v-if="selectedMap=='zeine-2'" @setDefaults="appendDefaults" @evtSelect="evtSelect" />
                    <zeine3 v-if="selectedMap=='zeine-3'" @setDefaults="appendDefaults" @evtSelect="evtSelect" />
                    <wilkiet1 v-if="selectedMap=='wilkiet-1'" @setDefaults="appendDefaults" @evtSelect="evtSelect" />
                    <wilkiet2 v-if="selectedMap=='wilkiet-2'" @setDefaults="appendDefaults" @evtSelect="evtSelect" />
                    <wilkiet3 v-if="selectedMap=='wilkiet-3'" @setDefaults="appendDefaults" @evtSelect="evtSelect" />
                    <brosste1 v-if="selectedMap=='brosste-1'" @setDefaults="appendDefaults" @evtSelect="evtSelect" />
                    <brosste2 v-if="selectedMap=='brosste-2'" @setDefaults="appendDefaults" @evtSelect="evtSelect" />
                    <brosste3 v-if="selectedMap=='brosste-3'" @setDefaults="appendDefaults" @evtSelect="evtSelect" />
                    <pragma1 v-if="selectedMap=='pragma-1'" @setDefaults="appendDefaults" @evtSelect="evtSelect" />
                    <pragma2 v-if="selectedMap=='pragma-2'" @setDefaults="appendDefaults" @evtSelect="evtSelect" />
                    <pragma3 v-if="selectedMap=='pragma-3'" @setDefaults="appendDefaults" @evtSelect="evtSelect" />
                    <ida1 v-if="selectedMap=='ida-1'" @setDefaults="appendDefaults" @evtSelect="evtSelect" />
                    <ida1te v-if="selectedMap=='ida-1 (True End)'" @setDefaults="appendDefaults" @evtSelect="evtSelect" />
                    <ida2te v-if="selectedMap=='ida-2 (True End)'" @setDefaults="appendDefaults" @evtSelect="evtSelect" />
                </div>
            </div>
        </div>
        <mapDetails
            :defaults="static"
            :tabOpen="tabSelect"
            :info="dataArray"/>
    </div>
</template>

<script lang="ts">
    import mapDetails from '@/components/mapoverview-details.vue';
    import json_soulList from '@/assets/data/souls.json';
    import json_eventList from '@/assets/data/events.json';
    import json_bestiaryList from '@/assets/data/bestiary.json';

    import zeine1 from '../components/maps/Zeine1.vue';
    import zeine2 from '../components/maps/Zeine2.vue';
    import zeine3 from '../components/maps/Zeine3.vue';
    import wilkiet1 from '../components/maps/Wilkiet1.vue';
    import wilkiet2 from '../components/maps/Wilkiet2.vue';
    import wilkiet3 from '../components/maps/Wilkiet3.vue';
    import brosste1 from '../components/maps/Brosste1.vue';
    import brosste2 from '../components/maps/Brosste2.vue';
    import brosste3 from '../components/maps/Brosste3.vue';
    import pragma1 from '../components/maps/Pragma1.vue';
    import pragma2 from '../components/maps/Pragma2.vue';
    import pragma3 from '../components/maps/Pragma3.vue';
    import ida1 from '../components/maps/Ida1.vue';
import ida1te from '../components/maps/Ida1te.vue';
import ida2te from '../components/maps/Ida2te.vue';

    export default {
        name: 'MapRoom',
        props: ['selectedMap'],
        components: { mapDetails, zeine1, zeine2, zeine3, wilkiet1, wilkiet2, wilkiet3, brosste1, brosste2, brosste3, pragma1, pragma2, pragma3, ida1, ida1te, ida2te },
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
                routerNext: '',
                properMapName: '',
                properNextMapName: '',
                properClassName: '',
                tabSelect: 'tab1',
            }
        },
        beforeMount() {
            this.soulArray = json_soulList[2];
            this.evetArray = json_eventList[2];
            this.bestArray = json_bestiaryList[2];
            this.$emit('mapOverview', true);
            
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
                this.fixname(this.selectedMap, arr[3]);
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
            chooseMap() {
                this.$router.push({ name: this.static['nextMap'], params: { selectedMap: this.static['nextMap'] } });
            },
            fixname(map) {
                if (map == 'zeine-1') {
                    this.properMapName = 'Zeine 1';
                    this.properClassName = map;
                } else if (map == 'zeine-2') {
                    this.properMapName = 'Zeine 2';
                    this.properClassName = map;
                } else if (map == 'zeine-3') {
                    this.properMapName = 'Zeine 3';
                    this.properClassName = map;
                } else if (map == 'brosste-1') {
                    this.properMapName = 'Brosste 1';
                    this.properClassName = map;
                } else if (map == 'brosste-2') {
                    this.properMapName = 'Brosste 2';
                    this.properClassName = map;
                } else if (map == 'brosste-3') {
                    this.properMapName = 'Brosste 3';
                    this.properClassName = map;
                } else if (map == 'wilkiet-1') {
                    this.properMapName = 'Wilkiet 1';
                    this.properClassName = map;
                } else if (map == 'wilkiet-2') {
                    this.properMapName = 'Wilkiet 2';
                    this.properClassName = map;
                } else if (map == 'wilkiet-3') {
                    this.properMapName = 'Wilkiet 3';
                    this.properClassName = map;
                } else if (map == 'pragma-1') {
                    this.properMapName = 'Pragma 1';
                    this.properClassName = map;
                } else if (map == 'pragma-2') {
                    this.properMapName = 'Pragma 2';
                    this.properClassName = map;
                } else if (map == 'pragma-3') {
                    this.properMapName = 'Pragma 3';
                    this.properClassName = map;
                } else if (map == 'ida-1') {
                    this.properMapName = 'Ida 1';
                    this.properClassName = map;
                } else if (map == 'ida-1 (True End)') {
                    this.properMapName = 'Ida 1 (True End)';
                    this.properClassName = 'ida1te';
                } else if (map == 'ida-2 (True End)') {
                    this.properMapName = 'Ida 2 (True End)';
                    this.properClassName = 'ida2te';
                } else if (map == 'ida-3 (True End)') {
                    this.properMapName = 'Ida 3 (True End)';
                    this.properClassName = 'ida3te';
                }
                
            }
        },
    }
</script>