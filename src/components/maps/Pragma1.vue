<template>
    <div class="icn evt097 order dungeon dungeon-1"          @click="getEventList('events', 'evt097')" order="97"><dungeon /></div>
    <div class="icn evt098 order storyevent story-1 te"      @click="getEventList('events', 'evt098')" order="98"><storyevent /></div>
    <div class="icn evt101 order soulevent soulevent-1"      @click="getEventList('events', 'evt101')" order="101"><soulevent /></div>
    <div class="icn evt102 order storyevent story-2 te"      @click="getEventList('events', 'evt102')" order="102"><storyevent /></div>
    <div class="icn evt103 order soulevent soulevent-2"      @click="getEventList('events', 'evt103')" order="103"><soulevent /></div>
    <div class="icn evt104 order storyevent story-3"         @click="getEventList('events', 'evt104')" order="104"><storyevent /></div>
    <div class="icn evt105 order soulevent soulevent-3"      @click="getEventList('events', 'evt105')" order="105"><soulevent /></div>
    <div class="icn evt106 order dungeon dungeon-2 te"       @click="getEventList('events', 'evt106')" order="106"><dungeon /></div>
    <div class="icn icn055 town pragma town-1"               @click="getEventList('events', 'icn055')"><pragmatown /></div>
    <div class="icn icn056 town pragma town-2"               @click="getEventList('events', 'icn056')"><pragmatown /></div>
    <div class="icn icn057 tablet tablet-1"                  @click="getEventList('events', 'icn057')"><tablet /></div>
    <div class="icn icn058 tablet tablet-2"                  @click="getEventList('events', 'icn058')"><tablet /></div>
    <div class="icn icn059 tablet tablet-3"                  @click="getEventList('events', 'icn059')"><tablet /></div>
    <div class="icn icn060 tablet tablet-4"                  @click="getEventList('events', 'icn060')"><tablet /></div>
    <div class="icn icn061 tablet tablet-5"                  @click="getEventList('events', 'icn061')"><tablet /></div>

    <div class="icn p101 soul soul-1"                      @click="getEventList('souls', 'p101')"><soul /></div>
    <div class="icn p102 soul soul-2"                      @click="getEventList('souls', 'p102')"><soul /></div>
    <div class="icn p103 soul soul-3"                      @click="getEventList('souls', 'p103')"><soul /></div>
    <div class="icn p104 soul soul-4"                      @click="getEventList('souls', 'p104')"><soul /></div>
    <div class="icn p105 soul soul-5"                      @click="getEventList('souls', 'p105')"><soul /></div>
    <div class="icn p106 soul soul-6"                      @click="getEventList('souls', 'p106')"><soul /></div>
    <div class="icn p107 soul soul-7"                      @click="getEventList('souls', 'p107')"><soul /></div>
    <div class="icn p108 soul soul-8"                      @click="getEventList('souls', 'p108')"><soul /></div>
    <div class="icn p109 soul soul-9"                      @click="getEventList('souls', 'p109')"><soul /></div>
    <div class="icn p110 soul soul-10"                     @click="getEventList('souls', 'p110')"><soul /></div>
    <div class="icn p111 soul soul-11"                     @click="getEventList('souls', 'p111')"><soul /></div>
    <div class="icn p112 soul soul-12"                     @click="getEventList('souls', 'p112')"><soul /></div>
    <div class="icn p113 soul soul-13"                     @click="getEventList('souls', 'p113')"><soul /></div>
    <div class="icn p114 soul soul-14 ts"                  @click="getEventList('souls', 'p114')"><soul /></div>
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
        name: "MapPragma1",
        components: { storyevent, soulevent, pragmatown, tablet, dungeon, soul },
        data() {
            return {
                nextMap: 'pragma-2',
                defaultEvt: 'evt097',
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