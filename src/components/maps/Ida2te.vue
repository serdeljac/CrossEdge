<template>
    <div class="icn storyevent story-1"               @click="getEventList('evt148')"><storyevent /></div>
    <div class="icn storyevent story-2"               @click="getEventList('evt149')"><storyevent /></div>
    <div class="icn storyevent story-3"               @click="getEventList('evt150')"><storyevent /></div>
    <div class="icn storyevent story-4"               @click="getEventList('evt151')"><storyevent /></div>
    <div class="icn storyevent story-5"               @click="getEventList('evt152')"><storyevent /></div>
    <div class="icn storyevent story-6"               @click="getEventList('evt153')"><storyevent /></div>
    <div class="icn storyevent story-7"               @click="getEventList('evt154')"><storyevent /></div>
    <div class="icn storyevent story-8"               @click="getEventList('evt155')"><storyevent /></div>
    <div class="icn storyevent story-9"               @click="getEventList('evt156')"><storyevent /></div>
    <div class="icn storyevent story-10"              @click="getEventList('evt157')"><storyevent /></div>
    <div class="icn storyevent story-11"              @click="getEventList('evt158')"><storyevent /></div>
    <div class="icn storyevent story-12"              @click="getEventList('evt159')"><storyevent /></div>
    <div class="icn storyevent story-13"              @click="getEventList('evt160')"><storyevent /></div>
    <div class="icn town ida town-1"                  @click="getEventList('icn080')"><ida2town /></div>
</template>

<script lang="ts">
    import storyevent from '@/components/parts/storyevent.vue';
    import soulevent from '@/components/parts/soulevent.vue';
    import ida2town from '@/components/parts/ida2_town.vue';
    import tablet from '@/components/parts/tablet.vue';
    import dungeon from '@/components/parts/dungeon.vue';
    import soul from '@/components/parts/soul.vue';

    export default {
        name: "MapIda1TrueEnd",
        components: { storyevent, soulevent, ida2town, tablet, dungeon, soul },
        data() {
            return {
                nextMap: 'ida-3 (True End)',
                defaultEvt: 'evt148',
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