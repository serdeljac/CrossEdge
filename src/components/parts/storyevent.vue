<template>
    <svg class="ce-icon icon-story-event" data-name="Storyevent" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" viewBox="0 0 152 86">

    <circle id="path-story_orb" cx="22.02" cy="64.54" r="20.03" />
    <polygon id="path-story_name" points="43.32 32.18 59.32 16.18 59.32 7.52 69.1 7.52 76.31 .31 151.55 .31 151.55 36.85 43.32 36.85 43.32 32.18" />
    <image id="image-story_event" width="152" height="86" xlink:href="@/assets/icons/storyevent.png" />
    
    <use class="story-path-1" xlink:href="#image-story_event" />
    <use class="story-path-2" xlink:href="#image-story_event" />
</svg>
</template>

<style lang="scss" scoped>
    .story-path-1 {clip-path: url(#path-story_orb);}
    .story-path-2 {clip-path: url(#path-story_name); }
</style>

<script lang="ts">
export default {
    name: "Icon_story_event"
}
</script>