<template>
  <div class="container" id="app" :class="{
                  unFixedHeader: !$route.meta.FixedHeader
                  }">
    <header class="topBar" id="J_topBar">
      <div class="logo">
          <i class="icon-f-logo"></i>
          <div class="logo-title">vsuite 组件库</div>
      </div>
      <Menu direction="horizontal" :current="nav.current" class="nav">
          <MenuItem  v-for="(item,index) in nav.data" :name="item.module" :key="index">
              <router-link tag="li" :to="item.href">
                      <span @click="nav.current = nav.data[index].module" :class="{active: item.module === $route.meta.module}" v-text="item.name"></span>
              </router-link>
          </MenuItem>
      </Menu>
    </header>
    <section class="content" id="J_content">
      <template v-if="$route.meta.FixedHeader">
        <DSider :sider="sider[nav.current]"></DSider>
      </template>
      <section class="contentMain" id="J_contentMain">
        <Scroll>
          <router-view id="J_main_wrapper"></router-view>
          <BackTop></BackTop>
          
          <template v-if="$route.path==='/component/backtop'">
            <BackTop :bottom=100 :right=100 icon="android-sort-up"></BackTop>
            <BackTop :bottom=10 :right=10 :duration=200 icon="android-sort-up"></BackTop>
            <BackTop :bottom=120 :right=120 :height=200 icon="android-sort-up"></BackTop>
            <BackTop :bottom=180 :right=180 icon="android-sort-up">
                <div class="custom-top">TOP</div> 
            </BackTop>
          </template>
        </Scroll>
      </section>
    </section>
    <DFooter></DFooter>
  </div>
</template>
<script>
  import Utils from './assets/js/utils' // 工具类
  import hljs from 'highlight.js'
  export default  {
    name: 'app',
    data () {
      return {
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
      }
    },
    components: {},
    watch: {
      // 监听$route.path变化
      '$route.path' (newRoute, oldRoute) {
        this.update()
      }
    },
    methods: {
      update() {
        this.nav.current = this.$route.meta.module
        this.$nextTick(function () {
          // 代码块主题样式
          let objArr = document.getElementsByTagName('code')
          for (let obj of objArr) {
            hljs.highlightBlock(obj)
          }
  
          // resize window
          Utils.resizeWindow()
        })
      }
    },
    mounted: function () {
      this.update();
    },
    beforeDestroy: function () {

    }
  }
</script>
<style lang="scss">
$primary-color          : #1864FF !default;// primary color
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
} 
body {
  &>.container {
    padding: 60px 0 0 0;
    height: 100%;
    font-size: 14px;
    background-color: #fff;
    &>.content {
      position: relative;
      min-width: 1024px;
      height: 100%;
      overflow: hidden;
      width: 100%;
      box-sizing: border-box;
      text-align: left;
      &>.contentMain {
        // overflow: auto;
        height: 100%;
        width: 100%;
        box-sizing: border-box;
        position: relative;
        padding-left: 410px;
        padding-top: 60px;
        .main {
          height: 100%;
          width: 980px;
          .title1 {
            font-size: 20px;
          }

          /* module style */
          .mItem {
            border: 1px solid #ebebeb;
            border-radius: 4px;
            padding: 20px 12px 10px;
            margin: 10px 0 30px;
            box-shadow: 0 4px 30px 0 rgba(223,225,230,0.5);
            &:hover {
              -webkit-box-shadow: 0 8px 40px 0 rgba(0, 0, 0, 0.06);
              -o-box-shadow: 0 8px 40px 0 rgba(0, 0, 0, 0.06);
              -ms-box-shadow: 0 8px 40px 0 rgba(0, 0, 0, 0.06);
              box-shadow: 0 8px 40px 0 rgba(0, 0, 0, 0.06);
            }
            .title2 {
              font-weight: bold;
              margin: 5px 0 10px 0;
            }
            .q-title {
              font-weight: 14px;
              margin: 15px 0 5px 0;
            }
            .c-title {
              font-weight: 14px;
              text-align: center;
            }
          }
        }


      }
    }
    &.unFixedHeader {
      //overflow: auto;
      background:#9fb6e4;
      background-image:url(./assets/img/bg.png);
      background-repeat: no-repeat;
      background-size: cover;
      background-position: center;
      &>.content {
        &>.contentMain {
          overflow: hidden;
          padding-top: 0;
        }
      }
    }
  }
}
.nav{
    font-size: 16px;
    .vsu-menu-horizontal .vsu-menu-item{
        margin: 0 16px;
        height:30px;
    }
}

.topBar {
  top:0;
  height: 60px;
  width: 100%;
  min-width: 1024px;
  position: fixed;
  z-index: 2;
  &>*{
    display: inline-block;
  }
  .logo{  
    left: 0;
    position: absolute;
    i.icon-f-logo{
      position: absolute;
      left: 200px;
      top: 14px;
      &:before{
        color:#4B61D9;
        font-size: 32px;
      }
    }
    .logo-title{
      font-size: 18px;
      color: #4B61D9;
      margin: 18px 10px 18px 250px;
    }
  }
  .nav{
    float: right;
    height: 100%;
    line-height: 60px;
    padding-right: 24%;
  }
}
.other{
  position: relative;
  .d-submenu-wrap{
    position: fixed;
    top: 156px;
    left: 1390px;
    width: 120px;
    padding: 0 8px;
    .d-submenu-title{
      cursor: pointer;
      &:hover{
        color:$primary-color;
      }
      &.active{
        color:$primary-color;
        font-weight:700;
      }
    }
    .d-submenu-body{
      margin-bottom:17px;
    }
  }
}


.sider ul {
  overflow: auto;
  height: 100%;
  li{
    text-align:left;
  }
}

@media screen and (max-width: 1440px) {
  body {
    &>.container {
      padding: 60px 0 0 0;
      &>.content {
        min-width: 1024px;
        &>.contentMain {
          padding-left: 336px;
          .main {
            width: 940px;
          }
        }
        &>.sider {
          width: 325px;
          padding-left: 128px;
        }
        .other{
          .d-submenu-wrap{
            left: 1284px;
          }
        }
      }
    }
  }
}
@media screen and (max-width: 1360px) {
  body {
    &>.container {
      padding: 60px 0 0 0;
      &>.content {
        min-width: 1024px;
        &>.contentMain {
          padding-left: 228px;
          .main {
            width: 940px;
          }
        }
        &>.sider {
          width: 216px;
          padding-left: 59px;
        }
        .other{
          .d-submenu-wrap{
            left: 1176px;
          }
        }
      }
    }
  }
}
@media screen and (max-width: 1280px) {
  .topBar {
    .logo{
      i.icon-f-logo{
        left: 100px;
      }
      .logo-title{
        margin-left: 150px;
      }
    }
    .nav{
      padding-right: 10%;
    }
  }
}
</style>
