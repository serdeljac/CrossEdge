<template>
    <div class="inventory">
        <subHeader :headerName="'Inventory (Armor)'" :backlink="'home'"/>
        <div class="inventory_content">

            <div class="inventory_sub-header">
                <div class="btn" @click="selectCat('inv-weapons')">Weapons</div>
                <div class="btn active" @click="selectCat('inv-armor')">Armor</div>
                <div class="btn" @click="selectCat('inv-accessories')">Accessories</div>
                <div class="btn" @click="selectCat('inv-items')">Items</div>
            </div>

            <div class="inventory_body">
                <div class="inventory_header">
                    <p></p>
                    <p>#</p>
                    <p>Name</p>
                    <p>Shop <br />Cost</p>
                    <p>Synth <br />Cost</p>
                    <p>Synthesize #1</p>
                    <p>Synthesize #2</p>
                    <p>Synthesize #3</p>
                    <p>Synthesize #4</p>
                    <p>Convert</p>
                </div>
                <hr />
                <div class="inventory_list ableSel" v-for="data in armorArray" :key="data.id" :class="uniqueClass(data.ID, data.name)">
                    <div class="filter">
                        <p><input type="checkbox" class="checkbox" @click="selectGear(data.ID, data.name, '')"></p>
                        <p>{{ data.ID }}</p>
                        <p>
                            <img v-bind:src="'/src/assets/icons/' + data.icon + '.jpg'" />
                            {{ data.name }}
                        </p>
                        <div>
                            <p v-if="data.cost_g">{{ data.cost_g }}G</p>
                            <p v-else-if="data.cost_tp">{{ data.cost_tp }}TP</p>
                            <p v-else>-</p>
                        </div>
                        <div>
                            <p v-if="data.synth_cost">{{ data.synth_cost }}</p>
                            <p v-else>-</p>
                        </div>
                        <div>
                            <p v-if="data.synth_item1">
                                <img v-bind:src="'/src/assets/icons/' + getIcon(data.synth_item1, false) + '.jpg'" />
                                {{ data.synth_item1 }}</p>
                            <p v-else>-</p>
                        </div>
                        <div>
                            <p v-if="data.synth_item2">
                                <img v-bind:src="'/src/assets/icons/' + getIcon(data.synth_item2, false) + '.jpg'" />
                                {{ data.synth_item2 }}
                            </p>
                            <p v-else>-</p>
                        </div>
                        <div>
                            <p v-if="data.synth_item3">
                                <img v-bind:src="'/src/assets/icons/' + getIcon(data.synth_item3, false) + '.jpg'" />
                                {{ data.synth_item3 }}
                            </p>
                            <p v-else>-</p>
                        </div>
                        <div>
                            <p v-if="data.synth_item4">
                                <img v-bind:src="'/src/assets/icons/' + getIcon(data.synth_item4, false) + '.jpg'" />
                                {{ data.synth_item4 }}
                            </p>
                            <p v-else>-</p>
                        </div>
                        <div>
                            <p v-if="data.convert">
                                <img v-bind:src="'/src/assets/icons/' + getIcon(data.convert, true) + '.jpg'" />
                                {{ data.convert }}
                            </p>
                            <p v-else>-</p>
                        </div>
                        </div>
                </div>
                <div class="clear_buttons">
                    <button class="btn small" @click="selectGear('', '', 'select')">Select All</button>
                    <button class="btn small" @click="selectGear('', '', 'clear')">Clear All</button>
                </div>
            </div>
        </div>
    </div>
</template>

<script lang="ts">
import subHeader from '@/components/main-subheader.vue';
import armorList from '@/assets/data/armor.json';
import weaponsList from '@/assets/data/weapons.json';
import accessoriesList from '@/assets/data/accessories.json';
import itemsList from '@/assets/data/items.json';
import activeList from '@/assets/data/active.json';
import $ from 'jquery';

    export default {
    name: "inventoryListArmor",
    components: { subHeader},
    data() {
        return {
            armorArray: armorList[2].data,
            accesArray: accessoriesList[2].data,
            itemsArray: itemsList[2].data,
            weapoArray: weaponsList[2].data,
            activArray: activeList[2].data,
            categorySelect: 'armor'
        }
    },
    methods: {
        selectCat(x) {
            this.$router.push({ name: x });
        },
        uniqueClass(x, y) {
            const id = x;
            const name = y.substr(0,3)
            return id + '-' + name;
        },
        selectGear(x, y, z) {
            const name = this.uniqueClass(x, y);
            const sel = $('.' + name);

            if (sel.hasClass('active')) {
                sel.removeClass('active');
                sel.children('.checkbox').prop("checked", false);
            } else {
                sel.addClass('active');
                sel.children('.checkbox').prop("checked", true);
            }

            if (z == 'select') {
                $('.ableSel').addClass('active');
                $('.checkbox').prop("checked", true);
            } else if (z == 'clear') {
                $('.ableSel').removeClass('active');
                $('.checkbox').prop("checked", false);
            }
        },
        getIcon(find, conv) {
            let x = false;
            switch (x) {
                case false:
        
                    let item = this.itemsArray.filter(function (e) { return e.name == find });
                    if (item.length == 1) {
                        return item[0]['icon'];
                        break;
                    }

                    let arm = this.armorArray.filter(function (e) { return e.name == find });
                    if (arm.length == 1) {
                        return arm[0]['icon'];
                        break;
                    }

                    let wap = this.weapoArray.filter(function (e) { return e.name == find });
                    if (wap.length == 1) {
                        return wap[0]['icon'];
                        break;
                    }

                    let act = this.activArray.filter(function (e) { return e.name == find });
                    if (act.length == 1) {
                        return act[0]['icon'];
                        break;
                    }

                    let acc = this.accesArray.filter(function (e) { return e.name == find });
                    if (acc.length == 1) {
                        return acc[0]['icon'];
                        break;
                    } else if (acc.length == 0 && conv == true) {
                        return 'inv-stat';
                        break;
                    }

                default:
                    return false;
            }
        },
    },
    
    }
</script>