<template>
  <div>
    <button>New Playlist</button>
    <button>Get Playlist</button>
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
      'getUserPlaylists'
    ])
  },

  created() {
    this.getUserPlaylists();
  },

}
</script>

