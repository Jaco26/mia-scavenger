import Vue from 'vue'
import Router from 'vue-router'
import { isAuthenticated } from '../store/store'

// home page
import Home from '@/components/Home'
// auth 
import Register from '@/components/auth/register'
import Login from '@/components/auth/login';
// search

import Search from '@/components/search/Search';
// saved art
import SavedArt from '@/components/saved-art/SavedArt';
// all playlists
import AllPlaylists from '@/components/all-playlists/Playlists';
// specific playlist
import Playlist from '@/components/playlist/Playlist';
// page not found
import PageNotFound from '@/components/PageNotFound';

Vue.use(Router)

export default new Router({
  mode: 'history',
  routes: [
    {
      path: '/',
      name: 'home',
      component: Home,
      beforeEnter: isAuthenticated
    },
    {
      path: '/login',
      name: 'login',
      component: Login,
    },
    {
      path: '/register',
      name: 'register',
      component: Register
    },
    {
      path: '/search',
      name: 'search',
      component: Search,
      beforeEnter: isAuthenticated
    },
    {
      path: '/saved-pieces',
      name: 'savedArt',
      component: SavedArt,
      beforeEnter: isAuthenticated
    }, 
    {
      path: '/playlists',
      name: 'allPlaylists',
      component: AllPlaylists,
      beforeEnter: isAuthenticated
    },
    {
      path: '/playlist/:playlistId',
      name: 'specificPlaylist',
      component: Playlist,
      beforeEnter: isAuthenticated
    },
    {
      path: '*',
      component: PageNotFound,
    }
  ]
  // routes: [
  //   {
  //     path: '/',
  //     redirect: 'login'
  //   },
  //   {
  //     path: '/login',
  //     name: 'login',
  //     component: Login
  //   }, 
  //   {
  //      path: '/home',
  //      name: 'HomePage',
  //      component: HomePage
  //    },
  //   {
  //     path: '/test',
  //     component: SearchContainer,
  //     redirect: 'test/search',
  //     children: [
  //       {
  //         path: 'search',
  //         name: 'search',
  //         component: Search
  //       },
  //       {
  //         path: 'art',
  //         name: 'savedArt',
  //         component: SavedArt,
  //       },
  //       {
  //         path: 'playlists',
  //         name: 'savedPlaylists',
  //         component: Playlists,
  //         children: [
  //           {
  //             path: ':playlistId',
  //             name: 'playlist',
  //             component: Playlist,
  //           },
  //         ],
  //       },
  //     ],
  //   },
  //   {
  //     path: '/register',
  //     name: 'Register',
  //     component: register
  //   },
  //   {
  //     path: '/plan',
  //     name: 'PlanTrip',
  //     component: PlanTrip
  //   },
  // ]
});
