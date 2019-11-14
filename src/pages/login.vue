<template>
<div>
  <div v-show="login_show" class="login-box">
    <el-form ref="loginForm" :model="form" :rules="rules" >
      <h3 class="login-title">欢迎登录</h3>
      <el-form-item  prop="username">
        <el-input type="text" style="border-radius:9px;" placeholder="请输入邮箱或者手机号码" v-model="form.username"  clearable/>
      </el-form-item>
      <el-form-item prop="password">
        <el-input type="password" placeholder="请输入密码" v-model="form.password" show-password/>
      </el-form-item>
    </el-form>
    <div style="display:inline-block;width: 80px;margin-left: 30px;" ><el-button v-on:click="onSubmit('loginForm')" plain>立即登录</el-button></div>
    <el-tooltip class="item" effect="dark" content="勾选此项可以保持30天的登录状态" placement="top">
      <div style="display:inline-block;float:right;margin-top:10px ;font-size: 12px!important;" > <input type="checkbox" v-model=form.remember>记住我</div>
    </el-tooltip>

    <div style="height:60px;font-size: 12px;margin-top: 12px; color: #7f7f7f;text-align: left;"><router-link :to="'/login/forget'" >忘记密码</router-link><span style="float: right">没有账号，
      <a @click="login_show=!login_show">去注册</a>
    </span></div>
    <div style="margin-top:-9px;border-bottom: 1px solid #ddd;height: 20px;text-align: center;"><label>第三方账号登录</label></div>
    <svg class="icon" aria-hidden="true" style="color: #23BF36;">
      <use xlink:href="#icon-icon_wechat"></use>
    </svg>
    <svg class="icon" aria-hidden="true" style="color: #1296DB;">
      <use xlink:href="#icon-icon_qq"></use>
    </svg>
  </div>

  <div v-show="!login_show" class="register-box">
    <h3 class="register-title">&nbsp;</h3>
    <el-form ref="registerForm" :model="form2" :rules="rules" >
      <el-form-item  prop="username">
        <el-input type="text" style="border-radius:9px;" placeholder="设置用户名" v-model="form2.username"  clearable/>
      </el-form-item>

      <el-form-item prop="password">
        <el-input type="password" placeholder="设置密码" v-model="form2.password" show-password/>
      </el-form-item>
      <el-form-item >
        <el-button plain @click="onSubmit2('registerForm')">注册</el-button>
        <div style="height:60px;font-size: 12px;margin-top: 12px; color: #7f7f7f;text-align: left;">
          <router-link :to="'/account/privacy'" sylte="color:blue;display:inline!important;"> privacy statement </router-link>
          <span style="float: right"><a @click="login_show=!login_show">返回登录</a></span></div>
      </el-form-item>

      <span class="span1">Make sure it's at least 15 characters OR at least 8 characters including a number and a lowercase letter.
        <router-link :to="'/privacy'" sylte="color:blue;display:inline!important;"> Learn more</router-link>.</span>

    </el-form>
  </div>
</div>
</template>

<script>
import {api} from '@/api/ajax'

export default {
    props: ["loginMessage"],
    name: "Login",
    inject:['reload'],
    data() {
        return {
            login_show:true,
            form: {
                username: '',
                password: '',
                remember: true,
            },
            form2: {
                username: '',
                password: '',
            },
            rules: {
                username: [
                    {required: true, message: ' ', trigger: 'blur'}
                ],
                password: [
                    {required: true, message: ' ', trigger: 'blur'}
                ]
            },
        }
    },
    methods: {
        onSubmit(formName) {
            // 为表单绑定验证功能
            this.$refs[formName].validate((valid) => {
                if (valid) {
                    api.post('/api/login', this.form).then(response =>{
                        if(response.code===1){
                            this.$notify({title: '', message: '欢迎你, '+this.form.username, type: 'success'});
                            this.$store.commit("setUser",response.data.username);
                            this.$store.commit("setUrl",this.$store.state.img_prefix+response.data.img+this.$store.state.img_suffix);
                            this.reload();
                        }
                        else {
                            this.$notify({title: '', message: response.msg, type: 'error'});
                        }
                    })
                }
                else {
                    this.$notify({title: '', message: '表单填写错误', type: 'warning'});
                }
            });
        },
        onSubmit2(formName) {
            // 为表单绑定验证功能
            this.$refs[formName].validate((valid) => {
                if (valid) {
                    var time =new Date();
                    this.form2.time=time.getTime();
                    api.post('/api/user/register', this.form2).then(response =>{
                        if(response.code===1){
                            console.log(response.data);
                            this.$notify({title: '', message: '注册成功，请登录后完善个人信息, '+this.form.username, type: 'success'});
                            this.login_show=true;
                        }
                        else {
                            this.$notify({title: '', message: response.msg, type: 'error'});
                        }
                    })
                }
                else {
                    this.$notify({title: '', message: '表单填写错误', type: 'warning'});
                }
            });
        },

    },
    mounted() {
    },
    created() {
    },
    watch: {
        loginMessage: {
            deep: true,
            handler(nv, ov) {
                this.login_show = true;
            }
        }
    },
}
</script>

<style >
.login-title {
  text-align: center;
  margin: 0 auto 40px auto;
  color: #303133;

}
.login-box {
  font-size: 12px;
  text-align: center;
  width: 250px;
  padding:40px;
  min-width: 200px;
}

.login-box a{
  text-decoration: none;
  color: #666;
  cursor: pointer;
}

.login-box a{
  transition:0.15s ease-out;
  color: rgb(0,0,238);
  line-height: 40px;
  text-decoration: none;
  font-weight: 400;
}

.login-box a:hover{
  color: #409EFF;
}

.login-box .icon{
  cursor: pointer;
  font-size: 30px;
  margin: 20px 20px 0 20px;
  transition: 1s all;
}

.login-box .icon:hover{
  font-size: 40px;
}




/*/////////////////////////////*/
.register-title {
  text-align: center;
  margin: 0 auto 40px auto;
  color: #303133;

}
.register-box {
  font-size: 12px;
  text-align: center;
  width: 250px;
  padding:40px;
  min-width: 200px;
}

.register-box a{
  transition:0.15s ease-out;
  color: rgb(0,0,238);
  text-decoration: none;
  font-weight: 400;
  cursor: pointer;
}
.register-box .span1{
  font-size: 12px;
}
.register-box a:hover{
  color: #409EFF;
}
</style>
