import Vue from 'vue'
import Router from 'vue-router'

import HomePage from '@/components/HomePage'
import register from '@/components/register'
import PlanTrip from '@/components/PlanTrip/PlanTrip';
import Login from '@/components/login';
import SearchContainer from '@/components/search'
import Search from '@/components/search/Search';
import SavedArt from '@/components/search/SavedArt';
import Playlists from '@/components/search/Playlists';
import Playlist from '@/components/search/Playlist';


Vue.use(Router)

export default new Router({
  mode: 'history',
  routes: [
    {
      path: '/',
      redirect: 'login'
    },
    {
      path: '/login',
      name: 'login',
      component: Login
    }, 
    {
       path: '/home',
       name: 'HomePage',
       component: HomePage
     },
    {
      path: '/test',
      component: SearchContainer,
      redirect: 'test/search',
      children: [
        {
          path: 'search',
          name: 'search',
          component: Search
        },
        {
          path: 'art',
          name: 'savedArt',
          component: SavedArt,
        },
        {
          path: 'playlists',
          name: 'savedPlaylists',
          component: Playlists,
          children: [
            {
              path: ':playlistId',
              name: 'playlist',
              component: Playlist,
            },
          ],
        },
      ],
    },
    {
      path: '/register',
      name: 'Register',
      component: register
    },
    {
      path: '/plan',
      name: 'PlanTrip',
      component: PlanTrip
    },
  ]
})
