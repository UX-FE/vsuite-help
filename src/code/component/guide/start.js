let code = {}

code.main = `
    import Vue from 'vue'
    import App from 'components/app.vue';
    //全局引入
    import vsuite from 'vsuite'
    //全局引入样式
    import 'vsuite/dist/styles/vsuite.css';
    //全局注册
    Vue.use(vsuite)

    new Vue({
        el: '#app',
        router: router,
        render: h => h(App)
    })
`
code.part = `
    import Vue from 'vue'
    import App from 'components/app.vue';
    //局部引入
    import {Icon, Page,FormSelect,FormOption} from 'vsuite'
    //全局引入样式
    import 'vsuite/dist/styles/vsuite.css';
    //全局注册
    Vue.use(vsuite)

    new Vue({
        el: '#app',
        router: router,
        render: h => h(App)
    })
`
code.need = `
    npm i vsuite -S
`

export default code
