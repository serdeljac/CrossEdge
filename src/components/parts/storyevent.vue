<template>
    <svg class="story_event" data-name="story_event" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" viewBox="0 0 152 86">

    <defs>
        <clipPath id="orb">
            <circle cx="22.02" cy="64.54" r="20.03" />
        </clipPath>

        <clipPath id="name">
            <polygon points="43.32 32.18 59.32 16.18 59.32 7.52 69.1 7.52 76.31 .31 151.55 .31 151.55 36.85 43.32 36.85 43.32 32.18" />
        </clipPath>

        <image id="story_event_image" width="152" height="86" xlink:href="@/assets/icons/storyevent.png" />
    </defs>

    <use class="orb-path" xlink:href="#story_event_image" />
    <use class="name-path" xlink:href="#story_event_image" />

</svg>

</template>

<script lang="ts">
    export default {
      name: "Story_event"  
    }
</script>

<style lang="scss" scoped>
.name-path {clip-path: url(#name); }
.orb-path {clip-path: url(#orb);}
circle, polygon {fill: none;}

svg {
    width: 70px;
    transition: all .23s ease;

    &:hover {
        filter: drop-shadow(0px 0px 5px rgb(244, 255, 194));
    }
}
</style>