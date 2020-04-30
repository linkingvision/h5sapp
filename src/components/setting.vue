<template>
   <div class="setting">
      <div class="sethead">
           <van-row class="headeset">
              <van-col span="15">
                  <div class="beijing">
                     <span class="setLogo"></span>
                  </div>
                  <span>{{this.$store.state.Useport.user}}</span>
              </van-col>
              <van-col span="9" @click="logout">
                  <div class="source"></div>
                  <span>退出</span>
              </van-col>
           </van-row> 
      </div>
      <van-row>
         <van-col span="10">
              <i class="sysem"></i>
              <span>系统设置</span>
         </van-col>
        <van-col span="8" offset="6" @click="systemconfig">
            <i class="trim"></i>
        </van-col>
     </van-row> 
     <van-row>
         <van-col span="10">
              <i class="help"></i>
              <span>帮助中心</span>
         </van-col>
        <van-col span="8" offset="6">
             <i class="trim"></i>
        </van-col>
     </van-row> 
     <van-row>
         <van-col span="10">
              <i class="about"></i>
              <span>关于我们</span>
         </van-col>
        <van-col span="8" offset="6" @click="About">
             <i class="trim"></i>
        </van-col>
     </van-row> 
     <!-- 退出弹框 -->
     <el-dialog
         center
         :visible.sync="dialogVisible"
         width="75%"
        >
         <span class="text">
            <i class="title"></i>
            您确当要退出账号吗？
         </span>
         <span class="titlebutton">
            <el-button @click="dialogVisible = false">取 消</el-button>
            <el-button type="primary" @click="Confirm">确 定</el-button>
         </span>
    </el-dialog>
  </div>
</template>

<script>
import Vue from 'vue'
import { Col, Row } from 'vant';
import { Dialog } from 'vant';
import { Popup } from 'vant';

Vue.use(Popup);
Vue.use(Dialog);
Vue.use(Col);
Vue.use(Row);
export default {
  name:'setting',
  data(){
     return{
       dialogVisible:false
     }
 },
 mounted(){
 console.log(1)
},
 methods:{
 logout(){
   this.dialogVisible=true
},
 Confirm(){
    this.dialogVisible=true
    this.$router.push('/Login')
},
// 关于我们
 About(){
   this.$router.push('/About')
  },
 systemconfig(){
    console.log(1)
   // 判断是安卓还是iOS
   let u = navigator.userAgent;
   console.log(u)
   if (u.indexOf('Android') > -1 || u.indexOf('Linux') > -1) {//安卓手机
      this.$router.push('/settconfig/Androidconfig')
   } else if (u.indexOf('iPhone') > -1) {//苹果手机
      this.$router.push('/settconfig/iosconfig')
   }
   // this.$router.push('/settconfig/Androidconfig')
 }
//  -------------
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
   padding: 10px 10px;
   padding-top:18px ;
}
.headeset .van-col--15{
   text-align: left;
}
.headeset .van-col--15 span{
   font-size: 18px;
} 
.beijing{
    display:inline-block; 
    width:60px;
    height: 60px;
    background:url('../assets/image/h5slogo.png') no-repeat;
    background-size: 100% 100%;
    position: relative;
    vertical-align: middle;
    margin-right: 15px;
    border-radius: 30px;
}
/* .beijing .setLogo{
    display:block;
    width:40px;
    height: 46px;
    background:url('../assets/image/h5slogo.png') no-repeat;
    background-size: 100% 100%;
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%,-50%);
 } */
.source{
   display:inline-block; 
   vertical-align: middle;
   width: 19px;
   height: 19px;
   background: url('../assets/image/dianyuan.png') no-repeat;
   background-size: 100% 100%;
   margin-right:5px;
   }
.van-row .van-col{
    font-size: 15px;
    font-weight: 700;
    color:#C3C3C3;
}
.van-row{
    margin: 20px 0;
}
/* 弹框 */
.el-dialog{
   height: 0px;
}
.footer{
   height:50px ;
}
 /* 字体前面的图标 */
 .van-row .van-col .sysem{
    display: inline-block;
    width: 16px;
    height: 16px;
    background: url('../assets/image/system.png') no-repeat;
    background-size:100% 100%;
    vertical-align: middle;
    margin-right: 5px;
 }
  .van-row .van-col .help{
    display: inline-block;
    width: 16px;
    height: 16px;
    background: url('../assets/image/helop.png') no-repeat;
    background-size:100% 100%;
    vertical-align: middle;
    margin-right: 5px;
 }
  .van-row .van-col .about{
    display: inline-block;
    width: 16px;
    height: 16px;
    background: url('../assets/image/about.png') no-repeat;
    background-size:100% 100%;
    vertical-align: middle;
    margin-right: 5px;
 }
   .van-row .van-col .trim{
    display: inline-block;
    width: 10px;
    height: 10px;
    background: url('../assets/image/triangle.png') no-repeat;
    background-size:100% 100%;
    vertical-align: middle;
    margin-right: 5px;
 }
 </style>
 <style>
   .el-dialog__header{
    height: 0px;
    padding: 0px !important;
}
   .el-dialog--center .el-dialog__footer{
    height: 140px;
}
   .dialog-footer{
    height: 20px !important;
}
   .footer{
    height:50px ;
}
   .el-dialog__body .text{
    display:block;
    height: 75px;
    text-align: center;
    color: #C3C3C3;
}
   .el-dialog__body .text .title{
    display:block;
    height: 18px;
    width: 30px;
    background:url('../assets/image/titleplay.png') no-repeat;
    background-size:100% 100%;
    margin: 0 auto;
    margin-bottom: 20px;
}
   .el-dialog__body{
    background-color: #252526;
    border-radius:10px ;
}
   .el-dialog{
    border-radius:12px!important;
    border: none !important;
}
   .titlebutton{
     display:inline-block !important;
     position: relative;
     left: 50%;
     transform: translateX(-50%);
   }
   .el-button{
    margin-top:10px !important;
    width: 62px;
    height: 25px;
    line-height: 0 !important;
    border-radius:12px!important;
}
.el-button--default{
    background-color: #3F3F46 !important;
    border: none !important;
    margin-right: 20px !important;
}
.el-button--primary{
    background-color: #69DAB6!important;
    border: none !important;
}
.el-dialog__wrapper{
   top: 107px !important;
}
 </style>
