<template>
  <div>
    <v-form  class="mx-4"  v-model="valid">
        <v-text-field
          :value="playlist_name"
          @input="setPlaylistName"
          label="Playlist Name">
        </v-text-field>
    </v-form>
    <div>
      <select v-model='selectedID' v-on:change="onChange()">
        <option>Test</option>
        <option v-for="art in $store.state.art.savedArt" v-bind:value="art.miaResults.id">{{art.miaResults.title}}</option>
      </select>
    </div>
    <v-btn @click="setUserPlaylist()">Add Playlist</v-btn>

    <div v-for="playlist in $store.state.playlists.playlists.data">
      <h1>{{playlist.playlist_name}}</h1>
      <h2>{{playlist.id}}</h2>
      <img v-bind:src="getImageUrl(playlist.cover_art_id)" />
      <v-btn>View Playlist</v-btn>
      <v-btn @click="deletePlaylist({id: playlist.id})">Delete Playlist</v-btn>
    </div>

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
      console.log('selected ID', this.selectedID);
      this.$store.commit("playlists/setPlaylistCoverPhoto", this.selectedID);
    },

    setPlaylistName(e) {
      this.$store.commit("playlists/setPlaylistName", e);
    },

    getImageUrl(image_id) {
      return `https://0.api.artsmia.org/800/${image_id}.jpg`;
    }
  },

  created() {
    this.getUserPlaylists();
  }
};
</script>


