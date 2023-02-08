<template>

</template>

<script lang="ts">
    import synth from '@/assets/data/synthesis.json';

    export default {
        name: 'GeneratedMaterials',
        props: ['genArray', 'matArr'],
        data() {
            return {
                synth: synth[2].data,
                mater: []
            }
        },
        mounted() {
            this.findMaterials(this.matArr);
        },
        methods: {

        }
    }
</script>