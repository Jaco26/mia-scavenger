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
    async getUserPlaylists({ commit, rootState }) {
      commit('setPlaylistResults', await user.getUserPlaylists(rootState.user.user));
    },

    async setUserPlaylist({commit, rootState}) {
      let object = {
        playlist_name: rootState.playlists.playlist_name,
        user_id: rootState.user.user.id,
        miapi_id: rootState.playlists.miapi_id,
      };
      await user.saveUserPlaylist(object);
      commit('setPlaylistResults', await user.getUserPlaylists(rootState.user.user));
      commit('clearPlaylistName');
    },

    async deleteUserPlaylist({ commit, rootState }, {id}) {
      let objectToSend = {
        playlist_id: id
      }
      await user.deleteUserPlaylist(objectToSend);
      commit('setPlaylistResults', await user.getUserPlaylists(rootState.user.user));
    },
  },
};