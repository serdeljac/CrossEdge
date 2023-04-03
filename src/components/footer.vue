<template>
    <footer class="footer" :class="{ 'map_overview': mapOverview }">
        <p>Cross Edge Unofficial &copy; 2023. All Rights Reserved.</p>
    </footer>
</template>

<script lang="ts">
    export default {
        name: 'FooterBar',
    props: ['mapOverview']
    }
</script>