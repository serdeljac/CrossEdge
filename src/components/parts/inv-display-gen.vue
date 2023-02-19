<template>
        <p class="inv-name" v-for="arr in itemTr" :key="arr.id">
            {{ arr  }}
        </p>
</template>

<script lang="ts">
    export default {
        name: 'Image&Name',
    props: ['itemTr'],
    mounted() {

    }
    }
</script>