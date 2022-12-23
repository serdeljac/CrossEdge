<template>
<svg class="soul_event" data-name="soul_event" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" viewBox="0 0 154 87">

    <defs>
        <clipPath id="orb">
            <rect x="6.43" y="45.63" width="35.33" height="33.55" rx="4.07" ry="4.07" transform="translate(51.19 1.24) rotate(45)" />
        </clipPath>

        <clipPath id="name">
            <polygon points="152.74 1.07 152.74 34.85 45.33 34.85 45.33 32.63 62.74 15.22 62.74 7.59 71.11 7.59 77.78 .92 152.74 1.07" />
        </clipPath>

        <image id="soul_event_image" width="154" height="87" xlink:href="@/assets/icons/soulevent.png" />
    </defs>

    <use class="orb-path" xlink:href="#soul_event_image" />
    <use class="name-path" xlink:href="#soul_event_image" />
    
</svg>

</template>

<script lang="ts">
export default {
    name: "Soul_event"
}
</script>

<style lang="scss" scoped>

.name-path {clip-path: url(#name);}
.orb-path {clip-path: url(#orb);}

rect, polygon {fill: none;}

svg {
    width: 70px;
    transition: all .23s ease;

    &:hover {
        filter: drop-shadow(0px 0px 5px rgb(244, 255, 194));
    }
}
</style>