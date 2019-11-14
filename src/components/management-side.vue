<template>
  <div class="side-mana">
    <ul>
      <li class="searchParam"><span class="side_title">数据</span>
        <ul class="pure-menu-list sub-nav" >
         <li class="nav-item"><router-link :to="'/management/pie'" >饼状图</router-link></li>
         <li class="nav-item"><router-link :to="'/management/userList'" >用户列表</router-link></li>
         <li class="nav-item"><router-link :to="'/management/tendency'" >走势图</router-link></li>
         <li class="nav-item"><router-link :to="'/management/自定义主题'" >自定义主题</router-link></li>
         <li class="nav-item"><router-link :to="'/management/内置过渡动画'" >内置过渡动画</router-link></li>
        </ul>
      </li>
      <li class="searchParam"><span class="side_title">设置</span>
        <ul class="pure-menu-list sub-nav" >
          <li class="nav-item"><router-link :to="'/management/安装'" >安装</router-link></li>
          <li class="nav-item"><router-link :to="'/management/快速上手'" >快速上手</router-link></li>
          <li class="nav-item"><router-link :to="'/management/国际化'" >国际化</router-link></li>
          <li class="nav-item"><router-link :to="'/management/自定义主题'" >自定义主题</router-link></li>
          <li class="nav-item"><router-link :to="'/management/内置过渡动画'" >内置过渡动画</router-link></li>
        </ul>
      </li>
    </ul>
  </div>
</template>

<script>
export default {

}
</script>

<style>
  .side-mana ul {
    padding: 0;
    margin: 0;
    overflow: hidden;
  }
  .side-mana {
    padding: 0;
    margin: 0;
    height: 100%;
    overflow: hidden;
  }
  .side_title {
    color: #333;
    line-height: 40px;
    text-decoration: none;
    font-weight: 700;
  }

  .side-mana .nav-item a {
    text-decoration: none;
    display: block;
    color: #444;
    line-height: 40px;
    font-size: 14px;
    overflow: hidden;
    white-space: nowrap;
    font-weight: 400;
    transition:0.15s ease-out;
  }
  .side-mana .nav-item a:hover {
    color: #409EFF;
  }
  .side-mana .nav-group__title {
    font-size: 12px;
    color: #999;
    line-height: 26px;
    margin-top: 15px;
  }


</style>
