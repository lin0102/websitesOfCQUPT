import Vue from 'vue'
import Router from 'vue-router'
import Home from './views/Home.vue'
Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'home',
      component: Home
    },
    // {
    //   path: '/page1',
    //   name: 'page1',
    //   component: () => import('./views/pageOne.vue')
    // },
    // {
    //   path: '/page2',
    //   name: 'page2',
    //   component: () => import('./views/pageTwo.vue')
    // },
    // {
    //   path: '/page3',
    //   name: 'page3',
    //   component: () => import('./views/pageThree.vue')
    // },
    // {
    //   path: '/page4',
    //   name: 'page4',
    //   component: () => import('./views/pageFour.vue')
    // },
  ]
})
