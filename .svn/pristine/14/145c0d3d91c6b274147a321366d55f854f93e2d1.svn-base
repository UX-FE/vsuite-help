let code = {}

code.base = `
    <Progress></Progress>
    <Progress :percent="0"></Progress>
    <Progress :percent="25"></Progress>
    <Progress :percent="50"></Progress>
    <Progress :percent="100"></Progress>
    <Progress :percent="50" hidetext></Progress>
`
code.width = `
    <Progress :percent="25" stroke-width=10></Progress>
    <Progress :percent="50" stroke-width=40></Progress>
`
code.color = `
    <Progress :percent="64" type="strip" color="#4baaff"></Progress>
    <Progress :percent="64" type="strip" color="#ffdc29"></Progress>
    <Progress :percent="64" type="strip" color="#ff9802"></Progress>
    <Progress :percent="64" type="strip" color="#fe6130"></Progress>
`

code.textposition = `
    <Progress :percent="0"></Progress>
    <Progress :percent="25"></Progress>
    <Progress :percent="0" textinside></Progress>
    <Progress :percent="1" textinside></Progress>
    <Progress :percent="5" textinside></Progress>
    <Progress :percent="25" textinside></Progress>
`

code.custom = `
    <template>
        <Progress :percent="25">
            <span style="margin:0 6px;">自定义的内容</span>
        </Progress>
        <Progress :percent="25">
            <div slot="text"><Icon type="leaf"></Icon>25</div>
        </Progress>
        <div class="custom-bar-style">
            <div class="text-wrap"><span>同步盘</span><span class="value-wrap">64%</span></div>
            <Progress :percent="64" hidetext strokeWidth="6" color="#1890FF">
            </Progress>
        </div>
    </template>
    
    <style lang="scss">
        .vsu-progress{
            margin-bottom:10px;
        }
        .custom-bar-style{
            width:200px;
            .text-wrap{
                position:relative;
                margin-bottom: -10px;
                .value-wrap{
                    position:absolute;
                    right:0;
                    color:#3BA0FF;
                }
            }
            .vsu-progress{
                &-bar{
                    &-wrap{
                        background: rgba(24,100,255,0.05);
                    }

                }
            }
        }
    </style>
`
code.direction = `
    <div style="height:200px">
        <Progress :percent="25" vertical></Progress>
        <Progress :percent="50" vertical></Progress>
        <Progress :percent="100" vertical></Progress>
    </div>
`
code.type = `
    <Progress :percent="25"></Progress>
    <Progress :percent="25" type="strip"></Progress>
    <Progress :percent="0" type="circle"></Progress>
    <Progress :percent="25" type="circle"></Progress>
    <Progress :percent="50" type="circle"></Progress>
    <Progress :percent="100" type="circle"></Progress>
    <Progress :percent="70" type="circle" stroke-linecap="round"></Progress>
    <Progress :percent="80" type="circle" back-width="10"></Progress>
    <Progress :percent="80" type="circle" back-width="10">
        <div>
            <div>中国电信</div>
            <div>80% | 23,989</div>
        </div>
    </Progress>
    <Progress :percent="80" type="circle" back-width="10" :gradient="gradient1">
        <div>
            <div>中国电信</div>
            <div>80% | 23,989</div>
        </div>
    </Progress>
    <Progress :percent="80" type="circle" back-width="10" radius="120" size="280"></Progress>
`
code.status = `
    <Progress :percent="25"></Progress>
    <Progress :percent="45" status="active"></Progress>
    <Progress :percent="65" status="error"></Progress>
    <Progress :percent="100" status="success"></Progress>
    <Progress :percent="25" type="strip"></Progress>
    <Progress :percent="45" type="strip" status="active"></Progress>
    <Progress :percent="55" type="strip" status="error"></Progress>
    <Progress :percent="100" type="strip" status="success"></Progress>
`

export default code
