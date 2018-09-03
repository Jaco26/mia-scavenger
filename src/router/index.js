import Vue from 'vue'
import Router from 'vue-router'

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


Vue.use(Router)

export default new Router({
  mode: 'history',
  routes: [
    {
      path: '/',
      name: 'home',
      component: Home,
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
    },
    {
      path: '/saved-pieces',
      name: 'savedArt',
      component: SavedArt,
    }, 
    {
      path: '/playlists',
      name: 'allPlaylists',
      component: AllPlaylists,
    },
    {
      path: '/playlist/:playlistId',
      name: 'specificPlaylist',
      component: Playlist,

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
