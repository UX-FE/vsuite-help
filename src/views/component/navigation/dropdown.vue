<template>
    <div class="other">
        <div class="title1">
            DropDown 下拉菜单
        </div>
        <div class="mItem">
            <div class="title2">
                基础用法：
            </div>
            <div class="wrap dropdown-demo">
                <DropDown @on-click="handle11">
                    <div class="drop-title">下拉菜单<Icon type="android-arrow-dropdown"></Icon></div>
                    <DropDownList slot="list">
                        <DropDownItem>产品管理</DropDownItem>
                        <DropDownItem>账号管理</DropDownItem>
                    </DropDownList>
                </DropDown>
                <DropDown align="center">
                    <div class="drop-title">下拉菜单<Icon type="android-arrow-dropdown"></Icon></div>
                    <DropDownList slot="list">
                        <DropDownItem>产品管理</DropDownItem>
                        <DropDownItem>账号管理</DropDownItem>
                    </DropDownList>
                </DropDown>
                <DropDown align="right">
                    <div class="drop-title">下拉菜单<Icon type="android-arrow-dropdown"></Icon></div>
                    <DropDownList slot="list">
                        <DropDownItem>产品管理</DropDownItem>
                        <DropDownItem>账号管理</DropDownItem>
                    </DropDownList>
                </DropDown>
                <div class="q-title">说明：</div>
                <div>
                    设置align属性，可以设置对齐方式
                </div>
                <div class="q-title">代码示例：</div>
                <DCode :code="code.base" lang="html"></DCode>
            </div>
            <div class="title2">
                触发方式：
            </div>
            <div class="wrap dropdown-demo">
                <DropDown trigger="hover">
                    <div class="drop-title">hover触发<Icon type="android-arrow-dropdown"></Icon></div>
                    <DropDownList slot="list">
                        <DropDownItem>产品管理</DropDownItem>
                        <DropDownItem>账号管理</DropDownItem>
                    </DropDownList>
                </DropDown>
                <DropDown trigger="click">
                    <div class="drop-title">click触发<Icon type="android-arrow-dropdown"></Icon></div>
                    <DropDownList slot="list">
                        <DropDownItem>产品管理</DropDownItem>
                        <DropDownItem>账号管理</DropDownItem>
                    </DropDownList>
                </DropDown>
                <div class="q-title">说明：</div>
                <div>
                    设置trigger属性，设置下拉触发方式
                </div>
                <div class="q-title">代码示例：</div>
                <DCode :code="code.trigger" lang="html"></DCode>
            </div>
            <div class="title2">
                增加箭头：
            </div>
            <div class="wrap dropdown-demo">
                <DropDown bubble>
                    <div class="drop-title">下拉菜单<Icon type="android-arrow-dropdown"></Icon></div>
                    <DropDownList slot="list">
                        <DropDownItem>产品管理</DropDownItem>
                        <DropDownItem>账号管理</DropDownItem>
                    </DropDownList>
                </DropDown>
                <DropDown align="center" bubble>
                    <div class="drop-title">下拉菜单<Icon type="android-arrow-dropdown"></Icon></div>
                    <DropDownList slot="list">
                        <DropDownItem>产品管理</DropDownItem>
                        <DropDownItem>账号管理</DropDownItem>
                    </DropDownList>
                </DropDown>
                <DropDown align="right" bubble>
                    <div class="drop-title">下拉菜单<Icon type="android-arrow-dropdown"></Icon></div>
                    <DropDownList slot="list">
                        <DropDownItem>产品管理</DropDownItem>
                        <DropDownItem>账号管理</DropDownItem>
                    </DropDownList>
                </DropDown>
                <div class="q-title">说明：</div>
                <div>
                    设置bubble属性，在下拉框上增加箭头
                </div>
                <div class="q-title">代码示例：</div>
                <DCode :code="code.arrow" lang="html"></DCode>
            </div>
            <div class="title2">
                自定义：
            </div>
            <div class="wrap custom-dropdown-demo">
                <DropDown trigger="hover" bubble align="left">
                    <div class="drop-title">自定义下拉<Icon type="android-arrow-dropdown"></Icon></div>
                    <div slot="list">
                        <ul>
                            <li v-for="(item,index) in customDrop.data" :key="index">
                                <div class="title">{{item.title}}</div>
                                <div class="content">{{item.content}}</div>
                            </li>
                        </ul>
                        <div class="check-footer">查看全部</div>
                    </div>
                </DropDown>
                <div class="q-title">说明：</div>
                <div>
                    可自定义下拉菜单内容
                </div>
                <div class="q-title">代码示例：</div>
                <DCode :code="code.custom" lang="html"></DCode>
            </div>
            <div class="title2">
                API：
            </div>
            <div class="wrap">
                <div class="q-title">DropDown【props】：</div>
                <Table type="bordered" :thead="api.thead" :data="api.data">
                </Table>
                <div class="q-title">DropDown【events】：</div>
                <Table type="bordered" :thead="event.thead" :data="event.data">
                </Table>
                <div class="q-title">DropDown【slot】</div>
                <Table type="bordered" :thead="slots.thead" :data="slots.data">
                </Table>
            </div>
        </div>
        <DMenu></DMenu>
    </div>
</template>

<script>
import Code from '../../../code/component/navigation/dropdown';
export default {
  data() {
    return {
        code: Code,
        customDrop:{
            data:[
                {
                    title:'SDK升级',
                    content:'Android SDK v2.3.0已上线'
                },
                {
                    title:'种模板可以区分多种通知类型',
                    content:'这里是具体内容，如果字数超出了自行省略...'
                },
                {
                    title:'这条内容是已阅状态',
                    content:'这里是具体内容，如果字数超出了自行省略...'
                }
            ]
        },
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
                    option:'click、hover',
                    default:'hover'
                },
                {
                    prop:'align',
                    description:'对齐方式',
                    type:'String',
                    option:'left，center，right',
                    default:'left'
                },
                {
                    prop:'bubble',
                    description:'是否带箭头',
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
                    description:'触发目标',
                },
                {
                    name:'list',
                    description:'下拉内容',
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
                    name:'on-click',
                    description:'点击菜单时触发',
                    props:'菜单名'
                },
                {
                    name:'on-enter',
                    description:'菜单显示时触发',
                    props:'-'
                },
                {
                    name:'on-leave',
                    description:'菜单隐藏时触发',
                    props:'-'
                }
            ]
        },
    };
  },
  methods: {
      handle11(){
          alert(33)
      }
  },
  mounted() {}
};
</script>
<style lang="scss">
.dropdown-demo{
    .vsu-dropdown{
        margin-right:40px;
    }
    .vsu-dropdown-header{
        display:inline-block;
    }
    .drop-title{
        i{
            margin-left:8px;
        }
    }
}
.custom-dropdown-demo{
    .drop-title{
        i{
            margin-left:8px;
        }
    }
    .vsu-dropdown-drop-left{
        width: 336px;
        ul{
            padding:20px 24px 0;
        }
        li{
            height:70px;
            border-bottom:1px solid  #E8E8E8;
            padding:10px 0;
            .title{
                font-size:14px;
            }
            .content{
                font-size:12px;
            }
        }
        .check-footer{
            height:46px;
            font-size:14px;
            line-height:46px;
            text-align:center;
            padding:0;
        }
    }
}
</style>
