<template>
    <li v-if="synth['name'] && (synth['icon'] == 'inv-monster' || synth['icon'] == 'inv-metal' || synth['icon'] == 'inv-item')" indx place="sec" v-bind:tier="synth['tier']">

        <div class="bind">
            <invItem :itemImg="synth['icon']" :itemName="synth['name']" />
        </div>

        <div class="bind">
            <p v-if="synth['buyg']">Purchase in store for {{ synth['buyg'] }}<span class="currency">g</span></p>
            <p v-else-if="synth['buytp']">Purchase in store for {{ synth['buytp'] }}<span class="currency">tp</span></p>
            <invItem v-else-if="synth['convert']" :itemTr="'Convert'" :itemImg="synth['convert'][1]" :itemName="synth['convert'][0] + ' #' + synth['convert'][2]" />
            <p v-else-if="synth['monster']">{{ synth['monster'][2] }} (#{{ synth['monster'][3] }}) {{ synth['monster'][0] }} in 
                <router-link :to="{ name: synth['monster'][1], params: { selectedMap: synth['monster'][1] } }" target="_blank">
                    {{ synth['monster'][1] }}
                </router-link>
            </p>
            <p v-else-if="synth['title'] || synth['source']">Find via Treasure/Reward</p>
            <p v-else-if="synth['source']">{{ synth['source'] }}</p>
            <p v-else-if="synth['title']">{{ synth['title'] }}</p>
        </div>
    </li>

    <li v-else-if="synth['name']" place="sec" v-bind:tier="synth['tier']">

        <div class="bind">
            <invItem :itemImg="synth['icon']" :itemName="synth['name']" />
        </div>

        <div class="bind">
            <p v-if="synth['buyg']">Purchase in store for {{ synth['buyg'] }}<span class="currency">g</span></p>
            <p v-else-if="synth['buytp']">Purchase in store for {{ synth['buytp'] }}<span class="currency">tp</span></p>
            <p v-else-if="synth['source'] && synth['title']">
                {{ synth['source'] }} & {{ synth['title'] }}
            </p>
            <p v-else-if="synth['title']">{{ synth['title'] }}</p>
            <p v-else-if="synth['source']">{{ synth['source'] }}</p>
            <p v-else>Synthesize only</p>
        </div>

    </li>

</template>

<script lang="ts">
import invItem from '@/components/parts/inv-display.vue';

    export default {
        name: 'SynthesisMaterials',
        props: ['synth', 'arr'],
        components: { invItem },
    }
</script>