<template>
  <div id="app"> 
     <router-view ></router-view>
  </div>
</template>

<script>
export default {
  name: 'App',
  components: {
   
  },
}
</script>

<style>
html,body{
  height: 100%;
  width: 100%;
  margin: 0;
  padding: 0;
  background-color: #252527;
}

#app {
  width: 100%;
  height: 100%;
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  /* margin-top: 60px; */
 }
  .van-overlay{
    background: none !important;
  }
  
  .van-sticky {
    z-index: 2050;
  }
</style>
