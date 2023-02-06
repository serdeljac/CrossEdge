<template>
    <div class="inventory">
        <subHeader :headerName="'Inventory (Items)'" :backlink="'home'" />
        <div class="inventory_content">

            <div class="inventory_sub-header">
                <div class="btn" @click="selectCat('inv-weapons')">Weapons</div>
                <div class="btn" @click="selectCat('inv-armor')">Armor</div>
                <div class="btn" @click="selectCat('inv-accessories')">Accessories</div>
                <div class="btn active" @click="selectCat('inv-items')">Items</div>
            </div>

            <div class="inventory_body">
                <div class="inventory_header items">
                    <p></p>
                    <p>#</p>
                    <p>Name</p>
                    <p>Aquired</p>
                    <p>Synthesis</p>
                    
                </div>
                <hr />
                <div class="inventory_list items ableSel" v-for="data in itemsArray" :key="data.id"
                    :class="uniqueClass(data.ID, data.Name)">
                    <div class="filter">

                        <p><input type="checkbox" class="checkbox" @click="selectGear(data.ID, data.Name, '')"></p>
                        <p>{{ data.ID }}</p>

                    <p>
                        <img v-bind:src="'/src/assets/icons/' + data.Icon + '.jpg'" />
                        {{ data.Name }}
                    </p>

                    <div>
                        <p v-if="data.Cost_g">
                            Purchased from store - {{ data.Cost_g }} <span class="currency">G</span>
                        </p>
                        <p v-else-if="data.Cost_tp">
                            Exchanged from Store - {{ data.Cost_tp }}<span class="currency">TP</span>
                        </p>
                        <p v-else-if="data.Find_event">
                            Aquire during event #{{ data.Find_event }}
                        </p>
                        <p v-else-if="data.Find_title">
                            Complete title #{{ data.Find_title }}
                        </p>
                        <p v-else-if="data.Find_other">
                            Found: {{ data.Find_other }}
                        </p>
                        <div v-else>
                            <p v-if="searchConverts(data.Name, false)">
                                Convert from 
                                <img v-bind:src="'/src/assets/icons/' + searchConverts(data.Name, true) + '.jpg'" />
                                {{ searchConverts(data.Name, false) }}
                            </p>
                            <p v-else-if="searchBestiary(data.Name, false)">
                                <span @click="toPage(searchBestiary(data.Name, true))">{{ searchBestiary(data.Name, false) }}</span>
                            </p>
                            <p v-else-if="searchTitles(data.Name)">
                                Reward from Title #{{ searchTitles(data.Name) }}
                            </p>

                        </div>
                    </div>

                    <div>
                        <div class="synth_display" v-if="data.Synth_cost">
                            <p>
                                {{ data.Synth_cost }}<span class="currency">G</span> -
                                <img v-if="data.Synth_item1" v-bind:src="'/src/assets/icons/' + getIcon(data.Synth_item1, false) + '.jpg'" />{{ data.Synth_item1 }}
                                <img v-if="data.Synth_item2" v-bind:src="'/src/assets/icons/' + getIcon(data.Synth_item2, false) + '.jpg'" />{{ data.Synth_item2 }}
                                <img v-if="data.Synth_item3" v-bind:src="'/src/assets/icons/' + getIcon(data.Synth_item3, false) + '.jpg'" />{{ data.Synth_item3 }}
                                <img v-if="data.Synth_item4" v-bind:src="'/src/assets/icons/' + getIcon(data.Synth_item4, false) + '.jpg'" />{{ data.Synth_item4 }}
                                </p>
                        </div>
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
import bestiaryList from '@/assets/data/bestiary.json'
import titlesList from '../assets/data/titles.json';
import $ from 'jquery';

export default {
    name: "inventoryListItems",
    components: { subHeader },
    data() {
        return {
            armorArray: armorList[2].data,
            accesArray: accessoriesList[2].data,
            itemsArray: itemsList[2].data,
            weapoArray: weaponsList[2].data,
            activArray: activeList[2].data,
            bestaArray: bestiaryList[2].data,
            titleArray: titlesList[2].data,
            categorySelect: 'accessories'
        }
    },
    methods: {
        selectCat(x) {
            this.$router.push({ name: x });
        },
        toPage(map) {
            this.$router.push({ name: map, params: { selectedMap: map } });
        }, 
        uniqueClass(x, y) {
            const id = x;
            const name = y.substr(0, 3)
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

                    let item = this.itemsArray.filter(function (e) { return e.Name == find });
                    if (item.length > 0) {
                        return item[0]['Icon'];
                        break;
                    }

                    let arm = this.armorArray.filter(function (e) { return e.Name == find });
                    if (arm.length > 0) {
                        return arm[0]['Icon'];
                        break;
                    }

                    let wap = this.weapoArray.filter(function (e) { return e.Name == find });
                    if (wap.length > 0) {
                        return wap[0]['Icon'];
                        break;
                    }

                    let act = this.activArray.filter(function (e) { return e.Name == find });
                    if (act.length > 0) {
                        return act[0]['Icon'];
                        break;
                    }

                    let acc = this.accesArray.filter(function (e) { return e.Name == find });
                    if (acc.length > 0) {
                        return acc[0]['Icon'];
                        break;
                    } else if (acc.length == 0 && conv == true) {
                        return 'inv-stat';
                        break;
                    }

                default:
                    return false;
            }
        },
        searchConverts(find, icon) {
            let x = false;
            switch (x) {
                case false:

                    const wap = this.weapoArray.filter(function (e) { return e.Convert == find });
                    if (wap.length > 0) {
                        if (icon) {
                            return wap[0]['Icon'];
                        }else {
                            return '#' + wap[0]['ID'] + ' - ' + wap[0]['Name'];
                        }
                        break;
                    }

                    const arm = this.armorArray.filter(function (e) { return e.Convert == find });
                    if (arm.length > 0) {
                        if (icon) {
                            return arm[0]['Icon'];
                        } else {
                            return '#' + arm[0]['ID'] + ' ' + arm[0]['Name'];
                        }
                        break;
                    }

                    const acc = this.accesArray.filter(function (e) { return e.Convert == find });
                    if (acc.length > 0) {
                        if (icon) {
                            return acc[0]['Icon'];
                        } else {
                            return '#' + acc[0]['ID'] + ' - ' + acc[0]['Name'];
                        }
                        break;
                    }

                    default:
                        return false;
            }
        },
        searchTitles(find) {
            let x = false;
            switch (x) {
                case false:

                    const re1 = this.titleArray.filter(function (e) { return e.reward1 == find });
                    if (re1.length > 0) {
                        return re1[0]['ID'];
                        break;
                    }

                    const re2 = this.titleArray.filter(function (e) { return e.reward2 == find });
                    if (re2.length > 0) {
                        return re2[0]['ID'];
                        break;
                    }

                    const re3 = this.titleArray.filter(function (e) { return e.reward3 == find });
                    if (re3.length > 0) {
                        return re3[0]['ID'];
                        break;
                    }

                default:
                    return false;
            }
        },
        searchBestiary(find, link) {
            let x = false;
            switch (x) {
                case false:

                    const over = this.bestaArray.filter(function (e) { return e.overkill == find });
                    if (over.length > 0) {

                        if (link) {
                            return over[0]['zone'];
                        } else {
                            return 'Dropped from #' + over[0]['ID'] + ' - ' + over[0]['name'] + ' (Overkill)';
                        }
                        break;
                    }

                    const drop1 = this.bestaArray.filter(function (e) { return e.drop1 === find });
                
                    if (drop1.length > 0) {
                        
                        if (link) {
                            return drop1[0]['zone'];
                        } else {
                            return 'Dropped from #' + drop1[0]['ID'] + ' - ' + drop1[0]['name'] + ' (Drop 1)';
                        }
                        break;
                    }

                    const rare1 = this.bestaArray.filter(function (e) { return e.rare1 == find });
                    if (rare1.length > 0) {

                        if (link) {
                            return rare1[0]['zone'];
                        } else {
                            return 'Dropped from #' + rare1[0]['ID'] + ' - ' + rare1[0]['name'] + ' (Rare 1)';
                        }
                        break;
                    }

                    const drop2 = this.bestaArray.filter(function (e) { return e.drop2 == find });
                    if (drop2.length > 0) {

                        if (link) {
                            return drop2[0]['zone'];
                        } else {
                            return 'Dropped from #' + drop2[0]['ID'] + ' - ' + drop2[0]['name'] + ' (Drop 2)';
                        }
                        break;
                    }

                    const rare2 = this.bestaArray.filter(function (e) { return e.rare2 == find });
                    if (rare2.length > 0) {

                        if (link) {
                            return rare2[0]['zone'];
                        } else {
                            return 'Dropped from #' + rare2[0]['ID'] + ' - ' + rare2[0]['name'] + ' (Rare 2)';
                        }
                        break;
                    }

                    default:
                        return false;
            }
        },
    },

}
</script>