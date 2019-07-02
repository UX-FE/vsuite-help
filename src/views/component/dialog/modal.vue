<template>
    <div class="other">
        <div class="title1">
            Modal 对话框
        </div>
        <div class="mItem">
            <div class="title2" id="title-1">
                使用：
            </div>
            <div class="wrap">
                <BaseButton type="primary" @on-click-btn="modal1=true">自定义内容的对话框</BaseButton>
                <BaseButton type="primary" @on-click-btn="modal2=true">自定义主体的对话框</BaseButton>
                <Modal v-model="modal1" maskClosable>
                    <div class="demo-1">自定义的内容</div>
                </Modal>
                <Modal v-model="modal2" title="标题">
                    <div slot="body">
                        <P>主体的内容1</P>
                        <P>主体的内容2</P>
                    </div>
                </Modal>
                <div class="q-title">说明：</div>
                <div>
                   简单的对话框，可自定义内容，可设置maskClosable让点击遮障可以关闭
                </div>
                <div class="q-title">代码示例：</div>
                <DCode :code="code.base" lang="html"></DCode>
            </div>
            <div class="title2" id="title-2">
                关闭方式：
            </div>
            <div class="wrap">
                <BaseButton type="primary" @on-click-btn="modal3=true">默认点击遮罩不可关闭</BaseButton>
                <BaseButton type="primary" @on-click-btn="modal4=true">没有关闭按钮</BaseButton>
                <Modal v-model="modal3" title="标题" >
                    <div slot="body">
                        <P>主体的内容1</P>
                        <P>主体的内容2</P>
                    </div>
                </Modal>
                <Modal v-model="modal4" title="标题" :closable="false">
                    <div slot="body">
                        <P>主体的内容1</P>
                        <P>主体的内容2</P>
                    </div>
                </Modal>
                <div class="q-title">说明：</div>
                <div>
                   设置closable为false，没有关闭按钮
                </div>
                <div class="q-title">代码示例：</div>
                <DCode :code="code.close" lang="html"></DCode>
            </div>
            <div class="title2" id="title-3">
                API：
            </div>
            <div class="wrap">
                <div class="q-title">Modal【props】：</div>
                <Table type="bordered" :thead="api.thead" :data="api.data">
                </Table>
                <div class="q-title">Modal【slot】</div>
                <Table type="bordered" :thead="slots.thead" :data="slots.data">
                </Table>
                <div class="q-title">Modal【events】</div>
                <Table type="bordered" :thead="events.thead" :data="events.data">
                </Table>
            </div>
        </div>
        <DMenu></DMenu>
    </div>
</template>

<script>
import Code from '../../../code/component/dialog/modal';
export default {
  data() {
    return {
        code: Code,
        modal1:false,
        modal2:false,
        modal3:false,
        modal4:false,
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
                    prop:'value',
                    description:'对话框是否显示',
                    type:'Boolean',
                    option:'-',
                    default:'false'
                },
                {
                    prop:'title',
                    description:'标题',
                    type:'String',
                    option:'-',
                    default:'-'
                },
                {
                    prop:'closable',
                    description:'是否有关闭按钮',
                    type:'Boolean',
                    option:'-',
                    default:'true'
                },
                {
                    prop:'maskClosable',
                    description:'点击遮罩是否可关闭',
                    type:'Boolean',
                    option:'-',
                    default:'false'
                },
                {
                    prop:'width',
                    description:'宽度',
                    type:'String，Number',
                    option:'-',
                    default:'520'
                },
                {
                    prop:'top',
                    description:'顶部距离',
                    type:'String，Number',
                    option:'-',
                    default:'100'
                },
                {
                    prop:'cancelText',
                    description:'取消按钮文案',
                    type:'String',
                    option:'-',
                    default:'取消'
                },
                {
                    prop:'submitText',
                    description:'确定按钮文案',
                    type:'String',
                    option:'-',
                    default:'确定'
                },
                {
                    prop:'className',
                    description:'自定义类名',
                    type:'String',
                    option:'-',
                    default:'-'
                },
                {
                    prop:'styles',
                    description:'自定义弹框样式对象',
                    type:'Object',
                    option:'-',
                    default:'-'
                },
                {
                    prop:'hideFooter',
                    description:'隐藏底部',
                    type:'Boolean',
                    option:'-',
                    default:'false'
                },
                {
                    prop:'icon',
                    description:'关闭图标',
                    type:'String',
                    option:'-',
                    default:'ios-close-empty'
                }
            ]
        },
        events:{
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
                    description:'点击关闭按钮时触发',
                    props:'false'
                },
                {
                    name:'on-cancel',
                    description:'点击取消按钮时触发',
                    props:'-'
                },
                {
                    name:'on-submit',
                    description:'点击确定按钮时触发',
                    props:'-'
                },
                {
                    name:'on-hidden',
                    description:'对话框关闭后触发',
                    props:'-'
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
                    name:'无',
                    description:'对话框内容',
                },
                {
                    name:'close',
                    description:'关闭触发区域slot',
                },
                {
                    name:'header',
                    description:'对话框header区域',
                },
                {
                    name:'body',
                    description:'对话框body区域',
                },
                {
                    name:'footer',
                    description:'对话框footer区域',
                },
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
    .demo-1{
        text-align:center;
        font-size:14px;
        padding:30px 20px;
    }
</style>
