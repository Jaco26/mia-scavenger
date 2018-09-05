<template>
  <div>
    <v-form  class="mx-4"  v-model="valid">
        <v-text-field
          :value="playlist_name"
          @input="setPlaylistName"
          label="Playlist Name">
        </v-text-field>
        <v-flex xs12 sm6 d-flex>
        <v-select
          :items="$store.state.art.savedArt"
          v-model='selectedID'
          item-text="miaResults.title"
          item-value="miaResults.id"
          label="Choose Cover Art"
          @change="onChange()"
        ></v-select>
      </v-flex>
    </v-form>

    <v-btn @click="setUserPlaylist()">Add Playlist</v-btn>

    <h2>Current Playlists</h2>
   <v-container fluid grid-list-lg>
    <v-layout wrap>
      <v-flex 
        v-for="item in $store.state.playlists.playlists.data" 
        :key="item.id"
        xs4
        d-flex
      >
        <v-card outline>
          <v-card-title primary-title> {{item.playlist_name}} </v-card-title>
          <v-responsive>
            <v-img :src="getImageUrl(item.cover_art_id)" height="200" contain></v-img>
          </v-responsive>
          <v-card-actions style="flex-grow: 1;">
            <v-spacer></v-spacer>
            <v-btn>View</v-btn>
            <v-btn @click="deletePlaylist({id: item.id})">Delete</v-btn>
          </v-card-actions>
        </v-card>
      </v-flex>
    </v-layout>
  </v-container>
  </div>
</template>

<script>
import { mapActions, mapState } from "vuex";
export default {
  data() {
    return {
      selectedID: '',
    };
  },

  computed: {
    ...mapState({
      playlist_name: state => state.playlists.playlist_name,
      miapi_id: state=> state.playlists.miapi_id,
    })
  },

  methods: {
    ...mapActions("playlists", [
      "getUserPlaylists",
      "setUserPlaylist",
      "deleteUserPlaylist"
    ]),

    deletePlaylist(id) {
      this.deleteUserPlaylist(id);
    },

    onChange() {
      this.$store.commit("playlists/setPlaylistCoverPhoto", this.selectedID);
    },

    setPlaylistName(e) {
      this.$store.commit("playlists/setPlaylistName", e);
    },

    getImageUrl(image_id) {
      console.log(`https://0.api.artsmia.org/800/${image_id}.jpg`);
      return `https://0.api.artsmia.org/800/${image_id}.jpg`;
    }
  },

  created() {
    this.getUserPlaylists();
  }
};
</script>


