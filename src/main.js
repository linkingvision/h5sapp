import Vue from 'vue'
import router from './router'
import axios from 'axios'
import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';
import App from './App'
import store from './store'
// import "@/amfe-flexible/index.js";
// import axios from '@/http'

// const routerPush = router.prototype.push
// router.prototype.push = function push(location) {
//   return routerPush.call(this, location).catch(error=> error)
// }
Vue.config.productionTip = false
Vue.prototype.$http = axios
Vue.use(ElementUI);
const bus = new Vue()

// import event from '@/assets/js/event'
// Vue.prototype.EVENT = event
// designSize:设计图尺寸(传@1x倍图尺寸,例如设计图是750px,2倍图,那么传375),rootValue:比例,默认100
function sethtml(designSize, rootValue){
let rootV = 100;
if (rootValue) {
    rootV = rootValue;
}
// 窗口宽度
const winWidth = window.document.documentElement.clientWidth;
// 如果窗口宽度超过1.5倍设计图了,则不再调整
if (winWidth > 1.5 * designSize) { return; }
// window.console.log(winWidth);
const htmlFontSize = winWidth * rootV / designSize;
window.document.documentElement.style.fontSize = htmlFontSize + 'px';
} sethtml(375)
// http request 拦截器
axios.interceptors.request.use(
  config => {
    // console.log('http request');
    if (store.state.token) {
      config.headers.Authorization = `token ${store.state.token}`
    }
    return config
  },
  err => {
    return Promise.reject(err)
  }
)
new Vue({
  store,
  router,
  data: {
    bus
  },
 render: h => h(App),
}).$mount('#app')
