<template>

<svg id="tablet_blockade" data-name="Tablet" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" viewBox="0 0 98 102">
    <defs>
        <clipPath id="tablet">
            <path d="m24.59,68.81V27.19s2.67-11.11,22.37-11.11,24.59,8.15,25.48,10.52.89,34.81.89,34.81c0,0,1.04.3,1.19,1.78s0,22.96,0,22.96c0,0,1.48,2.37-5.48,2.52s-41.33,0-41.33,0c0,0-4.74,1.93-4.59-2.96s-2.22-12.44-1.63-13.78,2.37-.59,2.37-.59l.74-2.52Z" />
        </clipPath>
    </defs>

        <image class="tablet-path" width="98" height="102" xlink:href="@/assets/icons/tablet.png" />
</svg>








</template>

<script lang="ts">
export default {
    name: "Tablet"
}
</script>

<style lang="scss" scoped>
.tablet-path {
    clip-path: url(#tablet);
}

path {fill: none;}

svg {
    cursor: pointer;
    position: absolute;
    width: 42px;
    transition: all .23s ease;

    &:hover {
        filter: drop-shadow(0px 0px 5px rgb(244, 255, 194));
    }
}
</style>