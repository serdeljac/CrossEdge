<template>
    <div class="icn evt085 order dungeon dungeon-1"          @click="getEventList('events', 'evt085')" order="85"><dungeon /></div>
    <div class="icn evt086 order storyevent story-1"         @click="getEventList('events', 'evt086')" order="86"><storyevent /></div>
    <div class="icn evt087 order storyevent story-2"         @click="getEventList('events', 'evt087')" order="87"><storyevent /></div>
    <div class="icn evt088 order soulevent soulevent-1 te"   @click="getEventList('events', 'evt088')" order="88"><soulevent /></div>
    <div class="icn evt089 order soulevent soulevent-2"      @click="getEventList('events', 'evt089')" order="89"><soulevent /></div>
    <div class="icn evt090 order soulevent soulevent-3"      @click="getEventList('events', 'evt090')" order="90"><soulevent /></div>
    <div class="icn evt091 order storyevent story-3"         @click="getEventList('events', 'evt091')" order="91"><storyevent /></div>
    <div class="icn evt092 order soulevent soulevent-4 te"   @click="getEventList('events', 'evt092')" order="92"><soulevent /></div>
    <div class="icn evt093 order soulevent soulevent-5"      @click="getEventList('events', 'evt093')" order="93"><soulevent /></div>
    <div class="icn evt094 order storyevent story-4"         @click="getEventList('events', 'evt094')" order="94"><storyevent /></div>
    <div class="icn evt095 order dungeon dungeon-2 te"       @click="getEventList('events', 'evt095')" order="95"><dungeon /></div>
    <div class="icn evt096 order soulevent soulevent-6 te"   @click="getEventList('events', 'evt096')" order="96"><soulevent /></div>
    <div class="icn icn048 town brosste town-1"              @click="getEventList('events', 'icn048')"><brosstetown /></div>
    <div class="icn icn049 town brosste town-2"              @click="getEventList('events', 'icn049')"><brosstetown /></div>
    <div class="icn icn050 tablet tablet-1"                  @click="getEventList('events', 'icn050')"><tablet /></div>
    <div class="icn icn051 tablet tablet-2"                  @click="getEventList('events', 'icn051')"><tablet /></div>
    <div class="icn icn052 tablet tablet-3"                  @click="getEventList('events', 'icn052')"><tablet /></div>
    <div class="icn icn053 tablet tablet-4"                  @click="getEventList('events', 'icn053')"><tablet /></div>
    <div class="icn icn054 tablet tablet-5"                  @click="getEventList('events', 'icn054')"><tablet /></div>

    <div class="icn b301 soul soul-1"                      @click="getEventList('souls', 'b301')"><soul /></div>
    <div class="icn b302 soul soul-2"                      @click="getEventList('souls', 'b302')"><soul /></div>
    <div class="icn b303 soul soul-3"                      @click="getEventList('souls', 'b303')"><soul /></div>
    <div class="icn b304 soul soul-4"                      @click="getEventList('souls', 'b304')"><soul /></div>
    <div class="icn b305 soul soul-5"                      @click="getEventList('souls', 'b305')"><soul /></div>
    <div class="icn b306 soul soul-6"                      @click="getEventList('souls', 'b306')"><soul /></div>
    <div class="icn b307 soul soul-7"                      @click="getEventList('souls', 'b307')"><soul /></div>
    <div class="icn b308 soul soul-8"                      @click="getEventList('souls', 'b308')"><soul /></div>
    <div class="icn b309 soul soul-9"                      @click="getEventList('souls', 'b309')"><soul /></div>
    <div class="icn b310 soul soul-10"                     @click="getEventList('souls', 'b310')"><soul /></div>
    <div class="icn b311 soul soul-11"                     @click="getEventList('souls', 'b311')"><soul /></div>
    <div class="icn b312 soul soul-12 ts"                  @click="getEventList('souls', 'b312')"><soul /></div>
    <div class="icn b313 soul soul-13 ts"                  @click="getEventList('souls', 'b313')"><soul /></div>
    <div class="icn b314 soul soul-14 ts"                  @click="getEventList('souls', 'b314')"><soul /></div>
</template>

<script lang="ts">
    import storyevent from '@/components/parts/storyevent.vue';
    import soulevent from '@/components/parts/soulevent.vue';
    import brosstetown from '@/components/parts/brosste_town.vue';
    import tablet from '@/components/parts/tablet.vue';
    import dungeon from '@/components/parts/dungeon.vue';
    import soul from '@/components/parts/soul.vue';
    import $ from 'jquery';

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
                $('div').removeClass('selected');
                $('.' + id).addClass('selected');
            },
        },
    }
</script>