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
                  <video class="h5video1" id="h5sVideo1" muted  webkit-playsinline playsinline style= "object-fit: fill;"></video>
                    <!-- 实时视频遮罩按钮 -->
                  <div class="overlay">
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
                </div>
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
                <van-swipe :loop="false" :width="140">
                  <van-swipe-item>
                      <video id="videoElement" width="130" height="100" autoplay  style="background-color:#000000" ></video>
                  </van-swipe-item>
                  <van-swipe-item>
                    <video id="videoElement" width="130"  height="100" autoplay  style="background-color:#000000" ></video>
                  </van-swipe-item>
                  <van-swipe-item>
                      <video id="videoElement" width="130" height="100" autoplay  style="background-color:#000000" ></video>
                  </van-swipe-item>
                  <van-swipe-item>
                      <video id="videoElement" width="130" height="100" autoplay  style="background-color:#000000" ></video>
                  </van-swipe-item>
                  <van-swipe-item>
                      <video id="videoElement" width="130" height="100" autoplay  style="background-color:#000000" ></video>
                  </van-swipe-item>
                  <van-swipe-item>
                      <video id="videoElement" width="130" height="100" autoplay  style="background-color:#000000" ></video>
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
                          <van-col span="16" class="favorites">
                              <p>海康枪机</p>
                              <span> 20200305  20：35</span>
                          </van-col>
                          <van-col span="1"></van-col>
                          <van-col span="7" class="videoElement">
                            <div class="favoritesplay">
                               <video class="h5video2" id="videoElement"  autoplay  style="background-color:#000000" webkit-playsinline playsinline></video>
                             </div>
                          </van-col>
                      </van-row>
                   </van-col>
               </van-row>
                <van-row type="flex" justify="end">
                   <van-col span="23"> 
                       <van-row>
                          <van-col span="16" class="favorites">
                              <p>海康枪机</p>
                              <span> 20200305  20：35</span>
                           </van-col>
                          <van-col span="1"></van-col>
                          <van-col span="7" class="videoElement">
                              <div class="favoritesplay">
                               <video class="h5video2" id="videoElement"  autoplay  style="background-color:#000000" webkit-playsinline playsinline></video>
                             </div>
                          </van-col>
                      </van-row>
                   </van-col>
               </van-row>
             </div>
           <!-- 资源列表 -->
           <van-row class="resource">
              <van-col span="11">资源列表</van-col>
              <van-col span="11" ></van-col>
              <van-col span="2">...</van-col>
           </van-row>
          
          <van-list v-model="loading" :finished="finished" finished-text="没有更多了" @load="onLoad">
                <van-cell>
                  <van-row>
                    <van-col span="8">INDEX</van-col>
                    <van-col span="8">NAME</van-col>
                    <van-col span="8">IP</van-col>
                  </van-row>
                </van-cell>
                <van-cell v-for="item in tableData" :key="item" >
                  <van-row>
                   <van-col span="8">{{item.strToken}} </van-col>
                   <van-col span="8">{{item.strName}}</van-col>
                   <van-col span="8">{{item.strSrcIpAddress}}</van-col>
                 </van-row>
                </van-cell>
          </van-list>
        
         
           <!--底部导航  -->
           <van-tabbar v-model="active"  active-color="#6BE7C3" inactive-color="#415D56" fixed>
              <van-tabbar-item>
                  <van-icon class-prefix="iconfont">&#xe8eb;</van-icon>
              </van-tabbar-item>
              <van-tabbar-item>
                 <van-icon class-prefix="iconfont">&#xe635;</van-icon>
              </van-tabbar-item>
              <van-tabbar-item> 
                 <van-icon class-prefix="iconfont">&#xe663;</van-icon>
              </van-tabbar-item>
              <van-tabbar-item icon="bell"></van-tabbar-item>
          </van-tabbar>
          <!-- <div class="footfixed">
            <div>
              <van-row class="footnav" type="flex" justify="space-around">
                  <van-col class="Highlight" id="livelightid" span="6">
                      <van-icon name="live"/>
                  </van-col>
                  <van-col span="6">
                      <van-icon name="video-o" />
                  </van-col>
                  <van-col span="6">
                      <van-icon name="tv-o" />
                  </van-col>
                  <van-col span="6">
                      <van-icon name="bell" />
                  </van-col>
              </van-row>
              </div>
            </div> -->
      
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
import { Cell, CellGroup } from 'vant';
import { Sticky } from 'vant';
import { Tabbar, TabbarItem } from 'vant';

Vue.use(Tabbar);
Vue.use(TabbarItem);
Vue.use(Sticky);
Vue.use(Cell);
Vue.use(CellGroup);
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
  name: 'liveview',
  data () {
    return {
      loading:false,
      finished:false,
      list: [],
      show:false,
      tableData:[],//资源列表
      imgList: [
        //  require('../assets/imag/luxiang2.png' ),
        //  require('../assets/imag/slices(2).png'),
        //  require('../assets/imag/icon2(2).png'),
      ],
      Useport: this.$store.state.Useport
    }
  } ,
  // 一进来就要更新的
mounted(){
  // var myVideo=document.getElementById("h5sVideo1")
  //      function playVid(){
  //        myVideo.play()
  //      }
  //      function pauseVid(){
  //        myVideo.pause()
  //      }
      // $(document).ready(function(){
      console.log(platform.name);
      console.log(platform.product);
      console.log(platform.os.family)
      console.log(window.location.host)
      
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
          host:this.Useport.ip+":"+this.Useport.port, //'localhost:8080'
          rootpath:'/', // '/'
          token:strToken,
          streamprofile: strStream, // {string} - stream profile, main/sub or other predefine transcoding profile
          hlsver:'v1', //v1 is for ts, v2 is for fmp4
          session:'c1782caf-b670-42d8-ba90-2244d0b0ee83', //session got from login
          consolelog: 'true' // 'true' or 'false' enable/disable console.log
        };
        
        var v1 = new H5sPlayerWS(conf1);
        // var v1 = new H5sPlayerRTC(conf1);
        console.log(v1);
        // if (GetURLParameter("autoplay") != undefined)
        // {
          v1.connect();
        // $('#playpause1').fadeOut();
        // }
        // $('#h5sVideo1').get(0).onplay = function() {
	      //   	console.log("The video has started to play");
	      //  };
       
      //  $('#h5sVideo1').parent().click(function () {
	    //  	if($(this).children(".h5video1").get(0).paused){
			//       if(v1 != null)
			//   {
				    // v1.disconnect();
				    // delete v1;
				    //  v1 = null;
		   	// }
      // v1 = new H5sPlayerWS(conf1);
			//   console.log(v1);
		  // 	v1.connect();
			
			// $(this).children(".playpause").fadeOut();
		// }else{
		// 	v1.disconnect();
			// delete v1; 
	// 		v1 = null;
	// 		$(this).children(".h5video1").get(0).pause();
	// 		$(this).children(".playpause").fadeIn();
  //   }
  // })
  // })
  // 获取当前页面的URL
  // 最近浏览
   var Url= window.location.href
   console.log(Url)
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
   },
  
  //资源列表
  onLoad() {
       var root = process.env.API_ROOT;
         console.log(root)
        var wsroot = process.env.WS_HOST_ROOT;
        console.log(wsroot)
        if (root == undefined){
            root ="http://"+this.Useport.ip+":"+this.Useport.port;
         }
        if (wsroot == undefined)
        {
            wsroot = this.Useport.ip+":"+this.Useport.port;
            
        }
        //url
        var url ="http://"+this.Useport.ip+":"+this.Useport.port+ "/api/v1/GetSrc?session="+ this.$store.state.token;
        this.$http.get(url).then(result=>{ 
           console.log("全部设备数据",result)
           if(result.status==200){
            
            this.tableData=result.data.src 
            console.log(this.tableData) 
            // for (let i = 0; i < 10; i++) {
            //   this.list.push(this.tableData3.length + 1);
            // }

          // 加载状态结束
          this.loading = false;

          // 数据全部加载完成
          if (this.tableData.length) {
            this.finished = true;
          }
        }
        }).catch()
  
    }
  }
}

</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style  scoped>
html{
height: 100%;
background-color: #252527;
} 
body{
width: 100%;
height: 100%;
padding:0;
margin: 0;
background-color: #252527;
}
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

/* 字体图标 */
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
.iconfont-extra::before {
  content: '\e626';
}

.livecontent{
  padding:10px;
  height:100%;
  background-color: #252527;
  padding-bottom: 64px;
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
   font-size:22px;
   line-height: 55px;
}
.liveinfo .livespan{
  color: #6BE7C3;
  /* font-size:46px; */
}
.van-search__content{
  background-color: #403F46;
  /* height: 58px; */
}
.van-search{
  padding:0;
 }
 .van-search .van-field__body {
   height: 30px;
 }
.liveserch .van-cell{
  /* line-height: 49px; */
  /* font-size: 26px; */
  color: #6BE7C3;
}
.flexvideo{
	width: 100%;
  /* height:422px; */
  position:relative;
  margin-top: 24px;
} 
.flexvideo .h5videodiv1 .h5video1{
  border: none;
  background-color:none;
}
.overlay{
  width: 100%;
  position: absolute !important;
  left: 0;
  bottom:77px;
 }

.van-overlay{
  position: absolute !important;
  width: 100%;
  height:70px;
  /* background-color: rgb(240, 20, 20); */
}

.van-overlay .van-row{
  margin-top:22px;
  padding: 0 10px;
  padding-left: 24px;
}
.van-overlay .van-icon{
  padding-right:14px;
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
  height: 90px;
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

.resource  .van-col{
  margin: 20px 0;
}
.van-col{
 
  font-size:17px;
  font-weight: 600;
  color: 10px ;
}
.Collection .favorites p{
   line-height: 0px;
   font-size: 15px;
   text-indent:0;
}
.Collection .favorites span{
  color: #706F74;
  font-size: 15px;
}
.Collection .favorites{
  padding-top: 10px;
}
.Collection .videoElement{
   height:78px;
   position: relative;
}
.Collection .videoElement .favoritesplay{
  height:100%;
  width:100%px;
  position:absolute;
  right: 0;
  top: -4px;
  }
.Collection .videoElement .favoritesplay .h5video2{
  width: 100%;
  height: 100%;
}
.van-col--23{
  width: 97.833333%;
  margin-top:25px;
   padding-left: 17px;
   height: 70px;
   background-color: rgb(56, 53, 53);
}

.van-swipe{
  margin-top: 15px;
  height: 130px;
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
/* 资源列表 */
.van-list{
  padding-bottom:64px;
}
.van-list  .van-cell {
  background-color:#252526;
  
}
.van-list .van-cell .van-col--8{
  color:#C3C3C3;
  font-size: 12px;
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
.van-tabbar{
  border: none;
  height: 60px;
  background-color: rgba(0, 0, 0, 0.4);
}
.van-tabbar-item{
  background-color: rgba(0, 0, 0, 0.4);
 border: none;
}
.van-tabbar-item__icon {
  margin-bottom: 1px;
  font-size: 20px;
}

</style>
