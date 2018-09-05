import { user } from '@/services';

export default {
  namespaced: true,

  state: {
    playlists: [],
    playlist_name: '',
    miapi_id: '61875'
  },

  mutations: {
    setPlaylistResults(state, payload) {
      state.playlists = payload;
    },

    setPlaylistName(state, name) {
      state.playlist_name = name;
    }
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
      this.getUserPlaylists();
    },

    async deleteUserPlaylist(id) {
      let object = {
        playlist_id: id
      }
      user.deleteUserPlaylist(object)
      console.log('delete user ran');
    },
  },
};