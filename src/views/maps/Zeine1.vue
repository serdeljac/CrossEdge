<template>
    <div class="icn order storyevent story-1"         @click="getEventList('evt001')" order="1"><storyevent /></div>
    <div class="icn order storyevent story-2"         @click="getEventList('evt002')" order="2"><storyevent /></div>
    <div class="icn order storyevent story-3"         @click="getEventList('evt003')" order="3"><storyevent /></div>
    <div class="icn order town ziene town-1"          @click="getEventList('evt004')" order="4"><zeinetown /></div>
    <div class="icn order storyevent story-4"         @click="getEventList('evt005')" order="5"><storyevent /></div>
    <div class="icn order storyevent story-5"         @click="getEventList('evt006')" order="6"><storyevent /></div>
    <div class="icn order storyevent story-6"         @click="getEventList('evt007')" order="7"><storyevent /></div>
    <div class="icn order dungeon dungeon-1"          @click="getEventList('evt008')" order="8"><dungeon /></div>
    <div class="icn order soulevent soulevent-1"      @click="getEventList('evt063')" order="63"><soulevent /></div>

    <div class="icn town ziene town-2"                @click="getEventList('icn001')"><zeinetown /></div>
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
</template>

<script lang="ts">
import storyevent from '@/components/parts/storyevent.vue';
import soulevent from '@/components/parts/soulevent.vue';
import zeinetown from '@/components/parts/zeine_town.vue';
import tablet from '@/components/parts/tablet.vue';
import dungeon from '@/components/parts/dungeon.vue';
import soul from '@/components/parts/soul.vue';

    export default {
        name: "MapZeine1",
        components: { storyevent, soulevent, zeinetown, tablet, dungeon, soul },
        data() {
            return {
                dataArray: [],
                nextMap: 'wilkiet-1',
                defaultEvt: 'evt001',
            }
        },
        props: {
            'selectedMap': {type: String},
            'soulArray': {type: Object},
            'evetArray': { type: Object },
            'bestArray': { type: Object },
        },

        emits: ['getNextMap', 'tabSelect', 'getData'],

        mounted() {
            this.getEventList(this.defaultEvt);
            this.$emit('getNextMap', this.nextMap);
        },

        methods: {

            getSoulsList(id) {
                this.$emit('tabSelect', 'tab1');
                const x = this.soulArray.data.filter(function(e) {return e.ID == id});
                this.$emit('getData', x);
            },

            getEventList(id) {
                this.$emit('tabSelect', 'tab1');
                const x = this.evetArray.data.filter(function (e) { return e.ID == id });
                this.$emit('getData', x);
            },

            getBestiaryList(id) {
                const x = this.bestArray.data.filter(function (e) { return e.zone == id });
                this.$emit('getData', x);
            },

            setActiveTab(x) {
                this.$emit('tabSelect', x);

                if (x == 'tab1') {
                    this.getEventList(this.defaultEvt);
                }else if (x == 'tab2') {
                    this.getBestiaryList(this.selectedMap);
                } else if (x == 'tab3') {
                    this.getBestiaryList(this.selectedMap);
                }

            },
        },
        updated() {
            this.getBestiaryList(this.selectedMap);
        },
    }
</script>