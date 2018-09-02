import axios from 'axios';

export default {
  namespaced: true,
  state: {
    user: {
      id: 1, // default userId, since we only have one in the database
      username: 'Mx. Doe',
      school: 'Art Junior High School',
      grade: '7',
    },
    error: false,
    errorMsg: '',
    loading: false,
  },
  mutations: {
    setUser(state, user) {
      Object.keys(user).forEach(key => state[key] = user[key]);
    },
    setLoading(state, is) {
      state.loading = is;
    },
    setError(state, {errMsg, is}) {
      state.errorMsg = errMsg;
      state.error = is
    }
  },
  actions: {
    fetchUser({commit, dispatch, state}, {username, password}) {
      commit('setLoading', true);
      axios.get(`/api/user/${username}/${password}`)
        .then(response => {
          commit('setUser', response.data);
          dispatch('playlists/fetchPlaylists', state.user.userId, { root: true });
          commit('setLoading', false);
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
  
}