import { search } from '@/services';

export default {
  namespaced: true,
  state: {
    searchPhrase: '',
    searchResults: [],
  },
  mutations: {
    setSearchResults(state, payload) {
      console.log(payload);
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