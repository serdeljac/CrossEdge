<!-- eslint-disable prettier/prettier -->
<template>
    <div class="map_details">
        <input type='button' @click='allRecords()' value='Select All users'>
        {{ info }}
        <br />
        {{ posts }}
    </div>
</template>

<script>

    import axios from 'axios';


    export default {
        name: "Map_Details",
        data() {
            return {
                allData: undefined,
                posts: null
            }
        },
        methods: {
            allRecords() {
                axios.get('stjepane_crossedge.json').then(response => { this.posts = response.data[2].data })
            }
        },
        props: [
            'info'
        ],

    }
</script>






