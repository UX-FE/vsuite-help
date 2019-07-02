<template>
    <div class="request">
        <div class="title1">
            验证
        </div>
        <div class="mItem">
            <div class="title2">
                手机号码验证
            </div>
            <div class="wrap">
                <DCode :code="code.verifyMobile" lang="javascript"></DCode>
            </div>
        </div>
        <div class="mItem">
            <div class="title2">
                电子邮箱验证
            </div>
            <div class="wrap">
                <DCode :code="code.verifyMail" lang="javascript"></DCode>
            </div>
        </div>
        <div class="mItem">
            <div class="title2">
                判断是否全为中文的字符串
            </div>
            <div class="wrap">
                <DCode :code="code.isChinese" lang="javascript"></DCode>
            </div>
        </div>
        <div class="mItem">
            <div class="title2">
                判断是否只包含数字、字母、下划线
            </div>
            <div class="wrap">
                <DCode :code="code.isNumStr_" lang="javascript"></DCode>
            </div>
        </div>
        <div class="mItem">
            <div class="title2">
                判断是否为单字节字符
            </div>
            <div class="wrap">
                <DCode :code="code.isSingleByte" lang="javascript"></DCode>
            </div>
        </div>
    </div>
</template>

<script>
import Code from '../../code/util/verify';
export default {
  name: "v-verify",
  data() {
    return {
        code: Code
    };
  },
  components: {},
  watch: {
  },
  methods: {
    init() {
      this.getData();
    },
    getData() {}
  },
  mounted() {}
};
</script>
