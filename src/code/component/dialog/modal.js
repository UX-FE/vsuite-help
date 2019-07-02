let code = {}

code.base = `
    <template>
        <BaseButton type="primary" @on-click-btn="modal1=true">自定义内容的对话框</BaseButton>
        <BaseButton type="primary" @on-click-btn="modal2=true">自定义主体的对话框</BaseButton>
        <Modal v-model="modal1" maskClosable>
            <div class="demo-1">自定义的内容</div>
        </Modal>
        <Modal v-model="modal2" title="标题">
            <div slot="body">
                <P>主体的内容1</P>
                <P>主体的内容2</P>
            </div>
        </Modal>
    </template>
    export default {
        data() {
            return {
                modal1:false,
                modal2:false
            };
        },
        methods: {
        },
        mounted() {}
    };
`
code.close = `
    <template>
        <BaseButton type="primary" @on-click-btn="modal3=true">点击遮罩不可关闭</BaseButton>
        <BaseButton type="primary" @on-click-btn="modal4=true">没有关闭按钮</BaseButton>
        <Modal v-model="modal3" title="标题" >
            <div slot="body">
                <P>主体的内容1</P>
                <P>主体的内容2</P>
            </div>
        </Modal>
        <Modal v-model="modal4" title="标题" :closable="false">
            <div slot="body">
                <P>主体的内容1</P>
                <P>主体的内容2</P>
            </div>
        </Modal>
    </template>
    export default {
        data() {
            return {
                modal3:false,
                modal4:false,
            };
        },
        methods: {
        },
        mounted() {}
    };
`


export default code
