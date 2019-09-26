import Vue from 'vue'
import Router from 'vue-router'
import BookManager from './components/BookManager'
import Summary from "./components/Summary";

Vue.use(Router)

export default new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: [
    {
      path: '/',
      name: 'bookManager',
      component: BookManager
    },
    {
      path: '/summary',
      name: 'summary',
      component: Summary
      // route level code-splitting
      // this generates a separate chunk (about.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      //component: () => import(/* webpackChunkName: "about" */ './views/About.vue')
    }
  ]
})
