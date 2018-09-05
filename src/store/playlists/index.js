import { user } from '@/services';

export default {
  namespaced: true,

  state: {
    playlists: [],
    playlist_name: 'test',
    miapi_id: '1218'
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
        user_id: this.state.user.user.id,
        miapi_id: this.state.playlists.miapi_id,
      };
      user.saveUserPlaylist(object);
      // this.getUserPlaylists();
    }
  },
};