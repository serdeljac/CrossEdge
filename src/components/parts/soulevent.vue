<template>
    <svg class="ce-icon icon-soul_event" data-name="Soulevent" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" viewBox="0 0 154 87">

    <rect id="path-soul_orb" x="6.43" y="45.63" width="35.33" height="33.55" rx="4.07" ry="4.07" transform="translate(51.19 1.24) rotate(45)" />
    <polygon id="path-soul_name" points="152.74 1.07 152.74 34.85 45.33 34.85 45.33 32.63 62.74 15.22 62.74 7.59 71.11 7.59 77.78 .92 152.74 1.07" />
    <image id="image-soul_event" width="154" height="87" xlink:href="@/assets/icons/soulevent.png" />

    <use class="soul-path-1" xlink:href="#image-soul_event" />
    <use class="soul-path-2" xlink:href="#image-soul_event" />
</svg>
</template>

<style lang="scss" scoped>
    .soul-path-1 {clip-path: url(#path-soul_orb);}
    .soul-path-2 {clip-path: url(#path-soul_name);}
    svg {width: 70px;}
</style>

<script lang="ts">
export default {
    name: "Soul_event"
}
</script>