<template>
    <div class="other">
        <div class="title1">
            其他
        </div>
        <div class="mItem">
            <div class="title2">
                请求拦截
            </div>
            <div class="wrap">
                <DCode :code="code.vueHttp" lang="javascript"></DCode>
            </div>
        </div>
        <div class="mItem">
            <div class="title2">
                针对特定字符进行编码
            </div>
            <div class="wrap">
                <DCode :code="code.encodeSpecialURI" lang="javascript"></DCode>
            </div>
        </div>
        <div class="mItem">
            <div class="title2">
                获取浏览器高宽
            </div>
            <div class="wrap">
                <DCode :code="code.getBrowserWidth" lang="javascript"></DCode>
            </div>
        </div>
        <div class="mItem">
            <div class="title2">
                获取数组中的最大值
            </div>
            <div class="wrap">
                <DCode :code="code.getMaxValue" lang="javascript"></DCode>
            </div>
        </div>
        <div class="mItem">
            <div class="title2">
                获取数组中的最小值
            </div>
            <div class="wrap">
                <DCode :code="code.getMinValue" lang="javascript"></DCode>
            </div>
        </div>
        <div class="mItem">
            <div class="title2">
                判断当前浏览器类型
            </div>
            <div class="wrap">
                <DCode :code="code.currentBrowser" lang="javascript"></DCode>
            </div>
        </div>
        <div class="mItem">
            <div class="title2">
                获取缩略后的字符串
            </div>
            <div class="wrap">
                <DCode :code="code.getShortStr" lang="javascript"></DCode>
            </div>
        </div>
    </div>
</template>

<script>
import Code from '../../code/util/other';
export default {
  name: "v-other",
  data() {
    return {
        code: Code
    };
  },
  components: {},
  methods: {
    init() {
      this.getData();
    },
    getData() {}
  },
  mounted() {}
};
</script>
