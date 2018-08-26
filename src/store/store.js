import Vue from 'vue';
import Vuex from 'vuex';

// vuex sub-modules
import user from './user';
import playlists from './playlists';
import art from './art';
import search from './search';

Vue.use(Vuex);

export const store = new Vuex.Store({
    modules: {
        user,
        playlists,
        art,
        search,
    },
});