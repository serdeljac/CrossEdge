<template>
    <p>{{ data.ID }}</p>
    <p>{{ data.Name }}</p>
    <p>
        <span v-if="data.Cost_g">{{ data.Cost_g }}G</span>
        <span v-if="data.Cost_tp">{{ data.Cost_tp }}TP</span>
    </p>
    <p>{{ data.Synth_cost }}</p>
    <p>{{ data.Synth_item1 }}</p>
    <p>{{ data.Synth_item2 }}</p>
    <p>{{ data.Synth_item3 }}</p>
    <p>{{ data.Synth_item4 }}</p>
    <p>{{ data.Convert }}</p>
</template>

<script lang="ts">
    export default {
        name: 'inventoryArmorList',
        props: {
            'data': { type: Object }
        },
        beforeCreate() {
            this.$emit('loadComplete', false);
        },
        afterMount() {
            this.$emit('loadComplete', true);
        }
    }
</script>