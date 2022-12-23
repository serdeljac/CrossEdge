<template>
    <svg class="ce-icon icon-dungeon" data-name="Dungeon" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" viewBox="0 0 84.39 87.76">
        <polygon id="path-dungeon" points="33.34 15.28 42.77 6.54 51.18 15.28 68.13 15.28 68.13 32.75 79.99 45.34 68.26 54.46 68.26 73.6 51.69 73.6 42.51 85.16 33.34 73.6 16.51 73.47 16.51 53.17 5.17 45.85 15.88 34.16 15.88 15.79 33.34 15.28" />
        <image class="image-dungeon" width="50" height="52" transform="scale(1.69)" xlink:href="@/assets/icons/dungeon.png" />
    </svg>
</template>

<style lang="scss" scoped>
    .image-dungeon {clip-path: url(#path-dungeon-orb);}
    svg {width: 20px;}
</style>

<script lang="ts">
export default {
    name: "Dungeon"
}
</script>