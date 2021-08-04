<template>
   <div class="CallPolice">
      <van-row class="titleCall">
           <van-col span='24'>录像回放</van-col>
      </van-row>
      <van-row class="Callimg">
           <img src="../assets/image/nonesqul.png" alt="">
      </van-row>
   </div>
</template>

<script>
import Vue from 'vue';
import { Col, Row } from 'vant';

Vue.use(Col);
Vue.use(Row);
export default {
  name:'Playback',
  data(){
      return{
        
      }
    }
  }
</script>

<style scoped>
.titleCall{
    padding-top:20px;
}
.titleCall .van-col{
    font-size: 23px;
    text-align: left;
    color: RGBA(107, 231, 195, 1);
    text-indent: 30px;
}
.Callimg{
    margin-top:150px;
}
.Callimg img{
    width: 150px;
    height: 130px;
}
</style>