<template>
    <ul>
        <li class="titles_list-num"></li>
        <li class="titles_list-name">Name</li>
        <li class="titles_list-requir">Description</li>
        <li class="titles_list-reward">Reward #1</li>
        <li class="titles_list-reward">Reward #2</li>
        <li class="titles_list-reward">Reward #3</li>
        <li class="titles_list-gold">Gold</li>
        <li class="titles_list-ep">EP</li>
        <li class="titles_list-tp">TP</li>
    </ul>
    <ul v-for="arr in data" :key="arr.id">
        <li class="titles_list-num">#{{ arr.ID }}</li>
        <li class="titles_list-name">{{ arr.name }}</li>
        <li class="titles_list-requir">{{ arr.requirement }}</li>
        <li class="titles_list-reward">{{ arr.reward1 }}</li>
        <li class="titles_list-reward">{{ arr.reward2 }}</li>
        <li class="titles_list-reward">{{ arr.reward3 }}</li>
        <li class="titles_list-gold">{{ arr.gold }}</li>
        <li class="titles_list-ep">{{ arr.ep }}</li>
        <li class="titles_list-tp">{{ arr.tp }}</li>
    </ul>
</template>

<script>
    export default {
        name: 'Titles_list',
        props: {
            'data' : {type: Object}
        }
    }
</script>

<style lang="scss" scoped>

</style>