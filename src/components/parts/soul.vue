<template>
    <svg class="ce-icon icon-soul" data-name="Soul" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" viewBox="0 0 45 48">
        <path id="path-soul"
            d="m1.44,35.57V10.22c0-1.35.84-2.57,2.11-3.04L19.67,1.48c.36-.14.75-.21,1.14-.21h5.08c.44,0,.87.09,1.27.26l13.75,5.23c1.2.51,1.97,1.69,1.97,2.99v25.87c0,1.22-.68,2.33-1.76,2.89l-14.65,7.51c-.46.24-.97.36-1.48.36h-4.69c-.49,0-.97-.11-1.42-.32l-15.61-7.57c-1.12-.54-1.83-1.68-1.83-2.92Z" />
        <image class="image-soul" width="45" height="48" xlink:href="@/assets/icons/soul.png" />
    </svg>
</template>

<style lang="scss" scoped>
    .image-soul {clip-path: url(#path-tablet);}
    svg {width: 22px;}
</style>

<script lang="ts">
export default {
    name: "Tablet",
}
</script>