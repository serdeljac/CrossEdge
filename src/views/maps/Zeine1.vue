<!-- eslint-disable prettier/prettier -->

<template>
    <div class="map_room"> 
        <sidebar />
        <div class="map_room__interact">
            
            <div class="map_room__display">
                <header class="map_room__header">
                    <div>
                        <h2>{{ currentMap }}</h2>
                        <span>NEXT: </span>
                        <p>{{ nextMap }}</p>
                    </div>  
                    <div>
                        <button class="tab tab1" v-bind:class="{ 'active': tabSelect == 'tab1' }" @click="setActiveTab('tab1')">Events & Souls</button>
                        <button class="tab tab2" v-bind:class="{ 'active': tabSelect == 'tab2' }" @click="setActiveTab('tab2')">Area Collections</button>
                    </div>
                </header>

                <div class="map_room__map" :class="currentMap">

                    <div class="contain events" v-if="tabSelect == 'tab1'">
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
                    <div class="bestiary" v-if="tabSelect == 'tab2'">
                    </div>
                </div>
            </div>

            <mapDetails :info="dataArray" :mapName="currentMap" />
        </div>
        
    </div>

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
            }
        },
        mounted() {
            window.addEventListener("resize", this.adjustIcons);
            this.getEventList('evt001');
        },
        methods: {
            getSoulsList(id) {
                const getInfo = json_soulList[2];
                const x = getInfo.data.filter(function(e) {return e.ID == id});
                this.dataArray = x;
            },
            getEventList(id) {
                const getInfo = json_eventList[2];
                const x = getInfo.data.filter(function (e) { return e.ID == id });
                this.dataArray = x;
            },
            getBestiaryList(id) {
                const getInfo = json_bestiaryList[2];
                const x = getInfo.data.filter(function (e) { return e.zone == id });
                console.log(getInfo);
                this.dataArray = x;
            },
            setActiveTab(x) {
                this.tabSelect = x;

                if (x == 'tab2') {
                    this.getBestiaryList(this.currentMap);
                } else {
                    this.getEventList('evt001');
                }
                
            },
        },
    }
</script>

<style lang="scss" scoped>
.zeine-1 {
        background-image: url(@/assets/maps/Zeine_1.jpg);
        .icon-dungeon {width: 25px;}
        .icon-soul {width: 19px;}
        .icon-soul-event {width: 65px;}
        .icon-story-event {width: 57px;}
        .icon-tablet {width: 37px;}
        .icon-zeine-town {width: 45px;}
    }
    
    .story-1 {transform: translate3d(884px, 561px, 0px);}
    .story-2 {transform: translate3d(910px, 511px, 0px);}
    .story-3 {transform: translate3d(926px, 462px, 0px);}
    .story-4 {transform: translate3d(805px, 318px, 0px);}
    .story-5 {transform: translate3d(595px, 418px, 0px);}
    .story-6 {transform: translate3d(271px, 103px, 0px);}
    .story-7 {transform: translate3d(680px, 549px, 0px);}
    .soulevent-1 {transform: translate3d(447px, 272px, 0px);}
    .town-1 {transform: translate3d(789px, 354px, 0px);}
    .town-2 {transform: translate3d(259px, 195px, 0px);}
    .tablet-1 {transform: translate3d(995px, 425px, 0px);}
    .tablet-2 {transform: translate3d(570px, 370px, 0px)}
    .tablet-3 {transform: translate3d(660px, 338px, 0px)}
    .tablet-4 {transform: translate3d(731px, 351px, 0px);}
    .tablet-5 {transform: translate3d(605px, 51px, 0px);}
    .dungeon-1 {transform: translate3d(660px, 178px, 0px);}
    .dungeon-2 {transform: translate3d(832px, 231px, 0px);}
    .soul-1 {transform: translate3d(845px, 553px, 0px);}
    .soul-2 {transform: translate3d(980px, 394px, 0px);}
    .soul-3 {transform: translate3d(497px, 427px, 0px);}
    .soul-4 {transform: translate3d(396px, 321px, 0px);}
    .soul-5 {transform: translate3d(69px, 166px, 0px);}
    .soul-6 {transform: translate3d(537px, 55px, 0px);}
    .soul-7 {transform: translate3d(664px, 458px, 0px);}
    .soul-8 {transform: translate3d(769px, 207px, 0px);}
    .soul-9 {transform: translate3d(355px, 47px, 0px);}
    .soul-10 {transform: translate3d(355px, 511px, 0px);}
</style>