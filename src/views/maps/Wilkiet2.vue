<template>
    <div class="icn order dungeon dungeon-1"          @click="getEventList('events', 'evt030')" order="30"><dungeon /></div>
    <div class="icn order storyevent story-1"         @click="getEventList('events', 'evt033')" order="33"><storyevent /></div>
    <div class="icn order town wilkiet town-1"        @click="getEventList('events', 'evt034')" order="34"><wilkiettown /></div>
    <div class="icn order soulevent soulevent-1"      @click="getEventList('events', 'evt035')" order="35"><soulevent /></div>
    <div class="icn order soulevent soulevent-2"      @click="getEventList('events', 'evt036')" order="36"><soulevent /></div>
    <div class="icn order soulevent soulevent-3"      @click="getEventList('events', 'evt037')" order="37"><soulevent /></div>
    <div class="icn order soulevent soulevent-4"      @click="getEventList('events', 'evt038')" order="38"><soulevent /></div>
    <div class="icn order storyevent story-2"         @click="getEventList('events', 'evt039')" order="39"><storyevent /></div>
    <div class="icn order storyevent story-3"         @click="getEventList('events', 'evt040')" order="40"><storyevent /></div>
    <div class="icn order dungeon dungeon-2"          @click="getEventList('events', 'evt041')" order="41"><dungeon /></div>
    <div class="icn order soulevent soulevent-5"      @click="getEventList('events', 'evt100')" order="100"><soulevent /></div>
    <div class="icn town wilkiet town-2"              @click="getEventList('events', 'icn021')"><wilkiettown /></div>
    <div class="icn tablet tablet-1"                  @click="getEventList('events', 'icn022')"><tablet /></div>
    <div class="icn tablet tablet-2"                  @click="getEventList('events', 'icn023')"><tablet /></div>
    <div class="icn tablet tablet-3"                  @click="getEventList('events', 'icn024')"><tablet /></div>
    <div class="icn tablet tablet-4"                  @click="getEventList('events', 'icn025')"><tablet /></div>
    <div class="icn dungeon dungeon-3"                @click="getEventList('events', 'icn026')"><dungeon /></div>

    <div class="icn soul soul-1"                      @click="getEventList('souls', 'w201')"><soul /></div>
    <div class="icn soul soul-2"                      @click="getEventList('souls', 'w202')"><soul /></div>
    <div class="icn soul soul-3"                      @click="getEventList('souls', 'w203')"><soul /></div>
    <div class="icn soul soul-4"                      @click="getEventList('souls', 'w204')"><soul /></div>
    <div class="icn soul soul-5"                      @click="getEventList('souls', 'w205')"><soul /></div>
    <div class="icn soul soul-6"                      @click="getEventList('souls', 'w206')"><soul /></div>
    <div class="icn soul soul-7"                      @click="getEventList('souls', 'w207')"><soul /></div>
    <div class="icn soul soul-8"                      @click="getEventList('souls', 'w208')"><soul /></div>
    <div class="icn soul soul-9"                      @click="getEventList('souls', 'w209')"><soul /></div>
    <div class="icn soul soul-10"                     @click="getEventList('souls', 'w210')"><soul /></div>
    <div class="icn soul soul-11"                     @click="getEventList('souls', 'w211')"><soul /></div>
    <div class="icn soul soul-12"                     @click="getEventList('souls', 'w212')"><soul /></div>
    <div class="icn soul soul-13"                     @click="getEventList('souls', 'w213')"><soul /></div>
    <div class="icn soul soul-14"                     @click="getEventList('souls', 'w214')"><soul /></div>
</template>

<script lang="ts">
    import storyevent from '@/components/parts/storyevent.vue';
    import soulevent from '@/components/parts/soulevent.vue';
    import wilkiettown from '@/components/parts/wilkiet_town.vue';
    import tablet from '@/components/parts/tablet.vue';
    import dungeon from '@/components/parts/dungeon.vue';
    import soul from '@/components/parts/soul.vue';

    export default {
        name: "MapWilkiet2",
    components: { storyevent, soulevent, wilkiettown, tablet, dungeon, soul },
        data() {
            return {
                nextMap: 'zeine-2',
                defaultEvt: 'evt030',
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