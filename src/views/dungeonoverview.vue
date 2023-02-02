<template>
    <div class="dungeonOver">
        <subHeader :headerName="dungeon" :backlink="'dunMapRoom'" />
        <section class="mapblock renuit">
            <div class="mapblock-contain">
                <img v-bind:src="`${'/src/assets/maps/dungeon/' + dungeon + '.jpg'}`" v-bind:alt="dungeon">
            </div>
        </section>
    </div>
</template>

<script lang="ts">
import subHeader from '@/components/main-subheader.vue';

export default {
    name: 'mapOverview',
    components: { subHeader },
    props: ['dungeon'],
    beforeMount() {
        this.$emit('mapOverview', false);
    },
}
</script>