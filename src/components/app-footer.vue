<template>
  <div class="footer">
    <div class="footer-box">
      <span>© 2019 Chuan, Inc</span>
      <router-link :to="'/guide/安装'" >Contact Us</router-link>
      <router-link :to="'/guide/安装'" >API</router-link>
      <router-link :to="'/guide/安装'" >Blog</router-link>
      <router-link :to="'/guide/安装'" >Training</router-link>
      <router-link :to="'/guide/安装'" >About</router-link>
    </div>
  </div>
</template>

<script>
export default {

}
</script>

<style>
.footer span{
  font-size: 12px;
  width: fit-content;
  line-height: 18px;
  margin: 4px 0 2px;
}
.footer{
  height: 80px;
  width: 100%;
  font-family: -apple-system,BlinkMacSystemFont,Segoe UI,Helvetica,Arial,sans-serif,Apple Color Emoji,Segoe UI Emoji;
}
.footer a {
  text-decoration: none;
  color: #444!important;
  overflow: hidden;
  width: fit-content;
  margin: 0 15px;
  white-space: nowrap;
  font-weight: 400;
  transition:0.15s ease-out;
  display: inline!important;
}
.footer a:hover {
  color: #409EFF!important;
}

.footer-box{
  width: fit-content;
  line-height: 80px;
  margin: 0 auto;
}
</style>
