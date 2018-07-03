import Vue from 'vue'
import Router from 'vue-router'

import Home from '../components/pages/Home/Home.vue'
import Buycar from '../components/pages/Buycar/Buycar.vue'
import Mine from '../components/pages/Mine/Mine.vue'
import Login from '../components/pages/Mine/Login/Login.vue'
import Info from '../components/pages/Mine/Info/Info.vue'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'home',
      component: Home
    },
    {
      path: '/buycar',
      name: 'buycar',
      component: Buycar
    },
    {
      path: '/mine',
      name: 'mine',
      component: Mine,
      children: [
        {path: 'login', name: 'login', component: Login},
        {path: 'info', name: 'info', component: Info}
      ]
    },
    {
      path: '*',
      redirect: '/'
    }
  ]
})
