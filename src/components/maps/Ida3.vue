<template>
    <div class="icn evt149 storyevent story-1"               @click="getEventList('events', 'evt148')"><storyevent /></div>
    <div class="icn evt150 storyevent story-2"               @click="getEventList('events', 'evt148')"><storyevent /></div>
    <div class="icn evt151 storyevent story-3"               @click="getEventList('events', 'evt148')"><storyevent /></div>
    <div class="icn evt152 storyevent story-4"               @click="getEventList('events', 'evt148')"><storyevent /></div>
    <div class="icn evt153 storyevent story-5"               @click="getEventList('events', 'evt148')"><storyevent /></div>
    <div class="icn evt154 storyevent story-6"               @click="getEventList('events', 'evt148')"><storyevent /></div>
    <div class="icn evt155 storyevent story-7"               @click="getEventList('events', 'evt148')"><storyevent /></div>
    <div class="icn evt156 storyevent story-8"               @click="getEventList('events', 'evt148')"><storyevent /></div>
    <div class="icn evt157 storyevent story-9"               @click="getEventList('events', 'evt148')"><storyevent /></div>
    <div class="icn evt158 storyevent story-10"              @click="getEventList('events', 'evt148')"><storyevent /></div>
    <div class="icn evt159 storyevent story-11"              @click="getEventList('events', 'evt148')"><storyevent /></div>
    <div class="icn evt160 storyevent story-12"              @click="getEventList('events', 'evt148')"><storyevent /></div>
    <div class="icn evt161 storyevent story-13"              @click="getEventList('events', 'evt148')"><storyevent /></div>
    <div class="icn evt162 storyevent story-14"              @click="getEventList('events', 'evt148')"><storyevent /></div>
    <div class="icn evt163 storyevent story-15"              @click="getEventList('events', 'evt148')"><storyevent /></div>
    <div class="icn evt164 storyevent story-16"              @click="getEventList('events', 'evt148')"><storyevent /></div>
    <div class="icn evt165 storyevent story-17"              @click="getEventList('events', 'evt148')"><storyevent /></div>
    <div class="icn evt166 storyevent story-18"              @click="getEventList('events', 'evt148')"><storyevent /></div>
    <div class="icn evt167 storyevent story-19"              @click="getEventList('events', 'evt148')"><storyevent /></div>
    <div class="icn evt168 storyevent story-20"              @click="getEventList('events', 'evt148')"><storyevent /></div>
    <div class="icn evt169 storyevent story-21"              @click="getEventList('events', 'evt148')"><storyevent /></div>
    <div class="icn evt170 storyevent story-22"              @click="getEventList('events', 'evt148')"><storyevent /></div>
    <div class="icn evt171 storyevent story-23"              @click="getEventList('events', 'evt148')"><storyevent /></div>
    <div class="icn evt172 storyevent story-24"              @click="getEventList('events', 'evt148')"><storyevent /></div>
    <div class="icn icn081 town ida town-1"                  @click="getEventList('events', 'icn081')"><ida2town /></div>
</template>

<script lang="ts">
    import storyevent from '@/components/parts/storyevent.vue';
    import ida2town from '@/components/parts/ida2_town.vue';
    import $ from 'jquery';

    export default {
        name: "MapIda3",
        components: { storyevent, ida2town },
        data() {
            return {
                nextMap: '',
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