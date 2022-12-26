<!-- eslint-disable prettier/prettier -->
<template>
    <div class="map_details">
        <div class="detail_change">
            <h3>
            {{ mapName }}
            </h3>
            <hr />
            <!-- SOUL REWARDS INFO -->
            <div v-for="data in info" :key="data.id" class="map_details__display">
                <div v-if="data.Target == 'Soul'">

                    <p class="target">
                            <div class="target_complete"></div>
                            {{ data.Target }} #{{ data.Soul }}
                    </p>

                    <p class="conditions" v-if="data.Condition">
                        True End route complete
                    </p>
                    
                    <div class="rewards">
                        <p>Rewards:</p>
                        <ul>
                            <li>{{ data.Type1 }} - {{ data.Treasure1 }} x{{ data.Qty1 }}</li>
                            <li>{{ data.Type2 }} - {{ data.Treasure2 }} x{{ data.Qty2 }}</li>
                            <li v-if="data.Treasure3">{{ data.Type3 }} - {{ data.Treasure3 }} x{{ data.Qty3 }}</li>
                        </ul>
                    </div>
                </div>
            </div>

            
            <!-- EVENTS INFO -->
            <div v-for="data in info" :key="data.id" class="map_details__display">
                <div v-if="data.Target == 'Event'">
            
                    <p class="target">
                        <div class="target_complete"></div>
                        {{ data.Name }}
                    </p>

                    <p class="conditions" v-if="data.TE_requirement">
                        True End Requirement: {{ data.TE_requirement }}
                    </p>
            
                    

                    <div class="battle" v-if="data.Battle1">
                        <p v-if="data.Forced" class="battle__forced"><span>Forced Character:</span><br /> {{ data.Forced }}</p>
                        <div class="battle_image">
                            <div>
                            <p class="battle__title">Battle 1</p>
                            <img :src="`src/assets/battle/${data.Battle1}`" alt="Battle1" />
                            </div>
                            <div v-if="data.Battle2">
                            <p class="battle__title">Battle 2</p>
                            <img :src="`src/assets/battle/${data.Battle2}`" alt="Battle2" />
                            </div>
                        </div>
                    </div>

                    <div class="dungeon" v-if="data.Dungeon">
                        <p>Open Dungeon Map</p>
                    </div>
            
                    <div class="rewards">
                        <p v-if="data.Recruit">Recruit: {{ data.Recruit }}</p>
                        <p v-if="data.Reward">Reward: {{ data.Reward }}</p>
                    </div>
                    <p class="true_end_path" v-if="data.TE_path">
                        Next: {{ data.TE_path }}
                    </p>
                </div>
            </div>
        </div>
        <div class="map_checklist">
            <h3>Checklist</h3>
            <h4>Souls Aquired:</h4>
            <ul>
                <li>Soul Rewards: 0/10</li>
                <li>Soul Events: 0/1</li>
            </ul>
            <br />
            <h4>Events</h4>
            <ul>
                    <li>Start</li>
                    <li>Anfir Field</li>
                    <li>Ancient Town of Myr</li>
                    <li>Myr Suburb Mansion</li>
                    <li>Nephyis Cliff</li>
                    <li>Ferna Sara</li>
                    <li>Len Forest</li>
                    <li>Renuit Enterance</li>
                    <li>Niu Spa</li>
            </ul>
            <br />
            <h4>Enemies (for titles)</h4>
            <ul>
                <li>(1) Hornet x10 [Bottom island]</li>
                <li>(6) Vampire Bat x7 [Northwest island]</li>
                <li>(44) Hell Dog x5 [Bottom Island]</li>
            </ul>
        </div>
        
    </div>
</template>

<script lang="ts">
    export default {
        name: "Map_Details",
        props: 
            {'info' : {type: Object},
            'mapName' : {type: String}},
        data() {
            return {
            }
        },
        methods: {
        }
    }
</script>






