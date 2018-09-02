<template>
  <v-container fluid grid-list-md>
    <v-layout wrap>
      <v-flex v-for="item in displayResults" :key="item.miapi_id">
        <v-card>
          <v-card-title primary-title> {{item.title}} </v-card-title>
          <v-responsive>
            <v-img :src="item.imgUrl" height="200"></v-img>
            <audio v-for="audioStop in item.audioStops" :key="audioStop._id" controls>
              <source v-if="audioStop.link" :src="audioStop.link">
            </audio>
          </v-responsive>
          <v-card-actions>
            <v-btn flat outline>Save</v-btn>
            <v-btn flat outline color="red">Delete</v-btn>
          </v-card-actions>
        </v-card>
      </v-flex>
    </v-layout>
  </v-container>
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