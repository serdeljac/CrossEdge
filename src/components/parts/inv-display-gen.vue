<template>
    <hr>

    <ul class="genlist_header">
        <li>Materials</li>
        <li>Action</li>
        <li>Treasure/Reward</li>
        <li>Shop cost</li>
    </ul>

    <div class="genlist" v-for="arr in itemTr" :key="arr.id">
        <div class="genlist_group" @click="checkthis()">
            <invItem :itemImg="arr['icon']" :itemName="arr['name']" />
        </div>
        <div v-for="synth in arr['synth']" :key="synth.id" class="material">

            
            <ul v-if="synth['name']" :class="addUniqueClass(synth['id'], synth['name'])" @click="checkthis(synth['id'], synth['name'])">
            
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
                        <p v-if="arr['name'] == synth['name']">-</p>
                        <p v-else-if="!arr['synth']">Cannot synthesize</p>
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
                selctor: null
            }
        },
        methods: {
            checkthis(tier, name) {
                const id = name.slice(0, 3) + tier;
                const sel = $('.' + id);

                if (sel.hasClass('active')) {
                    sel.removeClass('active')
                } else {
                    sel.addClass('active')
                }
                
            },
            addUniqueClass(tier, name) {
                return name.slice(0, 3) + tier;
            }
        },
    }
</script>