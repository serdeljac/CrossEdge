<template>
        <div class="icn evt009 order dungeon dungeon-1"          @click="getEventList('events', 'evt009')" order="9"><dungeon /></div>
        <div class="icn evt010 order storyevent story-1"         @click="getEventList('events', 'evt010')" order="10"><storyevent /></div>
        <div class="icn evt011 order storyevent story-2"         @click="getEventList('events', 'evt011')" order="11"><storyevent /></div>
        <div class="icn evt012 order storyevent story-3"         @click="getEventList('events', 'evt012')" order="12"><storyevent /></div>
        <div class="icn evt013 order soulevent soulevent-1"      @click="getEventList('events', 'evt013')" order="13"><soulevent /></div>
        <div class="icn evt014 order soulevent soulevent-2"      @click="getEventList('events', 'evt014')" order="14"><soulevent /></div>
        <div class="icn evt015 order soulevent soulevent-3"      @click="getEventList('events', 'evt015')" order="15"><soulevent /></div>
        <div class="icn evt016 order storyevent story-4"         @click="getEventList('events', 'evt016')" order="16"><storyevent /></div>
        <div class="icn evt017 order storyevent story-5"         @click="getEventList('events', 'evt017')" order="17"><storyevent /></div>
        <div class="icn evt018 order soulevent soulevent-4"      @click="getEventList('events', 'evt018')" order="18"><soulevent /></div>
        <div class="icn evt019 order storyevent story-6"         @click="getEventList('events', 'evt019')" order="19"><storyevent /></div>
        <div class="icn evt020 order soulevent soulevent-5"      @click="getEventList('events', 'evt020')" order="20"><soulevent /></div>
        <div class="icn evt021 order dungeon dungeon-2"          @click="getEventList('events', 'evt021')" order="21"><dungeon /></div>
        <div class="icn evt031 order soulevent soulevent-6 te"   @click="getEventList('events', 'evt031')" order="31"><soulevent /></div>
        <div class="icn evt032 order soulevent soulevent-7 te"   @click="getEventList('events', 'evt032')" order="32"><soulevent /></div>
        <div class="icn evt045 order soulevent soulevent-8 te"   @click="getEventList('events', 'evt045')" order="45"><soulevent /></div>
        <div class="icn icn008 town wilkiet town-1"              @click="getEventList('events', 'icn008')"><wilkiettown /></div>
        <div class="icn icn009 town wilkiet town-2"              @click="getEventList('events', 'icn009')"><wilkiettown /></div>
        <div class="icn icn010 town wilkiet town-3"              @click="getEventList('events', 'icn010')"><wilkiettown /></div>
        <div class="icn icn011 tablet tablet-1"                  @click="getEventList('events', 'icn011')"><tablet /></div>
        <div class="icn icn012 tablet tablet-2"                  @click="getEventList('events', 'icn012')"><tablet /></div>
        <div class="icn icn013 tablet tablet-3"                  @click="getEventList('events', 'icn013')"><tablet /></div>
        <div class="icn icn014 tablet tablet-4"                  @click="getEventList('events', 'icn014')"><tablet /></div>
        <div class="icn icn015 tablet tablet-5"                  @click="getEventList('events', 'icn015')"><tablet /></div>

        <div class="icn w101 soul soul-1"                      @click="getEventList('souls', 'w101')"><soul /></div>
        <div class="icn w102 soul soul-2"                      @click="getEventList('souls', 'w102')"><soul /></div>
        <div class="icn w103 soul soul-3"                      @click="getEventList('souls', 'w103')"><soul /></div>
        <div class="icn w104 soul soul-4"                      @click="getEventList('souls', 'w104')"><soul /></div>
        <div class="icn w105 soul soul-5"                      @click="getEventList('souls', 'w105')"><soul /></div>
        <div class="icn w106 soul soul-6"                      @click="getEventList('souls', 'w106')"><soul /></div>
        <div class="icn w107 soul soul-7"                      @click="getEventList('souls', 'w107')"><soul /></div>
        <div class="icn w108 soul soul-8"                      @click="getEventList('souls', 'w108')"><soul /></div>
        <div class="icn w109 soul soul-9"                      @click="getEventList('souls', 'w109')"><soul /></div>
        <div class="icn w110 soul soul-10"                     @click="getEventList('souls', 'w110')"><soul /></div>
        <div class="icn w111 soul soul-11"                     @click="getEventList('souls', 'w111')"><soul /></div>
        <div class="icn w112 soul soul-12"                     @click="getEventList('souls', 'w112')"><soul /></div>
        <div class="icn w113 soul soul-13"                     @click="getEventList('souls', 'w113')"><soul /></div>
        <div class="icn w114 soul soul-14"                     @click="getEventList('souls', 'w114')"><soul /></div>
        <div class="icn w115 soul soul-15"                     @click="getEventList('souls', 'w115')"><soul /></div>
        <div class="icn w116 soul soul-16"                     @click="getEventList('souls', 'w116')"><soul /></div>
</template>

<script lang="ts">
    import storyevent from '@/components/parts/storyevent.vue';
    import soulevent from '@/components/parts/soulevent.vue';
    import wilkiettown from '@/components/parts/wilkiet_town.vue';
    import tablet from '@/components/parts/tablet.vue';
    import dungeon from '@/components/parts/dungeon.vue';
    import soul from '@/components/parts/soul.vue';
    import $ from 'jquery';

    export default {
        name: "MapWilkiet1",
        components: { storyevent, soulevent, wilkiettown, tablet, dungeon, soul },
        data() {
            return {
                nextMap: 'brosste-1',
                defaultEvt: 'evt009',
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