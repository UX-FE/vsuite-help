<template>
    <div class="other">
        <div class="title1">
            Tree 树形控件
        </div>
        <div class="mItem">
            <div class="title2" id="title-1">
                使用：
            </div>
            <div class="wrap">
                <Tree :tree="tree1.data" @on-click-node="handleClickNode">
                </Tree>
                <div class="q-title">说明：</div>
                <div>
                   最简单的树，点击可展开，同时选中当前节点，默认每次只能选中一个节点
                </div>
                <div class="q-title">代码示例：</div>
                <DCode :code="code.base" lang="html"></DCode>
            </div>
             <div class="title2" id="title-2">
                默认展开：
            </div>
            <div class="wrap">
                <Tree :tree="expandtree1.data" @on-click-node="handleClickNode"></Tree>
                <div class="q-title">说明：</div>
                <div>
                   在节点中设置expand属性为true,可控制节点默认展开
                </div>
                <div class="q-title">代码示例：</div>
                <DCode :code="code.expand" lang="html"></DCode>
            </div>
            <div class="title2" id="title-3">
                可选择：
            </div>
            <div class="wrap">
                <Tree :tree="tree1.data" checkable @on-click-node="handleClickNode"></Tree>
                <div class="q-title">说明：</div>
                <div>
                   设置checkable属性，可设置为可选择
                </div>
                <div class="q-title">代码示例：</div>
                <DCode :code="code.check" lang="html"></DCode>
            </div>
            <div class="title2" id="title-4">
                默认选中：
            </div>
            <div class="wrap">
                <Tree :tree="checktree1.data" checkable @on-click-node="handleClickNode"></Tree>
                <div class="q-title">说明：</div>
                <div>
                   在节点中设置check属性为true,可控制节点默认选中
                </div>
                <div class="q-title">代码示例：</div>
                <DCode :code="code.check" lang="html"></DCode>
            </div>
            <!-- 
            <div class="title2">
                默认展开和默认选中：
            </div>
            <div class="wrap">
                <Tree :tree="tree1.data" checkable @on-click-node="handleClickNode" :default-expanded="[1,2]" :default-checked="[1.2]"></Tree>
                <div class="q-title">说明：</div>
                <div>
                   设置default-expanded和default-checked可以设置默认展开的节点和默认选中的节点，数组中的id在整棵树中唯一。
                </div>
                <div class="q-title">代码示例：</div>
                <DCode :code="code.defaultCheck" lang="html"></DCode>
            </div>
            <div class="title2">
                禁用状态：
            </div>
            <div class="wrap">
                <Tree :tree="tree2.data" checkable @on-click-node="handleClickNode" :default-expanded="[1,2]" :default-checked="[1.2]"></Tree>
                <div class="q-title">说明：</div>
                <div>
                   可设置禁用状态
                </div>
                <div class="q-title">代码示例：</div>
                <DCode :code="code.disabled" lang="html"></DCode>
            </div> -->
            <!-- <div class="title2">
                手风琴模式
            </div>
            <div class="wrap">
                <Tree :tree="tree1.data" checkable @on-click-node="handleClickNode" accordion></Tree>
                <div class="q-title">说明：</div>
                <div>
                   设置accordion属性，一次只能展开一级
                </div>
                <div class="q-title">代码示例：</div>
                <DCode :code="code.base" lang="html"></DCode>
            </div> -->
            <!-- <div class="title2">
                节点自定义
            </div>
            <div class="wrap">
                <Tree :tree="tree3.data" @on-click-node="handleClickNode">
                </Tree>
                <div class="q-title">说明：</div>
                <div>
                   
                </div>
                <div class="q-title">代码示例：</div>
                <DCode :code="code.base" lang="html"></DCode>
            </div> -->
            <!-- <div class="title2">
                选择范围，最小选择数和最大选择数：
            </div>
            <div class="wrap">
                <Tree :tree="tree1.data" checkable @on-click-node="handleClickNode" :max-checked=4 :min-checked=2></Tree>
                <div class="q-title">说明：</div>
                <div>
                   设置max-checked和min-checked可以设置选择数目范围
                </div>
                <div class="q-title">代码示例：</div>
                <DCode :code="code.base" lang="html"></DCode>
            </div> -->
            <div class="title2" id="title-5">
                API：
            </div>
            <div class="wrap">
                <div class="q-title">Tree【props】：</div>
                <Table type="bordered" :thead="api.thead" :data="api.data">
                </Table>
                <div class="q-title">Tree【events】：</div>
                <Table type="bordered" :thead="event.thead" :data="event.data">
                </Table>
                <div class="q-title">TreeNode【props】：</div>
                <Table type="bordered" :thead="itemapi.thead" :data="itemapi.data">
                </Table>
            </div>
        </div>
        <DMenu></DMenu>
    </div>
</template>

<script>
import Code from '../../../code/component/data/tree';
export default {
  data() {
    return {
        code:Code,
        tree1:{
            data:[
                {
                    id:1,
                    title:'一级1',
                    childs:[
                        {
                            id:1.1,
                            title:'一级1-1',
                            childs:[
                                {
                                    title:'一级1-1-1',
                                    childs:[
                                        
                                    ]
                                },
                                {
                                    title:'一级1-1-2',
                                    childs:[

                                    ]
                                },
                                
                            ]
                        },
                        {
                            id:1.2,
                            title:'一级1-2',
                            childs:[

                            ]
                        },
                    ]
                },
                {
                    id:2,
                    title:'一级2',
                    childs:[
                        {
                            id:2.1,
                            title:'一级2-1',
                            childs:[
                                
                            ]
                        },
                        {
                            id:2.2,
                            title:'一级2-2',
                            childs:[

                            ]
                        },

                    ]
                },
                {
                    id:3,
                    title:'一级3',
                    childs:[
                        {
                            id:3.1,
                            title:'一级3-1',
                            childs:[
                                
                            ]
                        },
                        {
                            id:3.2,
                            title:'一级3-2',
                            childs:[

                            ]
                        },

                    ]
                }
            ]
        },
        expandtree1:{
            data:[
                {
                    id:1,
                    title:'一级1',
                    expand:true,
                    childs:[
                        {
                            id:1.1,
                            title:'一级1-1',
                            expand:true,
                            childs:[
                                {
                                    title:'一级1-1-1',
                                    childs:[
                                        
                                    ]
                                },
                                {
                                    title:'一级1-1-2',
                                    childs:[

                                    ]
                                },
                                
                            ]
                        },
                        {
                            id:1.2,
                            title:'一级1-2',
                            childs:[

                            ]
                        },
                    ]
                },
                {
                    id:2,
                    title:'一级2',
                    childs:[
                        {
                            id:2.1,
                            title:'一级2-1',
                            childs:[
                                
                            ]
                        },
                        {
                            id:2.2,
                            title:'一级2-2',
                            childs:[

                            ]
                        },

                    ]
                },
                {
                    id:3,
                    title:'一级3',
                    childs:[
                        {
                            id:3.1,
                            title:'一级3-1',
                            childs:[
                                
                            ]
                        },
                        {
                            id:3.2,
                            title:'一级3-2',
                            childs:[

                            ]
                        },

                    ]
                }
            ]
        },
        checktree1:{
            data:[
                {
                    id:1,
                    title:'一级1',
                    expand:true,
                    check:true,
                    childs:[
                        {
                            id:1.1,
                            title:'一级1-1',
                            expand:true,
                            check:true,
                            childs:[
                                {
                                    title:'一级1-1-1',
                                    childs:[
                                        
                                    ]
                                },
                                {
                                    title:'一级1-1-2',
                                    childs:[

                                    ]
                                },
                                
                            ]
                        },
                        {
                            id:1.2,
                            title:'一级1-2',
                            childs:[

                            ]
                        },
                    ]
                },
                {
                    id:2,
                    title:'一级2',
                    childs:[
                        {
                            id:2.1,
                            title:'一级2-1',
                            childs:[
                                
                            ]
                        },
                        {
                            id:2.2,
                            title:'一级2-2',
                            childs:[

                            ]
                        },

                    ]
                },
                {
                    id:3,
                    title:'一级3',
                    childs:[
                        {
                            id:3.1,
                            title:'一级3-1',
                            childs:[
                                
                            ]
                        },
                        {
                            id:3.2,
                            title:'一级3-2',
                            childs:[

                            ]
                        },

                    ]
                }
            ]
        },
        tree2:{
            data:[
                {
                    id:1,
                    title:'一级1',
                    childs:[
                        {
                            id:1.1,
                            disabled:true,
                            title:'一级1-1',
                            childs:[
                                {
                                    title:'一级1-1-1',
                                    childs:[
                                        
                                    ]
                                },
                                {
                                    title:'一级1-1-2',
                                    childs:[

                                    ]
                                },
                                
                            ]
                        },
                        {
                            id:1.2,
                            title:'一级1-2',
                            disabled:true,
                            childs:[

                            ]
                        },
                    ]
                },
                {
                    id:2,
                    title:'一级2',
                    disabled:true,
                    childs:[
                        {
                            id:2.1,
                            disabled:true,
                            title:'一级2-1',
                            childs:[
                                
                            ]
                        },
                        {
                            id:2.2,
                            title:'一级2-2',
                            childs:[

                            ]
                        },

                    ]
                },
                {
                    id:3,
                    title:'一级3',
                    childs:[
                        {
                            id:3.1,
                            title:'一级3-1',
                            childs:[
                                
                            ]
                        },
                        {
                            id:3.2,
                            title:'一级3-2',
                            childs:[

                            ]
                        },

                    ]
                }
            ]
        },
        tree3:{
            data:[
                {
                    id:1,
                    icon:'ios-analytics',
                    title:'一级1',
                    childs:[
                        {
                            id:1.1,
                            icon:'ios-analytics',
                            title:'一级1-1',
                            childs:[
                                {
                                    icon:'ios-analytics',
                                    title:'一级1-1-1',
                                    childs:[
                                        
                                    ]
                                },
                                {
                                    icon:'ios-analytics',
                                    title:'一级1-1-2',
                                    childs:[

                                    ]
                                },
                                
                            ]
                        },
                        {
                            icon:'ios-analytics',
                            id:1.2,
                            title:'一级1-2',
                            childs:[

                            ]
                        },
                    ]
                },
                {
                    id:2,
                    icon:'ios-pie',
                    title:'一级2',
                    childs:[
                        {
                            id:2.1,
                            icon:'ios-pie',
                            title:'一级2-1',
                            childs:[
                                
                            ]
                        },
                        {
                            id:2.2,
                            icon:'ios-pie',
                            title:'一级2-2',
                            childs:[

                            ]
                        },

                    ]
                },
                {
                    id:3,
                    icon:'ios-cog',
                    title:'一级3',
                    childs:[
                        {
                            id:3.1,
                            icon:'ios-cog',
                            title:'一级3-1',
                            childs:[
                                
                            ]
                        },
                        {
                            id:3.2,
                            icon:'ios-cog',
                            title:'一级3-2',
                            childs:[

                            ]
                        },

                    ]
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
                    prop:'tree',
                    description:'数据',
                    type:'Array',
                    option:'-',
                    default:'[]'
                },
                {
                    prop:'checkable',
                    description:'可选择',
                    type:'Boolean',
                    option:'-',
                    default:'false'
                },
                {
                    prop:'iconType',
                    description:'下拉图标',
                    type:'String',
                    option:'-',
                    default:'arrow-down-b'
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
                    prop:'node',
                    description:'数据',
                    type:'Object',
                    option:'-',
                    default:'[]'
                },
                {
                    prop:'expand',
                    description:'默认展开',
                    type:'Boolean',
                    option:'-',
                    default:'false'
                },
                {
                    prop:'check',
                    description:'默认选中',
                    type:'Boolean',
                    option:'-',
                    default:'false'
                },
                {
                    prop:'disabled',
                    description:'默认禁用',
                    type:'Boolean',
                    option:'-',
                    default:'false'
                },
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
                    name:'on-click-node',
                    description:'点击节点时触发',
                    props:'节点数据'
                },
                {
                    name:'on-check-node',
                    description:'选中节点时触发',
                    props:'节点数据'
                }
            ]
        },
    };
  },
  methods: {
      handleClickNode(data){
      }
  },
  mounted() {}
};
</script>
<style lang="scss">
</style>
