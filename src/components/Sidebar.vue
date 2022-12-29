<template>
    <aside class="sidebar">

        <div class="header">
            <div class="logo">
                <img src="../assets/sitelogo.svg" />
            </div>
            <div class="site">F2G</div>
        </div>

        <div class="subheader">
            <h2 class="title">
                <router-link :to="{ name: 'home', }">
                CROSS EDGE
                </router-link>
            </h2>
        </div>

        <hr />

        <div class="tablecontents">
            <h3>TABLE OF CONTENTS</h3>

            <div class="tbc-set">
                <p>GUIDE</p>
                <ul>
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
                    <li>Zeine - Area 3</li>
                    <li><router-link :to="{ name: 'wilkiet 1',}">Wilkiet - Area 1</router-link></li>
                    <li><router-link :to="{ name: 'wilkiet 2',}">Wilkiet - Area 2</router-link></li>
                    <li>Wilkiet - Area 3</li>
                    <li><router-link :to="{ name: 'brosste 1',}">Brosste - Area 1</router-link></li>
                    <li>Brosste - Area 2</li>
                    <li>Brosste - Area 3</li>
                    <li>Pragma - Area 1</li>
                    <li>Pragma - Area 2</li>
                    <li>Pragma - Area 3</li>
                    <li>Ida - Area 1</li>
                    <li>Ida - Area 2</li>
                    <li>Ida - Area 3</li>
                </ul>
            </div>

            <div class="tbc-set-3">
                <hr>
                <p>Leave a comment</p>
                <p>Logout</p>
            </div>
        </div>

    </aside>
</template>

<script>
    export default {
        name: "Sidebar"
    }
</script>