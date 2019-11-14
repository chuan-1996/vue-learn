<template>
  <div class="info-box">
    <div class="account-box" >
      <h3>Change username</h3>
      <span class="span2">Changing your username can have
        <router-link :to="'/privacy'" sylte="color:blue;display:inline!important;"> unintended side effects  </router-link>
        .</span>
      <el-button type="success" @click="onSubmit">更改用户名</el-button>
      <span class="span1"><i class="el-icon-question" style="font-size: 16px;"></i>Looking to manage account security settings? You can find them in the
        <router-link :to="'/privacy'" sylte="color:blue;display:inline!important;"> Security  </router-link>
        tab.</span>


      <h3><svg class="icon" aria-hidden="true" style="color: #23BF36;">
        <use xlink:href="#icon-icon_wechat"></use>
      </svg>WeChat</h3>
      <span class="span2"> {{WeChat}}</span>
      <el-button plain @click="onSubmit">绑定</el-button>


      <h3> <svg class="icon" aria-hidden="true" style="color: #1296DB;">
        <use xlink:href="#icon-icon_qq"></use>
      </svg>QQ</h3>
      <span class="span2">{{QQ}}</span>
      <el-button plain @click="onSubmit">绑定</el-button>

      <h3> <i class="el-icon-mobile-phone"></i>Phone</h3>
      <span class="span2">{{phone}}</span>
      <el-button plain @click="onSubmit">绑定</el-button>

      <h3 style="color:red;">Delete account</h3>
      <span class="span2"  style="color:red;">Once you delete your account, there is no going back. Please be certain.</span>
      <el-button round type="danger" @click="onSubmit">删除账号</el-button>
    </div>

    <app-footer></app-footer>
  </div>
</template>

<script>
import appFooter from '@/components/app-footer'

export default {
    props: ["containerMessage"],
    components: {
        appFooter,
    },
    data() {
        return {
            QQ:'Not yet bound',
            WeChat:'Not yet bound',
            phone:'Not yet bound',
            message:{
                user_data:null,
                imageUrl:null,
                loading:true,
            },

        };
    },
    methods:{
        onSubmit(){
            console.log(this.message.user_data);
        },
        Cancel() {
            this.$router.push({path:'/account/'});
        },

    },
    mounted() {
        this.message=this.containerMessage;
    },
    created() {

    },
    containerMessage: {
        deep: true,
        handler(nv, ov) {
            this.message=nv;
        }
    }
}
</script>

<style>
.info-box{
  border-bottom: 1px solid #ddd;
  padding: 0;
}

.info-box a {
  text-decoration: none;
  font-size: 14px;
  overflow: hidden;
  color: #409EFF;
  white-space: nowrap;
  font-weight: 400;
  transition:0.15s ease-out;
}

.account-box {
  width: 800px;
  margin: 0 20px;
  font-family: -apple-system,BlinkMacSystemFont,Segoe UI,Helvetica,Arial,sans-serif,Apple Color Emoji,Segoe UI Emoji;
}
.account-box h3{
  font-weight: 400!important;
  font-size: 24px!important;
  border-bottom: 1px solid #ddd!important;
}

.account-box .el-input{
  width:300px;
  margin: 0 100px 0 0;
}

.account-box .span1{
  font-size: 12px;
  line-height: 18px;
  margin: 8px 0 2px;
  display:block;
}

.account-box .span2{
  display:block;
  line-height: 40px;
  margin: 4px 0;
}
.account-box .el-button{
  width: 100px;
}


</style>
