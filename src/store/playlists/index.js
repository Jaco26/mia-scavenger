import { user } from '@/services';

export default {
  namespaced: true,
  state: {
    playlists: [],
    playlist_name: 'test',
    miapi_id: 'test'
  },
  mutations: {
    setPlaylistResults(state, payload) {
      state.playlists = payload;
    },
  }, 
  actions: {
    async getUserPlaylists({commit}) {
      commit('setPlaylistResults', await user.getUserPlaylists(this.state.user.user));
    },

    async setUserPlaylist({commit}) {
      let object = {
        playlist_name: this.state.playlists.playlist_name,
        id: this.state.user.user.id,
        miapi_id: this.state.playlists.miapi_id,
      };
      console.log(object);
      // await user.saveUserPlaylist();
      // this.getUserPlaylists()
    }
  },
};