<template>
  <div class="info-box">
    <div class="security-box" >
      <h3>Change password</h3>
      <el-form ref="form" :model="form" :rules="rules" >
        <el-form-item  label="Old password" label-position="top" prop="oldPassword">
          <el-input v-model="form.oldPassword" show-password></el-input>
        </el-form-item>
        <el-form-item  label="New password" prop="password1">
          <el-input v-model="form.password1" show-password></el-input>
        </el-form-item>
        <el-form-item label="Confirm new password" prop="password2">
          <el-input v-model="form.password2" show-password></el-input>
        </el-form-item>
        <el-form-item>
          <span class="span1">Make sure it's at least 15 characters OR at least 8 characters including a number and a lowercase letter.
        <router-link :to="'/privacy'" sylte="color:blue;display:inline!important;"> Learn more</router-link>.</span>
          <el-button plain @click="onSubmit">修改密码</el-button>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
        <router-link :to="'/privacy'" sylte="color:blue;display:inline!important;">I forgot my password </router-link>

        </el-form-item>
      </el-form>
    </div>
    <app-footer></app-footer>
  </div>
</template>

<script>
import appFooter from '@/components/app-footer'
import {api}  from '@/api/ajax'
export default {
  props: ["containerMessage"],
  components: {
      appFooter,
  },
  data() {
      var check1 = (rule, value, callback) => {
          if (!value) {
              return callback(new Error('不能为空'));
          }else {
              callback();
          }
      };
      var validatePass = (rule, value, callback) => {
          if (value === '') {
              callback(new Error('请输入密码'));
          }else if (value === this.form.oldPassword) {
              callback(new Error('不能与旧密码相同!'));
          }else {
              callback();
          }
      };
      var validatePass2 = (rule, value, callback) => {
          if (value === '') {
              callback(new Error('请再次输入密码'));
          } else if (value !== this.form.password1) {
              callback(new Error('两次输入密码不一致!'));
          } else {
              callback();
          }
      };
      return {
          QQ:'Not yet bound',
          WeChat:'Not yet bound',
          message:{
              user_data:null,
              imageUrl:null,
              loading:true,
          },
          form: {
              oldPassword:'',
              password1: '',
              password2: ''
          },
          rules: {
              password1: [
                  { validator: validatePass, trigger: 'blur' }
              ],
              password2: [
                  { validator: validatePass2, trigger: 'blur' }
              ],
              oldPassword: [
                  { validator: check1, trigger: 'blur' }
              ]
          }
      };
  },
  methods:{
      onSubmit() {
          console.log(this.$refs.form.validate);
          this.$refs.form.validate((valid) => {
              if (valid) {
                  api.post('/api/user/updatePassword', this.form).then(response =>{
                      if(response.code===1){
                          this.$message.success('修改成功');
                          this.form.oldPassword='';
                          this.form.password1='';
                          this.form.password2='';
                      }
                      else {
                          this.$message.error(response.msg);
                      }
                  })
              } else {
                  this.$message.error('填写错误');
              }
          });
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
  white-space: nowrap;
  font-weight: 400;
  transition:0.15s ease-out;
}
.info-box a:hover {
  color: #409EFF;
}

.security-box {
  width: 800px;
  margin: 0 20px;
  font-family: -apple-system,BlinkMacSystemFont,Segoe UI,Helvetica,Arial,sans-serif,Apple Color Emoji,Segoe UI Emoji;
}
.security-box h3{
  font-weight: 400!important;
  font-size: 24px!important;
  border-bottom: 1px solid #ddd!important;
}

.security-box .el-input{
  width:300px;
  margin: 0 500px 0 0;
}

.security-box .span1{
  font-size: 12px;
  line-height: 18px;
  margin: 8px 0 2px;
  display:block;
}

.security-box .span2{
  display:block;
  line-height: 40px;
  margin: 4px 0;
}
.security-box .el-button{
  width: 100px;
}
</style>
