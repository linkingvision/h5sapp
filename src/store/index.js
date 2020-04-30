/**
 * 数据管理模块
 */

import Vue from 'vue'
import Vuex from 'vuex'
import actions from './actions'
import getters from './getters'
import {RECEIVE_PETSINFO} from './mutations-type'
import * as types from './types'
// import  mutations from './mutations'

Vue.use(Vuex)
export default new Vuex.Store({
  state: {
    //使用端口号
   callport:"",
    Useport:{
      ip:" ",
      port:" ",
      user:" ",
      psw:""
     },//查看端口号
     radio:1,
     imgURL:''
},
  mutations: {
    [types.USEPORT]: (state, data) => {
      //console.log("+++++++++++++",data);
      localStorage.h5appport= data
      state.callport=data
    },

    [types.USEPORTIP]: (state, data) => {
      //console.log("+++++++++++++",data);
      localStorage.h5appportip= data
      state.Useport.ip=data
    },
    [types.USEPORTPORT]: (state, data) => {
      //console.log(data);
      localStorage.h5appportport= data
      state.Useport.port=data
    },
    [types.USEPORTUSER]: (state, data) => {
      //console.log(data);
      localStorage.h5appportuser= data
      state.Useport.user=data
    },
    [types.USEPORTPSW]: (state, data) => {
      //console.log(data);
      localStorage.h5appportpsw= data
      state.Useport.psw=data
    },
   //不知道
    [RECEIVE_PETSINFO](state,{petsInfo}){
      state.petsInfo = petsInfo
    },
   // login
    [types.LOGIN]:(state, data) => {
      console.log(data)
      localStorage.h5stoken = data
      state.token = data
    },
    [types.RADIO]:(state, data) => {
      console.log(data)
      state.radio = data
    },
    [types.RADIO]:(state, data) => {
      console.log(data)
      state.imgURL = data
    },
  },
  actions,
  getters
})
