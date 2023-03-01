<template>
    <!-- <ul class="tier1">
        <li class="inv-name" v-for="arr in tier1" :key="arr.id">
            [ {{ arr[0] }} ]
            <img v-bind:src="'/src/assets/icons/' + arr[1][1] + '.jpg'" />
                {{ arr[1][0] }}
        </li>
        <ul class="tier2">
            <li class="inv-name" v-for="arr in tier2" :key="arr.id">
                [ {{ arr[0] }} ]
                <img v-bind:src="'/src/assets/icons/' + arr[1][1] + '.jpg'" />
                    {{ arr[1][0] }}
            </li>
        </ul>
    </ul> -->



    <p class="inv-name" v-for="arr in itemTr" :key="arr.id">
        {{ arr }}<br />
    </p>

    <hr>

    <div class="inv-name__generated" v-for="arr in itemTr" :key="arr.id">
        <div class="weapon_details">

            <div class="bind">
                <img v-bind:src="'/src/assets/icons/' + arr['icon'] + '.jpg'" />
                <p>{{ arr['name'] }}</p>
            </div>

            <ul v-if="arr['synth']" class="synthmaterials">

                <li v-if="arr['synth'][0]">
                    <div class="bind">
                        <img v-bind:src="'/src/assets/icons/inv-' + arr['synth'][0][1] + '.jpg'" />
                        <p class="synthmaterials_name">{{ arr['synth'][0][0] }}</p>
                        <p v-if="arr['synth'][0][2]" class="synthmaterials_gbuy"> - Buy for {{ arr['synth'][0][2] }}g</p>
                        <p v-else-if="arr['synth'][0][3]" class="synthmaterials_tpbuy"> - Exchange for {{ arr['synth'][0][3] }}tp</p>
                        <p v-else-if="arr['synth'][0][5]" class="synthmaterials_convert"> - Convert <img v-bind:src="'/src/assets/icons/' + arr['synth'][0][5][1] + '.jpg'" />{{ arr['synth'][0][5][0] }}</p>
                        <p v-else class="synthmaterials_defeat"> - {{ arr['synth'][0][4][2] }} <span>{{ arr['synth'][0][4][0] }}</span> in {{ arr['synth'][0][4][1] }}</p>
                    </div>
                </li>

                <li v-if="arr['synth'][1]">
                    <div class="bind">
                        <img v-bind:src="'/src/assets/icons/inv-' + arr['synth'][1][1] + '.jpg'" />
                        <p class="synthmaterials_name">{{ arr['synth'][1][0] }}</p>
                        <p v-if="arr['synth'][1][2]" class="synthmaterials_gbuy"> - Buy for {{ arr['synth'][1][2] }}g</p>
                        <p v-else-if="arr['synth'][1][3]" class="synthmaterials_tpbuy"> - Exchange for {{ arr['synth'][1][3] }}tp</p>
                        <p v-else-if="arr['synth'][1][5]" class="synthmaterials_convert"> - Convert <img v-bind:src="'/src/assets/icons/' + arr['synth'][1][5][1] + '.jpg'" />{{ arr['synth'][1][5][0] }}</p>
                        <p v-else class="synthmaterials_defeat"> - {{ arr['synth'][1][4][2] }} <span>{{ arr['synth'][1][4][0] }}</span> in {{ arr['synth'][1][4][1] }}</p>
                    </div>
                </li>

                <li v-if="arr['synth'][2]">
                    <div class="bind">
                        <img v-bind:src="'/src/assets/icons/inv-' + arr['synth'][2][1] + '.jpg'" />
                        <p class="synthmaterials_name">{{ arr['synth'][2][0] }}</p>
                        <p v-if="arr['synth'][2][2]" class="synthmaterials_gbuy"> - Buy for {{ arr['synth'][2][2] }}g</p>
                        <p v-else-if="arr['synth'][2][3]" class="synthmaterials_tpbuy"> - Exchange for {{ arr['synth'][2][3] }}tp</p>
                        <p v-else-if="arr['synth'][2][5]" class="synthmaterials_convert"> - Convert <img v-bind:src="'/src/assets/icons/' + arr['synth'][2][5][1] + '.jpg'" />{{ arr['synth'][2][5][0] }}</p>
                        <p v-else class="synthmaterials_defeat"> - {{ arr['synth'][2][4][2] }} <span>{{ arr['synth'][2][4][0] }}</span> in {{ arr['synth'][2][4][1] }}</p>
                    </div>
                </li>

                <li v-if="arr['synth'][3]">
                    <div class="bind">
                        <img v-bind:src="'/src/assets/icons/inv-' + arr['synth'][3][1] + '.jpg'" />
                        <p class="synthmaterials_name">{{ arr['synth'][3][0] }}</p>
                        <p v-if="arr['synth'][3][2]" class="synthmaterials_gbuy"> - Buy for {{ arr['synth'][3][2] }}g</p>
                        <p v-else-if="arr['synth'][3][3]" class="synthmaterials_tpbuy"> - Exchange for {{ arr['synth'][3][3] }}tp</p>
                        <p v-else-if="arr['synth'][3][5]" class="synthmaterials_convert"> - Convert <img v-bind:src="'/src/assets/icons/' + arr['synth'][3][5][1] + '.jpg'" />{{ arr['synth'][3][5][0] }}</p>
                        <p v-else class="synthmaterials_defeat"> - {{ arr['synth'][3][4][2] }} <span>{{ arr['synth'][3][4][0] }}</span> in {{ arr['synth'][3][4][1] }}</p>
                    </div>
                </li>

            </ul>

            <ul v-else>
                {{ arr['location'] }}
            </ul>
        </div>
        
        
    </div>
</template>

<script lang="ts">
    export default {
        name: 'Image&Name',
        props: ['itemTr'],
    }
</script>