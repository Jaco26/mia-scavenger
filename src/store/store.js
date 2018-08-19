import Vue from 'vue';
import Vuex from 'vuex';

// vuex sub-modules
import user from './user';
import playlists from './art-playlists';

Vue.use(Vuex);

export const store = new Vuex.Store({
    modules: {
        user,
        playlists,
    },
});