let code = {}

code.base = `
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
`

code.simple = `
    <Card style="width:350px;">
        <div>
            <p>列表内容1</p>
            <p>列表内容2</p>
            <p>列表内容...</p>
        </div>
    </Card>
`
code.group = `
    <template>
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
    </template>
    <style>
        .vsu-card:not(:last-child){
            .card-body{
                border-right:1px solid  #E8E8E8;
            }
        }
    </style>
`

export default code
