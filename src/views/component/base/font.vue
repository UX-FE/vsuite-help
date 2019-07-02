<template>
    <div class="other">
        <div class="title1">
            Font 字体
        </div>
        <div class="mItem">
            <div class="title2" id="title-1">
                概述：
            </div>
            <div class="wrap">
                <div>
                   vsuite的默认主题字体参照云涛v2.6.0设计，访问：<a href="https://ux.21cn.com">云涛</a>
                </div>
                <br/>
            </div>
            <div class="title2" id="title-2">
                字体：
            </div>
            <div class="wrap font-wrap">
                <div v-for="(item,index) in font" :key="index" class="font-item" >
                    <div class="font-name">{{item.name}}</div>
                    <div class="font-box">
                        <div class="font-example" :style="{fontFamily:item.value}">{{item.example}}</div>
                        <div class="font-value">{{item.value}}</div>
                        
                    </div>
                </div>
            </div>
            <div class="tip">
                font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto,"Helvetica Neue", Helvetica, "PingFang SC", "Hiragino Sans GB", "Microsoft YaHei",SimSun, sans-serif;
            </div>
            <br/>
            <div class="title2" id="title-3">
                字体大小及用处：
            </div>
            <div class="wrap font-usage-wrap">
                <div v-for="(item,index) in fontUsage" :key="index" class="font-usage-item" >
                    <span class="title">{{item.title}}</span>
                    <span class="example center" :style="{fontSize:item.value}">{{item.value}}</span>
                    <span class="example" :style="{fontSize:item.value}">{{item.example}}</span>
                </div>
            </div>
        </div>
        <DMenu></DMenu>
    </div>
</template>

<script>
import Code from '../../../code/component/base/icon';
export default {
  data() {
    return {
        code: Code,
        font:[
            {
                name:'中文',
                value:'Pingfang SC',
                example:'雀'
            },
            {
                name:'英文',
                value:'SF UI Text ',
                example:'Aa'
            },
            {
                name:'数字',
                value:'Helvetica Neue',
                example:'123'
            },
            {
                name:'代码',
                value:'Consolas',
                example:'Aa'
            },
        ],
        fontUsage:[
            {
                title:'信息概况结论',
                value:'30px',
                example:'我是字体 ABCDEFGH 0123456789'
            },
            {
                title:'信息概况数据',
                value:'24px',
                example:'我是字体 ABCDEFGH 0123456789'
            },
            {
                title:'一级标题',
                value:'20px',
                example:'我是字体 ABCDEFGH 0123456789'
            },
            {
                title:'二级标题',
                value:'16px',
                example:'我是字体 ABCDEFGH 0123456789'
            },
            {
                title:'正文',
                value:'14px',
                example:'我是字体 ABCDEFGH 0123456789'
            },
            {
                title:'辅助描述',
                value:'12px',
                example:'我是字体 ABCDEFGH 0123456789'
            },

        ]

    };
  },
  methods: {
  },
  mounted() {}
};
</script>
<style lang="scss">
.mItem{
    overflow: hidden;
}
.font{
    &-wrap{
        overflow: hidden;
        margin-bottom:20px;
    }
    &-item{
        margin-right:48px;
        float: left;
    }
    &-box{
        background: #FFFFFF;
        border: 1px solid #CED4D9;
        -webkit-border-radius: 4px;
        -ms-border-radius: 4px;
        -o-border-radius: 4px;
        border-radius: 4px;
        color:#fff;
        padding:12px 20px;
        width:140px;
        height:140px;
        text-align: center;
    }
    &-name{
        font-family: PingFangSC-Medium;
        font-size: 14px;
        color: rgba(0,0,0,0.65);
        margin-bottom:8px;
    }
    &-example{
        color: rgba(0,0,0,0.85);
       font-size: 46px; 
        line-height: 46px;
       width:100px;
       border-bottom:1px solid #EBEDF0;
       padding:20px 0;
    }
    &-value{
        font-size: 14px;
        color: rgba(0,0,0,0.65);
        padding:9px 0 0 0;
    }
    &-usage{
        &-item{
            margin-bottom:12px;
            .title{
                display: inline-block;
                width:110px;
                font-size: 12px;
                color: rgba(0,0,0,0.45);
            }
            .example{
                display: inline-block;
                width:476px;
                &.center{
                    width:281px;
                }
            }
        }
        
    }
}
</style>
