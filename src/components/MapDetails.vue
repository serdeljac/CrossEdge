<!-- eslint-disable prettier/prettier -->
<template>
    <div class="map_details">
        <input type='button' @click='allRecords()' value='Select All users'>
        {{ info }}
        <br />
        {{ database }}
    </div>
</template>

<script>
    // import axios from 'axios';

    export default {
        name: "Map_Details",
        data() {
            return {
                allData: undefined,
                posts: null,
                database: null
            }
        },
        methods: {
            allRecords() {
                // axios.get('../assets/stjepane_crossedge').then(response => { this.posts = response.data }).catch((err) => console.log(err));
            }
        },
        props: [
            'info'
        ],
    }
</script>






