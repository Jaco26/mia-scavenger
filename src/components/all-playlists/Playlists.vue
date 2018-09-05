<template>
  <div>
    <v-btn @click="setUserPlaylist()">New Playlist</v-btn>
    <div v-for="playlist in $store.state.playlists.playlists.data">
      <h1>{{playlist.playlist_name}}</h1>
      <img v-bind:src="getImageUrl(playlist.cover_art_id)" />
      <button>View Playlist</button>
    </div>
  </div>
</template>

<script>
import { mapActions, mapState } from 'vuex';
export default {
  data() {
    return {}
  },

  methods: {
    ...mapActions('playlists', [
      'getUserPlaylists',
      'setUserPlaylist'
    ]),

    getImageUrl(image_id) {
      return `https://0.api.artsmia.org/800/${image_id}.jpg`
    },


  },

  created() {
    this.getUserPlaylists();
  },

}
</script>

