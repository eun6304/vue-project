import Vue from 'vue'
import Router from 'vue-router'
import IndexPage from '@/components/IndexPage'
import LoginPage from '@/components/LoginPage'
import MovieIndexPage from '@/components/MovieIndexPage'
import MovieShowPage from '@/components/MovieShowPage'
import VueRouter from 'vue-router'

Vue.use(Router)

const routes = [
    {
      path: '/',
      name: 'MovieIndexPage',
      component: MovieIndexPage
    },
    {
      path: '/:id',
      name: 'MovieShowPage',
      component: MovieShowPage
    },
  ]

const router = new VueRouter({
  routes
})

export default router
