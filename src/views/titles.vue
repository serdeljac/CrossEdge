<template>
    <div class="titles" >
        <subHeader :headerName="'Titles'" :backlink="'home'"/>
        <div class="titles_content">

            <div class="titles_group defeat_enemies">
                <div class="titles_sub-header">
                    <h3>#1 - #8 (Defeat # of enemies)</h3>
                    <p>Note 1: This is accumulative through all playthroughs</p>
                    <p>Note 2: No need to farm; should aquire while achieveing other titles</p>
                </div>
                <div class="titles_list">
                    <titles_header />
                    <titles_list v-for="arr in accum_kills" :key="arr.id" :data="arr"/>
                </div>
            </div>

            <div class="titles_group accum_battles">
                <div class="titles_sub-header">
                    <h3>#9 - #15 (Win # of battles)</h3>
                    <p>Note 1: This is accumulative through all playthroughs</p>
                    <p>Note 2: No need to farm; should aquire while achieveing other titles</p>
                </div>
                <div class="titles_list">
                    <titles_header />
                    <titles_list v-for="arr in accum_battles" :key="arr.id" :data="arr" />
                </div>
            </div>

            <div class="titles_group accum_dmg">
                <div class="titles_sub-header">
                    <h3>#16 - #22 (Deal # of damage)</h3>
                    <p>Note 1: Most likely will be achieved during fights in 5-2.</p>
                </div>
                <div class="titles_list">
                    <titles_header />
                    <titles_list v-for="arr in accum_dmg" :key="arr.id" :data="arr" />
                </div>
            </div>

            <div class="titles_group accum_hits">
                <div class="titles_sub-header">
                    <h3>#23 - #28 (Achieve # of combo hits)</h3>
                    <p>Note 1: Most likely will be achieved during fights in 5-2.</p>
                </div>
                <div class="titles_list">
                    <titles_header />
                    <titles_list v-for="arr in accum_hits" :key="arr.id" :data="arr" />
                </div>
            </div>

            <div class="titles_group aquire_arcane">
                <div class="titles_sub-header">
                    <h3>#29 - #30 (Aquire all combo moves)</h3>
                    <p>Note 1: This will be aquired after true end completion, and titles #31-#92.</p>
                    <p>Note 2: Use must aquire all chracters and gain rewards from titles #1-#28.</p>
                </div>
                <div class="titles_list">
                    <titles_header />
                    <titles_list v-for="arr in aquire_arcane" :key="arr.id" :data="arr" />
                </div>
            </div>

            <div class="titles_group te_defeat">
                <div class="titles_sub-header">
                    <h3>#31 - #50 (Defeat enemies in true end mode)</h3>
                    <p>Note 1: Titles will unlock only after achieving true end requirements (After event #116).</p>
                </div>
                <div class="titles_list">
                    <titles_header />
                    <titles_list v-for="arr in te_defeat" :key="arr.id" :data="arr" />
                </div>
            </div>

            <div class="titles_group defeat">
                <div class="titles_sub-header">
                    <h3>#51 - #80 (Defeat enemies # of times)</h3>
                    <p>Note 1: Titles #72 - #80 will unlock only after achieving true end requirements (After event #116).</p>
                </div>
                <div class="titles_list">
                    <titles_header />
                    <titles_list v-for="arr in defeat" :key="arr.id" :data="arr" />
                </div>
            </div>

            <div class="titles_group enemy_items">
                <div class="titles_sub-header">
                    <h3>#81 - #92 (Aquire items from enemy drops # of times)</h3>
                    <p>Note 1: Must have items and quantities in inventory at the same time per title.</p>
                    <p>Note 2: Yorks EX ability 'Faceoff' increases rare drops. Also equp 'Drop Rate Up' on all characters</p>
                </div>
                <div class="titles_list">
                    <titles_header />
                    <titles_list v-for="arr in enemy_items" :key="arr.id" :data="arr" />
                </div>
            </div>

            <div class="titles_group heal_items">
                <div class="titles_sub-header">
                    <h3>#93 - #98 (Aquire # of healing items)</h3>
                    <p>Note 1: Must have total quantity of items per title.</p>
                </div>
                <div class="titles_list">
                    <titles_header />
                    <titles_list v-for="arr in heal_items" :key="arr.id" :data="arr" />
                </div>
            </div>

            <div class="titles_group full_collect">
                <div class="titles_sub-header">
                    <h3>#99 - #102 (Aquire all items in set categories)</h3>
                    <p>Note 1: Only need to be in inventory once to be recorded.</p>
                </div>
                <div class="titles_list">
                    <titles_header />
                    <titles_list v-for="arr in full_collect" :key="arr.id" :data="arr" />
                </div>
            </div>

            <div class="titles_group soul_search">
                <div class="titles_sub-header">
                    <h3>#103 - #107 (Find # of souls)</h3>
                    <p>Note 1: Easier on second playthrough after reaching sould search lvl 10.</p>
                    <p>Note 2: Progression will reset on every playthrough.</p>
                    <p>Note 2: Some souls can only be collected in post-game (true end).</p>
                </div>
                <div class="titles_list">
                    <titles_header />
                    <titles_list v-for="arr in soul_search" :key="arr.id" :data="arr" />
                </div>
            </div>

            <div class="titles_group accum_gold">
                <div class="titles_sub-header">
                    <h3>#108 - #112 (Posses # amount of gold at once)</h3>
                    <p>Note 1: This should be easily aquired after multiple playthroughs and/or purchasing DLC.</p>
                </div>
                <div class="titles_list">
                    <titles_header />
                    <titles_list v-for="arr in accum_gold" :key="arr.id" :data="arr" />
                </div>
            </div>

            <div class="titles_group accum_synth">
                <div class="titles_sub-header">
                    <h3>#113 - #117 (Synthesise # of times)</h3>
                    <p>Note 1: This will be aquired while achieveing titles #99 - #102.</p>
                </div>
                <div class="titles_list">
                    <titles_header />
                    <titles_list v-for="arr in accum_synth" :key="arr.id" :data="arr" />
                </div>
            </div>

            <div class="titles_group accum_upgrades">
                <div class="titles_sub-header">
                    <h3>#118 - #122 (Upgrade # of times)</h3>
                    <p>Note 1: This will be aquired while achieveing titles #99 - #102.</p>
                </div>
                <div class="titles_list">
                    <titles_header />
                    <titles_list v-for="arr in accum_upgrades" :key="arr.id" :data="arr" />
                </div>
            </div>

            <div class="titles_group final">
                <div class="titles_sub-header">
                    <h3>#123 (Complete everything)</h3>
                    <p>Note 1: Most likely the last trophy/achievement to aquire.</p>
                </div>
                <div class="titles_list">
                    <titles_header />
                    <titles_list v-for="arr in final" :key="arr.id" :data="arr" />
                </div>
            </div>

            <hr>

            <div class="titles_group total">
                <div class="titles_sub-header">
                    <h3>Total Sum Rewards</h3>
                </div>
                <div class="titles-rewards">
                    <p>Total Gold Accumulated: 33,265,000</p>
                    <p>Total EP Accumulated: 1160</p>
                    <p>Total Shared TP Accumulated: 10525</p>
                </div>
            </div>
          
        </div>
    </div>
</template>

<script lang="ts">
    import subHeader from '@/components/main-subheader.vue';
    import titles_header from '@/components/parts/appendtitle-header.vue'
    import titles_list from '@/components/parts/appendtitle.vue'
    import json_titles from '@/assets/data/titles.json';

    export default {
        name: 'Titles List',
    components: { subHeader, titles_header, titles_list },
        data() {
            return {
                accum_kills: [],
                accum_battles: [],
                accum_dmg: [],
                accum_hits: [],
                aquire_arcane: [],
                te_defeat: [],
                defeat: [],
                enemy_items: [],
                heal_items: [],
                full_collect: [],
                soul_search: [],
                accum_gold: [],
                accum_synth: [],
                accum_upgrades: [],
                final: [],
            }
        },
    beforeMount() {
        this.$emit('mapOverview', false);
    },
        created() {
            const arr = json_titles[2].data;
            this.accum_kills = arr.filter(function (e) { return e.category == 'accum_kills' });
            this.accum_battles = arr.filter(function (e) { return e.category == 'accum_battles' });
            this.accum_dmg = arr.filter(function (e) { return e.category == 'accum_dmg' });
            this.accum_hits = arr.filter(function (e) { return e.category == 'accum_hits' });
            this.aquire_arcane = arr.filter(function (e) { return e.category == 'aquire_arcane' });
            this.te_defeat = arr.filter(function (e) { return e.category == 'te_defeat' });
            this.defeat = arr.filter(function (e) { return e.category == 'defeat' });
            this.enemy_items = arr.filter(function (e) { return e.category == 'enemy_items' });
            this.heal_items = arr.filter(function (e) { return e.category == 'heal_items' });
            this.full_collect = arr.filter(function (e) { return e.category == 'full_collect' });
            this.soul_search = arr.filter(function (e) { return e.category == 'soul_search' });
            this.accum_gold = arr.filter(function (e) { return e.category == 'accum_gold' });
            this.accum_synth = arr.filter(function (e) { return e.category == 'accum_synth' });
            this.accum_upgrades = arr.filter(function (e) { return e.category == 'accum_upgrades' });
            this.final = arr.filter(function (e) { return e.category == 'final' });
        }
    }
</script>