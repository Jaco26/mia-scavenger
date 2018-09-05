<template>
  <div>
    <v-btn @click="setUserPlaylist()">New Playlist</v-btn>
    <div v-for="playlist in $store.state.playlists.playlists.data">
      <h1>{{playlist.playlist_name}}</h1>
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
    ])
  },

  created() {
    this.getUserPlaylists();
  },

}
</script>

