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

// This is the function to be used as a 'per-route' route guard. 
// Defining it here gives it access to the `store` object. When 
// used as the value for the `beforeEnter` option in the vue-router routes,
// Vue Router will pass it 3 arguments (to, from, next) which you can read about here:
// https://router.vuejs.org/guide/advanced/navigation-guards.html#global-guards
export function isAuthenticated(to, from, next) {
    if (store.state.user.user.id) {
        next();
        return true;
    } 
    next('/login');
    return false;
}