import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex);

export const store = new Vuex.Store({
    state: {
        user: {
            userName: '',
            userSchool: '',
            userGrade: '',
        }
    },
    mutations: {
        setUser(state, payload) {
            state.user = {
                userName: payload.userName, 
                userGrade: payload.userGrade,
                userSchool: payload.userSchool
            };
        }
    },
    actions: {

    },
    getters: {

    },


});