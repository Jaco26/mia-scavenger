import Vue from 'vue'
import Router from 'vue-router'
import HomePage from '@/components/HomePage'
import register from '@/components/register'
Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'HomePage',
      component: HomePage
    },
    {
      path: '/register',
      name: 'Register',
      component: register
    },
  ]
})
