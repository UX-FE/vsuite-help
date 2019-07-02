import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    nav: {
      current: 'index',
      data: [{
        name: '首页',
        href: '/index',
        module: 'index'
      },
      {
        name: '组件',
        href: '/component',
        module: 'component'
      },
      {
        name: '关于',
        href: '/about',
        module: 'about'
      },
      // {
      //   name: '工具',
      //   href: '/util',
      //   module: 'util'
      // },
      // {
      //   name: '资源',
      //   href: '/document',
      //   module: 'document'
      // }
      ]
    },
    sider: {
      current: 'component',
      component: [{
          name: '开发指南',
          class: 'title1'
        },
        {
          name: '安装',
          href: '/component/install'
        },
        {
          name: '快速上手',
          href: '/component/start'
        },
        // {
        //   name: '国际化',
        //   href: '/component/i18n'
        // },
        {
          name: '自定义主题',
          href: '/component/theme'
        },
        {
          name: '更新日志',
          href: '/component/update'
        },
        {
          name: '组件',
          class: 'title title1'
        },
        {
          name: '基础组件',
          class: 'title title2'
        },
        {
          name: 'Icon 图标',
          href: '/component/icon'
        },
        {
          name: 'Button 按钮',
          href: '/component/button'
        },
        {
          name: 'Grid 栅格',
          href: '/component/grid'
        },
        {
          name: 'Layout 布局',
          href: '/component/layout'
        },
        // {
        //   name: 'Header 顶栏',
        //   href: '/component/header'
        // },
        // {
        //   name: 'Sider 侧栏菜单',
        //   href: '/component/sider'
        // },
        // {
        //   name: 'Color 色彩',
        //   href: '/component/color'
        // },
        // {
        //   name: 'Font 字体',
        //   href: '/component/font'
        // },
        {
          name: '表单组件',
          class: 'title title2'
        },
        {
          name: 'Input 输入框',
          href: '/component/input'
          },
          {
            name: 'Radio 单选按钮',
            href: '/component/radio'
          },
          {
            name: 'Checkbox 复选框',
            href: '/component/checkbox'
          },
          {
            name: 'Select 选择器',
            href: '/component/select'
          },
          {
            name: 'Switch 开关',
            href: '/component/switch'
          },
          {
            name: 'Date 日期选择',
            href: '/component/date'
          },
          {
            name: 'Rate 评分',
            href: '/component/rate'
          },
          {
            name: 'Upload 上传',
            href: '/component/upload'
          },
          {
            name: 'Form 表单',
            href: '/component/form'
          },
          // {
          //   name: 'Action 操作框',
          //   href: '/component/box'
          // },
          {
            name: '提示组件',
            class: 'title title2'
          },
          {
            name: 'Alert 警告',
            href: '/component/alert'
          },
          {
            name: 'Loading 加载',
            href: '/component/loading'
          },
          // {
          //   name: 'Notification 通知',
          //   href: '/component/notification'
          // },
          // {
          //   name: 'Message 消息',
          //   href: '/component/message'
          // },
          {
            name: 'Tooltip 文字提示',
            href: '/component/tooltip'
          },
          {
            name: 'Bubble 气泡提示',
            href: '/component/bubble'
          },
          {
            name: '导航组件',
            class: 'title title2'
          },
          {
            name: 'Modal 对话框',
            href: '/component/modal'
          },
          {
            name: 'Step 步骤引导',
            href: '/component/step'
          },
          {
            name: 'Bread 面包屑',
            href: '/component/bread'
          },
          {
            name: 'Tab 标签切换',
            href: '/component/tab'
          },
          {
            name: 'Menu 菜单',
            href: '/component/menu'
          },
          {
            name: 'DropDown 下拉菜单',
            href: '/component/dropdown'
          },
          {
            name: '视图组件',
            class: 'title title2'
          },
          {
            name: 'Table 表格',
            href: '/component/table'
          },
          {
            name: 'Page 分页',
            href: '/component/page'
          },
          {
            name: 'Tag 标签',
            href: '/component/tag'
          },
          {
            name: 'Tree 树形控件',
            href: '/component/tree'
          },
          {
            name: 'Progress 进度条',
            href: '/component/progress'
          },
          {
            name: 'Badge 徽标数',
            href: '/component/badge'
          },
          {
            name: 'Avatar 头像',
            href: '/component/avatar'
          },
          {
            name: 'Collapse 折叠面板',
            href: '/component/collapse'
          },
          {
            name: 'Card 卡片',
            href: '/component/card'
          },
          // {
          //   name: 'Transfer 传输框',
          //   href: '/component/transfer'
          // },
          {
            name: 'TimeLine 时间轴',
            href: '/component/timeline'
          },
          // {
          //   name: 'Carousel 走马灯',
          //   href: '/component/carousel'
          // },
          {
            name: 'Scroll 滚动条',
            href: '/component/scroll'
          },
          {
            name: 'Drawer 抽屉',
            href: '/component/drawer'
          },
          {
            name: 'BackTop 返回顶部',
            href: '/component/backtop'
          },
          // {
          //   name: '绘图(额外)',
          //   class: 'title title1'
          // },
          // {
          //   name: 'chart图',
          //   class: 'title title2'
          // },
          // {
          //   name: 'Bar 条形图',
          //   href: '/component/bar'
          // },
          // {
          //   name: 'Circle 环形进度条',
          //   href: '/component/Circle'
          // },
          // {
          //   name: 'Waterball 水球',
          //   href: '/component/waterBall'
          // },
          // {
          //   name: 'Dial 表盘',
          //   href: '/component/dial'
          // },
          // {
          //   name: 'highcharts 图表',
          //   href: '/component/highcharts'
          // },
          // {
          //   name: 'echarts 图表',
          //   href: '/component/echarts'
          // },
          // {
          //   name: '业务',
          //   class: 'title title2'
          // },
      ],
      util: [{
          name: '工具方法',
          class: 'title title1'
        },
        {
          name: '请求',
          href: '/util/request'
        },
        {
          name: '格式化',
          href: '/util/format'
        },
        {
          name: '验证',
          href: '/util/verify'
        },
        {
          name: '其他',
          href: '/util/other'
        }

      ],
      document: [{
          name: '设计文档',
          class: 'title title1'
        },
        {
          name: '设计规范',
          href: '/document/design'
        },
        // {
        //   name: '前端编码规范文档',
        //   href: '/document/fEndCode'
        // },
        // {
        //   name: '后端编码规范文档',
        //   href: '/document/bEndCode'
        // },
        // {
        //   name: '接口文档规范',
        //   href: '/document/port'
        // },
        {
          name: '前端规范',
          class: 'title1',
          href: '/document/build'
        },
        {
          name: '技术生态',
          class: 'title title1'
        }, 
          {
          name: '技术生态',
          href: '/document/tech'
        },
        //  {
        //   name: '需求检查表',
        //   href: '/document/require'
        // },
        // {
        //   name: '需求检查表',
        //   href: '/document/require'
        // },
        // {
        //   name: '视觉设计检查表',
        //   href: '/document/vDesign'
        // },
        // {
        //   name: '交互设计检查表',
        //   href: '/document/iDesign'
        // },
        // {
        //   name: '前端开发检查表',
        //   href: '/document/fEndDev'
        // },
        // {
        //   name: '后端开发检查表',
        //   href: '/document/bEndDev'
        // },
        // {
        //   name: '功能检查表',
        //   href: '/document/function'
        // }

      ],
      about:[{
          name: '关于我们',
          class: 'title title1'
        },
        {
          name: '团队',
          href: '/about/team'
        },

      ]
    },
  },
  mutations: {
    setNavCurrent(state,current){
      state.nav.current = current;
    },
    setSiderCurrent(state,current){
      state.sider.current = current;
    }
  },
  actions: {

  }
})
