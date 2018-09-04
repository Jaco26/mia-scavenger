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
    backgroundImageURL: null,
    errorMsg: '',
    successMsg: ''
  },
  mutations: {
    setArt(state, payload) {
      state.savedArt = payload.data ? payload.data : [];
    },
    setBackground(state, payload){
      console.log("what is payload", payload.data)
      state.backgroundImageURL = payload ? payload : 'https://0.api.artsmia.org/800/2835.jpg';
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
  getters: {
    background(state) {
      console.log("im the getter", state.backgroundImageURL)
      return state.backgroundImageURL;
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
    async setBackgroundArt({ commit, dispatch, rootState }){
      try{
       let response =  await user.getBackgroundImage();
       console.log("what are you", response.data);
        commit('setBackground', `https://0.api.artsmia.org/800/${response.data.id}.jpg`);
        // commit('setBackground', `https://api.artsmia.org/images/${response.data.id}/small.jpg`);
        
      }catch(err){
        commit('setErrorMsg', errorMsgs.randomArt);
        console.log(err);;
      }

    }

  }
  
};