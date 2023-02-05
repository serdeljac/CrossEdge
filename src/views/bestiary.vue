<template>
    <div class="bestiary">
        <subHeader :headerName="'Bestiary'" :backlink="'home'"/>
        <div class="bestiary_content">

            <div class="bestiary_sub-header">
                <div class="bestiary_list">
                    <p>#</p>
                    <p>Name</p>
                    <p>Zone</p>
                    <p>Drop 1</p>
                    <p>Drop 2</p>
                    <p>Rare 1</p>
                    <p>Rare 2</p>
                    <p>Overkill</p>
                    <p>Title</p>
                    <p>Kills Needed</p>
                </div>
                <hr>
                <div class="bestiary_list ableSel" v-for="arr in bestiary" :key="arr.ID" :class="trimName(arr.name)" @click="holdHoverBar(arr.name)">
                    <p>{{ arr.ID }}</p>
                    <p>{{ arr.name }}</p>
                    <p>{{ changeName(arr.zone) }}</p>
                    <p>{{ arr.drop1 }}</p>
                    <p>{{ arr.drop2 }}</p>
                    <p>{{ arr.rare1 }}</p>
                    <p>{{ arr.rare2 }}</p>
                    <p>{{ arr.overkill }}</p>
                    <p v-if="arr.kill_title">Title: {{ arr.kill_title }}</p>
                    <p>{{ arr.kill_count }}</p>
                </div>
            </div>
        </div>
    </div>
</template>

<script lang="ts">
import bestiaryRaw from '@/assets/data/bestiary.json';
import subHeader from '@/components/main-subheader.vue';
import $ from 'jquery';

    export default {
    name: "BestiaryList",
    components: { subHeader },
    data() {
        return {
            bestiary: bestiaryRaw[2].data,
            names: {
                'zeine-1': 'Zeine 1',
                'zeine-2': 'Zeine 2',
                'zeine-3': 'Zeine 3',
                'wilkiet-1': 'Wilkiet 1',
                'wilkiet-2': 'Wilkiet 2',
                'wilkiet-3': 'Wilkiet 3',
                'brosste-1': 'Brosste 1',
                'brosste-2': 'Brosste 2',
                'brosste-3': 'Brosste 3',
                'pragma-1': 'Pragma 1',
                'pragma-2': 'Pragma 2',
                'pragma-3': 'Pragma 3',
                'ida-1': 'Ida 1',
                'ida-1te': 'Ida 1 (True End)',
                'ida-2': 'Ida 2',
                'ida-3': 'Ida 3',
            }
        }
    },
    beforeMount() {
        this.$emit('mapOverview', false);
    },
    methods: {
        changeName(x) {
            const zone = this.names[x];
            return zone;
        },
        trimName(x) {
            const trim = x.replace(/\s/, '');
            return trim;
        },
        holdHoverBar(x) {
            const trim = x.replace(/\s/, '');
            $('.ableSel').removeClass('active');
            $('.' + trim).addClass('active');
            console.log('active!')
        }
    }
}
</script>