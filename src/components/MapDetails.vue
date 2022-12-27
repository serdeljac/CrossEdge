<!-- eslint-disable prettier/prettier -->
<template>
    <div class="map_details" v-for="data in info" :key="data.id">

        <div class="title">
            <h4 v-if="data.Target == 'Soul'">{{ data.Target }} #{{ data.Soul }}</h4>
            <h4 v-if="data.Target == 'Event'">{{ data.Name }}</h4>
        </div>
        
        <hr />
        <p class="mark_completion"><span class="checkbox"></span>Mark as Completed</p>
        <hr />





        <!-- Table Display -->

        <div class="event_tablet" v-if="data.Type == 'Tablet'">
            <p>Unlocked From:</p>
            <p class="sub">{{ data.Unlock }}</p>
        </div>

        <div class="event_tablet_p" v-if="data.Type == 'Tablet_p'">
            <p>Souls in area:</p>
            <ul v-for="data in info" :key="data.id">
                <li>Total Souls: </li>
                <li>Total Soul Events: </li>
            </ul>
        </div>




        <div class="town" v-if="data.Type == 'Town'">
            <p>Unlock Requirement:</p>
            <p class="sub">{{ data.Unlock }}</p>
        </div>

        <div class="soul_rewards" v-if="data.Target == 'Soul'">
            <p>Rewards:</p>
            <p class="sub">{{ data.Type1 }} - {{ data.Treasure1 }} x{{ data.Qty1 }}</p>
            <p class="sub">{{ data.Type2 }} - {{ data.Treasure2 }} x{{ data.Qty2 }}</p>
            <p class="sub" v-if="data.Treasure3">{{ data.Type3 }} - {{ data.Treasure3 }} x{{ data.Qty3 }}</p>
        </div>

        <div class="dungeon" v-if="data.Type == 'Dungeon'">
            <p>Open Dungeon Map</p>
        </div>

        








        <div class="te_action" v-if="data.TE_requirement">
            <p>True End Action:</p>
            <p class="sub">{{ data.TE_requirement }}</p>
        </div>

        <div class="event_battles" v-if="data.Battle1">
            <div>
                <div class="event_battles__forced">
                    <p>Battle 1 Characters:</p>
                    <p class="sub">{{ data.Battle1_char }}</p>
                </div>
                <img :src="`src/assets/battle/${data.Battle1}`" alt="Battle1" />
            </div>
            <div v-if="data.Battle2">
                <div class="event_battles__forced">
                    <p>Battle 2 Characters:</p>
                    <p class="sub">{{ data.Battle2_char }}</p>
                </div>
                <img :src="`src/assets/battle/${data.Battle2}`" alt="Battle1" />
            </div>
        </div>

        <div class="event_reward" v-if="data.Reward">
            <p>Reward:</p>
            <p class="sub">{{ data.Reward }}</p>
        </div>

        <div class="event_recruit" v-if="data.Recruit">
            <p>Character Recruit:</p>
            <p class="sub">{{ data.Recruit }}</p>
        </div>

        <div class="te_next-destination" v-if="data.TE_path && data.Type != 'Town' && data.Type != 'Tablet'">
            <p>Next Destination:</p>
            <p class="sub">{{ data.TE_path }}</p>
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






