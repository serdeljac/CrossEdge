<template>
    <div class="icn evt107 order dungeon dungeon-1"          @click="getEventList('events', 'evt107')" order="107"><dungeon /></div>
    <div class="icn evt108 order soulevent soulevent-1 te"   @click="getEventList('events', 'evt108')" order="108"><soulevent /></div>
    <div class="icn evt109 order soulevent soulevent-2"      @click="getEventList('events', 'evt109')" order="109"><soulevent /></div>
    <div class="icn evt110 order soulevent soulevent-3"      @click="getEventList('events', 'evt110')" order="110"><soulevent /></div>
    <div class="icn evt111 order soulevent soulevent-4"      @click="getEventList('events', 'evt111')" order="111"><soulevent /></div>
    <div class="icn evt112 order storyevent story-1"         @click="getEventList('events', 'evt112')" order="112"><storyevent /></div>
    <div class="icn evt113 order soulevent soulevent-5 te"   @click="getEventList('events', 'evt113')" order="113"><soulevent /></div>
    <div class="icn evt114 order soulevent soulevent-6 te"   @click="getEventList('events', 'evt114')" order="114"><soulevent /></div>
    <div class="icn evt115 order soulevent soulevent-7"      @click="getEventList('events', 'evt115')" order="115"><soulevent /></div>
    <div class="icn evt116 order storyevent story-2 te"      @click="getEventList('events', 'evt116')" order="116"><storyevent /></div>
    <div class="icn evt117 order storyevent story-3"         @click="getEventList('events', 'evt117')" order="117"><storyevent /></div>
    <div class="icn evt118 order dungeon dungeon-2"          @click="getEventList('events', 'evt118')" order="118"><dungeon /></div>
    <div class="icn icn062 town pragma town-1"               @click="getEventList('events', 'icn062')"><pragmatown /></div>
    <div class="icn icn063 town pragma town-2"               @click="getEventList('events', 'icn063')"><pragmatown /></div>
    <div class="icn icn064 tablet tablet-1"                  @click="getEventList('events', 'icn064')"><tablet /></div>
    <div class="icn icn065 tablet tablet-2"                  @click="getEventList('events', 'icn065')"><tablet /></div>
    <div class="icn icn066 tablet tablet-3"                  @click="getEventList('events', 'icn066')"><tablet /></div>
    <div class="icn icn067 dungeon dungeon-3"                @click="getEventList('events', 'icn067')"><dungeon /></div>

    <div class="icn p201 soul soul-1"                      @click="getEventList('souls', 'p201')"><soul /></div>
    <div class="icn p202 soul soul-2"                      @click="getEventList('souls', 'p202')"><soul /></div>
    <div class="icn p203 soul soul-3"                      @click="getEventList('souls', 'p203')"><soul /></div>
    <div class="icn p204 soul soul-4"                      @click="getEventList('souls', 'p204')"><soul /></div>
    <div class="icn p205 soul soul-5"                      @click="getEventList('souls', 'p205')"><soul /></div>
    <div class="icn p206 soul soul-6"                      @click="getEventList('souls', 'p206')"><soul /></div>
    <div class="icn p207 soul soul-7"                      @click="getEventList('souls', 'p207')"><soul /></div>
    <div class="icn p208 soul soul-8"                      @click="getEventList('souls', 'p208')"><soul /></div>
    <div class="icn p209 soul soul-9"                      @click="getEventList('souls', 'p209')"><soul /></div>
    <div class="icn p210 soul soul-10"                     @click="getEventList('souls', 'p210')"><soul /></div>
    <div class="icn p211 soul soul-11"                     @click="getEventList('souls', 'p211')"><soul /></div>
    <div class="icn p212 soul soul-12"                     @click="getEventList('souls', 'p212')"><soul /></div>
    <div class="icn p213 soul soul-13 ts"                  @click="getEventList('souls', 'p213')"><soul /></div>
    <div class="icn p214 soul soul-14 ts"                  @click="getEventList('souls', 'p214')"><soul /></div>
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
        name: "MapPragma2",
        components: { storyevent, soulevent, pragmatown, tablet, dungeon, soul },
        data() {
            return {
                nextMap: 'pragma-3',
                defaultEvt: 'evt107',
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