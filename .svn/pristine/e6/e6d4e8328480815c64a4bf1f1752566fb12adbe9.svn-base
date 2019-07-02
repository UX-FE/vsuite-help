let code = {}

code.type = `
    <Alert type="info">这是一些提示信息</Alert>
    <Alert type="success">告诉你成功了</Alert>
    <Alert type="warn">警告你</Alert>
    <Alert type="error">大侠，报错了</Alert>
`

code.mode = `
    <template>
        <BaseButton type="primary" @on-click-btn="alert1=true">info</BaseButton>
        <BaseButton type="primary" @on-click-btn="alert2=true">success</BaseButton>
        <BaseButton type="primary" @on-click-btn="alert3=true">warn</BaseButton>
        <BaseButton type="primary" @on-click-btn="alert4=true">error</BaseButton>
        <BaseButton type="primary" @on-click-btn="alert41=true">距离顶部100px</BaseButton>
        <Alert type="info" mode="fix" v-model="alert1">这是一些提示信息</Alert>
        <Alert type="success" mode="fix" v-model="alert2">告诉你成功了</Alert>
        <Alert type="warn" mode="fix" v-model="alert3">警告你</Alert>
        <Alert type="error" mode="fix" v-model="alert4">大侠，报错了</Alert>
        <Alert type="error" mode="fix" v-model="alert41" top="100" closable :auto-hidden="false">大侠，报错了</Alert>
    </template>
    export default {
        data() {
            return {
                alert1:false,
                alert2:false,
                alert3:false,
                alert4:false,
                alert41:false,
            };
        },
    };
`
code.hidden = `
    <template>
        <BaseButton type="primary" @on-click-btn="alert5=true">自动消失</BaseButton>
        <BaseButton type="primary" @on-click-btn="alert6=true">停留时间为10S</BaseButton>
        <Alert type="info" mode="fix" v-model="alert5" auto-hidden >这是一些提示信息</Alert>
        <Alert type="success" mode="fix" v-model="alert6" auto-hidden :duration=10>告诉你成功了</Alert>
    </template>
    export default {
        data() {
            return {
                alert5:false,
                alert6:false,
            };
        },
    };
`

code.close = `
    <Alert type="info" >这是一些提示信息</Alert>
    <Alert type="info" closable>这是一些提示信息</Alert>
    <Alert type="info" closable>这是一些提示信息<span slot="close">知道了</span></Alert>
`

code.icon = `
    <Alert type="info" show-icon>这是一些提示信息</Alert>
    <Alert type="success" show-icon>告诉你成功了</Alert>
    <Alert type="warn" show-icon>警告你</Alert>
    <Alert type="error" show-icon>大侠，报错了</Alert>
    <Alert show-icon icon="loading">加载中</Alert>
    <Alert show-icon icon="checkmark-circled" icon-color="#36c626">提交成功</Alert>
    <Alert show-icon icon="android-alert" icon-color="#ff1a2e">操作失败</Alert>
`


export default code
