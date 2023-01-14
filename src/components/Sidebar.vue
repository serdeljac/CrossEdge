<template>
    <aside class="sidebar" v-bind:class="{ 'compact': mobileMode && !menuExpand }">

        

        <button 
            class="btn-sml"
            v-if="mobileMode"
            v-bind:class="{'opened': menuExpand}"
            @click="expandMenu()">➜</button>

        <div class="container" v-if="!mobileMode || menuExpand">
            

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

                    <div class="tbc-set">
                        <p>GUIDE</p>
                        <ul>
                            <li>TIPS *Must Read*</li> 
                            <li>TRUE ENDING GUIDE</li>
                            <li>Synthesis Tombs</li>
                            <li>Arcane Tombs</li>
                            <li>Secret Albums</li>
                            <li>Active Skills</li>
                            <li>Costumes</li>
                            <li>Titles</li>
                            <li>TOOL: Checklist</li>
                        </ul>
                    </div>

                    <div class="tbc-set">
                        <p>MAPS</p>
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
                            <li>Pragma - Area 2</li>
                            <li>Pragma - Area 3</li>
                            <li>Ida - Area 1</li>
                            <li>Ida - Area 2</li>
                        </ul>
                    </div>

                    <div class="tbc-set-3">
                        <hr>
                        <p>Leave a comment</p>
                        <p>Logout</p>
                    </div>
                </div>
            </div>
        </div>

        <div class="container-mobile" v-if="mobileMode && !menuExpand">
            <p>HOME</p>
            <p>DUNGEON</p>
        </div>


    </aside>
    <div class="overlay" v-if="menuExpand" @click="expandMenu()"></div>
</template>

<script>
    export default {
        name: "Sidebar",
        data() {
            return {
                mobileMode: undefined,
                menuExpand: false
            }
        },
        mounted() {
            
            window.addEventListener("resize", this.sidebarForce);
            this.sidebarForce();
        },
        methods: {
            sidebarForce() {
                let winW = window.innerWidth;

                if (winW <= 1800) {
                    this.mobileMode = true;
                    
                }else {
                    this.mobileMode = false;
                    this.menuExpand = false;
                }
            },
            expandMenu() {
                this.menuExpand = !this.menuExpand;
            }
        }
    }
</script>