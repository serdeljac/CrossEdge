<template>
    <div class="icn order dungeon dungeon-1"          @click="getEventList('events', 'evt085')" order="85"><dungeon /></div>
    <div class="icn order storyevent story-1"         @click="getEventList('events', 'evt086')" order="86"><storyevent /></div>
    <div class="icn order storyevent story-2"         @click="getEventList('events', 'evt087')" order="87"><storyevent /></div>
    <div class="icn order soulevent soulevent-1"      @click="getEventList('events', 'evt088')" order="88"><soulevent /></div>
    <div class="icn order soulevent soulevent-2"      @click="getEventList('events', 'evt089')" order="89"><soulevent /></div>
    <div class="icn order soulevent soulevent-3"      @click="getEventList('events', 'evt090')" order="90"><soulevent /></div>
    <div class="icn order storyevent story-3"         @click="getEventList('events', 'evt091')" order="91"><storyevent /></div>
    <div class="icn order soulevent soulevent-4"      @click="getEventList('events', 'evt092')" order="92"><soulevent /></div>
    <div class="icn order soulevent soulevent-5"      @click="getEventList('events', 'evt093')" order="93"><soulevent /></div>
    <div class="icn order storyevent story-4"         @click="getEventList('events', 'evt094')" order="94"><storyevent /></div>
    <div class="icn order dungeon dungeon-2"          @click="getEventList('events', 'evt095')" order="95"><dungeon /></div>
    <div class="icn order soulevent soulevent-6"      @click="getEventList('events', 'evt096')" order="96"><soulevent /></div>
    <div class="icn town brosste town-1"              @click="getEventList('events', 'icn048')"><brosstetown /></div>
    <div class="icn town brosste town-2"              @click="getEventList('events', 'icn049')"><brosstetown /></div>
    <div class="icn tablet tablet-1"                  @click="getEventList('events', 'icn050')"><tablet /></div>
    <div class="icn tablet tablet-2"                  @click="getEventList('events', 'icn051')"><tablet /></div>
    <div class="icn tablet tablet-3"                  @click="getEventList('events', 'icn052')"><tablet /></div>
    <div class="icn tablet tablet-4"                  @click="getEventList('events', 'icn053')"><tablet /></div>
    <div class="icn tablet tablet-5"                  @click="getEventList('events', 'icn054')"><tablet /></div>

    <div class="icn soul soul-1"                      @click="getEventList('souls', 'b301')"><soul /></div>
    <div class="icn soul soul-2"                      @click="getEventList('souls', 'b302')"><soul /></div>
    <div class="icn soul soul-3"                      @click="getEventList('souls', 'b303')"><soul /></div>
    <div class="icn soul soul-4"                      @click="getEventList('souls', 'b304')"><soul /></div>
    <div class="icn soul soul-5"                      @click="getEventList('souls', 'b305')"><soul /></div>
    <div class="icn soul soul-6"                      @click="getEventList('souls', 'b306')"><soul /></div>
    <div class="icn soul soul-7"                      @click="getEventList('souls', 'b307')"><soul /></div>
    <div class="icn soul soul-8"                      @click="getEventList('souls', 'b308')"><soul /></div>
    <div class="icn soul soul-9"                      @click="getEventList('souls', 'b309')"><soul /></div>
    <div class="icn soul soul-10"                     @click="getEventList('souls', 'b310')"><soul /></div>
    <div class="icn soul soul-11"                     @click="getEventList('souls', 'b311')"><soul /></div>
    <div class="icn soul soul-12"                     @click="getEventList('souls', 'b312')"><soul /></div>
    <div class="icn soul soul-13"                     @click="getEventList('souls', 'b313')"><soul /></div>
    <div class="icn soul soul-14"                     @click="getEventList('souls', 'b314')"><soul /></div>
</template>

<script lang="ts">
    import storyevent from '@/components/parts/storyevent.vue';
    import soulevent from '@/components/parts/soulevent.vue';
    import brosstetown from '@/components/parts/brosste_town.vue';
    import tablet from '@/components/parts/tablet.vue';
    import dungeon from '@/components/parts/dungeon.vue';
    import soul from '@/components/parts/soul.vue';

    export default {
        name: "MapBrosste3",
        components: { storyevent, soulevent, brosstetown, tablet, dungeon, soul },
        data() {
            return {
                nextMap: 'pragma-1',
                defaultEvt: 'evt085',
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