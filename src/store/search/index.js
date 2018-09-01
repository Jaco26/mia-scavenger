import { search } from '@/services';

export default {
  namespaced: true,
  state: {
    searchPhrase: '',
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
    async searchArt({ commit, state }, query) {
      commit('setSearchResults', await search.searchArt(state.searchPhrase));
    },
  },
}