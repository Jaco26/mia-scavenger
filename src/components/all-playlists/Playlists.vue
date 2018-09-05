<template>
  <div>
    <v-btn @click="setUserPlaylist()">New Playlist</v-btn>
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

