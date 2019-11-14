import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex);

export default new Vuex.Store({
  strict: process.env.NODE_ENV !== 'production',
  state: {
    app_width:1140,
    margin_param:2,
    Lists:{
      sidePageList: [
        { id:0,  text:'占位符'},
        { id: 1, text: '安装' },
        { id: 2, text: '快速上手' },
        { id: 3, text: '国际化' },
        { id: 4, text: '自定义主题' },
        { id: 5, text: '内置过渡动画' },
        { id: 6, text: 'Layout 布局' },
        { id: 7, text: 'Container 布局容器' },
        { id: 8, text: 'Color 色彩' },
        { id: 9, text: 'Typography 字体' },
        { id: 10, text: 'Border 边框' },
        { id: 11, text: 'Icon 图标' },
        { id: 12, text: 'Button 按钮' },
        { id: 13, text: 'Link 文字链接' },
        { id: 14, text: 'Radio 单选框' },
        { id: 15, text: 'Checkbox 多选框' },
        { id: 16, text: 'Input 输入框' },
        { id: 17, text: 'InputNumber 计数器' },
        { id: 18, text: 'Select 选择器' },
        { id: 19, text: 'Cascader 级联选择器' },
        { id: 20, text: 'Switch 开关' },
        { id: 21, text: 'Slider 滑块' },
        { id: 22, text: 'TimePicker 时间选择器' },
        { id: 23, text: 'DatePicker 日期选择器' },
        { id: 24, text: 'DateTimePicker 日期时间选择器' },
        { id: 25, text: 'Upload 上传' },
        { id: 26, text: 'Rate 评分' },
        { id: 27, text: 'ColorPicker 颜色选择器' },
        { id: 28, text: 'Transfer 穿梭框' },
        { id: 29, text: 'Form 表单' },
        { id: 30, text: 'Table 表格' },
        { id: 30, text: 'Tag 标签' },
        { id: 31, text: 'Progress 进度条' },
        { id: 32, text: 'Tree 树形控件' },
        { id: 33, text: 'Pagination 分页' },
        { id: 34, text: 'Badge 标记' },
        { id: 35, text: 'Avatar 头像' },
        { id: 36, text: 'Alert 警告' },
        { id: 37, text: 'Loading 加载' },
        { id: 38, text: 'Message 消息提示' },
        { id: 39, text: 'MessageBox 弹框' },
        { id: 40, text: 'Notification 通知' },
        { id: 41, text: 'NavMenu 导航菜单' },
        { id: 42, text: 'Tabs 标签页' },
        { id: 43, text: 'Breadcrumb 面包屑' },
        { id: 44, text: 'PageHeader 页头' },
        { id: 45, text: 'Dropdown 下拉菜单' },
        { id: 46, text: 'Steps 步骤条' },
        { id: 47, text: 'Dialog 对话框' },
        { id: 48, text: 'Tooltip 文字提示' },
        { id: 49, text: 'Popover 弹出框' },
        { id: 50, text: 'Card 卡片' },
        { id: 51, text: 'Carousel 走马灯' },
        { id: 52, text: 'Collapse 折叠面板' },
        { id: 53, text: 'Timeline 时间线' },
        { id: 54, text: 'Divider 分割线' },
        { id: 55, text: 'Calendar 日历' },
        { id: 56, text: 'Image 图片' },
        { id: 57, text: 'Backtop 回到顶部' },
        { id: 58, text: 'InfiniteScroll 无限滚动' },
        { id: 59, text: 'Drawer 抽屉' },
      ]
    },
    img_prefix:'http://127.0.0.1:8082/',
    img_suffix:'.png',
    fix_url:'http://127.0.0.1:8082/03b0d39583f48206768a7534e55bcpng.png',
    // 以上属性运行时不变
    username:null,
    url:'http://127.0.0.1:8082/03b0d39583f48206768a7534e55bcpng.png',
  },
  mutations: {
    INCREMENT(state){
      state.app_width +=20;
    },
    DECREMENT(state){
      state.app_width -=20;
    },

    setUser(state, username) {
      state.username =  username;
    },
    setUrl(state, url) {
      state.url =  url;
    },
  },
  actions: {

  }


})
