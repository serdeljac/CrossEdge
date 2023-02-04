<template>
    <p class="titles_list-num">#{{ data.ID }}</p>
    <p class="titles_list-name">{{ data.name }}</p>

    <p class="titles_list-requir" v-if="currentCategory == 'te_defeat'">
        <router-link :to="{name: linkName, params: {'selectedMap': linkName}}">
            {{ data.requirement }}
        </router-link>
    </p>

    <p class="titles_list-requir" v-if="currentCategory == 'defeat'">
        <router-link :to="{ name: getLinkName(data.requirement), params: { 'selectedMap': getLinkName(data.requirement) }}">
            {{ data.requirement }}
        </router-link>

        <router-link :to="{name: linkName, params: {'selectedMap': linkName}}" v-if="data.req2"> 
            {{ data.req2 }}
        </router-link>

        <router-link :to="{name: linkName, params: {'selectedMap': linkName}}" v-if="data.req3">
            {{ data.req3 }}
        </router-link>

        <router-link :to="{name: linkName, params: {'selectedMap': linkName}}" v-if="data.req4">
            {{ data.req4 }}
        </router-link>

        <router-link :to="{name: linkName, params: {'selectedMap': linkName}}" v-if="data.req5">
            {{ data.req5 }}
        </router-link>
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
                linkName: '',
                bestiary: bestiaryRaw[2]
            }
        },
        beforeMount() {

            if (this.data.category == 'te_defeat') {
                this.currentCategory = this.data.category;
                this.linkName = this.data.req2;

            } else if (this.data.category == 'defeat') {
                this.currentCategory = this.data.category;
            }
                
        },
        methods: {
            getLinkName(raw) {
                console.log(raw)
                return 'ziene-1';
            }
        },
    }
</script>