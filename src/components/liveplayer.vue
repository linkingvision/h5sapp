<template>
    <div class="h5container">
        <video poster="" class="h5video1" :id="videoid" muted webkit-playsinline playsinline style= "object-fit: fill;">
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
import { Col } from 'vant'
export default {
   name: 'liveplayer',
   props:['h5id', 'h5videoid',"cols","rows"],
   data(){
       return{
          videoid: this.h5videoid,
          h5handler: undefined,//视频内容
          audioback: undefined,
          currtoken: undefined,
          currtoken:undefined, 
          tokenshou:"",
          rtcid:"rtc"+this.h5videoid, 
          playHistory:[{}],//历史记录
          playConf:[]
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
    },
    methods:{
        PlayVideo(token,streamprofile,label,name){
            console.log(label)
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
                protocol: window.location.protocol, //http: or https:
                host: wsroot, //localhost:8080
                streamprofile: streamprofile, // {string} - stream profile, main/sub or other predefine transcoding profile
                rootpath: '/', // '/'
                token: token,
                hlsver: 'v1', //v1 is for ts, v2 is for fmp4
                session: this.$store.state.token, //session got from login,
                label:label
            };
            if (H5siOS() === true)
            {
                this.h5handler = new H5sPlayerRTC(conf);
            }else
            {
                this.h5handler = new H5sPlayerWS(conf);
            }
            this.h5handler.connect();

            console.log("*******************",conf,this.h5handler)
            
            //  历史记录
            if(localStorage.getItem('viewHistory')==null){
                let confarr=[conf]
                console.log(confarr)
            // 存储 
            localStorage.setItem("viewHistory",JSON.stringify(confarr));
            }else{
                // 取值
            let playHistory= JSON.parse(localStorage.getItem("viewHistory"))
            // 去除重复的
            
            let index=playHistory.indexOf(conf)
                if( index>-1){
            // 删除重复项
                playHistory.splice(index,1)
                }
                playHistory.unshift(conf)
            //  数据添加后看是否越界
                if(playHistory.length>6){
                    playHistory.pop()
                }
            //  在把数组转化成字符串传回本地
            localStorage.setItem("viewHistory",JSON.stringify(playHistory));
            }
                
        },
        
    }
}
</script>

<style scoped>
    .h5container{
        width: 100% ;
        height: 100%;
    }
    .h5video1{
        /* display: none; */
        width: 100%;
        /* height: 100%; */
        background-color:transparent !important;
        box-sizing: border-box;
        /* display: none; */
        background: none;
    }
</style>