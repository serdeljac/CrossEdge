<template>
    <div class="icn evt022 order dungeon dungeon-1"          @click="getEventList('events', 'evt022')" order="22"><dungeon /></div>
    <div class="icn evt023 order soulevent soulevent-1"      @click="getEventList('events', 'evt023')" order="23"><soulevent /></div>
    <div class="icn evt024 order storyevent story-1"         @click="getEventList('events', 'evt024')" order="24"><storyevent /></div>
    <div class="icn evt025 order soulevent soulevent-2"      @click="getEventList('events', 'evt025')" order="25"><soulevent /></div>
    <div class="icn evt026 order soulevent soulevent-3 te"   @click="getEventList('events', 'evt026')" order="26"><soulevent /></div>
    <div class="icn evt027 order soulevent soulevent-4 te"   @click="getEventList('events', 'evt027')" order="27"><soulevent /></div>
    <div class="icn evt028 order storyevent story-2 te"      @click="getEventList('events', 'evt028')" order="28"><storyevent /></div>
    <div class="icn evt029 order dungeon dungeon-2"          @click="getEventList('events', 'evt029')" order="29"><dungeon /></div>
    <div class="icn icn016 town brosste town-1"              @click="getEventList('events', 'icn016')"><brosstetown /></div>
    <div class="icn icn017 town brosste town-2"              @click="getEventList('events', 'icn017')"><brosstetown /></div>
    <div class="icn icn018 tablet tablet-1"                  @click="getEventList('events', 'icn018')"><tablet /></div>
    <div class="icn icn019 tablet tablet-2"                  @click="getEventList('events', 'icn019')"><tablet /></div>
    <div class="icn icn020 tablet tablet-3"                  @click="getEventList('events', 'icn020')"><tablet /></div>

    <div class="icn b101 soul soul-1"                      @click="getEventList('souls', 'b101')"><soul /></div>
    <div class="icn b102 soul soul-2"                      @click="getEventList('souls', 'b102')"><soul /></div>
    <div class="icn b103 soul soul-3"                      @click="getEventList('souls', 'b103')"><soul /></div>
    <div class="icn b104 soul soul-4"                      @click="getEventList('souls', 'b104')"><soul /></div>
    <div class="icn b105 soul soul-5"                      @click="getEventList('souls', 'b105')"><soul /></div>
    <div class="icn b106 soul soul-6"                      @click="getEventList('souls', 'b106')"><soul /></div>
    <div class="icn b107 soul soul-7"                      @click="getEventList('souls', 'b107')"><soul /></div>
    <div class="icn b108 soul soul-8"                      @click="getEventList('souls', 'b108')"><soul /></div>
    <div class="icn b109 soul soul-9"                      @click="getEventList('souls', 'b109')"><soul /></div>
    <div class="icn b110 soul soul-10"                     @click="getEventList('souls', 'b110')"><soul /></div>
    <div class="icn b111 soul soul-11"                     @click="getEventList('souls', 'b111')"><soul /></div>
    <div class="icn b112 soul soul-12"                     @click="getEventList('souls', 'b112')"><soul /></div>
    <div class="icn b113 soul soul-13"                     @click="getEventList('souls', 'b113')"><soul /></div>
    <div class="icn b114 soul soul-14"                     @click="getEventList('souls', 'b114')"><soul /></div>
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
        name: "MapBrosste1",
        components: { storyevent, soulevent, brosstetown, tablet, dungeon, soul },
        data() {
            return {
                nextMap: 'wilkiet-2',
                defaultEvt: 'evt022',
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