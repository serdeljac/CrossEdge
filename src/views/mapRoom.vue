<template>
    <div class="maproom">
        <subHeader :headerName="'World Maps'"/>
        <div class="maproom_contents">
            <section class="mapblock zeine1">
                <div class="mapblock-img">
                    <h3>Zeine 1</h3>
                </div>
                
            </section>
            <section class="mapblock zeine2">
                <div class="mapblock-img">
                    <h3>Zeine 2</h3>
                </div>
                
            </section>
            <section class="mapblock zeine3">
                <div class="mapblock-img">
                    <h3>Zeine 3</h3>
                </div>
            </section>

            <section class="mapblock wilkiet1">
                <div class="mapblock-img">
                    <h3>Wilkiet 1</h3>
                </div>
            </section>

            <section class="mapblock wilkiet2">
                <div class="mapblock-img">
                    <h3>Wilkiet 2</h3>
                </div>
            </section>

            <section class="mapblock wilkiet3">
                <div class="mapblock-img">
                    <h3>Wilkiet 3</h3>
                </div>
            </section>

            <section class="mapblock brosste1">
                <div class="mapblock-img">
                    <h3>Brosste 1</h3>
                </div>
            </section>

            <section class="mapblock brosste2">
                <div class="mapblock-img">
                    <h3>Brosste 2</h3>
                </div>
            </section>

            <section class="mapblock brosste3">
                <div class="mapblock-img">
                    <h3>Brosste 3</h3>
                </div>
            </section>

            <section class="mapblock pragma1">
                <div class="mapblock-img">
                    <h3>Pragma 1</h3>
                </div>
            </section>

            <section class="mapblock pragma2">
                <div class="mapblock-img">
                    <h3>Pragma 2</h3>
                </div>
            </section>

            <section class="mapblock pragma3">
                <div class="mapblock-img">
                    <h3>Pragma 3</h3>
                </div>
            </section>

            <section class="mapblock ida1">
                <div class="mapblock-img">
                    <h3>Ida 3</h3>
                </div>
            </section>

            <section class="mapblock ida2">
                <div class="mapblock-img">
                    <h3>Ida 2</h3>
                </div>
            </section>
        </div>
    </div>
</template>

<script lang="ts">
import subHeader from '@/components/main-subheader.vue';

    export default {
        name: 'mapRoom',
        components: {subHeader},
    beforeMount() {
        this.$emit('mapOverview', false);
    },
    }
</script>