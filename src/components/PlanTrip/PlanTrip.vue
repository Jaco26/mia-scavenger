<template>
  <div id="plan_trip">
      <h1>Plan Your Trip!</h1>
      <h2>Featured Art</h2>
      <div id="feature-art" >
          <div v-for="art in sampleArtwork" class="art-piece" >
              <h3>This is artwork</h3>
              <p>{{art.title}}</p>
              <p>Artist: {{art.artist}}</p>
              <p>Year Completed: {{art.year}}</p>
          </div>
      </div>
  </div>
</template>

<script>
export default {
  name: 'PlanTrip',
  data () {
    return {
        sampleArtwork: [{
            title: 'test 1',
            artist: 'testing 1',
            year: '1987'
        },
        {
            title: 'test 2',
            artist: 'testing 2',
            year: '1990'
        },
        {
            title: 'test 3',
            artist: 'testing 3',
            year: '2007'
        }],
    }
  },
  methods: {}
}
</script>

<style scoped>
    #feature-art{
        overflow-x: scroll;
    }

    .art-piece {
        width: 250px;
        border: solid 1px black;
        display: inline-block;
    }

</style>