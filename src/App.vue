<template>
  <div id="app">
    <router-view  v-if="isRouterAlive"/>
  </div>


</template>

<script>
export default {
  name: 'App',
    provide(){
        return {
            reload:this.reload
        }
    },
    data(){
        return {
            isRouterAlive:true
        }
    },
    methods:{
        reload (){
            this.isRouterAlive = false;
            this.$nextTick(function(){
                this.isRouterAlive = true
            });
        }
    },

}
</script>

<style>
html,body,#app{
  background-color: #FFFFFF;
  color: #333;
  margin: 0;
  padding:0;
  height: 100%;
  width: 100%;
  font-family: Helvetica Neue,Helvetica,PingFang SC,Hiragino Sans GB,Microsoft YaHei,SimSun,sans-serif;
  font-weight: 400;
  -webkit-font-smoothing: antialiased;
  -webkit-tap-highlight-color: transparent;
  overflow:hidden !important;
}

.icon {
  width: 1em;
  height: 1em;
  vertical-align: -0.15em;
  fill: currentColor;
  overflow: hidden;
}
</style>
