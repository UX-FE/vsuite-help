<template>
    <div class="other">
        <div class="title1">
            Bubble 气泡提示
        </div>
        <div class="mItem">
            <div class="title2" id="title-1">
                基础用法：
            </div>
            <div class="wrap">
                <Bubble trigger="hover" title="这是标题" content="我是气泡，你看到我了" hide-arrow>
                    <BaseButton slot="target" type="primary">hover</BaseButton>
                </Bubble>
                <Bubble trigger="click" title="这是标题" content="我是气泡，你看到我了">
                    <BaseButton slot="target" type="primary">click</BaseButton>
                </Bubble>
                <Bubble trigger="focus" title="这是标题" content="我是气泡，你看到我了">
                    <BaseButton slot="target" type="primary">focus</BaseButton>
                </Bubble>
                <div class="q-title">说明：</div>
                <div>
                    <p>Bubble和Tooltip类似，Buttle比起Tooltip增多了触发方式，可以hover/点击/focus激活</p>
                    最简单的Bubble，设置content属性获取文字提示，注意需要增加slot为target
                </div>
                <div class="q-title">代码示例：</div>
                <DCode :code="code.base" lang="html"></DCode>
            </div>
            <div class="title2" id="title-2">
                类型：
            </div>
            <div class="wrap">
                <Bubble type="dark" title="这是标题" content="type is dark">
                    <BaseButton slot="target">dark</BaseButton>
                </Bubble>
                <Bubble type="light" title="这是标题" content="type is light">
                    <BaseButton slot="target">light</BaseButton>
                </Bubble>
                <div class="q-title">说明：</div>
                <div>
                    设置type改变类型，有两个类型：dark和light
                </div>
                <div class="q-title">代码示例：</div>
                <DCode :code="code.type" lang="html"></DCode>
            </div>
            <div class="title2" id="title-3">
                方向：
            </div>
            <div class="wrap">
                <div class="tooltip-deraction" style="text-align:center">
                    <Bubble direction="top-start" content="direction is top-start">
                        <BaseButton slot="target">top-start</BaseButton>
                    </Bubble>
                    <Bubble direction="top" content="direction is top">
                        <BaseButton slot="target">top</BaseButton>
                    </Bubble>
                    <Bubble direction="top-end" content="direction is top-end">
                        <BaseButton slot="target">top-end</BaseButton>
                    </Bubble>
                    <br/>
                    <br/>
                    <Bubble direction="bottom-start" content="direction is bottom-start">
                        <BaseButton slot="target">bottom-start</BaseButton>
                    </Bubble>
                    <Bubble direction="bottom" content="direction is bottom">
                        <BaseButton slot="target">bottom</BaseButton>
                    </Bubble>
                    <Bubble direction="bottom-end" content="direction is bottom-end">
                        <BaseButton slot="target">bottom-end</BaseButton>
                    </Bubble>
                    <br/>
                    <br/>
                    <Bubble direction="left-start" content="direction is left-start">
                        <BaseButton slot="target">left-start</BaseButton>
                    </Bubble>
                    <Bubble direction="left" content="direction is left">
                        <BaseButton slot="target">left</BaseButton>
                    </Bubble>
                    <Bubble direction="left-end" content="direction is left-end">
                        <BaseButton slot="target">left-end</BaseButton>
                    </Bubble>
                    <br/>
                    <br/>
                    <Bubble direction="right-start" content="direction is right-start">
                        <BaseButton slot="target">right-start</BaseButton>
                    </Bubble>
                    <Bubble direction="right" content="direction is right">
                        <BaseButton slot="target">right</BaseButton>
                    </Bubble>
                    <Bubble direction="right-end" content="direction is right-end">
                        <BaseButton slot="target">right-end</BaseButton>
                    </Bubble>
                </div>
                <div class="q-title">说明：</div>
                <div>
                    设置direction改变方向，方向类型如上所示
                </div>
                <div class="q-title">代码示例：</div>
                <DCode :code="code.direction" lang="html"></DCode>
            </div>
            <div class="title2" id="title-4">
                自定义内容：
            </div>
            <div class="wrap">
                    <Bubble direction="bottom-start" content="direction is right-start">
                        <BaseButton slot="target">?</BaseButton>
                        <div>
                            <table>
                                <tr>
                                    <td>Q1</td>
                                    <td>A1</td>
                                </tr>
                                <tr>
                                    <td>Q2</td>
                                    <td>A2</td>
                                </tr>
                            </table>
                        </div>
                    </Bubble>
                <div class="q-title">说明：</div>
                <div>
                    可自定义slot内容。
                </div>
                <div class="q-title">代码示例：</div>
                <DCode :code="code.custom" lang="html"></DCode>
            </div>
            <div class="title2" id="title-4">
                箭头吸附：
            </div>
            <div class="wrap">
                <div class="tooltip-deraction" style="text-align:center">
                    <Bubble direction="top-start" content="direction is top-start" adhere trigger="hover">
                        <BaseButton slot="target">top-start</BaseButton>
                    </Bubble>
                    <Bubble direction="top" content="direction is top" adhere>
                        <BaseButton slot="target">top</BaseButton>
                    </Bubble>
                    <Bubble direction="top-end" content="direction is top-end" adhere>
                        <BaseButton slot="target">top-end</BaseButton>
                    </Bubble>
                    <br/>
                    <br/>
                    <Bubble direction="bottom-start" content="direction is bottom-start" adhere>
                        <BaseButton slot="target">bottom-start</BaseButton>
                    </Bubble>
                    <Bubble direction="bottom" content="direction is bottom" adhere>
                        <BaseButton slot="target">bottom</BaseButton>
                    </Bubble>
                    <Bubble direction="bottom-end" content="direction is bottom-end" adhere>
                        <BaseButton slot="target">bottom-end</BaseButton>
                    </Bubble>
                    <br/>
                    <br/>
                    <Bubble direction="left-start" content="direction is left-start" adhere>
                        <BaseButton slot="target">left-start</BaseButton>
                    </Bubble>
                    <Bubble direction="left" content="direction is left" adhere>
                        <BaseButton slot="target">left</BaseButton>
                    </Bubble>
                    <Bubble direction="left-end" content="direction is left-end" adhere>
                        <BaseButton slot="target">left-end</BaseButton>
                    </Bubble>
                    <br/>
                    <br/>
                    <Bubble direction="right-start" content="direction is right-start" adhere>
                        <BaseButton slot="target">right-start</BaseButton>
                    </Bubble>
                    <Bubble direction="right" content="direction is right" adhere>
                        <BaseButton slot="target">right</BaseButton>
                    </Bubble>
                    <Bubble direction="right-end" content="direction is right-end" adhere>
                        <BaseButton slot="target">right-end</BaseButton>
                    </Bubble>
                </div>
                <div class="q-title">说明：</div>
                <div>
                    设置adhere属性，可以使箭头吸附于触发器
                </div>
                <div class="q-title">代码示例：</div>
                <DCode :code="code.adhere" lang="html"></DCode>
            </div>
            <div class="title2" id="title-5">
                API：
            </div>
            <div class="wrap">
                <div class="q-title">Bubble【props】：</div>
                <Table type="bordered" :thead="api.thead" :data="api.data">
                </Table>
                <div class="q-title">Bubble【slot】</div>
                <Table type="bordered" :thead="slots.thead" :data="slots.data">
                </Table>
            </div>
        </div>
        <DMenu></DMenu>
    </div>
</template>

<script>
import Code from '../../../code/component/tip/bubble';
export default {
  data() {
    return {
        code: Code,
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
                    prop:'trigger',
                    description:'触发方式',
                    type:'String',
                    option:'click/focus/focus/default(与default-visible一起使用)',
                    default:'click'
                },
                {
                    prop:'type',
                    description:'类型',
                    type:'String',
                    option:'light',
                    default:'-'
                },
                {
                    prop:'direction',
                    description:'方向',
                    type:'String',
                    option:'top/top-start/top-end...',
                    default:'top'
                },
                {
                    prop:'content',
                    description:'内容',
                    type:'String',
                    option:'-',
                    default:'-'
                },
                {
                    prop:'title',
                    description:'标题',
                    type:'String',
                    option:'-',
                    default:'-'
                },
                {
                    prop:'delay',
                    description:'延迟显示时间，毫秒',
                    type:'Number',
                    option:'-',
                    default:'100'
                },
                {
                    prop:'adhere',
                    description:'是否吸附箭头，即箭头始终指向触发器',
                    type:'Boolean',
                    option:'-',
                    default:'false'
                },
                {
                    prop:'start',
                    description:'start偏移',
                    type:'Number',
                    option:'-',
                    default:'0'
                },
                {
                    prop:'end',
                    description:'end偏移',
                    type:'Number',
                    option:'-',
                    default:'0'
                },
                {
                    prop:'default-visible',
                    description:'默认显示',
                    type:'Boolean',
                    option:'-',
                    default:'false'
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
                    description:'内容',
                },
                {
                    name:'target',
                    description:'作用目标',
                },
                {
                    name:'title',
                    description:'标题',
                },
                {
                    name:'close',
                    description:'关闭',
                }
            ]
        },
    };
  },
  methods: {
      handleTabs1(){

      }
  },
  mounted() {}
};
</script>
<style lang="scss">
.vsu-bubble{
    &+.vsu-bubble{
        margin-left:20px;
    }
}
</style>
