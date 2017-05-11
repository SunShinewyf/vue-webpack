import Vue from 'vue'
import Router from 'vue-router'
import App from '@/components/App'
import Optimize from '@/components/Optimize'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'app',
      component: App
    },
    {
      path:'/optimize',
      name:'optimize',
      component: Optimize
    }
  ]
})
