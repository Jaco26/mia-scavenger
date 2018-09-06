import { search } from '@/services';

export default {
  namespaced: true,
  state: {
    searchPhrase: '',
    searchResults: [],
    searchLoading: false,
  },
  mutations: {
    setSearchResults(state, payload) {
      state.searchResults = payload;
    },
    setSearchPhrase(state, val) {
      state.searchPhrase = val;
    },
    setLoading(state, is) {
      state.searchLoading = is;
    }
  }, 
  actions: {
    async searchArt({ commit }, query) {
      commit('setLoading', true);
      commit('setSearchResults', await search.searchArt(query));
      commit('setLoading', false);
    },
  },
}