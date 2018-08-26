import { user } from '@/services';

console.log(user);


export default {
  namespaced: true,
  state: {
    art: [],
  },
  mutations: {
    setArt(state, payload) {
      console.log(payload);
      
    },
  },
  actions: {
    async getArt({ commit }, { user_id }) {
      commit('setArt', await user.getUserArt(user_id));
    },
    async saveArt({ dispatch }, { user_id, miapi_id }) {
      await user.saveUserArt({ user_id, miapi_id });
      dispatch('getArt', { user_id });
    },
    async deleteArt({ dispatch }, { user_id, artId }) {
      await user.deleteArt({ user_id, artId });
      dispatch('getArt', { user_id });
    }

  },
};