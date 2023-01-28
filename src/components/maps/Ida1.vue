<template>
    <div class="icn order dungeon dungeon-1"          @click="getEventList('events', 'evt132')" order="132"><dungeon /></div>
    <div class="icn order soulevent soulevent-1"      @click="getEventList('events', 'evt133')" order="133"><soulevent /></div>
    <div class="icn order soulevent soulevent-2"      @click="getEventList('events', 'evt134')" order="134"><soulevent /></div>
    <div class="icn order soulevent soulevent-3"      @click="getEventList('events', 'evt135')" order="135"><soulevent /></div>
    <div class="icn order soulevent soulevent-4"      @click="getEventList('events', 'evt136')" order="136"><soulevent /></div>
    <div class="icn order storyevent story-1"         @click="getEventList('events', 'evt137')" order="137"><storyevent /></div>
    <div class="icn order storyevent story-2"         @click="getEventList('events', 'evt138')" order="138"><storyevent /></div>
    <div class="icn order storyevent story-3"         @click="getEventList('events', 'evt139')" order="139"><storyevent /></div>
    <div class="icn order storyevent story-4"         @click="getEventList('events', 'evt140')" order="140"><storyevent /></div>
    <div class="icn town ida town-1"                  @click="getEventList('events', 'icn073')"><idatown /></div>
    <div class="icn town ida town-2"                  @click="getEventList('events', 'icn074')"><idatown /></div>
    <div class="icn tablet tablet-1"                  @click="getEventList('events', 'icn075')"><tablet /></div>
    <div class="icn tablet tablet-2"                  @click="getEventList('events', 'icn076')"><tablet /></div>
    <div class="icn tablet tablet-3"                  @click="getEventList('events', 'icn077')"><tablet /></div>
    <div class="icn tablet tablet-4"                  @click="getEventList('events', 'icn078')"><tablet /></div>
    <div class="icn dungeon dungeon-2"                @click="getEventList('events', 'icn079')"><dungeon /></div>

    <div class="icn soul soul-1"                      @click="getEventList('souls', 'i101')"><soul /></div>
    <div class="icn soul soul-2"                      @click="getEventList('souls', 'i102')"><soul /></div>
    <div class="icn soul soul-3"                      @click="getEventList('souls', 'i103')"><soul /></div>
    <div class="icn soul soul-4"                      @click="getEventList('souls', 'i104')"><soul /></div>
    <div class="icn soul soul-5"                      @click="getEventList('souls', 'i105')"><soul /></div>
    <div class="icn soul soul-6"                      @click="getEventList('souls', 'i106')"><soul /></div>
    <div class="icn soul soul-7"                      @click="getEventList('souls', 'i107')"><soul /></div>
    <div class="icn soul soul-8"                      @click="getEventList('souls', 'i108')"><soul /></div>
    <div class="icn soul soul-9"                      @click="getEventList('souls', 'i109')"><soul /></div>
    <div class="icn soul soul-10"                     @click="getEventList('souls', 'i110')"><soul /></div>
    <div class="icn soul soul-11"                     @click="getEventList('souls', 'i111')"><soul /></div>
    <div class="icn soul soul-12"                     @click="getEventList('souls', 'i112')"><soul /></div>
</template>

<script lang="ts">
    import storyevent from '@/components/parts/storyevent.vue';
    import soulevent from '@/components/parts/soulevent.vue';
    import idatown from '@/components/parts/ida_town.vue';
    import tablet from '@/components/parts/tablet.vue';
    import dungeon from '@/components/parts/dungeon.vue';
    import soul from '@/components/parts/soul.vue';

    export default {
        name: "MapIda1",
        components: { storyevent, soulevent, idatown, tablet, dungeon, soul },
        data() {
            return {
                nextMap: 'ida-1 (True End)',
                defaultEvt: 'evt132',
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