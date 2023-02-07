<template>
    <div class="synth_body generated">
        <h3>Generated</h3>
        {{ genArray }}
    </div>
</template>

<script lang="ts">
    export default {
        name: 'GeneratedMaterials',
        props: ['genArray']
    }
</script>