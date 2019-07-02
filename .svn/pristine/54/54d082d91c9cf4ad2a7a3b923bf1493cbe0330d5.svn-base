let code = {}

code.base = `
    <template>
        <TimeLine>
            <TimeLineItem v-for="(item,i) in timeline1" :key="i">
                <div>{{item}}</div>
            </TimeLineItem>
        </TimeLine>
        <br/>
        <TimeLine>
            <TimeLineItem v-for="(item,i) in timeline1" :key="i" :active="i===0">
                <div>{{item}}</div>
            </TimeLineItem>
        </TimeLine>
    </template>
    export default {
        data() {
            return {
                timeline1:[
                    '发布1.0版本',
                    '发布2.0版本',
                    '发布3.0版本',
                    '发布4.0版本'
                ],
            };
        }
    };
`

code.last = `
    <template>
        <TimeLine more>
            <TimeLineItem v-for="(item,i) in timeline2" :key="i">
                <div>{{item}}</div>
            </TimeLineItem>
        </TimeLine>
    </template>
    export default {
        data() {
            return {
                timeline2:[
                    '发布1.0版本',
                    '发布2.0版本',
                    '发布3.0版本',
                    '未完待续'
                ],
            };
        }
    };
`
code.custom = `
    <template>
        <div class="demo-year-left">
            <TimeLine>
                <TimeLineItem v-for="(item,i) in timeline3" :key="i">
                    <div class="time">
                        <span class="year" v-if="((i===0)||(i>0&&item.year!==timeline3[i-1].year))">{{item.year}}</span>
                        <span class="day">{{item.day}}</span>
                    </div>
                    <div class="content">
                        <div class="download-wrap">
                            <span class="version">版本号： {{item.version}}</span>
                            <a v-if="i===0" class="download" :href="item.download">下载</a>
                        </div>
                        <p v-for="(itm,index) in item.content" :key="index">{{index+1}}. {{itm}}</p>
                    </div>
                </TimeLineItem>
            </TimeLine>
        </div>
    </template>
    export default {
        data() {
            return {
                timeline3:[
                    {
                        year:'2017',
                        day:'11.22',
                        version:'v4.0',
                        download:'#',
                        content:[
                            '发布4.0版本',
                            '优化细节'
                        ]
                    },
                    {
                        year:'2017',
                        day:'10.22',
                        version:'v3.0',
                        content:[
                            '发布3.0版本',
                            '优化细节'
                        ]
                    },
                    {
                        year:'2017',
                        day:'09.22',
                        version:'v2.0',
                        content:[
                            '发布2.0版本',
                            '优化细节'
                        ]
                    },
                    {
                        year:'2017',
                        day:'08.22',
                        version:'v1.0',
                        content:[
                            '发布1.0版本',
                            '优化细节'
                        ]
                    }
                ]
            };
        }
    };
    <style lang="scss">
    .demo-year-left{
        .vsu-timeline{
            .vsu-timeline-item{
                padding: 0 0 12px 46px;
                .vsu-timeline-item-line{
                    left: 52px;
                }
                .vsu-timeline-item-content{
                    .time{
                        .year{
                            position: absolute;
                            left: -38px;
                        }
                        .day{
    
                        }
                    }
                    .download-wrap{
                        margin-bottom:16px;
                        .version{
                            font-size: 14px;
                            color: #1864FF;
                            text-align: left;
                            line-height: 22px;
                            margin-right: 16px;
                            display: inline-block;
                        }
                        .download{
                            width: 44px;
                            height: 22px;
                            display: inline-block;
                            font-size:12px;
                            text-align: center;
                            line-height: 22px;
                            cursor: pointer;
                            background: #1864FF;
                            border-radius: 4px;
                            color: #fff;
                            vertical-align: top;
                        }
                    }
                    .content{
                       padding:20px 24px;
                        p{
                            margin-bottom:16px;
                        }
                    }
                }
            }
        }
    }
    </style>
`
code.icon = `
    <template>
        <TimeLine>
            <TimeLineItem v-for="(item,i) in timeline1" :key="i">
                <Icon type="heart" slot="custom"></Icon>
                <div>{{item}}</div>
            </TimeLineItem>
        </TimeLine>
        <br/>
        <TimeLine>
            <TimeLineItem v-for="(item,i) in timeline3" :key="i">
                <div slot="custom">{{item.version}}</div>
                <div class="content">
                    <p v-for="(itm,index) in item.content" :key="index">{{index+1}}.{{itm}}</p>
                </div>
            </TimeLineItem>
        </TimeLine>
    </template>
    export default {
        data() {
            return {
                timeline1:[
                    '发布1.0版本',
                    '发布2.0版本',
                    '发布3.0版本',
                    '未完待续'
                ],
                timeline3:[
                    {
                        year:'2017',
                        day:'11.22',
                        version:'v4.0',
                        download:'#',
                        content:[
                            '发布4.0版本',
                            '优化细节'
                        ]
                    },
                    {
                        year:'2017',
                        day:'10.22',
                        version:'v3.0',
                        content:[
                            '发布3.0版本',
                            '优化细节'
                        ]
                    },
                    {
                        year:'2017',
                        day:'09.22',
                        version:'v2.0',
                        content:[
                            '发布2.0版本',
                            '优化细节'
                        ]
                    },
                    {
                        year:'2017',
                        day:'08.22',
                        version:'v1.0',
                        content:[
                            '发布1.0版本',
                            '优化细节'
                        ]
                    }
                ]
            };
        }
    };
    <style lang="scss">
    .custom{
        padding-left: 20px;
        .content{
            padding: 0 5px 10px 20px;
        }
    }
    </style>
`

export default code
