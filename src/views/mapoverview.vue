<template>
    <div class="map-overview size-map">
        <div class="map-overview__display">

            <header class="map-overview__header">
                <h2 class="map-overview__title">{{ properMapName }}</h2>
                <div class="map-overview__nextmap">
                    <span>Next Map: </span>
                    <p @click="chooseMap">{{ properNextMapName }}</p>
                </div>
                <div class="map-overview__tabs">
                    <button class="tab tab1" :class="{ 'active': tabSelect == 'tab1' }" @click="setActiveTab('tab1')">Event Info</button>
                    <button class="tab tab2" :class="{ 'active': tabSelect == 'tab2' }" @click="setActiveTab('tab2')">Titles in area</button>
                    <button class="tab tab3" :class="{ 'active': tabSelect == 'tab3' }" @click="setActiveTab('tab3')">Bestiary</button>
                </div>
            </header>

            <div class="map-overview__map" :class="static['currentMap']">
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
import ida2te from '../components/maps/Ida2.vue';

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
                tabSelect: 'tab1',
                names: {
                    'zeine-1': 'Zeine 1',
                    'zeine-2': 'Zeine 2',
                    'zeine-3': 'Zeine 3',
                    'wilkiet-1': 'Wilkiet 1',
                    'wilkiet-2': 'Wilkiet 2',
                    'wilkiet-3': 'Wilkiet 3',
                    'brosste-1': 'Brosste 1',
                    'brosste-2': 'Brosste 2',
                    'brosste-3': 'Brosste 3',
                    'pragma-1': 'Pragma 1',
                    'pragma-2': 'Pragma 2',
                    'pragma-3': 'Pragma 3',
                    'ida-1': 'Ida 1',
                    'ida-1te': 'Ida 1 (True End)',
                    'ida-2': 'Ida 2',
                    'ida-3': 'Ida 3',
                }
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
            fixname(curMap, nxtMap) {
                this.properMapName = curMap;
                this.properNextMapName = nxtMap;
                
            }
        },
    }
</script>