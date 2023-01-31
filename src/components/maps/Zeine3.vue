<template>
    <div class="icn order dungeon dungeon-1"          @click="getEventList('events', 'evt052')" order="52"><dungeon /></div>
    <div class="icn order soulevent soulevent-1"      @click="getEventList('events', 'evt053')" order="53"><soulevent /></div>
    <div class="icn order soulevent soulevent-2"      @click="getEventList('events', 'evt054')" order="54"><soulevent /></div>
    <div class="icn order storyevent story-1"         @click="getEventList('events', 'evt055')" order="55"><storyevent /></div>
    <div class="icn order soulevent soulevent-3"      @click="getEventList('events', 'evt056')" order="56"><soulevent /></div>
    <div class="icn order soulevent soulevent-4"      @click="getEventList('events', 'evt057')" order="57"><soulevent /></div>
    <div class="icn order storyevent story-2"         @click="getEventList('events', 'evt058')" order="58"><storyevent /></div>
    <div class="icn order soulevent soulevent-5 te"   @click="getEventList('events', 'evt059')" order="59"><soulevent /></div>
    <div class="icn order storyevent story-3"         @click="getEventList('events', 'evt060')" order="60"><storyevent /></div>
    <div class="icn order dungeon dungeon-2"          @click="getEventList('events', 'evt061')" order="61"><dungeon /></div>
    <div class="icn town ziene town-1"                @click="getEventList('events', 'icn033')"><zeinetown /></div>
    <div class="icn town ziene town-2"                @click="getEventList('events', 'icn034')"><zeinetown /></div>
    <div class="icn tablet tablet-1"                  @click="getEventList('events', 'icn035')"><tablet /></div>
    <div class="icn tablet tablet-2"                  @click="getEventList('events', 'icn036')"><tablet /></div>
    <div class="icn tablet tablet-3"                  @click="getEventList('events', 'icn037')"><tablet /></div>

    <div class="icn soul soul-1"                      @click="getEventList('souls', 'z301')"><soul /></div>
    <div class="icn soul soul-2"                      @click="getEventList('souls', 'z302')"><soul /></div>
    <div class="icn soul soul-3"                      @click="getEventList('souls', 'z303')"><soul /></div>
    <div class="icn soul soul-4"                      @click="getEventList('souls', 'z304')"><soul /></div>
    <div class="icn soul soul-5"                      @click="getEventList('souls', 'z305')"><soul /></div>
    <div class="icn soul soul-6"                      @click="getEventList('souls', 'z306')"><soul /></div>
    <div class="icn soul soul-7"                      @click="getEventList('souls', 'z307')"><soul /></div>
    <div class="icn soul soul-8"                      @click="getEventList('souls', 'z308')"><soul /></div>
    <div class="icn soul soul-9"                      @click="getEventList('souls', 'z309')"><soul /></div>
    <div class="icn soul soul-10"                     @click="getEventList('souls', 'z310')"><soul /></div>
    <div class="icn soul soul-11"                     @click="getEventList('souls', 'z311')"><soul /></div>
    <div class="icn soul soul-12"                     @click="getEventList('souls', 'z312')"><soul /></div>
    <div class="icn soul soul-13"                     @click="getEventList('souls', 'z313')"><soul /></div>
    <div class="icn soul soul-14"                     @click="getEventList('souls', 'z314')"><soul /></div>

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