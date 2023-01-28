<template>
    <div class="icn order dungeon dungeon-1"          @click="getEventList('events', 'evt042')" order="42"><dungeon /></div>
    <div class="icn order storyevent story-1"         @click="getEventList('events', 'evt043')" order="43"><storyevent /></div>
    <div class="icn order soulevent soulevent-1"      @click="getEventList('events', 'evt044')" order="44"><soulevent /></div>
    <div class="icn order soulevent soulevent-2"      @click="getEventList('events', 'evt046')" order="46"><soulevent /></div>
    <div class="icn order storyevent story-2"         @click="getEventList('events', 'evt047')" order="47"><storyevent /></div>
    <div class="icn order soulevent soulevent-3"      @click="getEventList('events', 'evt048')" order="48"><soulevent /></div>
    <div class="icn order soulevent soulevent-4"      @click="getEventList('events', 'evt049')" order="49"><soulevent /></div>
    <div class="icn order storyevent story-3"         @click="getEventList('events', 'evt050')" order="50"><storyevent /></div>
    <div class="icn order dungeon dungeon-2"          @click="getEventList('events', 'evt051')" order="51"><dungeon /></div>
    <div class="icn town ziene town-1"                @click="getEventList('events', 'icn027')"><zeinetown /></div>
    <div class="icn town ziene town-2"                @click="getEventList('events', 'icn028')"><zeinetown /></div>
    <div class="icn tablet tablet-1"                  @click="getEventList('events', 'icn029')"><tablet /></div>
    <div class="icn tablet tablet-2"                  @click="getEventList('events', 'icn030')"><tablet /></div>
    <div class="icn tablet tablet-3"                  @click="getEventList('events', 'icn031')"><tablet /></div>
    <div class="icn tablet tablet-4"                  @click="getEventList('events', 'icn032')"><tablet /></div>

    <div class="icn soul soul-1"                      @click="getEventList('souls', 'z201')"><soul /></div>
    <div class="icn soul soul-2"                      @click="getEventList('souls', 'z202')"><soul /></div>
    <div class="icn soul soul-3"                      @click="getEventList('souls', 'z203')"><soul /></div>
    <div class="icn soul soul-4"                      @click="getEventList('souls', 'z204')"><soul /></div>
    <div class="icn soul soul-5"                      @click="getEventList('souls', 'z205')"><soul /></div>
    <div class="icn soul soul-6"                      @click="getEventList('souls', 'z206')"><soul /></div>
    <div class="icn soul soul-7"                      @click="getEventList('souls', 'z207')"><soul /></div>
    <div class="icn soul soul-8"                      @click="getEventList('souls', 'z208')"><soul /></div>
    <div class="icn soul soul-9"                      @click="getEventList('souls', 'z209')"><soul /></div>
    <div class="icn soul soul-10"                     @click="getEventList('souls', 'z210')"><soul /></div>
    <div class="icn soul soul-11"                     @click="getEventList('souls', 'z211')"><soul /></div>
    <div class="icn soul soul-12"                     @click="getEventList('souls', 'z212')"><soul /></div>
    <div class="icn soul soul-13"                     @click="getEventList('souls', 'z213')"><soul /></div>
    <div class="icn soul soul-14"                     @click="getEventList('souls', 'z214')"><soul /></div>
</template>

<script lang="ts">
    import storyevent from '@/components/parts/storyevent.vue';
    import soulevent from '@/components/parts/soulevent.vue';
    import zeinetown from '@/components/parts/zeine_town.vue';
    import tablet from '@/components/parts/tablet.vue';
    import dungeon from '@/components/parts/dungeon.vue';
    import soul from '@/components/parts/soul.vue';

    export default {
        name: "MapZeine2",
        components: { storyevent, soulevent, zeinetown, tablet, dungeon, soul },
        data() {
            return {
                nextMap: 'zeine-3',
                defaultEvt: 'evt042',
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