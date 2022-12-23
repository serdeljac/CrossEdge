<!-- eslint-disable prettier/prettier -->

<template>
    <div class="world_map">
        <div class="container zeine1">
            <div class="storyevent story1">
                <storyevent />
            </div>
            <div class="storyevent story2">
                <storyevent />
            </div>
            <div class="storyevent story3">
                <storyevent />
            </div>
            <div class="storyevent story4">
                <storyevent />
            </div>
            <div class="town town1">
                <zeinetown />
            </div>
            <div class="town town2">
                <zeinetown />
            </div>
            <div class="tablet tablet1">
                <tablet />
            </div>
            <div class="tablet tablet2">
                <tablet />
            </div>
            <div class="tablet tablet3">
                <tablet />
            </div>
            <div class="tablet tablet4">
                <tablet />
            </div>
            <div class="tablet tablet5">
                <tablet />
            </div>
        </div>

    </div>
</template>

<script lang="ts">

import storyevent from './parts/storyevent.vue';
import soulevent from './parts/soulevent.vue';
import zeinetown from './parts/zeine_town.vue';
import tablet from './parts/tablet.vue';


    export default {
        name: "Map_layout",
    components: { storyevent, soulevent, zeinetown, tablet },
    }
</script>