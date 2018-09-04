<template>
  <v-container fluid grid-list-lg>
    <v-layout wrap>
      <v-flex 
        v-for="item in displayResults" 
        :key="item.miapi_id"
        xs4
        d-flex
      >
        <v-card outline>
          <v-card-title primary-title> {{item.title}} </v-card-title>
          <v-responsive>
            <v-img v-if="item.imgAvailable" :src="item.imgUrl" height="200" contain></v-img>
            <audio v-for="audioStop in item.audioStops" :key="audioStop._id" controls>
              <source v-if="audioStop.link" :src="audioStop.link">
            </audio>
          </v-responsive>
          <v-card-actions style="flex-grow: 1;">
            <v-spacer></v-spacer>
            <v-btn 
              flat outline 
              @click="saveArt({miapi_id: item.miapi_id})"
            >Save</v-btn>
            <v-btn 
              v-if="resultsDeletable" 
              flat outline 
              color="red"
              @click="deleteArt({artId: item.id})"
            >Delete</v-btn>
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
    resultsDeletable: {
      type: Boolean,
      default: false,
    },
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
          imgAvailable: item.miaResults.imgAvailable,
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