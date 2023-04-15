<template>
    <aside class="sidebar" :class="{ 'compact': sidebarMode}">
        <div class="container" v-if="!sidebarMode">

            <div class="wrapper-scroll">

                <!-- Sub-Title -->
                <div class="title">
                    <router-link to="/">
                        <img src="@/assets/sidebar_logo.png" alt="Cross Edge" />
                        <h4>Unofficial Guide</h4>
                    </router-link>
                </div>

                <!-- Table of Contents -->
                <div class="tablecontents">
                    <p>TABLE OF CONTENTS</p>

                    <div class="tbc-set">
                        <ul>
                            <li @click="choosePage('home')">Home</li>
                            <li @click="choosePage('mapRoom')">World Maps</li>
                            <li @click="choosePage('dunMapRoom')">Dungeon Maps</li>
                            <li @click="choosePage('playthrough')">Playthrough Tips</li>
                            <li @click="choosePage('titles')">Titles</li>
                            <li @click="choosePage('inventory')">Inventory</li>
                            <li @click="choosePage('bestiary')">Bestiary</li>
                            <li class="null">Tool: Team Build</li>
                            <li class="null">Tool: Synthesis Generator</li>
                        </ul>
                    </div>

                    <div class="tbc-set">
                        <p>WORLD MAPS</p>
                        <ul>
                            <li @click="chooseMap('zeine-1')">Zeine - Area 1</li>
                            <li @click="chooseMap('zeine-2')">Zeine - Area 2</li>
                            <li @click="chooseMap('zeine-3')">Zeine - Area 3</li>
                            <li @click="chooseMap('wilkiet-1')">Wilkiet - Area 1</li>
                            <li @click="chooseMap('wilkiet-2')">Wilkiet - Area 2</li>
                            <li @click="chooseMap('wilkiet-3')">Wilkiet - Area 3</li>
                            <li @click="chooseMap('brosste-1')">Brosste - Area 1</li>
                            <li @click="chooseMap('brosste-2')">Brosste - Area 2</li>
                            <li @click="chooseMap('brosste-3')">Brosste - Area 3</li>
                            <li @click="chooseMap('pragma-1')">Pragma - Area 1</li>
                            <li @click="chooseMap('pragma-2')">Pragma - Area 2</li>
                            <li @click="chooseMap('pragma-3')">Pragma - Area 3</li>
                            <li @click="chooseMap('ida-1')">Ida - Area 1</li>
                            <li @click="chooseMap('ida-1te')">Ida - Area 1 (True End)</li>
                            <li @click="chooseMap('ida-2')">Ida - Area 2</li>
                            <li @click="chooseMap('ida-3')">Ida - Area 3</li>
                        </ul>
                    </div>

                    <div class="tbc-set">
                        <p>DUNGEON MAPS</p>
                        <ul>
                            <li @click="chooseDungeonMap('Renuit')">Renuit</li>
                            <li @click="chooseDungeonMap('Reveldead')">Reveldead</li>
                            <li @click="chooseDungeonMap('Midbase')">Midbase</li>
                            <li @click="chooseDungeonMap('Hellzeit')">Hellzeit</li>
                            <li @click="chooseDungeonMap('Laurelite')">Laurelite</li>
                            <li @click="chooseDungeonMap('Charlephene')">Charlephene</li>
                            <li @click="chooseDungeonMap('Arcadia')">Arcadia</li>
                            <li @click="chooseDungeonMap('Bellkant')">Bell Kant (Bel Canto)</li>
                            <li @click="chooseDungeonMap('Fettroad')">Fett Road</li>
                            <li @click="chooseDungeonMap('Sazaruka')">Sazaruka (Ripquake)</li>
                            <li @click="chooseDungeonMap('Ripquake')">Ripquake (En Delite)</li>
                            <li @click="chooseDungeonMap('Endelite')">En Delite (Sazaruka)</li>
                            <li @click="chooseDungeonMap('Eacanal')">Ea Canal - Zeine 1</li>
                            <li @click="chooseDungeonMap('Nachtlark')">Nachtlark - Wilkiet 2</li>
                            <li @click="chooseDungeonMap('Fiestabarra')">Fiesta Barra - Brosste 2</li>
                            <li @click="chooseDungeonMap('Schinebaal')">Schine Baal - Pragma 2</li>
                            <li @click="chooseDungeonMap('Eldehel')">Eldehel - Ida 1</li>
                        </ul>
                    </div>

                </div>
            </div>
        </div>

        <button 
            class="btn-sml"
            v-if="sidebarMode || mobileExpand"
            :class="{ 'opened': mobileExpand }"
            @click="expandMenu()">➜
        </button>

        <div class="container-mobile" v-if="sidebarMode">
        </div>

    </aside>

    <div class="overlay" v-if="!sidebarMode && mobileExpand" @click="expandMenu()"></div>
</template>

<script lang="ts">
    export default {
        name: "Sidebar",
        data() {
            return {
                sidebarMode: undefined,
                mobileExpand: false,
            }
        },
        emits: ['detectSize'],
        beforeMount() {
            window.addEventListener("resize", this.sidebarForce);
            this.sidebarForce();
        },
        methods: {
            sidebarForce() {
                let winW = window.innerWidth;
                this.mobileExpand = false;

                if (winW <= 1800) {
                    this.sidebarMode = true;
                } else {
                    this.sidebarMode = false;
                    
                }
                this.$emit('detectSize', this.sidebarMode);
            },
            expandMenu() {
                this.mobileExpand = !this.mobileExpand;
                this.sidebarMode = !this.sidebarMode;
            },
            choosePage(map) {
                this.$router.push({ name: map });
            },
            chooseMap(map) {
                this.$router.push({ name: map, params: {selectedMap: map} });
            }, 
            chooseDungeonMap(map) {
                this.$router.push({ name: 'dungeonDisplay', params: { dungeon: map } });
            }
        }
    }
</script>