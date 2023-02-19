<template>
        <p class="inv-name" v-if="itemName">
            {{ itemTr  }}
            <img v-bind:src="'/src/assets/icons/' + itemImg + '.jpg'" />
            {{ itemName }}
        </p>

    <p v-else>-</p>
</template>

<script lang="ts">
    export default {
        name: 'Image&Name',
    props: ['itemTr', 'itemImg', 'itemName', 'itemLoc'],
    }
</script>