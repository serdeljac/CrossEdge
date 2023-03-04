<template>
    <div class="synth">
        <subHeader :headerName="'Synthesis Materials Generator'" :backlink="'home'" />
        <div class="synth_content">

            <div class="synth_filter">
                <div class="group">
                    <div class="btn" :class="{ 'active': filterSelect=='inv-sword'}" @click="filterChange('inv-sword')">Swords</div>
                    <div class="btn" :class="{ 'active': filterSelect == 'inv-greatsword' }" @click="filterChange('inv-greatsword')">Greatswords</div>
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
                    <p>Purchase <br/> After Synth?</p>
                    <p>Synthesize #1</p>
                    <p>Synthesize #2</p>
                    <p>Synthesize #3</p>
                    <p>Synthesize #4</p>
                    <p>Convert</p>
                </div>

                <div class="synth_list" v-for="data in displayArray" :key="data.id" :class="getUniqueClass(data.ID, data.name)">
                    <div class="filter" v-if="data.icon == filterSelect" @click="selectIndividualItem(data.ID, data.name)">

                        <p>{{ data.ID }}</p>

                        <invItem :itemImg="data.icon" :itemName="data.name" />

                        <div>
                            <p v-if="data.synth_cost">{{ data.synth_cost }}</p>
                            <p v-else>-</p>
                        </div>

                        <div>
                            <p v-if="data.cost_g">YES</p>
                            <p v-else>NO</p>
                        </div>

                        <invItem :itemImg="fetchIconImage(data.synth_item1)" :itemName="data.synth_item1" />
                        <invItem :itemImg="fetchIconImage(data.synth_item2)" :itemName="data.synth_item2" />
                        <invItem :itemImg="fetchIconImage(data.synth_item3)" :itemName="data.synth_item3" />
                        <invItem :itemImg="fetchIconImage(data.synth_item4)" :itemName="data.synth_item4" />
                        <invItem :itemImg="fetchIconImage(data.convert)"     :itemName="data.convert" />
                    </div>
                </div>

                <div class="clear_buttons">
                    <button class="btn small generate" :class="{ 'active': genButton}" @click="startGeneratingBuild('', 'tr1', 1)">Generate List 1</button>
                    <button class="btn small generate" :class="{ 'active': genButton }" @click="startGeneratingBuild('', 'tr1', 2)">Generate List 2</button>
                    <button class="btn small generate" :class="{ 'active': genButton }" @click="startGeneratingBuild('', 'tr1', 3)">Generate List 3</button>
                    <button class="btn small" @click="clearLists()">Clear Lists</button>
                </div>

            </div>

            
            <div class="synth_body generated list1">
                <div class="synth_body_header">
                    <h3>List 1</h3>
                    <invItem :itemImg="this.genArr1[0]['icon']" :itemName="this.genArr1[0]['name']" v-if="this.genArr1.length > 0"/>       
                    <div v-else class="synth_body_header-none">
                        <p>Please select Weapon</p>
                    </div>
                    <hr />
                </div>
                <invItemGen :itemTr="this.genArr1"/>
            </div>

            <div class="synth_body generated list2">
                <div class="synth_body_header">
                    <h3>List 2</h3>
                    <invItem :itemImg="this.genArr2[0]['icon']" :itemName="this.genArr2[0]['name']" v-if="this.genArr2.length > 0"/>         
                    <div v-else class="synth_body_header-none">
                        <p>Please select Weapon</p>
                    </div>
                    <hr />
                </div>
                <invItemGen :itemTr="this.genArr2"/>
            </div>

            <div class="synth_body generated list3">
                <div class="synth_body_header">
                    <h3>List 3</h3>
                    <invItem :itemImg="this.genArr3[0]['icon']" :itemName="this.genArr3[0]['name']" v-if="this.genArr3.length > 0"/>         
                    <div v-else class="synth_body_header-none">
                        <p>Please select Weapon</p>
                    </div>
                    <hr />
                </div>
                <invItemGen :itemTr="this.genArr3"/>
            </div>

            <div class="synth_body tips">
                <h3>Tips</h3>
                <ul>
                    <li>If there's a shop price, synthesisze ONCE to register it to shop.</li>
                    <li>The higher Marie's level, the better the grade to improve stats!</li>
                    <li>I assume the probability of unsuccessful synthesis is about 5-10%.</li>
                    <li>Save game before synthesizing higher tier weapons.</li>
                    <li>Some materials can only be aquired via titles/treasures/soul rewards.</li>
                    <li>This may require multiple playthroughs.</li>
                </ul>
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
import treasList from '@/assets/data/treasures.json';

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
            treasArray: treasList[2].data,          // Array (Souls)
            synth: synthList[2].data,               // Array (Synthesis)

            filterSelect: 'inv-sword',              // Selected category
            displayArray: [],                       // List based on category
            selectedItem: [],                       // Selected item for synthesis
            genButton: false,                       // Enable/Disable Generate button
            
            genArr1: [],                      // Array of all generated materials
            genArr2: [],                      // Array of all generated materials
            genArr3: [],                      // Array of all generated materials
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
            this.selectedItem = [];    //Reset anything in Child
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

        //Select item (Individual)
        selectIndividualItem(id, name) {
            this.selectedItem = [];
            $('.synth_list').removeClass('active');

            //Grab the selector and make ACTIVE
            const y = this.getUniqueClass(id, name);
            const sel = $('.' + y);
            sel.addClass('active');

            const find = name;
            const syn = this.synth.filter(function (e) { return e.name == find })[0];
            this.selectedItem.push(syn['name'], syn['icon']);
            if (syn) {
                this.genButton = true;
            }
        },

        //Clear All Lists
        clearLists() {
            this.genArr1 = [];
            this.genArr2 = [];
            this.genArr3 = [];
        },




        //Start searching for materials from selected list
        startGeneratingBuild(recur, tr, list) {

            if (list == 1 && !recur) {
                this.genArr1 = [];
            } else if (list == 2 && !recur) {
                this.genArr2 = [];
            } else if (list == 3 && !recur) {
                this.genArr3 = [];
            }

            //Begin processes of generating build
            if(!recur) {
                this.fetchCalledWeapon(this.selectedItem[0], tr, list);
            }

        },

        //Find data on materials for found weapon
        fetchCalledWeapon(nm, tr, list) {

                //Fetch Synth Data
                const find = nm;
                const syn = this.synth.filter(function (e) { return e.name == find })[0];

                // 'tier' = tier
                const tier = tr;

                // 'name' = name
                const name = nm;

                // 'icon' = icon
                const icon = syn['icon'];

                // 'buyg' = buyg
                const buyg = syn['cost_g'];

                // 'buytp' = buytp
                const buytp = syn['cost_tp'];

                // 'source' = source
                const source = this.searchSource(nm);
                
                // 'synth' = synth
                const synth = [
                    this.checkSynth(tier, '1', name, syn['synth_item1']),
                    this.checkSynth(tier, '2', name, syn['synth_item2']),
                    this.checkSynth(tier, '3', name, syn['synth_item3']),
                    this.checkSynth(tier, '4', name, syn['synth_item4']),
                ];

                this.buildGen(tier, name, icon, buyg, buytp, source, synth, list);
        },

        checkSynth(tr, num, parent, name) {
            if (!name) {return '';}
            const find = name;
            const syn = this.synth.filter(function (e) { return e.name == find })[0];

            const tier = tr + num;
            const icon = syn['icon'];
            const buyg = syn['cost_g'];
            const buytp = syn['cost_tp'];
            const bestiary = this.searchBestiary(find);
            const convert = this.searchConverts(find);
            const title = this.searchTitles(find);
            const source = this.searchSource(find);

            const obj = {
                'id': syn['ID'],
                'tier': tier,
                'name': name,
                'icon': icon,
                'buyg': buyg,
                'buytp': buytp,
                'monster': bestiary,
                'convert': convert,
                'title': title,
                'source': source,
                'prevent': false
            }

            if (parent == name) {
                obj['prevent'] = true;
            }

            return obj;
        },

        searchBestiary(name) {

            const n = name;
            const over = this.bestiArray.filter(function (e) { return e.overkill == n })[0];
            if (over) {
                return [over['name'], over['zone'], 'Overkill', over['ID']];
            }

            const drop1 = this.bestiArray.filter(function (e) { return e.drop1 == n })[0];
            if (drop1) {
                return [drop1['name'], drop1['zone'], 'Normal drop', drop1['ID']];
            }

            const rare1 = this.bestiArray.filter(function (e) { return e.rare1 == n })[0];
            if (rare1) {
                return [rare1['name'], rare1['zone'], 'Rare drop', rare1['ID']];
            }

            const drop2 = this.bestiArray.filter(function (e) { return e.drop2 == n })[0];
            if (drop2) {
                return [drop2['name'], drop2['zone'], 'Normal drop', drop2['ID']];
            }

            const rare2 = this.bestiArray.filter(function (e) { return e.rare2 == n })[0];
            if (rare2) {
                return [rare2['name'], rare2['zone'], 'Rare drop', rare2['ID']];
            }

            return '';
        },

        searchConverts(name) {
            const n = name;
            const syn = this.synth.filter(function (e) { return e.convert == n })[0];
            if (syn) {
                return [syn['name'], syn['icon'], syn['ID']];
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

        searchSource(name) {
            const n = name;

            switch(false) {
                case false:

                    const re1 = this.treasArray.filter(function (e) { return e.treasure1 == n })[0];
                    
                    if (re1 && re1['target'] === 'Soul Reward') {
                        return 'Soul Reward ' + re1['soul'] + ' in ' + re1['location'];
                        break;
                    }

                    if (re1 && re1['target'] === 'Treasure') {
                        return 'Treasure in ' + re1['location'] + ' dungeon';
                        break;
                    }

                    const re2 = this.treasArray.filter(function (e) { return e.treasure2 == n })[0];
                    if (re2) {
                        return 'Soul Reward ' + re2['soul'] + ' in ' + re2['location'];
                        break;
                    }

                    const re3 = this.treasArray.filter(function (e) { return e.treasure2 == n })[0];
                    if (re3) {
                        return 'Soul Reward ' + re3['soul'] + ' in ' + re3['location'];
                        break;
                    }

            default:
                return ''
            }
        },

        //Append found materials to array
        buildGen(tier, name, icon, buy_g, buy_tp, source, synth, list) {

            const newArr = {
                'tier': tier,
                'name': name,
                'icon': icon,
                'buyg': buy_g,
                'buytp': buy_tp,
                'source': source,
                'synth': synth,
            };

            const listDisplay = list;

            if (list == 1) {
                this.genArr1.push(newArr);
            } else if (list == 2) {
                this.genArr2.push(newArr);
            } else if (list == 3) {
                this.genArr3.push(newArr);
            }

            const checkSynth = synth;
            for (let i = 0; i < checkSynth.length; i++) {
                if (checkSynth[i] && !checkSynth[i]['prevent'] && (
                        checkSynth[i]['icon'] != 'inv-monster' && 
                        checkSynth[i]['icon'] != 'inv-metal' &&
                        checkSynth[i]['icon'] != 'inv-item')) {
                            const nm = checkSynth[i]['name'];
                            const tr = checkSynth[i]['tier'];
                    this.fetchCalledWeapon(nm, tr, listDisplay);
                }
            }

        },



    },
}
</script>