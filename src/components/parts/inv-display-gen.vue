<template>
    

    <ul class="genlist_header">
        <li>Materials</li>
        <li>Action</li>
        <li>Treasure/Reward</li>
        <li>Shop cost</li>
    </ul>

    <hr>

    <div class="genlist" v-for="arr in itemTr" :key="arr.id">
        <div
            class="genlist_group"
            v-if="!arr['synth'][0] == ''"
            :class="addUniqueClass(arr['name'], '', false)"
            v-bind:tier="arr['tier']"
            >
            <invItem :itemImg="arr['icon']" :itemName="arr['name']" />
            <div
                v-for="synth in arr['synth']"
                :key="synth.id"
                class="material">
                <ul 
                    v-if="synth['name']"
                    :class="addUniqueClass(arr['name'], synth['name'], false)"
                    @click="checkthis(arr['name'], synth['name'], synth['tier'])"
                    v-bind:tier="synth['tier']"
                    >
                    <li v-if="synth['icon'] == 'inv-monster' || synth['icon'] == 'inv-metal' || synth['icon'] == 'inv-item'">

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
                    <li v-else>
                        <div class="bind">
                            <invItem v-if="synth['name']" :itemImg="synth['icon']" :itemName="synth['name']" />
                            <p v-else>ERROR FINDING MATERIAL</p>
                        </div>

                        <div class="bind">
                            <p v-if="arr['name'] == synth['name']">Cannot synthesize, but reforged</p>
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
                </ul>
            </div>
        </div>

    </div>

</template>

<script lang="ts">
import invItem from '@/components/parts/inv-display.vue';
import $ from 'jquery';

    export default {
        name: 'Image&Name',
        props: ['itemTr'],
        components: {invItem},
        data() {
            return {
            }
        },
        methods: {
            checkthis(par, name, tier) {

                const parent = this.addUniqueClass(par, '', false);
                const child = this.addUniqueClass(par, name, true);
                const materialSelect = $('.' + parent + '.' + child);

                if (materialSelect.hasClass('active')) {
                    materialSelect.removeClass('active')
                } else {
                    materialSelect.addClass('active')
                }




                // const parentSel = $('.genlist_group' + '.' + child).attr('tier', tier);
                // if (parentSel.hasClass('active')) {
                //     parentSel.removeClass('active');
                // } else {
                //     parentSel.addClass('active');
                //     const limit = $('.genlist_group').length;
                    
                //     for (let i = 1; i < (limit + 1); i++) {
                //         console.log(i);
                //         const chk = $('.genlist:nth-of-type(' + (i + 1) + ') .genlist_group').attr('tier')
                        
                //         console.log(tier, chk)

                //         if (tier == chk) {
                //             console.log('ok')
                //         }
                //     }
                // }
            },
            addUniqueClass(par, name, request) {

                    const parent = par.replace(/[^\w]/g, "");
                    var child = '';
                    if (name) {
                        var child = name.replace(/[^\w]/g, "");
                    }

                    if (par == name) {
                        var child = child + '1'
                    }
                if (!request) {
                    return parent + ' ' + child;
                } else {
                    return child
                }
            }
        },
    }
</script>