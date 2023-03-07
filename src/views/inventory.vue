<template>
    <div class="inventory">
        <subHeader :headerName="'Inventory (Weapons)'" :backlink="'home'" />
        <div class="inventory_content">

            <div class="inventory_sub-header">
                <div class="btn" :class="{ 'active': categorySelect == 'weapons' }" @click="selectCat('weapons')">Weapons</div>
                <div class="btn" :class="{ 'active': categorySelect == 'armor' }" @click="selectCat('armor')">Armor</div>
                <div class="btn" :class="{ 'active': categorySelect == 'accessories' }" @click="selectCat('accessories')">Accessories</div>
                <div class="btn" :class="{ 'active': categorySelect == 'items' }" @click="selectCat('items')">Items</div>
            </div>

            <div class="inventory_body weapons_list">

                <div class="inventory_header">
                    <p>#</p>
                    <p>Name</p>
                    <p>Purchasable?</p>
                    <p>Synth Cost</p>
                    <p>Store Cost</p>
                    <p>TP Cost</p>
                    <p>Location</p>
                </div>

                <hr />

                <div class="inventory_list" v-if="categorySelect == 'weapons'" v-for="data in weapoArray" :key="data.ID"
                    :class="getUniqueClass(data.name)">

                        <p>{{ data.ID }}</p>

                        <invItem :itemImg="data.icon" :itemName="data.name" />

                        <div>
                            <p v-if="data.cost_g || data.cost_tp">YES</p>
                            <p v-else>NO</p>
                        </div>

                        <div>
                            <p v-if="data.synth_cost">{{ data.synth_cost }}<span class="currency">g</span></p>
                            <p v-else>-</p>
                        </div>

                        <div>
                            <p v-if="data.cost_g">{{ data.cost_g }}<span class="currency">g</span></p>
                            <p v-else>-</p>
                        </div>

                        <div>
                            <p v-if="data.cost_tp">{{ data.cost_tp }}<span class="currency">tp</span></p>
                            <p v-else>-</p>
                        </div>

                        <div v-if="!data.cost_tp">
                            <p v-if="data.find_other">{{ data.find_other }}</p>
                            <p v-else-if="data.find_event">After Event #{{ data.find_event }}</p>
                            <p v-else>{{ searchResources(data.name) }}</p>
                        </div>
                        <div v-else>
                            <p>-</p>
                        </div>
                </div>

                <div class="inventory_list" v-if="categorySelect == 'armor'" v-for="data in armorArray" :key="data.ID"
                    :class="getUniqueClass(data.name)">

                        <p>{{ data.ID }}</p>

                        <invItem :itemImg="data.icon" :itemName="data.name" />

                        <div>
                            <p v-if="data.cost_g || data.cost_tp">YES</p>
                            <p v-else>NO</p>
                        </div>

                        <div>
                            <p v-if="data.synth_cost">{{ data.synth_cost }}<span class="currency">g</span></p>
                            <p v-else>-</p>
                        </div>

                        <div>
                            <p v-if="data.cost_g">{{ data.cost_g }}<span class="currency">g</span></p>
                            <p v-else>-</p>
                        </div>

                        <div>
                            <p v-if="data.cost_tp">{{ data.cost_tp }}<span class="currency">tp</span></p>
                            <p v-else>-</p>
                        </div>

                        <div v-if="!data.cost_tp">
                            <p v-if="data.find_other">{{ data.find_other }}</p>
                            <p v-else-if="data.find_event">After Event #{{ data.find_event }}</p>
                            <p v-else>{{ searchResources(data.name) }}</p>
                        </div>
                        <div v-else>
                            <p>-</p>
                        </div>
                </div>

                <div class="inventory_list" v-if="categorySelect == 'accessories'" v-for="data in accesArray" :key="data.ID"
                    :class="getUniqueClass(data.name)">

                        <p>{{ data.ID }}</p>

                        <invItem :itemImg="data.icon" :itemName="data.name" />

                        <div>
                            <p v-if="data.cost_g || data.cost_tp">YES</p>
                            <p v-else>NO</p>
                        </div>

                        <div>
                            <p v-if="data.synth_cost">{{ data.synth_cost }}<span class="currency">g</span></p>
                            <p v-else>-</p>
                        </div>

                        <div>
                            <p v-if="data.cost_g">{{ data.cost_g }}<span class="currency">g</span></p>
                            <p v-else>-</p>
                        </div>

                        <div>
                            <p v-if="data.cost_tp">{{ data.cost_tp }}<span class="currency">tp</span></p>
                            <p v-else>-</p>
                        </div>

                        <div v-if="!data.cost_tp">
                            <p v-if="data.find_other">{{ data.find_other }}</p>
                            <p v-else-if="data.find_event">After Event #{{ data.find_event }}</p>
                            <p v-else>{{ searchResources(data.name) }}</p>
                        </div>
                        <div v-else>
                            <p>-</p>
                        </div>
                </div>

                <div class="inventory_list" v-if="categorySelect == 'items'" v-for="data in itemsArray" :key="data.ID"
                        :class="getUniqueClass(data.name)">

                            <p>{{ data.ID }}</p>

                            <invItem :itemImg="data.icon" :itemName="data.name" />

                            <div>
                                <p v-if="data.cost_g || data.cost_tp">YES</p>
                                <p v-else>NO</p>
                            </div>

                            <div>
                                <p v-if="data.synth_cost">{{ data.synth_cost }}<span class="currency">g</span></p>
                                <p v-else>-</p>
                            </div>

                            <div>
                                <p v-if="data.cost_g">{{ data.cost_g }}<span class="currency">g</span></p>
                                <p v-else>-</p>
                            </div>

                            <div>
                                <p v-if="data.cost_tp">{{ data.cost_tp }}<span class="currency">tp</span></p>
                                <p v-else>-</p>
                            </div>

                            <div v-if="!data.cost_tp">
                                <p v-if="data.find_other">{{ data.find_other }}</p>
                                <p v-else-if="data.find_event">After Event #{{ data.find_event }}</p>
                                <p v-else>{{ searchResources(data.name) }}</p>
                            </div>
                            <div v-else>
                                <p>-</p>
                            </div>
                    </div>

            </div>
        </div>
    </div>
</template>

<script lang="ts">
import subHeader from '@/components/main-subheader.vue';
import invItem from '@/components/parts/inv-display.vue'

import weaponsList from '@/assets/data/collections_weapons.json';
import armorList from '@/assets/data/collections_armor.json';
import accessoriesList from '@/assets/data/collections_accessories.json';
import itemsList from '@/assets/data/collections_items.json';

import treasList from '@/assets/data/treasures.json';
import titleList from '@/assets/data/titles.json';
import bestiList from '@/assets/data/bestiary.json';
import activList from '@/assets/data/active.json';

export default {
    name: "inventoryList",
    components: { subHeader, invItem },
    data() {
        return {
            weapoArray: weaponsList[2].data,
            armorArray: armorList[2].data,
            accesArray: accessoriesList[2].data,
            itemsArray: itemsList[2].data,
            treasArray: treasList[2].data,
            titleArray: titleList[2].data,
            bestiArray: bestiList[2].data,
            activArray: activList[2].data,

            categorySelect: 'weapons',
        }
    },
    methods: {
        selectCat(x) {
            this.categorySelect = x;
        },
        getUniqueClass(name) {
            return name.replace(/[^\w]/g, "");
        },
        searchResources(name) {
            if (!name) {return 'UNKNOWN'}
            switch (false) {
                case false:

                const find = name;

                const ovr = this.bestiArray.filter(function (e) { return e.overkill == find })[0];
                if (ovr) {return 'Overkill / ' + ovr.name + ' in ' + ovr.zone + ' (' + ovr.area + ')'; break;}

                const dr1 = this.bestiArray.filter(function (e) { return e.drop1 == find })[0];
                if (dr1) { return 'Drop 1 / ' + dr1.name + ' in ' + dr1.zone + ' (' + dr1.area + ')'; break; }

                const ra1 = this.bestiArray.filter(function (e) { return e.rare1 == find })[0];
                if (ra1) { return 'Rare 1 / ' + ra1.name + ' in ' + ra1.zone + ' (' + ra1.area + ')'; break; }

                const dr2 = this.bestiArray.filter(function (e) { return e.drop2 == find })[0];
                if (dr2) { return 'Drop 2 / ' + dr2.name + ' in ' + dr2.zone + ' (' + dr2.area + ')'; break; }

                const ra2 = this.bestiArray.filter(function (e) { return e.rare1 == find })[0];
                if (ra2) { return 'Rare 2 / ' + ra2.name + ' in ' + ra2.zone + ' (' + ra2.area + ')'; break; }

                const tr1 = this.treasArray.filter(function (e) { return e.treasure1 == find })[0];
                if (tr1 && tr1.target == 'Soul Reward') {return 'Soul Reward #' + tr1.soul + ' in ' + tr1.location; break;}
                else if (tr1 && tr1.target == 'Treasure') { return 'Treasure in ' + tr1.location + ' dungeon'; break; }

                const tr2 = this.treasArray.filter(function (e) { return e.treasure2 == find })[0];
                if (tr2 && tr2.target == 'Soul Reward') { return 'Soul Reward #' + tr2.soul + ' in ' + tr2.location; break; }
                else if (tr2 && tr2.target == 'Treasure') { return 'Treasure in ' + tr2.location + ' dungeon'; break; }

                const tr3 = this.treasArray.filter(function (e) { return e.treasure3 == find })[0];
                if (tr3 && tr3.target == 'Soul Reward') { return 'Soul Reward #' + tr3.soul + ' in ' + tr3.location; break; }
                else if (tr3 && tr3.target == 'Treasure') { return 'Treasure in ' + tr3.location + ' dungeon'; break; }

                const re1 = this.titleArray.filter(function (e) { return e.reward1 == find })[0];
                if (re1) {return 'Title Reward #' + re1.ID; break;}

                const re2 = this.titleArray.filter(function (e) { return e.reward2 == find })[0];
                if (re2) { return 'Title Reward #' + re2.ID; break;}

                const re3 = this.titleArray.filter(function (e) { return e.reward3 == find })[0];
                if (re3) { return 'Title Reward #' + re3.ID; break;}

                const wcv = this.weapoArray.filter(function (e) { return e.convert == find })[0];
                if (wcv) {return 'Convert ' + wcv.name + ' (' + wcv.icon.slice(4) + ')'; break; }

                const acv = this.armorArray.filter(function (e) { return e.convert == find })[0];
                if (acv) { return 'Convert ' + acv.name + ' (' + acv.icon.slice(4) + ')'; break; }
                
                const rcv = this.accesArray.filter(function (e) { return e.convert == find })[0];
                if (rcv) { return 'Convert ' + rcv.name + ' (' + rcv.icon.slice(4) + ')'; break; }

                default:
                    return '-';
            }

        },


    },

}
</script>