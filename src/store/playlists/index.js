import { user } from '@/services';

export default {
  namespaced: true,

  state: {
    playlists: [],
    playlist_name: '',
    miapi_id: ''
  },

  mutations: {
    setPlaylistResults(state, payload) {
      state.playlists = payload;
    },

    setPlaylistName(state, name) {
      state.playlist_name = name;
    },

    setPlaylistCoverPhoto(state, id) {
      state.miapi_id = id;
    },

    clearPlaylistName(state) {
      state.playlist_name = '';
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
      await user.saveUserPlaylist(object);
      commit('setPlaylistResults', await user.getUserPlaylists(this.state.user.user));
      commit('clearPlaylistName');
    },

    async deleteUserPlaylist({commit}, {id}) {
      let objectToSend = {
        playlist_id: id
      }
      await user.deleteUserPlaylist(objectToSend);
      commit('setPlaylistResults', await user.getUserPlaylists(this.state.user.user));
    },
  },
};