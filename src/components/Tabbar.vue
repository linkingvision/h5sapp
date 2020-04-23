<template>
   <div class='tabbar'>
           <!-- 底部导航  -->
        <van-tabbar v-model="activefoot"  active-color="#6BE7C3" inactive-color="#415D56"  :border='false' @change="onChange">
            <van-tabbar-item replace to="/Liveview">
                <van-icon class-prefix="iconfont">&#xe66a;</van-icon>
            </van-tabbar-item>
            <van-tabbar-item>
                <van-icon class-prefix="iconfont">&#xe6c1;</van-icon>
            </van-tabbar-item>
            <van-tabbar-item> 
                <van-icon class-prefix="iconfont">&#xe634;</van-icon>
            </van-tabbar-item>
            <van-tabbar-item replace to="/setting">
                <van-icon class-prefix="iconfont">&#xe63f;</van-icon>
            </van-tabbar-item>
        </van-tabbar>
    </div>
</template>

<script>
import Vue from 'vue';
import { Tabbar, TabbarItem } from 'vant';

Vue.use(Tabbar);
Vue.use(TabbarItem);
export default {
  name: 'Tabbar',
  data(){
     return{
      activefoot: 0,
     } 
  },
  mounted(){
    console.log(1)
  },
  methods:{
    onChange(index){
    console.log(index)
    }
  }
}
</script>

<style scoped>
   /* 底部字体图标 */
.tabbar{
    clear: both;
}
@font-face {
    font-family: 'iconfont';
    src: url('../assets/icon/iconfont.eot');
    src: url('../assets/icon/iconfont.eot?#iefix') format('embedded-opentype'),
    url('../assets/icon/iconfont.woff2') format('woff2'),
    url('../assets/icon/iconfont.woff') format('woff'),
    url('../assets/icon/iconfont.ttf') format('truetype'),
    url('../assets/icon/iconfont.svg#iconfont') format('svg');
}

.iconfont {
  font-family: "iconfont" !important;
  font-size: 20px;
  font-style: normal;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}
.van-tabbar{
    background-color:#2D2D30;
}
</style>