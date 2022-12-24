<!-- eslint-disable prettier/prettier -->

<template>
    <div class="world_map">
        <div class="container zeine1">
            <div class="storyevent story-1"  @click="$emit('iconActive', 'story1')">
                <storyevent />
            </div>
            <div class="storyevent story-2">
                <storyevent />
            </div>
            <div class="storyevent story-3">
                <storyevent />
            </div>
            <div class="storyevent story-4">
                <storyevent />
            </div>
            <div class="soulevent soulevent-1">
                <soulevent />
            </div>
            <div class="town town-1">
                <zeinetown />
            </div>
            <div class="town town-2">
                <zeinetown />
            </div>
            <div class="tablet tablet-1">
                <tablet />
            </div>
            <div class="tablet tablet-2">
                <tablet />
            </div>
            <div class="tablet tablet-3">
                <tablet />
            </div>
            <div class="tablet tablet-4">
                <tablet />
            </div>
            <div class="tablet tablet-5">
                <tablet />
            </div>
            <div class="tablet dungeon-1">
                <dungeon />
            </div>
            <div class="tablet dungeon-2">
                <dungeon />
            </div>
            <div class="soul soul-1">
                <soul />
            </div>
            <div class="soul soul-2">
                <soul />
            </div>
            <div class="soul soul-3">
                <soul />
            </div>
            <div class="soul soul-4">
                <soul />
            </div>
            <div class="soul soul-5">
                <soul />
            </div>
            <div class="soul soul-6">
                <soul />
            </div>
            <div class="soul soul-7">
                <soul />
            </div>
            <div class="soul soul-8">
                <soul />
            </div>
            <div class="soul soul-9">
                <soul />
            </div>
            <div class="soul soul-10">
                <soul />
            </div>
        </div>

    </div>
</template>

<script lang="ts">

import storyevent from './parts/storyevent.vue';
import soulevent from './parts/soulevent.vue';
import zeinetown from './parts/zeine_town.vue';
import tablet from './parts/tablet.vue';
import dungeon from './parts/dungeon.vue';
import soul from './parts/soul.vue';


    export default {
        name: "Map_layout",
    components: { storyevent, soulevent, zeinetown, tablet, dungeon, soul },
    data() {
        return {

        }
    },
    methods: {
        target(ev) {
            this.$emit(ev);
        }
    }
    }
</script>