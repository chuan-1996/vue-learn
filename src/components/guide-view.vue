<template>
  <el-container style="height: 100%; width: 100%;margin: 0;padding: 0;">

    <el-popover
      placement="left"
      trigger="hover"
      ref="popover">
      <div class="popover-content" ><img src='../assets/vrcode.png'  alt=""></div>
    </el-popover>
    <div class="phone raside"  v-popover:popover >
        <i class="el-icon-mobile-phone"></i>
    </div>
    <transition name="slide-fade">
    <div class="backtop raside" v-show="backtopbox" @click='back()'>
      <i class="el-icon-arrow-up"></i>
    </div></transition>

    <el-header >
      <div class="head-main" :style="{marginLeft:+ margin_auto + 'px',marginRight:+ margin_auto + 'px'}">
        <app-header :headerMessage="headerMessage" ></app-header>
      </div>
    </el-header>
    <el-container id="content" >
        <el-aside :style="{marginLeft: margin_auto + 'px'}">
          <div class="side-main" >
            <el-scrollbar>
              <div style="padding:10px 0">
                <app-side></app-side>
              </div>
            </el-scrollbar>
          </div>
        </el-aside>
        <el-main>
          <div class="page-main" >
            <el-scrollbar ref="elscrollbar">
              <div style="padding:20px 60px 30px 20px;" :style="{marginRight: margin_auto + 'px'}">
                <div>
                  {{num}}
                </div>
                <router-view></router-view>
              </div>

              <div class="foot" style="width: 100%;" >
                <div class="page-main-foot" style="padding:20px 50px 50px 20px;" :style="{marginRight: margin_auto + 'px'}">
                  <router-link :to="'/guide/'+before.split(' ')[0]" v-if="this.num > this.pagemin" style="float:left">
                      <i class="el-icon-arrow-left"></i>
                      {{before}}
                  </router-link>

                  <router-link :to="'/guide/'+after.split(' ')[0]" v-if="this.num < this.pagemax" style="float:right;">
                    {{after}}
                    <i class="el-icon-arrow-right"></i>
                  </router-link>
                </div>
              </div>
            </el-scrollbar>
          </div>
        </el-main>
    </el-container>
  </el-container>
</template>

<script>
import appHeader from '@/components/app-header'
import appSide from '@/components/app-side'

export default {
    components: {
        appHeader,
        appSide,
    },
    data() {
        return {
            margin_auto:null,
            num:null,
            before:null,
            after:null,
            pagemin:1,
            pagemax:60,
            backtopbox:false,
            headerMessage:{
                headerIndex:'2',
            },
        }
    },
    methods:{
        back(){
            this.$refs.elscrollbar.wrap.scrollTop =0;
        }
    },
    created(){
        console.log('guide-view created!');
        this.num=parseInt(this.$route.name.split('_')[1]);
        this.before=this.$store.state.Lists.sidePageList[this.num-1].text;
        this.after=this.$store.state.Lists.sidePageList[this.num+1].text;
        this.margin_auto=document.body.clientWidth > this.$store.state.app_width ?  (document.body.clientWidth -this.$store.state.app_width)/this.$store.state.margin_param:0;
    },
    mounted () {
        console.log('guide-view mounted!');

        //回到顶部滚动监听
        this.$refs.elscrollbar.wrap.addEventListener('scroll', () =>{
            if(this.$refs.elscrollbar.wrap.scrollTop>500)
                this.backtopbox = true;
            else
                this.backtopbox = false;
        });

        //窗口变化监听
        window.onresize = () =>{
            this.margin_auto = document.body.clientWidth > this.$store.state.app_width ?  (document.body.clientWidth -this.$store.state.app_width)/this.$store.state.margin_param:0;
        };

        //路由监听
        this.$router.afterEach((to, from, next) => {
            this.$nextTick(() => {
                if(to.path.split('/')[1]==='guide'&&from.path.split('/')[1]==='guide') {
                    this.num = parseInt(this.$route.name.split('_')[1]);
                    this.before = this.$store.state.Lists.sidePageList[this.num - 1].text;
                    this.after = this.$store.state.Lists.sidePageList[this.num + 1].text;
                }
            });
        });


    },
    beforeRouteUpdate (to, from, next) {
        this.back();
        console.log(to.path);
        next();
    },
}
</script>

<style src="../assets/css/view.css">
</style>
