<template>
    <!-- <p class="name" v-for="arr in itemTr" :key="arr.id">
        {{ arr }}<br />
    </p> -->

    <hr>

    <div class="name__generated" v-for="arr in itemTr" :key="arr.id">
        <div class="weapon_details">

            <div class="bind">
                <img v-bind:src="'/src/assets/icons/' + arr['icon'] + '.jpg'" />
                <p>{{ arr['name'] }}</p>
            </div>

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
    export default {
        name: 'Image&Name',
        props: ['itemTr'],
        updated() {
            console.log(this.itemTr)
        }
    }
</script>