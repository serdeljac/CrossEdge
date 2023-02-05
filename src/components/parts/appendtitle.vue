<template>
    <p class="titles_list-num">#{{ data.ID }}</p>
    <p class="titles_list-name">{{ data.name }}</p>

    <p class="titles_list-requir hasLink" v-if="data.category == 'te_defeat'">
        <span @click="toPage(data.req2)">{{ data.requirement }}</span>
    </p>

    <p class="titles_list-requir hasLink" v-if="data.category == 'defeat'">
        <span @click="getMonsterLink(data.requirement)">{{ data.requirement }}</span>
        <span v-if="data.req2" @click="getMonsterLink(data.req2)">, {{ data.req2 }}</span>
        <span v-if="data.req3" @click="getMonsterLink(data.req3)">, {{ data.req3 }}</span>
        <span v-if="data.req4" @click="getMonsterLink(data.req4)">, {{ data.req4 }}</span>
        <span v-if="data.req5" @click="getMonsterLink(data.req5)">, {{ data.req5 }}</span>
    </p>

    <p class="titles_list-requir hasLink" v-if="data.category == 'enemy_items'">
        <span @click="getItemLink(data.requirement)">{{ data.requirement }}</span>
        <span v-if="data.req2" @click="getItemLink(data.req2)">, {{ data.req2 }}</span>
        <span v-if="data.req3" @click="getItemLink(data.req3)">, {{ data.req3 }}</span>
        <span v-if="data.req4" @click="getItemLink(data.req4)">, {{ data.req4 }}</span>
        <span v-if="data.req5" @click="getItemLink(data.req5)">, {{ data.req5 }}</span>
    </p>

    <p class="titles_list-requir" v-if="!currentCategory">
        {{ data.requirement }}
    </p>
    
    <p class="titles_list-reward">{{ data.reward1 }}</p>
    <p class="titles_list-reward">{{ data.reward2 }}</p>
    <p class="titles_list-reward">{{ data.reward3 }}</p>
    <p class="titles_list-gold">{{ data.gold }}</p>
    <p class="titles_list-ep">{{ data.ep }}</p>
    <p class="titles_list-tp">{{ data.tp }}</p>
</template>

<script lang="ts">
    import bestiaryRaw from '@/assets/data/bestiary.json';

    export default {
        name: 'TitlesList',
        props: {
            'data' : {type: Object}
        },
        data() {
            return {
                currentCategory: '',
                bestiary: bestiaryRaw[2]
            }
        },
        beforeMount() {

            if (this.data.category == 'te_defeat') {
                this.currentCategory = this.data.category;
            } else if (this.data.category == 'defeat') {
                this.currentCategory = this.data.category;
            } else if (this.data.category == 'enemy_items') {
                this.currentCategory = this.data.category;
            } 
                
        },
        methods: {
            getItemLink(item) {
                const itm = item.replace(/\sx[0-9]*/, '');
                let foundArr = false;
                switch (foundArr) {
                    case false:
                        const overkill = this.bestiary.data.filter(function (e) { return e.overkill == itm });
                        if (overkill.length == 1) {
                            this.toPage(overkill[0]['zone']);
                            break;
                        }
                        const drop1 = this.bestiary.data.filter(function (e) { return e.drop1 == itm });
                        if (drop1.length == 1) {
                            this.toPage(drop1[0]['zone'])
                            break;
                        }
                        const rare2 = this.bestiary.data.filter(function (e) { return e.rare2 == itm });
                        if (rare2.length == 1) {
                            this.toPage(rare2[0]['zone'])
                            break;
                        }
                        const rare1 = this.bestiary.data.filter(function (e) { return e.rare1 == itm });
                        if (rare1.length == 1) {
                            this.toPage(rare1[0]['zone'])
                            break;
                        }
                        const drop2 = this.bestiary.data.filter(function (e) { return e.drop2 == itm });
                        if (drop2.length == 1) {
                            this.toPage(drop2[0]['zone'])
                            break;
                        }
                    default:
                        console.log('No match in Bestiary');
                }
            },
            getMonsterLink(monster) {
                const mon = monster.replace(/\sx[0-9]*/, '');
                const linkObj = this.bestiary.data.filter(function (e) { return e.name == mon });
                const link= linkObj[0]['zone'];
                this.toPage(link);
            },
            toPage(x) {
                if (x) {
                    this.$router.push({ name: x, params: { selectedMap: x } });
                } else {
                    console.log('Cannot find a match!')
                }
            }
        },
    }
</script>