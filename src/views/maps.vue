<template>
    <div class="map_room size-map">
        <div class="map_room__display">
        <mapRoomHeader :currentMap="selectedMap" :nextMap="nextMap" @selectTab="selectTab" />
            <div class="map_room__map" :class="selectedMap">  
                <div class="contain events">
                    <router-view 
                        :soulArray="soulArray"
                        :evetArray="evetArray"
                        :bestArray="bestArray"
                        @getNextMap="appendNext"
                        @tabSelect="selectTab" 
                        @getData="fetchData"/>
                </div>
            </div>
        </div>
        <mapDetails :info="dataArray" :mapName="selectedMap" :tabOpen="activeTab" />
    </div>
    
</template>

<script lang="ts">

//Components
import mapRoomHeader from '@/components/MapRoomHeader.vue';
import mapDetails from '@/components/MapDetails.vue';

//Data
import json_soulList from '@/assets/data/souls.json';
import json_eventList from '@/assets/data/events.json';
import json_bestiaryList from '@/assets/data/bestiary.json';

    export default {
        name: 'MapRoom',
        props: ['selectedMap'],
        components: { mapRoomHeader, mapDetails },
        data() {
            return {
                soulArray: undefined,
                evetArray: undefined,
                bestArray: undefined,
                nextMap: undefined,
                activeTab: '',
                dataArray: []
            }
        },
        beforeMount() {
            this.soulArray = json_soulList[2];
            this.evetArray = json_eventList[2];
            this.bestArray = json_bestiaryList[2];
        },
        methods: {
            selectTab(tab) {
                this.activeTab = tab;
            },
            appendNext(map) {
                this.nextMap = map;
            },
            fetchData(arr) {
                this.dataArray = arr;
            }
        }
    }
</script>