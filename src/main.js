import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'

//整体引入
import vsuite from 'vsuite'

// import { 
//   Row,
//   Col,
//   Layout,
//   Header,
//  } from 'vsuite'; 
import './theme/index.scss';

Vue.use(vsuite);
// Vue.component(Row.name, Row);
// Vue.component(NoData.name, NoData);


import 'highlight.js/styles/github.css'// 代码块主题样式


import DMenu from './components/layout/dMenu'
import DCode from './components/layout/dCode'
import DFooter from './components/layout/dFooter'
import DSider from './components/layout/dSider'
Vue.component('DMenu', DMenu)
Vue.component('DCode', DCode)
Vue.component('DFooter', DFooter)
Vue.component('DSider', DSider)

Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
