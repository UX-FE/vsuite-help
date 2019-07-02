<template>
    <div class="other">
        <div class="title1">
            Color 色彩
        </div>
        <div class="mItem">
            <div class="title2" id="title-1">
                概述：
            </div>
            <div class="wrap">
                <div>
                   vsuite的默认主题色彩参照云涛v2.6.0设计，访问：<a href="https://ux.21cn.com">云涛</a>
                </div>
                <br/>
            </div>
            <div class="title2" id="title-2">
                主色调：
            </div>
            <div class="wrap color-wrap">
                <div v-for="(item,index) in primary" :key="index" class="color-item" :style="{backgroundColor:item.value}">
                    <div class="color-name">{{item.name}}</div>
                    <div class="color-value">{{item.value}}</div>
                </div>
            </div>
            <div class="title2" id="title-3">
                辅助色：
            </div>
            <div class="wrap color-wrap">
                <div>一组根据主色的由深到浅的色彩组，作用包括组件色彩辅助、图表色彩辅助</div>
                <br/>
                <div v-for="(item,index) in assist" :key="index" class="color-item assist" :style="{backgroundColor:item.value}">
                    <div class="color-name">{{item.name}}</div>
                    <div class="color-value">{{item.value}}</div>
                </div>
            </div>
            <div class="title2" id="title-4">
                中性色（字体色或边框色）：
            </div>
            <div class="wrap color-wrap">
                <div v-for="(item,index) in neutral" :key="index" class="color-item small" :style="{backgroundColor:item.value}">
                    <div class="color-name">{{item.name}}</div>
                    <div class="color-value">{{item.value}}</div>
                </div>

            </div>
            <div class="title2" id="title-5">
                图表色：
            </div>
            <div class="wrap">
                <div v-for="(item,index) in chart" :key="index" class="color-item small" :style="{backgroundColor:item.value}">
                    <div class="color-name">{{item.name}}</div>
                    <div class="color-value">{{item.value}}</div>
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
        primary:[
            {
                name:'主色',
                value:'#1864FF'
            },
            {
                name:'悬浮',
                value:'#518aff'
            },
            {
                name:'激活',
                value:'#114abf'
            },
            {
                name:'禁止',
                value:'#e2e2e2'
            }
        ],
        assist:[
            {
                name:'辅助1',
                value:'#05183F'
            },
            {
                name:'辅助2',
                value:'#558CFF'
            },
            {
                name:'辅助3',
                value:'#88AFFF'
            },
            {
                name:'辅助4',
                value:'#B4CCFF'
            },
            {
                name:'辅助5',
                value:'#DAE6FF'
            },
            {
                name:'辅助6',
                value:'#EEF3FF'
            },
            {
                name:'辅助7',
                value:'#FFFFFF'
            }

        ],
        neutral:[
            {
                name:'标题',
                value:'#262626'
            },
            {
                name:'正文',
                value:'#595959'
            },
            {
                name:'辅助描述',
                value:'#8c8c8c'
            },
            {
                name:'禁用/输入词提示',
                value:'#bfbfbf'
            },
            {
                name:'边框',
                value:'#D9D9D9'
            },
            {
                name:'边框（不可用）',
                value:'#CFCCD0'
            }

        ],
        chart:[
            {
                name:'图色1',
                value:'#2FC277'
            },
            {
                name:'图色2',
                value:'#13A1C2'
            },
            {
                name:'图色3',
                value:'#9543E0'
            },
            {
                name:'图色4',
                value:'#F26463'
            },
            {
                name:'图色5',
                value:'#FFC05B'
            },
            {
                name:'图色6',
                value:'#FAD814'
            }

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
.color{
    &-wrap{
        overflow: hidden;
        margin-bottom:20px;
    }
    &-item{
        -webkit-border-radius: 4px;
        -ms-border-radius: 4px;
        -o-border-radius: 4px;
        border-radius: 4px;
        color:#fff;
        padding:24px 30px;
        width:200px;
        margin-right:20px;
        float: left;
        &.assist{
            width:130px;
            margin-right:0;
            &:last-child{
                color:#ccc;
            }
        }
        &.small{
            width:130px;
            margin-right:0;
        }
    }
    &-name{
        font-size:14px;
    }
    &-value{
        font-size: 12px;
    }
}
</style>
