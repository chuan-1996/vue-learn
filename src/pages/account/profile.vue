<template>
  <div class="info-box">
    <div class="profile-box" >
      <h3>Public profile</h3>
        <el-form ref="form" :model="form" :rules="rules">
          <el-form-item  label="Name" label-position="top" prop="realname">
            <el-input v-model="form.realname" ></el-input>
            <span class="span1">Your name may appear around GitHub where you contribute or are mentioned. You can remove it at any time.</span>
          </el-form-item>
          <el-form-item  label="public email" prop="email">
            <el-input v-model="form.email" ></el-input>
            <span class="span1">You have set your email address to private. To toggle email privacy, go to
              <router-link :to="'/account/email'" sylte="color:blue;display:inline!important;">email settings</router-link>
              and uncheck "Keep my email address private."</span>
          </el-form-item>
          <el-form-item label="Bio" prop="bio">
            <el-input v-model="form.bio" type="textarea"
                      :rows="3"
                      maxlength="150"
                      placeholder="Tell us a little bit about yourself"
                      show-word-limit>
            </el-input>
          </el-form-item>
          <el-form-item label="URL" prop="url">
            <el-input v-model="form.url" ></el-input>
          </el-form-item>
          <el-form-item  label="Company" prop="company">
            <el-input v-model="form.company" ></el-input>
          </el-form-item>
          <el-form-item  label="Location" prop="location">
            <el-input v-model="form.location" ></el-input>
            <span class="span1">All of the fields on this page are optional and can be deleted at any time,
              and by filling them out, you're giving us consent to share this data wherever your user profile appears. Please see our
              <router-link :to="'/account/privacy'" sylte="color:blue;display:inline!important;"> privacy statement </router-link>
              to learn more about how we use this information.</span>
          </el-form-item>
          <el-form-item>
            <el-button type="success" @click="onSubmit">更改资料</el-button>
            <el-button @click="Cancel">取消</el-button>
          </el-form-item>
        </el-form>
    </div>
    <div class="card-box">
      <el-card :body-style="{ padding: '0px' }" v-loading="message.loading">
        <img :src="message.imageUrl" class="image" @error="handle"/>
        <div style="padding: 14px;">
          <router-link :to="'/account/edit'" ><i class="el-icon-edit">更换头像</i></router-link>
        </div>
      </el-card>
    </div>
    <app-footer></app-footer>
  </div>
</template>

<script>
import appFooter from '@/components/app-footer'
export default {
    props: ["containerMessage"],
    inject:['reload'],
    components: {
        appFooter,
    },
    data() {
        var validateEmail = (rule, value, callback) => {
            if (value === '') {
                callback(new Error(' '));
            } else {
                if (value !== '') {
                    var reg=/^[A-Za-z0-9\u4e00-\u9fa5]+@[a-zA-Z0-9_-]+(\.[a-zA-Z0-9_-]+)+$/;
                    if(!reg.test(value)){
                        callback(new Error('请输入有效的邮箱'));
                    }
                }
                callback();
            }
        };
        return {
            message:{
                user_data:null,
                imageUrl:this.$store.state.fix_url,
                loading:true,
            },
            form:{
                realname:null,
                email:null,
                bio:null,
                url:null,
                company:null,
                location:null,
            },
            form_fix:{
                realname:null,
                email:null,
                bio:null,
                url:null,
                company:null,
                location:null,
            },
            rules: {
                email: [
                    { validator: validateEmail, trigger: 'blur' }
                ],
            }
        };
    },
    methods:{
        onSubmit(){
            console.log(this.message.user_data);
        },
        handle(){
            this.message.imageUrl = this.$store.state.fix_url;
            return true;
        },
        Cancel() {
            this.reload();
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
.card-box .image{
  padding:  0;
  width: 200px;
  height: 200px;
  border-bottom: 1px solid #ddd;
}

.info-box a {
  text-decoration: none;
  font-size: 14px;
  overflow: hidden;
  white-space: nowrap;
  font-weight: 400;
  transition:0.15s ease-out;
}
.info-box a:hover {
  color: #409EFF;
}

.card-box{
  border: 1px solid #ddd;
  margin: 38px 30px 0 30px!important;
  display: inline-block;
}
.card-box:hover {
  box-shadow: 0 2px 4px rgba(0, 0, 0, .12), 0 0 6px rgba(0, 0, 0, .04)
}

.profile-box {
  vertical-align:top;
  width: 400px;
  margin: 0 20px;
  display: inline-block;
  font-family: -apple-system,BlinkMacSystemFont,Segoe UI,Helvetica,Arial,sans-serif,Apple Color Emoji,Segoe UI Emoji;
}
.profile-box h3{
  font-weight: 400!important;
  font-size: 24px!important;
  border-bottom: 1px solid #ddd!important;
}

.profile-box .el-form-item__label{
  font-weight: 600;
}
.profile-box .el-form-item{
  margin: 10px 0!important;
}
.profile-box .el-input{
  width:300px;
  margin: 0 100px 0 0;
}
.profile-box .el-textarea__inner {
   width: 300px!important;
   margin: 0 100px 0 0!important;
}
.el-textarea .el-input__count{
  bottom: 1px!important;
  right: 115px!important;
  width: fit-content;
  line-height: 12px;
}
.profile-box .span1{
  font-size: 12px;
  width: 400px;
  line-height: 18px;
  margin: 4px 0 2px;
  display:block;
}
.profile-box .el-button{
  width: 100px;

}
</style>
