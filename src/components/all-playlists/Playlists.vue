<template>
  <div>
      <v-form  class="mx-4"  v-model="valid">
          <v-text-field
            :value="playlist_name"
            @input="setPlaylistName"
            label="Playlist Name">
          </v-text-field>
      </v-form>
    <v-btn @click="setUserPlaylist()">New Playlist</v-btn>

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
    return {};
  },

  computed: {
    ...mapState({
      playlist_name: state => state.playlists.playlist_name
    })
  },

  methods: {
    ...mapActions("playlists", [
      "getUserPlaylists",
      "setUserPlaylist",
      "deleteUserPlaylist"
    ]),

    deletePlaylist(id) {
      console.log(id);
      this.deleteUserPlaylist(id);
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


