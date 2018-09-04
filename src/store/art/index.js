import { user } from '@/services';

const genericErrMsg = (customMsg) => `Oops! There was an error while attempting to ${customMsg}`

const errorMsgs = {
  saveArt: genericErrMsg('save your art'),
  getArt: genericErrMsg('get your saved art'),
  deleteArt: genericErrMsg('delete your art'),
}

export default {
  namespaced: true,
  state: {
    savedArt: [],
    artLoading: false,
    artSaving: false,
    errorMsg: '',
    successMsg: ''
  },
  mutations: {
    setArt(state, payload) {
      state.savedArt = payload.data ? payload.data : [];
    },
    setWaiting(state, { key, is }) {
      state[key] = is;
    },
    setErrorMsg(state, msg) {
      state.errorMsg = '';
      state.errorMsg = msg;
    },
    setSuccessMsg(state, msg) {
      // const newSuccessMsg = Object.assign({}, ) msg;
      
      state.successMsg = Object.assign({}, {msg}).msg;
    }
  },
  actions: {
    async getArt({ commit, rootState }) {
      try {
        commit('setWaiting', { key: 'artLoading', is: true });
        const user_id = rootState.user.user.id;
        commit('setArt', await user.getUserArt({ user_id }));
        commit('setWaiting', { key: 'artLoading', is: false }); 
      } catch (err) {
        commit('setErrorMsg', errorMsgs.getArt);
        console.log(err);
      }
    },
    async saveArt({ commit, dispatch, rootState }, { miapi_id }) {
      try {
        commit('setWaiting', { key: 'artSaving', is: true });
        const user_id = rootState.user.user.id;
        await user.saveUserArt({ user_id, miapi_id });        
        dispatch('getArt');
        commit('setSuccessMsg', 'Your art has been saved!');
        commit('setWaiting', { key: 'artSaving', is: false });
      } catch (err) {        
        commit('setErrorMsg', errorMsgs.saveArt);
        console.log(err);
      }
    },
    async deleteArt({ commit, dispatch, rootState }, { artId }) {
      try {
        const user_id = rootState.user.user.id;
        await user.deleteUserArt({ user_id, artId });
        dispatch('getArt', { user_id });
        commit('setSuccessMsg', 'Your art has been deleted!');
      } catch (err) {
        commit('setErrorMsg', errorMsgs.deleteArt);
        console.log(err);
      }
    },

  },
};