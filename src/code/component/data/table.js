let code = {}

code.base = `
    <template>
        <Table :thead="table1.thead" :data="table1.data">
        </Table>
    </template>
    export default {
        data() {
            return {
                table1:{
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
                }
            };
        }
    };
`

code.type = `
    <template>
        <Table :thead="table1.thead" :data="table1.data" type="strip">
        </Table>
        <br/>
        <Table :thead="table1.thead" :data="table1.data" type="zebra">
        </Table>
        <br/>
        <Table :thead="table1.thead" :data="table1.data" type="bordered">
        </Table>
    </template>
    export default {
        data() {
            return {
                table1:{
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
                }
            };
        }
    };
`
code.loading = `
    <template>
        <Table :loading="table1.loading" :thead="table1.thead" :data="table1.data">
        </Table>
    </template>
    export default {
        data() {
            return {
                table1:{
                    loading:true,
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
                }
            };
        }
    };
`
code.base = `
    <template>
        <Table :loading="table1.loading" :thead="table1.thead" :data="table1.data">
        </Table>
    </template>
    export default {
        data() {
            return {
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
                }
            };
        }
    };
`

code.order = `
    <template>
        <Table :thead="table2.thead" :data="table2.data" order type="bordered">
        </Table>
    </template>
    export default {
        data() {
            return {
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
                }
            };
        }
    };
`
code.title = `
    <template>
        <Table :thead="table1.thead" :data="table1.data" title="我是标题">
        </Table>
    </template>
    export default {
        data() {
            return {
                table1:{
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
                }
            };
        }
    };
`
code.sort = `
    <template>
        <Table :thead="table3.thead" :data="table3.data" type="bordered" sortType="date">
        </Table>
    </template>
    export default {
        data() {
            return {
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
            };
        }
    };
`
code.radio = `
    <template>
        <Table :thead="table1.thead" :data="table1.data" clickable type="bordered">
        </Table>
    </template>
    export default {
        data() {
            return {
                table1:{
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
                }
            };
        }
    };
`
code.multi = `
    <template>
        <Table :thead="table4.thead" :data="table4.data" multi-select type="bordered">
        </Table>
    </template>
    export default {
        data() {
            return {
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
            };
        }
    };
`
code.customCol = `
    <template>
        <Table :thead="table6.thead" :data="table6.data">
        </Table>
    </template>
    export default {
        data() {
            return {
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
                }
            };
        }
    };
`
code.customRow = `
    <template>
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
    </template>
    export default {
        data() {
            return {
                table1:{
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
                }
            };
        }
    };
`
code.open = `
    <style scoped>
    .expand-row{
        text-align:center;
    }
    </style>
    <template>
    <div class="expand-row">
        我是展开的内容
    </div>
    </template>
    <script>
    export default {
        props: {
            row: Object
        }
    };
    </script>
    import expandRow from './table-expand.vue';
    <template>
        <Table :thead="table5.thead" :data="table5.data" :expand="table5.expandRender" type="zebra">
        </Table>
    </template>
    export default {
        data() {
            return {
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
            };
        }
    };
`
code.fix = `
    <template>
        <Table :thead="table1.thead" :data="table1.data" title="我是标题" type="zebra" height="160">
        </Table>
    </template>
    export default {
        data() {
            return {
                table1:{
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
                }
            };
        }
    };
`
code.colorGrads = `
    <template>
        <Table :thead="table7.thead" :data="table7.data" :colorGrads="['#ff9900']" gradsRef="3000">
        </Table>
    </template>
    export default {
        data() {
            return {
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
                }
            };
        }
    };
`
export default code
