<!-- eslint-disable prettier/prettier -->
<template>
    <div class="map_details" v-for="data in info" :key="data.id">
        <div v-if="data.target == 'guide' || data.target == 'Soul Reward'">
            <div class="title">
                
                <h4 v-if="data.target == 'Soul Reward'">{{ data.target }} #{{ data.soul }}</h4>
                <h4 v-if="data.icon_type == 'event'">#{{ data.event_num }} {{ data.name }}</h4>
                <h4 v-if="data.icon_type == 'icon'">{{ data.name }}</h4>
                <p class="title__sub" v-if="data.condition">(True End Route Only)</p>
                <p class="title__sub" v-if="data.true_end_name">({{ data.true_end_name }})</p>
                <p class="title__sub" v-if="data.type == 'Tablet'">(Blockade)</p>
            </div>

            <hr />

            <div class="notes" v-if="data.notes">
                <p>NOTE:</p>
                <p>{{ data.notes }}</p>
            </div>

            <!-- Dungeon Display -->
            <div class="dungeon" v-if="data.type == 'Dungeon' || data.type == 'DLC'">
                <p>Open Dungeon Map</p>
            </div>

            <!-- Event Display -->
            <div class="te_action glow_effect" v-if="data.true_end_task">
                <p>True End Action:</p>
                <p class="sub">{{ data.true_end_task }}</p>
            </div>

            <!-- Battles -->
            <div class="event_battles" v-if="data.battle1_img">
                <div>
                    <div class="event_battles__forced">
                        <p>Mandatory Team:</p>
                        <p class="sub">{{ data.battle1_team }}</p>
                    </div>
                    <img :src="`src/assets/battle/${data.battle1_img}`" alt="Battle1" />
                </div>
                <div v-if="data.battle2_img">
                    <div class="event_battles__forced">
                        <p>Mandatory Team:</p>
                        <p class="sub">{{ data.battle2_team }}</p>
                    </div>
                    <img :src="`src/assets/battle/${data.battle2_img}`" alt="Battle2" />
                </div>
                <div v-if="data.battle3_img">
                    <div class="event_battles__forced">
                        <p>Mandatory Team:</p>
                        <p class="sub">{{ data.battle3_team }}</p>
                    </div>
                    <img :src="`src/assets/battle/${data.battle3_img}`" alt="Battle3" />
                </div>
            </div>

            <!-- Rewards -->
            <div class="rewards" v-if="data.rewards || data.recruit">
                <p>Event rewards:</p>
                <p class="sub" v-if="data.rewards">{{ data.rewards }}</p>
                <p class="sub" v-if="data.recruit">Recruit - {{ data.recruit }}</p>
            </div>

            <div class="rewards" v-if="data.target == 'Soul Reward'">
                <p>Rewards:</p>
                <p class="sub">{{ data.type1 }} - {{ data.treasure1 }} x{{ data.qty1 }}</p>
                <p class="sub">{{ data.type2 }} - {{ data.treasure2 }} x{{ data.qty2 }}</p>
                <p class="sub" v-if="data.treasure3">{{ data.type3 }} - {{ data.treasure3 }} x{{ data.qty3 }}</p>
            </div>
 
        </div>
        <div v-if="data.target == 'bestiary'">
            <div class="bestiary">
                <ul>
                    <li v-for="data in info" :key="data.id">
                        {{ data.name }}
                    </li>
                </ul>
            </div>
        </div>
    </div>


</template>

<script lang="ts">
    export default {
        name: "Map_Details",
        props: 
            {'info' : {type: Object},
            'mapName' : {type: String}},
    }
</script>






