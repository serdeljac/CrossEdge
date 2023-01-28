<template>
    <div class="icn order dungeon dungeon-1"          @click="getEventList('events', 'evt107')" order="107"><dungeon /></div>
    <div class="icn order soulevent soulevent-1"      @click="getEventList('events', 'evt108')" order="108"><soulevent /></div>
    <div class="icn order soulevent soulevent-2"      @click="getEventList('events', 'evt109')" order="109"><soulevent /></div>
    <div class="icn order soulevent soulevent-3"      @click="getEventList('events', 'evt110')" order="110"><soulevent /></div>
    <div class="icn order soulevent soulevent-4"      @click="getEventList('events', 'evt111')" order="111"><soulevent /></div>
    <div class="icn order storyevent story-1"         @click="getEventList('events', 'evt112')" order="112"><storyevent /></div>
    <div class="icn order soulevent soulevent-5"      @click="getEventList('events', 'evt113')" order="113"><soulevent /></div>
    <div class="icn order soulevent soulevent-6"      @click="getEventList('events', 'evt114')" order="114"><soulevent /></div>
    <div class="icn order soulevent soulevent-7"      @click="getEventList('events', 'evt115')" order="115"><soulevent /></div>
    <div class="icn order storyevent story-2"         @click="getEventList('events', 'evt116')" order="116"><storyevent /></div>
    <div class="icn order storyevent story-3"         @click="getEventList('events', 'evt117')" order="117"><storyevent /></div>
    <div class="icn order dungeon dungeon-2"          @click="getEventList('events', 'evt118')" order="118"><dungeon /></div>
    <div class="icn town pragma town-1"               @click="getEventList('events', 'icn062')"><pragmatown /></div>
    <div class="icn town pragma town-2"               @click="getEventList('events', 'icn063')"><pragmatown /></div>
    <div class="icn tablet tablet-1"                  @click="getEventList('events', 'icn064')"><tablet /></div>
    <div class="icn tablet tablet-2"                  @click="getEventList('events', 'icn065')"><tablet /></div>
    <div class="icn tablet tablet-3"                  @click="getEventList('events', 'icn066')"><tablet /></div>
    <div class="icn dungeon dungeon-3"                @click="getEventList('events', 'icn067')"><dungeon /></div>

    <div class="icn soul soul-1"                      @click="getEventList('souls', 'p201')"><soul /></div>
    <div class="icn soul soul-2"                      @click="getEventList('souls', 'p202')"><soul /></div>
    <div class="icn soul soul-3"                      @click="getEventList('souls', 'p203')"><soul /></div>
    <div class="icn soul soul-4"                      @click="getEventList('souls', 'p204')"><soul /></div>
    <div class="icn soul soul-5"                      @click="getEventList('souls', 'p205')"><soul /></div>
    <div class="icn soul soul-6"                      @click="getEventList('souls', 'p206')"><soul /></div>
    <div class="icn soul soul-7"                      @click="getEventList('souls', 'p207')"><soul /></div>
    <div class="icn soul soul-8"                      @click="getEventList('souls', 'p208')"><soul /></div>
    <div class="icn soul soul-9"                      @click="getEventList('souls', 'p209')"><soul /></div>
    <div class="icn soul soul-10"                     @click="getEventList('souls', 'p210')"><soul /></div>
    <div class="icn soul soul-11"                     @click="getEventList('souls', 'p211')"><soul /></div>
    <div class="icn soul soul-12"                     @click="getEventList('souls', 'p212')"><soul /></div>
    <div class="icn soul soul-13"                     @click="getEventList('souls', 'p213')"><soul /></div>
    <div class="icn soul soul-14"                     @click="getEventList('souls', 'p214')"><soul /></div>
</template>

<script lang="ts">
    import storyevent from '@/components/parts/storyevent.vue';
    import soulevent from '@/components/parts/soulevent.vue';
    import pragmatown from '@/components/parts/pragma_town.vue';
    import tablet from '@/components/parts/tablet.vue';
    import dungeon from '@/components/parts/dungeon.vue';
    import soul from '@/components/parts/soul.vue';

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
            },
        },
    }
</script>