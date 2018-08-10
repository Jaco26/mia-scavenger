<template>
    <div>
        <h1>Art on Display</h1>
        <div class="art-display-div" v-for="art in art">
            <h3>{{art.name}}</h3>
            <p>{{art.artist}}</p>
            <p>{{art.display}}</p>
        </div>
    </div>
</template>

<script>
    export default {
        name: 'displayed-art',
        data() {
            return{
                art: [{
                    name: 'Art piece 1',
                    artist: 'John Doe',
                    display: 'room 305'
                },{
                    name: 'Art piece 2',
                    artist: 'Tammy Duckworth',
                    display: 'room 432'
                },{
                    name: 'Art piece 3',
                    artist: 'Amy Klobuchar',
                    display: 'room 199'
                }],
            }
        },
        methods: {
            getArt: function() {

            }
        }
    }
</script>

<style scoped>
    .art-display-div{
        width: 20%;
        height: 200px;
        display: inline-block;
    }

</style>