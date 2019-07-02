let code = {}

code.base = `
    <DropDown>
        <div class="drop-title">下拉菜单<Icon type="ios-arrow-down"></Icon></div>
        <DropDownList slot="list">
            <DropDownItem>产品管理</DropDownItem>
            <DropDownItem>账号管理</DropDownItem>
        </DropDownList>
    </DropDown>
    <DropDown align="center">
        <div class="drop-title">下拉菜单<Icon type="ios-arrow-down"></Icon></div>
        <DropDownList slot="list">
            <DropDownItem>产品管理</DropDownItem>
            <DropDownItem>账号管理</DropDownItem>
        </DropDownList>
    </DropDown>
    <DropDown align="right">
        <div class="drop-title">下拉菜单<Icon type="ios-arrow-down"></Icon></div>
        <DropDownList slot="list">
            <DropDownItem>产品管理</DropDownItem>
            <DropDownItem>账号管理</DropDownItem>
        </DropDownList>
    </DropDown>
`

code.trigger = `
    <DropDown trigger="hover">
        <div class="drop-title">hover触发<Icon type="ios-arrow-down"></Icon></div>
        <DropDownList slot="list">
            <DropDownItem>产品管理</DropDownItem>
            <DropDownItem>账号管理</DropDownItem>
        </DropDownList>
    </DropDown>
    <DropDown trigger="click">
        <div class="drop-title">click触发<Icon type="ios-arrow-down"></Icon></div>
        <DropDownList slot="list">
            <DropDownItem>产品管理</DropDownItem>
            <DropDownItem>账号管理</DropDownItem>
        </DropDownList>
    </DropDown>
`
code.arrow = `
    <DropDown bubble>
        <div class="drop-title">下拉菜单<Icon type="ios-arrow-down"></Icon></div>
        <DropDownList slot="list">
            <DropDownItem>产品管理</DropDownItem>
            <DropDownItem>账号管理</DropDownItem>
        </DropDownList>
    </DropDown>
    <DropDown align="center" bubble>
        <div class="drop-title">下拉菜单<Icon type="ios-arrow-down"></Icon></div>
        <DropDownList slot="list">
            <DropDownItem>产品管理</DropDownItem>
            <DropDownItem>账号管理</DropDownItem>
        </DropDownList>
    </DropDown>
    <DropDown align="right" bubble>
        <div class="drop-title">下拉菜单<Icon type="ios-arrow-down"></Icon></div>
        <DropDownList slot="list">
            <DropDownItem>产品管理</DropDownItem>
            <DropDownItem>账号管理</DropDownItem>
        </DropDownList>
    </DropDown>
`
code.custom = `
    <template>
        <DropDown trigger="hover" bubble align="left">
            <div class="drop-title">自定义下拉<Icon type="ios-arrow-down"></Icon></div>
            <div slot="list">
                <ul>
                    <li v-for="(item,index) in customDrop.data" :key="index">
                        <div class="title">{{item.title}}</div>
                        <div class="content">{{item.content}}</div>
                    </li>
                </ul>
                <div class="check-footer">查看全部</div>
            </div>
        </DropDown>
    </template>
    <script>
        export default {
        data() {
            return {
                customDrop:{
                    data:[
                        {
                            title:'SDK升级',
                            content:'Android SDK v2.3.0已上线'
                        },
                        {
                            title:'种模板可以区分多种通知类型',
                            content:'这里是具体内容，如果字数超出了自行省略...'
                        },
                        {
                            title:'这条内容是已阅状态',
                            content:'这里是具体内容，如果字数超出了自行省略...'
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
        .custom-dropdown-demo{
            .drop-title{
                i{
                    margin-left:8px;
                }
            }
            .vsu-dropdown-drop-left{
                width: 336px;
                ul{
                    padding:20px 24px 0;
                }
                li{
                    height:70px;
                    border-bottom:1px solid  #E8E8E8;
                    padding:10px 0;
                    .title{
                        font-size:14px;
                    }
                    .content{
                        font-size:12px;
                    }
                }
                .check-footer{
                    height:46px;
                    font-size:14px;
                    line-height:46px;
                    text-align:center;
                    padding:0;
                }
            }
        }
    </style>
`

export default code
