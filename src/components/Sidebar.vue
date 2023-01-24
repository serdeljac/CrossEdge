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
                    <h2 class="title">
                        <router-link :to="{ name: 'home', }">
                        CROSS EDGE
                        </router-link>
                    </h2>
                </div>

                <hr />

                <!-- Table of Contents -->
                <div class="tablecontents">
                    <h3>TABLE OF CONTENTS</h3>

                    <!-- <div class="tbc-set">
                        <p>GUIDE</p>
                        <ul>
                            <li><router-link :to="{ name: 'playthrough', }">Playthrough TIPS</router-link></li>
                            <li>Inventory List</li>
                            <li>TOOL: Team Setup</li>
                            <li>TOOL: Synthesis Guide</li>
                            <li><router-link :to="{ name: 'titles', }">Titles</router-link></li>
                            <li><router-link :to="{ name: 'personalteam', }">Personal Team Setup</router-link></li>
                        </ul>
                    </div> -->

                    <div class="tbc-set">
                        <p>WORLD MAPS</p>
                        <ul>
                            <li @click="chooseMap('zeine-1')">Zeine - Area 1</li>
                            <li @click="chooseMap('zeine-2')">Zeine - Area 2</li>
                            <li @click="chooseMap('zeine-3')">Zeine - Area 3</li>
                        </ul>
                    </div>

                    <!-- <div class="tbc-set">
                        <p>WORLD MAPS</p>
                        <ul>
                            <li><router-link :to="{ name: 'zeine 1', }">Zeine - Area 1</router-link></li>
                            <li><router-link :to="{ name: 'zeine 2', }">Zeine - Area 2</router-link></li>
                            <li><router-link :to="{ name: 'zeine 3', }">Zeine - Area 3</router-link></li>
                            <li><router-link :to="{ name: 'wilkiet 1',}">Wilkiet - Area 1</router-link></li>
                            <li><router-link :to="{ name: 'wilkiet 2',}">Wilkiet - Area 2</router-link></li>
                            <li><router-link :to="{ name: 'wilkiet 3',}">Wilkiet - Area 3</router-link></li>
                            <li><router-link :to="{ name: 'brosste 1',}">Brosste - Area 1</router-link></li>
                            <li><router-link :to="{ name: 'brosste 2',}">Brosste - Area 2</router-link></li>
                            <li><router-link :to="{ name: 'brosste 3',}">Brosste - Area 3</router-link></li>
                            <li><router-link :to="{ name: 'pragma 1',}">Pragma - Area 1</router-link></li>
                            <li><router-link :to="{ name: 'pragma 2',}">Pragma - Area 2</router-link></li>
                            <li><router-link :to="{ name: 'pragma 3',}">Pragma - Area 3</router-link></li>
                            <li><router-link :to="{ name: 'ida 1',}">Ida - Area 1</router-link></li>
                            <li><router-link :to="{ name: 'ida 1te',}">Ida - Area 1 (True End)</router-link></li>
                            <li><router-link :to="{ name: 'ida 2te',}">Ida - Area 2 (True End)</router-link></li>
                            <li>Ida - Area 3 (True End)</li>
                        </ul>
                    </div> -->

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
        mounted() {
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
            },
            expandMenu() {
                this.mobileExpand = !this.mobileExpand;
                this.sidebarMode = !this.sidebarMode;
            },
            chooseMap(map) {
                this.$router.push({ name: map, params: {selectedMap: map} });

            }
        }
    }
</script>