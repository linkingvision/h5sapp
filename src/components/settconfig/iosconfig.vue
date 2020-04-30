<template>
    <div class="iosconfig">
       <!--heate -->
        <van-row class="iossysemback">
            <van-col span="8" class="iosBlack" @click="iosBack">
                <span></span>
            </van-col>
            <van-col span="8" class="iossysetmconfig">
                <span>系统配置</span>
            </van-col>
            <van-col span="8"></van-col>
        </van-row>
        <van-row class="iosequipmentSet">
            <van-col span="24">
                设备设置
            </van-col>
        </van-row>
        <van-row class="iosplayConfig">
            <van-col span="8" class="iossettitle">
                播放配置
            </van-col>
            <van-col span="8" class="rtc">RTC</van-col>
            <van-col span="8"></van-col>
        </van-row>
    </div>
</template>

<script>
import Vue from 'vue';
import { Checkbox, CheckboxGroup } from 'vant';

Vue.use(Checkbox);
Vue.use(CheckboxGroup);
export default {
    data() {
    return {
      WSchecked: true,
      RTCchecked:false
    };
  },
  methods:{
    iosBack(){
        this.$router.push('../setting')
    }
  }
}
</script>

<style scoped>
.iosconfig{
    width: 100%;
    height: 100%;
    box-sizing: border-box;
    position: relative;
 }
.iosBlack{
    padding-left:28px ;
}
.iosBlack span{
    display:block;
    width: 15px;
    height: 17px;
    background: url('../../assets/image/backs.png') no-repeat;
    background-size:100% 100%;
    margin-top: 15px;
}
.iossysemback{
    padding-top: 20px;
}

.iossysetmconfig{
    padding-top:12px ;
    font-size: 20px;
    font-weight: 500;
    color: #C3C3C3;
}

.iosequipmentSet{
    text-align: left;
    background-color: #2D2D30;
    padding-top:25px;
    padding-left:30px;
    padding-bottom:15px;
    margin-top:50px ;
}
.iosequipmentSet{
    font-size: 18px;
    color: #C3C3C3;
    font-weight: 500;

}
.iosplayConfig{
    padding-left:30px ;
    background-color: #2D2D30;
    padding-bottom:25px ;
}
.iosplayConfig .iossettitle{
    text-align: left;
    font-size: 15px;
    color: #888888;
    font-weight: 500;
}
.iosplayConfig>>>.rtc{
    font-size: 18px;
    color: #C3C3C3;
}
</style>

</style>