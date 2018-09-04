import axios from 'axios';
import _ from 'lodash';

export default {
  namespaced: true,
  state: {
    user: {
      id: null, // default userId, since we only have one in the database
      username: '',
      school: '',
      grade: '',
    },
    error: false,
    errorMsg: '',
    loading: false,
  },
  mutations: {
    setUser(state, user) {
      state.user = user[0];
    },
    setLoading(state, is) {
      state.loading = is;
    },
    setError(state, {errMsg, is}) {
      state.errorMsg = errMsg;
      state.error = is
    },
    logOut(state) {
      Object.keys(state.user).forEach(key => state.user[key] = '');
    }
  },
  actions: {
    fetchUser({commit, dispatch, state}, {username, password}) {
      commit('setLoading', true);
      return axios.get(`/api/user/${username}/${password}`)
        .then(response => {
          if(_.isEmpty(response.data)) {
            commit('setError', { errMsg: 'No user Found', is: true });
            // throw new Error({userNotFound: 'No user Found'});
            return {errMsg: 'No user Found'}
          } 
          commit('setUser', response.data);
          dispatch('playlists/fetchPlaylists', state.user.id, { root: true });
          commit('setLoading', false);
          return
        })
        .catch(err => {
          commit('setLoading', false);
          commit('setError', { errMsg: 'Oops! There was a problem fetching user data', is: true });
          console.log(err);
        });
    },
    createUser({commit, dispatch}, userInfo) {
      commit('setLoading', true);
      axios.post(`/api/new-user`, userInfo)
        .then(response => {
          commit('setLoading', false);
          dispatch('fetchUser', userInfo);
        })
        .catch(err => {
          commit('isLoading', false);
          commit('setError', { errMsg: 'Oops! There was a problem creating your account. Please try a different username or password', is: true });
          console.log(err);
        });
    },
  },
  getters: {
    isLoggedIn(state) {
      return state.user.id;
    }
  }
  
}