<template>
    <div class="icn evt119 order dungeon dungeon-1"          @click="getEventList('events', 'evt119')" order="119"><dungeon /></div>
    <div class="icn evt120 order soulevent soulevent-1"      @click="getEventList('events', 'evt120')" order="120"><soulevent /></div>
    <div class="icn evt121 order soulevent soulevent-2"      @click="getEventList('events', 'evt121')" order="121"><soulevent /></div>
    <div class="icn evt122 order soulevent soulevent-3"      @click="getEventList('events', 'evt122')" order="122"><soulevent /></div>
    <div class="icn evt123 order storyevent story-1"         @click="getEventList('events', 'evt123')" order="123"><storyevent /></div>
    <div class="icn evt124 order soulevent soulevent-4"      @click="getEventList('events', 'evt124')" order="124"><soulevent /></div>
    <div class="icn evt125 order soulevent soulevent-5"      @click="getEventList('events', 'evt125')" order="125"><soulevent /></div>
    <div class="icn evt126 order storyevent story-2"         @click="getEventList('events', 'evt126')" order="126"><storyevent /></div>
    <div class="icn evt127 order storyevent story-3"         @click="getEventList('events', 'evt127')" order="127"><storyevent /></div>
    <div class="icn evt128 order soulevent soulevent-6"      @click="getEventList('events', 'evt128')" order="128"><soulevent /></div>
    <div class="icn evt129 order soulevent soulevent-7 te"   @click="getEventList('events', 'evt129')" order="129"><soulevent /></div>
    <div class="icn evt130 order dungeon dungeon-2"          @click="getEventList('events', 'evt130')" order="130"><dungeon /></div>
    <div class="icn evt131 order soulevent soulevent-8 te"   @click="getEventList('events', 'evt131')" order="131"><soulevent /></div>
    <div class="icn icn068 town pragma town-1"               @click="getEventList('events', 'icn068')"><pragmatown /></div>
    <div class="icn icn069 town pragma town-2"               @click="getEventList('events', 'icn069')"><pragmatown /></div>
    <div class="icn icn070 tablet tablet-1"                  @click="getEventList('events', 'icn070')"><tablet /></div>
    <div class="icn icn071 tablet tablet-2"                  @click="getEventList('events', 'icn071')"><tablet /></div>
    <div class="icn icn072 tablet tablet-3"                  @click="getEventList('events', 'icn072')"><tablet /></div>

    <div class="icn p301 soul soul-1"                      @click="getEventList('souls', 'p301')"><soul /></div>
    <div class="icn p302 soul soul-2"                      @click="getEventList('souls', 'p302')"><soul /></div>
    <div class="icn p303 soul soul-3"                      @click="getEventList('souls', 'p303')"><soul /></div>
    <div class="icn p304 soul soul-4"                      @click="getEventList('souls', 'p304')"><soul /></div>
    <div class="icn p305 soul soul-5"                      @click="getEventList('souls', 'p305')"><soul /></div>
    <div class="icn p306 soul soul-6"                      @click="getEventList('souls', 'p306')"><soul /></div>
    <div class="icn p307 soul soul-7"                      @click="getEventList('souls', 'p307')"><soul /></div>
    <div class="icn p308 soul soul-8"                      @click="getEventList('souls', 'p308')"><soul /></div>
    <div class="icn p309 soul soul-9"                      @click="getEventList('souls', 'p309')"><soul /></div>
    <div class="icn p310 soul soul-10"                     @click="getEventList('souls', 'p310')"><soul /></div>
    <div class="icn p311 soul soul-11"                     @click="getEventList('souls', 'p311')"><soul /></div>
    <div class="icn p312 soul soul-12"                     @click="getEventList('souls', 'p312')"><soul /></div>
    <div class="icn p313 soul soul-13"                     @click="getEventList('souls', 'p313')"><soul /></div>
    <div class="icn p314 soul soul-14"                     @click="getEventList('souls', 'p314')"><soul /></div>
    <div class="icn p315 soul soul-15"                     @click="getEventList('souls', 'p315')"><soul /></div>
</template>

<script lang="ts">
    import storyevent from '@/components/parts/storyevent.vue';
    import soulevent from '@/components/parts/soulevent.vue';
    import pragmatown from '@/components/parts/pragma_town.vue';
    import tablet from '@/components/parts/tablet.vue';
    import dungeon from '@/components/parts/dungeon.vue';
    import soul from '@/components/parts/soul.vue';
    import $ from 'jquery';

    export default {
        name: "MapPragma3",
        components: { storyevent, soulevent, pragmatown, tablet, dungeon, soul },
        data() {
            return {
                nextMap: 'ida-1',
                defaultEvt: 'evt119',
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