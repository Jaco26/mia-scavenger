<template>
  <div>
    <b-row v-for="item in displayResults" :key="item.id">
      <b-col>
        <b-card>
          <b-media>
            <b-img slot="aside" :src="item.imgUrl" alt="placeholder" />
            <b-media-body>
              <h5> {{item.title}} </h5>
              <p> {{item.description}} </p>
              <div v-for="stop in item.audioStops" :key="stop._id" >
                <audio controls>
                  <source v-if="stop.link" :src="stop.link">
                </audio>
              </div>
              <b-button @click="saveArt({miapi_id: item.miapi_id})"> Save Art </b-button>
              <b-button @click="deleteArt({artId: item.id})"> Delete </b-button>
            </b-media-body>
          </b-media>
        </b-card>
      </b-col>
    </b-row>
  </div>
</template>

<script>
import { mapActions } from 'vuex';
export default {
  props: {
    results: Array,
  },
  computed: {
    displayResults() {
      if (this.results) {
        return this.results.map(item => ({
          id: item.dbResults ? item.dbResults.id: null,
          miapi_id: item.miaResults.id,
          title: item.miaResults.title,
          description: item.miaResults.description,
          room: item.miaResults.room,
          imgUrl: item.miaResults.imgUrl,
          audioStops: item.miaResults.audioStops
        }));
      }
    }
  },
  methods: {
    ...mapActions('art', [
      'saveArt',
      'deleteArt'
    ]),
  }
  
}
</script>