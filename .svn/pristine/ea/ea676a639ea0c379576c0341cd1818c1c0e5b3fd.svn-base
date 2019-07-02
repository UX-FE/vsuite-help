<template>
    <div class="other">
        <div class="title1">
            文件上传
        </div>
        <div class="mItem">
            <div class="title2" id="title-1">
                基本使用：
            </div>
            <div class="wrap">
                 <Upload action="//jsonplaceholder.typicode.com/posts/">
                    <BaseButton type="primary">上传文件</BaseButton>
                </Upload>
                <div class="q-title">说明：</div>
                <div>
                    最基本用法，点击上传，一次选择一个文件
                </div>
                <div class="q-title">代码示例：</div>
                <DCode :code="code.base" lang="html"></DCode>
            </div>
            <div class="title2" id="title-2">
                多选：
            </div>
            <div class="wrap">
                 <Upload 
                    multiple
                    action="//jsonplaceholder.typicode.com/posts/">
                    <BaseButton type="primary">一次上传多个文件</BaseButton>
                </Upload>
                <div class="q-title">说明：</div>
                <div>
                    设置multiple属性，可以选择多个文件
                </div>
                <div class="q-title">代码示例：</div>
                <DCode :code="code.multiple" lang="html"></DCode>
            </div>
            <div class="title2" id="title-3">
                数量限制：
            </div>
            <div class="wrap">
                 <Upload 
                    multiple
                    :limit=3
                    :on-exceed="handleExceed"
                    action="//jsonplaceholder.typicode.com/posts/">
                    <BaseButton type="primary">限制最多选择3个文件</BaseButton>
                    <Alert type="info" mode="fix" v-model="exceedTip">{{exceedTip_text}}</Alert>
                </Upload>
                <div class="q-title">说明：</div>
                <div>
                    设置limit属性为限制上传的文件数，设置on-exceed属性控制超过限制后的处理
                </div>
                <div class="q-title">代码示例：</div>
                <DCode :code="code.limit" lang="html"></DCode>
            </div>
            <div class="title2" id="title-4">
                图片上传与预览：
            </div>
            <div class="wrap">
                <Upload
                    class="avatar-uploader"
                    action="//jsonplaceholder.typicode.com/posts/"
                    :show-file-list="false"
                    :on-success="handleAvatarSuccess"
                    :before-upload="beforeAvatarUpload"
                    >
                    <img v-if="imageUrl1" :src="imageUrl1" class="avatar">
                    <Icon v-else type="plus" class="avatar-uploader-icon"></Icon>
                </Upload>
                <Alert type="info" mode="fix" v-model="imgTip">{{imgTip_text}}</Alert>
                <div class="q-title">说明：</div>
                <div>
                    增加图片slot,设置on-success属性，获取上传成功之后的图片url,可以设置图片上传和预览；设置before-upload属性限制用户上传的图片格式与大小
                </div>
                <div class="q-title">代码示例：</div>
                <DCode :code="code.img" lang="html"></DCode>
            </div>
            <div class="title2" id="title-5">
                图片预览不提交：
            </div>
            <div class="wrap">
                <Upload
                    class="avatar-uploader"
                    action="//jsonplaceholder.typicode.com/posts/"
                    :show-file-list="false"
                    :on-change="handleAvatarChange"
                    :auto-upload="false">
                    <img v-if="imageUrl" :src="imageUrl" class="avatar">
                    <Icon v-else type="plus" class="avatar-uploader-icon"></Icon>
                </Upload>
                <div class="q-title">说明：</div>
                <div>
                    设置auto-upload属性 ，不自动提交文件，设置on-change属性获取修改文件选择时的图片url，可以预览图片
                </div>
                <div class="q-title">代码示例：</div>
                <DCode :code="code.preview" lang="html"></DCode>
            </div>
            <div class="title2" id="title-6">
                图片列表：
            </div>
            <div class="wrap">
                <Upload
                    class="avatar-uploader"
                    multiple
                    action="//jsonplaceholder.typicode.com/posts/"
                    list-type="picture-card"
                    :on-preview="handlePictureCardPreview"
                    :on-remove="handleRemove"
                    >
                    <Icon type="plus" class="avatar-uploader-icon"></Icon>
                </Upload>
                <Modal v-model="imageUrl2Visible">
                        <img width="100%" :src="imageUrl2" alt="">
                </Modal>
                <Alert type="info" mode="fix" v-model="imglistTip">{{imglistTip_text}}</Alert>
                   
                <div class="q-title">说明：</div>
                <div>
                    设置list-type属性为picture-card来设置图片列表
                </div>
                <div class="q-title">代码示例：</div>
                <DCode :code="code.imglist" lang="html"></DCode>
            </div>
            <div class="title2" id="title-7">
                图片缩略列表：
            </div>
            <div class="wrap">
                <Upload
                    class="img-uploader2"
                    multiple
                    action="//jsonplaceholder.typicode.com/posts/"
                    list-type="picture"
                    :file-list="fileList2"
                    >
                     <BaseButton slot="trigger" type="primary">图片缩略列表上传</BaseButton>
                </Upload>
                <div class="q-title">说明：</div>
                <div>
                    设置list-type属性为picture,为图片缩略列表
                </div>
                <div class="q-title">代码示例：</div>
                <DCode :code="code.imgshortlist" lang="html"></DCode>
            </div>
            <div class="title2" id="title-8">
                拖拽上传：
            </div>
            <div class="wrap">
                 <Upload 
                    class="custom-drag-wrap"
                    drag
                    multiple
                    action="//jsonplaceholder.typicode.com/posts/">
                    <span slot="trigger" class="drag-upload-text">将文件拖到此处，或<em>点击上传</em></span>
                   <div slot="tip" class="el-upload__tip">只能上传jpg/png文件，且不超过500kb</div>
                </Upload>
                <div class="q-title">说明：</div>
                <div>
                    设置drag属性,可以拖拽上传
                </div>
                <div class="q-title">代码示例：</div>
                <DCode :code="code.drag" lang="html"></DCode>
            </div>
            <div class="title2" id="title-9">
                手动上传：
            </div>
            <div class="wrap">
                <Upload
                class="upload-demo"
                ref="upload"
                action="https://jsonplaceholder.typicode.com/posts/"
                :on-remove="handleRemove"
                :file-list="fileList"
                :auto-upload="false">
                <BaseButton slot="trigger" size="small" type="primary">选取文件</BaseButton>
                <BaseButton slot="action" style="margin-left: 10px;" size="small" type="primary" @click="submitUpload">上传到服务器</BaseButton>
                <div slot="tip" class="el-upload__tip">只能上传jpg/png文件，且不超过500kb</div>
                </Upload>
                <div class="q-title">说明：</div>
                <div>
                    设置multiple属性，可以选择多个文件
                </div>
                <div class="q-title">代码示例：</div>
                <DCode :code="code.action" lang="html"></DCode>
            </div>
            <div class="title2" id="title-10">
                API：
            </div>
            <div class="wrap">
                <div class="q-title">Upload【props】：</div>
                <Table type="bordered" :thead="api.thead" :data="api.data">
                </Table>
                <div class="q-title">Upload</div>
                <Table type="bordered" :thead="events.thead" :data="events.data">
                </Table>
                <div class="q-title">Upload</div>
                <Table type="bordered" :thead="slots.thead" :data="slots.data">
                </Table>
            </div>
        </div>
        <DMenu></DMenu>
    </div>
</template>
<script>
  import Code from '../../../code/component/form/upload'
  export default {
    name: 'vUpload',
    data () {
      return {
        code: Code,
        imageUrl: '',
        imageUrl1:'',
        imageUrl2:'',
        imageUrl2Visible:false,
        exceedTip:false,
        exceedTip_text:'',
        imgTip:false,
        imgTip_text:'',
        imglistTip:false,
        imglistTip_text:'',
        uploadtip1_text:'',
        uploadtip1:false,
        fileList2: [
            {
                name: 'food.jpeg', 
                url: 'https://fuss10.elemecdn.com/3/63/4e7f3a15429bfda99bce42a18cdd1jpeg.jpeg?imageMogr2/thumbnail/360x360/format/webp/quality/100'
            }, 
            {
                name: 'food2.jpeg', 
                url: 'https://fuss10.elemecdn.com/3/63/4e7f3a15429bfda99bce42a18cdd1jpeg.jpeg?imageMogr2/thumbnail/360x360/format/webp/quality/100'
            }
        ],
        fileList: [{name: 'food.jpeg', url: 'https://fuss10.elemecdn.com/3/63/4e7f3a15429bfda99bce42a18cdd1jpeg.jpeg?imageMogr2/thumbnail/360x360/format/webp/quality/100'}, {name: 'food2.jpeg', url: 'https://fuss10.elemecdn.com/3/63/4e7f3a15429bfda99bce42a18cdd1jpeg.jpeg?imageMogr2/thumbnail/360x360/format/webp/quality/100'}],
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
                    prop:'action',
                    description:'必选参数，上传的地址',
                    type:'String',
                    option:'-',
                    default:'-'
                },
                {
                    prop:'headers',
                    description:'设置上传的请求头部',
                    type:'object',
                    option:'-',
                    default:'-'
                },
                {
                    prop:'data',
                    description:'上传时附带的额外参数',
                    type:'object',
                    option:'-',
                    default:'-'
                },
                {
                    prop:'accept',
                    description:'接受上传的文件类型（thumbnail-mode 模式下此参数无效）',
                    type:'string',
                    option:'-',
                    default:'-'
                },
                {
                    prop:'name',
                    description:'上传的文件字段名',
                    type:'string',
                    option:'-',
                    default:'-'
                },
                {
                    prop:'with-credentials',
                    description:'支持发送 cookie 凭证信息',
                    type:'Boolean',
                    option:'-',
                    default:'false'
                },
                {
                    prop:'multiple',
                    description:'是否支持多选文件',
                    type:'Boolean',
                    option:'-',
                    default:'false'
                },
                {
                    prop:'show-file-list',
                    description:'是否显示已上传文件列表',
                    type:'Boolean',
                    option:'-',
                    default:'false'
                },
                {
                    prop:'drag',
                    description:'是否启用拖拽上传',
                    type:'Boolean',
                    option:'-',
                    default:'false'
                },
                {
                    prop:'list-type',
                    description:'文件列表的类型',
                    type:'string',
                    option:'text/picture/picture-card',
                    default:'text'
                },
                {
                    prop:'auto-upload',
                    description:'是否在选取文件后立即进行上传',
                    type:'Boolean',
                    option:'-',
                    default:'true'
                },
                {
                    prop:'file-list',
                    description:'上传的文件列表, 例如: [{name: "img.png", url: ""}]',
                    type:'array',
                    option:'-',
                    default:'[]'
                },
                {
                    prop:'http-request',
                    description:'自定义上传的实现',
                    type:'function',
                    option:'-',
                    default:'-'
                },
                {
                    prop:'disabled',
                    description:'是否禁用',
                    type:'Boolean',
                    option:'-',
                    default:'false'
                },
                {
                    prop:'limit',
                    description:'最大允许上传个数',
                    type:'number',
                    option:'-',
                    default:'-'
                },
                {
                    prop:'format',
                    description:'支持的文件类型，与 accept 不同的是，format 是识别文件的后缀名，accept 为 input 标签原生的 accept 属性，会在选择文件时过滤，可以两者结合使用',
                    type:'Array',
                    option:'-',
                    default:'[]'
                },
                {
                    prop:'maxSize',
                    description:'文件大小限制，单位 kb',
                    type:'Number',
                    option:'-',
                    default:'-'
                },
                {
                    prop:'on-format-error',
                    description:'文件格式验证失败时的钩子，返回字段为 file, fileList',
                    type:'function(files, fileList)',
                    option:'-',
                    default:'-'
                },
                {
                    prop:'on-exceeded-size',
                    description:'文件超出指定大小限制时的钩子，返回字段为 file, fileList',
                    type:'function(files, fileList)',
                    option:'-',
                    default:'-'
                },
                {
                    prop:'on-exceed',
                    description:'文件超过限制后的钩子',
                    type:'function(files, fileList)',
                    option:'-',
                    default:'-'
                },
                {
                    prop:'on-preview',
                    description:'点击文件列表中已上传的文件时的钩子',
                    type:'function(file)',
                    option:'-',
                    default:'-'
                },
                {
                    prop:'on-remove',
                    description:'文件列表移除文件时的钩子',
                    type:'function(file, fileList)',
                    option:'-',
                    default:'-'
                },
                {
                    prop:'on-success',
                    description:'文件超过限制后的钩子',
                    type:'function(response, file, fileList)	',
                    option:'-',
                    default:'-'
                },
                {
                    prop:'on-error',
                    description:'文件上传失败时的钩子',
                    type:'function(err, file, fileList)',
                    option:'-',
                    default:'-'
                },
                {
                    prop:'on-progress',
                    description:'文件上传时的钩子',
                    type:'function(event, file, fileList)',
                    option:'-',
                    default:'-'
                },
                {
                    prop:'on-change',
                    description:'文件状态改变时的钩子，添加文件、上传成功和上传失败时都会被调用',
                    type:'function(file, fileList)',
                    option:'-',
                    default:'-'
                },
                {
                    prop:'before-upload',
                    description:'上传文件之前的钩子，参数为上传的文件，若返回 false 或者返回 Promise 且被 reject，则停止上传。',
                    type:'function(file)',
                    option:'-',
                    default:'-'
                },
                {
                    prop:'before-remove',
                    description:'删除文件之前的钩子，参数为上传的文件和文件列表，若返回 false 或者返回 Promise 且被 reject，则停止',
                    type:'function(file, fileList)',
                    option:'-',
                    default:'-'
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
                    name:'clearFiles',
                    description:'清空已上传的文件列表（该方法不支持在 before-upload 中调用）',
                    props:'-'
                },
                {
                    name:'abort',
                    description:'取消上传请求',
                    props:'（ file: fileList 中的 file 对象 ）'
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
                    description:'触发上传的区域',
                },
                {
                    name:'tip',
                    description:'提示',
                }
            ]
        },
      }
    },
    components: {
    },
    watch: {
    },
    methods: {
      handleAvatarSuccess(res, file) {
        this.imageUrl1 = URL.createObjectURL(file.raw);
      },
      beforeAvatarUpload(file) {
        const isJPG = file.type === 'image/jpeg';
        const isLt2M = file.size / 1024 / 1024 < 2;

        if (!isJPG) {
            this.exceedTip_text = `上传图片只能是 JPG 格式!`;
            this.exceedTip = true;
        }
        if (!isLt2M) {
            this.exceedTip_text = `上传图片大小不能超过 2MB!`;
            this.exceedTip = true;
        }
        return isJPG && isLt2M;
      },
      handleAvatarChange(file,files){
          this.imageUrl = file.url;
      },
      submitUpload() {
        this.$refs.upload.submit();
      },
      handleRemove(file, fileList) {
        this.imglistTip_text = `你删除了 ${file.name} `;
        this.imglistTip = true;
        console.log(file, fileList);
      },
      handlePictureCardPreview(file) {
        this.imageUrl2 = file.url;
        this.imageUrl2Visible = true;
      },
      handlePreview(file) {
        console.log(file);
      },
      handleExceed(files, fileList) {
        this.exceedTip_text = `当前限制选择 3 个文件，本次选择了 ${files.length} 个文件，共选择了 ${files.length + fileList.length} 个文件`;
        this.exceedTip = true;
      },
      beforeRemove(file, fileList) {
          alert(`确定移除 ${ file.name }？`)
      }
    },
    mounted () {}
  }
</script>
<style lang="scss">
.avatar-uploader .vsu-upload {
    border: 1px dashed #d9d9d9;
    border-radius: 6px;
    cursor: pointer;
    position: relative;
    overflow: hidden;
  }
  .avatar-uploader .vsu-upload:hover {
    border-color: #409EFF;
  }
  i.vsu-ion.avatar-uploader-icon {
    font-size:30px;
    color: #8c939d;
    width: 178px;
    height: 178px;
    line-height: 178px;
    text-align: center;
  }
  .avatar {
    width: 178px;
    height: 178px;
    display: block;
  }
  .custom-drag-wrap{
      .vsu-upload-dragger{
          line-height:148px;
      }
  }
</style>