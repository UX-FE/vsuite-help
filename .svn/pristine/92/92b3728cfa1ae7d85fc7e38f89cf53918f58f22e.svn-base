<template>
    <div class="other">
        <div class="title1">
            Table 表格
        </div>
        <div class="mItem">
            <div class="title2" id="title-1">
                使用：
            </div>
            <div class="wrap">
                <Table :thead="table1.thead" :data="table1.data">
                </Table>
                <div class="q-title">说明：</div>
                <div>
                   最简单的表格，默认样式无边框无颜色，增加 thead 属性定义表头，增加 data 属性定义表数据
                </div>
                <div class="q-title">代码示例：</div>
                <DCode :code="code.base" lang="html"></DCode>
            </div>
            <div class="title2" id="title-2">
                类型：
            </div>
            <div class="wrap">
                <Table :thead="table1.thead" :data="table1.data" type="strip">
                </Table>
                <br/>
                <Table :thead="table1.thead" :data="table1.data" type="zebra">
                </Table>
                <br/>
                <Table :thead="table1.thead" :data="table1.data" type="bordered">
                </Table>
                <br/>
                <div class="q-title">说明：</div>
                <div>
                   设置 type 属性改变表格类型，有 strip、zebra 和 bordered 三种类型，表示条形表格、斑马表格和带边框的表格,不设置为默认样式
                </div>
                <div class="q-title">代码示例：</div>
                <DCode :code="code.type" lang="html"></DCode>
            </div>
            <div class="title2" id="title-3">
                增加loading：
            </div>
            <div class="wrap">
                <Table :loading="table1.loading" :thead="table1.thead" :data="table1.data">
                </Table>
            </div>
                <RadioGroup v-model="isLoading">
                    <Radio :label="1">显示loading</Radio>
                    <Radio :label="2">隐藏loading</Radio>
                </RadioGroup>
                <div class="q-title">说明：</div>
                <div>
                   设置 loading 属性，并通过控制 loading 的布尔值来切换显示与隐藏
                </div>
                <div class="q-title">代码示例：</div>
                <DCode :code="code.loading" lang="html"></DCode>
            <div class="title2" id="title-4">
                增加序列号：
            </div>
            <div class="wrap">
                <Table :thead="table2.thead" :data="table2.data" order type="bordered">
                </Table>
                <div class="q-title">说明：</div>
                <div>
                   设置 order 属性增加序列号，固定某一列宽度，在 thead 数组中对应项增加 width ，格式为 Number
                </div>
                <div class="q-title">代码示例：</div>
                <DCode :code="code.order" lang="html"></DCode>
            </div>
            <div class="title2" id="title-5">
                增加标题：
            </div>
            <div class="wrap">
                <Table :thead="table1.thead" :data="table1.data" title="我是标题" type="bordered">
                </Table>
                <div class="q-title">说明：</div>
                <div>
                   设置 title 增加表格标题
                </div>
                <div class="q-title">代码示例：</div>
                <DCode :code="code.title" lang="html"></DCode>
            </div>
            <div class="title2" id="title-6">
                排序：
            </div>
            <div class="wrap">
                <Table :thead="table3.thead" :data="table3.data" type="bordered" sortType="date" >
                </Table>
                <div class="q-title">说明：</div>
                <div>
                   设置 sortType 属性增加排序字段， 设置 sort 属性为 'asc'或 'desc'来切换默认升降序
                </div>
                <div class="q-title">代码示例：</div>
                <DCode :code="code.sort" lang="html"></DCode>
            </div>
            <div class="title2" id="title-7">
                单选：
            </div>
            <div class="wrap">
                <Table :thead="table1.thead" :data="table1.data" clickable type="bordered">
                </Table>
                <div class="q-title">说明：</div>
                <div>
                   设置 clickable 可选中某一行，被选中的行高亮显示
                </div>
                <div class="q-title">代码示例：</div>
                <DCode :code="code.radio" lang="html"></DCode>
            </div>
            <div class="title2" id="title-8">
                多选：
            </div>
            <div class="wrap">
                <Table :thead="table4.thead" :data="table4.data" multi-select type="bordered">
                </Table>
                <div class="q-title">说明：</div>
                <div>
                   设置 multi-select 可多选
                </div>
                <div class="q-title">代码示例：</div>
                <DCode :code="code.multi" lang="html"></DCode>
            </div>
            <div class="title2" id="title-9">
                自定义列：
            </div>
            <div class="wrap">
                <Table :thead="table6.thead" :data="table6.data">
                </Table>
                <div class="q-title">说明：</div>
                <div>
                   通过对 thead 数组中，对某列设置 render 可以自定义该列的样式和事件，render方法 更多用法可以参考官方<br>
                   <a href="https://cn.vuejs.org/v2/guide/render-function.html">https://cn.vuejs.org/v2/guide/render-function.html</a>
                </div>
                <div class="q-title">代码示例：</div>
                <DCode :code="code.customCol" lang="html"></DCode>
            </div>
            <div class="title2" id="title-10">
                自定义行：
            </div>
            <div class="wrap">
                <Table :thead="table1.thead" :data="table1.data" type="bordered">
                    <tr slot="tr"  v-for="(item,index) in table1.data" :key="index">
                        <td v-for="(itm,i) in table1.thead" :key="i">
                            <div class="cell">
                                <template v-if="itm.column==='name'">
                                    <BaseButton>{{item[itm.column]}}</BaseButton>
                                </template>
                                <template v-else>
                                    <span v-html="item[itm.column]"></span>
                                </template>
                            </div>  
                        </td>
                    </tr>
                </Table>
                <div class="q-title">说明：</div>
                <div>
                   在表格多列都需要自定义的时候，自定义列的做法会显得有点冗长，这是通过增加 tr 插槽可以自定义行
                </div>
                <div class="q-title">代码示例：</div>
                <DCode :code="code.customRow" lang="html"></DCode>
            </div>
            <div class="title2" id="title-11">
                展开行：
            </div> 
            <div class="wrap">
                <Table :thead="table5.thead" :data="table5.data" clickable :expanded-indexs="currentExpandShow" :expand="table5.expandRender" type="zebra" @on-click-row="handleClick">
                </Table>
                <div class="q-title">说明：</div>
                <div>
                   设置 expandRender 属性可以为每一个表格行下增加展开内容
                </div>
                <div class="q-title">代码示例：</div>
                <DCode :code="code.open" lang="html"></DCode>
            </div>
            <!-- <div class="title2">
                增加合计行：
            </div>
            <div class="wrap">
                <Table :thead="table1.thead" :data="table1.data" type="bordered">
                    <tr slot="sum">

                    </tr>
                </Table>
                <div class="q-title">说明：</div>
                <div>
                   设置title增加表格标题
                </div>
                <div class="q-title">代码示例：</div>
                <DCode :code="code.sum" lang="html"></DCode>
            </div> -->
            <!-- <div class="title2">
                筛选：
            </div>
            <div class="wrap">
                <Table :thead="table1.thead" :data="table1.data" title="我是标题" type="bordered">
                </Table>
                <div class="q-title">说明：</div>
                <div>
                   设置title增加表格标题
                </div>
                <div class="q-title">代码示例：</div>
                <DCode :code="code.title" lang="html"></DCode>
            </div> -->
            <!-- <div class="title2">
                多级表头：
            </div>
            <div class="wrap">
                <Table :thead="table1.thead" :data="table1.data" title="我是标题" type="bordered">
                </Table>
                <div class="q-title">说明：</div>
                <div>
                   设置title增加表格标题
                </div>
                <div class="q-title">代码示例：</div>
                <DCode :code="code.title" lang="html"></DCode>
            </div> -->
            <div class="title2" id="title-12">
                固定表头：
            </div>
            <div class="wrap">
                <Table :thead="table1.thead" :data="table1.data" type="zebra" height="160">
                </Table>
                <div class="q-title">说明：</div>
                <div>
                   设置 height属性，会对整个表格体的高度进行约束，超出设定 height 高度后会以滚动条的方式展示表体
                </div>
                <div class="q-title">代码示例：</div>
                <DCode :code="code.fix" lang="html"></DCode>
            </div>
            <!-- <div class="title2">
                表格的无数据和loading状态：
            </div>
            <div class="wrap">
                <Table :thead="table1.thead" :data="table1.data" title="我是标题" type="bordered">
                </Table>
                <div class="q-title">说明：</div>
                <div>
                   设置title增加表格标题
                </div>
                <div class="q-title">代码示例：</div>
                <DCode :code="code.title" lang="html"></DCode>
            </div> -->
            <div class="title2" id="title-13">
                色彩栅格：
            </div>
            <div class="wrap">
                <Table :thead="table7.thead" :data="table7.data" :colorGrads="['#ff9900']" :gradsRef="3000">
                </Table>
                <div class="q-title">说明：</div>
                <div>
                   设置 colorGrads 属性可以让表格呈现色彩栅格的效果，更直观区分表格中的数据差异， 同时设置 gradsRef 属性为表格的数值早呢更加参考值，
                   色彩栅格根据表格数据与参考值的比值形成栅格效果，默认 gradsRef 为 1, colorGrads 支持字符串和数组：

                   <ul>
                       <li> colorGrads = "#ff9900" , 代表最大比率色值为 <span style="color:#fff;background:#ff9900"> "#ff9900" </span>, 最小比例色值为白色: "#fff" </li>
                       <li> colorGrads = "['#ff9900']", 代表最大比率色值为 <span style="color:#fff;background:#ff9900"> "#ff9900" </span>, 最小比例色值为白色:"#fff"</li>
                       <li> colorGrads = "['#ff0000','#ff9900']", 代表最大比率色值为 <span style="color:#fff;background:#ff9900"> "#ff9900" </span>, 最小比例色值为<span style="color:#fff;background:#ffaabb"> "#ffaabb" </span></li>
                   </ul>

                   设置 thead 中对应列的 colorGrads 为 true后，才会启动色彩栅格的处理，否则将不起效
                </div>
                <div class="q-title">代码示例：</div>
                <DCode :code="code.colorGrads" lang="html"></DCode>
            </div>
            <div class="title2" id="title-14">
                API：
            </div>
            <div class="wrap">
                <div class="q-title">Table【props】：</div>
                <Table type="bordered" :thead="api.thead" :data="api.data">
                </Table>
                <div class="q-title">Table【events】：</div>
                <Table type="bordered" :thead="event.thead" :data="event.data">
                </Table>
            </div>
        </div>
        <DMenu></DMenu>
    </div>
</template>

<script>
import expandRow from './table-expand.vue';
import Code from '../../../code/component/data/table';
export default {
  components: { expandRow },
  data() {
    return {
        code: Code,
        isLoading:2,
        currentExpandShow:[],
        table1:{
            loading:false,
            thead:[
                {
                    column:'date',
                    name:'日期'
                },
                {
                    column:'name',
                    name:'姓名'
                },
                {
                    column:'address',
                    name:'地址'
                },
            ],
            data:[
                {
                    date: '2018-01-02',
                    name: '微笑',
                    address: '广州市'
                },
                {
                    date: '2018-01-02',
                    name: '微笑',
                    address: '广州市'
                },
                {
                    date: '2018-01-02',
                    name: '微笑',
                    address: '广州市'
                },
                {
                    date: '2018-01-02',
                    name: '微笑',
                    address: '广州市'
                }
            ]
        },
        table2:{
            thead:[
                {
                    column:'order',
                    name:'序列',
                    width:100
                },
                {
                    column:'date',
                    name:'日期'
                },
                {
                    column:'name',
                    name:'姓名'
                },
                {
                    column:'address',
                    name:'地址'
                },
            ],
            data:[
                {
                    date: '2018-01-02',
                    name: '微笑',
                    address: '广州市'
                },
                {
                    date: '2018-01-02',
                    name: '微笑',
                    address: '广州市'
                },
                {
                    date: '2018-01-02',
                    name: '微笑',
                    address: '广州市'
                },
                {
                    date: '2018-01-02',
                    name: '微笑',
                    address: '广州市'
                }
            ]
        },
        table3:{
            thead:[
                {
                    column:'date',
                    name:'日期',
                    sort:true
                },
                {
                    column:'name',
                    name:'姓名',
                    sort:true
                },
                {
                    column:'address',
                    name:'地址',
                    sort:true
                },
            ],
            data:[
                {
                    date: '2018-01-02',
                    name: '微笑',
                    address: '广州市'
                },
                {
                    date: '2018-01-02',
                    name: '微笑',
                    address: '广州市'
                },
                {
                    date: '2018-01-02',
                    name: '微笑',
                    address: '广州市'
                },
                {
                    date: '2018-01-02',
                    name: '微笑',
                    address: '广州市'
                }
            ]
        },
        table4:{
            thead:[
                {
                    type:'selection',
                    width:80
                },
                {
                    column:'date',
                    name:'日期',
                    sort:true
                },
                {
                    column:'name',
                    name:'姓名',
                    sort:true
                },
                {
                    column:'address',
                    name:'地址',
                    sort:true
                },
            ],
            data:[
                {
                    date: '2018-01-02',
                    name: '微笑',
                    address: '广州市'
                },
                {
                    date: '2018-01-02',
                    name: '微笑',
                    address: '广州市'
                },
                {
                    date: '2018-01-02',
                    name: '微笑',
                    address: '广州市'
                },
                {
                    date: '2018-01-02',
                    name: '微笑',
                    address: '广州市'
                }
            ]
        },
        table5:{
            expandRender: (h, params) => {
                return h(expandRow, {
                    props: {
                        row: params.row
                    }
                })
            },
            thead:[
                {
                    type:'expand',
                    width:60
                },
                {
                    column:'date',
                    name:'日期'
                },
                {
                    column:'name',
                    name:'姓名'
                },
                {
                    column:'address',
                    name:'地址'
                },
            ],
            data:[
                {
                    date: '2018-01-02',
                    name: '微笑',
                    address: '广州市'
                },
                {
                    date: '2018-01-02',
                    name: '微笑',
                    address: '广州市'
                },
                {
                    date: '2018-01-02',
                    name: '微笑',
                    address: '广州市'
                },
                {
                    date: '2018-01-02',
                    name: '微笑',
                    address: '广州市'
                }
            ]
        },
        table6:{
            thead:[
                {
                    column:'date',
                    name:'日期'
                },
                {
                    column:'name',
                    name:'姓名'
                },
                {
                    column:'operation',
                    name:'操作',
                    render:(h,params)=>{
                        return h('div',[
                            h('BaseButton',{
                                props:{
                                    type:'primary',
                                    icon:'trash-a'
                                },
                                style:{
                                    marginRight:'10px',
                                    backgroundColor:'ff9900'
                                },
                                on: {
                                    'on-click-btn': () => {
                                        alert('触发删除')
                                    }
                                }
                            },'删除'),
                            h('BaseButton',{
                                props:{
                                    type:'primary',
                                    icon:'edit'
                                },
                                style:{
                                    backgroundColor:'#19be6b'
                                },
                                on: {
                                    'on-click-btn': () => {
                                        alert('触发查看')
                                    }
                                }
                            },'查看'),
                        ])
                    }
                },
            ],
            data:[
                {
                    date: '2018-01-02',
                    name: '微笑'
                },
                {
                    date: '2018-01-02',
                    name: '微笑'
                },
                {
                    date: '2018-01-02',
                    name: '微笑'
                },
                {
                    date: '2018-01-02',
                    name: '微笑'
                }
            ]
        },
        table7:{
            thead:[
                {
                    column:'date',
                    name:'日期'                    
                },
                {
                    column:'daysAfter_1',
                    name:'次日留存数',
                    colorGrads:true
                },
                {
                    column:'daysAfter_7',
                    name:'一周后留存数',
                    colorGrads:true
                },
                {
                    column:'daysAfter_14',
                    name:'两周后留存数',
                    colorGrads:true
                },
                {
                    column:'daysAfter_30',
                    name:'一月后留存数',
                    colorGrads:true
                }
            ],
            data:[
                {
                    date: '2018-01-02',
                    daysAfter_1: 2400,
                    daysAfter_7: 1800,
                    daysAfter_14: 1200,
                    daysAfter_30: 600
                },
                {
                    date: '2018-01-03',
                    daysAfter_1: 2300,
                    daysAfter_7: 1700,
                    daysAfter_14: 1200,
                    daysAfter_30: 500
                },
                {
                    date: '2018-01-04',
                    daysAfter_1: 2200,
                    daysAfter_7: 1600,
                    daysAfter_14: 1100,
                    daysAfter_30: 400
                },
                {
                    date: '2018-01-05',
                    daysAfter_1: 2100,
                    daysAfter_7: 1500,
                    daysAfter_14: 1000,
                    daysAfter_30: 300
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
                    prop:'dataId',
                    description:'组件标识，当一个页面内有多个相同组件时需要',
                    type:'String',
                    option:'-',
                    default:'-'
                },
                {
                    prop:'type',
                    description:'类型',
                    type:'String',
                    option:'strip/zebra/bordered',
                    default:'-'
                },
                {
                    prop:'colorGrads',
                    description:'色彩栅格',
                    type:'String, Array, Boolean',
                    option:'-',
                    default:'false'
                },
                {
                    prop:'gradsRef',
                    description:'栅格参考值',
                    type:'Number',
                    option:'-',
                    default:'1'
                },
                {
                    prop:'tableFormatter',
                    description:'数据统一格式化函数，传参：当前值，当前键值对，当前键名',
                    type:'Function',
                    option:'-',
                    default:'-'
                },
                {
                    prop:'loading',
                    description:'加载状态',
                    type:'Boolean',
                    option:'-',
                    default:'false'
                },
                {
                    prop:'loadIcon',
                    description:'加载图标',
                    type:'String',
                    option:'-',
                    default:'loading'
                },
                {
                    prop:'scrollHeight',
                    description:'滚动高度',
                    type:'String,Number',
                    option:'-',
                    default:'-'
                },
                {
                    prop:'scrollPull',
                    description:'是否显示快速滚动条',
                    type:'Boolean',
                    option:'-',
                    default:'false'
                },
                {
                    prop:'pullIconTypes',
                    description:'快速滚动图标',
                    type:'Array',
                    option:'-',
                    default:`['icon-f-pullDown','icon-f-pullUp']`
                },
                {
                    prop:'header-show',
                    description:'显示表头',
                    type:'Boolean',
                    option:'-',
                    default:'true'
                },
                {
                    prop:'order',
                    description:'是否带序号',
                    type:'Boolean',
                    option:'-',
                    default:'false'
                },
                {
                    prop:'clickable',
                    description:'是否可点击',
                    type:'Boolean',
                    option:'-',
                    default:'false'
                },
                {
                    prop:'multiSelect',
                    description:'是否带多选',
                    type:'Boolean',
                    option:'-',
                    default:'false'
                },
                {
                    prop:'showSum',
                    description:'是否显示总结行',
                    type:'Boolean',
                    option:'-',
                    default:'false'
                },
                {
                    prop:'expand',
                    description:'展开某一行的渲染函数',
                    type:'Function',
                    option:'-',
                    default:'-'
                },
                {
                    prop:'expandedIndexs',
                    description:'展开行数组，当需要展开功能时必须',
                    type:'Array',
                    option:'-',
                    default:'[]'
                },
                {
                    prop:'multiSelectedIndexs',
                    description:'多选初始下标数组',
                    type:'Array',
                    option:'-',
                    default:'[]'
                },
                {
                    prop:'title',
                    description:'标题',
                    type:'String',
                    option:'-',
                    default:'-'
                },
                {
                    prop:'thead',
                    description:'表头数组',
                    type:'Array',
                    option:'-',
                    default:'[]'
                },
                {
                    prop:'data',
                    description:'列表数据',
                    type:'Array',
                    option:'-',
                    default:'[]'
                },
                {
                    prop:'sortType',
                    description:'排序类型',
                    type:'String',
                    option:'-',
                    default:'-'
                },
                {
                    prop:'sort',
                    description:'排序方式',
                    type:'String',
                    option:'-',
                    default:'desc'
                },
                {
                    prop:'sort',
                    description:'排序方式',
                    type:'String',
                    option:'-',
                    default:'desc'
                },
                {
                    prop:'border',
                    description:'边框',
                    type:'Number',
                    option:'-',
                    default:'0'
                },
                {
                    prop:'cellpadding',
                    description:'表格padding',
                    type:'Number',
                    option:'-',
                    default:'0'
                },
                {
                    prop:'cellspacing',
                    description:'表格spacing',
                    type:'Number',
                    option:'-',
                    default:'0'
                },
                {
                    prop:'selectAll',
                    description:'当有全选时，是否默认选中全部',
                    type:'Boolean',
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
                    name:'on-sorting',
                    description:'排序时触发',
                    props:'排序对应表头'
                },
                {
                    name:'on-click-row',
                    description:'点击某一行时触发',
                    props:'行数'
                },
                {
                    name:'on-expand-close',
                    description:'某一行收起时触发',
                    props:'行数'
                },
                {
                    name:'on-expand-open',
                    description:'某一行展开时触发',
                    props:'行数'
                },
                {
                    name:'on-check-all',
                    description:'全选时触发',
                    props:'选中下标数组'
                },
                {
                    name:'on-check-row',
                    description:'选中某一行时触发',
                    props:'选中下标数组'
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
                    name:'title',
                    description:'表标题',
                },
                {
                    name:'header',
                    description:'表头',
                },
                {
                    name:'footer',
                    description:'footer',
                },
                {
                    name:'body',
                    description:'表内容',
                },
                {
                    name:'tr',
                    description:'行',
                },
                {
                    name:'nodata',
                    description:'无数据内容',
                },
                {
                    name:'loading',
                    description:'loading内容',
                },
                {
                    name:'sum',
                    description:'总结内容',
                },
            ]
        },
    };
  },
  watch:{
      isLoading(val){
          this.table1.loading = val?true:false
      }
  },
  methods: {
    handleClick(index) {
        if(this.currentExpandShow.indexOf(index)>-1){
            this.currentExpandShow.splice(index,1)
        }else{
            this.currentExpandShow.push(index)
        }
    }
  },
  mounted() {}
};
</script>
<style lang="scss" scoped>
    .square-badge{
        width:36px;
        height:36px;
        background:#ccc;
        border-radius:4px;
    }
    .text-badge{
        display:inline-block;
        padding-right:5px;
    }
    .wrap{
        min-height:268.9px;
        position: relative;
    }
</style>
