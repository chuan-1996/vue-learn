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
      <el-main>
        <div class="page-main" >
          <el-scrollbar ref="elscrollbar">
            <div style="padding:20px 60px 30px 20px;" :style="{marginRight: margin_auto + 'px',marginLeft: margin_auto + 'px'}">
              <router-view></router-view>
            </div>
          </el-scrollbar>
        </div>
      </el-main>
    </el-container>
  </el-container>
</template>

<script>
import appHeader from '@/components/app-header'

export default {
    components: {
        appHeader,
    },
    data() {
        return {
            margin_auto:null,
            backtopbox:false,
            headerMessage:{
                headerIndex:'1',
            },
        }
    },
    methods:{
        back(){
            var scrollToptimer = setInterval(()=> {
                var speed = this.$refs.elscrollbar.wrap.scrollTop/4;
                if (0!=this.$refs.elscrollbar.wrap.scrollTop) {
                    this.$refs.elscrollbar.wrap.scrollTop -= speed;
                }else {
                    this.$refs.elscrollbar.wrap.scrollTop -= speed;
                }
                if (this.$refs.elscrollbar.wrap.scrollTop == 0) {
                    clearInterval(scrollToptimer);
                }
            }, 30);
        },
    },
    created(){
        console.log('index-view created!');
        this.margin_auto=document.body.clientWidth > this.$store.state.app_width ?  (document.body.clientWidth -this.$store.state.app_width)/this.$store.state.margin_param:0;
    },
    mounted () {
        console.log('index-view mounted!');
        this.$refs.elscrollbar.wrap.addEventListener('scroll', () =>{
            if(this.$refs.elscrollbar.wrap.scrollTop>500)
                this.backtopbox = true;
            else
                this.backtopbox = false;
        });
        window.onresize = () =>{
            this.margin_auto = document.body.clientWidth > this.$store.state.app_width ?  (document.body.clientWidth -this.$store.state.app_width)/this.$store.state.margin_param:0;
        };
        this.$router.afterEach((to, from, next) => {
            this.$nextTick(() => {
            });
        })

    },
}
</script>

<style src="../assets/css/view.css">
</style>

