<template>
    <div class="inventory">
        <subHeader :headerName="'Inventory (Armor)'" :backlink="'home'"/>
        <div class="inventory_content">

            <div class="inventory_sub-header">
                <div class="btn" @click="selectCat('inv-weapons')">Weapons</div>
                <div class="btn" @click="selectCat('inv-armor')">Armor</div>
                <div class="btn" @click="selectCat('inv-accessories')">Accessories</div>
                <div class="btn" @click="selectCat('inv-items')">Items</div>
            </div>

            <h3>{{ categorySelect }}</h3>

            <div class="inventory_body">
                <div class="inventory_header">
                    <p>#</p>
                    <p>Name</p>
                    <p>Store Cost</p>
                    <p>Synth Cost</p>
                    <p>Synth Item 1</p>
                    <p>Synth Item 2</p>
                    <p>Synth Item 3</p>
                    <p>Synth Item 4</p>
                    <p>Convert</p>
                </div>
                <hr>
                <div class="inventory_list">
                    <armor  v-for="arr in armorArray" :key="arr.id" :data="arr"/>
                </div>
            </div>
        </div>
    </div>
</template>

<script lang="ts">
import subHeader from '@/components/main-subheader.vue';
import armor from '@/components/parts/inventory-armor.vue';
import armorList from '@/assets/data/armor.json';

    export default {
    name: "inventoryList",
    components: { subHeader, armor },
    data() {
        return {
            armorArray: armorList[2].data,

        }
    },
    methods: {
        selectCat(x) {
            this.$router.push({ name: x });
        },
    },
    
    }
</script>