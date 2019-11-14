import Vue from 'vue'
import Router from 'vue-router'
import guideView from '@/components/guide-view'
import homeView from '@/components/index-view'
import accountView from '@/components/account-view'
import managementView from '@/components/management-view'
Vue.use(Router);

const page = name => () => import('@/pages/' + name);

export default new Router({
  mode: 'history',
  strict: process.env.NODE_ENV !== 'production',
  routes: [
    {
      path: '/',
      component: homeView,
      children: [
        {path: '/', name: 'index', component: page('index/首页'),},
        {path: '/privacy', name: 'privacy', component: page('index/privacy'),},
      ],
    },
    {
      path: '/guide',
      component: guideView,
      children: [
        {path: '/guide/', name: 'pages_1', component: page('guide/安装'),},
        {path: '/guide/安装', name: 'page_1', component: page('guide/安装'),},
        {path: '/guide/快速上手', name: 'page_2', component: page('guide/快速上手'),},
        {path: '/guide/国际化', name: 'page_3', component: page('guide/国际化'),},
        {path: '/guide/自定义主题', name: 'page_4', component: page('guide/自定义主题'),},
        {path: '/guide/内置过渡动画', name: 'page_5', component: page('guide/内置过渡动画'),},
        {path: '/guide/Layout', name: 'page_6', component: page('guide/Layout布局'),},
        {path: '/guide/Container', name: 'page_7', component: page('guide/Container布局容器'),},
        {path: '/guide/Color', name: 'page_8', component: page('guide/Color色彩'),},
        {path: '/guide/Typography', name: 'page_9', component: page('guide/Typography字体'),},
        {path: '/guide/Border', name: 'page_10', component: page('guide/Border边框'),},
        {path: '/guide/Icon', name: 'page_11', component: page('guide/Icon图标'),},
        {path: '/guide/Button', name: 'page_12', component: page('guide/Button按钮'),},
        {path: '/guide/Link', name: 'page_13', component: page('guide/Link文字链接'),},
        {path: '/guide/Radio', name: 'page_14', component: page('guide/Radio单选框'),},
        {path: '/guide/Checkbox', name: 'page_15', component: page('guide/Checkbox多选框'),},
        {path: '/guide/Input', name: 'page_16', component: page('guide/Input输入框'),},
        {path: '/guide/InputNumber', name: 'page_17', component: page('guide/InputNumber计数器'),},
        {path: '/guide/Select', name: 'page_18', component: page('guide/Select选择器'),},
        {path: '/guide/Cascader', name: 'page_19', component: page('guide/Cascader级联选择器'),},
        {path: '/guide/Switch', name: 'page_20', component: page('guide/Switch开关'),},
        {path: '/guide/Slider', name: 'page_21', component: page('guide/Slider滑块'),},
        {path: '/guide/TimePicker', name: 'page_22', component: page('guide/TimePicker时间选择器'),},
        {path: '/guide/DatePicker', name: 'page_23', component: page('guide/DatePicker日期选择器'),},
        {path: '/guide/DateTimePicker', name: 'page_24', component: page('guide/DateTimePicker日期时间选择器'),},
        {path: '/guide/Upload', name: 'page_25', component: page('guide/Upload上传'),},
        {path: '/guide/Rate', name: 'page_26', component: page('guide/Rate评分'),},
        {path: '/guide/ColorPicker', name: 'page_27', component: page('guide/ColorPicker颜色选择器'),},
        {path: '/guide/Transfer', name: 'page_28', component: page('guide/Transfer穿梭框'),},
        {path: '/guide/Form', name: 'page_29', component: page('guide/Form表单'),},
        {path: '/guide/Table', name: 'page_30', component: page('guide/Table表格'),},
        {path: '/guide/Tag', name: 'page_31', component: page('guide/Tag标签'),},
        {path: '/guide/Progress', name: 'page_32', component: page('guide/Progress进度条'),},
        {path: '/guide/Tree', name: 'page_33', component: page('guide/Tree树形控件'),},
        {path: '/guide/Pagination', name: 'page_34', component: page('guide/Pagination分页'),},
        {path: '/guide/Badge', name: 'page_35', component: page('guide/Badge标记'),},
        {path: '/guide/Avatar', name: 'page_36', component: page('guide/Avatar头像'),},
        {path: '/guide/Alert', name: 'page_37', component: page('guide/Alert警告'),},
        {path: '/guide/Loading', name: 'page_38', component: page('guide/Loading加载'),},
        {path: '/guide/Message', name: 'page_39', component: page('guide/Message消息提示'),},
        {path: '/guide/MessageBox', name: 'page_40', component: page('guide/MessageBox弹框'),},
        {path: '/guide/Notification', name: 'page_41', component: page('guide/Notification通知'),},
        {path: '/guide/NavMenu', name: 'page_42', component: page('guide/NavMenu导航菜单'),},
        {path: '/guide/Tabs', name: 'page_43', component: page('guide/Tabs标签页'),},
        {path: '/guide/Breadcrumb', name: 'page_44', component: page('guide/Breadcrumb面包屑'),},
        {path: '/guide/PageHeader', name: 'page_45', component: page('guide/PageHeader页头'),},
        {path: '/guide/Dropdown', name: 'page_46', component: page('guide/Dropdown下拉菜单'),},
        {path: '/guide/Steps', name: 'page_47', component: page('guide/Steps步骤条'),},
        {path: '/guide/Dialog', name: 'page_48', component: page('guide/Dialog对话框'),},
        {path: '/guide/Tooltip', name: 'page_49', component: page('guide/Tooltip文字提示'),},
        {path: '/guide/Popover', name: 'page_50', component: page('guide/Popover弹出框'),},
        {path: '/guide/Card', name: 'page_51', component: page('guide/Card卡片'),},
        {path: '/guide/Carousel', name: 'page_52', component: page('guide/Carousel走马灯'),},
        {path: '/guide/Collapse', name: 'page_53', component: page('guide/Collapse折叠面板'),},
        {path: '/guide/Timeline', name: 'page_54', component: page('guide/Timeline时间线'),},
        {path: '/guide/Divider', name: 'page_55', component: page('guide/Divider分割线'),},
        {path: '/guide/Calendar', name: 'page_56', component: page('guide/Calendar日历'),},
        {path: '/guide/Image', name: 'page_57', component: page('guide/Image图片'),},
        {path: '/guide/Backtop', name: 'page_58', component: page('guide/Backtop回到顶部'),},
        {path: '/guide/InfiniteScroll', name: 'page_59', component: page('guide/InfiniteScroll无限滚动'),},
        {path: '/guide/Drawer', name: 'page_60', component: page('guide/Drawer抽屉'),},
      ],
    },
    {
      path: '/account',
      component: accountView,
      children: [
        {path: '/account/', name: 'accounts_profile', component: page('account/profile'),},
        {path: '/account/profile', name: 'account_profile', component: page('account/profile'),},
        {path: '/account/account', name: 'account_account', component: page('account/account'),},
        {path: '/account/security', name: 'account_security', component: page('account/security'),},
        {path: '/account/edit', name: 'account_edit', component: page('account/edit'),},

      ],
    },
    {
      path: '/management',
      component: managementView,
      children: [
        {path: '/management/', name: 'management', component: page('management/management'),},
        {path: '/management/pie', name: 'account_edit1', component: page('management/pie'),},
      ],
    },
    {path: '/test1', component: page('Afather'),},
    {path:'/goback', redirect:'/',},
  ]



})
