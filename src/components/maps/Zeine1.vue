<template>
    <div class="icn evt001 order storyevent story-1"         @click="getEventList('events', 'evt001')" order="1"><storyevent /></div>
    <div class="icn evt002 order storyevent story-2"         @click="getEventList('events', 'evt002')" order="2"><storyevent /></div>
    <div class="icn evt003 order storyevent story-3"         @click="getEventList('events', 'evt003')" order="3"><storyevent /></div>
    <div class="icn evt004 order town ziene town-1"          @click="getEventList('events', 'evt004')" order="4"><zeinetown /></div>
    <div class="icn evt005 order storyevent story-4"         @click="getEventList('events', 'evt005')" order="5"><storyevent /></div>
    <div class="icn evt006 order storyevent story-5"         @click="getEventList('events', 'evt006')" order="6"><storyevent /></div>
    <div class="icn evt007 order storyevent story-6"         @click="getEventList('events', 'evt007')" order="7"><storyevent /></div>
    <div class="icn evt008 order dungeon dungeon-1"          @click="getEventList('events', 'evt008')" order="8"><dungeon /></div>
    <div class="icn evt063 order soulevent soulevent-1 te"   @click="getEventList('events', 'evt063')" order="63"><soulevent /></div>
    <div class="icn icn001 town ziene town-2"                @click="getEventList('events', 'icn001')"><zeinetown /></div>
    <div class="icn icn002 tablet tablet-1"                  @click="getEventList('events', 'icn002')"><tablet /></div>
    <div class="icn icn003 tablet tablet-2"                  @click="getEventList('events', 'icn003')"><tablet /></div>
    <div class="icn icn004 tablet tablet-3"                  @click="getEventList('events', 'icn004')"><tablet /></div>
    <div class="icn icn005 tablet tablet-4"                  @click="getEventList('events', 'icn005')"><tablet /></div>
    <div class="icn icn006 tablet tablet-5"                  @click="getEventList('events', 'icn006')"><tablet /></div>
    <div class="icn icn007 dungeon dungeon-2"                @click="getEventList('events', 'icn007')"><dungeon /></div>

    <div class="icn z101 soul soul-1"                        @click="getEventList('souls', 'z101')"><soul /></div>
    <div class="icn z102 soul soul-2"                        @click="getEventList('souls', 'z102')"><soul /></div>
    <div class="icn z103 soul soul-3"                        @click="getEventList('souls', 'z103')"><soul /></div>
    <div class="icn z104 soul soul-4"                        @click="getEventList('souls', 'z104')"><soul /></div>
    <div class="icn z105 soul soul-5"                        @click="getEventList('souls', 'z105')"><soul /></div>
    <div class="icn z106 soul soul-6"                        @click="getEventList('souls', 'z106')"><soul /></div>
    <div class="icn z107 soul soul-7"                        @click="getEventList('souls', 'z107')"><soul /></div>
    <div class="icn z108 soul soul-8"                        @click="getEventList('souls', 'z108')"><soul /></div>
    <div class="icn z109 soul soul-9"                        @click="getEventList('souls', 'z109')"><soul /></div>
    <div class="icn z110 soul soul-10"                       @click="getEventList('souls', 'z110')"><soul /></div>
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
                nextMap: 'wilkiet-1',
                defaultEvt: 'evt001',
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
                $('.'+ id ).addClass('selected');
            },
        },
    }
</script>