<template>
    <div class="icn evt052 order dungeon dungeon-1"          @click="getEventList('events', 'evt052')" order="52"><dungeon /></div>
    <div class="icn evt053 order soulevent soulevent-1"      @click="getEventList('events', 'evt053')" order="53"><soulevent /></div>
    <div class="icn evt054 order soulevent soulevent-2"      @click="getEventList('events', 'evt054')" order="54"><soulevent /></div>
    <div class="icn evt055 order storyevent story-1"         @click="getEventList('events', 'evt055')" order="55"><storyevent /></div>
    <div class="icn evt056 order soulevent soulevent-3"      @click="getEventList('events', 'evt056')" order="56"><soulevent /></div>
    <div class="icn evt057 order soulevent soulevent-4"      @click="getEventList('events', 'evt057')" order="57"><soulevent /></div>
    <div class="icn evt058 order storyevent story-2"         @click="getEventList('events', 'evt058')" order="58"><storyevent /></div>
    <div class="icn evt059 order soulevent soulevent-5 te"   @click="getEventList('events', 'evt059')" order="59"><soulevent /></div>
    <div class="icn evt060 order storyevent story-3"         @click="getEventList('events', 'evt060')" order="60"><storyevent /></div>
    <div class="icn evt061 order dungeon dungeon-2"          @click="getEventList('events', 'evt061')" order="61"><dungeon /></div>
    <div class="icn icn033 town ziene town-1"                @click="getEventList('events', 'icn033')"><zeinetown /></div>
    <div class="icn icn034 town ziene town-2"                @click="getEventList('events', 'icn034')"><zeinetown /></div>
    <div class="icn icn035 tablet tablet-1"                  @click="getEventList('events', 'icn035')"><tablet /></div>
    <div class="icn icn036 tablet tablet-2"                  @click="getEventList('events', 'icn036')"><tablet /></div>
    <div class="icn icn037 tablet tablet-3"                  @click="getEventList('events', 'icn037')"><tablet /></div>

    <div class="icn z301 soul soul-1"                      @click="getEventList('souls', 'z301')"><soul /></div>
    <div class="icn z302 soul soul-2"                      @click="getEventList('souls', 'z302')"><soul /></div>
    <div class="icn z303 soul soul-3"                      @click="getEventList('souls', 'z303')"><soul /></div>
    <div class="icn z304 soul soul-4"                      @click="getEventList('souls', 'z304')"><soul /></div>
    <div class="icn z305 soul soul-5"                      @click="getEventList('souls', 'z305')"><soul /></div>
    <div class="icn z306 soul soul-6"                      @click="getEventList('souls', 'z306')"><soul /></div>
    <div class="icn z307 soul soul-7"                      @click="getEventList('souls', 'z307')"><soul /></div>
    <div class="icn z308 soul soul-8"                      @click="getEventList('souls', 'z308')"><soul /></div>
    <div class="icn z309 soul soul-9"                      @click="getEventList('souls', 'z309')"><soul /></div>
    <div class="icn z310 soul soul-10"                     @click="getEventList('souls', 'z310')"><soul /></div>
    <div class="icn z311 soul soul-11"                     @click="getEventList('souls', 'z311')"><soul /></div>
    <div class="icn z312 soul soul-12"                     @click="getEventList('souls', 'z312')"><soul /></div>
    <div class="icn z313 soul soul-13"                     @click="getEventList('souls', 'z313')"><soul /></div>
    <div class="icn z314 soul soul-14"                     @click="getEventList('souls', 'z314')"><soul /></div>

</template>

<script lang="ts">
    import storyevent from '@/components/parts/storyevent.vue';
    import soulevent from '@/components/parts/soulevent.vue';
    import zeinetown from '@/components/parts/zeine_town.vue';
    import tablet from '@/components/parts/tablet.vue';
    import dungeon from '@/components/parts/dungeon.vue';
    import soul from '@/components/parts/soul.vue';
    import $ from 'jquery';

    export default {
        name: "MapZeine1",
        components: { storyevent, soulevent, zeinetown, tablet, dungeon, soul },
        data() {
            return {
                nextMap: 'wilkiet-3',
                defaultEvt: 'evt052',
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