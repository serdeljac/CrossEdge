<template>
        <header class="sub-header">
            <h2>{{ headerName }}</h2>
            <p><router-link :to="{ name: 'home', }">↩ Go Back</router-link></p>
        </header>
</template>

<script lang="ts">
    export default {
        name: 'subHeader',
        props: ['headerName'],
    }
</script>