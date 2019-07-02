<template>
    <div class="request">
        <div class="title1">
            格式化
        </div>
        <div class="mItem">
            <div class="title2">
                千分位过滤器
            </div>
            <div class="wrap">
                <DCode :code="code.formatComma" lang="javascript"></DCode>
            </div>
        </div>
        <div class="mItem">
            <div class="title2">
                百分比过滤器
            </div>
            <div class="wrap">
                <DCode :code="code.formatRate" lang="javascript"></DCode>
            </div>
        </div>
        <div class="mItem">
            <div class="title2">
                数值过滤器
            </div>
            <div class="wrap">
                <DCode :code="code.formatNum" lang="javascript"></DCode>
            </div>
        </div>
        <div class="mItem">
            <div class="title2">
                流量大小过滤器
            </div>
            <div class="wrap">
                <DCode :code="code.formatFlow" lang="javascript"></DCode>
            </div>
        </div>
        <div class="mItem">
            <div class="title2">
                时间大小过滤器
            </div>
            <div class="wrap">
                <DCode :code="code.formatTime" lang="javascript"></DCode>
            </div>
        </div>
    </div>
</template>

<script>
import Code from '../../code/util/format';
export default {
  name: "v-format",
  data() {
    return {
        code: Code
    };
  },
  components: {
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
