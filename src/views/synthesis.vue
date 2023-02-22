<template>
    <div class="synth">
        <subHeader :headerName="'Synthesis Materials Generator'" :backlink="'home'" />
        <div class="synth_content">

            <div class="synth_filter">
                <div class="group">
                    <div class="btn" :class="{ 'active': filterSelect=='inv-sword'}" @click="filterChange('inv-sword')">Swords</div>
                    <div class="btn" :class="{ 'active': filterSelect=='inv-dagger'}" @click="filterChange('inv-dagger')">Daggers</div>
                    <div class="btn" :class="{ 'active': filterSelect=='inv-spear'}" @click="filterChange('inv-spear')">Spears</div>
                    <div class="btn" :class="{ 'active': filterSelect=='inv-staff'}" @click="filterChange('inv-staff')">Staves</div>
                    <div class="btn" :class="{ 'active': filterSelect=='inv-fist'}" @click="filterChange('inv-fist')">Knuckles</div>
                    <div class="btn" :class="{ 'active': filterSelect=='inv-scythe'}" @click="filterChange('inv-scythe')">Scythes</div>
                </div>
                <div class="group">
                    <div class="btn" :class="{ 'active': filterSelect=='inv-gun'}" @click="filterChange('inv-gun')">Guns</div>
                    <div class="btn" :class="{ 'active': filterSelect=='inv-crystal'}" @click="filterChange('inv-crystal')">Crystals</div>
                    <div class="btn" :class="{ 'active': filterSelect=='inv-collar'}" @click="filterChange('inv-collar')">Necklaces</div>
                    <div class="btn" :class="{ 'active': filterSelect=='inv-armor'}" @click="filterChange('inv-armor')">Armor</div>
                    <div class="btn" :class="{ 'active': filterSelect=='inv-accessories'}" @click="filterChange('inv-accessories')">Accessories</div>
                </div>
            </div>

            <div class="synth_body" :class="filterSelect">

                <div class="synth_header">
                    <p>#</p>
                    <p>Name</p>
                    <p>Synth <br />Cost</p>
                    <p>Synthesize #1</p>
                    <p>Synthesize #2</p>
                    <p>Synthesize #3</p>
                    <p>Synthesize #4</p>
                    <p>Convert</p>
                </div>

                <div class="synth_list" v-for="data in displayArray" :key="data.id" :class="getUniqueClass(data.ID, data.name)">
                    <div class="filter" v-if="data.icon == filterSelect">
                        
                        <p><input type="checkbox" class="checkbox" @click="selectIndividualItem(data.ID, data.name)"></p>

                        <p>{{ data.ID }}</p>

                        <invItem :itemImg="data.icon" :itemName="data.name" />

                        <div>
                            <p v-if="data.synth_cost">{{ data.synth_cost }}</p>
                            <p v-else>-</p>
                        </div>

                        <invItem :itemImg="fetchIconImage(data.synth_item1)" :itemName="data.synth_item1" />
                        <invItem :itemImg="fetchIconImage(data.synth_item2)" :itemName="data.synth_item2" />
                        <invItem :itemImg="fetchIconImage(data.synth_item3)" :itemName="data.synth_item3" />
                        <invItem :itemImg="fetchIconImage(data.synth_item4)" :itemName="data.synth_item4" />
                        <invItem :itemImg="fetchIconImage(data.convert)"     :itemName="data.convert" />
                    </div>
                </div>

                <div class="clear_buttons">
                    <button class="btn small generate" :class="{ 'active': genButton}" @click="startGeneratingBuild()">Generate</button>
                    <button class="btn small" @click="selectAll(true)">Select All</button>
                    <button class="btn small" @click="selectAll(false)">Clear All</button>
                </div>

            </div>

            
            <div class="synth_body generated">
                
                <div v-if="selectedItems && !genArr">
                    <h3>Selected Items:</h3>
                    <div class="list_1" v-for="arr in selectedItems" :key="arr.id" >
                        <invItem :itemImg="arr.icon" :itemName="arr.name" />
                    </div>
                </div>

                <div v-else>
                    <h3>Generated:</h3>
                    <div class="list_2">
                        <invItemGen :itemTr="genArr"/>
                        <!-- <div class="list_2" v-for="arr in genArr" :key="arr.id">
                            <invItem :itemTr="arr[0]" :itemImg="arr[1][1]" :itemName="arr[1][0]" :itemLoc="arr[1][2]" />
                        </div> -->
                    </div>
                </div>

            </div>
        </div>
    </div>
</template>

<script lang="ts">
import invItem from '../components/parts/inv-display.vue';
import invItemGen from '../components/parts/inv-display-gen.vue';
import synthList from '@/assets/data/synthesis.json';
import bestiList from '@/assets/data/bestiary.json';
import titleList from '@/assets/data/titles.json';

import subHeader from '@/components/main-subheader.vue';
import armorList from '@/assets/data/armor.json';
import weaponsList from '@/assets/data/weapons.json';
import accessoriesList from '@/assets/data/accessories.json';
import itemsList from '@/assets/data/items.json';
import activeList from '@/assets/data/active.json';
import $ from 'jquery';

export default {
    name: "inventoryListWeapons",
    components: { subHeader, invItem, invItemGen },
    data() {
        return {
            armorArray: armorList[2].data,          // Array (Armor)
            accesArray: accessoriesList[2].data,    // Array (Accessories)
            itemsArray: itemsList[2].data,          // Array (Items)
            weapoArray: weaponsList[2].data,        // Array (Weapons)
            activArray: activeList[2].data,         // Array (Active)
            bestiArray: bestiList[2].data,          // Array (Bestiary)
            titleArray: titleList[2].data,          // Array (Titles)
            synth: synthList[2].data,               // Array (Synthesis)

            filterSelect: 'inv-sword',              // Selected category
            displayArray: [],                       // List based on category
            selectedItems: [],                      // List based on what's selected
            genButton: false,                       // Enable/Disable Generate button
            
            genArr: undefined,                      // Array of all generated materials
            endSearch: true
        }
    },
    mounted() {
        //Get all Items within category and set into array
        this.generateDisplayList();
    },
    methods: {

        //Add Unique class name to each listed item
        getUniqueClass(id, name) {
            return id + '-' + name.substr(0, 3);
        },

        //Find Icon associated with the listed item
        fetchIconImage(find) {
            switch (false) {
                case false:
                    //Search WEAPONS ARRAY
                    let wap = this.weapoArray.filter(function (e) { return e.name == find });
                    if (wap.length > 0) {
                        return wap[0]['icon'];
                        break;
                    }
                    //Search ITEMS ARRAY
                    let item = this.itemsArray.filter(function (e) { return e.name == find });
                    if (item.length > 0) {
                        return item[0]['icon'];
                        break;
                    }
                    //Search ACTIVE ARRAY
                    let act = this.activArray.filter(function (e) { return e.name == find });
                    if (act.length > 0) {
                        return act[0]['icon'];
                        break;
                    }
                    //Search ARMOR ARRAY
                    let arm = this.armorArray.filter(function (e) { return e.name == find });
                    if (arm.length > 0) {
                        return arm[0]['icon'];
                        break;
                    }
                    //Search ACCESSORIES ARRAY
                    let acc = this.accesArray.filter(function (e) { return e.name == find });
                    if (acc.length > 0) {
                        return acc[0]['icon'];
                        break;
                    }
                default:
                    return 'inv-stat';
            }
        },

        //Change items 
        filterChange(name) {
            this.filterSelect = name;   //Change filter name
            this.itemsChildArray = [];  //Reset anything in Child
            this.selectAll(false);      //Reset checked items
            this.genButton = false;     //Disable Generate button
            this.generateDisplayList(); //Append new list
            
        },

        //Populate the display list
        generateDisplayList() {
            this.displayArray = [];  //Empty display list
            const find = this.filterSelect;

            if (find == 'inv-armor') { 
                const waponNum = this.armorArray.filter(function (e) { return e.icon == find })
                const size = waponNum.length;
                for (let i = 0; i < size; i++) {
                    const curName = waponNum[i];
                    this.displayArray.push(curName);
                }
            } else if (find == 'inv-accessories') {
                const waponNum = this.accesArray.filter(function (e) { return e.icon == find })
                const size = waponNum.length;
                for (let i = 0; i < size; i++) {
                    const curName = waponNum[i];
                    this.displayArray.push(curName);
                }
            } else {
                const waponNum = this.weapoArray.filter(function (e) { return e.icon == find })
                const size = waponNum.length;
                for (let i = 0; i < size; i++) {
                    const curName = waponNum[i];
                    this.displayArray.push(curName);
                }
            }
        },

        //Select item (all)
        selectAll(type) {
            if (type) {
                $('.synth_list .checkbox').prop("checked", true);           //Check all checkboxes
                $('.synth_list').addClass('active');                        //Add 'Active' Class to all
                this.selectedItems = this.displayArray;                     //Append all items to 'selected array'
                this.genButton = true;                                      //Enable generate button
            } else {
                $('.synth_list .checkbox').prop("checked", false);          //Uncheck all checkboxes
                $('.synth_list').removeClass('active');                     //Remove 'Active' Class to all
                this.selectedItems = [];                                    //Clear 'selected array'
                this.genButton = false;                                     //Disable generate button
                this.genArr = undefined;                                    //Reset generated list
            }
        },

        //Select item (Individual)
        selectIndividualItem(id, name) {
            //Grab the selector
            const y = this.getUniqueClass(id, name);
            const sel = $('.' + y);

            if (sel.hasClass('active')) {
                sel.removeClass('active');                                          //Remove 'Active' Class
                sel.children('.checkbox').prop("checked", false);                   //Uncheck the checkbox
                const removeItem = this.fetchIndividualSelectedItem(name, false);   //Find Item
                this.selectedItems.splice(removeItem, 1);                           //Remove
                
            } else {
                sel.addClass('active');                                             //Add 'Active' Class
                this.genButton = true;                                              //Enable the generate button
                sel.children('.checkbox').prop("checked", true);                    //Check the checkbox
                const addItem = this.fetchIndividualSelectedItem(name, true);       //Find Item
                this.selectedItems.push(addItem);                                   //Add
            }
        },

        //Select item (Individual) - Fetch Items
        fetchIndividualSelectedItem(name, bool) {
            //If checked, Add to selectedItems Array
            if (bool) {
                const find = name;
                const syn = this.synth.filter(function (e) { return e.name == find })[0];
                return syn;
            } else {
                const size = this.selectedItems.length;
                if (size == 1) {
                    //If unchecked item was last, reset everything
                    this.selectAll(false);
                    return false;
                } else {
                    for (let i = 0; i < size; i++) {
                        if (this.selectedItems[i]['name'] === name) {
                            return i;
                        }
                    }
                }
            }
        },
















        //Start searching for materials from selected list
        startGeneratingBuild(subWeapon, subTier) {
            if (!subWeapon) {
                this.genArr = [];
                const size = this.selectedItems.length;
                for (let i = 0; i < size; i++) {
                    const name = this.selectedItems[i]['name'];
                    this.fetchCalledWeapon(name, 'tr');
                }
            } else {
                this.fetchCalledWeapon(subWeapon, subTier);
            }
        },

        //Find data on materials for found weapon
        fetchCalledWeapon(nm, tr) {
            switch (false) {
                case false:

                const n = nm;
                const syn = this.synth.filter(function (e) { return e.name == n })[0];
                const tier = tr + '1';
                const name = n;
                const icon = syn['icon'];

                const buyg = syn['cost_g'];
                const buytp = syn['cost_tp'];
                if (buyg || buytp) {
                    this.buildGen(tier, name, icon, buyg, buytp, '', '');
                    break;
                }
                
                const synth = [
                    this.checkSynth(syn['synth_item1']),
                    this.checkSynth(syn['synth_item2']),
                    this.checkSynth(syn['synth_item3']),
                    this.checkSynth(syn['synth_item4']),
                ];
                
                if (synth.length > 0) {
                    this.buildGen(tier, name, icon, '', '', '', synth);
                    break;
                }

                const title = this.checkOtherLoc(name);
                this.buildGen(tier, name, icon, '', '', title, '');
                break;
            }
        },

        checkSynth(name) {
            if (!name) {return;}
            //       done   done
            // arr = NAME   ICON  BUYG   BUYTP   BESTIARYNAME/ZONE     CONVERT   TITLE
            const find = name;
            const syn = this.synth.filter(function (e) { return e.name == find })[0];
            const icon = syn['icon'];
            const buyg = syn['cost_g'];
            const buytp = syn['cost_tp'];
            const bestiary = this.searchBestiary(find);
            const convert = this.searchConverts(find);
            const title = this.searchTitles(find);
            return [name, icon, buyg, buytp, bestiary, convert, title];
        },

        searchBestiary(name) {

            const n = name;
            const over = this.bestiArray.filter(function (e) { return e.overkill == n })[0];
            if (over) {
                return [over['name'], over['zone']];
            }

            const drop1 = this.bestiArray.filter(function (e) { return e.drop1 == n })[0];
            if (drop1) {
                return [drop1['name'], drop1['zone']];
            }

            const rare1 = this.bestiArray.filter(function (e) { return e.rare1 == n })[0];
            if (rare1) {
                return [rare1['name'], rare1['zone']];
            }

            const drop2 = this.bestiArray.filter(function (e) { return e.drop2 == n })[0];
            if (drop2) {
                return [drop2['name'], drop2['zone']];
            }

            const rare2 = this.bestiArray.filter(function (e) { return e.rare2 == n })[0];
            if (rare2) {
                return [rare2['name'], rare2['zone']];
            }

            return '';
        },

        searchConverts(name) {
            const n = name;
            const syn = this.synth.filter(function (e) { return e.convert == n })[0];
            if (syn) {
                return syn['name'];
            }

            return '';
        },

        searchTitles(name) {
            const n = name;
            const rw1 = this.titleArray.filter(function (e) { return e.reward1 == n })[0];
            if (rw1) {
                return 'Title reward #' + rw1['ID'];
            }

            const rw2 = this.titleArray.filter(function (e) { return e.reward2 == n })[0];
            if (rw2) {
                return 'Title reward #' + rw2['ID'];
            }

            const rw3 = this.titleArray.filter(function (e) { return e.reward3 == n })[0];
            if (rw3) {
                return 'Title reward #' + rw3['ID'];
            }

            return '';
        },

        checkOtherLoc(name) {
            const n = name;

            switch(false) {
                case false:

                    const re1 = this.titleArray.filter(function (e) { return e.reward1 == n })[0];
                    if (re1) {
                        return 'Title reward #' + re1['ID'];
                        break;
                    }

                    const re2 = this.titleArray.filter(function (e) { return e.reward2 == n })[0];
                    if (re2) {
                        return 'Title reward #' + re2['ID'];
                        break;
                    }

                    const re3 = this.titleArray.filter(function (e) { return e.reward3 == n })[0];
                    if (re3) {
                        return 'Title reward #' + re3['ID'];
                        break;
                    }

                    const over = this.bestiArray.filter(function (e) { return e.overkill == n })[0];
                    if (over) {
                        return 'Overkill: ' + over['name'] + ' in ' + over['zone'];
                        break;
                    }

                    const drop1 = this.bestiArray.filter(function (e) { return e.drop1 == n })[0];
                    if (drop1) {
                        return 'Drop: ' + drop1['name'] + ' in ' + drop1['zone'];
                        break;
                    }

                    const rare1 = this.bestiArray.filter(function (e) { return e.rare1 == n })[0];
                    if (rare1) {
                        return 'Rare drop: ' + rare1['name'] + ' in ' + rare1['zone'];
                        break;
                    }

                    const drop2 = this.bestiArray.filter(function (e) { return e.drop2 == n })[0];
                    if (drop2) {
                        return 'Drop: ' + drop2['name'] + ' in ' + drop2['zone'];
                        break;
                    }

                    const rare2 = this.bestiArray.filter(function (e) { return e.rare2 == n })[0];
                    if (rare2) {
                        return 'Rare drop: ' + rare2['name'] + ' in ' + rare2['zone'];
                        break;
                    }

                    const other = this.synth.filter(function (e) { return e.name == n })[0];
                    if (other) {
                        return other['find_other'];
                    }

            default:
                return 'ERROR - Cannot Find'

            }
        },

        //Append found materials to array
        buildGen(tier, name, icon, buy_g, buy_tp, loc, synth) {

            const newArr = {
                'tier': tier,
                'name': name,
                'icon': icon,
                'buyg': buy_g,
                'buytp': buy_tp,
                'location': loc,
                'synth': synth,
            };

            this.genArr.push(newArr);
            

            for (let i = 0; i < newArr['synth'].length; i++ ) {

                switch(false) {
                    case false:
                    const a = newArr['synth'][i][2]; //costg
                    const b = newArr['synth'][i][3]; //costtp
                    const c = newArr['synth'][i][4]; //bestiary
                    const d = newArr['synth'][i][5]; //convert
                    const e = newArr['synth'][i][6]; //title & other

                    if (d) {
                       this.startGeneratingBuild(d, newArr['tier']);
                       break; 
                    }

                    default:
                        break;
                }
                

                // if (d) {
                //     this.startGeneratingBuild(newArr['synth'][i][5], newArr['tier']);
                // } else if (!a && !b && !c && !d && !e) {

                // }

            }
            console.log(this.genArr);
        },





















    },
}
</script>