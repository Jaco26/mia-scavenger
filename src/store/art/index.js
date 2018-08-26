import { user } from '@/services';

export default {
  namespaced: true,
  state: {
    art: [],
  },
  mutations: {
    setArt(state, payload) {
      state.art = payload.data;
    },
  },
  actions: {
    async getArt({ commit, rootState }) {
      try {
        const user_id = rootState.user.user.id;
        commit('setArt', await user.getUserArt({ user_id })); 
      } catch (err) {
        console.log(err);
      }
    },
    async saveArt({ dispatch }, { user_id, miapi_id }) {
      try {
        const response = await user.saveUserArt({ user_id, miapi_id });        
        dispatch('getArt');
      } catch (err) {
        console.log(err);
      }
    },
    async deleteArt({ dispatch }, { user_id, artId }) {
      try {
        await user.deleteArt({ user_id, artId });
        dispatch('getArt', { user_id });
      } catch (err) {
        console.log(err);
      }
    },

  },
};