let code = {}

code.base = `
    <template>
        <Chart :chart="mapChart" class="chart-map">
            <ChartMap slot="chart"
            :id="mapChart.id" 
            :chart="mapChart"
            :names="mapChart.names"
            :y-axis-unit="mapChart.yUnits"
            ></ChartMap>
        </Chart>
    </template>
    <script>
    import Chart from '../../_custom/chart/Chart.vue'
    import ChartMap from '../../_custom/chart/map.vue'
    export default {
        data() {
            return {
                mapChart:{
                    id:'J_region_mapChart',
                    status:'hasData',
                    data:{
                        "result": {
                        "min": 1734.913,
                        "data": [{
                            "name": "广东",
                            "value": 58837
                        }, {
                            "name": "江苏",
                            "value": 44108.2173
                        }, {
                            "name": "浙江",
                            "value": 35386.7826
                        }, {
                            "name": "湖南",
                            "value": 33389.6956
                        }, {
                            "name": "四川",
                            "value": 29248.9565
                        }, {
                            "name": "山东",
                            "value": 27508.0869
                        }, {
                            "name": "北京",
                            "value": 27222.826
                        }, {
                            "name": "河北",
                            "value": 27148.7391
                        }, {
                            "name": "内蒙古",
                            "value": 25244.913
                        }, {
                            "name": "湖北",
                            "value": 24970.3043
                        }, {
                            "name": "上海",
                            "value": 22949.0434
                        }, {
                            "name": "河南",
                            "value": 22757.5652
                        }, {
                            "name": "江西",
                            "value": 21721.2173
                        }, {
                            "name": "陕西",
                            "value": 19892.826
                        }, {
                            "name": "福建",
                            "value": 18668.4782
                        }, {
                            "name": "安徽",
                            "value": 17583.6086
                        }, {
                            "name": "辽宁",
                            "value": 16719.3478
                        }, {
                            "name": "广西",
                            "value": 15298.7391
                        }, {
                            "name": "甘肃",
                            "value": 14678.4347
                        }, {
                            "name": "黑龙江",
                            "value": 13548.0434
                        }, {
                            "name": "山西",
                            "value": 11236.4782
                        }, {
                            "name": "新疆",
                            "value": 10990.5652
                        }, {
                            "name": "云南",
                            "value": 10087.4782
                        }, {
                            "name": "重庆",
                            "value": 9463.2608
                        }, {
                            "name": "贵州",
                            "value": 7747.7391
                        }, {
                            "name": "吉林",
                            "value": 7023.8695
                        }, {
                            "name": "海南",
                            "value": 5140.2608
                        }, {
                            "name": "宁夏",
                            "value": 4962.5652
                        }, {
                            "name": "天津",
                            "value": 3101.3043
                        }, {
                            "name": "青海",
                            "value": 2785.6521
                        }, {
                            "name": "西藏",
                            "value": 1734.913
                        }],
                        "max": 58837,
                        "title": "客户端平均日活"
                        },
                        "msg": "成功",
                        "code": 0
                    },
                    names:["新增用户"],
                    yUnits:["人"],
                },
            }
        },
        components:{
            'Chart': Chart,
            'ChartMap': ChartMap,
        },
        methods: {
        },
        mounted() {}
    };
    </script>
`



export default code
