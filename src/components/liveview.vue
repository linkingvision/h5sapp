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
            <div class="flexvideo" id="videoPanel" >
                <div name='flex' style="position: relative;" class="videoColor" v-for="r in rows" :key="r" @click="showvideo">
                   <div class="palace" name="flex" v-for="c in cols" @contextmenu.prevent="stopVideo($event)" @click="videoClick(r,c,$event)" :key="c">
                        <v-liveplayer v-bind:id="'h'+r+c" :h5id="'h'+r+c" :rows="rows" :cols="cols" :h5videoid="'hvideo'+r+c" >
  
                        </v-liveplayer>
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
                  <!-- <video class="h5video1" id="h5sVideo1" muted  webkit-playsinline playsinline style= "object-fit: fill;"></video> -->
                    <!-- 实时视频遮罩按钮 -->
                  
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
                  <van-swipe-item v-for="(item, index) in viewHistory" :key="index" @click="history(item)">
                      <video :id="item.token" width="130" height="100" autoplay  style="background-color:#000000" ></video>
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
          
     
        <div id="device" >
          <div class="devicetoog">
              <div>设备</div>
              <div @click="devicetoog" class="iconfont deviceicon">&#xe747;</div> 
          </div>
           <el-tree
              :data="data"
              node-key="id"
              :filter-node-method="filterNode"
              ref="tree"
              highlight-current   
              @node-click="handleNodeClick"
              :props="defaultProps">
              <span slot-scope="{ node, data }" style="width:100%;">
                  <div style="width:100%;display: flex;justify-content: space-between;">
                      <span >
                          <span :class="data.iconclass" style="color:rgb(142, 132, 132);"></span>
                          <span :class="data.iconclass1" style="padding-left: 4px;">{{data.label}}</span>
                      </span>
                      <span :class="data.iconclass2" class="black" style=""></span>
                  </div>
              </span>
          </el-tree>
        </div>
        <div id="device1">
            <div class="devicetoog">
                <div>区域</div>
                <div @click="devicetoog1" class="iconfont  deviceicon">&#xe747;</div> 
             </div>

             <el-tree class="el_tree" 
                      node-key="strName" 
                      :default-expanded-keys="['root']" 
                      :data="camdata" 
                      :props="defaultProps1" 
                      @node-click="handleNodeClick">
                          <span slot-scope="{ node, data }" style="width:100%;">
                                  <span>
                                      <span class="mdi mdi-view-sequential fa-fw" style="color:rgb(142, 132, 132);"></span>
                                      <span :class="data.iconclass1" style="padding-left: 4px;">{{data.strName}}</span>
                                  </span>
                                  <div v-if="data.cam.length!=0">
                                      <el-tree class="el_tree1" :data="data.cam" :props="defaultProps1" @node-click="handleNodeClick1">
                                          <span slot-scope="{ node, data }">
                                              <div style="width:100%;display: flex;justify-content: space-between;">
                                                  <span >
                                                      <span :class="data.iconclass" style="color:rgb(142, 132, 132);"></span>
                                                      <span :class="data.iconclass1" style="padding-left: 4px;">{{data.strName}}</span>
                                                  </span>
                                                  <span :class="data.iconclass2" class="black" style=""></span>
                                              </div>
                                          </span>
                                      </el-tree>
                                 </div>
                        </span>
              </el-tree>
       </div>
     
                   <!-- 底部导航  -->
           <van-tabbar v-model="activefoot"  active-color="#6BE7C3" inactive-color="#415D56" fixed>
              <van-tabbar-item>
                  <van-icon class-prefix="iconfont2">&#xe62f;</van-icon>
              </van-tabbar-item>
              <van-tabbar-item>
                 <van-icon class-prefix="iconfont2" class="vanicon">&#xe634;</van-icon>
              </van-tabbar-item>
              <van-tabbar-item> 
                 <van-icon class-prefix="iconfont">&#xe663;</van-icon>
              </van-tabbar-item>
              <van-tabbar-item >
                  <van-icon class-prefix="iconfont2" >&#xe626;</van-icon>
              </van-tabbar-item>
          </van-tabbar>
 
      </div>
	 </div>
</template>

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
import Liveplayer from './liveplayer'

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
import { TreeSelect } from 'vant';
import { Sidebar, SidebarItem } from 'vant';
import { Area } from 'vant';

Vue.use(Area);
Vue.use(Sidebar);
Vue.use(SidebarItem);
Vue.use(TreeSelect);
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
  components: {
        'v-liveplayer': Liveplayer
    },
  data () {
    return {
      rc:13,
      selectCol: 1,
      selectRow: 1,
      proto: this.$store.state.rtc,
      rows: 2,
      cols: 2,
      loading:false,
      finished:false,
      list: [],
      show:false,
      tableData:[],//资源列表
      activeId: 1,
      activeIndex: 0,
      active: 0,
      items: [{ text: '摄像机',id:''}],
      items1:[{text:'ha',id:'',children: [{text:'主码流',id:''},{text:'辅码流',id:''}]}],
      items2:[{text:'摄像机',id:'',children: [{text:'主码流',id:''},{text:'辅码流',id:''}]}],
      Useport: this.$store.state.Useport,
      token:'',
      src:'',
      // h5handler:undefined,
      // videoid:'app',
      // 资源列表
      selectCol: 1,
      electRow: 1,
      data:[],
      camdata:[],
      defaultProps: {
          children: 'children',
          label: 'label',
          token:"token",
          iconclass:"iconclass"
      },
      defaultProps1: {
          children: 'node',
          label: 'strName',
          cam:"cam",
      },
      activefoot:'',
      value:'',
      viewHistory:[]
    }
  } ,
  // 一进来就要更新的
mounted(){
   console.log(this.viewHistory);
   this.$root.bus.$emit('liveplayproto',this.proto);
    console.log(platform.name);
    console.log(platform.product);
    console.log(platform.os.family)
    console.log(window.location.host)
    $("#device1").hide();
      
    this.loadDevice()
    this.Regional()
    this.loadtest()
   
  },
created(){
  this.viewHistory = JSON.parse(localStorage.getItem("viewHistory"))
  this. history()
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

videoClick(r, c, $event) {
      this.selectCol = c;
      this.selectRow = r;
       console.log($event);
      console.log(r, c);
        if ($($event.target).parent().hasClass('videoClickColor')) {
            $($event.target).parent().removeClass('videoClickColor');
        } else {
            $('#videoPanel div[class*="videoClickColor"]').removeClass('videoClickColor');
            $('#videoPanel>div').eq(r - 1).children('div').eq(c - 1).addClass('videoClickColor');
            //$('#videoPanel>div').eq(r - 1).children('div').eq(c - 1).children(".h5videowrapper").children(".h5video").style.opacity = "0.25";
        }
  },
  stopVideo(event){
      return;
  },
  //设备隐藏
  devicetoog(){
      // $("#device").toggle(100);
      $("#device").hide();
      $("#device1").show();
  },
 devicetoog1(){
        // $("#device1").toggle(100);
        $("#device1").hide();
        $("#device").show();
  },
  //资源列表
  //树形节点点击
  handleNodeClick(data, checked, indeterminate){
      console.log(data.disabled_me)
      console.log(data.label);
      console.log("1",data);
      let _this =this;
      // return false;
      if(data.disabled_me==false){
          console.log("----------------------");
          if (data.token) {
              let vid = 'h' + _this.$data.selectRow + _this.$data.selectCol;
              // console.log("----------------------",data.label);
              _this.$root.bus.$emit('liveplay', data.token, data.streamprofile, data.name,data.label,vid);
          }
      }else{
          console.log("不可用");
      }
    },
  handleNodeClick1(data, checked, indeterminate){
        let _this =this;
        console.log(data)
        return false;
        var main="main"
        if (data.strToken) {
            let vid = 'h' + _this.$data.selectRow + _this.$data.selectCol;
            // console.log("----------------------",data.label);
            _this.$root.bus.$emit('liveplay', data.strToken,data.streamprofile, data.name,data.label, vid);
        }
    },
  
  loadtest(){
    console.log(this.data)
    
      var root = process.env.API_ROOT;
      var wsroot = process.env.WS_HOST_ROOT;
       if (root == undefined){
        root = "http://"+this.Useport.ip+":"+this.Useport.port;
    }
      if (wsroot == undefined){
        wsroot = this.$store.state.Useport.ip+":"+this.$store.state.Useport.port;
    }
   var url ="http://"+this.Useport.ip+":"+this.Useport.port+ "/api/v1//GetSrcCamera?session="+ this.$store.state.token;
   console.log(url)
      this.$http.get(url).then(result=>{
        if(result.status == 200){
          var data =  result.data;
          console.log(data)
          var srcGroup = {children: []};
          srcGroup.label='摄像机';
          srcGroup.iconclass="mdi mdi-view-sequential fa-fw";
           for(var i=0; i< data.src.length; i++){
                 var item = data.src[i];
                if(item['nOriginalType'] == 'H5_CH_GB'){
                    continue;
                }else{
                    // 主副流
                    var node=[{
                    token : item['strToken'],
                    streamprofile : "main",
                    label :"主码流",
                    name:item['strName']+"--"+"主码流",
                    iconclass : 'mdi mdi-playlist-play fa-fw',
                    disabled_me:false
                    },{
                    token : item['strToken'],
                    streamprofile : "sub",
                    label :'辅码流',
                    name:item['strName']+"--"+"辅码流",
                    iconclass : 'mdi mdi-playlist-play fa-fw',
                    disabled_me:false
                    }]
                    var newItem ={
                            token : item['strToken'],
                            label : item['strName'],
                            iconclass : 'mdi mdi-camcorder fa-fw',
                            iconclass2 : 'mdi mdi-camcorder fa-fw',
                            name:item['strName']+"--"+'主码流',
                            children:node,
                            disabled_me:false};
                    
                    if(!item['bOnline'])
                        newItem['iconclass'] = 'mdi mdi-camcorder-off fa-fw';

                    if(item['nType'] == 'H5_CLOUD')
                        newItem['iconclass'] = 'mdi mdi-cloud-upload fa-fw';
                    
                    if(item['bRec'] == true)
                        newItem['iconclass2'] = 'iconfont icon-radioboxfill none';
                        
                srcGroup.children.push(newItem);
                }
            }
            var listdatag=[]
            listdatag.push(srcGroup);
            this.data=listdatag
            console.log(this.data)
          } 
      }).catch(error => {
        console.log('GetSrc failed', error);
    });
   },
  //  设备获取
    loadDevice() {
		    let _this =this;
		    var root = process.env.API_ROOT;
		    var wsroot = process.env.WS_HOST_ROOT;
		    if (root == undefined){
		        root = "http://"+this.Useport.ip+":"+this.Useport.port;
		    }
		    if (wsroot == undefined)
		    {
		        wsroot =this.$store.state.Useport.ip+":"+this.$store.state.Useport.port;
		    }
		   //url
		   var url = "http://"+this.Useport.ip+":"+this.Useport.port+ "/api/v1/GetDevice?session="+ this.$store.state.token;

			  //重组
			  this.$http.get(url).then(result=>{
				  if(result.status == 200){
					  var srcData = [];
					  var data=result.data;
					  for(var i = 0; i < data.dev.length; i++){
						  var item=data.dev[i];
						  var srclevel=[];
						  srclevel["strToken"]=item.strToken;
						  srclevel["strName"]=item.strName;
						  this.loadSrc(srclevel,srcData);
					  }
				  }
			  })
  },
  loadSrc(srclevel, srcData) {

            let _this =this;
            var root = process.env.API_ROOT;
            var wsroot = process.env.WS_HOST_ROOT;
            if (root == undefined){
                root = "http://"+this.Useport.ip+":"+this.Useport.port;
            }
            if (wsroot == undefined)
            {
                wsroot = this.$store.state.Useport.ip+":"+this.$store.state.Useport.port;
            }

            var url = root + "/api/v1/GetDeviceSrc?token="+ srclevel.strToken + "&session=" + this.$store.state.token;

            this.$http.get(url).then(result => {
                if (result.status == 200)
                {
                     var data =  result.data;
                    var srcGroup = {children: []};
                    srcGroup.label=srclevel.strName;
                    srcGroup.iconclass="mdi mdi-view-sequential fa-fw";
                    for(var i=0; i< data.src.length; i++){
                        var item = data.src[i];
                        // 主副流
                        var node=[{
                          token : item['strToken'],
                          streamprofile : "main",
                          label :'主码流',
                          name:item['strName']+"--"+'主码流',
                          iconclass : 'mdi mdi-playlist-play fa-fw',
                          disabled_me:false
                        },{
                          token : item['strToken'],
                          streamprofile : "sub",
                          label :'辅码流',
                          name:item['strName']+"--"+'辅码流',
                          iconclass : 'mdi mdi-playlist-play fa-fw',
                          disabled_me:false
                        }]
                        for(var l=0; l< node.length; l++){
                            console.log("1111111111111111111",node[l].disabled_me)
                            if(item['bDisable'] == true){
                                node[l].disabled_me =true;
                            }
                        }
                        
                        var newItem ={
                                token : item['strToken'],
                                label : item['strName'],
                                iconclass : 'mdi mdi-camcorder fa-fw',
                                iconclass1 : '',
                                name:item['strName']+"--"+'主码流',
                                children:node,
                                disabled_me:false};

                        if(!item['bOnline'])
                            newItem['iconclass'] = 'mdi mdi-camcorder-off fa-fw';

                        if(item['nType'] == 'H5_CLOUD')
                            newItem['iconclass'] = 'mdi mdi-cloud-upload fa-fw';

                        if(item['bRec'] == true)
                                newItem['iconclass2'] = 'iconfont icon-radioboxfill none';

                        if(item['bDisable'] == true){
                            newItem['disabled_me'] =true;
                            newItem['iconclass1'] = 'camera';
                        }

                       srcGroup.children.push(newItem);
                    }
                    this.data.push(srcGroup);
                }
            }).catch(error => {
                console.log('GetSrc failed', error);
            });
        },

// 区域
  Regional(){
   var root = process.env.API_ROOT;
    if (root == undefined){
        root = "http://"+this.Useport.ip+":"+this.Useport.port;
    }
    var url = root + "/api/v1/GetRegion?session="+this.$store.state.token;
      this.$http.get(url).then(result=>{
         var oldarr=result.data.root;
         
        var oldarr1=result.data.src;
        var dataroot=this.getchild(oldarr,oldarr1);
         console.log(dataroot);
       this.camdata.push(dataroot);
        console.log(this.camdata)
    
    })
},
 getchild(arr,arr1) {
     for(var i in arr.cam){
        if(!arr.cam[i].strName){
            for(var j in arr1){
                if(arr.cam[i].strToken == arr1[j].strToken){
                    var node1=[{
                        strToken : arr1[j].strToken,
                        streamprofile : "main",
                        strName :'主码流',
                        name:arr1[j].strName+"--"+'主码流',
                        iconclass : 'mdi mdi-playlist-play fa-fw',
                      },{
                        strToken : arr1[j].strToken,
                        streamprofile : "sub",
                        strName :'辅码流',
                        name:arr1[j].strName+"--"+'辅码流',
                        iconclass : 'mdi mdi-playlist-play fa-fw',
                      }]
                    arr.cam[i].node=node1;
                    arr.cam[i].strName = arr1[j].strName;
                    arr.cam[i].name=arr1[j].strName+"--"+'主码流',
                    arr.cam[i].bOnline = arr1[j].bOnline;
                    arr.cam[i].iconclass="mdi mdi-camcorder fa-fw"
                    if(!arr1[j].bOnline)
                        arr.cam[i].iconclass = 'mdi mdi-camcorder-off fa-fw';

                    if(arr1[j].nConnectType == 'H5_CLOUD')
                        arr.cam[i].iconclass = 'mdi mdi-camcorder fa-fw';

                    if(arr1[j].bRec == true)
                        arr.cam[i].iconclass2  = 'iconfont icon-radioboxfill none';
                }
            }
        }
    }
   if(arr.node && arr.node.length>0){
        for (var i = 0; i < arr.node.length; i++) {
            arr.node[i] =this.getchild(arr.node[i],arr1);
        }
    }
    return arr;
},
 //  历史记录
  history(event){
    console.log(event)
    var root = process.env.API_ROOT;
    var wsroot = process.env.WS_HOST_ROOT;
    if (root == undefined){
        root = "http://"+this.$store.state.Useport.ip+":"+this.$store.state.Useport.port;
    }
    if (wsroot == undefined)
    {
        wsroot = this.$store.state.Useport.ip+":"+this.$store.state.Useport.port;
    }
    for(let i=0; i<this.viewHistory.length; i++){
        let data=this.viewHistory
        let  videoid=da
        var  confItem = data[i];
        // let  videoid=data[i].token
        //  confItem.videoid=videoid
        console.log(confItem)
        this.h5handler = new H5sPlayerRTC(confItem);
        $("#"+this.rtcid).addClass("rtc_new");
        this.h5handler = new H5sPlayerWS(confItem);
    }
        this.h5handler.connect();
  },
  //  码流
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
div[name='flex'] {
    display: flex;
    flex-wrap: wrap;
    border-bottom: 0px !important;
}
.palace{
    position: relative;
    flex: 1 1 25%;
    border:1px solid black;
}
.h5video1{
  background-color:transparent !important;
}
.videoClickColor {
    background-color: #616263 !important;
    opacity: 0.80;
}
.Seven_Palace{
    flex: 1 1 33.33%;
    height: 33.33% !important;
}
.Seven_Palace:nth-child(1){
    height: 100% !important;
}
.Seven_Palace:nth-child(3){
    width: 33.33% !important;
    position: absolute;
    top: 33.33%;
    right: 0;
}
.Seven_Palace:nth-child(2){
    width: 33.33% !important;
    position: absolute;
    top: 33.33%;
    right: 33.33%;
}
.Seven_Palace:nth-child(6){
    width: 33.33% !important;
    position: absolute;
    bottom: 0;
    right: 33.33%;
}
.Seven_Palace:nth-child(7){
    width: 33.33% !important;
    position: absolute;
    bottom: 0;
    right: 0;
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
@font-face {
  font-family: 'iconfont2';
  src: url('../assets/icon/font/iconfont.eot');
  src: url('../assets/icon/font/iconfont.eot?#iefix') format('embedded-opentype'),
      url('../assets/icon/font/iconfont.woff2') format('woff2'),
      url('../assets/icon/font/iconfont.woff') format('woff'),
      url('../assets/icon/font/iconfont.ttf') format('truetype'),
      url('../assets/icon/font/iconfont.svg#iconfont') format('svg');
}
.iconfont {
  font-family: "iconfont" !important;
  font-size: 20px;
  font-style: normal;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}
.iconfont2{
  font-family: "iconfont2" !important;
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
	/* width: %; */
  /* height:422px; */
  /* position:relative; */
  margin-top: 24px;
} 
.flexvideo .videoColor{
  border: none;
  background-color: rgb(73, 74, 75) !important;
}
.overlay{
  width: 100%;
  position: absolute !important;
  left: 0;
  bottom:0px;
  height:25%;
 }

.van-overlay{
  position: absolute !important;
  width: 100%;
  height: 100%;
  /* background-color: rgb(240, 20, 20); */
}

.van-overlay .van-row{
  margin:10px 0;
  padding: 0 10px;
  padding-left: 24px;
}
.van-overlay .van-icon{
  padding-right:10px;
   vertical-align: middle;
   font-size: 10px;
}
.van-overlay .van-row  .van-button--mini{
  min-width: 0;
  font-size: 10px;
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
 .el_tree{
    color: #606266;
    font-size: 14px;
    font-weight: 500;
    /* background-color:transparent !important; */
}
.el-tree-node__content:hover{
   background-color: transparent;
}

.el_tree1{
    margin: 0;
    margin-right: 10px;
}
.el_tree >>> .el-tree-node__content{
    min-height: 24px;
    height: auto;
     background-color: transparent;
}
#device span{
  font-size: 12px;
}
/* 设备显示和隐藏 */
.devicetoog{
    /* width:100%; */
    display: flex;
    justify-content: space-between;
    padding: 10px 20px;
    font-size: 18px;
    color: #ece5e5;
    font-weight: 600;
    background-color:transparent;
   
  }
#device1,#device{
  padding-bottom: 57px;

}
.van-tree-select__nav,
.van-tree-select__nav-item
{
  background-color:transparent;
}
.van-sidebar-item:active{
   background-color:#817E81;
}
.van-tree-select__content{
  background-color: #2D2D31;
}
.van-tree-select__content .van-tree-select__nav{
  background-color: #2D2D31;
  border-right:1px solid #252526;
}
/* .van-tree-select__content .van-sidebar-item--select {
  background-color:transparent;
} */
.van-sidebar-item{
  border: none;
}
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
.van-tabbar .van-tabbar-item .vanicon{
   font-size: 25px;
}
.van-tree-select{
  margin-bottom:40px;
}

</style>
