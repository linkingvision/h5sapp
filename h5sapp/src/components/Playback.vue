<template>
   <div class="CallPolice">
      <van-row class="titleCall">
           <van-col span='24'>录像回放</van-col>
      </van-row>
      <!-- <van-row class="Callimg">
           <img src="../assets/image/nonesqul.png" alt="">
      </van-row> -->
        <!-- 视频播放部分 -->
    <van-sticky>
      <div id="full">
        <div class="flexvideo" id="videoPanel" >
          <div name='flex' style="position: relative;" class="videoColor" v-for="r in rows" :key="r" @click="showvideo">
            <div class="palace" name="flex" v-for="c in cols" @contextmenu.prevent="stopVideo($event)" @click="videoClick(r,c,$event)" :key="c">
              <avintercoms-play :h5id="'h'+r+c" :h5videoid="'gaovideohb'+r+c"></avintercoms-play>
            <!-- <v-liveplayer v-bind:id="'h'+r+c" :h5id="'h'+r+c" :rows="rows" :cols="cols" :h5videoid="'hvideo'+r+c"></v-liveplayer> -->
            </div>
          </div>
          <div class="Close_flex1">
             <div class="video_funsize">     
          <!-- <span class="fun_voice"></span> -->
          <span class="full_play">
            <div v-for="r in rows" :key="r" style="display:inline">
              <div v-for="c in cols" :key="c" style="display:inline">
                <div class="screentable" :id="'screentable'+r+c" style="display:inline;width: 100%;display: flex;justify-content:space-between; "> 
                  <button v-if="r=='1'&&c=='1'" type="button" :class="icon" @click="resume($event)" class="button_resume"></button>
                  <button v-if="r=='1'&&c=='2'" type="button" :class="icon1" @click="resume($event)" class="button_resume"></button>
                  <button v-if="r=='2'&&c=='1'" type="button" :class="icon2" @click="resume($event)" class="button_resume"></button>
                  <button v-if="r=='2'&&c=='2'" type="button" :class="icon3" @click="resume($event)" class="button_resume"></button>
                  <el-select filterable v-if="r=='1'&&c=='1'" v-model="region" size="mini" :popper-append-to-body="false" popper-class='selectdrop' style="width:70px" @change="Speed()">
                    <el-option class="speedstyle" v-for="item in regiondata" :key="item.value" :label="item.label" :value="item.value">
                    </el-option>
                  </el-select>
                  <el-select filterable v-if="r=='1'&&c=='2'" v-model="region1" size="mini" :popper-append-to-body="false" popper-class='selectdrop' style="width:70px" @change="Speed()">             
                    <el-option class="speedstyle" v-for="item in regiondata" :key="item.value" :label="item.label" :value="item.value">
                    </el-option>
                  </el-select>
                  <el-select filterable v-if="r=='2'&&c=='1'" v-model="region2" size="mini" :popper-append-to-body="false" popper-class='selectdrop' style="width:70px" @change="Speed()">
                    <el-option class="speedstyle" v-for="item in regiondata" :key="item.value" :label="item.label" :value="item.value">
                    </el-option>
                  </el-select>
                  <el-select  filterable v-if="r=='2'&&c=='2'" v-model="region3" size="mini" :popper-append-to-body="false" popper-class='selectdrop' style="width:70px" @change="Speed()">
                    <el-option class="speedstyle" v-for="item in regiondata" :key="item.value" :label="item.label" :value="item.value">
                    </el-option>
                  </el-select>
                </div>
              </div>
            </div> 
          </span>
          <!-- <span>
            <div v-for="r in rows" :key="r" style="display:inline">
              <div v-for="c in cols" :key="c" style="display:inline">
                <div class="tabSpeed" :id="'tabSpeed'+r+c" style="display:inline">
             
                </div>
              </div>
            </div>
          </span> -->
          
        </div>
        <div class="video_funsize1">
          <span class="fun_coll"  @click="enter2()" >
            <div v-show="fullscreenAdswitch" id="screen_back_Choice" class="back_Choice2">
              <div :class="{co_Baise:Adswitch=='true'}" @click="Adswitchs2($event)" class="co_black" >H5S回放</div>
              <div :class="{co_Baise:Adswitch=='false'}" @click="Adswitchs3($event)" class="co_black">NVR回放</div>
            </div>
          </span>
          <span v-show="one_screen" class="fun_onwwin" data-row="1|1" @click="changePanel1($event)"></span>
          <span v-show="four_screen" class="fun_fouwin" data-row="2|2" @click="changePanel($event)"></span>
          <div class="fun_pull" @click="FullScreen"></div>
        </div>
          </div>
        </div>
      </div>
      <div class="Close_flex">
        <div class="video_funsize">     
          <!-- <span class="fun_voice"></span> -->
          <span class="full_play">
            <div v-for="r in rows" :key="r" style="display:inline">
              <div v-for="c in cols" :key="c" style="display:inline">
                <div class="table" :id="'table'+r+c" style="display:inline;width: 100%;display: flex;justify-content:space-between; "> 
                  <button v-if="r=='1'&&c=='1'" type="button" :class="icon" @click="resume($event)" class="button_resume"></button>
                  <button v-if="r=='1'&&c=='2'" type="button" :class="icon1" @click="resume($event)" class="button_resume"></button>
                  <button v-if="r=='2'&&c=='1'" type="button" :class="icon2" @click="resume($event)" class="button_resume"></button>
                  <button v-if="r=='2'&&c=='2'" type="button" :class="icon3" @click="resume($event)" class="button_resume"></button>
                  <el-select filterable v-if="r=='1'&&c=='1'" v-model="region" size="mini" :popper-append-to-body="false" popper-class='selectdrop' style="width:70px" @change="Speed()">
                    <el-option class="speedstyle" v-for="item in regiondata" :key="item.value" :label="item.label" :value="item.value">
                    </el-option>
                  </el-select>
                  <el-select filterable v-if="r=='1'&&c=='2'" v-model="region1" size="mini" :popper-append-to-body="false" popper-class='selectdrop' style="width:70px" @change="Speed()">             
                    <el-option class="speedstyle" v-for="item in regiondata" :key="item.value" :label="item.label" :value="item.value">
                    </el-option>
                  </el-select>
                  <el-select filterable v-if="r=='2'&&c=='1'" v-model="region2" size="mini" :popper-append-to-body="false" popper-class='selectdrop' style="width:70px" @change="Speed()">
                    <el-option class="speedstyle" v-for="item in regiondata" :key="item.value" :label="item.label" :value="item.value">
                    </el-option>
                  </el-select>
                  <el-select  filterable v-if="r=='2'&&c=='2'" v-model="region3" size="mini" :popper-append-to-body="false" popper-class='selectdrop' style="width:70px" @change="Speed()">
                    <el-option class="speedstyle" v-for="item in regiondata" :key="item.value" :label="item.label" :value="item.value">
                    </el-option>
                  </el-select>
                </div>
              </div>
            </div> 
          </span>
          <!-- <span>
            <div v-for="r in rows" :key="r" style="display:inline">
              <div v-for="c in cols" :key="c" style="display:inline">
                <div class="tabSpeed" :id="'tabSpeed'+r+c" style="display:inline">
             
                </div>
              </div>
            </div>
          </span> -->
          
        </div>
        <div class="video_funsize1">
          <span class="fun_coll"  @click="enter1()" >
            <div  v-show="showAdswitch" id="back_Choice" class="back_Choice1">
              <div :class="{co_Baise:Adswitch=='true'}" @click="Adswitchs($event)" class="co_black" >H5S回放</div>
              <div :class="{co_Baise:Adswitch=='false'}" @click="Adswitchs1($event)" class="co_black">NVR回放</div>
            </div>
          </span>
          <span v-show="one_screen" class="fun_onwwin" data-row="1|1" @click="changePanel1($event)"></span>
          <span v-show="four_screen" class="fun_fouwin" data-row="2|2" @click="changePanel($event)"></span>
          <div class="fun_pull" @click="FullScreen"></div>
        </div>
      </div>
    </van-sticky>
    <div>
      <div style="background:#252527">
        <div class="devicetoog">
          <div>资源列表</div>
        </div>
        <div style="display:flex;justify-content:center;font-size:16px;">
          <van-field class="search" v-model="filterText" left-icon="search" style="width:90%;border-radius:5px;background-color:#1B1B1B;color:white;padding:8px 16px;" placeholder="输入关键字进行过滤" ></van-field>
        </div> 
        <!-- <el-input placeholder="输入关键字进行过滤" v-model="filterText"></el-input> -->
        <div style="font-size:16px;width:90%;height:115px;padding-bottom:20px;padding-left:40px;overflow:scroll;">
          <el-tree class="el_tree" node-key="strName" :default-expanded-keys="['root']" :data="camdata" :props="defaultProps" :filter-node-method="filterNode" @node-click="handleNodeClick" ref="tree" style="background-color:#252527;color:#C3C7D0FF">
            <span slot-scope="{data}" >
              <span>
                <span class="mdi mdi-view-sequential fa-fw"></span>
                <span :class="data.iconclass1">{{data.strName?data.strName:'设备暂时不可用'}}</span>
              </span>
            </span>
          </el-tree>
        </div>
      </div>
      <div style="width:100%;position:fixed;bottom:0;height: 25%;">
        <div style="display: flex;align-items:center;width:100%;height:50px;background: #292929;">    
          <div class="function_butt" style="width:30%;height:50px">
            <el-date-picker class="fixed_input" v-model="xzvalue" size="mini" @change="input_ch" type="date" default-time="00:00:00" prefix-icon="iconfont icon-rili" style="width:35px;height:50px"></el-date-picker>
          </div>
          <div style="width:60%;display:flex;text-algin:center;">
            <span style="font-size:16px;color:white;line-height:50%;display:none">2021-08-24 17:33:53</span>
          </div>
          <div style="width:30%;height:50px;display:flex;justify-content:space-around;" class="playbackbottom">
            <span class="jia"></span>
            <span class="jian"></span>
          </div>
        </div>
          <div style="width: 100%;height: 105px;">
          <div v-for="r in rows" :key="r">
            <div v-for="c in cols" :key="c">
              <div class="tab" :id="'tab'+r+c" >
                <canvas class="timeline" :id="'timeline'+r+c" style="width:100%;background: #252527;height:80px;" width="320px" height="80px" @touchstart ="timelinndown($event)" @touchcancel="mouseoutcanvas" @touchend="timetz" ondragstart="return false;">
                </canvas>
              </div>
            </div>
          </div>
        </div>
       
      </div> 
      <!-- <el-tree class="el_tree" node-key="strName":default-expanded-keys="['root']" :data="camdata" :props="defaultProps1" :filter-node-method="filterNode" @node-click="handleNodeClick1" ref="tree">
        <span slot-scope="{data}" style="width:100%;">
          <span>
            <span class="mdi mdi-view-sequential fa-fw" style="color:rgb(142, 132, 132);">根节点</span>
            <span :class="data.iconclass1" style="padding-left: 4px;">{{data.strName}}根节点</span>
          </span>
          <div v-if="data.cam.length!=0">
            <el-tree class="el_tree1" :data="data.cam" :props="defaultProps1" @node-click="handleNodeClick1" :filter-node-method="filterNode">
              <span slot-scope="{ node, data }">
                <div style="width:100%;display: flex;justify-content: space-between;">
                  <span>
                    <span :class="data.iconclass" style="color:rgb(142, 132, 132);"></span>
                    <span :class="data.iconclass1" style="padding-left: 4px;">{{data.strName}}</span>
                  </span>
                  <span :class="data.iconclass2" class="black" style=""></span>
                </div>
              </span>
            </el-tree>
          </div> 
        </span>
      </el-tree>-->
    </div>
   </div>
</template>

<script>
import Vue from 'vue';
import { Col, Row } from 'vant';

import '../assets/js/jquery-3.1.1.js';
import $ from 'jquery';
// import '../assets/js/bootstrap.js';
import '../assets/js/adapter.js';
import '../assets/js/platform.js';
import '../assets/icon/iconfont.css'//字体
import '../assets/js/h5splayerhelper.js';
import '../assets/css/h5splayer.css';
import '../assets/js/timeline-canvas1';
import {H5siOS,H5sPlayerCreate} from '../assets/js/h5splayerhelper.js';
import {H5sPlayerWS,H5sPlayerHls,H5sPlayerRTC} from '../assets/js/h5splayer.js';
import Avintercomsplay from './Avintercomsplay.vue';
Vue.use(Col);
Vue.use(Row);
export default {
  components: {
    'avintercoms-play': Avintercomsplay
  },
  name:'Playback',
  data(){
      return{
        xzvalue: new Date(),//双向日历
        rows: 2,
        cols: 2,
        selectCol: 1,
        selectRow: 1,
        selectCol1: 1,
        selectRow1: 1,
        filterText:'',
        showli: false,
        show:false,
        fullplay:true,
        one_screen:false,
        four_screen:true,
        showAdswitch:false,
        fullscreenAdswitch:false,
            
        region:1.0,//倍速
        region1:1.0,//倍速
        region2:1.0,//倍速
        region3:1.0,//倍速
        regiondata:[{
            value: "0.5",
            label: "0.5"
        }, {
            value: "1.0",
            label: "1.0"
        }, {
            value: "2.0",
            label: "2.0"
        }, {
            value: "4.0",
            label: "4.0"
        }, {
            value: "8.0",
            label: "8.0"
        }, {
            value: "16.0",
            label: "16.0"
        }],
        data:[],
        camdata:[],
        defaultProps: {
            children: 'cam',
            label: 'strName',
            cam:"cam",
            },
        timedata:[],//数据数组
        Gtoken:"",//全局点击节点后token
        SGtoken:["","","",""],//四宫点击节点后token
        v1:undefined,
        v2:undefined,
        v3:undefined,
        v4:undefined,
        icon:"iconfont icon-bofang",//暂停图片
        icon1:"iconfont icon-bofang",//暂停图片
        icon2:"iconfont icon-bofang",//暂停图片
        icon3:"iconfont icon-bofang",//暂停图片
        id:'',
        Adswitch:'false',
        curronRadio:this.$store.state.radio,
      }
    },
  beforeDestroy() {
    this.handleClose();
    // this.$root.bus.$off('liveplay');
  },
  mounted(){
    console.log(this.$store.state);
    this.functlist();
    this.updateUI();
    this.Regional();
    this.funtimeine();
    $(".Close_flex1").hide();
    this.$root.bus.$emit('liveplayproto',this.proto);
    this.fullplay=document.webkitIsFullScreen;
    this.oneScreen();
    this.curronRadio=2;
  },
  watch:{
    filterText(val) {
      this.$refs.tree.filter(val);
    },
    fullplay: {
      handler: function (val, oldVal) {
        $(".Close_flex1").hide();
        let width=window.screen.height;
        let height=window.screen.width;
        $('div[name="flex"]').width(height);
        $('div[name="flex"]').height(this.contentHeight / this.rows);
        $("#videoPanel").css({"transform":"none"});
        clearInterval(this.timerRunInfo1);
        this.fullplay=true;
      },
      deep: true
    },
  },
  methods:{
    Adswitchs(e){
      e.stopPropagation();
      let open="true";
      this.Adswitch=open;
      console.log(open,"111");
      this.$store.state.Adswitch=open;
      sessionStorage.Adswitch=this.$store.state.Adswitch;
      this.showAdswitch = false;
      console.log(this.showAdswitch);
    },
    Adswitchs1(e){
      e.stopPropagation();
      let open="false";
      this.Adswitch=open;
      console.log(open,"222");
      this.$store.state.Adswitch=open;
      sessionStorage.Adswitch=this.$store.state.Adswitch;
      this.showAdswitch = false;
    },
    Adswitchs2(e){
      e.stopPropagation();
      let open="true";
      this.Adswitch=open;
      console.log(open,"111");
      this.$store.state.Adswitch=open;
      sessionStorage.Adswitch=this.$store.state.Adswitch;
      this.fullscreenAdswitch=false;
    },
    Adswitchs3(e){
      e.stopPropagation();
      let open="false";
      this.Adswitch=open;
      console.log(open,"222");
      this.$store.state.Adswitch=open;
      sessionStorage.Adswitch=this.$store.state.Adswitch;
      this.fullscreenAdswitch=false;
    },
    //显示第一个数轴
    functlist(){
      $('.tab').each(function (e) {
        if (e == 0)
          $(this).show();//首次加载的时候默认显示第一个
        else
          $(this).hide();
      });
      $('.table').each(function (e) {
        if (e == 0)
          $(this).show();//首次加载的时候默认显示第一个
        else
          $(this).hide();
      });
       $('.screentable').each(function (e) {
        if (e == 0)
          $(this).show();//首次加载的时候默认显示第一个
        else
          $(this).hide();
      });
      $('.tabSpeed').each(function (e) {
        if (e == 0)
          $(this).show();//首次加载的时候默认显示第一个
        else
          $(this).hide();
      });
      
    },
    //点击确定键
    input_ch(){
      var data=this.Gtoken;
      // console.log(this.Gtoken);
      // console.log("日历",data,this.Gtoken,this.Adswitch);
      this.Play(data);
    },
    //树形节点点击
    //开始播放时间  0：00 每天结束时间可能回到第二天清晨
    handleNodeClick(data, checked, indeterminate){
      console.log(data);
      // if(data.bOnline){
      // 	return false;
      // }
      var data=data.strToken;
      if(data==undefined){
        return false;
      }
      if(this.selectRow=="1"&&this.selectCol=="1"){
        this.SGtoken.splice(0, 1,data);
        this.Gtoken=this.SGtoken[0];
      }else if(this.selectRow=="1"&&this.selectCol=="2"){
        this.SGtoken.splice(1, 1,data);
        this.Gtoken=this.SGtoken[1];
      }else if(this.selectRow=="2"&&this.selectCol=="1"){
        this.SGtoken.splice(2, 1,data);
        this.Gtoken=this.SGtoken[2];
      }else if(this.selectRow=="2"&&this.selectCol=="2"){
        this.SGtoken.splice(3, 1,data);
        this.Gtoken=this.SGtoken[3];
      }
      console.log("play",this.SGtoken,"token",this.Gtoken);
      // return false;
      console.log(data);
      this.Play(data);
    },
    mouseoutcanvas(){
      console.log("11111");
      return;
	  },
    //拉播
    timelinndown(err){
      console.log('a',err);
      if(this.selectRow=="1"&&this.selectCol=="1"){
        if(this.v1 != undefined){
          this.v1.pause();
          console.log(11111111);
        }
      }else if(this.selectRow=="1"&&this.selectCol=="2"){
        if(this.v2 != undefined){
          this.v2.pause();
        }
      }else if(this.selectRow=="2"&&this.selectCol=="1"){
        if(this.v3 != undefined){
          this.v3.pause();
        }
      }else if(this.selectRow=="2"&&this.selectCol=="2"){
        if(this.v4 != undefined){
          this.v4.pause();
        }
      }
    },
    timetz(){
      console.log('111')
      let timevalue=this.xzvalue;
      let _this=this;
      _this.timedata=[];
      // return false;
      // let root = this.$store.state.callport;
      // let root2 = root.substring(root.indexOf('/')+2);
      // let wsroot = root2.substring(0,root2.indexOf('/'));
      var root = process.env.API_ROOT;
      var wsroot = process.env.WS_HOST_ROOT;
      if (root == undefined){
          root = "http://"+this.$store.state.Useport.ip+":"+this.$store.state.Useport.port + window.location.pathname;
      }
      if (wsroot == undefined)
      {
          wsroot = this.$store.state.Useport.ip+":"+this.$store.state.Useport.port;
      }
      if(_this.Gtoken==undefined||_this.Gtoken==""){
        return false;
      }
      setTimeout(function(){
        let a = $("#timeline"+_this.selectRow+_this.selectCol).TimeSlider ('returnMouseupTime',null,null,function(time){
          console.log("time",time,_this.Gtoken);
          // return false;
          // 放入视频
          // return false;
          var timevalue=new Date(time);
          console.log(timevalue);
          let year = timevalue.getFullYear();
          let month = timevalue.getMonth() + 1;
          let strDate = timevalue.getDate();
          let strDate1 = timevalue.getDate()+1;
          let strDate2 = timevalue.getDate()-1;
          let getHours = timevalue.getHours();
          let getMinutes = timevalue.getMinutes();
          let getSeconds = timevalue.getSeconds();
          let localOffset = Math.abs(timevalue.getTimezoneOffset() /60);
          let timevalues=year+"-"+month+"-"+strDate+"T"+""+getHours+":"+getMinutes+":"+getSeconds+""+"+0"+localOffset+":00";
        
          let timevaluee=year+"-"+month+"-"+strDate+"T"+"23:59:59"+"+0"+localOffset+":00";

          let timevalues1=year+"-"+month+"-"+strDate2+"T"+""+getHours+":"+getMinutes+":"+getSeconds+""+"+0"+localOffset+":00";
        
          let timevaluee1=year+"-"+month+"-"+strDate1+"T"+"23:59:59"+"+0"+localOffset+":00";
        
          // console.log("======",strDate1);
          // console.log("timevaluee222222",timevalues,timevaluee,"------",localOffset,"**",timevalue);
          let url="";
          console.log(_this.Adswitch);
          
          if(_this.Adswitch=='false'){
           	url = root + "api/v1/SearchDeviceRecordByTime?token="+_this.Gtoken+"&start="+encodeURIComponent(timevalues1)+"&end="+encodeURIComponent(timevaluee1)+"&session="+ _this.$store.state.token;
          }else{
            url = root + "api/v1/Search?type=record&token="+_this.Gtoken+"&start=" +encodeURIComponent(timevalues1)+"&end="+encodeURIComponent(timevaluee)+"& session="+_this.$store.state.token;
          }
          console.log(url);
        //   return false;
          _this.$http.get(url).then(result=>{
              console.log(result);
            if(result.status == 200){
              let data=result.data;
              let timedata1=[];
              //console.log("length",data.record.length);
              for(var i=0;i<data.record.length;i++){
                let item=data.record[i];
                //时间转换
                var starf=new Date(item['strStartTime']).getTime();
                var end=new Date(item['strEndTime']).getTime();
                var starf=new Date(starf);
                var end=new Date(end);
                var timeitem={
                  beginTime :starf,
                  endTime :end,
                  style:{background:"rgba(60,196,60, 0.498039)"}
                };
                // console.log("录像段时间段颜色",timeitem["style"].background);//录像段时间段颜色
                if(item["nType"]==="H5_REC_MANUAL"){
                  timeitem["style"].background="rgba(60,196,60, 0.498039)";
                  // console.log("录像段时间段颜色1",timeitem["style"].background);
                }else if(item["nType"]==="H5_REC_SCHEDULE"){
                  timeitem["style"].background="#98c7e8";
                }else{
                  timeitem["style"].background="rgba(238,17,17, 0.498039)";
                  //console.log("录像段时间段颜色2",timeitem["style"].background);
                }
                // _this.timedata.push(timeitem);
                timedata1.push(timeitem);
                console.log(timedata1)
                // console.log(timevalue);
                $("#timeline"+_this.selectRow+_this.selectCol).TimeSlider('init',timevalue,timedata1);
              }
            }
          })
          if(_this.selectRow=="1"&&_this.selectCol=="1"){
            _this.selectCol1 = _this.selectCol;
            _this.selectRow1 = _this.selectRow;
            if (_this.v1 != undefined){
              _this.v1.disconnect();
              delete _this.v1;
              _this.v1 = undefined;
              console.log("上this.v1",_this.v1);
            }
            let pbconf1 = {
              begintime: timevalues,
              endtime: timevaluee,
              autoplay: 'true',
              showposter:"false", //'true' or 'false' show poster
              callback: _this.PlaybackCB,
              serverpb: _this.Adswitch, 
              userdata:  _this // user data
            };
            let conf = {
              videoid: "gaovideohb"+_this.selectRow+_this.selectCol,
              protocol: window.location.protocol, //http: or https:
              host: wsroot, //localhost:8080
              rootpath:'/', // '/'
              token:_this.Gtoken,
              pbconf: pbconf1, //This is optional, if no pbconf, this will be live.
              hlsver:'v1', //v1 is for ts, v2 is for fmp4
              session: _this.$store.state.token
            };
            _this.$nextTick (()=>{
              _this.v1 = new H5sPlayerRTC(conf);
              // return false;
              _this.v1.connect();
              _this.icon="iconfont icon-zantingtingzhi";
            })
          }else if(_this.selectRow=="1"&&_this.selectCol=="2"){
            _this.selectCol1 = _this.selectCol;
            _this.selectRow1 = _this.selectRow;
            if (_this.v2 != undefined){
              _this.v2.disconnect();
              delete _this.v2;
              _this.v2 = undefined;
            }
            let pbconf1 = {
              begintime: timevalues,
              endtime: timevaluee,
              autoplay: 'true',
              showposter:"false", //'true' or 'false' show poster
              callback: _this.PlaybackCB1,
              serverpb: _this.Adswitch, 
              userdata: _this // user data
            };
            let conf2 = {
              videoid: "gaovideohb"+_this.selectRow+_this.selectCol,
              protocol: window.location.protocol, //http: or https:
              host: wsroot, //localhost:8080
              rootpath:'/', // '/'
              token:_this.Gtoken,
              pbconf: pbconf1, //This is optional, if no pbconf, this will be live.
              hlsver:'v1', //v1 is for ts, v2 is for fmp4
              session: _this.$store.state.token
            };
            _this.$nextTick (()=>{
              _this.v2 = new H5sPlayerRTC(conf2);
              //return false;
              _this.v2.connect();
              _this.icon="iconfont icon-zantingtingzhi";
            })
          }else if(_this.selectRow=="2"&&_this.selectCol=="1"){
            _this.selectCol1 = _this.selectCol;
            _this.selectRow1 = _this.selectRow;
            if (_this.v3 != undefined){
              _this.v3.disconnect();
              delete _this.v3;
              _this.v3 = undefined;
              console.log("上this.v1",_this.v1);
            }
            let pbconf1 = {
              begintime: timevalues,
              endtime: timevaluee,
              autoplay: 'true',
              showposter:"false", //'true' or 'false' show poster
              callback: _this.PlaybackCB2,
              serverpb:  _this.Adswitch, 
              userdata:  _this // user data
            };
            let conf3 = {
              videoid: "gaovideohb"+_this.selectRow+_this.selectCol,
              protocol: window.location.protocol, //http: or https:
              host: wsroot, //localhost:8080
              rootpath:'/', // '/'
              token:_this.Gtoken,
              pbconf: pbconf1, //This is optional, if no pbconf, this will be live.
              hlsver:'v1', //v1 is for ts, v2 is for fmp4
              session: _this.$store.state.token
            };
            _this.$nextTick (()=>{
              _this.v3 = new H5sPlayerRTC(conf3);
              //return false;
              _this.v3.connect();
              _this.icon="iconfont icon-zantingtingzhi";
            })
          }else if(_this.selectRow=="2"&&_this.selectCol=="2"){
            _this.selectCol1 = _this.selectCol;
            _this.selectRow1 = _this.selectRow;
            if (_this.v4 != undefined){
              _this.v4.disconnect();
              delete _this.v4;
              _this.v4 = undefined;
              console.log("上this.v1",_this.v1);
            }
            let pbconf1 = {
              begintime: timevalues,
              endtime: timevaluee,
              autoplay: 'true',
              showposter:"false", //'true' or 'false' show poster
              callback: _this.PlaybackCB3,
              serverpb:  _this.Adswitch, 
              userdata:  _this // user data
            };
            let conf4 = {
              videoid: "gaovideohb"+_this.selectRow+_this.selectCol,
              protocol: window.location.protocol, //http: or https:
              host: wsroot, //localhost:8080
              rootpath:'/', // '/'
              token:_this.Gtoken,
              pbconf: pbconf1, //This is optional, if no pbconf, this will be live.
              hlsver:'v1', //v1 is for ts, v2 is for fmp4
              session: _this.$store.state.token
            };
            _this.$nextTick (()=>{
              _this.v4 = new H5sPlayerRTC(conf4);
              //return false;
              _this.v4.connect();
              _this.icon="iconfont icon-zantingtingzhi";
            })
          }
        })
      },100);
    },
    //开始
    resume(e){
      let strart=this.icon;
      let strart1=this.icon1;
      let strart2=this.icon2;
      let strart3=this.icon3;
      console.log(strart);
      if(this.selectRow=="1"&&this.selectCol=="1"){
    	if(this.v1 != undefined){
    	//   iconfont icon-zantingtingzhi  iconfont icon-bofang
          if(strart=="iconfont icon-zantingtingzhi"){
            this.icon="iconfont icon-bofang";
            console.log(this.icon);
            this.v1.pause();
          }
          if(strart=="iconfont icon-bofang"){
            this.icon="iconfont icon-zantingtingzhi";
            console.log(this.icon);
            this.v1.resume();
          }
      }
      }else if(this.selectRow=="1"&&this.selectCol=="2"){
    	if(this.v2 != undefined){
          //iconfont icon-zantingtingzhi  iconfont icon-bofang
          if(strart1=="iconfont icon-zantingtingzhi"){
            this.icon1="iconfont icon-bofang";
            console.log(this.icon);
            this.v2.pause();
          }
          if(strart1=="iconfont icon-bofang"){
            this.icon1="iconfont icon-zantingtingzhi";
            console.log(this.icon);
            this.v2.resume();
          }
        }
      }else if(this.selectRow=="2"&&this.selectCol=="1"){
    	if(this.v3 != undefined){
          //iconfont icon-zantingtingzhi  iconfont icon-bofang
          if(strart2=="iconfont icon-zantingtingzhi"){
            this.icon2="iconfont icon-bofang";
            console.log(this.icon);
            this.v3.pause();
          }
          if(strart2=="iconfont icon-bofang"){
            this.icon2="iconfont icon-zantingtingzhi";
            console.log(this.icon);
            this.v3.resume();
          }
    	}
      }else if(this.selectRow=="2"&&this.selectCol=="2"){
        if(this.v4 != undefined){
          //iconfont icon-zantingtingzhi  iconfont icon-bofang
          if(strart3=="iconfont icon-zantingtingzhi"){
            this.icon3="iconfont icon-bofang";
            console.log(this.icon);
            this.v4.pause();
          }
          if(strart3=="iconfont icon-bofang"){
            this.icon3="iconfont icon-zantingtingzhi";
            console.log(this.icon);
            this.v4.resume();
          }
        }
      }
    },
    //倍速
    Speed(){
      if(this.selectRow=="1"&&this.selectCol=="1"){
        if(this.v1 != undefined){
          this.v1.speed(this.region);
          console.log(this.region);
        }
      }else if(this.selectRow=="1"&&this.selectCol=="2"){
        if(this.v2 != undefined){
          this.v2.speed(this.region1);
          console.log(this.region1);
        }
      }else if(this.selectRow=="2"&&this.selectCol=="1"){
        if(this.v3 != undefined){
          this.v3.speed(this.region2);
          console.log(this.region2);
        }
      }else if(this.selectRow=="2"&&this.selectCol=="2"){
        if(this.v4 != undefined){
          this.v4.speed(this.region3);
          console.log(this.region3);
        }
      }
    },
    //timeline
    funtimeine(){
      // console.log(this.cols*this.rows);
      for(let i=1;i<=this.rows;i++){
        for(let l=1;l<=this.cols;l++){
          // console.log("#timeline"+i+l);
        //   console.log( $("#timeline"+i+l).TimeSlider({init_cells:this.timedata}));
        console.log(this.timedata);
          $("#timeline"+i+l).TimeSlider({init_cells:this.timedata});
        }
      }
    },
    videoClick(r, c, $event) {
      $("video").removeClass('h5videoh');
      $("#gaovideohb"+r+c).addClass('h5videoh');
      $('.table').hide();
      $("#table"+r+c).show();//显示当前选中项
      $('.tabSpeed').hide();
      $("#tabSpeed"+r+c).show();//显示当前选中项
      $('.tab').hide();//隐藏所有内容
      $("#tab"+r+c).show();//显示当前选中项
      $('.screentable').hide();
      $("#screentable"+r+c).show();//显示当前选中项
      this.selectCol = c;
      this.selectRow = r;
      console.log(r, c);
      if ($($event.target).parent().hasClass('videoClickColor')) {
        $($event.target).parent().removeClass('videoClickColor');
      } else {
        $('#videoPanel div[class*="videoClickColor"]').removeClass('videoClickColor');
        $('#videoPanel>div').eq(r - 1).children('div').eq(c - 1).addClass('videoClickColor');
        //$('#videoPanel>div').eq(r - 1).children('div').eq(c - 1).children(".h5videowrapper").children(".h5video").style.opacity = "0.25";
      }
      if(this.selectRow=="1"&&this.selectCol=="1"){
        console.log(this.SGtoken[0]);
        this.Gtoken=this.SGtoken[0];
      }else if(this.selectRow=="1"&&this.selectCol=="2"){
        console.log(this.SGtoken[1]);
        this.Gtoken=this.SGtoken[1];
      }else if(this.selectRow=="2"&&this.selectCol=="1"){
        console.log(this.SGtoken[2]);
        this.Gtoken=this.SGtoken[2];
      }else if(this.selectRow=="2"&&this.selectCol=="2"){
        console.log(this.SGtoken[3]);
        this.Gtoken=this.SGtoken[3];
      }
	  },
    oneScreen(){
      // return false;
      window.setTimeout(function() {
        this.functlist();
      }.bind(this),50)
      this.row = 1;
      let data = ('1|1');
      let _this = this;
      let cols = data.split('|')[1];
      let rows = data.split('|')[0];
      console.log(data,cols,rows);
      //this.map.clear();
      Object.assign(this.$data, {
        rows: parseInt(rows),
        cols: parseInt(cols)
      });
      // clearInterval(this.PlaybackCB);
      console.log($("#gaovideohb"+this.selectRow+this.selectCol));
      if (this.v2 != undefined){
        this.v2.disconnect();
        delete this.v2;
        this.v2 = undefined;
        $("#gaovideohb"+this.selectRow+this.selectCol).get(0).load();
        $("#gaovideohb"+this.selectRow+this.selectCol).get(0).poster = '';
      }
      if (this.v3 != undefined){
        this.v3.disconnect();
        delete this.v3;
        this.v3 = undefined;
        $("#gaovideohb"+this.selectRow+this.selectCol).get(0).load();
        $("#gaovideohb"+this.selectRow+this.selectCol).get(0).poster = '';
      }
      if (this.v4 != undefined){
        this.v4.disconnect();
        delete this.v1;
        this.v4 = undefined;
        $("#gaovideohb"+this.selectRow+this.selectCol).get(0).load();
        $("#gaovideohb"+this.selectRow+this.selectCol).get(0).poster = '';
      }
      Vue.nextTick(function () {
        // console.log(_this.contentHeight / rows);
        //$('div[name="flex"]').height(($(".content").height() - 50) / rows);
        $('div[name="flex"]').height(_this.contentHeight / rows);
        console.log(_this.timedata);
        $("#timeline12").TimeSlider({init_cells:_this.timedata});
        $("#timeline21").TimeSlider({init_cells:_this.timedata});
        $("#timeline22").TimeSlider({init_cells:_this.timedata});
      })
    },
    //点击宫格
    changePanel1(event) {
      this.four_screen=true;
      this.one_screen=false;
      // return false;
      window.setTimeout(function() {
        this.functlist();
      }.bind(this),50)
      console.log($(event.target));
      let data = $(event.target).data('row');
      let _this = this;
      let cols = data.split('|')[1];
      let rows = data.split('|')[0];
      console.log(data,cols,rows);
      //this.map.clear();
      Object.assign(this.$data, {
        rows: parseInt(rows),
        cols: parseInt(cols)
      });
      // clearInterval(this.PlaybackCB);
      if (this.v2 != undefined){
        this.v2.disconnect();
        delete this.v2;
        this.v2 = undefined;
        $("#gaovideohb"+this.selectRow+this.selectCol).get(0).load();
        $("#gaovideohb"+this.selectRow+this.selectCol).get(0).poster = '';
      }
      if (this.v3 != undefined){
        this.v3.disconnect();
        delete this.v3;
        this.v3 = undefined;
        $("#gaovideohb"+this.selectRow+this.selectCol).get(0).load();
        $("#gaovideohb"+this.selectRow+this.selectCol).get(0).poster = '';
      }
      if (this.v4 != undefined){
        this.v4.disconnect();
        delete this.v1;
        this.v4 = undefined;
        $("#gaovideohb"+this.selectRow+this.selectCol).get(0).load();
        $("#gaovideohb"+this.selectRow+this.selectCol).get(0).poster = '';
      }
      Vue.nextTick(function () {
        	$('div[name="flex"]').height(_this.contentHeight / rows);
				console.log($('div[name="flex"]'))
				console.log(document.webkitIsFullScreen);
				if(document.webkitIsFullScreen){
					let width=window.screen.height;
					let height=window.screen.width;
					// var Closehe=$(".Close_flex").height();
					$('div[name="flex"]').width(width);
					$('div[name="flex"]').height(height/ _this.rows);
					$("#videoPanel").css({"transform":"rotate(90deg)"});
					// $(".Close_flex").width(width-30);
				}else{
					$('div[name="flex"]').height(_this.contentHeight / rows);
				}
        // console.log(_this.contentHeight / rows);
        //$('div[name="flex"]').height(($(".content").height() - 50) / rows);
        // $('div[name="flex"]').height(_this.contentHeight / rows);
        console.log(_this.timedata);
        $("#timeline12").TimeSlider({init_cells:_this.timedata});
        $("#timeline21").TimeSlider({init_cells:_this.timedata});
        $("#timeline22").TimeSlider({init_cells:_this.timedata});
      })
    },
    //点击宫格
    changePanel(event) {
     this.one_screen=true;
      this.four_screen=false;
      window.setTimeout(function() {
        this.functlist();
      }.bind(this),50)
      console.log($(event.target));
      let data = $(event.target).data('row');
      let _this = this;
      let cols = data.split('|')[1];
      let rows = data.split('|')[0];
      console.log(data,cols,rows);
      //this.map.clear();
      Object.assign(this.$data, {
        rows: parseInt(rows),
        cols: parseInt(cols)
      });
      // clearInterval(this.PlaybackCB);
      if (this.v2 != undefined){
        this.v2.disconnect();
        delete this.v2;
        this.v2 = undefined;
        $("#gaovideohb"+this.selectRow+this.selectCol).get(0).load();
        $("#gaovideohb"+this.selectRow+this.selectCol).get(0).poster = '';
      }
      if (this.v3 != undefined){
        this.v3.disconnect();
        delete this.v3;
        this.v3 = undefined;
        $("#gaovideohb"+this.selectRow+this.selectCol).get(0).load();
        $("#gaovideohb"+this.selectRow+this.selectCol).get(0).poster = '';
      }
      if (this.v4 != undefined){
        this.v4.disconnect();
        delete this.v1;
        this.v4 = undefined;
        $("#gaovideohb"+this.selectRow+this.selectCol).get(0).load();
        $("#gaovideohb"+this.selectRow+this.selectCol).get(0).poster = '';
      }
      Vue.nextTick(function () {
        	$('div[name="flex"]').height(_this.contentHeight / rows);
				console.log($('div[name="flex"]'))
				console.log(document.webkitIsFullScreen);
				if(document.webkitIsFullScreen){
					let width=window.screen.height;
					let height=window.screen.width;
					// var Closehe=$(".Close_flex").height();
					$('div[name="flex"]').width(width);
					$('div[name="flex"]').height(height/ _this.rows);
					$("#videoPanel").css({"transform":"rotate(90deg)"});
					// $(".Close_flex").width(width-30);
				}else{
					$('div[name="flex"]').height(_this.contentHeight / rows);
				}
        // console.log(_this.contentHeight / rows);
        //$('div[name="flex"]').height(($(".content").height() - 50) / rows);
        // $('div[name="flex"]').height(_this.contentHeight / rows);
        console.log(_this.timedata);
        $("#timeline12").TimeSlider({init_cells:_this.timedata});
        $("#timeline21").TimeSlider({init_cells:_this.timedata});
        $("#timeline22").TimeSlider({init_cells:_this.timedata});
      })
    },
    stopVideo(event){
      return;
    },
    Play(data){
      var token=data;
      console.log(window.location.protocol);
      
      console.log(token);
      //关闭视频并改变图标
    
      this.icon="iconfont icon-zantingtingzhi";
      this.icon1="iconfont icon-zantingtingzhi";
      this.icon2="iconfont icon-zantingtingzhi";
      this.icon3="iconfont icon-zantingtingzhi";
      //console.log(data.token);
      //放入视频
      if(token==undefined){
        return false;
      }
      // let Gtoken=data.token;
      console.log(this.xzvalue);
      let timevalue=this.xzvalue;
      console.log(timevalue);
      console.log("timevalue11111",timevalue);
      let year = timevalue.getFullYear();
      let month = timevalue.getMonth() + 1;
      let strDate = timevalue.getDate();
      let strDate1 = timevalue.getDate()-1;
      let localOffset = Math.abs(timevalue.getTimezoneOffset() /60);
      let timevalues=year+"-"+month+"-"+strDate+"T"+"00:00:00"+"+0"+localOffset+":00";
      let timevalues1=year+"-"+month+"-"+strDate1+"T"+"00:00:00"+"+0"+localOffset+":00";
      let timevaluee=year+"-"+month+"-"+strDate+"T"+"23:59:59"+"+0"+localOffset+":00";
    
      console.log("======",strDate,strDate1);
      console.log("timevaluee222222",timevalues,timevaluee,"------",localOffset);

      // return false;
      // let root = this.$store.state.callport;
      // let root2 = root.substring(root.indexOf('/')+2);
      // let wsroot = root2.substring(0,root2.indexOf('/'));
      var root = process.env.API_ROOT;
      var wsroot = process.env.WS_HOST_ROOT;
      if (root == undefined){
          root = "http://"+this.$store.state.Useport.ip+":"+this.$store.state.Useport.port + window.location.pathname;
      }
      if (wsroot == undefined)
      {
          wsroot = this.$store.state.Useport.ip+":"+this.$store.state.Useport.port;
      }
      let url="";
      if(this.Adswitch=='false'){
    	url = root + "/api/v1/SearchDeviceRecordByTime?token="+token+"&start="+encodeURIComponent(timevalues1)+"&end="+encodeURIComponent(timevaluee)+"&session="+ this.$store.state.token;
      }else{
        url = root + "/api/v1/Search?type=record&token="+token+"&start="+encodeURIComponent(timevalues1)+"&end="+encodeURIComponent(timevaluee)+"&session="+ this.$store.state.token;
      }
      console.log(url);
      //return false;
      this.$http.get(url).then(result=>{
        console.log(url,result);
        if(result.status == 200){
          let data=result.data;
          let timedata1=[];
          console.log("length",data.record.length);
          for(let i=0;i<data.record.length;i++){
            let item=data.record[i];
            //时间转换
            var starf=new Date(item['strStartTime']).getTime();
            var end=new Date(item['strEndTime']).getTime();
            var starf=new Date(starf);
            var end=new Date(end);
            let timeitem={
              beginTime :starf,
              endTime :end,
              style:{background:"rgba(60,196,60, 0.498039)"}
            };
            // console.log(item["nType"],555555555555555);
            //console.log("录像段时间段颜色",timeitem["style"].background); //录像段时间段颜色
            if(item["nType"]==="H5_REC_MANUAL"){
              timeitem["style"].background="rgba(60,196,60, 0.498039)";
              //console.log("录像段时间段颜色1",timeitem["style"].background);
            }else if(item["nType"]==="H5_REC_SCHEDULE"){
              timeitem["style"].background="#98c7e8";
            }else{
              timeitem["style"].background="rgba(238,17,17, 0.498039)";
              //console.log("录像段时间段颜色2",timeitem["style"].background);
            }
            timedata1.push(timeitem);
            // console.log("4545454",timeitem);
            $("#timeline"+this.selectRow+this.selectCol).TimeSlider('init',timevalue,timedata1);
          }
        }
      })
      // return false;
      console.log(this.selectCol,this.selectRow);
      if(this.selectRow=="1"&&this.selectCol=="1"){
        this.selectCol1 = this.selectCol;
        this.selectRow1 = this.selectCol;
        console.log(this.selectCol1,this.selectRow1);
        if (this.v1 != undefined){
          this.v1.disconnect();
          delete this.v1;
          this.v1 = undefined;
          console.log("上this.v1",this.v1);
        }
        let pbconf1 = {
          begintime: timevalues,
          endtime: timevaluee,
          autoplay: 'true',
          showposter:"false", //'true' or 'false' show poster
          callback: this.PlaybackCB,
          serverpb: this.Adswitch, 
          userdata:  this // user data
        };
        let conf = {
          videoid: "gaovideohb"+this.selectRow+this.selectCol,
          protocol: "http:", //http: or https:
          host: wsroot, //localhost:8080
          rootpath:'/', // '/'
          token:token,
          pbconf: pbconf1, //This is optional, if no pbconf, this will be live.
          hlsver:'v1', //v1 is for ts, v2 is for fmp4
          session: this.$store.state.token
        };
        if (H5siOS() === true){
          this.v1 = new H5sPlayerRTC(conf);
          $("#rtcgaovideohb11").addClass("rtc_new");
        }else if(this.curronRadio==1){   
              // 判断是否选中ws播放或者是rtc
          this.v1 = new H5sPlayerWS(conf);
          $("#rtcgaovideohb11").addClass("rtc_new");
        }else if(this.curronRadio==2){
          this.v1 = new H5sPlayerRTC(conf); 
          $("#rtcgaovideohb11").addClass("rtc_new");
        }else{
          this.v1 = new H5sPlayerWS(conf);
          $("#rtcgaovideohb11").addClass("rtc_new");
        }
        console.log('zaizheaaaaaaaaaa',this.curronRadio);
        this.v1.connect();
        // if (this.$store.state.liveviewrtc1 == 'RTC' || (H5siOS() === true)){
        // 	console.log(this.$store.state.liveviewrtc1,555552)
        // 	this.v1 = new H5sPlayerRTC(conf);
        // 	$("#rtcgaovideohb11").addClass("rtc_new");
        // }else{
        //     console.log(this.$store.state.liveviewrtc1,555551)
        //     this.v1 = new H5sPlayerWS(conf);
        // 	$("#rtcgaovideohb11").removeClass("rtc_new");
        // }
        // this.v1 = new H5sPlayerRTC(conf);
        // console.log("v111111111111",this.v1)
        // //return false;
        // this.v1.connect();
      }else if(this.selectRow=="1"&&this.selectCol=="2"){
        this.selectCol1 = this.selectCol;
        this.selectRow1 = this.selectCol;
        if (this.v2 != undefined){
          this.v2.disconnect();
          delete this.v2;
          this.v2 = undefined;
        }
        let pbconf1 = {
          begintime: timevalues,
          endtime: timevaluee,
          autoplay: 'true',
          showposter:"false", //'true' or 'false' show poster
          callback: this.PlaybackCB1,
          serverpb:this.Adswitch, 
          userdata:  this // user data
        };
        let conf2 = {
          videoid: "gaovideohb"+this.selectRow+this.selectCol,
          protocol: "http:", //http: or https:
          host: wsroot, //localhost:8080
          rootpath:'/', // '/'
          token:token,
          pbconf: pbconf1, //This is optional, if no pbconf, this will be live.
          hlsver:'v1', //v1 is for ts, v2 is for fmp4
          session: this.$store.state.token
        };
         if (H5siOS() === true){
          this.v2 = new H5sPlayerRTC(conf2);
          $("#rtcgaovideohb12").addClass("rtc_new");
        }else if(this.curronRadio==1){   
              // 判断是否选中ws播放或者是rtc
          this.v2 = new H5sPlayerWS(conf2);
        }else if(this.curronRadio==2){
          this.v2 = new H5sPlayerRTC(conf2); 
          $("#rtcgaovideohb12").addClass("rtc_new");
        }else{
          this.v2 = new H5sPlayerWS(conf2);
        }
        this.v2.connect();
        // if (this.$store.state.liveviewrtc1 == 'RTC' || (H5siOS() === true)){
        // 	console.log(this.$store.state.liveviewrtc1,555552)
        // 	this.v2 = new H5sPlayerRTC(conf2);
        // 	$("#rtcgaovideohb12").addClass("rtc_new");
        // }else{
        // 	console.log(this.$store.state.liveviewrtc1,555551)
        //     this.v2 = new H5sPlayerWS(conf2);
        // }
        // console.log("v22222222222222222",this.v2)
        // // // return false;
        // this.v2.connect();
      }else if(this.selectRow=="2"&&this.selectCol=="1"){
        this.selectCol1 = this.selectCol;
        this.selectRow1 = this.selectCol;
        if (this.v3 != undefined){
          this.v3.disconnect();
          delete this.v3;
          this.v3 = undefined;
          console.log("上this.v1",this.v1);
        }
        let pbconf1 = {
          begintime: timevalues,
          endtime: timevaluee,
          autoplay: 'true',
          showposter:"false", //'true' or 'false' show poster
          callback: this.PlaybackCB2,
          serverpb: this.Adswitch, 
          userdata:  this // user data
        };
        let conf3 = {
          videoid: "gaovideohb"+this.selectRow+this.selectCol,
          protocol: "http:", //http: or https:
          host: wsroot, //localhost:8080
          rootpath:'/', // '/'
          token:token,
          pbconf: pbconf1, //This is optional, if no pbconf, this will be live.
          hlsver:'v1', //v1 is for ts, v2 is for fmp4
          session: this.$store.state.token
        };
         if (H5siOS() === true){
          this.v3 = new H5sPlayerRTC(conf3);
          $("#rtcgaovideohb21").addClass("rtc_new");
        }else if(this.curronRadio==1){   
              // 判断是否选中ws播放或者是rtc
          this.v3 = new H5sPlayerWS(conf3);
        }else if(this.curronRadio==2){
          this.v3 = new H5sPlayerRTC(conf3); 
          $("#rtcgaovideohb21").addClass("rtc_new");
        }else{
          this.v3 = new H5sPlayerWS(conf3);
        }
        this.v3.connect();
        // if (this.$store.state.liveviewrtc1 == 'RTC' || (H5siOS() === true)){
        // 	console.log(this.$store.state.liveviewrtc1,555552)
        // 	this.v3 = new H5sPlayerRTC(conf3);
        // 	$("#rtcgaovideohb21").addClass("rtc_new");
        // }else{
        // 	console.log(this.$store.state.liveviewrtc1,555551)
        //     this.v3 = new H5sPlayerWS(conf3);
        // }
        // ////return false;
        // this.v3.connect();
      }else if(this.selectRow=="2"&&this.selectCol=="2"){
        this.selectCol1 = this.selectCol;
        this.selectRow1 = this.selectCol;
        if (this.v4 != undefined){
          this.v4.disconnect();
          delete this.v4;
          this.v4 = undefined;
          console.log("上this.v1",this.v1);
        }
        let pbconf1 = {
          begintime: timevalues,
          endtime: timevaluee,
          autoplay: 'true',
          showposter:"false", //'true' or 'false' show poster
          callback: this.PlaybackCB3,
          serverpb: this.Adswitch, 
          userdata:  this // user data
        };
        let conf4 = {
          videoid: "gaovideohb"+this.selectRow+this.selectCol,
          protocol: "http:", //http: or https:
          host: wsroot, //localhost:8080
          rootpath:'/', // '/'
          token:token,
          pbconf: pbconf1, //This is optional, if no pbconf, this will be live.
          hlsver:'v1', //v1 is for ts, v2 is for fmp4
          session: this.$store.state.token
        };
         if (H5siOS() === true){
          this.v4 = new H5sPlayerRTC(conf4);
          $("#rtcgaovideohb22").addClass("rtc_new");
        }else if(this.curronRadio==1){   
              // 判断是否选中ws播放或者是rtc
          this.v4 = new H5sPlayerWS(conf4);
        }else if(this.curronRadio==2){
          this.v4 = new H5sPlayerRTC(conf4); 
          $("#rtcgaovideohb22").addClass("rtc_new");
        }else{
          this.v4 = new H5sPlayerWS(conf4);
        }
        this.v4.connect();
        // if (this.$store.state.liveviewrtc1 == 'RTC' || (H5siOS() === true)){
        // 	console.log(this.$store.state.liveviewrtc1,555552)
        // 	this.v4 = new H5sPlayerRTC(conf4);
        // 	$("#rtcgaovideohb22").addClass("rtc_new");
        // }else{
        // 	console.log(this.$store.state.liveviewrtc1,555551)
        //     this.v4 = new H5sPlayerWS(conf4);
        // }
        // ////return false;
        // this.v4.connect();
      }  
    },
    //有用啦
    PlaybackCB(event, userdata){
      let msgevent = JSON.parse(event);
      if (msgevent.type === 'H5S_EVENT_PB_TIME'){
        //this.value=msgevent.pbTime.strTime;
        let time = new Date(msgevent.pbTime.strTime).getTime();
        // $("#timeline12").TimeSlider('set_time_to_middle', time);
        $("#timeline11").TimeSlider('set_time_to_middle', time);
      }
    },
    PlaybackCB1(event, userdata){
      let msgevent = JSON.parse(event);
      if (msgevent.type === 'H5S_EVENT_PB_TIME'){
        // this.value=msgevent.pbTime.strTime;
        let time = new Date(msgevent.pbTime.strTime).getTime();
        // $("#timeline12").TimeSlider('set_time_to_middle', time);
        $("#timeline12").TimeSlider('set_time_to_middle', time);
      }
    },
    PlaybackCB2(event, userdata){
      console.log("Playback callback ",11111111111111111);
      let msgevent = JSON.parse(event);
      if (msgevent.type === 'H5S_EVENT_PB_TIME'){
        //  this.value=msgevent.pbTime.strTime;
        let time = new Date(msgevent.pbTime.strTime).getTime();
        // $("#timeline12").TimeSlider('set_time_to_middle', time);
        $("#timeline21").TimeSlider('set_time_to_middle', time);
      }
    },
    PlaybackCB3(event, userdata){
      console.log("Playback callback ",11111111111111111);
      let msgevent = JSON.parse(event);
      if (msgevent.type === 'H5S_EVENT_PB_TIME'){
        //  this.value=msgevent.pbTime.strTime;
        let time = new Date(msgevent.pbTime.strTime).getTime();
        // $("#timeline12").TimeSlider('set_time_to_middle', time);
        $("#timeline22").TimeSlider('set_time_to_middle', time);
      }
    },
    enter1(){
      this.showAdswitch = true;
		},
    enter2(){
      this.fullscreenAdswitch=true;
    },
    //模糊查询
    filterNode(value, data) {
      if (!value) return true;
      return data.strName.indexOf(value) !== -1;
    },
    //横屏
    FullScreen(){
      // console.log("全屏");
      // let playid = 'hvideo' + this.$data.selectRow + this.$data.selectCol;
      // this.$root.bus.$emit('liveplaypull',playid);
      let elem = $("#full").get(0);
      if (document.fullscreenEnabled ||document.webkitFullscreenEnabled ||documentmozFullScreenEnabled ||document.msFullscreenEnabled) {
        if (document.fullscreenElement ||document.webkitFullscreenElement ||document.mozFullScreenElement ||document.msFullscreenElement) {
          if (document.exitFullscreen) {
            document.exitFullscreen();
          } else if (document.webkitExitFullscreen) {
            document.webkitExitFullscreen();
          } else if (document.mozCancelFullScreen) {
            document.mozCancelFullScreen();
          } else if (document.msExitFullscreen) {
            document.msExitFullscreen();
          }
          this.fullplay=false;
          clearInterval(this.timerRunInfo1);
          // this.updateUIExitFullScreen();
        } else {
          let width=window.screen.height;
          let height=window.screen.width;
          let Closehe=$(".Close_flex").height();
          $('div[name="flex"]').width(width);
          $('div[name="flex"]').height(height/ this.rows);
          $("#videoPanel").css({"transform":"rotate(90deg)"});
          $(".Close_flex1").width(width-30);
          $(".Close_flex1").show();
          this.timerRunInfo1 = setInterval(() => {
            this.fullplay=document.webkitIsFullScreen;
          }, 500);
          // console.log('panelFullScreen3关闭',width,height);
          // console.log('屏幕分辨率',window.screen.width ,window.screen.height );
          // console.log('可用工作区',window.screen.availWidth ,window.screen.availHeight );
          if (elem.requestFullscreen) {
            elem.requestFullscreen();
          } else if (elem.webkitRequestFullscreen) {
            elem.webkitRequestFullscreen();
          } else if (elem.mozRequestFullScreen) {
            elem.mozRequestFullScreen();
          } else if (elem.msRequestFullscreen) {
            elem.msRequestFullscreen();
          }
        }
      } else {
        console.log('Fullscreen is not supported on your browser.');
      }
    },
    //实时视频遮罩层显示和隐藏
    showvideo(){
      if(!document.webkitIsFullScreen){
        this.showli = true;
      }
      if(this.show===false){
        this.show=true;
      }else{
        this.show=false;
      }
    },
    //四宫格的高
    updateUI(){
      if($(document.body).width() < 768){
        this.contentHeight = $(document.body).height()*0.35;
        // console.log(this.contentHeight,"高高");
      }else{
        this.contentHeight = $(document.body).height()*0.8;
      }
      $('div[name="flex"]').height(this.contentHeight / this.rows);
      //this.contentHeight = $(document.body).height()*0.8;
      let _this = this;
    },
    // videoClick(r, c, $event) {
    //     this.selectCol = c;
    //     this.selectRow = r;
    //     let h5video='hvideo'+r+c
    //     this.h5videoid=h5video
    //     console.log(r, c,$($event.target).parent().hasClass('videoClickColor'));
    //     if ($($event.target).parent().hasClass('videoClickColor')) {
    //         $($event.target).parent().removeClass('videoClickColor');
    //     } else {
    //         $('#videoPanel div[class*="videoClickColor"]').removeClass('videoClickColor');
    //         $('#videoPanel>div').eq(r - 1).children('div').eq(c - 1).addClass('videoClickColor');
    //     }
    //     if(document.webkitIsFullScreen){
    //         $(".Close_flex1").toggle();
    //     }
    // },
    
    // 区域
    Regional(){
      let root = this.$store.state.callport;
      let url = root + "/api/v1/GetRegion?session="+this.$store.state.token;
      // console.log(url,this.$store.state.callport,this.Useport,root);
      this.$http.get(url).then(result=>{
        let oldarr=result.data.root;
        let oldarr1=result.data.src;
        console.log(oldarr,oldarr1);
        result.data.root.strName="根节点";
        let dataroot=this.getchild(oldarr,oldarr1);
        // console.log(dataroot);
        // this.camdata.push(dataroot);
        // console.log(this.camdata)
        this.datapush(dataroot)
      })
    },
    datapush(data){
      this.level1(data);
    },
    level1(data){
      console.log(data.cam);
      if(data.node.length!=0){
        for (let i = 0; i < data.node.length; i++) {
          data.cam.push(data.node[i]);
        }
      }
      delete data.node
      for (let i = 0; i < data.cam.length; i++) {
        console.log(data);
        this.level2(data.cam[i])
        this.camdata=[];
        this.camdata.push(data);
      }
      console.log(this.camdata);
    },
    level2(data){
      if (data.name) {
        return;
      }
      if(data.node.length!=0){
        for (let i = 0; i < data.node.length; i++) {
          data.cam.push(data.node[i]);
        }
      }
      delete data.node
      for (let i = 0; i < data.cam.length; i++) {
        console.log(data.cam[i]);
        if (data.cam[i].cam) {
          this.level3(data.cam[i]);
        }
      }
    },
    level3(data){
      if (data.name) {
        return;
      }
      if(data.node.length!=0){
        for (let i = 0; i < data.node.length; i++) {
          data.cam.push(data.node[i]);
        }
      }
      delete data.node;
      for (let i = 0; i < data.cam.length; i++) {
        console.log(data.cam[i]);
        if (data.cam[i].cam) {
           this.level4(data.cam[i]);
        }
      }
    },
    level4(data){
      if (data.name) {
        return;
      }
      if(data.node.length!=0){
        for (let i = 0; i < data.node.length; i++) {
          data.cam.push(data.node[i]);
        }
      }
      delete data.node;
      for (let i = 0; i < data.cam.length; i++) {
        console.log(data.cam[i]);
        if (data.cam[i].cam) {
           this.level5(data.cam[i]);
        }
      }
    },
    level5(data){
      if (data.name) {
        return;
      }
      if(data.node.length!=0){
        for (let i = 0; i < data.node.length; i++) {
          data.cam.push(data.node[i]);
        }
      }
      delete data.node;
    },
    //function deepFirstSearch(node,nodeList){
    getchild(arr,arr1) {
      for(var i in arr.cam){
        if(!arr.cam[i].strName){
          // arr.strName = '根节点';
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
              arr.cam[i].name=arr1[j].strName+"--"+'主码流';
              arr.cam[i].bOnline = arr1[j].bOnline;
              arr.cam[i].iconclass="mdi mdi-camcorder fa-fw";
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
        for (let i = 0; i < arr.node.length; i++) {
          arr.node[i] =this.getchild(arr.node[i],arr1);
        }
      }
      return arr;
    },
    //关闭
    handleClose(){
      if (this.v1 != undefined){
        console.log('关闭')
        this.myModal1=false;
        this.v1.disconnect();
        delete this.v1;
        this.v1 = undefined;
      }
    }
  }
}
</script>

<style scoped lang="scss">
/* 全屏 */
.mirrorRotateLevel {
  margin: auto auto;
	/*兼容IE*/
}
.titleCall{
    padding-top:20px;
}
.titleCall .van-col{
    font-size: 23px;
    text-align: left;
    // color: RGBA(107, 231, 195, 1);
    color:#1BD9FE;
    text-indent: 30px;
}
.Callimg{
    margin-top:150px;
}
.Callimg img{
    width: 150px;
    height: 130px;
}
.liveinfo{
  height:74px;
  font-size: 30px;
  font-weight:600;
  text-align: left;
  color: #E7E6E6;
}
.flexvideo{
	z-index: 2014;
  .videoColor{
    border: none;
    background-color: rgb(73, 74, 75) !important;
  }
}

/* 视频下的功能键 */
#full{
	position: relative;
}
.Close_flex{
	display: flex;
	justify-content: space-between;
   align-items:center;
	padding: 13px 15px;
	font-size: 14px;
	color: #C3C3C3;
	background-color: #2D2D30;
  // opacity: 0.5;
}
.Close_flex1{
	width: 100%;
	position: absolute;
	left: 0;
	bottom: 0;
	display: flex;
	justify-content: space-between;
	padding: 10px 15px;
	font-size: 14px;
	color: #C3C3C3;
	background-color: #2D2D30;
}
.video_funsize{
	width: 35%;
	display: flex;
	justify-content: space-around;
}
.video_funsize1{
	width: 45%;
	display: flex;
	justify-content: space-around;
}
.fun_pull{
	width: 14px;
	height: 14px;
	background: url("./imgs/fullscreen2.png") no-repeat center;
	background-size: 300%;
}
.fun_coll{
	width: 14px;
	background: url("./imgs/shaixuan4.png") no-repeat center;
	background-size: 300%;
  position: relative;
}
.fun_voice{
	width: 14px;
	height: 14px;
	background: url("./imgs/voice.png") no-repeat center;
	background-size: 300%;
}
.full_play{
width: 100%;
  // width: 14px;
	// height: 14px;
	// background: url("./imgs/zantingtingzhi.png") no-repeat center;
	// background-size: 300%;
  .button_resume{
    // width: 14px;
    // height: 20px;
    border: none;
    background: none;
    // background-image: url("./imgs/bofang.png");
    // background-size: 360%;
  }
}
.fun_onwwin{
	width: 14px;
	height: 14px;
	background: url("./imgs/onw_window2.png") no-repeat center;
	background-size: 300%;
}
.fun_fouwin{
	width: 14px;
	height: 14px;
	background: url("./imgs/Four_window2.png") no-repeat center;
	background-size: 300%;
}

.wrapper {
  display: flex;
  align-items: center;
  justify-content: center;
  height: 100%;
}
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
  /* background-color: #616263 !important; */
	border: 1px solid #616263;
	/* box-sizing: border-box; */
  /* opacity: 0.50; */
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

.el_tree /deep/ .el-tree-node__label{
  font-size: 15px;
}
/deep/ .el-tree-node:focus > .el-tree-node__content {
  color:#1A73E8;
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

.search /deep/ input::-webkit-input-placeholder, textarea::-webkit-input-placeholder {
  color: #50585CFF;
  font-size: inherit;
}
/deep/ .van-field__left-icon .van-icon, .van-field__right-icon .van-icon{
  font-size: 22px;
}
.function_butt /deep/ .el-input--prefix .el-input__inner{
  padding-left: 0px !important;
  background-color:#2D2D30;
  border: none;
}
.function_butt /deep/ .el-input--suffix .el-input__inner {
  padding-right: 0px !important;
} 
.function_butt /deep/  .el-input__icon{
  font-size: 24px;
}
/deep/ .el-date-editor{
  display: block;
}
/deep/ .el-input__prefix{
  text-align: center;
  left:100%;
  i{
    line-height: 50px;
  }
}
.playbackbottom .jia{
  display: inline-block;
  width: 30px;
  height: 40px;
  background: url(".././assets/image/jia.png") no-repeat center;
  background-size: 100%;
}
.playbackbottom .jian{
  display: inline-block;
  width: 30px;
  height: 40px;
  background: url(".././assets/image/jian.png")  no-repeat center;
  background-size: 100%;
}
.function_butt /deep/ .el-input__inner{
  display: none;
}
/deep/ .selectdrop{
	border: none !important;
  background-color:#2D2D2D !important;
}
/deep/ .selectdrop .hover{
  background: #181818 !important;
}
.full_play /deep/ .el-input__inner{
  border: none;
  border: 1px solid #999;
  background-color: #2D2D30;
}
// /deep/ .el-select-dropdown .el-popper .selectdrop{
//   min-width: 70px;
//   transform-origin: center top;
//   z-index: 2009;
//   position: absolute;
//   top: 28px;
//   left: 0px;
// }
// .fixed_input /deep/ .c-app.c-dark-theme ~ .el-picker-panel {
//   background-color: #181818 !important;
//   border: none !important;
//   color: #FFFFFF !important;
// }
.fixed_input /deep/ .el-input__suffix{
	display:none;
  
}
.back_Choice1{
  // display:none;
  background: #2D2D2D;
  min-width: 80px;
  z-index: 2009;
  position: absolute;
  top: 20px;
  left: -25px;
  border-radius: 10%;
  // div:nth-child(1){
  //   margin-bottom: 10px;
  // }
  .co_Baise{
    color: #fff !important;
  }
}
.back_Choice2{
  background: #2D2D2D;
  min-width: 80px;
  z-index: 2009;
  position: absolute;
  top: -40px;
  left: -30px;
  border-radius: 10%;
  // div:nth-child(1){
  //   margin-bottom: 10px;
  // }
  .co_Baise{
    color: #fff !important;
  }
}
</style>