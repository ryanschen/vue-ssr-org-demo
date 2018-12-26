import Vue from 'vue'
import Router from 'vue-router'
Vue.use(Router)

import Home from './components/Home.vue'

export function createRouter() {
  return new Router({
    mode: 'history',
    routes: [
      { path: '/', component: Home },
      { path: '/archives', component: () => import('./components/archives.vue') },
      { path: '/about', component: () => import('./components/about.vue') }
    ]
  })
}
