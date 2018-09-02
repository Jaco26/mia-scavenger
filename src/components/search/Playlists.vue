<template>
  <div>
    <button>New Playlist</button>
    <div v-for="playlist in playlists">
      <h1>{{playlist.artist}}</h1>
    </div>
  </div>
</template>

<script>
import { mapActions, mapState } from 'vuex';
export default {
  data() {
    return {
      playlists: [{
        artist: 'test',
        art: 'test',
      }],
    }
  },

  methods: {
    
  },
}
</script>

