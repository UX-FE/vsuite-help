import Vue from 'vue'
import Router from 'vue-router'

import index from './views/index/index'
import component from './views/component/component'
import util from './views/util/util'
import document from './views/document/document'
import about from './views/about/about'

Vue.use(Router)

export default new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: [
    //默认路由：
    {
      path: '/',
      redirect: '/index',
      components: {},
    },
    {
      path: '/vsuite-help',
      name: 'index',
      components: {
        default: index
      },
    },
    // 首页（指南）
    {
      path: '/index/:type?',
      name: 'index',
      components: {
        default: index
      },
      meta: {
        module: 'index'
      }
    },
    // 组件
    {
      path: '/component/:type?',
      /*
        type: 组件模块，比如：layout\button\input\...
      */
      name: 'component',
      components: {
        default: component
      },
      beforeEnter (to, from, next) {
        if (to.params.type === undefined) {
          next('/component/install')
        }
        next()
      },
      meta: {
        module: 'component',
        FixedHeader: true // 固定顶端导航v-header
      }
    },
    // 工具类
    {
      path: '/util/:type?',
      name: 'util',
      components: {
        default: util
      },
      beforeEnter (to, from, next) {
        if (to.params.type === undefined) {
          next('/util/request')
        }
        next()
      },
      meta: {
        module: 'util',
        FixedHeader: true // 固定顶端导航v-header
      }
    },
    // 文档
    {
      path: '/document/:type?',
      name: 'document',
      components: {
        default: document
      },
      beforeEnter (to, from, next) {
        if (to.params.type === undefined) {
          next('/document/design')
        }
        next()
      },
      meta: {
        module: 'document',
        FixedHeader: true // 固定顶端导航v-header
      }
    },
    // 关于
    {
      path: '/about/:type?',
      name: 'about',
      components: {
        default: about
      },
      beforeEnter (to, from, next) {
        if (to.params.type === undefined) {
          next('/about/team')
        }
        next()
      },
      meta: {
        module: 'about',
        FixedHeader: true // 固定顶端导航v-header
      }
    }
  ]
})
