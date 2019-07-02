<template>
    <div class="other">
        <div class="title1">
            Select 选择器
        </div>
        <div class="mItem">
            <div class="title2" id="title-1">
                基础用法：
            </div>
            <div class="wrap">
                {{baseSelect.value}}
                <br/>
                <FormSelect v-model="baseSelect.value" placeholder="请选择" style="width:200px;">
                    <FormOption v-for="(item,index) in baseSelect.options" :key="index" :option="item">
                    </FormOption>
                </FormSelect>
                <FormSelect v-model="baseSelect.value" placeholder="请选择" style="width:200px;" :max-height=100>
                    <FormOption v-for="(item,index) in baseSelect.options" :key="index" :option="item">
                    </FormOption>
                </FormSelect>
                <FormSelect v-model="simple.value" placeholder="请选择" style="width:200px;">
                    <FormOption v-for="(item,index) in simple.options" :key="index" :option="item">
                    </FormOption>
                </FormSelect>
                <div class="q-title">说明：</div>
                <div>
                    最简单的选择器,设置max-height属性定义最大高度。
                </div>
                <div class="q-title">代码示例：</div>
                <DCode :code="code.base" lang="html"></DCode>
            </div>
            <div class="title2" id="title-2">
                尺寸：
            </div>
            <div class="wrap">
                <FormSelect v-model="baseSelect.value" placeholder="请选择" style="width:200px;" size="small">
                    <FormOption v-for="(item,index) in baseSelect.options" :key="index" :option="item">
                    </FormOption>
                </FormSelect>
                <FormSelect v-model="baseSelect.value" placeholder="请选择" style="width:200px;">
                    <FormOption v-for="(item,index) in baseSelect.options" :key="index" :option="item">
                    </FormOption>
                </FormSelect>
                <FormSelect v-model="baseSelect.value" placeholder="请选择" style="width:200px;" size="large">
                    <FormOption v-for="(item,index) in baseSelect.options" :key="index" :option="item">
                    </FormOption>
                </FormSelect>
                <div class="q-title">说明：</div>
                <div>
                    设置size属性，改变select尺寸，有large和small可以选择。
                </div>
                <div class="q-title">代码示例：</div>
                <DCode :code="code.size" lang="html"></DCode>
            </div>
            <div class="title2" id="title-3">
                增加箭头：
            </div>
            <div class="wrap">
                <FormSelect v-model="baseSelect.value" placeholder="请选择" style="width:200px;" bubble>
                    <FormOption v-for="(item,index) in baseSelect.options" :key="index" :option="item">
                    </FormOption>
                </FormSelect>
                <div class="q-title">说明：</div>
                <div>
                    设置bubble属性，在下拉框上增加箭头
                </div>
                <div class="q-title">代码示例：</div>
                <DCode :code="code.arrow" lang="html"></DCode>
            </div>
            <div class="title2" id="title-4">
                固定title：
            </div>
            <div class="wrap">
                <FormSelect v-model="baseSelect.value" placeholder="请选择" style="width:200px;" title="水果选择" fix-title>
                    <FormOption v-for="(item,index) in baseSelect.options" :key="index" :option="item">
                    </FormOption>
                </FormSelect>
                <div class="q-title">说明：</div>
                <div>
                    设置fix-title属性，和title属性，可以固定title，不显示选择结果
                </div>
                <div class="q-title">代码示例：</div>
                <DCode :code="code.arrow" lang="html"></DCode>
            </div>
            <!-- <div class="title2" id="title-5">
                禁用选项：
            </div>
            <div class="wrap">
                <FormSelect v-model="disabledOpt.value" placeholder="请选择" style="width:200px;">
                    <FormOption v-for="(item,index) in disabledOpt.options" :key="index" :option="item" :disabled="item.disabled">
                    </FormOption>
                </FormSelect>
                <div class="q-title">说明：</div>
                <div>
                    在选项中设置disabled属性，设置禁用
                </div>
                <div class="q-title">代码示例：</div>
                <DCode :code="code.disabledOpt" lang="html"></DCode>
            </div> -->
            <div class="title2" id="title-6">
                禁用选择器：
            </div>
            <div class="wrap">
                <FormSelect v-model="baseSelect.value" placeholder="请选择" style="width:200px;" :disabled="true">
                    <FormOption v-for="(item,index) in baseSelect.options" :key="index" :option="item">
                    </FormOption>
                </FormSelect>
                <div class="q-title">说明：</div>
                <div>
                    在Select组件中设置disabled属性禁用选择器
                </div>
                <div class="q-title">代码示例：</div>
                <DCode :code="code.disabled" lang="html"></DCode>
            </div>
            <div class="title2" id="title-7">
                可清空选择：
            </div>
            <div class="wrap">
                <FormSelect v-model="baseSelect.value" placeholder="请选择" style="width:200px;" clearable>
                    <FormOption v-for="(item,index) in baseSelect.options" :key="index" :option="item">
                    </FormOption>
                </FormSelect>
                <div class="q-title">说明：</div>
                <div>
                    设置clearable属性，可清空选择
                </div>
                <div class="q-title">代码示例：</div>
                <DCode :code="code.clearable" lang="html"></DCode>
            </div>
            <div class="title2" id="title-8">
                多选和自定义：
            </div>
            <div class="wrap multi-select-wrap">
                <div class="q-title">多选：</div>
                <FormSelect v-model="multiselect.value" placeholder="请选择" style="width:200px;" type="multiple">
                    <FormOption v-for="(item,index) in multiselect.options" :key="index" :option="item">
                    </FormOption>
                </FormSelect> 
                <div class="q-title">多选类型(带选择框)：</div>
                <FormSelect v-model="multiselect.value" placeholder="请选择" style="width:200px;" type="multiple" multi-type="check-box">
                    <FormOption v-for="(item,index) in multiselect.options" :key="index" :option="item">
                    </FormOption>
                </FormSelect>
                <div class="q-title">有确定和取消：</div>
                <FormSelect v-model="multiselect.value" placeholder="请选择" style="width:200px;" type="multiple" multi-type="check-box" judge>
                    <FormOption v-for="(item,index) in multiselect.options" :key="index" :option="item">
                    </FormOption>
                </FormSelect>
                <div class="q-title">自定义多选样式，配置参数名,增加过滤：</div>
                <FormSelect 
                    :value="version.cur.code" 
                    placeholder="不限" 
                    class="select-col-2" 
                    style="width:224px;" 
                    filterable 
                    label-in-value
                    judge
                    multi-type="check-box" 
                    @on-submit="handleVersionChange" 
                    :type="version.type" 
                    :max-height=312 
                    label-key="text" 
                    value-key="code">
                    <div class="select-content-col-2">
                        <template v-for="n in 2">
                            <div :class="{'select-col-2':true,'col-left':(n==1)}" :key="n">
                                <FormOption v-for="(item,index) in version.data" v-if="(n==1)?(index<Math.ceil(version.data.length/2)):(index>=Math.ceil(version.data.length/2))" :key="index" :option="item">
                                </FormOption>
                            </div>
                        </template>
                    </div>
                </FormSelect>{{version.cur.code}}
                <div class="q-title">可全选：</div>
                <FormSelect 
                    :value="version.cur.code" 
                    placeholder="不限" 
                    class="select-col-2" 
                    style="width:224px;" 
                    filterable 
                    label-in-value
                    check-all
                    judge
                    multi-type="check-box" 
                    @on-submit="handleVersionChange" 
                    :type="version.type" 
                    :max-height=312 
                    label-key="text" 
                    value-key="code">
                    <div class="select-content-col-2">
                        <template v-for="n in 2">
                            <div :class="{'select-col-2':true,'col-left':(n==1)}" :key="n">
                                <FormOption v-for="(item,index) in version.data" v-if="(n==1)?(index<Math.ceil(version.data.length/2)):(index>=Math.ceil(version.data.length/2))" :key="index" :option="item">
                                </FormOption>
                            </div>
                        </template>
                    </div>
                </FormSelect>{{version.cur.code}}
                <div class="q-title">有可选范围：</div>
                <FormSelect 
                    :value="version.cur.code" 
                    placeholder="不限" 
                    class="select-col-2" 
                    style="width:224px;" 
                    filterable 
                    label-in-value
                     :check-range="[2,3]"
                    judge
                    multi-type="check-box" 
                    @on-submit="handleVersionChange" 
                    :type="version.type" 
                    :max-height=312 
                    label-key="text" 
                    value-key="code">
                    <div class="select-content-col-2">
                        <template v-for="n in 2">
                            <div :class="{'select-col-2':true,'col-left':(n==1)}" :key="n">
                                <FormOption v-for="(item,index) in version.data" v-if="(n==1)?(index<Math.ceil(version.data.length/2)):(index>=Math.ceil(version.data.length/2))" :key="index" :option="item">
                                </FormOption>
                            </div>
                        </template>
                    </div>
                </FormSelect>{{version.cur.code}}
                <div class="q-title">说明：</div>
                <div>
                    设置type为multiple可以设置成多选，<br/>
                    设置multi-type可以设置多选类型，默认为对勾样式，<br/>
                    增加check-all属性增加全选功能，全选功能带有确定和取消操作,<br/>
                    增加check-range属性增加选择数目范围，少于范围不可提交，超过范围不可选择<br/>
                    增加judge属性增加确定和取消操作，<br/>
                    增加label-key/value-key属性定义参数名，<br/>
                    <br/>
                </div>
                <div class="q-title">代码示例：</div>
                <DCode :code="code.multiple" lang="html"></DCode>
            </div>
            <div class="title2" id="title-9">
                对齐方式：
            </div>
            <div class="wrap multi-select-wrap">
                <FormSelect v-model="multiselect.value" placeholder="请选择" style="width:200px;" type="multiple" align="left">
                    <FormOption v-for="(item,index) in multiselect.options" :key="index" :option="item">
                    </FormOption>
                </FormSelect> 
                <FormSelect v-model="multiselect.value" placeholder="请选择" style="width:200px;" type="multiple" align="right">
                    <FormOption v-for="(item,index) in multiselect.options" :key="index" :option="item">
                    </FormOption>
                </FormSelect> 
                <div class="q-title">说明：</div>
                <div>
                    设置align为left/right,跳转对齐方式
                </div>
                <div class="q-title">代码示例：</div>
                <DCode :code="code.align" lang="html"></DCode>
            </div>
            <div class="title2">
                方向：
            </div>
            <div class="wrap multi-select-wrap">
                <FormSelect v-model="baseSelect.value" placeholder="请选择" style="width:200px;" bubble direction="top">
                    <FormOption v-for="(item,index) in baseSelect.options" :key="index" :option="item">
                    </FormOption>
                </FormSelect>
                <FormSelect v-model="baseSelect.value" placeholder="请选择" style="width:200px;" bubble direction="bottom">
                    <FormOption v-for="(item,index) in baseSelect.options" :key="index" :option="item">
                    </FormOption>
                </FormSelect>
                <div class="q-title">说明：</div>
                <div>
                    设置direction为top/bottom,默认为bottom
                </div>
                <div class="q-title">代码示例：</div>
                <DCode :code="code.align" lang="html"></DCode>
            </div>
            <div class="title2" id="title-10">
                自定义选项模板：
            </div>
            <div class="wrap">
                <FormSelect v-model="baseSelect.value" placeholder="请选择" style="width:200px;">
                    <FormOption v-for="(item,index) in baseSelect.options" :key="index" :option="item">
                        <Icon type="heart"></Icon>  {{item.label}}
                    </FormOption>
                </FormSelect>
                <div class="q-title">说明：</div>
                <div>
                    可自定义选项内容
                </div>
                <div class="q-title">代码示例：</div>
                <DCode :code="code.base" lang="html"></DCode>
            </div>
            <!-- <div class="title2">
                分栏：
            </div>
            <div class="wrap">
                <FormSelect v-model="baseSelect.value" placeholder="请选择" style="width:200px;" :col=2>
                    <FormOption v-for="(item,index) in baseSelect.options" :key="index" :option="item">
                        {{item.label}}
                    </FormOption>
                </FormSelect>
                <div class="q-title">说明：</div>
                <div>
                    设置col属性定义选项列数
                </div>
                <div class="q-title">代码示例：</div>
                <DCode :code="code.base" lang="html"></DCode>
            </div>
            <div class="title2">
                可搜索：
            </div>
            <div class="wrap">
                <FormSelect v-model="baseSelect.value" placeholder="请选择" style="width:200px;">
                    <FormOption v-for="(item,index) in baseSelect.options" :key="index" :option="item">
                        {{item.label}}
                    </FormOption>
                </FormSelect>
                <div class="q-title">说明：</div>
                <div>
                    最简单的选择器。
                </div>
                <div class="q-title">代码示例：</div>
                <DCode :code="code.base" lang="html"></DCode>
            </div>
            <div class="title2">
                远程搜索：
            </div>
            <div class="wrap">
                <FormSelect v-model="baseSelect.value" placeholder="请选择" style="width:200px;">
                    <FormOption v-for="(item,index) in baseSelect.options" :key="index" :option="item">
                        {{item.label}}
                    </FormOption>
                </FormSelect>
                <div class="q-title">说明：</div>
                <div>
                    最简单的选择器。
                </div>
                <div class="q-title">代码示例：</div>
                <DCode :code="code.base" lang="html"></DCode>
            </div> -->
            <div class="title2" id="title-11">
                API：
            </div>
            <div class="wrap">
                <div class="q-title">Select【props】：</div>
                <Table type="bordered" :thead="api.thead" :data="api.data">
                </Table>
                <div class="q-title">Select【events】：</div>
                <Table type="bordered" :thead="event.thead" :data="event.data">
                </Table>
                <div class="q-title">Select【slot】</div>
                <Table type="bordered" :thead="slots.thead" :data="slots.data">
                </Table>
            </div>
        </div>
        <DMenu></DMenu>
    </div>
</template>

<script>
import Code from '../../../code/component/form/select';
export default {
  data() {
    return {
        code: Code,
        simple:{
            value:10,
            options:[10,20,30,40]
        },
        baseSelect:{
            value:'',
            options:[
                {
                    value:'apple',
                    label:'苹果'
                },
                {
                    value:'pear',
                    label:'梨'
                },
                {
                    value:'banana',
                    label:'香蕉'
                },
                {
                    value:'pineapple',
                    label:'菠萝'
                }
            ]
        },
        disabledOpt:{
            value:'apple',
            options:[
                {
                    value:'apple',
                    label:'苹果'
                },
                {
                    value:'pear',
                    label:'梨'
                },
                {
                    value:'banana',
                    label:'香蕉',
                    disabled:true
                },
                {
                    value:'pineapple',
                    label:'菠萝'
                }
            ]
        },
        multiselect:{
            value:['apple','pear'],
            options:[
                {
                    value:'apple',
                    label:'苹果'
                },
                {
                    value:'pear',
                    label:'梨'
                },
                {
                    value:'banana',
                    label:'香蕉'
                },
                {
                    value:'pineapple',
                    label:'菠萝'
                }
            ]
        },
        version:{
            type:'multiple',
            status:'hasData',
            data:[{
                  "text": "3.1.0",
                  "code": "3.1.0",
                  "filter": "3.1.03.1.0"
                  },
                  {
                    "text": "3.0.0",
                    "code": "3.0.0",
                    "filter": "3.0.03.0.0"
                  }, 
                  {
                    "text": "2.1.2",
                    "code": "2.1.2",
                    "filter": "2.1.22.1.2"
                  }, {
                    "text": "2.1.1",
                    "code": "2.1.1",
                    "filter": "2.1.12.1.1"
                  }, {
                    "text": "2.1.0",
                    "code": "2.1.0",
                    "filter": "2.1.02.1.0"
                  }, {
                    "text": "2.0.0",
                    "code": "2.0.0",
                    "filter": "2.0.02.0.0"
                  }, {
                    "text": "1.0.1",
                    "code": "1.0.1",
                    "filter": "1.0.11.0.1"
                  }, {
                    "text": "0.0.0",
                    "code": "0.0.0",
                    "filter": "0.0.00.0.0"
                  }
                ],
            cur:{
                code:["3.1.0","3.0.0"],
                text:'不限'
            }

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
                    prop:'type',
                    description:'类型',
                    type:'String',
                    option:'single，multiple',
                    default:'single'
                },
                {
                    prop:'noScroll',
                    description:'是否需要下拉框不可滚动',
                    type:'Boolean',
                    option:'true,false',
                    default:'false'
                },
                {
                    prop:'size',
                    description:'大小',
                    type:'String',
                    option:'large,small',
                    default:'-'
                },
                {
                    prop:'defaultTitle',
                    description:'默认显示标签',
                    type:'String',
                    option:'-',
                    default:'-'
                },
                {
                    prop:'tooltipDirection',
                    description:'type为multiple时选择超过两个显示的提示方向',
                    type:'String',
                    option:'tooltip的direction选项',
                    default:'top'
                },
                {
                    prop:'direction',
                    description:'选择框的方向',
                    type:'String',
                    option:'top,bottom',
                    default:'bottom'
                },
                {
                    prop:'searchTip',
                    description:'当可以搜索时的搜索提示',
                    type:'String',
                    option:'-',
                    default:'-'
                },
                {
                    prop:'status',
                    description:'加载状态',
                    type:'String',
                    option:'noData，loading，hasData',
                    default:'-'
                },
                {
                    prop:'icon',
                    description:'下拉图标',
                    type:'String',
                    option:'-',
                    default:'ios-arrow-down'
                },
                {
                    prop:'multiTagIcon',
                    description:'多选标签关闭图标',
                    type:'String',
                    option:'-',
                    default:'ios-close-empty'
                },
                {
                    prop:'tagClosable',
                    description:'多选标签是否可关闭',
                    type:'Boolean',
                    option:'-',
                    default:'true'
                },
                {
                    prop:'closeToReset',
                    description:'多选时取消是否重置为历史选择',
                    type:'Boolean',
                    option:'-',
                    default:'false'
                },
                {
                    prop:'remote',
                    description:'是否远程加载数据',
                    type:'Boolean',
                    option:'-',
                    default:'false'
                },
                {
                    prop:'optionsKey',
                    description:'额外传入，在on-change时一起传出的数据名',
                    type:'String',
                    option:'-',
                    default:'value'
                },
                {
                    prop:'judge',
                    description:'是否有确定取消选择',
                    type:'Boolean',
                    option:'-',
                    default:'false'
                },
                {
                    prop:'labelInValue',
                    description:'多选时是否返回包括value和label的对象',
                    type:'Boolean',
                    option:'-',
                    default:'false'
                },
                {
                    prop:'multiType',
                    description:'多选类型',
                    type:'String',
                    option:'check-box',
                    default:'-'
                },
                {
                    prop:'checkAll',
                    description:'是否有全选',
                    type:'Boolean',
                    option:'-',
                    default:'false'
                },
                {
                    prop:'checkRange',
                    description:'多选范围，少于范围不可提交，多于范围不可选择',
                    type:'Array',
                    option:'-',
                    default:'-'
                },
                {
                    prop:'maxHeight',
                    description:'最大高度',
                    type:'Number',
                    option:'-',
                    default:'200'
                },
                {
                    prop:'clearable',
                    description:'是否可清除',
                    type:'Boolean',
                    option:'-',
                    default:'false'
                },
                {
                    prop:'filterable',
                    description:'是否可筛选',
                    type:'Boolean',
                    option:'-',
                    default:'false'
                },
                {
                    prop:'searchable',
                    description:'是否可在组件外进行搜索',
                    type:'Boolean',
                    option:'-',
                    default:'false'
                },
                {
                    prop:'value',
                    description:'值',
                    type:'String,Number,Array',
                    option:'-',
                    default:'-'
                },
                {
                    prop:'disabled',
                    description:'禁止',
                    type:'Boolean',
                    option:'-',
                    default:'false'
                },
                {
                    prop:'placeholder',
                    description:'提示',
                    type:'String',
                    option:'-',
                    default:'-'
                },
                {
                    prop:'align',
                    description:'对齐方式',
                    type:'String',
                    option:'left，right',
                    default:'left'
                },
                {
                    prop:'bubble',
                    description:'是否有箭头',
                    type:'Boolean',
                    option:'-',
                    default:'false'
                },
                {
                    prop:'labelKey',
                    description:'label属性名',
                    type:'String',
                    option:'-',
                    default:'label'
                },
                {
                    prop:'valueKey',
                    description:'value属性名',
                    type:'String',
                    option:'-',
                    default:'value'
                },
                {
                    prop:'name',
                    description:'表单字段名',
                    type:'String',
                    option:'-',
                    default:'-'
                },
                {
                    prop:'fixTitle',
                    description:'是否固定title',
                    type:'String',
                    option:'-',
                    default:'-'
                },
                {
                    prop:'title',
                    description:'默认title',
                    type:'String',
                    option:'-',
                    default:'-'
                },
                {
                    prop:'searchPlaceholder',
                    description:'搜索提示',
                    type:'String',
                    option:'-',
                    default:'-'
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
                    name:'on-change',
                    description:'切换选项时触发',
                    props:'值'
                },
                {
                    name:'on-submit',
                    description:'提交选项时触发',
                    props:'值'
                },
                {
                    name:'on-cancel',
                    description:'取消提交选项时触发',
                    props:''
                },
                {
                    name:'on-show',
                    description:'在下拉框打开时触发',
                    props:''
                },
                {
                    name:'on-toggle',
                    description:'在下拉框可见状态变化时触发',
                    props:''
                },
                {
                    name:'on-search',
                    description:'在搜索时触发',
                    props:'搜索的词'
                },
                {
                    name:'on-scrollDown',
                    description:'有滚动条时向下滚触发',
                    props:'搜索的词'
                },
                {
                    name:'on-scrollUp',
                    description:'有滚动条时向上滚触发',
                    props:'搜索的词'
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
                    name:'selection',
                    description:'选择框内容slot',
                },
                {
                    name:'selection-name',
                    description:'选择内容slot',
                },
                {
                    name:'nodata',
                    description:'nodata slot',
                },
                {
                    name:'loading',
                    description:'loading slot',
                },
                {
                    name:'sum-tip',
                    description:'总结文字 slot',
                },
                {
                    name:'pre',
                    description:'下拉框前部 slot',
                },
                {
                    name:'after',
                    description:'下拉框后部 slot',
                },
                {
                    name:'无',
                    description:'下拉内容',
                }
            ]
        },
    };
  },
  methods: {
      handleVersionChange(item){
          this.version.cur = item;
      }
  },
  mounted() {}
};
</script>
<style lang="scss">
.multi-select-wrap{
    .vsu-select-drop{
        width:312px;
    }
    .vsu-tooltip-content{
        width:200px;
    }
    
    .vsu-select{
        &.select-col-2{
            .vsu-select-drop{
            width:312px;
            }
            .select-content-col-2{
            .select-col-2{
                width:50%;
                float:left;
            }
            }
        }
        .vsu-select-search-wrap{
            .vsu-input-body{
            border-bottom:1px solid #D9D9D9;
            input{
                border:none;
            }
            }
        }
        &-check-wrap{
            height:46px;
            padding:10px 12px;
        }
    }
}
</style>
