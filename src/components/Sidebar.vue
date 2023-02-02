<template>
    <aside class="sidebar" :class="{ 'compact': sidebarMode}">
        <div class="container" v-if="!sidebarMode">

            <!-- Title -->
            <div class="header">
                <div class="header__title">
                    <img class="header__logo" src="../assets/sitelogo.svg" />
                    <div class="header__site">F2G</div>
                </div>
            </div>

            <div class="wrapper-scroll">

                <!-- Sub-Title -->
                <div class="subheader">
                    <h2 class="title" @click="chooseMap('home')">CROSS EDGE</h2>
                </div>

                <hr />

                <!-- Table of Contents -->
                <div class="tablecontents">
                    <h3>TABLE OF CONTENTS</h3>

                    <div class="tbc-set">
                        <ul>
                            <li @click="choosePage('home')">⌂ Home</li>
                        </ul>
                    </div>

                    <div class="tbc-set">
                        <p>GUIDE</p>
                        <ul>
                            <li @click="choosePage('mapRoom')">World Maps</li>
                            <li @click="choosePage('dunMapRoom')">Dungeon Maps</li>
                            <li @click="choosePage('playthrough')">Playthrough Tips</li>
                            <li @click="choosePage('titles')">Titles</li>
                            <li @click="choosePage('')">Inventory List</li>
                            <li @click="choosePage('')">Tool: Team Build</li>
                            <li @click="choosePage('')">Tool: Synthesis Guide</li>
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
                        </ul>
                    </div>

                    <!-- <div class="tbc-set">
                        <p>DUNGEON MAPS</p>
                        <ul>
                            <li>Renuit</li>
                            <li>Reveldead</li>
                            <li>Midbase</li>
                            <li>Hellzeit</li>
                            <li>Laurelite</li>
                            <li>Charlephene</li>
                            <li>Arcadia</li>
                            <li>Bell Kant (Bel Canto)</li>
                            <li>Fett Road</li>
                            <li>Sazaruka (Ripquake)</li>
                            <li>Ripquake (En Delite)</li>
                            <li>En Delite (Sazaruka)</li>
                            <li>Ea Canal - Zeine 1</li>
                            <li>Nachtlark - Wilkiet 2</li>
                            <li>Fiesta Barra - Brosste 2</li>
                            <li>Schine Baal - Pragma 2</li>
                            <li>Eldehel - Ida 1</li>
                        </ul>
                    </div> -->

                    <!-- <div class="tbc-set-3">
                        <hr>
                        <p>Leave a comment</p>
                        <p>Logout</p>
                    </div> -->
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
            <p>HOME</p>
            <p>DUNGEON</p>
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
            }
        }
    }
</script>