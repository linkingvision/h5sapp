<template>
   <div class="setting">
      <div class="sethead">
           <van-row class="headeset">
              <van-col span="15">
                  <div class="beijing">
                     <span class="setLogo"></span>
                  </div>
                  <span>ADMIN</span>
              </van-col>
              <van-col span="9" @click="logout">
                  <div class="source"></div>
                  <span>退出</span>
              </van-col>
           </van-row> 
      </div>
      <van-row>
         <van-col span="10">
              <van-icon class-prefix="iconfont">&#xe63f;</van-icon>
              <span>系统设置</span>
         </van-col>
        <van-col span="8" offset="6">
             <van-icon class-prefix="iconfont">&#xe63f;</van-icon>
        </van-col>
     </van-row> 
     <van-row>
         <van-col span="10">
              <van-icon class-prefix="iconfont">&#xe63f;</van-icon>
              <span>帮助中心</span>
         </van-col>
        <van-col span="8" offset="6">
             <van-icon class-prefix="iconfont">&#xe63f;</van-icon>
        </van-col>
     </van-row> 
     <van-row>
         <van-col span="10">
              <van-icon class-prefix="iconfont">&#xe63f;</van-icon>
              <span>关于我们</span>
         </van-col>
        <van-col span="8" offset="6" @click="About">
             <van-icon class-prefix="iconfont">&#xe63f;</van-icon>
        </van-col>
     </van-row> 
     <!-- 退出弹框 -->
      
  </div>
</template>

<script>
import Vue from 'vue'
import { Col, Row } from 'vant';
import { Dialog } from 'vant';

Vue.use(Dialog);
Vue.use(Col);
Vue.use(Row);
export default {
  name:'setting',
  data(){
     return{
       
     }
 },
 mounted(){
 console.log(1)
},
 methods:{
    logout(){
       
       Dialog.confirm({
       confirmButtonColor:'#69DAB6',
       title: '标题',
       message: '您确定要退出账号吗？',
      
     })
      .then(() => {
       this.$router.push({
            path: '/Login'
        });
     })
      .catch(() => {
    // on cancel
     });
   },

   // 关于我们
   About(){
      this.$router.push('/About')
   }
  }
}
</script>

<style scoped>

.setting{
  width: 100%;
  padding-top:75px ;
}
.sethead{
   position: relative;
   width: 347px;
   height: 118px;
   background: url('../assets/image/setting.png') no-repeat;
   background-size: 100% 100%;
   margin: 0 auto;
   margin-bottom: 60px;
   padding-top:15px;
}
.headeset .van-col--9{
   padding: 15px 10px;
}
.headeset .van-col--15{
   text-align: left;
}
.beijing{
    display:inline-block; 
    width:60px;
    height: 60px;
    background:url('../assets/image/beijing.png') no-repeat;
    background-size: 100% 100%;
    position: relative;
    vertical-align: middle;
    margin-right: 15px;
}
.beijing .setLogo{
    display:block;
    width:40px;
    height: 46px;
    background:url('../assets/image/WechatIMG1.png') no-repeat;
    background-size: 100% 100%;
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%,-50%);
 }
.source{
   display:inline-block; 
   vertical-align: middle;
   width: 19px;
   height: 19px;
   background: url('../assets/image/dianyuan.png') no-repeat;
   background-size: 100% 100%;
   }
.van-row .van-col{
    font-size: 20px;
    font-weight: 700;
    color:#C3C3C3;
}
.van-row{
    margin: 20px 0;
}
/* 弹框 */
.van-dialog{
    background-color: #252526;
    z-index: 2015;
}
.van-overlay{
 background-color: transparent !important;
}
</style>
