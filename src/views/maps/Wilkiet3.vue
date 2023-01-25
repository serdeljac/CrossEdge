<template>
    <div class="icn order dungeon dungeon-1"          @click="getEventList('events', 'evt062')" order="62"><dungeon /></div>
    <div class="icn order storyevent story-1"         @click="getEventList('events', 'evt064')" order="64"><storyevent /></div>
    <div class="icn order soulevent soulevent-1"      @click="getEventList('events', 'evt065')" order="65"><soulevent /></div>
    <div class="icn order soulevent soulevent-2"      @click="getEventList('events', 'evt066')" order="66"><soulevent /></div>
    <div class="icn order soulevent soulevent-3"      @click="getEventList('events', 'evt067')" order="67"><soulevent /></div>
    <div class="icn order storyevent story-2"         @click="getEventList('events', 'evt068')" order="68"><storyevent /></div>
    <div class="icn order soulevent soulevent-4"      @click="getEventList('events', 'evt069')" order="69"><soulevent /></div>
    <div class="icn order soulevent soulevent-5"      @click="getEventList('events', 'evt070')" order="70"><soulevent /></div>
    <div class="icn order soulevent soulevent-6"      @click="getEventList('events', 'evt071')" order="71"><soulevent /></div>
    <div class="icn order storyevent story-3"         @click="getEventList('events', 'evt072')" order="72"><storyevent /></div>
    <div class="icn order storyevent story-4"         @click="getEventList('events', 'evt073')" order="73"><storyevent /></div>
    <div class="icn order dungeon dungeon-2"          @click="getEventList('events', 'evt074')" order="74"><dungeon /></div>
    <div class="icn order soulevent soulevent-7"      @click="getEventList('events', 'evt099')" order="99"><soulevent /></div>
    <div class="icn town wilkiet town-1"              @click="getEventList('events', 'icn038')"><wilkiettown /></div>
    <div class="icn town wilkiet town-2"              @click="getEventList('events', 'icn039')"><wilkiettown /></div>
    <div class="icn tablet tablet-1"                  @click="getEventList('events', 'icn040')"><tablet /></div>
    <div class="icn tablet tablet-2"                  @click="getEventList('events', 'icn041')"><tablet /></div>

    <div class="icn soul soul-1"                      @click="getEventList('souls', 'w301')"><soul /></div>
    <div class="icn soul soul-2"                      @click="getEventList('souls', 'w302')"><soul /></div>
    <div class="icn soul soul-3"                      @click="getEventList('souls', 'w303')"><soul /></div>
    <div class="icn soul soul-4"                      @click="getEventList('souls', 'w304')"><soul /></div>
    <div class="icn soul soul-5"                      @click="getEventList('souls', 'w305')"><soul /></div>
    <div class="icn soul soul-6"                      @click="getEventList('souls', 'w306')"><soul /></div>
    <div class="icn soul soul-7"                      @click="getEventList('souls', 'w307')"><soul /></div>
    <div class="icn soul soul-8"                      @click="getEventList('souls', 'w308')"><soul /></div>
    <div class="icn soul soul-9"                      @click="getEventList('souls', 'w309')"><soul /></div>
    <div class="icn soul soul-10"                     @click="getEventList('souls', 'w310')"><soul /></div>
    <div class="icn soul soul-11"                     @click="getEventList('souls', 'w311')"><soul /></div>
    <div class="icn soul soul-12"                     @click="getEventList('souls', 'w312')"><soul /></div>
    <div class="icn soul soul-13"                     @click="getEventList('souls', 'w313')"><soul /></div>
    <div class="icn soul soul-14"                     @click="getEventList('souls', 'w314')"><soul /></div>
</template>

<script lang="ts">
import storyevent from '@/components/parts/storyevent.vue';
import soulevent from '@/components/parts/soulevent.vue';
import wilkiettown from '@/components/parts/wilkiet_town.vue';
import tablet from '@/components/parts/tablet.vue';
import dungeon from '@/components/parts/dungeon.vue';
import soul from '@/components/parts/soul.vue';

export default {
    name: "MapWilkiet3",
    components: { storyevent, soulevent, wilkiettown, tablet, dungeon, soul },
    data() {
        return {
            nextMap: 'brosste-2',
            defaultEvt: 'evt001',
        }
    },
    emits: ['setDefaults', 'evtSelect'],
    mounted() {
        this.$emit('setDefaults', ['events', this.defaultEvt, 'tab1', this.nextMap]);
    },
    methods: {
        getEventList(type, id) {
            this.$emit('evtSelect', [type, id, 'tab1']);
        },
    },
}
</script>