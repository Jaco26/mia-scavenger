import { search } from '@/services';

export default {
  namespaced: true,
  state: {
    searchResults: [],
  },
  mutations: {
    setSearchResults(state, payload) {
      state.searchResults = payload;
    },
    setSearchPhrase(state, val) {
      state.searchPhrase = val;
    }
  }, 
  actions: {
    async searchArt({ commit }, query) {
      commit('setSearchResults', await search.searchArt(query));
    },
  },
}