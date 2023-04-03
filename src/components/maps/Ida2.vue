<template>
    <div class="icn evt148 storyevent story-1"               @click="getEventList('events', 'evt148')"><storyevent /></div>
    <div class="icn evt149 storyevent story-2"               @click="getEventList('events', 'evt149')"><storyevent /></div>
    <div class="icn evt150 storyevent story-3"               @click="getEventList('events', 'evt150')"><storyevent /></div>
    <div class="icn evt151 storyevent story-4"               @click="getEventList('events', 'evt151')"><storyevent /></div>
    <div class="icn evt152 storyevent story-5"               @click="getEventList('events', 'evt152')"><storyevent /></div>
    <div class="icn evt153 storyevent story-6"               @click="getEventList('events', 'evt153')"><storyevent /></div>
    <div class="icn evt154 storyevent story-7"               @click="getEventList('events', 'evt154')"><storyevent /></div>
    <div class="icn evt155 storyevent story-8"               @click="getEventList('events', 'evt155')"><storyevent /></div>
    <div class="icn evt156 storyevent story-9"               @click="getEventList('events', 'evt156')"><storyevent /></div>
    <div class="icn evt157 storyevent story-10"              @click="getEventList('events', 'evt157')"><storyevent /></div>
    <div class="icn evt158 storyevent story-11"              @click="getEventList('events', 'evt158')"><storyevent /></div>
    <div class="icn evt159 storyevent story-12"              @click="getEventList('events', 'evt159')"><storyevent /></div>
    <div class="icn evt160 storyevent story-13"              @click="getEventList('events', 'evt160')"><storyevent /></div>
    <div class="icn icn080 town ida town-1"                  @click="getEventList('events', 'icn080')"><ida2town /></div>
</template>

<script lang="ts">
    import storyevent from '@/components/parts/storyevent.vue';
    import ida2town from '@/components/parts/ida2_town.vue';
    import $ from 'jquery';

    export default {
        name: "MapIda2",
        components: { storyevent, ida2town,},
        data() {
            return {
                nextMap: 'ida-3',
                defaultEvt: 'icn080',
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