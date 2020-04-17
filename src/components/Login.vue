<template>
   <div class="login">
       
     <van-row type="flex" class="img">
            <van-col span="24">
                <img src="../assets/mipmap-mdpi3.png" alt="">
            </van-col>
      </van-row>

     
       <van-row type="flex" justify="center" class="formbgc">
            <van-col span="2"></van-col>
            <van-col span="20" class="formimg">
                <img src="../assets/mipmap-hdpi1.png" alt="">
                 <!-- 表单 -->
                <van-form @submit="onSubmit">
                    <van-row type="flex" justify="center" class="line">
                        <van-col span="3"></van-col>
                        <van-col span="18">
                            <van-field  placeholder="请输入用户名" name="用户名" v-model="Useport.user" type="text" left-icon="manager"  :rules="[{ required: true, message: '请填写用户名' }]"/>
                            <van-field  placeholder="请输入密码"  v-model="Useport.psw"  name="密码" type="password"   left-icon="lock" :rules="[{ required: true, message: '请填写密码' }]"/>
                        </van-col>
                        <van-col span="3"></van-col>
                    </van-row>
                    <van-row class="serveconfig">
                        <van-col span="3"></van-col>
                        <van-col span="18">服务器配置</van-col>
                        <van-col span="3"></van-col>
                    </van-row>
                    <van-row type="flex" justify="center" class="line">
                        <van-col span="3"></van-col>
                        <van-col span="18">
                             <van-field  placeholder="请输入Ip"  v-model="Useport.ip"  name="服务器" type="text"   left-icon="stop" :rules="[{ required: true, message: '请填写' }]"/>
                            <van-field  placeholder="请输入端口号" name="服务器端口" v-model="Useport.port" type="text" left-icon="stop"  :rules="[{ required: true, message: '请填写端口' }]"/>
                        </van-col>
                        <van-col span="3"></van-col>
                    </van-row>
                    <van-row type="flex" justify="center" class="btns">
                            <van-col span="3"></van-col>
                            <van-col span="18">
                                <van-button round block class="jumpBtn" type="primary"  size="large" native-type="submit">
                                    <van-icon name="success"/>
                                </van-button>
                            </van-col>
                            <van-col span="3"></van-col>
                        </van-row>
                    </van-form>
            </van-col>
            <van-col span="2"></van-col>
        </van-row>
     </div>
</template>

<script>
// import '../assets/js/jQuery.md5.js'
import Vue from 'vue'
import * as types from '@/store/types'
import $ from 'jquery'
import '../assets/js/jQuery.md5'
import { NavBar } from 'vant';
import { Field } from 'vant';
import { Cell, CellGroup } from 'vant';
import { Col, Row } from 'vant';
import { Button } from 'vant';
import { Form } from 'vant';

Vue.use(Form);
Vue.use(Button);
Vue.use(Col);
Vue.use(Row);
Vue.use(Cell);
Vue.use(CellGroup);
Vue.use(Field);
Vue.use(NavBar);
export default {
 name: 'Login',
 data(){
     return{
     callport:this.$store.state.callport,//使用端口号//使用端口号
     Useport:[{
            ip:'',
            port:'',
            user:'',
            psw:''
          }],//端口号
      }
  },
  computed:{
        count(){
            return this.$store.state.Useport;
        }
    },

   mounted(){
         console.log(this.$store.state.Useport)
    },
  methods: {
    // 提交触发表单
    onSubmit() {
            console.log(this.$store.state.Useport.ip)
            this.$store.commit(types.USEPORTIP, this.Useport.ip)
            this.$store.commit(types.USEPORTPORT, this.Useport.port);
            this.$store.commit(types.USEPORTUSER, this.Useport.user);
            this.$store.commit(types.USEPORTPSW, this.Useport.psw);
           let _this =this;
           var url = "http://"+this.Useport.ip+":"+this.Useport.port+"/"
           this.callport=url;
           this.$store.commit(types.USEPORT, url);
           var baseurl = this.callport + "/api/v1/Login?user=" +_this.Useport.user + "&password=" + $.md5(_this. Useport.psw);
        //   return false
            this.$http.get(baseurl).then(result => {
               console.log(result)
            if(result.status == 200){
            var data = result.data.src; 
            this.$router.push('/liveview');
             _this.$store.commit(types.LOGIN, data['strSession']);
             this.$router.push('/liveview');
              console.log(result) 
        }

  }).catch()
  },
  },
}
</script>

<style scoped>
 .login{
     height: 100%;
     background-color: #fff;
     background:url('../assets/mipmap-hdpi.png') no-repeat;
     background-size:100% 100%;
     position: relative;
}
  .img .van-col--22 img{
    width: 100%;
    height: 100%;
    /* height: 830px; */
  }
  .van-nav-bar{
      background-color: #07c160;
  }
  .img .van-col{
      text-align: left;
      padding-left:20px;
      margin: 20px 0;
  }
  .btns{
      margin: 10px 0;
  }
  .van-cell-group{
     background-color: rgba(61, 57, 57, 0.2);
  }


  .formbgc.van-row--justify-center{
    position: relative;
    
  }
  .formimg{
      position: relative;
      
  }
  .formbgc.van-row--justify-center img{
      width: 100%;
      height: 100%;
  }
  .van-form{
      position: absolute;
      top: 50%;
      left: 50%;
      transform: translate(-50% ,-50%);
      width: 100%;
      /* margin:30px 0; */
      /* height: 834px; */
  }
  .van-form .van-row .van-cell-group{
      margin-bottom: 10px;
      width: 100%;
  }
  .formbgc.van-row--justify-center .van-cell {
      border: none;
      color: aquamarine;
      border-radius:10px;
      margin-bottom: 10px;
      background-color: #616161;  
    
  }
  .serveconfig{
      color: #C7C7C9;
      font-size:15px;
      text-align: left;
      padding: 12px 0;

  }
  .van-field__control{
      
      color:yellow !important;
      background-color: #fff !important;
  }
.van-cell .van-cell__value--alone{
    color:yellow !important;
}
</style>