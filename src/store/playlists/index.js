import { user } from '@/services';

export default {
  namespaced: true,

  state: {
    playlists: [],
    playlist_name: '',
    miapi_id: '',
    selectedPlaylistArt: [],
    // editing models
    showModal: false,
    editPlaylistId: '',
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
    },

    addPlaylistArt(state, payload) {
      state.selectedPlaylistArt = payload
    },

    // editing mutations
    showEditModal(state, bool) {
      state.showModal = bool;
    },
    setEditPlaylistId(state, id) {
      state.editPlaylistId = id;
    },
    setNewPlaylistArtPayload(state, artId) {
      if (state.playlistArtPayload.indexOf(artId) == -1) {
        state.playlistArtPayload.push(artId);
      } 
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

  

    // editing actions
    async addArtToPlaylist({ commit }, { playlist_id, art_id }) {
      console.log('change', playlist_id, art_id);
      await user.updateUserPlaylistArt({ playlist_id, art_id });
    },
  },
};