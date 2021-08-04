<template>
    <div class="Androidconfig">
       <!--heate -->
        <van-row class="sysemback">
            <van-col span="8" class="AndroidBlack" @click="aboutBack">
                <span></span>
            </van-col>
            <van-col span="8" class="sysetmconfig">
                <span>系统配置</span>
            </van-col>
            <van-col span="8"></van-col>
        </van-row>
        <van-row class="equipmentSet">
            <van-col span="24">
                设备设置
            </van-col>
        </van-row>
        <van-row class="playConfig">
            <van-col span="8" class="settitle">
                播放配置
            </van-col>
            <van-col span="16">
                <van-radio-group v-model="radio" direction="horizontal" checked-color="#69DAB6" @change='radioChange()'>
                    <van-radio name="1">WS</van-radio>
                    <van-radio name="2">RTC</van-radio>
                </van-radio-group>
            </van-col>
        </van-row>
    </div>
</template>

<script>
import Vue from 'vue';
import * as types from '@/store/types'
import { RadioGroup, Radio } from 'vant';

Vue.use(Radio);
Vue.use(RadioGroup);
export default {
    name:'Androidconfig',
    data() {
     return {
       radio: '1',
    };
  },
    computed:{
        count(){
            return this.$store.commit(types.RADIO, this.radio);
        }
    },

   mounted(){
     console.log(this.$store.state.radio)
     this.$store.commit(types.RADIO, this.radio);
  },
  methods:{
    aboutBack(){
        this.$router.push('../setting')
        console.log(this.$store.state.radio)
    },
    radioChange(){
       this.$store.commit(types.RADIO, this.radio)
    }
  }
}
</script>

<style scoped>
.Androidconfig{
    width: 100%;
    height: 100%;
    box-sizing: border-box;
    position: relative;
 }
.AndroidBlack{
    padding-left:28px ;
}
.AndroidBlack span{
    display:block;
    width: 15px;
    height: 17px;
    background: url('../../assets/image/backs.png') no-repeat;
    background-size:100% 100%;
    margin-top: 15px;
}
.sysemback{
    padding-top: 20px;
}

.sysetmconfig{
    padding-top:12px ;
    font-size: 20px;
    font-weight: 500;
    color: #C3C3C3;
}

.equipmentSet{
    text-align: left;
    background-color: #2D2D30;
    padding-top:25px;
    padding-left:28px;
    padding-bottom:15px;
    margin-top:50px ;
}
.equipmentSet{
    font-size: 18px;
    color: #C3C3C3;
    font-weight: 500;

}
.playConfig{
    padding-left:28px ;
    background-color: #2D2D30;
    padding-bottom:25px ;
}
.playConfig .settitle{
    text-align: left;
    font-size: 15px;
    color: #888888;
    font-weight: 500;
}
.playConfig .van-col .van-radio--horizontal{
    font-size: 18px;
    margin-right:50px;
}
.playConfig .van-col>>>.van-radio__label{
    color: #C3C3C3;
}
</style>