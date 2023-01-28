<template>
    <footer class="footer" :class="{ 'map_overview': mapOverview }">
        <p>Created by NAME HERE 2011. All Rights Reserved.</p>
    </footer>
</template>

<script>
    export default {
        name: 'Footer',
    props: ['mapOverview']
    }
</script>