<template>
    <div class="other">
        <div class="title1">
            Bread 面包屑
        </div>
        <div class="mItem">
            <div class="title2">
                基础用法：
            </div>
            <div class="wrap">
                <Bread separator="/">
                    <BreadItem v-for="(item,index) in bread1" :key="index" :to="item.to">
                        {{item.title}}
                    </BreadItem>
                </Bread>
                <Bread separator="/">
                    <BreadItem v-for="(item,index) in bread1" :key="index">
                        {{item.title}}
                    </BreadItem>
                </Bread>
                <div class="q-title">说明：</div>
                <div>
                    最简单的面包屑，通过separator设置分隔符，通过to设置链接
                </div>
                <div class="q-title">代码示例：</div>
                <DCode :code="code.baseBread" lang="html"></DCode>
            </div>
            <div class="title2">
                自定义分隔符：
            </div>
            <div class="wrap">
                <Bread separator=">">
                    <BreadItem v-for="(item,index) in bread1" :key="index" :to="item.to">
                        {{item.title}}
                    </BreadItem>
                </Bread>
                <Bread separator=">>">
                    <BreadItem v-for="(item,index) in bread1" :key="index" :to="item.to">
                        {{item.title}}
                    </BreadItem>
                </Bread>
                <Bread separator="=>">
                    <BreadItem v-for="(item,index) in bread1" :key="index" :to="item.to">
                        {{item.title}}
                    </BreadItem>
                </Bread>
                <div class="q-title">说明：</div>
                <div>
                    自定义分隔符
                </div>
                <div class="q-title">代码示例：</div>
                <DCode :code="code.customSeparator" lang="html"></DCode>
            </div>
            <div class="title2">
                图标分隔符：
            </div>
            <div class="wrap">
                <Bread>
                    <BreadItem v-for="(item,index) in bread1" :key="index" :to="item.to">
                        {{item.title}}
                        <Icon type="arrow-right-a" slot="separator"></Icon>
                    </BreadItem>
                </Bread>
                <div class="q-title">说明：</div>
                <div>
                    自定义分隔符,不加separator属性，slot进去，如图标
                </div>
                <div class="q-title">代码示例：</div>
                <DCode :code="code.iconSeparator" lang="html"></DCode>
            </div>
            <div class="title2">
                自定义面包屑内容：
            </div>
            <div class="wrap">
                <Bread separator="/">
                    <BreadItem v-for="(item,index) in bread1" :key="index" :to="item.to">
                        <Icon :type="item.icon"></Icon>
                        {{item.title}}
                    </BreadItem>
                </Bread>
                <div class="q-title">说明：</div>
                <div>
                    自定义面包屑内容，如增加图标
                </div>
                <div class="q-title">代码示例：</div>
                <DCode :code="code.customBread" lang="html"></DCode>
            </div>
            <div class="title2">
                API：
            </div>
            <div class="wrap">
                <div class="q-title">Bread【props】：</div>
                <Table type="bordered" :thead="api.thead" :data="api.data">
                </Table>
                <div class="q-title">BreadItem【props】：</div>
                <Table type="bordered" :thead="itemapi.thead" :data="itemapi.data">
                </Table>
                <div class="q-title">BreadItem【slot】</div>
                <Table type="bordered" :thead="slots.thead" :data="slots.data">
                </Table>
            </div>
        </div>
        <DMenu></DMenu>
    </div>
</template>

<script>
import Code from '../../../code/component/navigation/bread';
export default {
  data() {
    return {
        code: Code,
        bread1:[
            {
                to:'/index',
                title:'首页',
                icon:'android-home'
            },
            {
                to:'/component/bread',
                title:'组件',
                icon:'android-list'
            },
            {
                to:'/document/code',
                title:'资源',
                icon:'android-globe'
            },
            {
                to:'/util/request',
                title:'文档',
                icon:'android-folder'
            }
        ],
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
                    prop:'separator',
                    description:'分隔符',
                    type:'String',
                    option:'-',
                    default:'-'
                },
            ]
        },
        itemapi:{
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
                    prop:'to',
                    description:'面包屑链接',
                    type:'Object,String',
                    option:'-',
                    default:'-'
                },
                {
                    prop:'replace',
                    description:'路由跳转时，开启 replace 将不会向 history 添加新记录',
                    type:'Boolean',
                    option:'-',
                    default:'false'
                },
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
                    description:'面包屑内容',
                },
                {
                    name:'separator',
                    description:'自定义分隔符内容',
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
</style>
