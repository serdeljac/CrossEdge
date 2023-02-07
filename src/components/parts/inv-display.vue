<template>
    <div v-if="itemName">
        <p>
            <img v-bind:src="'/src/assets/icons/' + itemImg + '.jpg'" />
            {{ itemName }}
        </p>
    </div>
    <div v-else>
        <p>-</p>
    </div>
</template>

<script lang="ts">
    export default {
        name: 'Image&Name',
        props: ['itemImg', 'itemName']
    }
</script>