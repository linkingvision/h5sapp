<template>
   <div class="login">
       
     <van-row type="flex" class="img">
            <van-col span="24" class="header">
                 <h1>H5SAPP</h1>
                 <P>您可以在这里完成快速登录</P>
                <!-- <img src="../assets/mipmap-mdpi3.png" alt=""> -->
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
                            <van-field  placeholder="请输入用户名" name="用户名" v-model="Useport.user" type="text" left-icon="manager" :value="Useport.user"  :rules="[{ required: true, message: '请填写用户名' }]"/>
                            <van-field  placeholder="请输入密码"  v-model="Useport.psw"  name="密码" type="password"   left-icon="lock" :rules="[{ required: true, message: '请填写密码' }]"/>
                            <span></span>
                        </van-col>
                        <van-col span="3"></van-col>
                    </van-row>
                    <van-row class="serveconfig">
                        <van-col span="3"></van-col>
                        <van-col span="18">
                             <van-collapse v-model="activeNames" :border='false'>
                                  <van-collapse-item title="请输入服务器配置" name="1" :border='false' >
                                       <van-row>
                                          <van-col span="15" class="dividerleft">
                                             <van-field :border='false'  placeholder="请填写服务地址"  v-model="Useport.ip"  name="服务器" type="text"   left-icon="stop" :rules="[{ required: true, message: '请填写' }]"/>
                                          </van-col>
                                          <van-col span="9" class="divider" >
                                              <van-field :border='false'  placeholder="服务端口" name="服务器端口" v-model="Useport.port" type="text"   :rules="[{ required: true, message: '请填写端口' }]"/>
                                          </van-col>
                                       </van-row>
                                 </van-collapse-item>
                             </van-collapse>
                        </van-col>
                        <van-col span="3"></van-col>
                    </van-row>
                    <van-row type="flex" justify="center" class="btns">
                            <van-col span="3"></van-col>
                            <van-col span="18">
                                <van-checkbox v-model="checked" class="vanCheckbox" checked-color="#616161">记住用户名和密码</van-checkbox>
                            </van-col>
                            <van-col span="3"></van-col>
                    </van-row>
                    <van-row type="flex" justify="center" class="btn">
                            <van-col span="3"></van-col>
                            <van-col span="18" >
                                <van-button round block class="jumpBtn" id='jumpBtnid' type='primary'  size="large" native-type="submit">
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
import { Checkbox, CheckboxGroup } from 'vant';
import { DropdownMenu, DropdownItem } from 'vant';
import { Toast } from 'vant';
import { Collapse, CollapseItem } from 'vant';
import { Divider } from 'vant';

Vue.use(Divider);
Vue.use(Collapse);
Vue.use(CollapseItem);
Vue.use(Toast);
Vue.use(DropdownMenu);
Vue.use(DropdownItem);
Vue.use(Checkbox);
Vue.use(CheckboxGroup);
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
    checked: true,
    callport:this.$store.state.callport,//使用端口号//使用端口号
    value:'hah',
<<<<<<< HEAD
    session:'',
    activeNames:[''],
=======
>>>>>>> a3a9e2dd8c86c9ecaf4703b610150bf183769a31
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
  created(){
        // 在页面加载时从cookie获取登录信息
        // let account = this.getCookie("account")
        // let password = Base64.decode(this.getCookie("password"))
        // this.getCookie()
     this.getStorage()
  },
   mounted(){
//    this.getCookie()
   $('#drawpdown').hide()
    console.log(this.$store.state.Useport)
  if(this.Useport.ip !==''||this.Useport.port !==''){
      
    }
  },
  methods: {
    // 提交触发表单
    onSubmit() {
        // 保存账号
        let username=this.Useport.user
        // 保存的密码
        let password=this.Useport.psw
        // 保存的IP
        let Ip=this.Useport.ip
        // 保存的端口
        let Port=this.Useport.port
        //判断复选框是否被勾选 勾选则调用配置cookie方法
        if(this.checked==true){
          //传入账号名，密码，和保存天数3个参数
         this.setStorage(username,password,Ip,Port)
        //   this.setCookie(username,password,Ip,Port,7);
        }else{
        //   this.setCookie("","","","",-1);
          localStorage.clear('userName')
          this.checked=false
        }
        // console.log(this.$store.state.Useport.ip)
        this.$store.commit(types.USEPORTIP, this.Useport.ip)
        this.$store.commit(types.USEPORTPORT, this.Useport.port);
        this.$store.commit(types.USEPORTUSER, this.Useport.user);
        this.$store.commit(types.USEPORTPSW, this.Useport.psw);
      
        let _this =this;
        var url = "http://"+_this.Useport.ip+":"+_this.Useport.port+"/"
        this.callport=url;
        this.$store.commit(types.USEPORT, url);
        var baseurl = this.callport + "/api/v1/Login?user=" +_this.Useport.user + "&password=" + $.md5(_this. Useport.psw);
        //   return false
        this.$http.get(baseurl).then(result => {
            console.log(result)
            if(result.status == 200){
                var data = result.data;
                if (data.bStatus == true){
<<<<<<< HEAD
                  this.$store.commit(types.LOGIN, data["strSession"]);
                    // this.$store.state.token=data["strSession"];
                    console.log(data["strSession"])
=======
                    // this.$store.commit(types.LOGIN, data["strSession"]);
                    this.$store.state.token=data["strSession"];
                    console.log(data["strSession"],this.$store.state.token)
>>>>>>> a3a9e2dd8c86c9ecaf4703b610150bf183769a31
                    // return false;
                    _this.$router.push('/liveview');
                    Toast.success('登录成功');
                }
            }else{
                Toast.fail('登录失败');
                //   this.setCookie("","","","",-1);
                localStorage.clear('userName')
            }

        }).catch()
    },
<<<<<<< HEAD
  // 点击复选款
  //设置cookie
=======
// // 点击复选款
//  doRemember(event){
//     let rememberChecked =this.checked
//     this.checked=!rememberChecked
//   },
   //设置cookie
>>>>>>> a3a9e2dd8c86c9ecaf4703b610150bf183769a31
 setCookie(c_name,c_pwd,c_ip,c_port,exdays) {
  var exdate=new Date();//获取时间
  exdate.setTime(exdate.getTime() + 24*60*60*1000*exdays);//保存的天数
     console.log(1)
  //字符串拼接cookie
  window.document.cookie="userName"+ "=" +c_name+";path=/;expires="+exdate.toGMTString();
  window.document.cookie="userPwd"+"="+c_pwd+";path=/;expires="+exdate.toGMTString();
  window.document.cookie="userIp"+ "=" +c_ip+";path=/;expires="+exdate.toGMTString();
  window.document.cookie="userPort"+ "=" +c_port+";path=/;expires="+exdate.toGMTString();
  },
 
 //读取cookie

// 存储localstorage
setStorage(username,password,Ip,Port){
    let loginfo=[ username, password, Ip, Port]
    localStorage.setItem("userName",JSON.stringify(loginfo))
},
// 取值
getStorage(){
 let login= JSON.parse(localStorage.getItem("userName"))
    console.log(login)
  if(login.length>0){
     for(var i=0;i<login.length;i++){
       this.Useport.user=login[0];
       this.Useport.psw=login[1]
       this.Useport.ip=login[2]
       this.Useport.port=login[3]
     }
  }
},
 getCookie() {
 if (document.cookie.length>0) {
   var arr=document.cookie.split('; ');//这里显示的格式需要切割一下自己可输出看下
   console.log(arr)
   for(var i=0;i<arr.length;i++){
    var arr2=arr[i].split('=');//再次切割
     console.log(arr2)
    //判断查找相对应的值\
    if(arr2[0]=="userName"){

     this.Useport.user=arr2[1];//保存到保存数据的地方
      console.log(this.Useport.user)
    }
     if(arr2[0]=='userPwd'){
     this.Useport.psw=arr2[1];
     console.log(this.Useport.psw)
    }
     if(arr2[0]=='userPort'){
     this.Useport.port=arr2[1];
     console.log(this.Useport.port)
    }
     if(arr2[0]=='userIp'){
     this.Useport.ip=arr2[1];
     console.log(this.Useport.ip)
    }
   }
  }
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
.header>h1{
   color:#C2C2C2 ;
   font-size:50px;
   line-height: 12px;
   font-weight: 700;
   text-indent: 10px;
}
.header>p{
   color: #B8B8B8;
   font-size: 15px;
   font-weight: 700;
   text-indent: 10px;
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

 .van-dropdown-menu{
      height: 100%;
      /* position: relative; */
       background-color: rgba(61, 57, 57, 0.2);
       border: none;
    
  }
<<<<<<< HEAD
  .dividerleft>.van-cell{
    padding: 8px 0;
  }
 .divider>.van-cell{
     border-left:1px solid #FFF ;
     padding-left:12px;
 }
 .van-collapse-item__content .van-cell{
    line-height: 18px;
   
}
.van-collapse-item__content {
    padding: 0;
}
 .van-divider{
     margin: 10px 0;
 }
=======
>>>>>>> a3a9e2dd8c86c9ecaf4703b610150bf183769a31
.el-dropdown-link {
    cursor: pointer;
    color: #409EFF;
  }
  .el-icon-arrow-down {
    font-size: 12px;
  }
  /* dropdown */
  .van-dropdown-menu__title--active{
      color: bisque;
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
  .van-col--18 .van-checkbox{
      font-size: 15px;
      color: #B8B8B8 !important;
      padding-left:15px;
  }
  .van-col--18 .van-checkbox .van-checkbox__label{
   color: #B8B8B8 !important;
}
.vanCheckbox{
   color: #B8B8B8 !important;
}

.van-checkbox__icon--checked .van-icon {
    color:aquamarine !important;
    /* background-color: #575757!important; */
    /* border: none; */
}
.van-checkbox__icon--round .van-icon{
    border: none; 
}
.van-form .van-row .van-cell-group{
      margin-bottom: 10px;
      width: 100%;
}
  .formbgc.van-row--justify-center .van-cell {
      color: aquamarine;
      /* margin-bottom: 10px; */
      /* background-color: #616161;   */
    
  }
  .van-cell{
      background-color:transparent !important;  
  }
 .serveconfig{
      color: #C7C7C9;
      font-size:15px;
      text-align: left;
      padding: 12px 0;

  }
  .hairline--top-bottom{
      border: none;
  }
  .van-collapse{
      border: none;
  }
 
  .van-col--18 .van-hairline--top-bottom .van-cell{
    background-color:transparent !important;   
  }
 .van-collapse .van-collapse-item {
     background-color:transparent !important;  
  }
 
  .van-field__control{
      
      color:yellow !important;
      background-color: #fff !important;
  }
.van-cell .van-cell__value--alone{
    color:yellow !important;
}
/* 按钮 */
 .van-button--block{
    width: 28%;
}
.btn{
    margin-top:20px ;
    
}
.btn .van-col-18{
    clear: both;
}
.jumpBtn{
    float:right;
}
.jumpBtnpry{
  background-color: #22483E;
}
.van-button--default{
    background-color: #22483E;
    border:none
}
</style>
<style>
.van-col--18  .van-cell{
    background-color:transparent !important;   
  }
  .van-collapse-item__wrapper{
      padding-left:15px ;
  }
.van-collapse .van-collapse-item {
     background-color:transparent !important;  
  }
.van-collapse-item__content{
      background-color: transparent;
      border-bottom:1px solid #FFFFFF;
      padding:0;
      padding-bottom:10px;
  }
.van-collapse{
      border:none !important;
  } 
.van-field__control{
    color:#fff !important;
}
.van-collapse .van-collapse-item{
    border: none;
}

.van-cell__title span{
   color: #C3C3C3;

}
/* .van-cell__title ,.van-cell__value{
      -webkit-box-flex: 0; 
      -webkit-flex: 0; 
      flex: 0 ; 
}  */
.van-checkbox__icon--checked .van-icon {
    color:aquamarine !important;
}
.van-checkbox span{
  color: #B8B8B8!important;
}

</style>