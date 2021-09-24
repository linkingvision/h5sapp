<template>
   <div class='tabbar'>
           <!-- 底部导航  -->
        <van-tabbar v-model="activefoot"  active-color="#67DABE" inactive-color="#415D56"  :border='false' @change="onChange">
            <van-tabbar-item replace to="/Liveview">
                <template #icon="props">
                    <van-icon  :class="props.active ?icon1.active :icon1.inactive" class-prefix="iconfont2"></van-icon>
                </template>
            </van-tabbar-item>
            <van-tabbar-item replace to="/Playback">
               <template #icon="props">
                   <van-icon :class="props.active ?icon2.active :icon2.inactive" class-prefix="iconfont2"></van-icon>
               </template>
            </van-tabbar-item>
            <van-tabbar-item replace to="/CallPolice"> 
               <template #icon="props">
                   <van-icon :class="props.active ?icon3.active :icon3.inactive" class-prefix="iconfont2"></van-icon>
               </template>
            </van-tabbar-item>
            <van-tabbar-item replace to="/setting">
               <template #icon="props">
                  <van-icon :class="props.active ?icon4.active :icon4.inactive" class-prefix="iconfont2"></van-icon>
               </template> 
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
      icon1: {
        active:'tabbarlive1',
        inactive: "tabbarlive2",
      },
      icon2: {
        active:'tabbarplay1',
        inactive: "tabbarplay2",
      },
      icon3: {
        active:'tabbarpolice1',
        inactive: "tabbarpolice2",
      },
      icon4: {
        active:'tabbarsysme1',
        inactive: "tabbarsysme2",
      },
     } 
  },
  mounted(){
    console.log(1)
  },
  methods:{
    onChange(index){
      
    }
    // -------
  }
}
</script>

<style scoped>
   /* 底部字体图标 */
.tabbar{
    clear: both;
}
@font-face {
    font-family: 'iconfont2';  /* project id 1748212 */
    src: url('../assets/icon/font/iconfont.eot');
    src: url('../assets/icon/font/iconfont.eot?#iefix') format('embedded-opentype'),
    url('../assets/icon/font/iconfont.woff2') format('woff2'),
    url('../assets/icon/font/iconfont.woff') format('woff'),
    url('../assets/icon/font/iconfont.ttf') format('truetype'),
    url('../assets/icon/font/iconfont.svg#iconfont') format('svg');
}

.iconfont2 {
    font-family: "iconfont2" !important;
    font-size: 20px;
    font-style: normal;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
}
.van-tabbar{
    background-color:#2D2D30;
}
.van-tabbar-item{
    background-color:transparent !important;
}
.van-tabbar-item__icon{
    margin-bottom:0;
}
/* 实时视频 */
.tabbarlive1 {
    display: inline-block;
    width: 23px;
    height: 14px;
    background: url('../assets/image/live4.png') no-repeat;
    background-size:100% 100%;
}
.tabbarlive2{
    display: inline-block;
    width: 23px;
    height: 14px;
    background: url('../assets/image/live3.png') no-repeat; 
    background-size:100% 100%;
 }
 /* 播放 */
 .tabbarplay1 {
    display: inline-block;
    width: 16px;
    height: 20px;
    background: url('../assets/image/play4.png') no-repeat;
    background-size:100% 100%;
  }
  .tabbarplay2{
    display: inline-block;
    width: 16px;
    height: 20px;
    background: url('../assets/image/play3.png') no-repeat;
    background-size:100% 100%;
 }
 /* 实时报警 */
 .tabbarpolice1 {
    display: inline-block;
    width: 18px;
    height: 21px;
    background: url('../assets/image/police4.png') no-repeat;
    background-size:100% 100%;
  }
  .tabbarpolice2{
    display: inline-block;
    width: 18px;
    height: 21px;
    background: url('../assets/image/police3.png') no-repeat;
    background-size:100% 100%;
 }
 /* 系统管理 */
 .tabbarsysme1 {
    display: inline-block;
    width: 19px;
    height: 19px;
    background: url('../assets/image/sysemseting4.png') no-repeat;
    background-size:100% 100%;
  }
  .tabbarsysme2{
    display: inline-block;
    width: 19px;
    height: 19px;
    background: url('../assets/image/sysemseting3.png') no-repeat;
    background-size:100% 100%;
 }
</style>
  