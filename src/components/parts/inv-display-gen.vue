<template>
    <!-- <ul class="tier1">
        <li class="inv-name" v-for="arr in tier1" :key="arr.id">
            [ {{ arr[0] }} ]
            <img v-bind:src="'/src/assets/icons/' + arr[1][1] + '.jpg'" />
                {{ arr[1][0] }}
        </li>
        <ul class="tier2">
            <li class="inv-name" v-for="arr in tier2" :key="arr.id">
                [ {{ arr[0] }} ]
                <img v-bind:src="'/src/assets/icons/' + arr[1][1] + '.jpg'" />
                    {{ arr[1][0] }}
            </li>
        </ul>
    </ul> -->



            <p class="inv-name" v-for="arr in itemTr" :key="arr.id">
                        {{ arr }}
                </p>

</template>

<script lang="ts">
    export default {
        name: 'Image&Name',
        props: ['itemTr'],
    }
</script>