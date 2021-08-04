<template>
    <div class="h5container">
        <video class="h5video1" :id="videoid" muted webkit-playsinline playsinline poster="./imgs/blank.png" style= "object-fit: fill;">
        </video>
        <div :id="rtcid" class=""></div>
    </div>
</template>

<script>
// import QRCode from 'qrcodejs2';
import '../assets/js/adapter.js'
import {H5sPlayerWS,H5sPlayerRTC} from '../assets/js/h5splayer.js'
import {H5siOS,H5sPlayerCreate} from '../assets/js/h5splayerhelper.js'
import $ from 'jquery'
import Vue from 'vue';
import { Col, CouponList } from 'vant'
import { Toast } from 'vant';

Vue.use(Toast);
export default {
   name: 'liveplayer',
   props:['h5id', 'h5videoid',"cols","rows"],
   data(){
       return{
          videoid: this.h5videoid,
          h5handler: undefined,//视频内容
          audioback: undefined,
          currtoken: undefined,
          tokenshou:"",
          rtcid:"rtc"+this.h5videoid, 
          playHistory:[{}],//历史记录
          playConf:[],
          captchapath:'',
          curronRadio:this.$store.state.radio,
          confimg:''
       }
   },
    beforeDestroy() {
        //console.log(this.h5id, "beforeDestroy");
        if (this.h5handler != undefined)
        {
            this.h5handler.disconnect();
            delete this.h5handler;
            this.h5handler = undefined;
        }
            this.currtoken = undefined;
    },
    mounted(){
        console.log(this.curronRadio)
        let _this=this;
        this.$root.bus.$on('liveplay', function(token,streamprofile,label,name, id){
            console.log(token,streamprofile,label,name, id)
            // return false;
            if (_this.h5id != id)
            {
                return;
            }
            _this.PlayVideo(token,streamprofile,label,name);
            _this.tokenshou=token;

        });
        this.$root.bus.$on('liveplayproto', function(proto)
        {
            _this.proto = proto;
            // console.log(proto)
            //储存
            localStorage.setItem("proto",_this.proto);
            //console.log("liveplayproto", _this.proto);
        });
        this.$root.bus.$on('liveplayclose', function(vid,playid){
            console.log(vid,playid,_this.videoid);
            if(playid==_this.h5videoid){
                console.log("deng")
                _this.playclose();
            }else{
                console.log("budeng")
                return false
            }
        });
        this.$root.bus.$on('liveplaypull', function(playid){
            if(playid==_this.h5videoid){
                console.log("deng")
                _this.pull(playid);
            }else{
                console.log("budeng")
                return false
            }
        });
        this.$root.bus.$on('liveplayScreenshot', function(vid,Screenshotid){
         console.log(vid,Screenshotid,_this.videoid,_this.h5id );
            // 抓图 
            if(Screenshotid==_this.h5videoid){
             //console.log("deng")
              let token=_this.currtoken
              _this.Screenshoturl(token)
              console.log(token)
            }else{
              return false
         }
      });
    
    },
    methods:{
        pull(playid){
            var elem = $("#"+playid).get(0);
            //var elem = $("#videoPanel");
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
                    console.log("========  updateUIExitFullScreen开启");
                    this.updateUIExitFullScreen();
                } else {
                     console.log('panelFullScreen3关闭');
                    $(".h5video1").addClass('mirrorRotateLevel');
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
        playclose(){
            if (this.h5handler != undefined)
            {
                console.log("////////////",$("#" + this.h5videoid).get(0).load())
                this.h5handler.disconnect();
                delete this.h5handler;
                this.h5handler = undefined;
                $("#" + this.h5videoid).get(0).load();
                $("#" + this.h5videoid).get(0).poster = './imgs/blank.png';
                 this.historyimg()
            }
        },
        PlayVideo(token,streamprofile,label,name){
            if (this.h5handler != undefined)
            {
                console.log("////////////")
                this.h5handler.disconnect();
                delete this.h5handler;
                this.h5handler = undefined;
            }
            this.currtoken = token;
            var root = process.env.API_ROOT;
            var wsroot = process.env.WS_HOST_ROOT;
            if (root == undefined){
                root = "http://"+this.$store.state.Useport.ip+":"+this.$store.state.Useport.port + window.location.pathname;
            }
            if (wsroot == undefined)
            {
                wsroot = this.$store.state.Useport.ip+":"+this.$store.state.Useport.port;
            }
            let conf = {
                videoid: this.videoid,
                protocol:"http:", //http: or https:
                host: wsroot, //localhost:8080
                streamprofile: streamprofile, // {string} - stream profile, main/sub or other predefine transcoding profile
                rootpath: '/', // '/'
                token: token,
                hlsver: 'v1', //v1 is for ts, v2 is for fmp4
                session: this.$store.state.token, //session got from login,
                label:label,
                };
            console.log(H5siOS())
            if (H5siOS() === true)
            {
                this.h5handler = new H5sPlayerRTC(conf);
            }else if(this.curronRadio==1){   
                   // 判断是否选中ws播放或者是rtc
                this.h5handler = new H5sPlayerWS(conf);
            }else if(this.curronRadio==2){
                this.h5handler = new H5sPlayerRTC(conf); 
            }else{
                this.h5handler = new H5sPlayerWS(conf);
            }
            this.h5handler.connect();
            console.log("*******************",conf,this.h5handler)
            //  历史记录
            // let Screenshotsurl="http://"+this.$store.state.Useport.ip+":"+this.$store.state.Useport.port + "/api/v1/GetImage?token=" +token + "&session=" + this.$store.state.token;
            // console.log(Screenshotsurl)
            // // let srcimg=[]
            
			// this.$http({
			// 	url: Screenshotsurl,
			// 	methods: 'get',
			// 	responseType: 'blob',//接收的值类型
			// 	}).then((res) => {
            //        let blob=res.data
			// 	   let src = window.URL.createObjectURL(blob)//转换为图片路径
			// 	   console.log(src)
		      let confitem = {
                        videoid: this.videoid,
                        protocol:"http:", //http: or https:
                        host: wsroot, //localhost:8080
                        streamprofile: streamprofile, // {string} - stream profile, main/sub or other predefine transcoding profile
                        rootpath: '/', // '/'
                        token: token,
                        hlsver: 'v1', //v1 is for ts, v2 is for fmp4
                        session: this.$store.state.token, //session got from login,
                        label:label,
                        Screenshotimg:''
                    };
                console.log(confitem)
                 if(localStorage.getItem('viewHistory')==null){
                       let confarr=[confitem]
                         // 存储 
                            localStorage.setItem("viewHistory",JSON.stringify(confarr));
                          }else{
                           // 取值
                          let playHistory= JSON.parse(localStorage.getItem("viewHistory"))
                          // 去除重复的
                           playHistory= playHistory.filter(item => item.token !== confitem.token);
                           console.log(playHistory)
                           playHistory.unshift(confitem)
                          // 判断是否越界
                          if(playHistory.length>6){
                          playHistory.pop()
                        }
                         // 在把数组转化成字符串传回本地
                        localStorage.setItem("viewHistory",JSON.stringify(playHistory));
                 }
            // })
    },
 Screenshoturl(token){
     console.log(token)
    
    //   储存抓图
      var Screenshotsurl="http://"+this.$store.state.Useport.ip+":"+this.$store.state.Useport.port + "/api/v1/GetImage?token=" +token + "&session=" + this.$store.state.token;
       //  请求后台获取抓图
      this.$http({
              url: Screenshotsurl,
              methods: 'get',
              responseType: 'blob',//接收的值类型
              }).then((res) => {
                console.log(res)
              let blob=res.data
			    let imgURL= window.URL.createObjectURL(blob)//转换为图片路径
			    console.log(imgURL)
			    let fileName='1'
                const dataImg= new Date();  //filename名称截取
                fileName =token + '_' + dataImg.getFullYear() + '-' + (dataImg.getMonth() + 1)+ '-' + dataImg.getDate() + '-' + dataImg.getHours() + ':' + dataImg.getMinutes() + ':' + dataImg.getSeconds();
               var dlLink = document.createElement('a');
                   dlLink.download = fileName;
				   dlLink.href = imgURL;
            //dlLink.dataset.downloadurl = [MIME_TYPE, dlLink.download, dlLink.href].join(':');
                   document.body.appendChild(dlLink);
				   dlLink.click();
                   document.body.removeChild(dlLink);
                   console.log(imgURL)
                   this.$store.commit(types.imgURL,dataImg );
        	
        }).catch(()=>{
            // Toast.fail('请选择抓图对象');    
       })
           
    },
 
//  base64ToBlob (code) {
//         let parts = code.split(';base64,');
//         let contentType = parts[0].split(':')[1];
//         let raw = window.atob(parts[1]);
//         let rawLength = raw.length;
//         let uInt8Array = new Uint8Array(rawLength);
//         for (let i = 0; i < rawLength; ++i) {
//         uInt8Array[i] = raw.charCodeAt(i);
//   }
//    return new window.Blob([uInt8Array], {type: contentType, name: 'file_' + new Date().getTime() + '.jpg'});
// },
}
}
</script>

<style scoped>
    .mirrorRotateLevel {
        transform: rotateY(180deg);   /* 水平镜像翻转 */
    }
    .h5container{
        width: 100% ;
        height: 100%;
    }
    .h5video1{
        width: 100%;
        /* height: 100%; */
        background-color:transparent !important;
        box-sizing: border-box;
        background: none;
    }
</style>