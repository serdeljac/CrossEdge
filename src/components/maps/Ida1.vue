<template>
    <div class="icn evt132 order dungeon dungeon-1"          @click="getEventList('events', 'evt132')" order="132"><dungeon /></div>
    <div class="icn evt133 order soulevent soulevent-1 te"   @click="getEventList('events', 'evt133')" order="133"><soulevent /></div>
    <div class="icn evt134 order soulevent soulevent-2 te"   @click="getEventList('events', 'evt134')" order="134"><soulevent /></div>
    <div class="icn evt135 order soulevent soulevent-3 te"   @click="getEventList('events', 'evt135')" order="135"><soulevent /></div>
    <div class="icn evt136 order soulevent soulevent-4 te"   @click="getEventList('events', 'evt136')" order="136"><soulevent /></div>
    <div class="icn evt137 order storyevent story-1"         @click="getEventList('events', 'evt137')" order="137"><storyevent /></div>
    <div class="icn evt138 order storyevent story-2"         @click="getEventList('events', 'evt138')" order="138"><storyevent /></div>
    <div class="icn evt139 order storyevent story-3"         @click="getEventList('events', 'evt139')" order="139"><storyevent /></div>
    <div class="icn evt140 order storyevent story-4"         @click="getEventList('events', 'evt140')" order="140"><storyevent /></div>
    <div class="icn icn073 town ida town-1"                  @click="getEventList('events', 'icn073')"><idatown /></div>
    <div class="icn icn074 town ida town-2"                  @click="getEventList('events', 'icn074')"><idatown /></div>
    <div class="icn icn075 tablet tablet-1"                  @click="getEventList('events', 'icn075')"><tablet /></div>
    <div class="icn icn076 tablet tablet-2"                  @click="getEventList('events', 'icn076')"><tablet /></div>
    <div class="icn icn077 tablet tablet-3"                  @click="getEventList('events', 'icn077')"><tablet /></div>
    <div class="icn icn078 tablet tablet-4"                  @click="getEventList('events', 'icn078')"><tablet /></div>
    <div class="icn icn079 dungeon dungeon-2"                @click="getEventList('events', 'icn079')"><dungeon /></div>

    <div class="icn i101 soul soul-1"                      @click="getEventList('souls', 'i101')"><soul /></div>
    <div class="icn i102 soul soul-2"                      @click="getEventList('souls', 'i102')"><soul /></div>
    <div class="icn i103 soul soul-3"                      @click="getEventList('souls', 'i103')"><soul /></div>
    <div class="icn i104 soul soul-4"                      @click="getEventList('souls', 'i104')"><soul /></div>
    <div class="icn i105 soul soul-5"                      @click="getEventList('souls', 'i105')"><soul /></div>
    <div class="icn i112 soul soul-12 ts"                  @click="getEventList('souls', 'i112')"><soul /></div>
</template>

<script lang="ts">
    import storyevent from '@/components/parts/storyevent.vue';
    import soulevent from '@/components/parts/soulevent.vue';
    import idatown from '@/components/parts/ida_town.vue';
    import tablet from '@/components/parts/tablet.vue';
    import dungeon from '@/components/parts/dungeon.vue';
    import soul from '@/components/parts/soul.vue';
    import $ from 'jquery';

    export default {
        name: "MapIda1",
        components: { storyevent, soulevent, idatown, tablet, dungeon, soul },
        data() {
            return {
                nextMap: 'ida-1te',
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
                $('div').removeClass('selected');
                $('.' + id).addClass('selected');
            },
        },
    }
</script>