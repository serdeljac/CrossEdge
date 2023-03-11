<template>
    <li class="synth-grid-4col" v-if="synth['name'] && (synth['icon'] == 'inv-monster' || synth['icon'] == 'inv-metal' || synth['icon'] == 'inv-item')">

        <!-- Row 1 - Material -->
        <div class="bind">
            <invItem v-if="synth['name']" :itemImg="synth['icon']" :itemName="synth['name']" />
            <p v-else>ERROR FINDING MATERIAL</p>
        </div>

        <!-- Row 2 - Action -->
        <div class="bind">
            <invItem v-if="synth['convert']" :itemTr="'Convert'" :itemImg="synth['convert'][1]" :itemName="synth['convert'][0] + ' #' + synth['convert'][2]" />
            <p v-else-if="synth['monster']">{{ synth['monster'][2] }} (#{{ synth['monster'][3] }}) {{ synth['monster'][0] }} in 
                <router-link :to="{ name: synth['monster'][1], params: { selectedMap: synth['monster'][1] } }" target="_blank">
                    {{ synth['monster'][1] }}
                </router-link>
            </p>
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
    <li class="synth-grid-4col" v-else-if="synth['name']">
        <div class="bind">
            <invItem v-if="synth['name']" :itemImg="synth['icon']" :itemName="synth['name']" />
            <p v-else>ERROR FINDING MATERIAL</p>
        </div>

        <div class="bind">
            <p v-if="arr['name'] == synth['name']">Cannot synthesize; only reforged</p>
            <p v-else-if="synth['id'] == '1'">Cannot synthesize</p>
            <p v-else-if="!synth['title'] && !synth['source'] && !synth['buyg'] && !synth['buytp']">Synth Only</p>
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
</template>

<script lang="ts">
import invItem from '@/components/parts/inv-display.vue';

    export default {
        name: 'SynthesisMaterials',
        props: ['synth', 'arr'],
        components: { invItem },
        mounted() {
            console.log(this.synth)
        }
    }
</script>