<template>
    <div class="maproom">
        <subHeader :headerName="'World Maps'" :backlink="'home'"/>
        <div class="maproom_contents">
            <section class="mapblock zeine1">
                <h3>Zeine 1</h3>
                <div class="mapblock-contain" @click="chooseMap('zeine-1')">
                    <div class="mapblock-img"></div>
                </div>
            </section>
            <section class="mapblock zeine2">
                <h3>Zeine 2</h3>
                <div class="mapblock-contain" @click="chooseMap('zeine-2')">
                    <div class="mapblock-img"></div>
                </div>
                
            </section>
            <section class="mapblock zeine3">
                <h3>Zeine 3</h3>
                <div class="mapblock-contain" @click="chooseMap('zeine-3')">
                    <div class="mapblock-img"></div>
                </div>
            </section>

            <section class="mapblock wilkiet1">
                <h3>Wilkiet 1</h3>
                <div class="mapblock-contain" @click="chooseMap('wilkiet-1')">
                    <div class="mapblock-img"></div>
                </div>
            </section>

            <section class="mapblock wilkiet2">
                <h3>Wilkiet 2</h3>
                <div class="mapblock-contain" @click="chooseMap('wilkiet-2')">
                    <div class="mapblock-img"></div>
                </div>
            </section>

            <section class="mapblock wilkiet3">
                <h3>Wilkiet 3</h3>
                <div class="mapblock-contain" @click="chooseMap('wilkiet-3')">
                    <div class="mapblock-img"></div>
                </div>
            </section>

            <section class="mapblock brosste1">
                <h3>Brosste 1</h3>
                <div class="mapblock-contain" @click="chooseMap('brosste-1')">
                    <div class="mapblock-img"></div>
                </div>
            </section>

            <section class="mapblock brosste2">
                <h3>Brosste 2</h3>
                <div class="mapblock-contain" @click="chooseMap('brosste-2')">
                    <div class="mapblock-img"></div>
                </div>
            </section>

            <section class="mapblock brosste3">
                <h3>Brosste 3</h3>
                <div class="mapblock-contain" @click="chooseMap('brosste-3')">
                    <div class="mapblock-img"></div>
                </div>
            </section>

            <section class="mapblock pragma1">
                <h3>Pragma 1</h3>
                <div class="mapblock-contain" @click="chooseMap('pragma-1')">
                    <div class="mapblock-img"></div>
                </div>
            </section>

            <section class="mapblock pragma2">
                <h3>Pragma 2</h3>
                <div class="mapblock-contain" @click="chooseMap('pragma-2')">
                    <div class="mapblock-img"></div>
                </div>
            </section>

            <section class="mapblock pragma3">
                <h3>Pragma 3</h3>
                <div class="mapblock-contain" @click="chooseMap('pragma-3')">
                    <div class="mapblock-img"></div>
                </div>
            </section>

            <section class="mapblock ida1">
                <h3>Ida 1</h3>
                <div class="mapblock-contain" @click="chooseMap('ida-1')">
                    <div class="mapblock-img"></div>
                </div>
            </section>

            <section class="mapblock ida1">
                <h3>Ida 1 (True End)</h3>
                <div class="mapblock-contain" @click="chooseMap('ida-1te')">
                    <div class="mapblock-img"></div>
                </div>
            </section>

            <section class="mapblock ida2">
                <h3>Ida 2</h3>
                <div class="mapblock-contain" @click="chooseMap('ida-2')">
                    <div class="mapblock-img"></div>
                </div>
            </section>

            <section class="mapblock ida3">
                <h3>Ida 3</h3>
                <div class="mapblock-contain" @click="chooseMap('ida-3')">
                    <div class="mapblock-img"></div>
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
        methods: {
            chooseMap(map) {
                this.$router.push({ name: map, params: { selectedMap: map } });
            }
        }
    }
</script>