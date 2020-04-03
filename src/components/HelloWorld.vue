<template>
   <div class="livecontent">
        <!-- 头部 -->
        <div class="liveheader"></div>
        <div class="liveinfo w">
            <div class="live-h">
                  <span class="livespan">实时</span>视频
            </div>
            <div class="liveserch">
                <van-search v-model="value" shape="round" background="#252526" placeholder="请查找相关设备"/>
            </div>
          <!-- 视频播放部分 -->
            <div class="flexvideo" id="videoPanel"  @click="showvideo">
                <div class="h5videodiv1">
                  <video class="h5video1" id="h5sVideo1"  autoplay webkit-playsinline playsinline style= "object-fit: fill;"></video>
                </div>
                <!-- 实时视频遮罩按钮 -->
                <van-overlay :show="show">
                    <van-row>
                      <van-col span="15">
                          <van-icon name="expand-o"/>
                          <van-icon name="star-o" />
                          <van-icon name="volume-o"/>
                          <van-button size="mini">标清</van-button>
                      </van-col>
                      <van-col span="9"  offset="">
                        <van-icon name="wap-nav" />
                        <van-icon name="chat-o" />
                      </van-col>
                    </van-row>
                </van-overlay>
            </div>
                <!--录像 抓拍 云台 按扭  -->
             <div class="liveplaybutton">
                 <van-row gutter="20"> 
                    <van-col span="8"><i class="imag1"></i></van-col>
                    <van-col span="8"><i class="imag2"></i></van-col>
                    <van-col span="8"><i class="imag3"></i></van-col>
                 </van-row>
            </div>
            
       
             <!-- 最近浏览 -->
            <div class="Recentlybrowse">
                <van-row>
                  <van-col span="11">最近浏览</van-col> 
                  <van-col span="11"></van-col>
                  <van-col span="2">...</van-col>
                </van-row>
                <!-- 最近浏览轮播图 -->
                <van-swipe :loop="false" :width="300">
                  <van-swipe-item>
                      <video id="videoElement" width="573" height="325" autoplay  style="background-color:#000000" ></video>
                  </van-swipe-item>
                  <van-swipe-item>
                    <video id="videoElement" width="573" height="325" autoplay  style="background-color:#000000" ></video>
                  </van-swipe-item>
                  <van-swipe-item>
                      <video id="videoElement" width="573" height="325" autoplay  style="background-color:#000000" ></video>
                  </van-swipe-item>
                  <van-swipe-item>
                      <video id="videoElement" width="573" height="325" autoplay  style="background-color:#000000" ></video>
                  </van-swipe-item>
                  <van-swipe-item>
                      <video id="videoElement" width="573" height="325" autoplay  style="background-color:#000000" ></video>
                  </van-swipe-item>
                  <van-swipe-item>
                      <video id="videoElement" width="573" height="325" autoplay  style="background-color:#000000" ></video>
                  </van-swipe-item>
                </van-swipe>
            </div>
            <!-- 收藏夹 -->
            <van-row>
              <van-col span="11">收藏夹</van-col>
              <van-col span="11"></van-col>
              <van-col span="2">...</van-col>
            </van-row>
            <div class="Collection">
               <van-row type="flex" justify="end">
                   <van-col span="23"> 
                       <van-row>
                          <van-col span="18" >
                              <p>海康枪机</p>
                              20200305  20：35
                          </van-col>
                          <van-col span="2"></van-col>
                          <van-col span="4" >
                             <!-- <video id="videoElement"  autoplay  style="background-color:#000000" ></video> -->
                          </van-col>
                      </van-row>
                   </van-col>
               </van-row>
                <van-row type="flex" justify="end">
                   <van-col span="23"> 
                       <van-row>
                          <van-col span="18" >
                              <p>海康枪机</p>
                              <p> 20200305  20：35</p>
                           </van-col>
                          <van-col span="2"></van-col>
                          <van-col span="4" >
                             <!-- <video id="videoElement"  autoplay  style="background-color:#000000" ></video> -->
                          </van-col>
                      </van-row>
                   </van-col>
               </van-row>
             </div>
           <!-- 资源列表 -->
           <van-row>
              <van-col span="11">资源列表</van-col>
              <van-col span="11"></van-col>
              <van-col span="2">...</van-col>
           </van-row>
           <van-list v-model="loading" :finished="finished" finished-text="没有更多了" @load="onLoad">
              <van-cell v-for="item in list" :key="item" :title="item" />
           </van-list>
           <!--底部导航  -->
           <van-grid :gutter="10" square> 
             <van-grid-item icon="photo-o" text="文字" />
             <van-grid-item icon="photo-o" text="文字"/>
             <van-grid-item icon="photo-o" text="文字"/>
             <van-grid-item icon="photo-o" text="文字"/>
           </van-grid>
      </div>
	 </div>
</template>
sc
<script>
import '../assets/js/jquery-3.1.1.js'
// import '../assets/js/bootstrap.js'
import '../assets/js/adapter.js'
import '../assets/js/platform.js'
import '../assets/js/h5splayer.js'
import '../assets/js/h5splayerhelper.js'
import '../assets/css/h5splayer.css'
import {H5siOS,H5sPlayerCreate} from '../assets/js/h5splayerhelper.js'
import {H5sPlayerWS,H5sPlayerHls,H5sPlayerRTC} from '../assets/js/h5splayer.js'
import $ from 'jquery'

import Vue from 'vue'
import { Search } from 'vant';
import { Image } from 'vant';
import { Overlay } from 'vant';
import { Col, Row } from 'vant';
import { Swipe, SwipeItem } from 'vant';
import { Grid, GridItem } from 'vant';
import { List } from 'vant';
import { Button } from 'vant';
import { Icon } from 'vant';

Vue.use(Icon);
Vue.use(Button);
Vue.use(List);
Vue.use(Grid);
Vue.use(GridItem);
Vue.use(Swipe);
Vue.use(SwipeItem);
Vue.use(Col);
Vue.use(Row);
Vue.use(Overlay);
Vue.use(Col);
Vue.use(Image);
Vue.use(Search);
//  import "@static/css"
// import { NavBar } from 'vant';
export default {
  name: 'HelloWorld',
  data () {
    return {
      list: [
        {index:'1',name:"海康枪击",IP:'192.168.01'}
      ],
     show:false,
     imgList: [
        //  require('../assets/imag/luxiang2.png' ),
        //  require('../assets/imag/slices(2).png'),
        //  require('../assets/imag/icon2(2).png'),
      ],
    }
  } ,
  // 一进来就要更新的
mounted(){
    // $(document).ready(function(){
      console.log(platform.name);
      console.log(platform.product);
      console.log(platform.os.family)
      // if (H5siOS() === true|| H5sSafariBrowser() === true)
	    //    {
		  //      $('#h5sVideo1').prop("controls", true);
      //    }
        var strToken;
        strToken = "device1--33"
       if (strToken === undefined)
	       {
		    strToken = 'token1';
	       }
        
        var strStream;
	      // strStream = GetURLParameter("stream");
	    //  if (strStream === undefined)
	    //    {
		     strStream = 'main';
        //  }
  
       var conf1 = {
          videoid:'h5sVideo1',
          protocol: 'http:', //'http:' or 'https:'
          host: 'localhost:8080', //'localhost:8080'
          rootpath:'/', // '/'
          token:strToken,
          streamprofile: strStream, // {string} - stream profile, main/sub or other predefine transcoding profile
          hlsver:'v1', //v1 is for ts, v2 is for fmp4
          session:'c1782caf-b670-42d8-ba90-2244d0b0ee83', //session got from login
          consolelog: 'true' // 'true' or 'false' enable/disable console.log
        };
          
        var v1 = new H5sPlayerRTC(conf1);
        console.log(v1);
        // v1.connect();
      
        // if (GetURLParameter("autoplay") != undefined)
        // {
          v1.connect();
          // $('#playpause1').fadeOut();
        // }
       
    //    $('#h5sVideo1').get(0).onplay = function() {
	  //   	console.log("The video has started to play");
	  //  };
       
       $('#h5sVideo1').parent().click(function () {
	     	if($(this).children(".h5video1").get(0).paused){
			      if(v1 != null)
			  {
				    v1.disconnect();
				    // delete v1;
				     v1 = null;
		   	}

			 v1 = new H5sPlayerRTC(conf1);
			  console.log(v1);
		  	v1.connect();
			
			$(this).children(".playpause").fadeOut();
		}else{
			v1.disconnect();
			// delete v1; 
			v1 = null;
			$(this).children(".h5video1").get(0).pause();
			$(this).children(".playpause").fadeIn();
    }
  })
  // })
 },
 
// 方法
methods:{
  
  //实时视频遮罩层显示和隐藏
   showvideo(){
     if(this.show===false){
       this.show=true
     }else{
         this.show=false
     }
   }
  }
}

</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style  scoped>
h1, h2 {
  font-weight: normal;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
body{
padding:0;
margin: 0;
}
.livecontent{
  padding:10px;
  height: 2000px;
  background-color: #252527;
 
}
.liveheader{
    /* height: 20px; */
    /* background-color: pink; */
  }
.liveinfo{
  height: 1000px;
  /* background-color: rgb(17, 68, 83); */
 }
.liveinfo{
 height:74px;
 font-size: 30px;
 font-weight:600;
 text-align: left;
 color: #E7E6E6;
}
.live-h{
   font-size:46px;
   line-height: 102px;
   margin: 0 32px;
}
.liveinfo .livespan{
  color: #6BE7C3;
  font-size:46px;
}
.van-search__content{
  background-color: #403F46;
  height: 58px;
  margin:0 32px;
}
.van-search{
  padding:0;
}
.liveserch .van-cell{
  line-height: 49px;
  font-size: 26px;
  color: #6BE7C3;
}
.flexvideo{
	width: 100%;
  height:422px;
  position:relative;
  margin-top: 34px;
} 
.flexvideo .h5videodiv1 .h5video1{
  border: none;
  background-color:none;
}

.van-overlay{
  position: absolute;
  top:327px;
  left: 0;
  width: 100%;
  height:95px;
  /* background-color: rgb(240, 20, 20); */
}
.van-overlay .van-row{
  margin-top:28px;
  padding: 0 10px;
  padding-left: 24px;
}
.van-overlay .van-icon{
  padding-right:25px;
   vertical-align: middle;
}
.van-overlay .van-row  .van-button--mini{
  min-width: 0;
  font-size: 20px;
  color: #E7E6E6;
  background-color: #252526;
  line-height: 0;
  border: none;
 
}
.van-overlay .van-row  .van-col--9  {
  text-align: right;
  width:31.5%
}
.van-overlay .van-row  .van-col--15{
  width:68.5%
}
.van-overlay .van-row  .van-col--9 .van-icon{
  padding: 0;
  margin-right:14px;
  vertical-align: middle;
}

.liveplaybutton .van-row .van-col--8{
  /* width: 30%; */
  height: 148px;
  position: relative;
}
.liveplaybutton .van-row .van-col--8 i{
  width: 100%;
  height: 100px;
  position: absolute;
  top: 50%;
  /* left: 0; */
 margin-top:-50px;
}

.van-row{
  padding:0 32px;
}
.van-col{
 
  font-size:32px;
  font-weight: 600;
  color: 10px;
}
.Collection{
 
}
.van-col--23{
  width: 97.833333%;
  margin:25px 0;
   padding-left: 10px;
   height: 187px;
   background-color: rgb(56, 53, 53);
}
.van-col--18{
  text-indent: 20px;
}
.van-col--18>p{
  line-height: 0;
}
.van-swipe{
  margin-top: 30px;
}
.h5videoh{
  border: 1px solid #f44336 !important;
  box-sizing: border-box;
  width: 748px;
  height: 422px;
  -moz-box-sizing:border-box;
  -webkit-box-sizing:border-box;
}
.van-grid-item__content{
  background-color:#252526 !important;

}
.imag1{
  background:url('../assets/luxiang3.png') no-repeat;
  background-size: 100% 100%;
}

.imag2{
  background:url('../assets/icon2 (3).png') no-repeat;
  background-size: 100% 100%;
}
.imag3{
  background:url('../assets/slices (3).png') no-repeat;
  background-size: 100% 100%;
  /* background-size: cover; */

} 
/* .imag5 .van-button--default{ */
   /* background:url('../assets/luxiang3.png') no-repeat; */
/* } */
/* .w{
  /* width: 375px;
  margin: 0 auto; */
/* }  */
</style>
