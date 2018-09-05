import { user } from '@/services';

const genericErrMsg = (customMsg) => `Oops! There was an error while attempting to ${customMsg}`

const errorMsgs = {
  saveArt: genericErrMsg('save your art'),
  getArt: genericErrMsg('get your saved art'),
  deleteArt: genericErrMsg('delete your art'),
  randomArt: genericErrMsg('random art work'),
}

export default {
  namespaced: true,
  state: {
    savedArt: [],
    artLoading: false,
    artSaving: false,
    backgroundImageURL: '',
    error: false,
    success: false,
    errorMsg: '',
    successMsg: ''
  },
  mutations: {
    setArt(state, payload) {
      state.savedArt = payload.data ? payload.data : [];
    },
    setBackground(state, payload){
      console.log("what is payload", payload)
      state.backgroundImageURL = payload ? `https://0.api.artsmia.org/800/${payload}.jpg` : `https://0.api.artsmia.org/800/2835.jpg`;
    },
    setWaiting(state, { key, is }) {
      state[key] = is;
    },
    setError(state, is) {
      state.error = is;
    },
    setSuccess(state, is) {
      state.success = is;
    },
    setErrorMsg(state, msg) {
      state.errorMsg = msg;
    },
    setSuccessMsg(state, msg) {
      state.successMsg = msg;
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
        commit('setError', true);
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
        commit('setSuccess', true);
        commit('setSuccessMsg', 'Your art has been saved!');
        commit('setWaiting', { key: 'artSaving', is: false });
      } catch (err) {       
        commit('setError', true); 
        commit('setErrorMsg', errorMsgs.saveArt);
        console.log(err);
      }
    },
    async deleteArt({ commit, dispatch, rootState }, { artId }) {
      try {
        const user_id = rootState.user.user.id;
        await user.deleteUserArt({ user_id, artId });
        dispatch('getArt', { user_id });
        commit('setSuccess', true);
        commit('setSuccessMsg', 'Your art has been deleted!');
      } catch (err) {
        commit('setError', true);
        commit('setErrorMsg', errorMsgs.deleteArt);
        console.log(err);
      }
    },
    async setBackgroundArt({ commit, dispatch, rootState }){
      try {
       let response =  await user.getBackgroundImage();
       commit('setBackground', response.data);      
      } catch (err) {
        commit('setError', true);
        commit('setErrorMsg', errorMsgs.randomArt);
        console.log(err);;
      }

    }

  }
  
};