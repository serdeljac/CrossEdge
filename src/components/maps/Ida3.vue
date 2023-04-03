<template>
    <div class="icn evt161 storyevent story-1"               @click="getEventList('events', 'evt161')"><storyevent /></div>
    <div class="icn evt162 storyevent story-2"               @click="getEventList('events', 'evt162')"><storyevent /></div>
    <div class="icn evt163 storyevent story-3"               @click="getEventList('events', 'evt163')"><storyevent /></div>
    <div class="icn evt164 storyevent story-4"               @click="getEventList('events', 'evt164')"><storyevent /></div>
    <div class="icn evt165 storyevent story-5"               @click="getEventList('events', 'evt165')"><storyevent /></div>
    <div class="icn evt166 storyevent story-6"               @click="getEventList('events', 'evt166')"><storyevent /></div>
    <div class="icn evt167 storyevent story-7"               @click="getEventList('events', 'evt167')"><storyevent /></div>
    <div class="icn evt168 storyevent story-8"               @click="getEventList('events', 'evt168')"><storyevent /></div>
    <div class="icn evt169 storyevent story-9"               @click="getEventList('events', 'evt169')"><storyevent /></div>
    <div class="icn evt170 storyevent story-10"              @click="getEventList('events', 'evt170')"><storyevent /></div>
    <div class="icn evt171 storyevent story-11"              @click="getEventList('events', 'evt171')"><storyevent /></div>
    <div class="icn evt172 storyevent story-12"              @click="getEventList('events', 'evt172')"><storyevent /></div>
    <div class="icn evt173 storyevent story-13"              @click="getEventList('events', 'evt173')"><storyevent /></div>
    <div class="icn evt174 storyevent story-14"              @click="getEventList('events', 'evt174')"><storyevent /></div>
    <div class="icn evt175 storyevent story-15"              @click="getEventList('events', 'evt175')"><storyevent /></div>
    <div class="icn evt176 storyevent story-16"              @click="getEventList('events', 'evt176')"><storyevent /></div>
    <div class="icn evt177 storyevent story-17"              @click="getEventList('events', 'evt177')"><storyevent /></div>
    <div class="icn evt178 storyevent story-18"              @click="getEventList('events', 'evt178')"><storyevent /></div>
    <div class="icn evt179 storyevent story-19"              @click="getEventList('events', 'evt179')"><storyevent /></div>
    <div class="icn evt180 storyevent story-20"              @click="getEventList('events', 'evt180')"><storyevent /></div>
    <div class="icn evt181 storyevent story-21"              @click="getEventList('events', 'evt181')"><storyevent /></div>
    <div class="icn evt182 storyevent story-22"              @click="getEventList('events', 'evt182')"><storyevent /></div>
    <div class="icn evt183 storyevent story-23"              @click="getEventList('events', 'evt183')"><storyevent /></div>
    <div class="icn evt184 storyevent story-24"              @click="getEventList('events', 'evt184')"><storyevent /></div>
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
                defaultEvt: 'icn081',
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