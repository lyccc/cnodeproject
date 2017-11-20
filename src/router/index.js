import Vue from 'vue'
import Router from 'vue-router'
import CommentList from '@/pages/CommentList'
import Details from '@/pages/Details'
import Login from '@/pages/Login'
import baiduMap from '@/components/baiduMap'
Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'CommentList',
      component: CommentList
    },
    {
      path: '/topic/:id',
      name: 'Details',
      component: Details
    },
    {
      path: '/baiduMap',
      name: 'baiduMap',
      component: baiduMap
    },
    {
      path: '/Login',
      name: 'Login',
      component: Login
    }
  ]
})
