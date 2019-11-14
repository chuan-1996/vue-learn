<template>
  <div class="header" >
    <el-dialog :visible.sync="dialogTableVisible">
      <login :loginMessage="dialogTableVisible"></login>
    </el-dialog>
    <el-menu :default-active='activeIndex' class="el-menu-header" mode="horizontal" @select="handleSelect">
      <el-menu-item index="1">首页</el-menu-item>
      <el-menu-item index="2">指南</el-menu-item>
      <el-menu-item index="3">管理</el-menu-item>
      <div class="rightblock" style=" margin-right: 30px">
        <el-badge :value="message" :max="99" class="item">
          <i class=" el-icon-bell" @click="dosomething()"></i>
        </el-badge>
        <el-dropdown trigger="click" >
        <el-avatar  class="el-dropdown-link" style="vertical-align: middle;display: inline-block;background:white!important;"
                    shape="circle"
                    :size="35" >
          <img :src="circleUrl" @error="handle"/>
        </el-avatar>
          <el-dropdown-menu slot="dropdown" >
            <el-dropdown-item  @click.native="account()" style="border-bottom: solid 1px #a6a6a6;" v-show="!enable">you sign as
              <div style="font-weight: 700; " v-show="!enable"><i class="el-icon-user-solid"></i>{{user}}</div></el-dropdown-item>
            <el-dropdown-item @click.native="login()" v-show="enable">登录</el-dropdown-item>
            <el-dropdown-item @click.native="dosomething()"  v-show="!enable">双皮奶</el-dropdown-item>
            <el-dropdown-item @click.native="dosomething()" v-show="!enable">螺蛳粉</el-dropdown-item>
            <el-dropdown-item @click.native="management()" v-show="!enable">后台管理系统</el-dropdown-item>
            <el-dropdown-item @click.native="dosomething()" style="border-bottom: solid 1px #a6a6a6;" v-show="!enable">蚵仔煎</el-dropdown-item>
            <el-dropdown-item @click.native="logout()"  v-show="!enable">logout</el-dropdown-item>
          </el-dropdown-menu>
        </el-dropdown>
      </div>
    </el-menu>
  </div>
</template>

<script>
import {api}  from '@/api/ajax'
import login from '@/pages/login'
export default {
    props: ["headerMessage"],
    inject:['reload'],
    components: {
        login,
    },
    data() {
        return {
            dialogTableVisible:false,
            activeIndex: null,
            user:null,
            enable:true,
            circleUrl: "",
            message:12,
        };
    },
    methods: {
        handle(){
            this.$store.commit("setUrl",this.$store.state.fix_url);
            this.circleUrl=this.$store.state.url;
            return true;
        },
        handleSelect(key, keyPath) {
            if(key === '1'){
                this.$router.push({path:'/'});
            }
            else if(key === '2'){
                this.$router.push({path:'/guide'});
            }
            else if(key === '3'){
                this.$router.push({path:'/management'});
            }
        },
        account(){
            this.$router.push({path:'/account/'});
        },
        login(){
            this.dialogTableVisible = true
        },
        management(){
            this.$router.push({path:'/management'});
        },
        who(){
            api.get('/api/user/whoami').then(response =>{
                if(response.code===1){
                    this.enable=false;
                    this.$store.commit("setUrl",this.$store.state.img_prefix+response.data.img+this.$store.state.img_suffix);
                    this.$store.commit("setUser",response.data.username);
                    this.user=this.$store.state.username;
                    this.circleUrl=this.$store.state.url;
                    this.$notify({title: '', message: '自动登录中... '+response.data.username});
                }
            });
        },
        dosomething(){
            this.$message("do something");
        },
        logout(){
            api.get('/api/logout').then(response=>{
                if(response.code===1){
                    this.$notify({title: response.msg,  message: '', type: 'success'});
                    this.$store.commit("setUser",null);
                    this.$store.commit("setUrl",this.$store.state.fix_url);
                    this.enable=true;
                    this.reload();
                }
                else{
                    this.$notify({title: response.msg, message: '', type: 'error'});
                }
            });
        },
    },
    watch: {
        headerMessage: {
            deep: true,
            handler(nv, ov) {
                this.activeIndex = nv.headerIndex;
            }
        }
    },
    mounted(){
        console.log('header mounted!');

        this.activeIndex=this.headerMessage.headerIndex;
        if(this.$store.state.username===null){
            this.who();
        }else {
            this.circleUrl=this.$store.state.url;
            this.user=this.$store.state.username;
            this.enable=false;
        }
    },
    created() {
        console.log('header created!');
        this.enable=true;
    }
}
</script>

<style>
.header .el-submenu__title,.el-menu-item{
  color: #333 !important;
}
.header .el-menu-item.is-active {
  color: #409EFF !important;
}
.header .el-submenu__title:hover,.el-menu-item:hover{
  color: #409EFF !important;
}
.header .el-menu-header a{
  text-decoration: none;
  display: block;
  width: 100%;
}

.header .rightblock{
  float: right;
  line-height: 60px;
  display:block;
  height: 60px;
}
.header .rightblock:focus{
  outline:none;
}

.header{
  border-bottom: solid 1px #e6e6e6;
}

.header .item {
  font-size:25px;
  margin: 5px 25px 0 0;
  transition: .15s all;
  cursor: pointer;
}
.header .item:hover{
  font-size:26px;
  color: #409EFF!important;
}
.el-badge__content.is-fixed{
  top:20px!important;
}


/*dropdown元素不在header之内*/
.el-dropdown-link {
  cursor: pointer;
}
.el-dropdown-menu{
  top:44px!important;
  padding: 0!important;
}

.el-dropdown-menu__item:hover{
  background: #409EFF!important;
  color: #FFFFFF!important;
}
.el-dropdown-menu__item:nth-child(1):hover{
  background: #FFFFFF!important;
  color: #333 !important;
}
.el-dropdown-menu__item{
  text-align: center!important;
}
.el-notification {white-space:pre !important; }

/*dialog*/
.header .el-dialog__body {
  padding: 0;
  width:fit-content;
}
.header .el-dialog__header {
  padding: 0;
}
.header .el-dialog {
  position: absolute;
  top: 50%;
  left: 50%;
  margin-top: 0!important;
  transform: translate(-50%, -50%);
  border-radius: 2px;
  -webkit-box-shadow: 0 1px 3px rgba(0,0,0,.3);
  box-shadow: 0 1px 3px rgba(0,0,0,.3);
  -webkit-box-sizing: border-box;
  box-sizing: border-box;
  width: fit-content;
  height: fit-content;
}
</style>
