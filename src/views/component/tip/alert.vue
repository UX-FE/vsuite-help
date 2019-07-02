<template>
    <div class="other">
        <div class="title1">
            Alert 警告
        </div>
        <div class="mItem alert-demo-wrap">
            <div class="title2" id="title-1">
                类型：
            </div>
            <div class="wrap">
                默认固定在页面显示：<br/>
                <Alert type="info">这是一些提示信息</Alert>
                <Alert type="success">告诉你成功了</Alert>
                <Alert type="warn">警告你</Alert>
                <Alert type="error">大侠，报错了</Alert>
                <div class="q-title">说明：</div>
                <div>
                    直接显示在页面的重要提示信息，类型有info、success、warn、error四种
                </div>
                <div class="q-title">代码示例：</div>
                <DCode :code="code.type" lang="html"></DCode>
            </div>
            <div class="title2" id="title-2">
                模式：
            </div>
            <div class="wrap">
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
                <div class="q-title" mode="fix">说明：</div>
                <div>
                    设置mode属性为fix,警告浮动在页面上。mode为fix时设置top可以设置距离顶部高度
                </div>
                <div class="q-title">代码示例：</div>
                <DCode :code="code.mode" lang="html"></DCode>
            </div>
            <div class="title2" id="title-3">
                自动消失和停留时间：
            </div>
            <div class="wrap">
                <BaseButton type="primary" @on-click-btn="alert5=true">自动消失</BaseButton>
                <BaseButton type="primary" @on-click-btn="alert6=true">停留时间为10S</BaseButton>
                <Alert type="info" mode="fix" v-model="alert5" auto-hidden >这是一些提示信息</Alert>
                <Alert type="success" mode="fix" v-model="alert6" auto-hidden :duration=10>告诉你成功了</Alert>
                <div class="q-title" mode="fix">说明：</div>
                <div>
                    设置auto-hidden属性警告可以自动消失，默认1.5秒后消失，设置duration属性自定义停留时间
                </div>
                <div class="q-title">代码示例：</div>
                <DCode :code="code.hidden" lang="html"></DCode>
            </div>
            <div class="title2" id="title-4">
                关闭方式：
            </div>
            <div class="wrap">
                <Alert type="info" >这是一些提示信息</Alert>
                <Alert type="info" closable>这是一些提示信息</Alert>
                <Alert type="info" closable>这是一些提示信息<span slot="close">知道了</span></Alert>
                <div class="q-title">说明：</div>
                <div>
                    设置closable可以设置关闭按钮，可以自定义名为close的slot定义关闭方式
                </div>
                <div class="q-title">代码示例：</div>
                <DCode :code="code.close" lang="html"></DCode>
            </div>
            <div class="title2" id="title-5">
                显示图标：
            </div>
            <div class="wrap">
                <Alert type="info" show-icon>这是一些提示信息</Alert>
                <Alert type="success" show-icon>告诉你成功了</Alert>
                <Alert type="warn" show-icon>警告你</Alert>
                <Alert type="error" show-icon>大侠，报错了</Alert>
                <Alert show-icon icon="load-a">加载中</Alert>
                <Alert show-icon icon="checkmark-circled" icon-color="#36c626">提交成功</Alert>
                <Alert show-icon icon="android-alert" icon-color="#ff1a2e">操作失败</Alert>
                <div class="q-title">说明：</div>
                <div>
                    <p>设置show-icon显示图标;</p>
                    <p>设置icon属性设置自定义图标类型;</p>
                    <p>设置iconColor可以设置icon颜色;</p>
                    <p>设置iconTypes属性设置当类型为info,success,warn,error的图标类型数组，iconTypes为数组</p>
                </div>
                <div class="q-title">代码示例：</div>
                <DCode :code="code.icon" lang="html"></DCode>
            </div>
            <div class="title2" id="title-6">
                API：
            </div>
            <div class="wrap">
                <div class="q-title">Alert【props】：</div>
                <Table type="bordered" :thead="api.thead" :data="api.data">
                </Table>
                <div class="q-title">Alert【events】：</div>
                <Table type="bordered" :thead="event.thead" :data="event.data">
                </Table>
                <div class="q-title">Alert【slot】</div>
                <Table type="bordered" :thead="slots.thead" :data="slots.data">
                </Table>
            </div>
        </div>
        <DMenu></DMenu>
    </div>
</template>

<script>
import Code from '../../../code/component/tip/alert';
export default {
  data() {
    return {
        code: Code,
        alert1:false,
        alert2:false,
        alert3:false,
        alert4:false,
        alert41:false,
        alert5:false,
        alert6:false,
        api:{
            thead:[
                {
                    column:'prop',
                    name:'属性',
                },
                {
                    column:'description',
                    name:'说明',
                },
                {
                    column:'type',
                    name:'属性',
                },
                {
                    column:'option',
                    name:'可选值',
                },
                {
                    column:'default',
                    name:'默认值',
                },
            ],
            data:[
                {
                    prop:'type',
                    description:'类型',
                    type:'String',
                    option:'success/info/warn/error',
                    default:'info'
                },
                {
                    prop:'mode',
                    description:'模式,警告展现的方式',
                    type:'String',
                    option:'normal（显示在当前位置）/fix（固定位置）',
                    default:'normal'
                },
                {
                    prop:'auto-hidden',
                    description:'自动消失',
                    type:'Boolean',
                    option:'-',
                    default:'true'
                },
                {
                    prop:'duration',
                    description:'停留时间',
                    type:'Number',
                    option:'-',
                    default:'1.5'
                },
                {
                    prop:'closable',
                    description:'是否可关闭',
                    type:'Boolean',
                    option:'-',
                    default:'false'
                },
                {
                    prop:'showIcon',
                    description:'显示图标',
                    type:'Boolean',
                    option:'-',
                    default:'false'
                },
                {
                    prop:'value',
                    description:'显示/关闭的值',
                    type:'Boolean',
                    option:'-',
                    default:'true'
                },
                {
                    prop:'icon',
                    description:'图标类型',
                    type:'String',
                    option:'-',
                    default:'-'
                },
                {
                    prop:'iconTypes',
                    description:'四种类型（success/info/warn/error）的图标类型',
                    type:'Array',
                    option:'-',
                    default:'-'
                },
                {
                    prop:'iconColor',
                    description:'图标颜色',
                    type:'String',
                    option:'-',
                    default:'-'
                },
                {
                    prop:'closeIcon',
                    description:'关闭图标类型',
                    type:'String',
                    option:'-',
                    default:'ios-close-empty'
                },
                {
                    prop:'top',
                    description:'mode为fix时距离容器顶部的高度',
                    type:'Number,String',
                    option:'-',
                    default:'60'
                }
            ]
        },
        event:{
            thead:[
                {
                    column:'name',
                    name:'事件名称',
                },
                {
                    column:'description',
                    name:'说明',
                },
                {
                    column:'props',
                    name:'参数',
                }
            ],
            data:[
                {
                    name:'on-close',
                    description:'关闭警告时触发',
                    props:'点击事件'
                },
                {
                    name:'on-input',
                    description:'value改变时触发',
                    props:''
                }
            ]
        },
        slots:{
            thead:[
                {
                    column:'name',
                    name:'名称',
                },
                {
                    column:'description',
                    name:'说明',
                },
            ],
            data:[
                {
                    name:'icon',
                    description:'图标slot',
                },
                {
                    name:'close',
                    description:'关闭区域slot',
                }
            ]
        },
    };
  },
  methods: {
    
  },
  mounted() {}
};
</script>
<style lang="scss">
.alert-demo-wrap{
    .vsu-alert{
        margin-bottom:20px;
    }
}
.vsu-btn{
    &+.vsu-btn{
        margin-left:20px;
    }
}
</style>
