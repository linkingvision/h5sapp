import Vue from 'vue'
import VueRouter from 'vue-router'
import Login from '@/components/Login'
import liveview from '@/components/liveview'
import store from '@/store/index'
import * as types from '@/store/types'
Vue.use(VueRouter)
const routes=[
    {
      path: '/',
      redirect: '/login'
     },
     {
      path:'/login',
      component:Login
     },
   {
    path:'/Liveview',
    component:liveview
   }
]
const Router = new VueRouter({
    routes
  });
if (window.localStorage.getItem('h5stoken')) {
  store.commit(types.LOGIN, window.localStorage.getItem('h5stoken'))
}
//使用端口号
if (window.localStorage.getItem('h5appport')) {
  
  store.commit(types.USEPORT, window.localStorage.getItem('h5appport'))
}
//查看端口号
if (window.localStorage.getItem('h5appportip')) {
  
  store.commit(types.USEPORTIP, window.localStorage.getItem('h5appportip'))
}
if (window.localStorage.getItem('h5appportport')) {
  
  store.commit(types.USEPORTPORT, window.localStorage.getItem('h5appportport'))
}
if (window.localStorage.getItem('h5appportuser')) {
  
  store.commit(types.USEPORTUSER, window.localStorage.getItem('h5appportuser'))
}
if (window.localStorage.getItem('h5appportpsw')) {
  store.commit(types.USEPORTPSW, window.localStorage.getItem('h5appportpsw'))
}
//1

export default Router; 