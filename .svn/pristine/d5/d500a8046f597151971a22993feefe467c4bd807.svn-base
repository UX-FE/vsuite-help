let code = {}

code.base = `
    <template>
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
    </template>
    export default {
        data() {
            return {
                baseSelect:{
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
                            label:'香蕉'
                        },
                        {
                            value:'pineapple',
                            label:'菠萝'
                        }
                    ]
                },
                simple:{
                    value:10,
                    options:[10,20,30,40]
                },
            };
        }
    };
`

code.size = `
    <template>
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
    </template>
    export default {
        data() {
            return {
                baseSelect:{
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
                            label:'香蕉'
                        },
                        {
                            value:'pineapple',
                            label:'菠萝'
                        }
                    ]
                }
            };
        }
    };
`

code.arrow = `
    <template>
        <FormSelect v-model="baseSelect.value" placeholder="请选择" style="width:200px;" bubble>
            <FormOption v-for="(item,index) in baseSelect.options" :key="index" :option="item">
            </FormOption>
        </FormSelect>
    </template>
    export default {
        data() {
            return {
                baseSelect:{
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
                            label:'香蕉'
                        },
                        {
                            value:'pineapple',
                            label:'菠萝'
                        }
                    ]
                }
            };
        }
    };
`

code.disabledOpt = `
    <template>
        <FormSelect v-model="disabledOpt.value" placeholder="请选择" style="width:200px;">
            <FormOption v-for="(item,index) in disabledOpt.options" :key="index" :option="item" :disabled="item.disabled">
            </FormOption>
        </FormSelect>
    </template>
    export default {
        data() {
            return {
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
            };
        }
    };
`
code.disabled = `
    <template>
        <FormSelect v-model="baseSelect.value" placeholder="请选择" style="width:200px;" :disabled="true">
            <FormOption v-for="(item,index) in baseSelect.options" :key="index" :option="item">
            </FormOption>
        </FormSelect>
    </template>
    export default {
        data() {
            return {
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
            };
        }
    };
`
code.clearable = `
    <template>
        <FormSelect v-model="baseSelect.value" placeholder="请选择" style="width:200px;" clearable>
            <FormOption v-for="(item,index) in baseSelect.options" :key="index" :option="item">
            </FormOption>
        </FormSelect>
    </template>
    export default {
        data() {
            return {
                baseSelect:{
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
                            label:'香蕉'
                        },
                        {
                            value:'pineapple',
                            label:'菠萝'
                        }
                    ]
                }
            };
        }
    };
`
code.multiple = `
    <template>
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
            check-all
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
        </FormSelect>
    </template>
    export default {
        data() {
            return {
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
            };
        }
    };
`
code.align = `
    <template>
        <FormSelect v-model="multiselect.value" placeholder="请选择" style="width:200px;" type="multiple" align="left">
        <FormOption v-for="(item,index) in multiselect.options" :key="index" :option="item">
        </FormOption>
        </FormSelect> 
        <FormSelect v-model="multiselect.value" placeholder="请选择" style="width:200px;" type="multiple" align="right">
        <FormOption v-for="(item,index) in multiselect.options" :key="index" :option="item">
        </FormOption>
        </FormSelect> 
    </template>
    export default {
    data() {
        return {
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
        };
    }
};
`

code.custom = `
    <template>
        <FormSelect v-model="baseSelect.value" placeholder="请选择" style="width:200px;">
            <FormOption v-for="(item,index) in baseSelect.options" :key="index" :option="item">
                <Icon type="heart"></Icon>  {{item.label}}
            </FormOption>
        </FormSelect>
    </template>
    export default {
        data() {
            return {
                baseSelect:{
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
                            label:'香蕉'
                        },
                        {
                            value:'pineapple',
                            label:'菠萝'
                        }
                    ]
                }
            };
        }
    };
`

export default code
