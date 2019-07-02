let code = {}

code.base = `
    <template>
        <Chart :chart="trendChart" class="chart-trend">
            <ChartHigh slot="chart"
            :id="trendChart.id" 
            :chart="trendChart"
            :names="trendChart.names"
            :y-axis-unit="trendChart.yUnits"
            ></ChartHigh>
        </Chart>
    </template>
    <script>
    import Chart from '../../_custom/chart/Chart.vue'
    import ChartHigh from '../../_custom/chart/high';
    export default {
        data() {
            return {
                trendChart:{
                    id:'J_keyData_trendChart',
                    status:'hasData',
                    data:{
                        "result": {
                            "data": [ [32, 26, 33, 18, 34, 36, 37, 27, 33, 31, 26, 46, 36, 37, 37, 39, 41, 32, 41, 35, 35, 43, 42, 42, 44, 49, 41, 49, 44, 36]],
                            "label": [[ "2018-03-25", "2018-03-26", "2018-03-27", "2018-03-28", "2018-03-29", "2018-03-30", "2018-03-31", "2018-04-01", "2018-04-02", "2018-04-03", "2018-04-04", "2018-04-05", "2018-04-06", "2018-04-07", "2018-04-08", "2018-04-09", "2018-04-10", "2018-04-11", "2018-04-12", "2018-04-13", "2018-04-14", "2018-04-15", "2018-04-16", "2018-04-17", "2018-04-18", "2018-04-19", "2018-04-20", "2018-04-21", "2018-04-22", "2018-04-23"]]
                        },
                        "code": 0,
                        "msg": "成功"
                    },
                    names:["新增用户"],
                    yUnits:["人"],
                    granularity:'day',
                },
            }
        },
        components:{
            'Chart': Chart,
            'ChartHigh': ChartHigh,
        },
        methods: {
        },
        mounted() {}
    };
    </script>
`

code.type = `
    <template>
        <Chart :chart="trendChartForLine" class="chart-trend">
            <ChartHigh slot="chart"
            type="line"
            :id="trendChartForLine.id" 
            :chart="trendChartForLine"
            :names="trendChartForLine.names"
            :y-axis-unit="trendChartForLine.yUnits"
            ></ChartHigh>
        </Chart>
        <Chart :chart="columnChartForActiveUserPerMonth" class="chart-trend">
            <ChartHigh slot="chart"
            :id="columnChartForActiveUserPerMonth.id"
            type="column" 
            x-type="category"
            :chart="columnChartForActiveUserPerMonth"
            :names="columnChartForActiveUserPerMonth.names"
            :y-axis-unit="columnChartForActiveUserPerMonth.yUnits"
            ></ChartHigh>
        </Chart>
    </template>
    <script>
    import Chart from '../../_custom/chart/Chart.vue'
    import ChartHigh from '../../_custom/chart/high';
    export default {
        data() {
            return {
                trendChartForLine:{
                    id:'J_trendChartForLine',
                    status:'hasData',
                    data:{
                        "result": {
                        "data": [
                            [ 0, 0, 0, 0, 0, 0, 150, 67, 234, 0, 0, 24, 0, 0, 0, 0, 0, 0, 0, 21, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
                            [ 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0,150, 67, 234, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
                            [ 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 150, 67, 234, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
                            [ 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 150, 67, 234, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
                            [ 0, 0, 0, 150, 67, 234, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]
                        ],
                        "label": [["2018-03-09", "2018-03-10", "2018-03-11", "2018-03-12", "2018-03-13", "2018-03-14", "2018-03-15", "2018-03-16", "2018-03-17", "2018-03-18", "2018-03-19", "2018-03-20", "2018-03-21", "2018-03-22", "2018-03-23", "2018-03-24", "2018-03-25", "2018-03-26", "2018-03-27", "2018-03-28", "2018-03-29", "2018-03-30", "2018-03-31", "2018-04-01", "2018-04-02", "2018-04-03", "2018-04-04", "2018-04-05", "2018-04-06", "2018-04-07"]]
                        },
                        "code": 0,
                        "msg": "成功"
                    },
                    names:['v1.0.0','v1.1.0','v1.2.0','v1.3.0','v1.4.0',],
                    yUnits:["人"],
                },
                columnChartForActiveUserPerMonth:{
                    title:'月活跃用户数比较',
                    id:'J_userReport_columnChartForActiveUserPerMonth',
                    status:'hasData',
                    data:{
                        "result": {
                            "data": [
                            [1656, 1903, 1833, 1900, 1910, 1118]
                            ],
                            "label": [["10月", "11月", "12月", "1月", "2月", "3月"]],
                            "average": "1"
                        },
                        "code": "0",
                        "msg": "success"
                    },
                    names:['月活跃用户数'],
                    yUnits:['人'],
                    style:{},
                },
            }
        },
        components:{
            'Chart': Chart,
            'ChartHigh': ChartHigh,
        },
        methods: {
        },
        mounted() {}
    };
    </script>
`
code.aday = `
    <template>
        <Chart :chart="trendChartForOneDay" class="chart-trend">
            <ChartHigh slot="chart"
            :id="trendChartForOneDay.id" 
            :chart="trendChartForOneDay"
            :names="trendChartForOneDay.names"
            :y-axis-unit="trendChartForOneDay.yUnits"
            ></ChartHigh>
        </Chart>
        <Chart :chart="trendChartForLineForOneDay" class="chart-trend">
            <ChartHigh slot="chart"
            type="line"
            :id="trendChartForLineForOneDay.id" 
            :chart="trendChartForLineForOneDay"
            :names="trendChartForLineForOneDay.names"
            :y-axis-unit="trendChartForLineForOneDay.yUnits"
            ></ChartHigh>
        </Chart>
    </template>
    <script>
    import Chart from '../../_custom/chart/Chart.vue'
    import ChartHigh from '../../_custom/chart/high';
    export default {
        data() {
            return {
                trendChartForOneDay:{
                    id:'J_trendChart_foroneday',
                    status:'hasData',
                    data:{
                        "result": {
                        "data": [
                            [32]
                        ],
                        "label": [[
                            "2018-03-09"
                        ]],
                        },
                        "code": 0,
                        "msg": "成功"
                    },
                    style:{},
                    names:["崩溃次数"],
                    yUnits:["次"],
                },
                trendChartForLineForOneDay:{
                    id:'J_trendChartForLineForOneDay',
                    status:'hasData',
                    data:{
                        "result": {
                            "data": [
                            [ 10],
                            [ 20],
                            [ 57],
                            [ 36],
                            [ 78]
                            ],
                            "label": [["2018-03-09"]]
                        },
                        "code": 0,
                        "msg": "成功"
                    },
                    names:['v1.0.0','v1.1.0','v1.2.0','v1.3.0','v1.4.0',],
                    yUnits:["人"],
                },
            }
        },
        components:{
            'Chart': Chart,
            'ChartHigh': ChartHigh,
        },
        methods: {
        },
        mounted() {}
    };
    </script>
`
code.hour = `
    <template>
        <Chart :chart="trendChartForHour" class="chart-trend">
            <ChartHigh slot="chart"
            :id="trendChartForHour.id" 
            :chart="trendChartForHour"
            :names="trendChartForHour.names"
            :y-axis-unit="trendChartForHour.yUnits"
            :dateForHour="trendChartForHour.date"
            ></ChartHigh>
        </Chart>
        <Chart :chart="trendChartForHour1" class="chart-trend">
            <ChartHigh slot="chart"
            :id="trendChartForHour1.id" 
            :chart="trendChartForHour1"
            :names="trendChartForHour1.names"
            :y-axis-unit="trendChartForHour1.yUnits"
            :dateForHour="trendChartForHour1.hour"
            ></ChartHigh>
        </Chart>
    </template>
    <script>
    import Chart from '../../_custom/chart/Chart.vue'
    import ChartHigh from '../../_custom/chart/high';
    export default {
        data() {
            return {
                trendChartForHour:{
                    id:'J_trendChart_forhour',
                    status:'hasData',
                    data:{
                        code:0,
                        msg:'',
                        result:{
                        "data": [
                            [ 0, 3, 5, 2, 3, 1, 2, 4, 1, 0, "-", "-", "-", "-", "-", "-", "-", "-", "-", "-", "-", "-", "-", "-"],
                            [3, 2, 6, 0, 2, 1, 1, 2, 1, 1, 1, 2, 1, 2, 3, 3, 1, 2, 2, 2, 1, 2, 0, 3],
                            [3, 2, 2, 0, 2, 2, 1, 1, 1, 1, 1, 3, 2, 1, 3, 2, 5, 2, 0, 0, 1, 3, 1, 2],
                            [ 0, 1, 4, 0, 0, 1, 0, 1, 3, 0, 1, 0, 2, 1, 0, 1, 2, 1, 0, 1, 2, 3, 2, 0]
                        ],
                        "label": [["00:00", "01:00", "02:00", "03:00", "04:00", "05:00", "06:00", "07:00", "08:00", "09:00", "10:00", "11:00", "12:00", "13:00", "14:00", "15:00", "16:00", "17:00", "18:00", "19:00", "20:00", "21:00", "22:00", "23:00"]]
                        }
                    },
                    style:{},
                    names:['今日','昨天','7天前','30天前'],
                    units:['人','人','人','人'],
                    yUnits:['人'],
                    date:((new Date()).getFullYear()+'-'+((new Date()).getMonth()+1)+'-'+(new Date()).getDay()),
                },
                trendChartForHour1:{
                    id:'J_trendChart_forhour1',
                    status:'hasData',
                    data:{
                        code:0,
                        msg:'',
                        result:{
                        "data": [
                            [ 0, 3, 5, 2, 3, 1, 2, 4, 1, 0, "-", "-", "-", "-", "-", "-", "-", "-", "-", "-", "-", "-", "-", "-"],
                            [3, 2, 6, 0, 2, 1, 1, 2, 1, 1, 1, 2, 1, 2, 3, 3, 1, 2, 2, 2, 1, 2, 0, 3],
                            [3, 2, 2, 0, 2, 2, 1, 1, 1, 1, 1, 3, 2, 1, 3, 2, 5, 2, 0, 0, 1, 3, 1, 2],
                            [ 0, 1, 4, 0, 0, 1, 0, 1, 3, 0, 1, 0, 2, 1, 0, 1, 2, 1, 0, 1, 2, 3, 2, 0]
                        ],
                        "label": [["00:00", "01:00", "02:00", "03:00", "04:00", "05:00", "06:00", "07:00", "08:00", "09:00", "10:00", "11:00", "12:00", "13:00", "14:00", "15:00", "16:00", "17:00", "18:00", "19:00", "20:00", "21:00", "22:00", "23:00"]]
                        }
                    },
                    style:{},
                    names:['今日','昨天','7天前','30天前'],
                    units:['人','人','人','人'],
                    yUnits:['人'],
                    hour:true,
                },
            }
        },
        components:{
            'Chart': Chart,
            'ChartHigh': ChartHigh,
        },
        methods: {
        },
        mounted() {}
    };
    </script>
`
code.extra = `
    <template>
        <Chart :chart="trendChartForExtra" class="chart-trend">
            <ChartHigh slot="chart" 
            :id="trendChartForExtra.id" 
            :chart="trendChartForExtra"
            :render-indexs="trendChartForExtra.renderIndexs"
            :names="trendChartForExtra.names"
            :y-axis-unit="trendChartForExtra.yUnits"
            :tooltip-unit="trendChartForExtra.yUnits"
            :tooltip-format="trendChartForExtra.tooltipFormat"
            ></ChartHigh>
        </Chart>
    </template>
    <script>
    import Chart from '../../_custom/chart/Chart.vue'
    import ChartHigh from '../../_custom/chart/high';
    export default {
        data() {
            return {
                trendChartForExtra:{
                    id:'J_poverview_trendChart',
                    status:'hasData',
                    data:{
                        "result": {
                        "data": [
                            [0.23, 0.334, 0.0, 0.0, 0.0, 0.33, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0],
                            [ 0, 0, 23, 23, 423, 3, 3, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
                            [ 0, 0, 49, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]
                        ],
                        "label": [[
                            "2018-03-17", "2018-03-18", "2018-03-19", "2018-03-20", "2018-03-21", "2018-03-22", "2018-03-23", "2018-03-24", "2018-03-25", "2018-03-26", "2018-03-27", "2018-03-28", "2018-03-29", "2018-03-30", "2018-03-31", "2018-04-01", "2018-04-02", "2018-04-03", "2018-04-04", "2018-04-05", "2018-04-06", "2018-04-07", "2018-04-08", "2018-04-09", "2018-04-10", "2018-04-11", "2018-04-12", "2018-04-13", "2018-04-14", "2018-04-15"
                        ]],
                        "maxValue": 0.0
                        },
                        "code": 0,
                        "msg": "success"
                    },
                    style:{},
                    names:['错误率','错误次数','触发请求数'],
                    renderIndexs:[1,0,0],
                    yUnits:['%','次','次'],
                    tooltipFormat:function(chart,vm){
                        var title="";
                        var year = ((new Date(chart.x)).getFullYear());
                        var month = ((new Date(chart.x)).getMonth()+1);
                        var day = (new Date(chart.x)).getDate();
                        title =  year+"-"+((Number(month)<10)?("0"+month):month) + "-" + ((Number(day)<10)?("0"+day):day);
                        var htmlStr = '<div class="highchart-tooltip"><div class="highchart-head">' + title + '</div><table class="highchart-tooltip-table">';
                        for (var i = 0; i < vm.chart.data.result.data.length; i++) {
                        var trStr='';
                            if(i===0){
                            trStr = '<tr><td class="name"><span class="color-flag" style="background:' 
                            + chart.points[0].color 
                            + ';display:inline-block;width:7px;height:7px;margin:0 5px 1px 0;border-radius:50%;"></span><span>' 
                            + chart.points[0].series.name 
                            + '</span></td><td class="value"style="">' 
                            + ((!isNaN(chart.points[0].point.y)) ? (chart.points[0].point.y<1&&(vm.yAxisUnit[0]==='%'||(vm.tooltipUnit&&vm.tooltipUnit[0]==='%')))?Utils.formatNumByComma(chart.points[0].point.y*100, 2, 'auto'):Utils.formatNumByComma(chart.points[0].point.y, 2, 'auto') : "-") 
                            + ((vm.tooltipUnit)?vm.tooltipUnit[0]:'')+'</td></tr>';
                            }else{
                            trStr = '<tr><td class="name"><span class="color-flag" style="background:' 
                            + chart.points[0].color 
                            + ';display:inline-block;width:7px;height:7px;margin:0 5px 1px 0;border-radius:50%;"></span><span>' 
                            + vm.names[i] 
                            + '</span></td><td class="value"style="">' 
                            + ((!isNaN(vm.chart.data.result.data[i][chart.points[0].point.index])) ? (vm.chart.data.result.data[i][chart.points[0].point.index]<1&&(vm.yAxisUnit[i]==='%'||(vm.tooltipUnit&&vm.tooltipUnit[i]==='%')))?Utils.formatNumByComma((vm.chart.data.result.data[i][chart.points[0].point.index])*100, 2, 'auto'):Utils.formatNumByComma(vm.chart.data.result.data[i][chart.points[0].point.index], 2, 'auto') : "-") 
                            + ((vm.tooltipUnit)?vm.tooltipUnit[i]:'')+'</td></tr>';
                            }
                            htmlStr += trStr;
                        }
                        htmlStr += '</table></div>';
                        return htmlStr;
                    }
                },
            }
        },
        components:{
            'Chart': Chart,
            'ChartHigh': ChartHigh,
        },
        methods: {
        },
        mounted() {}
    };
    </script>
`
code.mark = `
    <template>
        <Chart :chart="columnChartForAvgActiveUsers1" class="chart-trend">
            <ChartHigh slot="chart"
            :id="columnChartForAvgActiveUsers1.id"
            x-type="category"
            :chart="columnChartForAvgActiveUsers1"
            :names="columnChartForAvgActiveUsers1.names"
            :y-axis-unit="columnChartForAvgActiveUsers1.yUnits"
            data-labels-enabled
            :xplot-lines="[{
                color: '#ed7574',
                dashStyle: 'dash',
                value: 2.5,
                text: '平均线',
                x:20,
            }]"
            ></ChartHigh>
        </Chart>
        <Chart :chart="columnChartForAvgActiveUsers" class="chart-trend">
            <ChartHigh slot="chart"
            :id="columnChartForAvgActiveUsers.id"
            type="column" 
            x-type="category"
            :chart="columnChartForAvgActiveUsers"
            :names="columnChartForAvgActiveUsers.names"
            :y-axis-unit="columnChartForAvgActiveUsers.yUnits"
            data-labels-enabled
            :yplot-lines="[{
                color: '#ed7574',
                dashStyle: 'dash',
                value: columnChartForAvgActiveUsers.data.result.average,
                text: '平均线'
            }]"
            ></ChartHigh>
        </Chart>
    </template>
    <script>
    import Chart from '../../_custom/chart/Chart.vue'
    import ChartHigh from '../../_custom/chart/high';
    export default {
        data() {
            return {
                columnChartForAvgActiveUsers1:{
                    title:'日均活跃用户数比较',
                    id:'J_userReport_columnChartForAvgActiveUsers1',
                    status:'hasData',
                    data:{
                        "result": {
                            "data": [
                            [130, 139, 123, 120, 122, 0]
                            
                            ],
                            "label": [["10月", "11月", "12月", "1月", "2月", "3月"]],
                            "average": 121
                        },
                        "code": "0",
                        "msg": "success"
                    },
                    names:['日均活跃用户数'],
                    yUnits:['人'],
                    style:{},
                },
                columnChartForAvgActiveUsers:{
                    title:'日均活跃用户数比较',
                    id:'J_userReport_columnChartForAvgActiveUsers',
                    status:'hasData',
                    data:{
                        "result": {
                            "data": [
                            [130, 139, 123, 120, 122, 0]
                            
                            ],
                            "label": [["10月", "11月", "12月", "1月", "2月", "3月"]],
                            "average": 121
                        },
                        "code": "0",
                        "msg": "success"
                    },
                    names:['日均活跃用户数'],
                    yUnits:['人'],
                    style:{},
                },
            }
        },
        components:{
            'Chart': Chart,
            'ChartHigh': ChartHigh,
        },
        methods: {
        },
        mounted() {}
    };
    </script>
`
code.twoy = `
    <template>
        <div class="q-title">柱形图双轴：</div>
        <Chart :chart="columnChartForProductLoss" class="chart-trend">
            <ChartHigh slot="chart"
            :id="columnChartForProductLoss.id"
            type="column" 
            x-type="category"
            :chart="columnChartForProductLoss"
            :y-axis-type="columnChartForProductLoss.yAxisType"
            :names="columnChartForProductLoss.names"
            :y-axis-unit="columnChartForProductLoss.yUnits"
            :tooltip-unit="columnChartForProductLoss.yUnits"
            :yaxis-titles = "[{
                color: '#FFD609',
                x: 75,
                y: 10,
                text: '老用户流失率'
            },{
                color: '#FFD609',
                x: -75,
                y: 10,
                text: '新用户流失率'
            }]"
            ></ChartHigh>
        </Chart>
        <div class="q-title">混合图双轴：</div>
        <Chart :chart="mixChartForNewUser" class="chart-trend">
            <ChartHigh slot="chart"
            :id="mixChartForNewUser.id" 
            :types="['column','line']" 
            :chart="mixChartForNewUser"
            :y-axis-type="mixChartForNewUser.yAxisType"
            :names="mixChartForNewUser.names"
            :y-axis-unit="mixChartForNewUser.yUnits"
            :tooltip-unit="mixChartForNewUser.yUnits"
            :yaxis-titles = "[{
                color: '#FFD609',
                x: 35,
                y: 10,
                text: '用户数'
            },{
                color: '#FFD609',
                x: -65,
                y: 10,
                text: '次日留存率'
            }]"
            stacking="normal"
            ></ChartHigh>
        </Chart>
        <Chart :chart="trendChartForActiveUser" class="chart-trend">
            <ChartHigh slot="chart"
            :id="trendChartForActiveUser.id" 
            :chart="trendChartForActiveUser"
            :names="trendChartForActiveUser.names"
            :types="['areaspline','areaspline','line']"
            :y-axis-type="trendChartForActiveUser.yAxisType"
            :y-axis-unit="trendChartForActiveUser.yUnits"
            :tooltip-unit="trendChartForActiveUser.units"
            :yaxis-titles = "[{
                color: '#FFD609',
                x: 35,
                y: 10,
                text: '用户数'
            },{
                color: '#FFD609',
                x: -35,
                y: 10,
                text: '活跃率'
            }]"
            ></ChartHigh>
        </Chart>
    </template>
    <script>
    import Chart from '../../_custom/chart/Chart.vue'
    import ChartHigh from '../../_custom/chart/high';
    export default {
        data() {
            return {
                columnChartForProductLoss:{
                    title:'产品流失情况',
                    id:'J_userReport_columnChartForProductLoss',
                    status:'hasData',
                    data:{
                        "result": {
                            "data": [
                            [0.10,0.20,0.34,0.55,0.33],
                                [0.34,0.56,0.34,0.78,0.44]
                            ],
                            "label": [["10月", "11月", "12月", "1月", "2月", "3月"]],
                            "average": "1"
                        },
                        "code": "0",
                        "msg": "success"
                    },
                    names:['老用户流失率','新用户流失率'],
                    yUnits:['%','%'],
                    yAxisType:[0,1],
                    style:{},
                },
                mixChartForNewUser:{
                    title:'新用户分析',
                    id:'J_userReport_mixChartForNewUser',
                    status:'hasData',
                    data:{
                        "result": {
                            "data": [
                                [ 35, 32, "30", "25", "19", "31", "29", "32", "31", "27", "32", "35", "21", "28", "39", "37", "35", "26", "31", "20", "34", "26", "36", "29", "32", "26", "33", "18", "34", "36", "37"],
                                [ 0.1143, 0.1562, "0.0333", "0.1200", "0.1579", "0.0645", "0.0345", "0.1250", "0.1290", "0.0741", "0.2188", "0.0286", "0.1429", "0.0714", "0.1026", "0.0541", "0.0286", "0.0000", "0.0968", "0.1000", "0.0294", "0.1154", "0.0278", "0.0690", "0.1250", "0.1154", "0.0606", "0.1111", "0.0588", "0.0278", "0.0541"]
                            ],
                            "label": [[ "2018-03-01", "2018-03-02", "2018-03-03", "2018-03-04", "2018-03-05", "2018-03-06", "2018-03-07", "2018-03-08", "2018-03-09", "2018-03-10", "2018-03-11", "2018-03-12", "2018-03-13", "2018-03-14", "2018-03-15", "2018-03-16", "2018-03-17", "2018-03-18", "2018-03-19", "2018-03-20", "2018-03-21", "2018-03-22", "2018-03-23", "2018-03-24", "2018-03-25", "2018-03-26", "2018-03-27", "2018-03-28", "2018-03-29", "2018-03-30", "2018-03-31"]]
                            },
                        "code": "0",
                        "msg": "success"
                    },
                    names:['新增用户','次日留存率'],
                    yUnits:['人','%'],
                    yAxisType:[0,1],
                    style:{},
                },
                trendChartForActiveUser:{
                    title:'活跃用户成分分析',
                    id:'J_userReport_trendChartForActiveUser',
                    status:'hasData',
                    data:{
                        code:0,
                        msg:'',
                        result:{
                            "ratio": "0.84",
                            "data": [
                            [ "35", "32", "30", "25", "19", "31", "29", "32", "31", "27", "32", "35", "21", "28", "39", "37", "35", "26", "31", "20", "34", "26", "36", "29", "32", "26", "33", "18", "34", "36", "37"],
                            [ "57", "62", "56", "55", "58", "64", "54", "57", "66", "62", "61", "66", "60", "65", "66", "67", "58", "54", "62", "60", "66", "56", "64", "64", "62", "60", "61", "64", "58", "63", "55"],
                            ["0.0011", "0.0012", "0.0011", "0.0010", "0.0010", "0.0012", "0.0010", "0.0011", "0.0012", "0.0011", "0.0011", "0.0012", "0.0010", "0.0011", "0.0013", "0.0013", "0.0011", "0.0010", "0.0011", "0.0010", "0.0012", "0.0010", "0.0012", "0.0011", "0.0012", "0.0011", "0.0012", "0.0010", "0.0011", "0.0012", "0.0011"]
                            ],
                            "label": [[ "2018-03-01", "2018-03-02", "2018-03-03", "2018-03-04", "2018-03-05", "2018-03-06", "2018-03-07", "2018-03-08", "2018-03-09", "2018-03-10", "2018-03-11", "2018-03-12", "2018-03-13", "2018-03-14", "2018-03-15", "2018-03-16", "2018-03-17", "2018-03-18", "2018-03-19", "2018-03-20", "2018-03-21", "2018-03-22", "2018-03-23", "2018-03-24", "2018-03-25", "2018-03-26", "2018-03-27", "2018-03-28", "2018-03-29", "2018-03-30", "2018-03-31"]]
                        }
                    },
                    names:['新增用户','老用户','活跃率'],
                    yUnits:['人','%'],
                    units:['人','人','%'],
                    yAxisType:[0,0,1],
                    style:{},
                },
            }
        },
        components:{
            'Chart': Chart,
            'ChartHigh': ChartHigh,
        },
        methods: {
        },
        mounted() {}
    };
    </script>
`
code.dump = `
    <template>
        <Chart :chart="columnChartForLoyal" class="chart-trend">
            <ChartHigh slot="chart"
            type="column" 
            x-type="category"
            :id="columnChartForLoyal.id" 
            :chart="columnChartForLoyal"
            data-labels-enabled
            :names="columnChartForLoyal.names"
            :y-axis-unit="columnChartForLoyal.yUnits"
            :tooltip-unit="columnChartForLoyal.yUnits"
            :sty="{dataLabelsColor:'#fff'}"
            stacking="normal"
            ></ChartHigh>
        </Chart>
    </template>
    <script>
    import Chart from '../../_custom/chart/Chart.vue'
    import ChartHigh from '../../_custom/chart/high';
    export default {
        data() {
            return {
                columnChartForLoyal:{
                    title:'用户忠诚度分析',
                    id:'J_userReport_columnChartForLoyal',
                    status:'hasData',
                    data:{
                        code:0,
                        msg:'',
                        result:{
                            "dieLoyalRatio": "0.4066",
                            "loyalRatio": 0.4396,
                            "data": [
                            [ "0.0378", "0.0362", "0.0463", "0.0392", "0.0250", "0.0330"],
                            [ "0.3643", "0.3623", "0.3025", "0.3020", "0.3083", "0.4066"]
                            ],
                            "label": [["10月", "11月", "12月", "1月", "2月", "3月"] ]
                        }
                    },
                    names:['轻度忠诚用户占比','重度忠诚用户占比'],
                    yUnits:['%','%'],
                    style:{},
    
                },
            }
        },
        components:{
            'Chart': Chart,
            'ChartHigh': ChartHigh,
        },
        methods: {
        },
        mounted() {}
    };
    </script>
`
code.bar = `
    <template>
        <Chart :chart="barChartForActiveUser" class="chart-trend">
            <ChartBar slot="chart" 
            :id="barChartForActiveUser.id"
            :names="barChartForActiveUser.names"
            :chart="barChartForActiveUser"></ChartBar>
        </Chart>
    </template>
    <script>
    import Chart from '../../_custom/chart/Chart.vue'
    import ChartBar from '../../_custom/chart/bar'
    export default {
        data() {
            return {
                barChartForActiveUser:{
                    title:'用户活跃地图',
                    id:'J_userReport_barChartForActiveUser',
                    status:'hasData',
                    data:{
                        code:0,
                        msg:'',
                        result:{
                                "max": "186",
                            "data": [
                            [334, 332, 545, 12,34, 554, 123]
                            ],
                            "label": [["广东", "浙江", "北京", "江苏", "江西", "湖南", "台湾"]]
                        }
                    },
                    names:['用户活跃率'],
                    yUnits:['%'],
                    style:{},
                },
            }
        },
        components:{
            'Chart': Chart,
            'ChartBar': ChartBar,
        },
        methods: {
        },
        mounted() {}
    };
    </script>
`
code.bubble = `
    <template>
        <Chart :chart="bubbleChart" class="chart-trend">
            <ChartBubble slot="chart" 
            :id="bubbleChart.id"
            :names="['demo1','demo2','demo3','demo4','demo5',]"
            :chart="bubbleChart"></ChartBubble>
        </Chart>
    </template>
    <script>
    import Chart from '../../_custom/chart/Chart.vue'
    import ChartBubble from '../../_custom/chart/bubble.vue'
    export default {
        data() {
            return {
                bubbleChart:{
                    id:'J_realTime_bubbleChart',
                    status:'hasData',
                    data:{
                        code:0,
                        msg:'',
                        result:{
                            "data":[0.6,0.2,0.15,0.05,0.05],
                            "label":[["GenymotionNexus 11", "GreeG0215D", "HUAWEIHUAWEI G750-T01", "HUAWEIKNT-AL20", "LeMobileLe X620"]]
                        }
                    },
                    style:{},
                },
            }
        },
        components:{
            'Chart': Chart,
            'ChartBubble': ChartBubble,
        },
        methods: {
        },
        mounted() {}
    };
    </script>
`
code.pie = `
    <template>
        <Chart :chart="pieChart" class="chart-trend">
            <ChartPie slot="chart" 
            :id="pieChart.id" 
            :names = "['demo1']"
            :chart="pieChart"
            ></ChartPie>
        </Chart>
    </template>
    <script>
    import Chart from '../../_custom/chart/Chart.vue'
    import ChartPie from '../../_custom/chart/pie.vue'
    export default {
        data() {
            return {
                pieChart:{
                    id:'J_realTime_pieChart',
                    status:'hasData',
                    data:{
                        code:0,
                        msg:'',
                        result:{
                            "data": [
                                ['2.3.4',   45.0],
                                ['2.1.4',       26.8],
                                ['4.3.5',    8.5],
                                ['2.4.2',     6.2],
                                ['2.2.2',     0.7],
                            ]
                        }
                    },
                    style:{},
                },
            }
        },
        components:{
            'Chart': Chart,
            'ChartPie': ChartPie,
        },
        methods: {
        },
        mounted() {}
    };
    </script>
`
code.boxplot = `
    <template>
        <Chart :chart="boxplotChart" class="chart-trend">
            <ChartBoxplot slot="chart" 
            :id="boxplotChart.id"
            :chart="boxplotChart"></ChartBoxplot>
        </Chart>
    </template>
    <script>
    import Chart from '../../_custom/chart/Chart.vue'
    import ChartBoxplot from '../../_custom/chart/boxplot.vue'
    export default {
        data() {
            return {
                boxplotChart:{
                    id:'J_realTime_boxplotChart',
                    status:'hasData',
                    data:{
                        code:0,
                        msg:'',
                        result:{
                            "data":[12,25,60,100,120],
                        }
                    },
                    style:{},
                },
            }
        },
        components:{
            'Chart': Chart,
            'ChartBoxplot': ChartBoxplot,
        },
        methods: {
        },
        mounted() {}
    };
    </script>
`
code.style=`
    {
        backgroundColor:'#fff',//图表背景颜色
        height:319,//图表高度
        spacing:[20,0,0,0],//图表padding
        colors:[{//数据条的颜色，统一管理在color.js
            color:colors[0],
            gradient:gradient[0]//面积图的面积渐变色
        },{
            color:colors[1],
            gradient:gradient[1]
        },{
            color:colors[2],
            gradient:gradient[2]
        },{
            color:colors[3],
            gradient:gradient[3]
        },{
            color:colors[4],
            gradient:gradient[4]
        }],
        xAxisCrosshair:"rgba(0,0,0,0.65)",//鼠标hover时的十字准星线
        tooltipBackgroundColor:"rgba(0,0,0,0.75)",//提示框背景色
        tooltopBorderColor:"rgba(0,0,0,0.75)",//提示框边框色
        tooltipBorderRadius:2,//提示框边框弧度
        tooltipColor:"#FFFFFF",//提示框字体颜色
        tooltipFontSize:"14px",//提示框字体大小
        lineWidth:2,//线条宽度
        axisLineColor:"#E9E9E9",//轴颜色
        axisTickColor:"#E9E9E9",//tick 颜色
        xAxisTickLength:5,//x轴tick线条长度
        labelColor:"rgba(0,0,0,0.65)",//x/y轴标签颜色
        legendColor:"rgba(0,0,0,0.65)",//图例字体颜色
        legendLayout:"horizontal",//图例布局，水平还是垂直
        legendAlign:"center",//图例水平对齐方式
        legendVerticalAlign:"bottom",//图例垂直对齐方式
        ygridLineColor:"#E9E9E9",//y轴格子颜色
        ygridLineDashStyle:"Dash",//y轴格子线条类型
        legendHoverColor:"#a6b5bb",//图例hover颜色
        legendHidderColor:"#69739b",//图例隐藏颜色
        dataLabelsColor:"#3a7bff",//数据标签颜色
    }
`


export default code
