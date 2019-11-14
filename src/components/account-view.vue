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
      </div>
    </transition>

    <el-header >
      <div class="head-main" :style="{marginLeft:+ margin_auto + 'px',marginRight:+ margin_auto + 'px'}">
        <app-header :headerMessage="headerMessage" ></app-header>
      </div>
    </el-header>
    <el-container id="content" >
      <el-main>
        <div class="page-main" >
          <el-tabs v-model="activeName" type="card" @tab-click="handleClick" :style="{marginRight: margin_auto + 'px',marginLeft: margin_auto + 'px'}">
            <el-tab-pane label="个人资料" name="profile"> </el-tab-pane>
            <el-tab-pane label="账号关联" name="account"> </el-tab-pane>
            <el-tab-pane label="账号安全" name="security"> </el-tab-pane>
          </el-tabs>
          <el-scrollbar ref="elscrollbar">
            <div style="padding:0 0 30px 0;" :style="{marginRight: margin_auto + 'px',marginLeft: margin_auto + 'px'}">
              <router-view :containerMessage="containerMessage"></router-view>
            </div>
          </el-scrollbar>
        </div>
      </el-main>
    </el-container>
  </el-container>
</template>

<script>
import appHeader from '@/components/app-header'
import {api}  from '@/api/ajax'
export default {
    components: {
        appHeader,
    },
    data() {
        return {
            margin_auto:null,
            backtopbox:false,
            activeName: 'profile',
            headerMessage:{
                headerIndex:'0',
            },
            containerMessage:{
                user_data:null,
                imageUrl:null,
                loading:true,
            },
        }
    },
    methods:{
        handleClick(tab, event) {
            this.$router.push({path:'/account/'+tab.name});
        },
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
        this.margin_auto=document.body.clientWidth > this.$store.state.app_width ?  (document.body.clientWidth -this.$store.state.app_width)/this.$store.state.margin_param:0;
        console.log('account-view created!');
    },
    mounted () {
        console.log('account-view mounted!');

        this.activeName=this.$route.name.split('_')[1];
        api.get('/api/user/authc/whoami').then(response =>{
            if(response.code===1){
                this.containerMessage.user_data=response.data;
                this.containerMessage.imageUrl=this.$store.state.img_prefix+response.data.img+this.$store.state.img_suffix;
                this.containerMessage.loading=false;
            }
            else{
                this.$message.error('读取个人信息失败');
            }
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

