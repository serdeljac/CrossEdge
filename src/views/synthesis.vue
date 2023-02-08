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

                <div class="synth_list" v-for="data in weapoArray" :key="data.id" :class="addUniqueClass(data.ID, data.Name)">
                    <div class="filter" v-if="data.Icon == filterSelect">
                        
                        <p><input type="checkbox" class="checkbox" @click="selectGear(data.ID, data.Name)"></p>

                        <p>{{ data.ID }}</p>

                        <invItem :itemImg="data.Icon" :itemName="data.Name" />

                        <div>
                            <p v-if="data.Synth_cost">{{ data.Synth_cost }}</p>
                            <p v-else>-</p>
                        </div>

                        <invItem :itemImg="fetchIconImage(data.Synth_item1)" :itemName="data.Synth_item1" />
                        <invItem :itemImg="fetchIconImage(data.Synth_item2)" :itemName="data.Synth_item2" />
                        <invItem :itemImg="fetchIconImage(data.Synth_item3)" :itemName="data.Synth_item3" />
                        <invItem :itemImg="fetchIconImage(data.Synth_item4)" :itemName="data.Synth_item4" />
                        <invItem :itemImg="fetchIconImage(data.Convert)"     :itemName="data.Convert" />
                    </div>
                </div>
                <div class="clear_buttons">
                    <button class="btn small generate" :class="{ 'active': genButton}" @click="generateMaterialsList()">Generate</button>
                    <button class="btn small" @click="selectAll(true)">Select All</button>
                    <button class="btn small" @click="selectAll(false)">Clear All</button>
                </div>
            </div>

            
            <div class="synth_body generated">
                <h3>Generated</h3>
                {{ finalArr }}
            </div>

        </div>
    </div>
</template>

<script lang="ts">
import invItem from '../components/parts/inv-display.vue';
import synthList from '@/assets/data/synthesis.json';

import subHeader from '@/components/main-subheader.vue';
import armorList from '@/assets/data/armor.json';
import weaponsList from '@/assets/data/weapons.json';
import accessoriesList from '@/assets/data/accessories.json';
import itemsList from '@/assets/data/items.json';
import activeList from '@/assets/data/active.json';
import $ from 'jquery';

export default {
    name: "inventoryListWeapons",
    components: { subHeader, invItem },
    data() {
        return {
            armorArray: armorList[2].data,
            accesArray: accessoriesList[2].data,
            itemsArray: itemsList[2].data,
            weapoArray: weaponsList[2].data,
            activArray: activeList[2].data,

            itemsParentArray: [],
            itemsChildArray: [],
            itemsMaterialArray: '',

            filterSelect: 'inv-sword',
            allItems: [],
            genButton: false,
            synth: synthList[2].data,

            finalArr: [],
        }
    },
    mounted() {
        //Get all Items within category and set into array
        this.generateParentArray();
    },
    methods: {
        addUniqueClass(id, name) {
            return id + '-' + name.substr(0, 3);
        },

        fetchIconImage(find) {
            switch (false) {
                case false:
                    //Search WEAPOS ARRAY
                    let wap = this.weapoArray.filter(function (e) { return e.Name == find });
                    if (wap.length > 0) {
                        return wap[0]['Icon'];
                        break;
                    }
                    //Search ITEMS ARRAY
                    let item = this.itemsArray.filter(function (e) { return e.Name == find });
                    if (item.length > 0) {
                        return item[0]['Icon'];
                        break;
                    }
                    //Search ACTIVE ARRAY
                    let act = this.activArray.filter(function (e) { return e.Name == find });
                    if (act.length > 0) {
                        return act[0]['Icon'];
                        break;
                    }
                    //Search ARMOR ARRAY
                    let arm = this.armorArray.filter(function (e) { return e.Name == find });
                    if (arm.length > 0) {
                        return arm[0]['Icon'];
                        break;
                    }
                    //Search ACCESSORIES ARRAY
                    let acc = this.accesArray.filter(function (e) { return e.Name == find });
                    if (acc.length > 0) {
                        return acc[0]['Icon'];
                        break;
                    }
                default:
                    return 'inv-stat';
            }
        },

        filterChange(name) {
            this.filterSelect = name;
            this.itemsChildArray = [];
            this.genButton = false;
            this.generateParentArray();
            this.selectAll(false);
        },

        generateParentArray() {
            this.itemsParentArray = [];
            const find = this.filterSelect;

            if (find == 'inv-armor') { 
                const waponNum = this.armorArray.filter(function (e) { return e.Icon == find })
                const size = waponNum.length;
                for (let i = 0; i < size; i++) {
                    const curName = waponNum[i]['Name'];
                    this.itemsParentArray.push(curName);
                }
            } else if (find == 'inv-accessories') {
                const waponNum = this.accesArray.filter(function (e) { return e.Icon == find })
                const size = waponNum.length;
                for (let i = 0; i < size; i++) {
                    const curName = waponNum[i]['Name'];
                    this.itemsParentArray.push(curName);
                }
            } else {
                const waponNum = this.weapoArray.filter(function (e) { return e.Icon == find })
                const size = waponNum.length;
                for (let i = 0; i < size; i++) {
                    const curName = waponNum[i]['Name'];
                    this.itemsParentArray.push(curName);
                }
            }
        },

        selectAll(type) {
            if (type) {
                this.itemsChildArray = [];
                this.itemsChildArray = this.itemsParentArray;
                this.genButton = true;
                $('.synth_list').addClass('active');
                $('.checkbox').prop("checked", true);
            } else {
                this.itemsChildArray = [];
                this.genButton = false;
                this.itemsMaterialArray = '';
                $('.synth_list').removeClass('active');
                $('.checkbox').prop("checked", false);
            }
        },

        selectGear(id, name) {
            const y = this.addUniqueClass(id, name);
            const sel = $('.' + y);

            if (sel.hasClass('active')) {
                sel.removeClass('active');
                sel.children('.checkbox').prop("checked", false);
                this.buildItemChildArray(name, false);
            } else {
                sel.addClass('active');
                this.genButton = true;
                sel.children('.checkbox').prop("checked", true);
                this.buildItemChildArray(name, true);
            }
        },

        buildItemChildArray(name, push) {
            if(push) {
                this.itemsChildArray.push(name);
            } else {
                const size = this.itemsChildArray.length;

                for (let i = 0; i < size; i++) {
                    if (this.itemsChildArray[i] == name) {
                        this.itemsChildArray.splice(i,i)
                    }
                }
            }
            if (!$('.synth_list').hasClass('active')) {
                this.itemsChildArray = [];
                this.genButton = false;
            }
        },

        generateMaterialsList() {
            const con = $('.generate').hasClass('active');
            if(con) {
                this.itemsMaterialArray = this.itemsChildArray;
                this.findMaterials(this.itemsChildArray);
                
            }
        },

        findMaterials(arr) {
            this.finalArr = []; //CLEAR FINAL ARRAY
            const hold = [];
            const size = arr.length;
            for (let i = 0; i < size; i++) {
                const find = arr[i];
                const syn = this.synth.filter(function (e) { return e.Name == find });
                const foundName = syn[0]['Name'];
                hold.push(foundName);
                
            }
            const tier1 = { 'tier1': hold };
            this.finalArr.push(tier1);

            const x = this.finalArr[0]['tier1'];

            if (x) {
                this.tier2find(x);
            }
            
        },

        tier2find(arr) {
            // const hold = [];
            // const size = arr.length;
            // for (let i = 0; i < size; i++) {
            //     const find = arr[i];
            //     const syn = this.synth.filter(function (e) { return e.Name == find });
            //     hold.push(syn[0]['Name']);
            // }

            // const tier2 = { 'tier2': hold };
            // this.finalArr.push(tier2);
            // this.tier2find(hold);
        }


        
    },

}
</script>