<template>
   <div class="about">
      <van-row class="aboutBlack">
        <van-col span="24">
             <div class="back" @click="aboutBack">
                 <span></span>
             </div>
        </van-col>
      </van-row>
      <van-row class="logoh5sapp">
        <van-col span="24">
             <div class="aboutimg">
                 <span></span>
             </div>
             <p>H5SAPP</p>
             <span>版本: r11.2.0429.20</span>
        </van-col>
      </van-row>
       <van-row class="edition">
         <van-col span="10" >
              <i></i>
              <span>新版本更新</span>
         </van-col>
        <van-col span="8" offset="6">
             <span>无新版本</span>
        </van-col>
     </van-row> 
     <van-row class="footText">
         <van-col span="24">
              <!-- <p>《软件许可证及服务协议》</p>   -->
              <span>零视技术（上海）有限公司</span>
         </van-col>
     </van-row> 
   </div>
</template>

<script>
export default {
  data(){
    return{

    }
  },
  methods:{
   aboutBack(){
    this.$router.push('/setting')
    }
  }
}

</script>

<style scoped>
 .aboutBlack .van-col{
   padding-left:15px ;
 }
 .back span{
    display:block;
    width: 15px;
    height: 17px;
    background: url('../assets/image/backs.png') no-repeat;
    background-size:100% 100%;
    margin-top: 12px;
}
 .about{
    width: 100%;
    height: 85%;
    box-sizing: border-box;
    position: relative;
 }
 .logoh5sapp .van-col{
    font-size: 20px;
 }
 .logoh5sapp .van-col--24 p{
    font-size: 20px;
    color: #C3C3C3;
    line-height: 0px;
    padding:0;
 }
  .logoh5sapp .van-col--24 span{
    font-size: 15px;
    color: #747475;
 }
.van-row .van-col{
    font-size: 20px;
    font-weight: 700;
    color:#C3C3C3;
}
/* gengxin */
.edition span{
    font-size: 15px;
    color: #B4B4B4;
}
.edition i{
    display: inline-block;
    width: 16px;
    height: 16px;
    background: url('../assets/image/gengxin.png') no-repeat;
    background-size:100% 100%;
    vertical-align: middle;
    margin-right: 5px;
}
.edition{
    margin-top:50px ;
}
.aboutimg{
    width: 68px;
    height: 68px;
    background: url('../assets/image/h5slogo.png') no-repeat;
    background-size:100% 100%;
    border-radius:17px;
    background-color: #3C3C42;
    margin: 0 auto;
    margin-top: 125px;
}

.footText{
    position: absolute;
    bottom:-35px;
    left: 50%;
    transform: translateX(-50%);
}
.footText .van-col--24 p {
    font-size: 12px;
    color: #478672;
    line-height: 0;
   
} 
.footText .van-col--24{
     margin: 0 auto;
}
.footText .van-col--24 span{
     font-size: 14px;
     color: #59595C;
}
</style>