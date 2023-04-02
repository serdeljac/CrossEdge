<template>
    <div class="synth">
        <subHeader :headerName="'Synthesis Materials Generator'" :backlink="'home'" />
        <div class="synth_container">

            <div class="synth_filter">
                <div class="group">
                    <div class="btn" :class="{ 'active': filterSelect == 'inv-sword'}" @click="generateDisplayList('inv-sword')">Swords</div>
                    <div class="btn" :class="{ 'active': filterSelect == 'inv-greatsword' }" @click="generateDisplayList('inv-greatsword')">Greatswords</div>
                    <div class="btn" :class="{ 'active': filterSelect == 'inv-dagger'}" @click="generateDisplayList('inv-dagger')">Daggers</div>
                    <div class="btn" :class="{ 'active': filterSelect == 'inv-spear'}" @click="generateDisplayList('inv-spear')">Spears</div>
                    <div class="btn" :class="{ 'active': filterSelect == 'inv-staff'}" @click="generateDisplayList('inv-staff')">Staves</div>
                    <div class="btn" :class="{ 'active': filterSelect == 'inv-fist'}" @click="generateDisplayList('inv-fist')">Knuckles</div>
                    <div class="btn" :class="{ 'active': filterSelect == 'inv-scythe'}" @click="generateDisplayList('inv-scythe')">Scythes</div>
                    <div class="btn" :class="{ 'active': filterSelect == 'inv-gun'}" @click="generateDisplayList('inv-gun')">Guns</div>
                    <div class="btn" :class="{ 'active': filterSelect == 'inv-crystal'}" @click="generateDisplayList('inv-crystal')">Crystals</div>
                    <div class="btn" :class="{ 'active': filterSelect == 'inv-collar'}" @click="generateDisplayList('inv-collar')">Necklaces</div>
                    <div class="btn" :class="{ 'active': filterSelect == 'inv-armor'}" @click="generateDisplayList('inv-armor')">Armor</div>
                    <div class="btn" :class="{ 'active': filterSelect == 'inv-accessories'}" @click="generateDisplayList('inv-accessories')">Accessories</div>
                </div>
            </div>

            <div class="synth_display">

                <div class="synth_display_header">
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

                <div class="synth_display_body" v-for="data in displayAppend" :key="data.id" :class="getUniqueClass(data.name)">
                    <div class="filter" @click="selectIndividualItem(data.name)">

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

                        <invItem :itemImg="fetchArrayData(data.synth_item1, 'icon')" :itemName="data.synth_item1" />
                        <invItem :itemImg="fetchArrayData(data.synth_item2, 'icon')" :itemName="data.synth_item2" />
                        <invItem :itemImg="fetchArrayData(data.synth_item3, 'icon')" :itemName="data.synth_item3" />
                        <invItem :itemImg="fetchArrayData(data.synth_item4, 'icon')" :itemName="data.synth_item4" />
                        <invItem :itemImg="fetchArrayData(data.convert, 'icon')"     :itemName="data.convert" />
                    </div>
                </div>

                <div class="synth_display_buttons">
                    <button class="btn small generate" :class="{ 'active': genArr1.length > 0 }" @click="startGeneratingBuild('tr1', 1)">Generate List 1</button>
                    <button class="btn small generate" :class="{ 'active': genArr2.length > 0 }" @click="startGeneratingBuild('tr1', 2)">Generate List 2</button>
                    <button class="btn small generate" :class="{ 'active': genArr3.length > 0 }" @click="startGeneratingBuild('tr1', 3)">Generate List 3</button>
                    <button class="btn small generate" :class="{ 'active': genArr4.length > 0 }" @click="startGeneratingBuild('tr1', 4)">Generate List 4</button>
                    <button class="btn small clear" @click="clearLists('all')">Clear All</button>
                </div>
            </div>

            <div class="synth_list list1" v-if="this.genArr1.length > 0">
                <div class="synth_list_header">

                    <div class="synth_list_header-details">
                        <h3>Creating 1 - </h3>
                        <invItem :itemImg="this.genArr1[0]['icon']" :itemName="this.genArr1[0]['name']"/>
                    </div>

                    <button class="btn small" @click="clearLists(1)">Clear</button>
                
                </div>
                <invItemGen :itemTr="this.genArr1"/>
            </div>

            <div class="synth_list list2" v-if="this.genArr2.length > 0">
                <div class="synth_list_header">

                    <div class="synth_list_header-details">
                        <h3>Creating 2 - </h3>
                        <invItem :itemImg="this.genArr2[0]['icon']" :itemName="this.genArr2[0]['name']"/>
                    </div>

                    <button class="btn small" @click="clearLists(2)">Clear</button>
            
                    <ul class="synth-grid-4col">
                        <li>Materials</li>
                        <li>Action</li>
                        <li>Treasure/Reward</li>
                        <li>Shop cost</li>
                    </ul>
                </div>
                <invItemGen :itemTr="this.genArr2"/>
            </div>

            <div class="synth_list list3" v-if="this.genArr3.length > 0">
                <div class="synth_list_header">

                    <div class="synth_list_header-details">
                        <h3>Creating 3 - </h3>
                        <invItem :itemImg="this.genArr3[0]['icon']" :itemName="this.genArr3[0]['name']"/>
                    </div>

                    <button class="btn small" @click="clearLists(3)">Clear</button>
        
                    <ul class="synth-grid-4col">
                        <li>Materials</li>
                        <li>Action</li>
                        <li>Treasure/Reward</li>
                        <li>Shop cost</li>
                    </ul>
                </div>
                <invItemGen :itemTr="this.genArr3"/>
            </div>

            <div class="synth_list list4" v-if="this.genArr4.length > 0">
                <div class="synth_list_header">

                    <div class="synth_list_header-details">
                        <h3>Creating 4 - </h3>
                        <invItem :itemImg="this.genArr4[0]['icon']" :itemName="this.genArr4[0]['name']"/>
                    </div>

                    <button class="btn small" @click="clearLists(4)">Clear</button>
    
                    <ul class="synth-grid-4col">
                        <li>Materials</li>
                        <li>Action</li>
                        <li>Treasure/Reward</li>
                        <li>Shop cost</li>
                    </ul>
                </div>
                <invItemGen :itemTr="this.genArr4"/>
            </div>

            <div class="synth_tips">
                <h3>Tips</h3>
                <ul>
                    <li>SAVE OFTEN!!</li>
                    <li>The probability of unsuccessful synthesis is about 5-10%.</li>
                    <li>If there's a shop price, synthesisze ONCE to register it to shop.</li>
                    <li>The higher Marie's level, the better the grade to improve stats!</li>
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
import subHeader from '@/components/main-subheader.vue';
import $ from 'jquery';

import weaponsList from '@/assets/data/synth_weapons.json';
import armorList from '@/assets/data/synth_armor.json';
import accessoriesList from '@/assets/data/synth_accessories.json';
import itemsList from '@/assets/data/collections_items.json';
import activeList from '@/assets/data/active.json';
import titleList from '@/assets/data/titles.json';
import bestiList from '@/assets/data/bestiary.json';
import treasList from '@/assets/data/treasures.json';


export default {
    name: "inventoryListWeapons",
    components: { subHeader, invItem, invItemGen },
    data() {
        return {
            displayArray: {
                'weapons': weaponsList[2].data,
                'armor': armorList[2].data,
                'accessories': accessoriesList[2].data,
                'items': itemsList[2].data,
                'active': activeList[2].data,
                'titles': titleList[2].data,
                'bestiary': bestiList[2].data,
                'treasure': treasList[2].data
            },

            filterSelect: 'inv-sword',
            displayAppend: [],

            selectedItem: [],                 // Selected item for synthesis
            genButton: false,                 // Enable/Disable Generate button
            genArr1: [],                      // Array of all generated materials
            genArr2: [],                      // Array of all generated materials
            genArr3: [],                      // Array of all generated materials
            genArr4: [],                      // Array of all generated materials
        }
    },
    mounted() {
        //Get all Items within category and set into array
        this.generateDisplayList(this.filterSelect);
    },
    methods: {
        //Add Unique class name to each listed item
        getUniqueClass(name) {
            return name.replace(/[^\w]/g, "");
        },

        fetchArrayData(find, request) {

                let wap = this.displayArray['weapons'].filter(function (e) { return e.name == find })[0];
                if (wap) { 
                    if (request == 'icon') {return wap['icon'];}
                    else { return wap; }
                }

                let arm = this.displayArray['armor'].filter(function (e) { return e.name == find })[0];
                if (arm) {
                    if (request == 'icon') { return arm['icon']; }
                    else { return arm; } 
                }

                let item = this.displayArray['items'].filter(function (e) { return e.name == find })[0];
                if (item) {
                    if (request == 'icon') { return item['icon']; }
                    else { return item; }
                }

                let acc = this.displayArray['accessories'].filter(function (e) { return e.name == find })[0];
                if (acc) {
                    if (request == 'icon') { return acc['icon']; }
                    else { return acc; }
                }

                let act = this.displayArray['active'].filter(function (e) { return e.name == find })[0];
                if (act) {
                    if (request == 'icon') { return act['icon']; }
                    else { return act; }
                }

                if (request == 'icon') {return 'inv-active';}

        },

        //Populate the display list
        generateDisplayList(type) {
            this.displayAppend = [];
            this.filterSelect = type;

            if (type == 'inv-armor' || type == 'inv-accessories') {
                this.displayAppend = this.displayArray[type.slice(4)];
            } else {
                const waponNum = this.displayArray['weapons'].filter(function (e) { return e.icon == type })
                const typeNum = waponNum.length;
                for (let i = 0; i < typeNum; i++) {
                     this.displayAppend.push(waponNum[i]);
                }
            }
        },

        //Select item (Individual)
        selectIndividualItem(name) {
            this.selectedItem = [];
            $('.synth_display_body').removeClass('selectedSynth');

            //Grab the selector and make ACTIVE
            const y = this.getUniqueClass(name);
            const sel = $('.' + y);
            sel.addClass('selectedSynth');

            const syn = this.fetchArrayData(name)
            this.selectedItem.push(syn['name'], syn['icon']);
        },

        //Clear All Lists
        clearLists(x) {
            if (x == 'all') {
                this.genArr1 = [];
                this.genArr2 = [];
                this.genArr3 = [];
                this.genArr4 = [];
            } else if (x == 1) {
                this.genArr1 = [];
            } else if (x == 2) {
                this.genArr2 = [];
            } else if (x == 3) {
                this.genArr3 = [];
            } else if (x == 4) {
                this.genArr4 = [];
            }
        },




        //Start searching for materials from selected list
        startGeneratingBuild(tr, list) {

            if (list == 1) {
                this.genArr1 = [];
            } else if (list == 2) {
                this.genArr2 = [];
            } else if (list == 3) {
                this.genArr3 = [];
            } else if (list == 4) {
                this.genArr4 = [];
            }
            
            this.fetchCalledWeapon(this.selectedItem[0], this.selectedItem[1].slice(4),tr, list);

        },

        //Find data on materials for found weapon
        fetchCalledWeapon(nm, type, tr, list) {

                if (type == 'armor' || type == 'accessories') {
                    var syn = this.displayArray[type].filter(function (e) { return e.name == nm })[0];
                    
                } else {
                    var syn = this.displayArray['weapons'].filter(function (e) { return e.name == nm })[0];
                }

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
                    this.checkSynth(tr, '1', nm, syn['synth_item1']),
                    this.checkSynth(tr, '2', nm, syn['synth_item2']),
                    this.checkSynth(tr, '3', nm, syn['synth_item3']),
                    this.checkSynth(tr, '4', nm, syn['synth_item4']),
                ];

                this.buildGen(tr, nm, icon, buyg, buytp, source, synth, list);
        },

        checkSynth(tr, num, parent, name) {
            if (!name) {return '';}
            
            const syn = this.fetchArrayData(name);

            const tier = tr + num;
            const icon = syn['icon'];
            const buyg = syn['cost_g'];
            const buytp = syn['cost_tp'];
            const bestiary = this.searchBestiary(name);
            const convert = this.searchConverts(name);
            const title = this.searchTitles(name);
            const source = this.searchSource(name);

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

            if (parent == name || obj['buyg'] > 0 || obj['buytp'] > 0) {obj['prevent'] = true;}

            return obj;
        },

        searchBestiary(find) {

            const over = this.displayArray['bestiary'].filter(function (e) { return e.overkill == find })[0];
            if (over) {return [over['name'], over['zone'], 'Overkill', over['ID'], over['area']];}

            const drop1 = this.displayArray['bestiary'].filter(function (e) { return e.drop1 == find })[0];
            if (drop1) {return [drop1['name'], drop1['zone'], 'Normal drop', drop1['ID'], drop1['area']];}

            const rare1 = this.displayArray['bestiary'].filter(function (e) { return e.rare1 == find })[0];
            if (rare1) {return [rare1['name'], rare1['zone'], 'Rare drop', rare1['ID'], rare1['area']];}

            const drop2 = this.displayArray['bestiary'].filter(function (e) { return e.drop2 == find })[0];
            if (drop2) {return [drop2['name'], drop2['zone'], 'Normal drop', drop2['ID'], drop2['area']];}

            const rare2 = this.displayArray['bestiary'].filter(function (e) { return e.rare2 == find })[0];
            if (rare2) {return [rare2['name'], rare2['zone'], 'Rare drop', rare2['ID'], rare2['area']];}

            return '';
        },

        searchConverts(find) {

            let wap = this.displayArray['weapons'].filter(function (e) { return e.convert == find })[0];
            if (wap) {return [wap['name'], wap['icon'], wap['ID']];}
            
            let arm = this.displayArray['armor'].filter(function (e) { return e.convert == find })[0];
            if (arm) { return [arm['name'], arm['icon'], arm['ID']]; }
            
            let acc = this.displayArray['accessories'].filter(function (e) { return e.convert == find })[0];
            if (acc) { return [acc['name'], acc['icon'], acc['ID']]; }

            return '';
        },

        searchTitles(find) {

            let rw1 = this.displayArray['titles'].filter(function (e) { return e.reward1 == find })[0];
            if (rw1) { return 'Title reward #' + rw1['ID']; }

            let rw2 = this.displayArray['titles'].filter(function (e) { return e.reward2 == find })[0];
            if (rw2) { return 'Title reward #' + rw2['ID']; }

            let rw3 = this.displayArray['titles'].filter(function (e) { return e.reward3 == find })[0];
            if (rw3) { return 'Title reward #' + rw3['ID']; }

            return '';
        },

        searchSource(find) {

            let tr1 = this.displayArray['treasure'].filter(function (e) { return e.treasure1 == find })[0];
            if (tr1 && tr1['target'] === 'Soul Reward') {return 'Soul Reward ' + tr1['soul'] + ' in ' + tr1['location'];}
            else if (tr1 && tr1['target'] === 'Treasure') {return 'Treasure in ' + tr1['location'] + ' dungeon';}

            let tr2 = this.displayArray['treasure'].filter(function (e) { return e.treasure2 == find })[0];
            if (tr2 && tr2['target'] === 'Soul Reward') { return 'Soul Reward ' + tr2['soul'] + ' in ' + tr2['location'];}

            let tr3 = this.displayArray['treasure'].filter(function (e) { return e.treasure3 == find })[0];
            if (tr3 && tr3['target'] === 'Soul Reward') { return 'Soul Reward ' + tr3['soul'] + ' in ' + tr3['location']; }

            return ''

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
                'list': list
            };

            if (list == 1) {
                this.genArr1.push(newArr);
            } else if (list == 2) {
                this.genArr2.push(newArr);
            } else if (list == 3) {
                this.genArr3.push(newArr);
            } else if (list == 4) {
                this.genArr4.push(newArr);
            }

            for (let i = 0; i < synth.length; i++) {

                //Stop under these conditions
                if (!synth[i] || synth[i]['prevent'] || synth[i]['buyg'] || synth[i]['buytp']) {
                    return false
                //Search if item is a weapon/armor/accessory
                } else if (
                    synth[i]['icon'] != 'inv-monster' && 
                    synth[i]['icon'] != 'inv-metal' && 
                    synth[i]['icon'] != 'inv-item') {
                        const nm = synth[i]['name'];
                        const tr = synth[i]['tier'];
                        const icon = synth[i]['icon'];
                        this.fetchCalledWeapon(nm, icon.slice(4), tr, list);
                //Search if item is from converted
                } else if (synth[i]['convert'].length > 0) {
                    const nm = synth[i]['convert'][0];
                    const tr = synth[i]['tier'];
                    const icon = synth[i]['convert'][1];
                    this.fetchCalledWeapon(nm, icon.slice(4), tr, list);
                }
            }

        },



    },
}
</script>