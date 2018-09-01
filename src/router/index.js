import Vue from 'vue'
import Router from 'vue-router'

import Search from '@/components/search'
import HomePage from '@/components/HomePage'
import register from '@/components/register'
import PlanTrip from '@/components/PlanTrip/PlanTrip';

Vue.use(Router)

export default new Router({
  routes: [
     {
       path: '/',
       name: 'HomePage',
       component: HomePage
     },
    {
      path: '/search',
      name: 'search',
      component: Search
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
