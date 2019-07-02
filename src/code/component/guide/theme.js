let code = {}

code.new = `
    /* 改变主题色变量 */
    $primary-color: green;

    /* 引入字体图标路径，必须放在vsuite样式前面引入  */
    //$icons-font-path: '~vsuite/src/styles/common/iconfont/fonts';//必须，默认组件字体图标路径
    $icons-font-path: './iconfont/fonts';//自定义字体路径

    /* 引入vsuite样式，在字体图标引入之前 */
    @import '~vsuite/src/styles/index.scss';
    /* 引入字体图标 */
    @import "./iconfont/icons";
    /* 项目其他样式代码 */
    @import "./common/index.scss"
`
code.main = `
    import Vue from 'vue'
    import App from 'components/app.vue';
    import vsuite from 'vsuite'
    import './vsuite-variables.scss'

    Vue.use(vsuite)
`

export default code
