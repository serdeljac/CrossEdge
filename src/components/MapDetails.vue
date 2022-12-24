<template>
    <div class="map_details">
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
    mounted: function () {
        axios.get('https://jsonplaceholder.typicode.com/posts')
            .then(response => this.posts = response)
            .catch(error => this.posts = [{title: "error"}]);
    },
        props: [
            'info'
        ],

    }
</script>






