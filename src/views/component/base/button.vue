<template>
    <div class="other">
        <div class="title1">
            Button 按钮
        </div>
        <div class="mItem">
            <div class="title2" id="title-1">
                类型：
            </div>
            <div class="wrap">
                <BaseButton>默认按钮</BaseButton>
                <BaseButton type="primary">主要按钮</BaseButton>
                <BaseButton type="ghost">空心按钮</BaseButton>
                <BaseButton type="text">文字按钮</BaseButton>
                <br/>
                <div class="q-title">说明：</div>
                <div>
                    按钮类型有：默认按钮、主按钮、空心按钮、文字按钮。
                    <br/>
                    通过设置type为primary、ghost、text创建不同样式的按钮，不设置为默认样式。
                </div>
                <div class="q-title">代码示例：</div>
                <DCode :code="code.buttonType" lang="html"></DCode>
            </div>
            <div class="title2" id="title-2">
                形状：
            </div>
            <div class="wrap">
                <BaseButton type="primary" shape="square">square</BaseButton>
                <BaseButton type="primary" shape="circle">circle</BaseButton>
                <BaseButton type="ghost" shape="square">square</BaseButton>
                <BaseButton type="ghost" shape="circle">circle</BaseButton>
                <div class="q-title">说明：</div>
                <div>
                    按钮形状有：默认方形和圆形。
                    <br/>
                    通过设置shape为circle创建不同形状的按钮，不设置为默认样式。</div>
                <div class="q-title">代码示例：</div>
                <DCode :code="code.buttonShape" lang="html"></DCode>
            </div>
            <div class="title2" id="title-3">
                尺寸：
            </div>
            <div class="wrap">
                <BaseButton type="primary" size="large">large</BaseButton>
                <BaseButton type="primary">default</BaseButton>
                <BaseButton type="primary" size="small">small</BaseButton>
                <BaseButton type="ghost" size="large">large</BaseButton>
                <BaseButton type="ghost">default</BaseButton>
                <BaseButton type="ghost" size="small">small</BaseButton>
                <div class="q-title">说明：</div>
                <div>
                    按钮尺寸有：默认尺寸、大、小。
                    <br/>
                    通过设置size为large、small创建不同尺寸的按钮，不设置为默认样式。</div>
                <div class="q-title">代码示例：</div>
                <DCode :code="code.buttonSize" lang="html"></DCode>
            </div>
            <div class="title2" id="title-4">
                加载：
            </div>
            <div class="wrap">
                <BaseButton type="primary" loading="load-a">loading</BaseButton>
                <BaseButton type="primary" loading="load-a"></BaseButton>
                <div class="q-title">说明：</div>
                <div>
                    增加loading属性设置加载状态，loading为加载loading图标类型
                </div>
                <div class="q-title">代码示例：</div>
                <DCode :code="code.buttonStatus" lang="html"></DCode>
            </div>
            <div class="title2" id="title-5">
                不可用：
            </div>
            <div class="wrap">
                <BaseButton>default</BaseButton>
                <BaseButton disabled>default(disabled)</BaseButton>
                <br/>
                <br/>
                <BaseButton type="primary">primary</BaseButton>
                <BaseButton type="primary" disabled>primary(disabled)</BaseButton>
                <br/>
                <br/>
                <BaseButton type="ghost">ghost</BaseButton>
                <BaseButton type="ghost" disabled>ghost(disabled)</BaseButton>
                <br/>
                <br/>
                <BaseButton type="text">text</BaseButton>
                <BaseButton type="text" disabled>text(disabled)</BaseButton>
                <div class="q-title">说明：</div>
                <div>
                    添加disabled属性可以把按钮设置为不可用状态
                </div>
                <div class="q-title">代码示例：</div>
                <DCode :code="code.buttonDisable" lang="html"></DCode>
            </div>
            <div class="title2" id="title-6">
                图标：
            </div>
            <div class="wrap">
                <BaseButton type="primary" icon="trash-a"></BaseButton>
                <BaseButton type="primary" icon="edit"></BaseButton>
                <BaseButton type="primary" icon="funnel">漏斗</BaseButton>
                <BaseButton type="primary">剪刀<Icon type="scissors" color="#fff"></Icon></BaseButton>
                <div class="q-title">说明：</div>
                <div>
                    设置icon属性设置按钮图标，图标位置在按钮左侧。也可自定义slot图标
                </div>
                <div class="q-title">代码示例：</div>
                <DCode :code="code.buttonIcon" lang="html"></DCode>
            </div>
            <div class="title2" id="title-7">
                按钮组：
            </div>
            <div class="wrap">
                <ButtonGroup>
                    <BaseButton type="primary" icon="ios-alarm"></BaseButton>
                    <BaseButton type="primary" icon="ios-speedometer"></BaseButton>
                    <BaseButton type="primary" icon="ios-stopwatch"></BaseButton>
                </ButtonGroup>
                <ButtonGroup size="small">
                    <BaseButton type="primary" icon="ios-alarm"></BaseButton>
                    <BaseButton type="primary" icon="ios-speedometer"></BaseButton>
                    <BaseButton type="primary" icon="ios-stopwatch"></BaseButton>
                </ButtonGroup>
                <ButtonGroup size="large">
                    <BaseButton type="primary" icon="ios-alarm"></BaseButton>
                    <BaseButton type="primary" icon="ios-speedometer"></BaseButton>
                    <BaseButton type="primary" icon="ios-stopwatch"></BaseButton>
                </ButtonGroup>
                <br/>
                <br/>
                <ButtonGroup shape="circle">
                    <BaseButton type="primary" icon="ios-alarm"></BaseButton>
                    <BaseButton type="primary" icon="ios-speedometer"></BaseButton>
                    <BaseButton type="primary" icon="ios-stopwatch"></BaseButton>
                </ButtonGroup>
                <ButtonGroup shape="circle" size="small">
                    <BaseButton type="primary" icon="ios-alarm"></BaseButton>
                    <BaseButton type="primary" icon="ios-speedometer"></BaseButton>
                    <BaseButton type="primary" icon="ios-stopwatch"></BaseButton>
                </ButtonGroup>
                <ButtonGroup shape="circle" size="large">
                    <BaseButton type="primary" icon="ios-alarm"></BaseButton>
                    <BaseButton type="primary" icon="ios-speedometer"></BaseButton>
                    <BaseButton type="primary" icon="ios-stopwatch"></BaseButton>
                </ButtonGroup>
                <br/>
                <br/>
                <ButtonGroup vertical>
                    <BaseButton type="primary" icon="ios-alarm"></BaseButton>
                    <BaseButton type="primary" icon="ios-speedometer"></BaseButton>
                    <BaseButton type="primary" icon="ios-stopwatch"></BaseButton>
                </ButtonGroup>
                <ButtonGroup vertical size="small">
                    <BaseButton type="primary" icon="ios-alarm"></BaseButton>
                    <BaseButton type="primary" icon="ios-speedometer"></BaseButton>
                    <BaseButton type="primary" icon="ios-stopwatch"></BaseButton>
                </ButtonGroup>
                <ButtonGroup vertical size="large">
                    <BaseButton type="primary" icon="ios-alarm"></BaseButton>
                    <BaseButton type="primary" icon="ios-speedometer"></BaseButton>
                    <BaseButton type="primary" icon="ios-stopwatch"></BaseButton>
                </ButtonGroup>
                <div class="q-title">说明：</div>
                <div>设置shape为circle可以设置按钮组边框弧度，设置vertical可以设置按钮组为垂直排列</div>
                <div class="q-title">代码示例：</div>
                <DCode :code="code.group" lang="html"></DCode>
            </div>
            <div class="title2" id="title-8">
                API：
            </div>
            <div class="wrap">
                <div class="q-title">Button【props】</div>
                <Table type="bordered" :thead="Buttonapi.thead" :data="Buttonapi.data">
                </Table>
                <div class="q-title">Button【events】</div>
                <Table type="bordered" :thead="events.thead" :data="events.data">
                </Table>
                <div class="q-title">Button【slot】</div>
                <Table type="bordered" :thead="slots.thead" :data="slots.data">
                </Table>
                <div class="q-title">ButtonGroup【props】</div>
                <Table type="bordered" :thead="ButtonGroupapi.thead" :data="ButtonGroupapi.data">
                </Table>
            </div>
        </div>
        <DMenu></DMenu>
    </div>
</template>

<script>
import Code from '../../../code/component/base/button';
export default {
  data() {
    return {
        code: Code,
        Buttonapi:{
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
                    option:'default, primary, ghost, text',
                    default:'default'
                },
                {
                    prop:'size',
                    description:'大小',
                    type:'String',
                    option:'small，large',
                    default:'-'
                },
                {
                    prop:'shape',
                    description:'形状',
                    type:'String',
                    option:'square,circle',
                    default:'-'
                },
                {
                    prop:'icon',
                    description:'图标类型',
                    type:'String',
                    option:'-',
                    default:'-'
                },
                {
                    prop:'status',
                    description:'加载状态',
                    type:'String',
                    option:'加载图标类型',
                    default:'-'
                },
                {
                    prop:'disabled',
                    description:'不可用',
                    type:'Boolean',
                    option:'-',
                    default:'false'
                }
            ]
        },
        ButtonGroupapi:{
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
                    prop:'shape',
                    description:'类型',
                    type:'String',
                    option:'circle',
                    default:'-'
                },
                {
                    prop:'size',
                    description:'大小',
                    type:'String',
                    option:'small，large',
                    default:'-'
                },
                {
                    prop:'vertical',
                    description:'是否垂直',
                    type:'Boolean',
                    option:'-',
                    default:'false'
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
                    name:'on-click-btn',
                    description:'点击按钮时触发',
                    props:'点击事件'
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
                    description:'按钮中的内容',
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
