import "babel-polyfill"
import Vuex from 'vuex'
import Vue from 'vue'
import * as types from './types'

Vue.use(Vuex)
export default new Vuex.Store({
  state: {
    xzvalue:new Date(),
    user: {},
    token: null,
    title: '',
    lang: 'en',
    rtc:"WS",
    tour:"WS",
    watermarkstring:"linkingvision",
    watermarktoggle:"",
    conference:"",
    // radio=''
  },
  mutations: {
    [types.LOGIN]:(state, data) => {
      console.log(data)
      localStorage.h5stoken = data
      state.token = data
    },
  }
})