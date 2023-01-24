<!-- eslint-disable prettier/prettier -->
<template>
    <div class="map_details" >

        <div v-if="tabOpen == 'tab1'">
            <div v-for="data in info" :key="data.id">
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
                    <button class="btn" @click="openDungeonMap()">Open Dungeon Map</button>
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
                        <img :src="`/src/assets/battle/${data.battle1_img}`" alt="Battle1" />
                    </div>
                    <div v-if="data.battle2_img">
                        <div class="event_battles__forced">
                            <p>Mandatory Team:</p>
                            <p class="sub">{{ data.battle2_team }}</p>
                        </div>
                        <img :src="`/src/assets/battle/${data.battle2_img}`" alt="Battle2" />
                    </div>
                    <div v-if="data.battle3_img">
                        <div class="event_battles__forced">
                            <p>Mandatory Team:</p>
                            <p class="sub">{{ data.battle3_team }}</p>
                        </div>
                        <img :src="`/src/assets/battle/${data.battle3_img}`" alt="Battle3" />
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
        </div>

        <div class="bestiary" v-if="tabOpen == 'tab2'">

            <h3>Enemies to defeat:</h3>
            
            <div class="tbl" v-for="data in info" :key="data.id">
                <div v-if="data.kill_title">
                    <p class="bestiary__monster">(#{{ data.ID }}) {{ data.name }}</p>
                    <ul class="bestiary__title">
                        <li>Location: {{ data.area }}</li>
                        <li v-if="data.kill_title">Title: {{ data.kill_title }} - Defeat {{ data.kill_count }}</li>
                    </ul>
                </div>
            </div>

            <hr>

            <h3>Items to aquire:</h3>

            <div class="tbl" v-for="data in info" :key="data.id">
                <div v-if="data.item_title">
                    <p class="bestiary__monster">(#{{ data.ID }}) {{ data.name }}</p>
                    <ul class="bestiary__title">
                        <li>Location: {{ data.area }}</li>
                        <li v-if="data.item_title">Title: {{ data.item_title }} {{
                        data.item_name }} {{ data.item_count }}</li>
                    </ul>
                </div>
            </div>

        </div>

        <div class="bestiary" v-if="tabOpen == 'tab3'">
        
            <h3>Bestiary:</h3>
        
            <div class="tbl" v-for="data in info" :key="data.id">
                <div>
                    <p class="bestiary__monster">(#{{ data.ID }}) {{ data.name }}</p>
                    <ul class="bestiary__title">
                        <li>Location: {{ data.area }}</li>
                        <li class="item_drop" v-if="data.drop1">Drop 1: {{ data.drop1 }}</li>
                        <li class="item_drop" v-if="data.drop2">Drop 2: {{ data.drop2 }}</li>
                        <li class="item_rare" v-if="data.rare1">Rare 1: {{ data.rare1 }}</li>
                        <li class="item_rare" v-if="data.rare2">Rare 2: {{ data.rare2 }}</li>
                        <li class="item_overkill" v-if="data.overkill">Overkill: {{ data.overkill }}</li>
                    </ul>
                </div>
            </div>
        </div>
    </div>

</template>

<script lang="ts">
    export default {
        name: "Map_Details",
        props: 
            {
                'defaults': {type: Object},
                'tabOpen': { type: String },
                'info' : {type: Object},
        },
    }
</script>