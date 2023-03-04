<template>
    <!-- <p class="name" v-for="arr in itemTr" :key="arr.id">
        {{ arr }}<br />
    </p> -->

    <hr>

    <ul class="genlist_header">
        <li>Materials</li>
        <li>Action</li>
        <li>Treasure/Reward</li>
        <li>Shop cost</li>
    </ul>

    <div class="genlist" v-for="arr in itemTr" :key="arr.id">

        <div v-for="synth in arr['synth']" :key="synth.id">
            <ul v-if="synth['name']">
            
                <li v-if="synth['icon'] == 'inv-monster' || synth['icon'] == 'inv-metal' || synth['icon'] == 'inv-item'">

                    <!-- Row 1 - Material -->
                    <div class="bind">
                        <invItem v-if="synth['name']" :itemImg="synth['icon']" :itemName="synth['name']" />
                        <p v-else>ERROR FINDING MATERIAL</p>
                    </div>

                    <!-- Row 2 - Action -->
                    <div class="bind">
                        <invItem v-if="synth['convert']" :itemTr="'Convert'" :itemImg="synth['convert'][1]" :itemName="synth['convert'][0]" />
                        <p v-else-if="synth['monster']">{{ synth['monster'][2] }} {{ synth['monster'][0] }} in {{ synth['monster'][1] }}</p>
                        <p v-else-if="synth['title'] || synth['source']">Find via Treasure/Reward</p>
                        <p v-else-if="synth['buyg'] || synth['buytp']">Purchase from store</p>
                        <p v-else class="error">ERROR FINDING ACTION</p>
                    </div>

                    <!-- Row 3 - Treasure Location -->
                    <div class="bind">
                        <p v-if="synth['source']">{{ synth['source'] }}</p>
                        <p v-else-if="synth['title']">{{ synth['title'] }}</p>
                        <p v-else>-</p>
                    </div>

                    <!-- Row 4 - Shop Price -->
                    <div class="bind">
                        <p v-if="synth['buyg']">{{ synth['buyg'] }}<span class="currency">g</span></p>
                        <p v-else-if="synth['buytp']">{{ synth['buytp'] }}<span class="currency">g</span></p>
                        <p v-else>-</p>
                    </div>

                    
                    
                </li>

                <li v-else>

                    <div class="bind">
                        <invItem v-if="synth['name']" :itemImg="synth['icon']" :itemName="synth['name']" />
                        <p v-else>ERROR FINDING MATERIAL</p>
                    </div>

                    <div class="bind">
                        <p v-if="arr['name'] == synth['name']">-</p>
                        <p v-else-if="arr['synth']">Cannot synthesize</p>
                    </div>

                    <div class="bind">
                        <p v-if="synth['source']">{{ synth['source'] }}</p>
                        <p v-else-if="synth['title']">{{ synth['title'] }}</p>
                    </div>

                    <div class="bind">
                        <p v-if="synth['buyg']">{{ synth['buyg'] }}<span class="currency">g</span></p>
                        <p v-else-if="synth['buytp']">{{ synth['buytp'] }}<span class="currency">g</span></p>
                        <p v-else>-</p>
                    </div>
                    
                </li>
            </ul>
        </div>

    </div>

    <!-- <div class="name__generated" v-for="arr in itemTr" :key="arr.id">
        <div class="weapon_details">

            <div class="bind">
                <img v-bind:src="'/src/assets/icons/' + arr['icon'] + '.jpg'" />
                <p>{{ arr['name'] }}</p>
            </div>

            <ul v-if="arr['synth'][0].length > 0" class="synthmaterials">
                <li v-if="arr['synth'][0]">

                    <div v-if="arr['name'] == arr['synth'][0][0]" class="bind">
                        <img v-bind:src="'/src/assets/icons/' + arr['synth'][0][1] + '.jpg'" />
                        <p class="synthmaterials_name">{{ arr['synth'][0][0] }}</p>
                            <ul>
                                <li>Found in this location</li>
                                <li>Can be purchased after synthesis</li>
                            </ul>
                    </div>

                    <div v-else-if="arr['synth'][0][1] != 'monster'">
                        <img v-bind:src="'/src/assets/icons/' + arr['synth'][0][1] + '.jpg'" />
                        <p class="synthmaterials_name">{{ arr['synth'][0][0] }}</p>
                    </div>

                    <div v-else class="bind">
                        <img v-bind:src="'/src/assets/icons/' + arr['synth'][0][1] + '.jpg'" />
                        <p class="synthmaterials_name">{{ arr['synth'][0][0] }}</p>
                        <p v-if="arr['synth'][0][2]" class="synthmaterials_gbuy"> - Buy for {{ arr['synth'][0][2] }}g</p>
                        <p v-else-if="arr['synth'][0][3]" class="synthmaterials_tpbuy"> - Exchange for {{ arr['synth'][0][3] }}tp</p>
                        <p v-else-if="arr['synth'][0][5]" class="synthmaterials_convert"> - Convert <img v-bind:src="'/src/assets/icons/' + arr['synth'][0][5][1] + '.jpg'" />{{ arr['synth'][0][5][0] }}</p>
                        <p v-else class="synthmaterials_defeat"> - {{ arr['synth'][0][4][2] }} <span>{{ arr['synth'][0][4][0] }}</span> in {{ arr['synth'][0][4][1] }}</p>
                    </div>
                </li>

                <li v-if="arr['synth'][1]">
                    <div class="bind">
                        <img v-bind:src="'/src/assets/icons/' + arr['synth'][1][1] + '.jpg'" />
                        <p class="synthmaterials_name">{{ arr['synth'][1][0] }}</p>
                        <p v-if="arr['synth'][1][2]" class="synthmaterials_gbuy"> - Buy for {{ arr['synth'][1][2] }}g</p>
                        <p v-else-if="arr['synth'][1][3]" class="synthmaterials_tpbuy"> - Exchange for {{ arr['synth'][1][3] }}tp</p>
                        <p v-else-if="arr['synth'][1][5]" class="synthmaterials_convert"> - Convert <img v-bind:src="'/src/assets/icons/' + arr['synth'][1][5][1] + '.jpg'" />{{ arr['synth'][1][5][0] }}</p>
                        <p v-else class="synthmaterials_defeat"> - {{ arr['synth'][1][4][2] }} <span>{{ arr['synth'][1][4][0] }}</span> in {{ arr['synth'][1][4][1] }}</p>
                    </div>
                </li>

                <li v-if="arr['synth'][2]">
                    <div class="bind">
                        <img v-bind:src="'/src/assets/icons/' + arr['synth'][2][1] + '.jpg'" />
                        <p class="synthmaterials_name">{{ arr['synth'][2][0] }}</p>
                        <p v-if="arr['synth'][2][2]" class="synthmaterials_gbuy"> - Buy for {{ arr['synth'][2][2] }}g</p>
                        <p v-else-if="arr['synth'][2][3]" class="synthmaterials_tpbuy"> - Exchange for {{ arr['synth'][2][3] }}tp</p>
                        <p v-else-if="arr['synth'][2][5]" class="synthmaterials_convert"> - Convert <img v-bind:src="'/src/assets/icons/' + arr['synth'][2][5][1] + '.jpg'" />{{ arr['synth'][2][5][0] }}</p>
                        <p v-else class="synthmaterials_defeat"> - {{ arr['synth'][2][4][2] }} <span>{{ arr['synth'][2][4][0] }}</span> in {{ arr['synth'][2][4][1] }}</p>
                    </div>
                </li>

                <li v-if="arr['synth'][3]">
                    <div class="bind">
                        <img v-bind:src="'/src/assets/icons/' + arr['synth'][3][1] + '.jpg'" />
                        <p class="synthmaterials_name">{{ arr['synth'][3][0] }}</p>
                        <p v-if="arr['synth'][3][2]" class="synthmaterials_gbuy"> - Buy for {{ arr['synth'][3][2] }}g</p>
                        <p v-else-if="arr['synth'][3][3]" class="synthmaterials_tpbuy"> - Exchange for {{ arr['synth'][3][3] }}tp</p>
                        <p v-else-if="arr['synth'][3][5]" class="synthmaterials_convert"> - Convert <img v-bind:src="'/src/assets/icons/' + arr['synth'][3][5][1] + '.jpg'" />{{ arr['synth'][3][5][0] }}</p>
                        <p v-else class="synthmaterials_defeat"> - {{ arr['synth'][3][4][2] }} <span>{{ arr['synth'][3][4][0] }}</span> in {{ arr['synth'][3][4][1] }}</p>
                    </div>
                </li>

            </ul>

            <ul v-else>
                Aquired: {{ arr['location'] }}
            </ul>
        </div>
        
        
    </div> -->
</template>

<script lang="ts">
import invItem from '@/components/parts/inv-display.vue';

    export default {
        name: 'Image&Name',
        props: ['itemTr'],
        components: {invItem},
        updated() {
            console.log(this.itemTr)
        }
    }
</script>