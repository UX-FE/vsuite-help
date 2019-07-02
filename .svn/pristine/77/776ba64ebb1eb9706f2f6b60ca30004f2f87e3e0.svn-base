<template>
    <div class="other">
        <div class="title1">
            Drawer 抽屉
        </div>
        <div class="mItem">
            <div class="title2" id="title-1">
                基础用法：
            </div>
            <div class="wrap">
                <BaseButton @on-click-btn="handleOpenDrawer1">打开抽屉</BaseButton>
                <Drawer
                title="标题"
                v-model="drawer1"
                >
                    <p>我是抽屉中的内容</p>
                </Drawer>

                <div class="q-title">说明：</div>
                <div>
                    点击触发按钮后抽屉默认从右边划出，点击遮罩区关闭，点击关闭图标关闭
                </div>
                <div class="q-title">代码示例：</div>
                <DCode :code="code.base" lang="html"></DCode>
            </div>
            <div class="title2" id="title-2">
                方向：
            </div>
            <div class="wrap">
                <BaseButton @on-click-btn="handleOpenDrawer2">打开抽屉</BaseButton>
                <Drawer
                title="标题"
                placement="left"
                v-model="drawer2"
                >
                    <p>我是抽屉中的内容</p>
                </Drawer>
                <div class="q-title">说明：</div>
                <div>
                    设置placement为“left”可以让抽屉从左边划出，默认是“right”
                </div>
                <div class="q-title">代码示例：</div>
                <DCode :code="code.placement" lang="html"></DCode>
            </div>
            <div class="title2" id="title-2">
                遮罩：
            </div>
            <div class="wrap">
                <BaseButton @on-click-btn="handleOpenDrawer3">打开抽屉</BaseButton>
                <Drawer
                title="标题"
                :maskClosable="false"
                v-model="drawer3"
                >
                    <p>我是抽屉中的内容</p>
                </Drawer>
                <div class="q-title">说明：</div>
                <div>
                    设置maskClosable为“false”则不可点击遮罩关闭
                </div>
                <div class="q-title">代码示例：</div>
                <DCode :code="code.mask" lang="html"></DCode>
            </div>
            <div class="title2" id="title-2">
                信息预览：
            </div>
            <div class="wrap">
                <BaseButton @on-click-btn="handleOpenDrawer4">打开抽屉</BaseButton>
                <Drawer
                title="标题"
                :closable="false" 
                width="640"
                v-model="drawer4"
                >
                    <p>我是预览的信息</p>
                </Drawer>
                <div class="q-title">说明：</div>
                <div>
                    设置closable为“false”则没有关闭图标，通过点击遮罩关闭，通常作为信息预览展示
                </div>
                <div class="q-title">代码示例：</div>
                <DCode :code="code.preview" lang="html"></DCode>
            </div>
            <div class="title2" id="title-2">
                编辑抽屉：
            </div>
            <div class="wrap">
                <BaseButton @on-click-btn="handleOpenDrawer5">打开抽屉</BaseButton>
                <Drawer
                title="标题"
                width="640"
                :mask-closable="false"
                v-model="drawer5"
                hasFooter
                >
                    <span slot="header" class="vsu-drawer-header-inner">
                        筛选
                        <span style="color: rgba(0,0,0,0.45)">(可自定义标题)</span>
                    </span>
                    <div class="shift-content">
                        <Form
                            key="form1"
                            ref="form1"
                            :value="formData"
                            :rules="formRules"
                            :label-width="114"
                        >
                            <FormItem
                            v-for="(item,index) in itemData"
                            :key="index"
                            :name="item.code"
                            :label="item.text+'：'"
                            >
                                <FormInput
                                    v-model="formData[item.code]"
                                    :placeholder="'可输入'+item.text+'进行筛选'"
                                    :width="360"
                                    :maxlength="(item.maxlength)?item.maxlength:1000"
                                ></FormInput>
                                <span class="tip-text">（非必填）</span>
                            </FormItem>
                        </Form>
                    </div>
                    <div slot="footer">
                        <BaseButton type="primary" style="margin-right: 8px" @on-click-btn="handleCommit">确定</BaseButton>
                        <BaseButton @on-click-btn="handleCancel">取消</BaseButton>
                    </div>
                </Drawer>
                <div class="q-title">说明：</div>
                <div>
                    设置closable为“false”则没有关闭图标，通过点击遮罩关闭，通常作为信息预览展示
                </div>
                <div class="q-title">代码示例：</div>
                <DCode :code="code.edit" lang="html"></DCode>
            </div>
            <div class="title2" id="title-3">
                API：
            </div>
            <div class="wrap">
                <div class="q-title">Drawer【props】：</div>
                <Table type="bordered" :thead="api.thead" :data="api.data">
                </Table>
                <div class="q-title">Drawer【slot】</div>
                <Table type="bordered" :thead="slots.thead" :data="slots.data">
                </Table>
            </div>
        </div>
        <DMenu></DMenu>
    </div>
</template>

<script>
import Code from '../../../code/component/view/drawer';
export default {
  data() {
    return {
        code: Code,
        drawer1:false,
        drawer2:false,
        drawer3:false,
        drawer4:false,
        drawer5:false,
        formData:{
            name:'',
            gender:'',
            age:''
        },
        formRules:{
            name:[
                {
                    required: true,
                    message: "请输入姓名",
                    trigger: "blur"
                },
            ],
            gender:[
                
                {
                    required: true,
                    message: "请输入性别",
                    trigger: "blur"
                },
            ],
            age:[
                
                {
                    required: true,
                    message: "请输入年龄",
                    trigger: "blur"
                },
            ]

        },
        itemData:[
            {
                code:'name',
                text:'姓名',
                maxlength:10
            },
            {
                code:'gender',
                text:'性别',
                maxlength:2
            },
            {
                code:'age',
                text:'年龄',
                maxlength:3
            }
        ],
        api:{
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
                    prop:'value',
                    description:'抽屉是否显示，可使用 v-model 双向绑定数据',
                    type:'Boolean',
                    option:'-',
                    default:'false'
                },
                {
                    prop:'title',
                    description:'抽屉标题，如果使用 slot 自定义了页头，则 title 无效',
                    type:'String',
                    option:'-',
                    default:'-'
                },
                {
                    prop:'width',
                    description:'抽屉宽度',
                    type:'Number,String',
                    option:'-',
                    default:'256'
                },
                {
                    prop:'closable',
                    description:'是否显示右上角的关闭按钮',
                    type:'Boolean',
                    option:'-',
                    default:'true'
                },
                {
                    prop:'mask-closable',
                    description:'是否允许点击遮罩层关闭',
                    type:'Boolean',
                    option:'-',
                    default:'true'
                },
                {
                    prop:'mask',
                    description:'是否显示遮罩层',
                    type:'Boolean',
                    option:'-',
                    default:'true'
                },
                {
                    prop:'scrollable',
                    description:'页面是否可以滚动',
                    type:'Boolean',
                    option:'-',
                    default:'false'
                },
                {
                    prop:'placement',
                    description:'抽屉的方向，可选值为 left 或 right',
                    type:'String',
                    option:'-',
                    default:'right'
                },
            ]
        },
        events:{
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
                    name:'on-close',
                    description:'关闭抽屉时触发',
                    props:''
                },
                {
                    name:'on-visible-change',
                    description:'显示状态发生变化时触发',
                    props:''
                }
            ]

        },
        slots:{
            thead:[
                {
                    column:'name',
                    name:'名称',
                },
                {
                    column:'description',
                    name:'说明',
                },
            ],
            data:[
                {
                    name:'无',
                    description:'抽屉主题内容',
                },
                {
                    name:'header',
                    description:'自定义标题栏',
                },
                {
                    name:'close',
                    description:'自定义右上角关闭内容',
                },
            ]
        },
    };
  },
  methods: {
      handleOpenDrawer1(){
          this.drawer1 = true;
      },
      handleOpenDrawer2(){
          this.drawer2 = true;
      },
      handleOpenDrawer3(){
          this.drawer3 = true;
      },
      handleOpenDrawer4(){
          this.drawer4 = true;
      },
      handleOpenDrawer5(){
          this.drawer5 = true;
      },
      handleCommit(){
          this.$refs["form1"].validate(valid => {
              if(valid){
                  alert('验证成功')
                    this.drawer5 = false;
              }
          })
      },
      handleCancel(){
          this.drawer5 = false;

      },
  },
  mounted() {}
};
</script>
<style lang="scss">
.shift-content{
    padding-top:24px;
}
</style>
