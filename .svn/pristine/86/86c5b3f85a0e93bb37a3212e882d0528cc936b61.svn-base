<template>
    <div class="other">
        <div class="title1">
            日期选择
        </div>
        <div class="mItem"> 
            <div class="title2" id="title-1">
                类型：
            </div>
            <div class="wrap">
                选择日期<br/>
                        <Date 
                        type="date" 
                        v-model="date1"
                        placeholder="选择单日" 
                        style="width: 224px" 
                        ></Date>{{date1}}
                <div class="q-title">说明：</div>
                <div>
                    通过设置type为date,表示单日选择，选择完即刻关闭选择框<br/>
                </div><br/>
                选择日期范围<br/>
                        <Date 
                        type="daterange" 
                        v-model="date2"
                        placement="left"
                        placeholder="选择日期范围" 
                        style="width: 224px" 
                        confirm
                        ></Date>{{date2}}
                <div class="q-title">说明：</div>
                <div>
                    设置type为dateRange,表示日期范围选择，需增加confirm属性用于提交选择<br/>
                </div><br/>
                选择年份<br/>
                        <Date 
                        type="year" 
                        v-model="date3"
                        placeholder="选择年份" 
                        style="width: 224px" 
                        ></Date>{{date3}}
                <div class="q-title">说明：</div>
                <div>
                    设置type为year,表示选择某个年份<br/>
                </div><br/>
                选择月份<br/>
                        <Date 
                        type="month" 
                        v-model="date4"
                        placement="left"
                        placeholder="选择月份" 
                        style="width: 224px" 
                        ></Date>{{date4}}
                <div class="q-title">说明：</div>
                <div>
                    设置type为month,表示选择某年某月<br/>
                </div>
                <br/>
                <div class="q-title">代码示例：</div>
                <DCode :code="code.type" lang="html"></DCode>
            </div>
            <div class="title2" id="title-21">
                只读和不可用：
            </div>
            <div class="wrap">
                <Row>
                    <Col span="12">
                        <Date 
                        type="date" 
                        v-model="date1"
                        readonly
                        placeholder="选择单日" 
                        style="width: 224px" 
                        ></Date>
                    </Col>
                    <Col span="12">
                        <Date 
                        type="date" 
                        v-model="date1"
                        disabled
                        placeholder="选择单日" 
                        style="width: 224px" 
                        ></Date>{{date1}}
                    </Col>
                </Row>
                <div class="q-title">说明：</div>
                <div>
                    设置readonly设置为只读，设置disabled设置为不可用
                </div>
                <div class="q-title">代码示例：</div>
                <DCode :code="code.read" lang="html"></DCode>
            </div>
            <div class="title2" id="title-3">
                日期格式：
            </div>
            <div class="wrap">
                <Row>
                    <Col span="12">
                        <Date 
                        type="date" 
                        v-model="date1"
                        format="yyyy/MM/dd"
                        placeholder="选择单日" 
                        style="width: 224px" 
                        ></Date>{{date1}}
                    </Col>
                    <Col span="12">
                        <Date 
                        type="daterange" 
                        v-model="date2"
                        placement="right"
                        format="yyyy年MM月dd"
                        placeholder="选择日期范围" 
                        style="width: 240px" 
                        confirm
                        ></Date>{{date2}}
                    </Col>
                </Row>
                <div class="q-title">说明：</div>
                <div>
                    设置format属性可格式化日期连接符
                </div>
                <div class="q-title">代码示例：</div>
                <DCode :code="code.format" lang="html"></DCode>
            </div>
            <div class="title2" id="title-4">
                对齐方式：
            </div>
            <div class="wrap">
                <Row>
                    <Col span="12">
                        <Date 
                        type="date" 
                        v-model="date1"
                        placeholder="选择单日" 
                        style="width: 224px" 
                        ></Date>
                    </Col>
                    <Col span="12">
                        <Date 
                        type="daterange" 
                        v-model="date2"
                        placement="right"
                        placeholder="选择日期范围" 
                        style="width: 224px" 
                        confirm
                        ></Date>
                    </Col>
                </Row>
                <Row>
                    <Col span="12">
                        <Date 
                        type="date" 
                        v-model="date1"
                        placement="top-start"
                        placeholder="选择单日" 
                        style="width: 224px" 
                        ></Date>
                    </Col>
                    <Col span="12">
                        <Date 
                        type="daterange" 
                        v-model="date2"
                        placement="top-end"
                        placeholder="选择日期范围" 
                        style="width: 224px" 
                        confirm
                        ></Date>
                    </Col>
                </Row>
                <div class="q-title">说明：</div>
                <div>
                    设置placement属性可设置对齐方式，默认左对齐
                </div>
                <div class="q-title">代码示例：</div>
                <DCode :code="code.align" lang="html"></DCode>
            </div>
            <div class="title2" id="title-5">
                快捷选项：
            </div>
            <div class="wrap">
                <Date 
                        type="daterange" 
                        v-model="date2"
                        :options="options"
                        placeholder="选择日期范围" 
                        style="width: 224px" 
                        confirm
                        ></Date>{{date2}}
                <div class="q-title">说明：</div>
                <div>
                    设置options属性可设置快捷选项,如以下格式：
                <DCode :code="code.option_example" lang="html"></DCode>
                </div>
                <div class="q-title">代码示例：</div>
                <DCode :code="code.option" lang="html"></DCode>
            </div>
            <div class="title2" id="title-6">
                日期范围选择类型（按日或者按月）：
            </div>
            <div class="wrap">
                <Date 
                type="daterange" 
                placeholder="Select date" 
                style="width: 224px" 
                placement="left"
                :value="date5.cur"
                :options="date5.options"
                confirm
                piker-type
                show-time
                show-tip
                :max-range-day=366
                :max-range-month=12
                @on-change="handleDateChange"
                ></Date>
                {{date5.cur}}
                <div class="q-title">说明：</div>
                <div>
                    设置piker-type属性可设置日期范围选择类型，按日期或按自然月<br/>
                    在options中设置disabledDate可设置日期选择范围
                </div>
                <div class="q-title">代码示例：</div>
                <DCode :code="code.piker" lang="html"></DCode>
            </div>
            <div class="title2" id="title-6">
                对比时间：
            </div>
            <div class="wrap">
                <div>时间段对比：</div>
                     <Date 
                    type="daterange" 
                    placeholder="Select date" 
                    style="width: 224px" 
                    placement="left"
                    :value="date5.cur"
                    :options="date5.options"
                    confirm
                    piker-type
                    compare
                    show-time
                    show-tip
                    :max-range-day=366
                    :max-range-month=12
                    @on-change="handleDateChange"
                    ></Date>{{date5.cur}}
                    <br/>
                    <br/>
                <div>单个日期对比：</div>
                     <Date 
                    type="daterange" 
                    placeholder="Select date" 
                    style="width: 224px" 
                    placement="left"
                    :value="date5.cur"
                    :options="date5.options"
                    confirm
                    single-date
                    piker-type
                    compare
                    show-time
                    show-tip
                    :max-range-day=366
                    :max-range-month=12
                    @on-change="handleDateChange"
                    ></Date>
                    {{date5.cur}}
                <div class="q-title">说明：</div>
                <div>
                    设置compare属性可以增加对比时间
                </div>
                <div class="q-title">代码示例：</div>
                <DCode :code="code.piker" lang="html"></DCode>
            </div>
            <div class="title2" id="title-7">
                API：
            </div>
            <div class="wrap">
                <div class="q-title">Date【props】：</div>
                <Table type="bordered" :thead="api.thead" :data="api.data">
                </Table>
                <div class="q-title">Date【events】：</div>
                <Table type="bordered" :thead="event.thead" :data="event.data">
                </Table>
            </div>
        </div>
        <DMenu></DMenu>
    </div>
</template>

<script>
import moment from 'moment/moment'
import Code from '../../../code/component/form/date'
export default {
  name: 'vDate',
  data () {
    return {
        code: Code,
        date1:'2018-5-17',
        date2:['2018-5-16','2018-5-17'],
        date3:'',
        date4:'',
        options:{
            shortcuts:[
                {
                    text: '今日',
                    value () {
                        const end = new Date();
                        const start = new Date();
                        return [start, end];
                    },
                    onClick: (picker) => {
                    }
                },
                {
                    text: '昨日',
                    value () {
                        const end = new Date();
                        const start = new Date();
                        start.setTime(start.getTime() - 3600 * 1000 * 24 * 1);
                        end.setTime(end.getTime() - 3600 * 1000 * 24 * 1);
                        return [start, end];
                    },
                    onClick: (picker) => {
                    }
                },
                {
                    text: '最近一周',
                    value () {
                        const end = new Date();
                        const start = new Date();
                        start.setTime(start.getTime() - 3600 * 1000 * 24 * 6);
                        return [start, end];
                    },
                    onClick: (picker) => {
                    }
                },
                {
                    text: '最近一个月',
                    value () {
                        const end = new Date();
                        const start = new Date();
                        start.setTime(start.getTime() - 3600 * 1000 * 24 * 29);
                        return [start, end];
                    }
                },
                {
                    text: '最近3个月',
                    value () {
                        const end = new Date();
                        const start = new Date();
                        start.setTime(start.getTime() - 3600 * 1000 * 24 * 89);
                        return [start, end];
                    }
                },
                {
                    text: '最近半年',
                    value () {
                        const end = new Date();
                        const start = new Date();
                        start.setTime(start.getTime() - 3600 * 1000 * 24 * 182);
                        return [start, end];
                    }
                },
                {
                    text: '最近1年',
                    value () {
                        const end = new Date();
                        const start = new Date();
                        start.setTime(start.getTime() - 3600 * 1000 * 24 * 365);
                        return [start, end];
                    }
                }
            ],
            disabledDate (date) {
                const minDate = new Date(2014,1,1);
                const maxDate = new Date();
                return date && ((date.getTime()<=minDate.getTime())||(date.getTime()>=maxDate.getTime()));
            }
        },
        date5:{
            // cur:['2018-4-28','2018-5-7'],
            cur:['2018-5-7','2018-5-7'],
            options:{
                shortcuts:[
                {
                    text: '今日',
                    value () {
                        const end = new Date();
                        const start = new Date();
                        return [start, end];
                    },
                    onClick: (picker) => {
                    }
                },
                {
                    text: '昨日',
                    value () {
                        const end = new Date();
                        const start = new Date();
                        start.setTime(start.getTime() - 3600 * 1000 * 24 * 1);
                        end.setTime(end.getTime() - 3600 * 1000 * 24 * 1);
                        return [start, end];
                    },
                    onClick: (picker) => {
                    }
                },
                {
                    text: '最近一周',
                    value () {
                        const end = new Date();
                        const start = new Date();
                        start.setTime(start.getTime() - 3600 * 1000 * 24 * 6);
                        return [start, end];
                    },
                    onClick: (picker) => {
                    }
                },
                {
                    text: '最近一个月',
                    value () {
                        const end = new Date();
                        const start = new Date();
                        start.setTime(start.getTime() - 3600 * 1000 * 24 * 29);
                        return [start, end];
                    }
                },
                {
                    text: '最近3个月',
                    value () {
                        const end = new Date();
                        const start = new Date();
                        start.setTime(start.getTime() - 3600 * 1000 * 24 * 89);
                        return [start, end];
                    }
                },
                {
                    text: '最近半年',
                    value () {
                        const end = new Date();
                        const start = new Date();
                        start.setTime(start.getTime() - 3600 * 1000 * 24 * 182);
                        return [start, end];
                    }
                },
                {
                    text: '最近1年',
                    value () {
                        const end = new Date();
                        const start = new Date();
                        start.setTime(start.getTime() - 3600 * 1000 * 24 * 365);
                        return [start, end];
                    }
                }
            
                ],
                disabledDate (date) {
                const minDate = new Date(2014,1,1);
                const maxDate = new Date();
                return date && ((date.getTime()<=minDate.getTime())||(date.getTime()>=maxDate.getTime()));
                }
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
                    type:'year,month,date,daterange',
                    option:'-',
                    default:'date'
                },
                {
                    prop:'value',
                    description:'日期',
                    type:'String',
                    option:'-',
                    default:''
                },
                {
                    prop:'showTime',
                    description:'是否显示选择时间',
                    type:'Boolean',
                    option:'-',
                    default:'false'
                },
                {
                    prop:'name',
                    description:'表单标志',
                    type:'String',
                    option:'-',
                    default:'-'
                },
                {
                    prop:'elementId',
                    description:'表单id',
                    type:'String',
                    option:'-',
                    default:'-'
                },
                {
                    prop:'placeholder',
                    description:'提示',
                    type:'String',
                    option:'-',
                    default:'-'
                },
                {
                    prop:'confirm',
                    description:'确定操作',
                    type:'Boolean',
                    option:'-',
                    default:'false'
                },
                {
                    prop:'compare',
                    description:'是否可对比',
                    type:'Boolean',
                    option:'-',
                    default:'false'
                },
                {
                    prop:'open',
                    description:'是否默认打开',
                    type:'Boolean',
                    option:'-',
                    default:'false'
                },
                {
                    prop:'fixTitle',
                    description:'固定的标题',
                    type:'String',
                    option:'-',
                    default:'-'
                },
                {
                    prop:'singleDate',
                    description:'type为daterange时是否只可选择单日期',
                    type:'Boolean',
                    option:'-',
                    default:'false'
                },
                {
                    prop:'format',
                    description:'格式化格式',
                    type:'String',
                    option:'yyyy连接符MM连接符dd',
                    default:'yyyy-MM-dd'
                },
                {
                    prop:'readonly',
                    description:'是否只读',
                    type:'Boolean',
                    option:'-',
                    default:'false'
                },
                {
                    prop:'disabled',
                    description:'是否不可用',
                    type:'Boolean',
                    option:'-',
                    default:'false'
                },
                {
                    prop:'pikerType',
                    description:'是否有日期范围选择模式区域，可切换选择日期范围或者月份范围',
                    type:'Boolean',
                    option:'-',
                    default:'false'
                },
                {
                    prop:'showTip',
                    description:'是否显示日期范围选择超出提示',
                    type:'Boolean',
                    option:'-',
                    default:'false'
                },
                {
                    prop:'min',
                    description:'可选择的最小日期，需要限制日期总选择范围时必填',
                    type:'Date',
                    option:'-',
                    default:'-'
                },
                {
                    prop:'max',
                    description:'可选择的最大日期，需要限制日期总选择范围时必填',
                    type:'Date',
                    option:'-',
                    default:'-'
                },
                {
                    prop:'maxRangeDay',
                    description:'一次可选择范围的天数',
                    type:'',
                    option:'-',
                    default:'-'
                },
                {
                    prop:'maxRangeMonth',
                    description:'一次可选择范围的月份数',
                    type:'',
                    option:'-',
                    default:'-'
                },
                {
                    prop:'showTime',
                    description:'日期范围选择时，显示选择时间',
                    type:'Boolean',
                    option:'-',
                    default:'true'
                },
                {
                    prop:'placement',
                    description:'对齐方式',
                    type:'String',
                    option:'top(相当于top-start),top-start,top-end,bottom(相当于bottom-start或者left),bottom-start.bottom-end,left,right',
                    default:'true'
                },
                {
                    prop:'icon',
                    description:'下拉图标',
                    type:'String',
                    option:'-',
                    default:'calendar'
                },
                {
                    prop:'right',
                    description:'固定下拉的right位移',
                    type:'String',
                    option:'-',
                    default:'-'
                },
                {
                    prop:'options',
                    description:'日期选项，快捷选项和不可选择日期项',
                    type:'Object',
                    option:`-`,
                    default:'-'
                },
                {
                    prop:'leftYearIcon',
                    description:'指向上一年图标',
                    type:'String',
                    option:'-',
                    default:'arrow-left'
                },
                {
                    prop:'leftIcon',
                    description:'向左翻图标',
                    type:'String',
                    option:'-',
                    default:'arrow-left'
                },
                {
                    prop:'rightYearIcon',
                    description:'指向下一年图标',
                    type:'String',
                    option:'-',
                    default:'arrow-right'
                },
                {
                    prop:'rightIcon',
                    description:'向右翻图标',
                    type:'String',
                    option:'-',
                    default:'arrow-right'
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
                    description:'改变选择日期时触发',
                    props:'日期值'
                },
                // {
                //     name:'on-clear',
                //     description:'切换日期时触发',
                //     props:'-'
                // },
                {
                    name:'on-ok',
                    description:'选择好日期后触发',
                    props:'-'
                },
                {
                    name:'on-open-change',
                    description:'打开关闭日期时触发',
                    props:'true(打开）/false（关闭）'
                }
            ]
        },
    }
  },
  components: {
  },
  watch: {
  },
  methods: {
      handleDateChange(item){
          this.date5.cur = item;
      }
  },
  mounted () {}
}
</script>
