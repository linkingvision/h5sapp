<template>
   	<div class="livecontent">
        <!-- 头部 -->
        <div class="liveheader"></div>
        <div class="liveinfo w">
			<div class="live-h">
				<span class="livespan">实时</span>视频
			</div>
			<!-- 视频播放部分 -->
			<van-sticky>
				<div id="full">
					<div class="flexvideo" id="videoPanel" >
						<div name='flex' style="position: relative;" class="videoColor" v-for="r in rows" :key="r" @click="showvideo">
							<div class="palace" name="flex" v-for="c in cols" @contextmenu.prevent="stopVideo($event)" @click="videoClick(r,c,$event)" :key="c">
								<v-liveplayer v-bind:id="'h'+r+c" :h5id="'h'+r+c" :rows="rows" :cols="cols" :h5videoid="'hvideo'+r+c" >

								</v-liveplayer>
							</div>
						</div>
						<div class="Close_flex1">
							<div class="video_funsize">
								<div class="fun_pull" @click="FullScreen"></div>
								<span class="fun_coll" @click="Favorites"></span>
								<span class="fun_voice"></span>
								<span>标清</span>
							</div>
							<div class="video_funsize1">
								<span class="fun_onwwin" data-row="1|1" @click="changePanel($event)"></span>
								<span class="fun_fouwin" data-row="2|2" @click="changePanel($event)"></span>
								<span @click="close()">关闭</span>
							</div>
						</div>
					</div>
				</div>
				<div class="Close_flex">
					<div class="video_funsize">
						<div class="fun_pull" @click="FullScreen"></div>
						<span class="fun_coll"></span>
						<span class="fun_voice"></span>
						<span>标清</span>
					</div>
					<div class="video_funsize1">
						<span class="fun_onwwin" data-row="1|1" @click="changePanel($event)"></span>
						<span class="fun_fouwin" data-row="2|2" @click="changePanel($event)"></span>
						<span @click="close">关闭</span>
					</div>
				</div>
			</van-sticky>
			<div class="contert">
				<!-- 功能按钮 -->
				<div class="video_but">
					<div class="fun_videotape"></div>
					<span class="fun_Screenshots" @click="Screenshotsurl"></span>
					<span class="fun_yuntai" @click="showyuntai($event)"></span>
					<van-popup class="yuntai" v-model="yuntai" closeable position="bottom" :style="{ height: '48%',width:'100%'}">
						<div>
							<div>
								<p style="font-size:20px;color:#C3C3C3;">{{this.yuntaiName}}</p>
							</div>
							<div>
								<div style="display:flex;flex-direction:row;justify-content:space-between;padding-bottom:12px;padding-top:12px;">
									<span style="display:inline-block;width:40%"></span>
									<div style="width:60%;display:flex;flex-direction: row;justify-content: flex-start;">
										<span style="display:inline-block;font-size:14px;text-align:center;line-height:275%;padding-right:10px;width:20px;">{{parseFloat(Number(Preset_value).toPrecision(15))}}</span>
										<div style="width:70%;padding-top:18px;">					
											<van-slider v-model="Preset_value" bar-height="1px" active-color="white" :step="0.1" :max="1" :min="0.1">
												<template #button>
													<div style="color:transparent;margin-top:-18px;">
														<img src=".././assets/image/yuntai3.png" alt="">
													</div>
												</template>
											</van-slider>
										</div>
									</div>
								</div>
								<div>
									<div>
										<div class="focus">
											<button class="focusbtn1" @mousedown="PtzActionfocusing($event)" @mouseup="PtzActionStop($event)" @touchstart="PtzActionfocusing($event)" @touchend="PtzActionStop($event)"></button>
											<button class="focusbtn2" @mousedown="PtzActionfocusings($event)" @mouseup="PtzActionStop($event)" @touchstart="PtzActionfocusings($event)" @touchend="PtzActionStop($event)"></button>
										</div>
									</div>
									<div style="display:flex;flex-direction:row;justify-content:center;align-items:center;width:100%">
										<div class="aperture">
											<button class="apertureBtn1" @mousedown="PtzActionaperture($event)" @mouseup="PtzActionStop($event)" @touchstart="PtzActionaperture($event)" @touchend="PtzActionStop($event)"></button>
											<button class="apertureBtn2" @mousedown="PtzActionaperturej" @mouseup="PtzActionStop" @touchstart="PtzActionaperturej" @touchend="PtzActionStop"></button>
										</div>
										<div class="lunpan">
											<div class="lunpanTopLeftBtn" @mousedown="PtzActionUpleft($event)" @mouseup="PtzActionStop($event)" @touchstart="PtzActionUpleft($event)" @touchend="PtzActionStop($event)"></div>
											<div class="lunpanTopBtn" @mousedown="PtzActionUp($event)" @mouseup="PtzActionStop($event)" @touchstart="PtzActionUp($event)" @touchend="PtzActionStop($event)"></div>
											<div class="lunpanTopRightBtn" @mousedown="PtzActionUpright($event)"@mouseup="PtzActionStop($event)"@touchstart="PtzActionUpright($event)"@touchend="PtzActionStop($event)"></div>
											<div class="lunpanLefBtn" @mousedown="PtzActionLeft($event)" @mouseup="PtzActionStop($event)" @touchstart="PtzActionLeft($event)" @touchend="PtzActionStop($event)"></div>
											<div class="lunpanRigBtn" @mousedown="PtzActionRight($event)" @mouseup="PtzActionStop($event)" @touchstart="PtzActionRight($event)" @touchend="PtzActionStop($event)"></div>
											<div class="lunpanBottomLeftBtn" @mousedown="PtzActionDownleft($event)"@mouseup="PtzActionStop($event)"@touchstart="PtzActionDownleft($event)" @touchend="PtzActionStop($event)"></div>
											<div class="lunpanBotBtn" @mousedown="PtzActionDown($event)" @mouseup="PtzActionStop($event)" @touchstart="PtzActionDown($event)" @touchend="PtzActionStop($event)"></div>
											<div class="lunpanBottomRightBtn" @mousedown="PtzActionDownright($event)" @mouseup="PtzActionStop($event)" @touchstart="PtzActionDownright($event)" @touchend="PtzActionStop($event)"></div>
										</div>
										<div class="focusing">
											<button class="focusingBtn1" @mousedown="PtzActionZoomIn($event)" @mouseup="PtzActionStop($event)" @touchstart="PtzActionZoomIn($event)" @touchend="PtzActionStop($event)"></button>
											<button class="focusingBtn2" @mousedown="PtzActionZoomOut($event)" @mouseup="PtzActionStop($event)" @touchstart="PtzActionZoomOut($event)" @touchend="PtzActionStop($event)"></button>
										</div> 
									</div>
								</div>
							</div>
						</div>
						<div class="presetBit" style="height:103%;top:630px;right:0;width:100%;background-color:#252526">
							<div style="display:flex;flex-direction:row;justify-content:space-between;padding-bottom:12px;padding-top:12px;">
								<span style="display:inline-block;width:40%">
									<img src=".././assets/image/yuzhiwei.png" alt="" style="width:60px;height:22px">
								</span>
								<div style="width:22%;display:flex;flex-direction:row;justify-content: flex-start;">
									<span @click="scrollTop($event)" style="display:inline-block;font-size:14px;text-align:center;line-height:275%;padding-right:10px;width:40px;">
										<img src=".././assets/image/offyuzhiwei.png" alt="" style="width:40px;height:16px;">
									</span>
								</div>
							</div>
							<div v-for="Pre in Presetdata" :key="Pre.strName" style="display:flex;flex-direction:row;justify-content:flex-start;margin-left:15px;">
								<span style="display:inline-block;line-height:68px;margin-right:20px;">{{Pre.strName}}</span>
								<div class="preset_bgc">
									<input type="text" class="preset_input" :value="Pre.strName">
									<button class="yuzhiweigo" @click="preset_Jump(Pre.strToken)"></button>
									<button class="yuzhiweiset" @click="preset_set(Pre.strToken,$event)"></button>
									<!-- <button class="yuzhiweiclear"></button> -->
								</div>
							</div>
						</div>
					</van-popup>
				</div>
				<!-- 截图遮罩层 -->
				<van-overlay :show="showscreenshot" z-index="99999">
					<div id='Screenshotid' class="wrapper" @click.stop>
						<div class="block" @click="showscreenshotver">
							<img id='downImg' :src="dataurl" alt="">
						</div>
					</div>
				</van-overlay>
				<!-- 最近浏览 -->
				<div class="Recentlybrowse">
					<van-row>
					<van-col span="11">最近浏览</van-col> 
					<van-col span="11"></van-col>
					<van-col span="2">...</van-col>
					</van-row>
					<!-- 最近浏览轮播图 -->
					<van-swipe :loop="false" :width="140" :show-indicators='false'>
					<van-swipe-item  v-for="(item, index) in viewHistory" :key="index"  @click="changePanelhistory($event,item)">
                        <video  width="125" height="70" autoplay  style="background-color:#000000" :poster='item.Screenshotimg'></video>
					</van-swipe-item>
					</van-swipe>
				</div>
				<!-- 收藏夹 -->
				<van-row class="Favorites">
					<van-col span="11">收藏夹</van-col>
					<van-col span="11"></van-col>
					<van-col span="2">...</van-col>
				</van-row>
				<!-- 资源列表 -->
				<van-row class="resource">
					<van-col span="11">资源列表</van-col>
					<van-col span="11" ></van-col>
					<van-col span="2">...</van-col>
				</van-row>
				
				<div id="device1">
					<van-cell is-link @click="showPopup" :border="false" style="background-color: #2D2D30; color:#FFFFFF;">
						<van-col style="color: #FEFEFE;" span="11">资源列表</van-col>
						<van-col style="color: #C3C3C3;" span="11" ></van-col>
					</van-cell>
					<van-popup 
						v-model="showli" round closeable 
						position="bottom" 
						:style="{ height: '46%' }"
						class="van_popup"
						style="">
						<div class="devicetoog">
							<div>区域
								
							</div>
							
						</div>
							<el-input
  						placeholder="输入关键字进行过滤"
  						v-model="filterText"
						>
						</el-input>
						<el-tree class="el_tree" 
							 node-key="strName"
							:default-expanded-keys="['root']" 
							:data="camdata" 
							:props="defaultProps1"
							:filter-node-method="filterNode"
							@node-click="handleNodeClick1"
							 ref="tree"
							 >
							<span slot-scope="{data}" style="width:100%;">
								<span>
									<span class="mdi mdi-view-sequential fa-fw" style="color:rgb(142, 132, 132);"></span>
									<span :class="data.iconclass1" style="padding-left: 4px;">{{data.strName?data.strName:'设备暂时不可用'}}</span>
									
								</span>
								
								<!-- <div v-if="data.cam.length!=0">
									<el-tree class="el_tree1" :data="data.cam" :props="defaultProps1" @node-click="handleNodeClick1" :filter-node-method="filterNode">
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
								</div> -->
							</span>
						</el-tree>

					</van-popup>
				</div>
			</div>
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
// import html2canvas from 'html2canvas'
// import {pushHistory} from '../assets/js/unit'

import Vue from 'vue'
import { Overlay } from 'vant';
import { Slider } from 'vant';

Vue.use(Overlay);
Vue.use(Slider);
//  import "@static/css"
// import { NavBar } from 'vant';
export default {
  name: 'liveview',
  components: {
        'v-liveplayer': Liveplayer
    },
	data () {
		return {
			
			showscreenshot:false,
			fullplay:true,
			showli: false,
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
			Useport: this.$store.state.Useport,
			token:'',
			src:'',
			// h5handler:undefined,
			// videoid:'app',
			// 资源列表



			selectCol: 1,
			electRow: 1,

			//eltree
			filterText: '',
			data:[],
			camdata:[],
			defaultProps: {
				children: 'children',
				label: 'label',
				token:"token",
				iconclass:"iconclass"
			},
			defaultProps1: {
				children: 'cam',
				label: 'strName',
				cam:"cam",
			},
			activefoot:'',
			value:'',
			viewHistory:'',
			img:[''],
			dataurl:'',
			h5videoid:'',
			Screen,
			// yutai
			yuzhiwei:false,
			yuntai:false,
			Preset_value:0.5,
			currtoken:undefined,
			yuntaiName:'',
			Presetdata:[],
		}
	} ,
  // 一进来就要更新的
	mounted(){
		// console.log("token",this.$store.state.token);
		this.updateUI();
		this.Regional();
		$(".Close_flex1").hide();
		this.$root.bus.$emit('liveplayproto',this.proto);
		this.fullplay=document.webkitIsFullScreen;
	},
	beforeDestroy() {
        clearInterval(this.timerRunInfo1);
    },
	created(){
		// this.viewHistory=JSON.parse(localStorage.getItem("viewHistory"))
		// console.log(this.viewHistory)	
		// console.log(this.viewHistory)
		this.historyimg()
		// this.camDataList()
		// console.log(this.viewHistory)
	},
	watch:{
		filterText(val) {
        this.$refs.tree.filter(val);
      },
		fullplay: {
			handler: function (val, oldVal) {
				$(".Close_flex1").hide();
				var width=window.screen.height;
				var height=window.screen.width;
				$('div[name="flex"]').width(height);
				$('div[name="flex"]').height(this.contentHeight / this.rows);
				$("#videoPanel").css({"transform":"none"});
				clearInterval(this.timerRunInfo1);
				this.fullplay=true;
			},
			deep: true
		},
	},
// 方法
methods:{
	showyuntai(){
			let root = this.$store.state.callport;
			this.yuntai = true;
			this.Presetdata = [];
			let cors = this.cols * this.rows;
			if (cors > 4) {
				return false;
			}
			//url
			let url =root +"/api/v1/GetPresets?token=" +this.currtoken +"&session=" +this.$store.state.token;
			//重组
			this.$http.get(url).then((result) => {
				if (result.status == 200) {
					if (result.bStatus == false) {
						return false;
					} else {
						let data = result.data;
						console.log(data);
						for (let i = 0; i < data.preset.length; i++) {
							let newItem = {
								strName: data.preset[i].strName,
								strToken: data.preset[i].strToken,
							};
							this.Presetdata.push(newItem);
						
							if (i > 2) {
								break;
							}
						}
					}
				}
			});
			
			let $container = $("#" + this.h5id);
			let $controls = $container.children(".liveplay_ptz");
			if (this.ptzshow == false) {
				$controls.css("display", "block");
				this.ptzshow = true;
			} else {
				$controls.css("display", "none");
				this.ptzshow = false;
			}
		},
		yuntaiToken(token){
			this.currtoken = token;
			let root = this.$store.state.callport;
			let url = root + "/api/v1/GetRegion?session="+this.$store.state.token;
			this.$http.get(url).then(result=>{
				console.log(result.data.src);
				let str = result.data.src;
				for (let i = 0; i < str.length; i++) {
					if(this.currtoken==str[i].strToken){
						this.yuntaiName = str[i].strName;
					}
				}
			})
		},
		PtzActionfocusing(event) {
			this.PtzAction("focusin");
		},
		PtzActionfocusings(event) {
			this.PtzAction("focusout");
		},
		PtzActionaperture(event) {
			this.PtzAction("irisin");
		},
		PtzActionaperturej(event) {
			this.PtzAction("irisout");
		},
		PtzActionZoomIn(event) {
			console.log("PtzActionZoomIn");
			this.PtzAction("zoomin");
		},
		PtzActionZoomOut(event) {
			this.PtzAction("zoomout");
		},
		PtzActionUp(event) {
			this.PtzAction("up");
		},
		PtzActionUpleft(event) {
			this.PtzAction("upleft");
		},
		PtzActionUpright(event) {
			this.PtzAction("upright");
		},
		PtzActionDownleft(event) {
			this.PtzAction("downleft");
		},
		PtzActionDownright(event) {
			this.PtzAction("downright");
		},
		PtzActionLeft(event) {
			this.PtzAction("left");
		},
		PtzActionRight(event) {
			this.PtzAction("right");
		},
		PtzActionDown(event) {
			this.PtzAction("down");
		},
		PtzActionStop(event) {
			console.log("PtzActionStop");
			this.PtzAction("stop");
		},
		PtzAction(action) {
			let root = this.$store.state.callport;
			// if (this.h5handler == undefined) {
			// 	return;
			// }
			let _this = this;
			let ptzcmd ="token=" +this.currtoken +"&action=" +action +"&speed=" +parseFloat(Number(this.Preset_value).toPrecision(15)) +"";
			console.log("ptzcmd", ptzcmd);
			let url =root +"/api/v1/Ptz?" + ptzcmd + "&session=" + this.$store.state.token;
			this.$http.get(url).then((result) => {
				console.log(result);
				if (result.status == 200) {}
			})
			.catch((error) => {
				console.log("ptz failed!", error);
			});
		},

		//预置位跳转
		preset_Jump(token) {
			//url
			let root = this.$store.state.callport;
			let url =root +"/api/v1/Ptz?token=" +this.currtoken+"&action=preset&preset=" +token +"&speed=" +parseFloat(Number(this.Preset_value).toPrecision(15))+"&session=" +this.$store.state.token;
			console.log(url);
			//重组
			this.$http.get(url).then((result) => {
				if (result.status == 200) {
					console.log("跳转");
				}
			});
		},
		//预置位设置
		preset_set(token, event) {
			let input_val =event.currentTarget.previousElementSibling.previousElementSibling.value;
			//url
			let url =this.$store.state.callport +"/api/v1/SetPreset?token=" +this.currtoken +"&presetname=" +input_val +"&presettoken=" +token +"&session=" +this.$store.state.token;
			console.log(url);
			//重组
			this.$http.get(url).then((result) => {
				if (result.status == 200) {
					console.log(result);
				}
			});
			console.log("设置");
		},
	filterNode(value, data) {
        if (!value) return true;
        return data.strName.indexOf(value) !== -1;
      },
	//弹出曾
	showPopup() {
      	this.showli = true;
	},
	//关闭
  	close(){
		console.log("关闭");
		let vid = 'h' + this.$data.selectRow + this.$data.selectCol;
		let playid = 'hvideo' + this.$data.selectRow + this.$data.selectCol;
		this.$root.bus.$emit('liveplayclose',vid,playid);
		this.currtoken="";
		this.yuntaiName = "";
	},
	FullScreen(){
		// console.log("全屏");
        // let playid = 'hvideo' + this.$data.selectRow + this.$data.selectCol;
		// this.$root.bus.$emit('liveplaypull',playid);
		var elem = $("#full").get(0);
		if (
		document.fullscreenEnabled ||
		document.webkitFullscreenEnabled ||
		document.mozFullScreenEnabled ||
		document.msFullscreenEnabled
		) {
			if (
				document.fullscreenElement ||
				document.webkitFullscreenElement ||
				document.mozFullScreenElement ||
				document.msFullscreenElement
			) {
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
				var width=window.screen.height;
				var height=window.screen.width;
				var Closehe=$(".Close_flex").height()
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
	updateUIExitFullScreen(){
		// console.log("1251")
		$(".Close_flex1").hide();
		var width=window.screen.height;
		var height=window.screen.width;
		$('div[name="flex"]').width(height);
		$('div[name="flex"]').height(this.contentHeight / this.rows);
		$("#videoPanel").css({"transform":"none"});
		// $('.Close_flex').width(height-30);
		if (document.fullscreenElement && document.webkitIsFullScreen && document.mozFullScreen && document.msFullscreenElement)
		{
			console.log("1251")
			$('div[name="flex"]').height(this.contentHeight / this.rows);
		}
	},
  	//实时视频遮罩层显示和隐藏
	showvideo(){
		if(!document.webkitIsFullScreen){
			this.showli = true;
		}
		if(this.show===false){
		this.show=true
		}else{
		this.show=false
		}
	},
	//四宫格的高
	updateUI(){
		if($(document.body).width() < 768)
		{
			this.contentHeight = $(document.body).height()*0.35;
			// console.log(this.contentHeight,"高高")
		}else
		{
			this.contentHeight = $(document.body).height()*0.8;
		}
		$('div[name="flex"]').height(this.contentHeight / this.rows);
		//this.contentHeight = $(document.body).height()*0.8;
		let _this = this;
	},
	//点击宫格
	changePanel(event) {
		console.log(event)
		let data = $(event.target).data('row');
		// console.log(data)
	    let _this = this;
		let cols = data.split('|')[1];
		let rows = data.split('|')[0];
		//this.map.clear();
		Object.assign(_this.$data, {
			rows: parseInt(rows),
			cols: parseInt(cols)
		});
		Vue.nextTick(function () {
			//$('div[name="flex"]').height(($(".content").height() - 50) / rows);
			$('div[name="flex"]').height(_this.contentHeight / rows);
			console.log($('div[name="flex"]'))
			console.log(document.webkitIsFullScreen);
			if(document.webkitIsFullScreen){
				var width=window.screen.height;
				var height=window.screen.width;
				// var Closehe=$(".Close_flex").height()
				$('div[name="flex"]').width(width);
				$('div[name="flex"]').height(height/ _this.rows);
				$("#videoPanel").css({"transform":"rotate(90deg)"});
				// $(".Close_flex").width(width-30);
			}else{
				$('div[name="flex"]').height(_this.contentHeight / rows);
			}
		})
	},


	videoClick(r, c, $event) {
		let str = $($event.currentTarget.firstElementChild).children('video').attr('poster');
		let token = str.substring(str.indexOf('=')+1,str.indexOf('&'));
		this.yuntaiToken(token);
		this.selectCol = c;
		this.selectRow = r;
		 let h5video='hvideo'+r+c
		 this.h5videoid=h5video
		console.log(r, c,$($event.target).parent().hasClass('videoClickColor'));
		if ($($event.target).parent().hasClass('videoClickColor')) {
			$($event.target).parent().removeClass('videoClickColor');
		} else {
			$('#videoPanel div[class*="videoClickColor"]').removeClass('videoClickColor');
			$('#videoPanel>div').eq(r - 1).children('div').eq(c - 1).addClass('videoClickColor');
		}
		if(document.webkitIsFullScreen){
			$(".Close_flex1").toggle();
		}
	},
	stopVideo(event){
		return;
	},
	//资源列表
	//树形节点点击
	handleNodeClick1(data, checked, indeterminate){
		let _this =this;
		console.log(data)
		// var main="main"
		if (data.strToken) {
			let vid = 'h' + _this.$data.selectRow + _this.$data.selectCol;
            console.log("----------------------", data.strToken,data.streamprofile, data.name,data.strName, vid);
			// return false;
			_this.$root.bus.$emit('liveplay', data.strToken,data.streamprofile, data.name,data.strName, vid);
			this.currtoken = data.strToken;
			this.yuntaiName = data.strName;
		}

	},
	// 区域
	Regional(){
		var root = this.$store.state.callport;
		var url = root + "/api/v1/GetRegion?session="+this.$store.state.token;
		// console.log(url,this.$store.state.callport,this.Useport,root);
		this.$http.get(url).then(result=>{
			var oldarr=result.data.root;
			var oldarr1=result.data.src;
			result.data.root.strName="根节点";
			var dataroot=this.getchild(oldarr,oldarr1);
			// console.log(dataroot);
			// this.camdata.push(dataroot);
			// console.log(this.camdata)
			this.datapush(dataroot)
		
		})
	},
	datapush(data){
            this.level1(data)
        },
	      level1(data){
            console.log(data.cam);
            if(data.node.length!=0){
                for (let i = 0; i < data.node.length; i++) {
                data.cam.push(data.node[i])
            }
            }
            delete data.node
            for (let i = 0; i < data.cam.length; i++) {
                console.log(data);
                this.level2(data.cam[i])
                this.camdata=[];
                this.camdata.push(data);
            }
        },
		level2(data){
            if (data.name) {
                return
            }
            if(data.node.length!=0){
                for (let i = 0; i < data.node.length; i++) {
                data.cam.push(data.node[i])
                }
            }
            delete data.node
            for (let i = 0; i < data.cam.length; i++) {
                console.log(data.cam[i]);
                if (data.cam[i].cam) {
                    this.level3(data.cam[i])
                }
            }
        },
        level3(data){
            if (data.name) {
                return
            }
            if(data.node.length!=0){
                for (let i = 0; i < data.node.length; i++) {
                data.cam.push(data.node[i])
            }
            }
            delete data.node;
            for (let i = 0; i < data.cam.length; i++) {
                console.log(data.cam[i]);
                if (data.cam[i].cam) {
                    this.level4(data.cam[i])
                }
            }
        },
        level4(data){
            if (data.name) {
                return
            }
            if(data.node.length!=0){
                for (let i = 0; i < data.node.length; i++) {
                data.cam.push(data.node[i])
            }
            }
            delete data.node;
            for (let i = 0; i < data.cam.length; i++) {
                console.log(data.cam[i]);
                if (data.cam[i].cam) {
                    this.level5(data.cam[i])
                }
            }
        },
        level5(data){
            if (data.name) {
                return
            }
            if(data.node.length!=0){
                for (let i = 0; i < data.node.length; i++) {
                data.cam.push(data.node[i])
            }
            }
            delete data.node;
        },
	//function deepFirstSearch(node,nodeList){
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
	    // 历史记录播放
	changePanelhistory(event,item) {
		console.log(event);
		this.yuntaiToken(item.token,item.name);
		let _this = this;
		let vid = 'h' + _this.$data.selectRow + _this.$data.selectCol;
		let playid = 'hvideo' + this.$data.selectRow + this.$data.selectCol;
		_this.$root.bus.$emit('liveplay', item.token,item.streamprofile, item.name,item.strName, vid);
		var root = process.env.API_ROOT;
		var wsroot = process.env.WS_HOST_ROOT;
		if (root == undefined){
			root = "http://"+this.$store.state.Useport.ip+":"+this.$store.state.Useport.port + window.location.pathname;
		}
	    let conf = {
                videoid: 'playid',
                protocol:"http:", //http: or https:
                host: item.host, //localhost:8080
                streamprofile:item.streamprofile, // {string} - stream profile, main/sub or other predefine transcoding profile
                rootpath:item.rootpath, // '/'
                token: item.token,
                hlsver: item.hlsver, //v1 is for ts, v2 is for fmp4
                session: item.session, //session got from login,
                label: item.label,
                };
	   this.h5handler = new H5sPlayerRTC(conf);
	   $("#"+this.rtcid).addClass("rtc_new");
	   this.h5handler = new H5sPlayerWS(conf);
	   this.h5handler.connect();
	},
    historyimg(){
	   // 储存抓图
	   let srcimg=[]
	   let Screen=JSON.parse(localStorage.getItem("viewHistory"))
		Screen.forEach((value,index,arr)=>{
			let token=value.token
			console.log(token )
		// return false
		    let Screenshotsurl="http://"+this.$store.state.Useport.ip+":"+this.$store.state.Useport.port + "/api/v1/GetImage?token=" +token + "&session=" + this.$store.state.token;
			console.log(Screenshotsurl)
			this.$http({
				url: Screenshotsurl,
				methods: 'get',
				responseType: 'blob',//接收的值类型
				}).then((res) => {
				let blob=res.data
				let src = window.URL.createObjectURL(blob)//转换为图片路径
				console.log(src)
					// srcimg.push(src)+"<br/>"
					srcimg.splice(0,0,src) 
				    this.$nextTick(() => {
			        console.log(srcimg)
			        let dataimg=Screen.map(function(item,index,array){
						return {
								hlsver: item.hlsver,
								host: item.host,
								label:item.label,
								protocol:item.protocol,
								rootpath:item.rootpath,
								session:item.session,
								token: item.token,
								videoid: item.videoid,
								Screenshotimg:srcimg[index]
							}
					 })
				 this.viewHistory=dataimg
				console.log(dataimg)
			})
		 }) 
	 })
	},
	Screenshotsurl(){
		// this.showscreenshot=true
	  	let vid = 'h' + this.$data.selectRow + this.$data.selectCol;
		let Screenshotid = 'hvideo' + this.$data.selectRow + this.$data.selectCol;
		 this.$root.bus.$emit('liveplayScreenshot', vid,Screenshotid);
    },
 getBlob (canvas) { //获取blob对象
     let dataUrl= canvas.toDataURL("image/jpeg");
     let blob =this.base64ToBlob(dataUrl)
    },
 base64ToBlob (code) {
	let parts = code.split(';base64,');
	let contentType = parts[0].split(':')[1];
	let raw =window.decodeURIComponent(window.atob(parts[1]))
	let rawLength = raw.length;
	let uInt8Array = new Uint8Array(rawLength);
	for (let i = 0; i < rawLength; ++i) {
		uInt8Array[i] = raw.charCodeAt(i);
  }
  return new window.Blob([uInt8Array], {type: contentType, name: 'file_' + new Date().getTime() + '.jpg'});
},

   showscreenshotver(){
		 this.showscreenshot=false
	 },
	// 收藏夹
	Favorites(){
		console.log(1)
	   // 当点击星号标的时候星号标显示高亮
     }
    // ---------------------------------------------------//
 }
}

</script>
<style  scoped lang="scss">

.contert{
	margin: 0 10px;
}
/* 全屏 */
.mirrorRotateLevel {
	margin: auto auto;
	/*兼容IE*/
}
/deep/.el-input .el-input__inner{
	background:#252527;
	border: none;
}
.van_popup /deep/ input::-webkit-input-placeholder, textarea::-webkit-input-placeholder {
  color: #50585CFF;
}
/* 视频列表弹框 */

.van_popup{
	padding: 0px 10px 0 10px;box-sizing: border-box;
	background-color: #111111FF;
}
.el_tree{
	color: #C3C3C3 !important;
	background-color: #111111FF;
}
.el_tree1{
	color: #C3C3C3 !important;
	background-color: #252526;
}
.el-tree >>>.el-tree-node:focus>.el-tree-node__content{
	background-color: #2D2D30;
}
/* 功能键 */
.video_but{
	display: flex;
	justify-content: space-around;
	padding: 30px 0;
	font-size: 14px;
	color: #C3C3C3;
}
.fun_videotape{
	width: 30px;
	height: 30px;
	background: url("./imgs/videotape.png") no-repeat center;
	background-size: 100%;
}
.fun_Screenshots{
	width: 30px;
	height: 30px;
	background: url("./imgs/Screenshots.png") no-repeat center;
	background-size: 100%;
}
.fun_yuntai{
	width: 30px;
	height: 30px;
	background: url("./imgs/Yuntai.png") no-repeat center;
	background-size: 100%;
}
/* 视频下的功能键 */
#full{
	position: relative;
}
.Close_flex{
	display: flex;
	justify-content: space-between;
	padding: 10px 15px;
	font-size: 14px;
	color: #C3C3C3;
	background-color: #2D2D30;
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
	width: 50%;
	display: flex;
	justify-content: space-around;
}
.video_funsize1{
	width: 35%;
	display: flex;
	justify-content: space-around;
}
.fun_pull{
	width: 14px;
	height: 14px;
	background: url("./imgs/pull.png") no-repeat center;
	background-size: 100%;
}
.fun_coll{
	width: 14px;
	height: 14px;
	background: url("./imgs/Collection.png") no-repeat center;
	background-size: 100%;
}
.fun_voice{
	width: 14px;
	height: 14px;
	background: url("./imgs/voice.png") no-repeat center;
	background-size: 100%;
}
.fun_onwwin{
	width: 14px;
	height: 14px;
	background: url("./imgs/onw_window.png") no-repeat center;
	background-size: 100%;
}
.fun_fouwin{
	width: 14px;
	height: 14px;
	background: url("./imgs/Four_window.png") no-repeat center;
	background-size: 100%;
}

.wrapper {
    display: flex;
    align-items: center;
    justify-content: center;
    height: 100%;
  }
 .block {
    /* width: 80%px; */
    height:100%px;
    background-color: #fff;
  }
 .block img{
	 display:block;
	 width: 100%;
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
.Favorites{
 margin-top:10px ;
}
/* 收藏夹 */
.Favorites>.van-col{
   color:#747475 ;
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
  width: 100%;
  /* padding:10px; */
  height:100%;
  background-color: #252527;
  padding-bottom: 64px;
}
.liveinfo{
  /* height: 1000px; */
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
	padding-left: 20px;
	font-size:22px;
	line-height: 55px;
	box-sizing: border-box;
	margin: 30px 0 8px 0;
}
.liveinfo .livespan{
  color: #1BD9FE;
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
	z-index: 2014;
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
  /* height: 130px; */
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

/deep/ .el-tree-node:focus > .el-tree-node__content {
  color:#1A73E8;
  background-color: transparent;
}
// 云台
.yuntai{
	background-color:#252526;
	padding-left:15px;
	// 聚焦按钮
	.focus{
		width:30%;
		height:40px;
		margin-left: 24px;
		.focusbtn1{
			width:40%;
			height:40px;
			background:url('.././assets/image/jujiao1.png')  no-repeat center;
			background-size: 70%;
			border:none;
		}
		.focusbtn2{
			width:40%;
			height:40px;
			background:url('.././assets/image/jujiao2.png')  no-repeat center;
			background-size: 70%;
			border:none;
		}
	}
	// 光圈
	.aperture{
		width:16%;
		height: 175px;
		display: flex;
		flex-direction:column;
		margin-left: 10px;
		.apertureBtn1{
			width:55%;
			height:70px;
			background:url('.././assets/image/guangquan1.png')  no-repeat center;
			background-size: 95%;
			border:none;
		}
		.apertureBtn2{
			width:55%;
			height:50px;
			background:url('.././assets/image/guangquan2.png')  no-repeat center;
			background-size: 95%;
			border:none;
		}
	}
	// 方向
	.lunpan{
		width:60%;
		height: 175px;
		background:url('.././assets/image/lunpan.png')  no-repeat center;
		background-size: 60%;
		position: relative;
		div{
			width:20px;
			height:20px;
		}
		.lunpanTopLeftBtn{
			position: absolute;
			top:45px;
			left:30%;
		}
		.lunpanTopBtn{
			position: absolute;
			top:30px;
			left:45%;
		}
		.lunpanTopRightBtn{
			position: absolute;
			top:45px;
			left:60%;
		}
		.lunpanLefBtn{
			position: absolute;
			top:75px;
			left:25%;
		}
		.lunpanRigBtn{
			position: absolute;
			top:75px;
			left:65%;
		}
		.lunpanBottomLeftBtn{
			position: absolute;
			top:110px;
			left:30%;
		}
		.lunpanBotBtn{
			position: absolute;
			top:125px;
			left:45%;
		}
		.lunpanBottomRightBtn{
			position: absolute;
			top:110px;
			left:60%;
		}
	}
	// 调焦
	.focusing{
		width:10%;
		height:175px;
		display: flex;
		flex-direction:column;
		background:url('.././assets/image/topbottom.png')  no-repeat;
		background-size: 80%;
		button{
			width: 80%;
			height: 27%;
			background-color: transparent;
			border: none;
		}
	}
	// 预置位
	.preset_bgc{
		width: 70%;
		height: 24px;
		background: rgba(255, 255, 255, 0.2);
		display: flex;
		align-content: center;
		margin-top: 20px;
		.preset_input {
			width: 60%;
			height: 24px;
			background: none;
			/* opacity:0.2; */
			border-radius: 12px;
			border: 0px;
			padding: 0 0 0 10px;
			color: rgba(255, 255, 255, 1) !important;
		}
		button {
			width: 10%;
			background: none;
			border: 0;
			font-size: 15px;
			color: #ffffff;
			margin-left: 3px;
		}
		.yuzhiweigo{
			height: 24px;
			background: url(.././assets/image/yuzhiweigo.png)no-repeat center;
			background-size: 70%;
		}
		.yuzhiweiset{
			height: 24px;
			background: url(.././assets/image/yuzhiweiset.png)no-repeat center;
			background-size: 70%;
		}
		.yuzhiweiclear{
			height: 24px;
			background: url(.././assets/image/yuzhiweiclear.png)no-repeat center;
			background-size: 70%;
		}
	}
}
</style>
