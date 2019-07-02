let code = {}

code.base = `
  <template>
    <Upload action="//jsonplaceholder.typicode.com/posts/">
      <BaseButton type="primary">上传文件</BaseButton>
    </Upload>
  </template>
  export default {
    data () {
      return {
      }
    },
    watch: {
    },
    methods: {
    },
    mounted () {}
  }

`
code.multiple = `
  <template>
    <Upload 
      multiple
      action="//jsonplaceholder.typicode.com/posts/">
      <BaseButton type="primary">一次上传多个文件</BaseButton>
    </Upload>
  </template>
  export default {
    data () {
      return {
      }
    },
    watch: {
    },
    methods: {
    },
    mounted () {}
  }

`
code.limit = `
  <template>
    <Upload 
      multiple
      :limit=3
      :on-exceed="handleExceed"
      action="//jsonplaceholder.typicode.com/posts/">
      <BaseButton type="primary">限制最多选择3个文件</BaseButton>
      <Alert type="info" mode="fix" v-model="exceedTip">{{exceedTip_text}}</Alert>
    </Upload>
  </template>
  export default {
    data () {
      return {
        exceedTip:false,
        exceedTip_text:'',
      }
    },
    watch: {
    },
    methods: {
      handleExceed(files, fileList) {
        this.exceedTip_text = ‘当前限制选择 3 个文件’;
        this.exceedTip = true;
      },
    },
    mounted () {}
  }

`
code.img = `
  <template>
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
  </template>
  export default {
    data () {
      return {
        imageUrl1:'',
        imgTip:false,
        imgTip_text:'',
      }
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
            this.exceedTip_text = '上传图片只能是 JPG 格式!';
            this.exceedTip = true;
        }
        if (!isLt2M) {
            this.exceedTip_text = '上传图片大小不能超过 2MB!';
            this.exceedTip = true;
        }
        return isJPG && isLt2M;
      },
    },
    mounted () {}
  }

`
code.preview = `
  <template>
    <Upload
        class="avatar-uploader"
        action="//jsonplaceholder.typicode.com/posts/"
        :show-file-list="false"
        :on-change="handleAvatarChange"
        :auto-upload="false">
        <img v-if="imageUrl" :src="imageUrl" class="avatar">
        <Icon v-else type="plus" class="avatar-uploader-icon"></Icon>
    </Upload>
  </template>
  export default {
    data () {
      return {
        imageUrl: '',
      }
    },
    watch: {
    },
    methods: {
      handleAvatarChange(file,files){
          this.imageUrl = file.url;
      },
    },
    mounted () {}
  }

`
code.imglist = `
  <template>
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
  </template>
  export default {
    data () {
      return {
        imageUrl2:'',
        imageUrl2Visible:false,
      }
    },
    watch: {
    },
    methods: {
      handleRemove(file, fileList) {
        this.imglistTip_text = '你删除了文件';
        this.imglistTip = true;
        console.log(file, fileList);
      },
      handlePictureCardPreview(file) {
        this.imageUrl2 = file.url;
        this.imageUrl2Visible = true;
      },
    },
    mounted () {}
  }

`
code.imgshortlist = `
  <template>
  <Upload
    class="img-uploader2"
    multiple
    action="//jsonplaceholder.typicode.com/posts/"
    list-type="picture"
    :file-list="fileList2"
    >
    <BaseButton slot="trigger" type="primary">图片缩略列表上传</BaseButton>
  </Upload>
  </template>
  export default {
    data () {
      return {
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
      }
    },
    watch: {
    },
    methods: {
    },
    mounted () {}
  }

`
code.drag = `
  <template>
    <Upload 
      class="custom-drag-wrap"
      drag
      multiple
      action="//jsonplaceholder.typicode.com/posts/">
      <span slot="trigger" class="drag-upload-text">将文件拖到此处，或<em>点击上传</em></span>
      <div slot="tip" class="el-upload__tip">只能上传jpg/png文件，且不超过500kb</div>
    </Upload>
  </template>
  export default {
    data () {
      return {
      }
    },
    watch: {
    },
    methods: {
    },
    mounted () {}
  }

`
code.action = `
  <template>
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
  </template>
  export default {
    data () {
      return {
        fileList: [
            {
                name: 'food.jpeg', 
                url: 'https://fuss10.elemecdn.com/3/63/4e7f3a15429bfda99bce42a18cdd1jpeg.jpeg?imageMogr2/thumbnail/360x360/format/webp/quality/100'
            }, 
            {
                name: 'food2.jpeg', 
                url: 'https://fuss10.elemecdn.com/3/63/4e7f3a15429bfda99bce42a18cdd1jpeg.jpeg?imageMogr2/thumbnail/360x360/format/webp/quality/100'
            }
        ],
      }
    },
    watch: {
    },
    methods: {
    },
    mounted () {}
  }

`


export default code
