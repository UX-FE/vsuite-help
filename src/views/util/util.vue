<template>
    <div class="main" id="J_main">
        <template v-if="type==='request'">
            <v-request></v-request>
        </template>
        <template v-else-if="type==='format'">
            <v-format></v-format>
        </template>
        <template v-else-if="type==='verify'">
            <v-verify></v-verify>
        </template>
        <template v-else-if="type==='other'">
            <v-other></v-other>
        </template>
    </div>
</template>

<script>

import vRequest from './request.vue'
import vFormat from './format.vue'
import vOther from './other.vue'
import vVerify from './verify.vue'
export default {
  name: 'v-util',
  data () {
    return {
      type: ''
    }
  },
  components: {
    'v-request': vRequest,
    'v-format': vFormat,
    'v-verify': vVerify,
    'v-other': vOther
  },
  watch: {
    '$route.path': 'getData'
  },
  methods: {
    init () {
      this.getData()
    },
    getData () {
      this.type = this.$route.params.type
    }
  },
  mounted () {
    this.init()
  }
}
</script>
