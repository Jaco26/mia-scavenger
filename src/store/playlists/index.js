import { user } from '@/services';

export default {
  namespaced: true,
  state: {
    playlists: [],
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
  },
};