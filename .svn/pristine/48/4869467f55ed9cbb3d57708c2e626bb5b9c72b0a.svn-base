let code = {}

code.base = `
    <template>
        <BaseButton @on-click-btn="handleOpenDrawer1">打开抽屉</BaseButton>
        <Drawer
        title="标题"
        v-model="drawer1"
        >
        </Drawer>
    </template>
    <script>
    export default {
    data() {
        return {
            drawer1:false
        };
    },
    methods: {
        handleOpenDrawer1(){
            this.drawer1 = true;
        }
    },
    mounted() {}
    };
    </script>
    <style lang="scss">
    </style>
`

code.placement = `
    <template>
        <BaseButton @on-click-btn="handleOpenDrawer2">打开抽屉</BaseButton>
        <Drawer
        title="标题"
        placement="left"
        v-model="drawer2"
        >
            <p>我是抽屉中的内容</p>
        </Drawer>
    </template>
    <script>
    export default {
    data() {
        return {
            drawer2:false
        };
    },
    methods: {
        handleOpenDrawer2(){
            this.drawer2 = true;
        }
    },
    mounted() {}
    };
    </script>
    <style lang="scss">
    </style>
`

code.mask = `
    <template>
        <BaseButton @on-click-btn="handleOpenDrawer3">打开抽屉</BaseButton>
        <Drawer
        title="标题"
        :maskClosable="false"
        v-model="drawer3"
        >
            <p>我是抽屉中的内容</p>
        </Drawer>
    </template>
    <script>
    export default {
    data() {
        return {
            drawer3:false
        };
    },
    methods: {
        handleOpenDrawer3(){
            this.drawer3 = true;
        }
    },
    mounted() {}
    };
    </script>
    <style lang="scss">
    </style>
`
code.preview = `
    <template>
        <BaseButton @on-click-btn="handleOpenDrawer4">打开抽屉</BaseButton>
        <Drawer
        title="标题"
        :closable="false" 
        width="640"
        v-model="drawer4"
        >
            <p>我是预览的信息</p>
        </Drawer>
    </template>
    <script>
    export default {
    data() {
        return {
            drawer4:false
        };
    },
    methods: {
        handleOpenDrawer4(){
            this.drawer4 = true;
        }
    },
    mounted() {}
    };
    </script>
    <style lang="scss">
    </style>
`

code.edit = `
    <template>
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
    </template>
    <script>
    export default {
    data() {
        return {
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
        };
    },
    methods: {
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
`

export default code
