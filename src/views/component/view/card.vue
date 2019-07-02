<template>
    <div class="other">
        <div class="title1">
            Card 卡片
        </div>
        <div class="mItem">
            <div class="title2" id="title-1">
                基础用法：
            </div>
            <div class="wrap">
                <Card style="width:350px;">
                    <div slot="head">
                        新增用户
                    </div>
                    <div slot="body">
                        <p style="color: #16BA5C;font-size: 40px;line-height:56px;">12,310</p>
                    </div>
                    <div slot="footer">
                        日新增2.23%
                    </div>
                </Card>
                <div class="q-title">说明：</div>
                <div>
                    最简单的卡片，包含标题，内容和底栏，都需要具名slot分发
                </div>
                <div class="q-title">代码示例：</div>
                <DCode :code="code.base" lang="html"></DCode>
            </div>
            <div class="title2" id="title-2">
                简单卡片：
            </div>
            <div class="wrap">
                <Card style="width:350px;">
                    <div>
                        <p>列表内容1</p>
                        <p>列表内容2</p>
                        <p>列表内容...</p>
                    </div>
                </Card>
                <div class="q-title">说明：</div>
                <div>
                    只有内容区域
                </div>
                <div class="q-title">代码示例：</div>
                <DCode :code="code.simple" lang="html"></DCode>
            </div>
            <div class="title2" id="title-3">
                卡片组：
            </div>
            <div class="wrap">
                <CardGroup>
                    <Card style="width:25%;">
                        <div class="card-body">
                            <div class="cart-title">
                                新增用户
                            </div>
                            <div class="cart-value">
                                <p style="color: rgba(0,0,0,0.85);font-size: 24px;">12,310</p>
                            </div>
                            <div class="cart-footer">
                                日新增2.23%
                            </div>
                        </div>
                    </Card>
                    <Card style="width:25%;">
                        <div class="card-body">
                            <div class="cart-title">
                                新增用户
                            </div>
                            <div class="cart-value">
                                <p style="color: rgba(0,0,0,0.85);font-size: 24px;">12,310</p>
                            </div>
                            <div class="cart-footer">
                                日新增2.23%
                            </div>
                        </div>
                    </Card>
                    <Card style="width:25%;">
                        <div class="card-body">
                            <div class="cart-title">
                                新增用户
                            </div>
                            <div class="cart-value">
                                <p style="color: rgba(0,0,0,0.85);font-size: 24px;">12,310</p>
                            </div>
                            <div class="cart-footer">
                                日新增2.23%
                            </div>
                        </div>
                    </Card>
                    <Card style="width:25%;">
                        <div class="card-body">
                            <div class="cart-title">
                                新增用户
                            </div>
                            <div class="cart-value">
                                <p style="color: rgba(0,0,0,0.85);font-size: 24px;">12,310</p>
                            </div>
                            <div class="cart-footer">
                                日新增2.23%
                            </div>
                        </div>
                    </Card>
                </CardGroup>
                <br/>
                <CardGroup vertical>
                    <Card style="width:25%;">
                        <div slot="head">
                            新增用户
                        </div>
                        <div slot="body">
                            <p style="color: #16BA5C;font-size: 40px;line-height:56px;">12,310</p>
                        </div>
                        <div slot="footer">
                            日新增2.23%
                        </div>
                    </Card>
                    <Card style="width:25%;">
                        <div slot="head">
                            新增用户
                        </div>
                        <div slot="body">
                            <p style="color: #16BA5C;font-size: 40px;line-height:56px;">12,310</p>
                        </div>
                        <div slot="footer">
                            日新增2.23%
                        </div>
                    </Card>
                    <Card style="width:25%;">
                        <div slot="head">
                            新增用户
                        </div>
                        <div slot="body">
                            <p style="color: #16BA5C;font-size: 40px;line-height:56px;">12,310</p>
                        </div>
                        <div slot="footer">
                            日新增2.23%
                        </div>
                    </Card>
                    <Card style="width:25%;">
                        <div slot="head">
                            新增用户
                        </div>
                        <div slot="body">
                            <p style="color: #16BA5C;font-size: 40px;line-height:56px;">12,310</p>
                        </div>
                        <div slot="footer">
                            日新增2.23%
                        </div>
                    </Card>
                </CardGroup>
                <div class="q-title">说明：</div>
                <div>
                    卡片可以成组使用，可以设置vertical属性设置卡片为竖向
                </div>
                <div class="q-title">代码示例：</div>
                <DCode :code="code.group" lang="html"></DCode>
            </div>
            <div class="title2" id="title-4">
                API：
            </div>
            <div class="wrap">
                <div class="q-title">Card【slot】：</div>
                <Table type="bordered" :thead="cardslot.thead" :data="cardslot.data">
                </Table>
                <div class="q-title">Card【evets】：</div>
                <Table type="bordered" :thead="cardevets.thead" :data="cardevets.data">
                </Table>
                <div class="q-title">CardGroup【props】：</div>
                <Table type="bordered" :thead="cardgroup.thead" :data="cardgroup.data">
                </Table>
            </div>
        </div>
        <DMenu></DMenu>
    </div>
</template>

<script>
import Code from '../../../code/component/view/card';
export default {
  data() {
    return {
        code: Code,
        cardslot:{
            thead:[
                {
                    column:'name',
                    name:'名称',
                },
                {
                    column:'description',
                    name:'说明',
                }
            ],
            data:[
                {
                    name:'head',
                    description:'自定义卡片标题，如果是简单文字，可以使用<p>标签包裹',
                },
                {
                    name:'body',
                    description:'自定义卡片主体',
                },
                {
                    name:'footer',
                    description:'自定义卡片底栏',
                },
                {
                    name:'无',
                    description:'卡片主体内容',
                },
            ]
        },
        cardevets:{
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
                    name:'on-click-card',
                    description:'点击卡片时触发',
                    props:'点击事件'
                }
            ]
        },
        cardgroup:{
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
                    prop:'vertical',
                    description:'是否竖向',
                    type:'Boolean',
                    option:'-',
                    default:'false'
                },
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
.vsu-card:not(:last-child){
    .card-body{
        border-right:1px solid  #E8E8E8;
    }
}
</style>
