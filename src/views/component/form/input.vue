<template>
    <div class="other">
        <div class="title1">
            Input 输入框
        </div>
        <div class="mItem">
            <div class="title2" id="title-1">
                基础用法：
            </div>
            <div class="wrap">
                <FormInput v-model="input1" placeholder="无限制，双向绑定输入"></FormInput>
                {{input1}}
                <br/>
                <br/>
                <FormInput v-model="input1" placeholder="设置固定宽度" :width="500"></FormInput>
                {{input1}}
                <br/>
                <br/>
                <FormInput v-model="input1" placeholder="最多输入10个字符" :width="300" :maxlength=10></FormInput>
                {{input1}}
                <br/>
                <br/>
                <FormInput v-model="input1" placeholder="只读" :width="300" readonly></FormInput>
                {{input1}}
                <div class="q-title">说明：</div>
                <div>
                    最简单的输入框，通过v-model绑定值，也可以用value属性传入默认值。
                    <br/>
                    可通过width属性传入宽度,默认为100%宽度。
                    <br/>
                    可通过maxlength属性传入宽度限制,默认无限制
                    <br/>
                    可通过readonly属性设置输入框为只读，不可输入
                </div>
                <div class="q-title">代码示例：</div>
                <DCode :code="code.base" lang="html"></DCode>
            </div>
            <div class="title2" id="title-2">
                类型（文本域）：
            </div>
            <div class="wrap">
                <FormInput v-model="input2.value" placeholder="这是个最普通的文本域" type="textarea"></FormInput>
                <br/>
                <br/>
                <FormInput v-model="input2.value" placeholder="设置了固定成长度的文本域" type="textarea" :width="500"></FormInput>
                <br/>
                <br/>
                <FormInput v-model="input2.value" placeholder="固定高度为5行的文本域" type="textarea" :width="300" :rows=5></FormInput>
                <br/>
                <br/>
                <FormInput v-model="input2.value" placeholder="根据内容自动扩展高度的文本域" type="textarea" :width="300" autosize></FormInput>
                <br/>
                <br/>
                <FormInput v-model="input2.value" placeholder="设置最小和最大行数的文本域" type="textarea" :width="300" :autosize="{minRows: 2, maxRows: 6}"></FormInput>
                <div class="q-title">说明：</div>
                <div>
                    设置type为textarea可设置为文本域，设置rows可设置行数，默认2行
                    <br/>
                    通过设置autosize属性让文本域自适应内容高度，可定制最小和最大行数
                </div>
                <div class="q-title">代码示例：</div>
                <DCode :code="code.type" lang="html"></DCode>
            </div>
            <div class="title2" id="title-3">
                禁用：
            </div>
            <div class="wrap">
                <FormInput v-model="input1" placeholder="请输入" :width="300" disabled></FormInput>
                <br/>
                <br/>
                <FormInput v-model="input1" placeholder="请输入" type="textarea" :width="300" disabled></FormInput>
                <div class="q-title">说明：</div>
                <div>
                    设置disabled设置禁用
                </div>
                <div class="q-title">代码示例：</div>
                <DCode :code="code.disabled" lang="html"></DCode>
            </div>
            <div class="title2" id="title-4">
                可清空：
            </div>
            <div class="wrap">
                <FormInput v-model="input1" placeholder="请输入" :width="300"  clearable></FormInput>
                <div class="q-title">说明：</div>
                <div>
                    设置clearable或清空输入
                </div>
                <div class="q-title">代码示例：</div>
                <DCode :code="code.clear" lang="html"></DCode>
            </div>
            <div class="title2" id="title-5">
                带图标：
            </div>
            <div class="wrap">
                <FormInput v-model="input1" placeholder="请输入" :width="300"  clearable pre-icon="search"></FormInput>
                <br/>
                <br/>
                <FormInput v-model="input1" placeholder="请输入" :width="300"  clearable>
                    <span slot="preIcon" class="custom-search">
                        <Icon slot="preIcon" type="search"></Icon>
                    </span>
                </FormInput>
                <br/>
                <br/>
                <FormInput v-model="input1" placeholder="请输入" :width="300" :aft-icon="'eye-disabled'"></FormInput>
                <br/>
                <br/>
                <FormInput v-model="input1" placeholder="请输入" :width="300"  clearable>
                    <span slot="aftIcon" class="custom-search">
                        <Icon slot="aftIcon" type="eye-disabled"></Icon>
                    </span>
                </FormInput>
                <br/>
                <br/>
                <FormInput v-model="input1" placeholder="请输入" :width="300" aft-icon="search"></FormInput>
                <br/>
                <br/>
                <FormInput v-model="input1" placeholder="请输入" :width="300" clear-icon="eye-disabled" clearable></FormInput>
                <br/>
                <br/>
                <div class="q-title">说明：</div>
                <div>
                    设置pre-icon和aft-icon可以设置输入框前后图标，也可slot自定义
                    设置clear-icon属性可以修改清除图标
                </div>
                <div class="q-title">代码示例：</div>
                <DCode :code="code.icon" lang="html"></DCode>
            </div>
            <div class="title2" id="title-6">
                尺寸：
            </div>
            <div class="wrap">
                <FormInput v-model="input1" placeholder="请输入" :width="300"  clearable :pre-icon="'search'" size="large"></FormInput>
                <br/>
                <br/>
                <FormInput v-model="input1" placeholder="请输入" :width="300"  clearable :pre-icon="'search'"></FormInput>
                <br/>
                <br/>
                <FormInput v-model="input1" placeholder="请输入" :width="300"  clearable :pre-icon="'search'" size="small"></FormInput>
                <br/>
                <br/>
                <div class="q-title">说明：</div>
                <div>
                    最简单的选框，通过v-model绑定值，也可以用value属性传入默认值
                </div>
                <div class="q-title">代码示例：</div>
                <DCode :code="code.size" lang="html"></DCode>
            </div>
            <div class="title2" id="title-7">
                复合式：
            </div>
            <div class="wrap">
                <FormInput v-model="input1" placeholder="请输入">
                    <span slot="prepend" class="custom-pre">http://</span>
                    <span slot="append" class="custom-append">.com</span>
                </FormInput>
                <div class="q-title">说明：</div>
                <div>
                    可自定义slot输入框前后元素
                </div>
                <div class="q-title">代码示例：</div>
                <DCode :code="code.fix" lang="html"></DCode>
            </div>
            <!-- <div class="title2">
                带搜索下拉：
            </div>
            <div class="wrap">
                <div class="q-title">说明：</div>
                <div>
                    最简单的选框，通过v-model绑定值，也可以用value属性传入默认值
                </div>
                <div class="q-title">代码示例：</div>
                <DCode :code="code.base" lang="html"></DCode>
            </div> -->
            <div class="title2" id="title-8">
                API：
            </div>
            <div class="wrap">
                <div class="q-title">Input【props】：</div>
                <Table type="bordered" :thead="api.thead" :data="api.data">
                </Table>
                <div class="q-title">Input【events】：</div>
                <Table type="bordered" :thead="event.thead" :data="event.data">
                </Table>
                <div class="q-title">Input【slot】</div>
                <Table type="bordered" :thead="slots.thead" :data="slots.data">
                </Table>
            </div>
        </div>
        <DMenu></DMenu>
    </div>
</template>

<script>
import Code from '../../../code/component/form/input';
export default {
  data() {
    return {
        code: Code,
        input1:'',
        input2:{
            value:''
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
                    option:'textarea/text',
                    default:'text'
                },
                {
                    prop:'size',
                    description:'大小',
                    type:'String',
                    option:'small/large/default',
                    default:'default'
                },
                {
                    prop:'value',
                    description:'输入值',
                    type:'String',
                    option:'-',
                    default:'-'
                },
                {
                    prop:'width',
                    description:'输入框宽度',
                    type:'String,Number',
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
                    prop:'maxlength',
                    description:'最大输入字符长度',
                    type:'Number',
                    option:'-',
                    default:'-'
                },
                {
                    prop:'disabled',
                    description:'禁用',
                    type:'Boolean',
                    option:'-',
                    default:'false'
                },
                {
                    prop:'clearable',
                    description:'是否可以清除',
                    type:'Boolean',
                    option:'-',
                    default:'false'
                },
                {
                    prop:'preIcon',
                    description:'左侧icon类型名',
                    type:'String',
                    option:'-',
                    default:'-'
                },
                {
                    prop:'aftIcon',
                    description:'右侧icon类型名',
                    type:'String',
                    option:'-',
                    default:'-'
                },
                {
                    prop:'clearIcon',
                    description:'清除icon类型名',
                    type:'String',
                    option:'-',
                    default:'ios-close'
                },
                {
                    prop:'autofocus',
                    description:'自动获取焦点，原生属性',
                    type:'Boolean',
                    option:'-',
                    default:'false'
                },
                {
                    prop:'autosize',
                    description:'自适应内容高度，仅在 textarea 类型下有效，可传入对象，如 { minRows: 2, maxRows: 6 }',
                    type:'Boolean，Object',
                    option:'-',
                    default:'false'
                },
                {
                    prop:'number',
                    description:'自动转换为数字，当需要输入的数据自动转换为数字时设置',
                    type:'Boolean',
                    option:'-',
                    default:'false'
                },
                {
                    prop:'rows',
                    description:'文本域默认行数，仅在 textarea 类型下有效',
                    type:'Number',
                    option:'-',
                    default:'2'
                },
                {
                    prop:'readonly',
                    description:'设置输入框为只读',
                    type:'Boolean',
                    option:'-',
                    default:'false'
                },
                {
                    prop:'autocomplete',
                    description:'原生的自动完成功能，可选值为 off 和 on',
                    type:'String',
                    option:'-',
                    default:'off'
                },
                {
                    prop:'spellcheck',
                    description:'原生的 spellcheck 属性',
                    type:'Boolean',
                    option:'-',
                    default:'false'
                },
                {
                    prop:'wrap',
                    description:'原生的 wrap 属性，可选值为 hard 和 soft，仅在 textarea 下生效',
                    type:'String',
                    option:'-',
                    default:'soft'
                },
                {
                    prop:'element-id',
                    description:'给表单元素设置id',
                    type:'String',
                    option:'-',
                    default:'-'
                },
                {
                    prop:'name',
                    description:'表单中字段名',
                    type:'String',
                    option:'-',
                    default:'-'
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
                    name:'on-change',
                    description:'输入改变时触发',
                    props:'事件'
                },
                {
                    name:'on-esc',
                    description:'按下esc键时触发',
                    props:'-'
                },
                {
                    name:'on-enter',
                    description:'按下回车键时触发',
                    props:'-'
                },
                {
                    name:'on-click',
                    description:'设置 icon 属性后，点击图标时触发',
                    props:'-'
                },
                {
                    name:'on-focus',
                    description:'输入框聚焦时触发',
                    props:'-'
                },
                {
                    name:'on-blur',
                    description:'输入框失去焦点时触发',
                    props:'-'
                },
                {
                    name:'on-keyup',
                    description:'原生的 keyup 事件',
                    props:'事件'
                },
                {
                    name:'on-keydown',
                    description:'原生的 keydown 事件',
                    props:'事件'
                },
                {
                    name:'on-keypress',
                    description:'原生的 keypress 事件',
                    props:'事件'
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
                    name:'prepend',
                    description:'前置内容',
                },
                {
                    name:'append',
                    description:'后置内容',
                },
                {
                    name:'preIcon',
                    description:'左侧icon内容',
                },
                {
                    name:'aftIcon',
                    description:'右侧icon内容',
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
.custom-search{
    line-height:1;
    i{
        font-size:18px;
        margin-top: 7px;
    }
}
.custom-pre-icon{
    display: inline-block;
    width: 30px;
    height: 32px;
    border-right: 1px solid #ccc;
    text-align: center;
    i{
        font-size:20px;
        margin-top: 6px;
    }
}
.custom-pre{
    color: #909399;
    vertical-align: middle;
    display: table-cell;
    position: relative;
    border-radius: 4px;
    padding: 0 20px;
    width: 1px;
    white-space: nowrap;
}
.custom-append{
    color: #909399;
    vertical-align: middle;
    display: table-cell;
    position: relative;
    border-radius: 4px;
    padding: 0 20px;
    width: 1px;
    white-space: nowrap;
    
}
</style>
