<template>
    <header class="main_header">
        <img src="../assets/crossedge_logo.jpg" alt="Cross Edge" />
        <div class="platform">
            <p>PS3/XBOX360</p>
        </div>
        <div>
            <h1>Cross Edge Unofficial Guide <span><router-link :to="{name: 'version'}">v1.1.1</router-link></span></h1>
        </div>
    </header>
</template>

<script lang="ts">
    export default {
        name: "mainHeader"
    }
</script>