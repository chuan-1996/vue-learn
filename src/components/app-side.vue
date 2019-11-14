<template>
  <div class="side-nav">
    <el-input
      style="width: 200px!important;"
      placeholder="请输入内容"
      prefix-icon="el-icon-search"
      v-model="input2">
    </el-input>
    <ul>
      <li class="searchParam"><span class="side_title">开发指南</span>
        <ul class="pure-menu-list sub-nav" >
         <li class="nav-item"><router-link :to="'/guide/安装'" >安装</router-link></li>
         <li class="nav-item"><router-link :to="'/guide/快速上手'" >快速上手</router-link></li>
         <li class="nav-item"><router-link :to="'/guide/国际化'" >国际化</router-link></li>
         <li class="nav-item"><router-link :to="'/guide/自定义主题'" >自定义主题</router-link></li>
         <li class="nav-item"><router-link :to="'/guide/内置过渡动画'" >内置过渡动画</router-link></li>
        </ul>
      </li>
      <li ><span class="side_title searchParam2">组件</span>
        <div class="nav-group">
          <div class="nav-group__title searchParam">Basic
            <ul class="pure-menu-list" >
             <li class="nav-item"><router-link :to="'/guide/Layout'" >Layout 布局</router-link></li>
             <li class="nav-item"><router-link :to="'/guide/Container'" >Container 布局容器</router-link></li>
             <li class="nav-item"><router-link :to="'/guide/Color'" >Color 色彩</router-link></li>
             <li class="nav-item"><router-link :to="'/guide/Typography'" >Typography 字体</router-link></li>
             <li class="nav-item"><router-link :to="'/guide/Border'" >Border 边框</router-link></li>
             <li class="nav-item"><router-link :to="'/guide/Icon'" >Icon 图标</router-link></li>
             <li class="nav-item"><router-link :to="'/guide/Button'" >Button 按钮</router-link></li>
             <li class="nav-item"><router-link :to="'/guide/Link'" >Link 文字链接</router-link></li>
            </ul>
          </div>
        </div>
        <div class="nav-group">
          <div class="nav-group__title searchParam">Form
            <ul class="pure-menu-list" >
             <li class="nav-item"><router-link :to="'/guide/Radio'" >Radio 单选框</router-link></li>
             <li class="nav-item"><router-link :to="'/guide/Checkbox'" >Checkbox 多选框</router-link></li>
             <li class="nav-item"><router-link :to="'/guide/Input'" >Input 输入框</router-link></li>
             <li class="nav-item"><router-link :to="'/guide/InputNumber'" >InputNumber 计数器</router-link></li>
             <li class="nav-item"><router-link :to="'/guide/Select'" >Select 选择器</router-link></li>
             <li class="nav-item"><router-link :to="'/guide/Cascader'" >Cascader 级联选择器</router-link></li>
             <li class="nav-item"><router-link :to="'/guide/Switch'" >Switch 开关</router-link></li>
             <li class="nav-item"><router-link :to="'/guide/Slider'" >Slider 滑块</router-link></li>
             <li class="nav-item"><router-link :to="'/guide/TimePicker'" >TimePicker 时间选择器</router-link></li>
             <li class="nav-item"><router-link :to="'/guide/DatePicker'" >DatePicker 日期选择器</router-link></li>
             <li class="nav-item"><router-link :to="'/guide/DateTimePicker'" >DateTimePicker 日期时间选择器</router-link></li>
             <li class="nav-item"><router-link :to="'/guide/Upload'" >Upload 上传</router-link></li>
             <li class="nav-item"><router-link :to="'/guide/Rate'" >Rate 评分</router-link></li>
             <li class="nav-item"><router-link :to="'/guide/ColorPicker'" >ColorPicker 颜色选择器</router-link></li>
             <li class="nav-item"><router-link :to="'/guide/Transfer'" >Transfer 穿梭框</router-link></li>
             <li class="nav-item"><router-link :to="'/guide/Form'" >Form 表单</router-link></li>
            </ul>
          </div>
        </div>

        <div class="nav-group">
          <div class="nav-group__title searchParam">Data
            <ul class="pure-menu-list">
             <li class="nav-item"><router-link :to="'/guide/Table'" >Table 表格</router-link></li>
             <li class="nav-item"><router-link :to="'/guide/Tag'" >Tag 标签</router-link></li>
             <li class="nav-item"><router-link :to="'/guide/Progress'" >Progress 进度条</router-link></li>
             <li class="nav-item"><router-link :to="'/guide/Tree'" >Tree 树形控件</router-link></li>
             <li class="nav-item"><router-link :to="'/guide/Pagination'" >Pagination 分页</router-link></li>
             <li class="nav-item"><router-link :to="'/guide/Badge'" >Badge 标记</router-link></li>
             <li class="nav-item"><router-link :to="'/guide/Avatar'" >Avatar 头像</router-link></li>
            </ul>
          </div>
        </div>
        <div class="nav-group">
          <div class="nav-group__title searchParam">Notice
            <ul class="pure-menu-list">
             <li class="nav-item"><router-link :to="'/guide/Alert'" >Alert 警告</router-link></li>
             <li class="nav-item"><router-link :to="'/guide/Loading'" >Loading 加载</router-link></li>
             <li class="nav-item"><router-link :to="'/guide/Message'" >Message 消息提示</router-link></li>
             <li class="nav-item"><router-link :to="'/guide/MessageBox'" >MessageBox 弹框</router-link></li>
             <li class="nav-item"><router-link :to="'/guide/Notification'" >Notification 通知</router-link></li>
            </ul>
          </div>
        </div>
        <div class="nav-group">
          <div class="nav-group__title searchParam">Navigation
            <ul class="pure-menu-list">
             <li class="nav-item"><router-link :to="'/guide/NavMenu'" >NavMenu 导航菜单</router-link></li>
             <li class="nav-item"><router-link :to="'/guide/Tabs'" >Tabs 标签页</router-link></li>
             <li class="nav-item"><router-link :to="'/guide/Breadcrumb'" >Breadcrumb 面包屑</router-link></li>
             <li class="nav-item"><router-link :to="'/guide/PageHeader'" >PageHeader 页头</router-link></li>
             <li class="nav-item"><router-link :to="'/guide/Dropdown'" >Dropdown 下拉菜单</router-link></li>
             <li class="nav-item"><router-link :to="'/guide/Steps'" >Steps 步骤条</router-link></li>
            </ul>
          </div>
        </div>
        <div class="nav-group">
          <div class="nav-group__title searchParam">Others
            <ul class="pure-menu-list">
             <li class="nav-item"><router-link :to="'/guide/Dialog'" >Dialog 对话框</router-link></li>
             <li class="nav-item"><router-link :to="'/guide/Tooltip'" >Tooltip 文字提示</router-link></li>
             <li class="nav-item"><router-link :to="'/guide/Popover'" >Popover 弹出框</router-link></li>
             <li class="nav-item"><router-link :to="'/guide/Card'" >Card 卡片</router-link></li>
             <li class="nav-item"><router-link :to="'/guide/Carousel'" >Carousel 走马灯</router-link></li>
             <li class="nav-item"><router-link :to="'/guide/Collapse'" >Collapse 折叠面板</router-link></li>
             <li class="nav-item"><router-link :to="'/guide/Timeline'" >Timeline 时间线</router-link></li>
             <li class="nav-item"><router-link :to="'/guide/Divider'" >Divider 分割线</router-link></li>
             <li class="nav-item"><router-link :to="'/guide/Calendar'" >Calendar 日历</router-link></li>
             <li class="nav-item"><router-link :to="'/guide/Image'" >Image 图片</router-link></li>
             <li class="nav-item"><router-link :to="'/guide/Backtop'" >Backtop 回到顶部</router-link></li>
             <li class="nav-item"><router-link :to="'/guide/InfiniteScroll'" >InfiniteScroll 无限滚动</router-link></li>
             <li class="nav-item"><router-link :to="'/guide/Drawer'" >Drawer 抽屉</router-link></li>
            </ul>
          </div>
        </div>
      </li>
    </ul>
  </div>
</template>

<script>
    export default {
        data() {
            return {
                input2: ''
            }
        },
        methods:{

        },
        watch: {
            input2: {
                deep: true,
                handler(nv, ov) {
                    var list = document.getElementsByClassName('nav-item');
                    for(var i = 0; i < list.length; ++i){
                        var text =list[i].innerHTML.split('>')[1].split('<')[0];
                        console.log(i+text);
                        if(text.toLowerCase().indexOf(this.input2.toLowerCase()) !== -1){
                            list[i].style.display='block';
                        }
                        else {
                            list[i].style.display='none';
                        }
                    }

                    var list2 = document.getElementsByClassName('searchParam');
                    var j=0;
                    var flag = false;
                    var flag2 = false;
                    var list3=[5,13,29,36,41,47,60];
                    for(var x=0;x<list3.length;++x){
                        flag=false;
                        for(; j < list3[x] ;++j){
                            if(list[j].style.display==='block'){
                                flag=true;
                            }
                        }
                        if(flag){
                            list2[x].style.display='block';
                            if(x>0)flag2 = true;
                        }
                        else{
                            list2[x].style.display='none';
                        }
                    }

                    var zujian = document.getElementsByClassName('searchParam2');
                    if(flag2){
                        zujian[0].style.display='block';
                    }
                    else {
                        zujian[0].style.display='none';
                    }

                }
            }
        },
    }
</script>

<style>
  .side-nav ul {
    padding: 0;
    margin: 0;
    overflow: hidden;
  }
  .side-nav {
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

  .side-nav .nav-item a {
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
  .side-nav .nav-item a:hover {
    color: #409EFF;
  }
  .side-nav .nav-group__title {
    font-size: 12px;
    color: #999;
    line-height: 26px;
    margin-top: 15px;
  }


</style>
