<template>
    <pre>
        <code :class="lang" v-text="code" 
            :style="{
                'max-height': slide?'none':''
            }"
            ref="code"
            ></code>
        <div class="slideBtn" 
            :class="{
                slide: slide
            }"
            v-if="showSlideBtn" 
            @click="slided">
            <span></span>
        </div>
    </pre>
</template>
<script>
    import Utils from '../../assets/js/utils' // 工具类
    export default {
      name: 'DCode',
      props: ['code', 'lang'],
      data () {
        return {
          slide: false,
          showSlideBtn: true
        }
      },
      components: {
      },
      watch: {
      },
      created () {
      },
      methods: {
        slided () {
          this.slide = !this.slide
          // resize window
          Utils.resizeWindow()
        }
      },
      mounted () {
        this.$nextTick(function () {
          var height = (this.$refs.code&&this.$refs.code.offsetHeight)?this.$refs.code.offsetHeight:0;
          this.showSlideBtn = height === 200
        })
        } 
    }
</script>
<style lang="scss">
    pre{
        padding: 0 12px;
        background-color: rgba(75, 97, 217, 0.05);
        color: #656566;
        position: relative;
        code{
            max-height: 200px;
            overflow: hidden;
            background-color: transparent !important;
        }
        .slideBtn{
            overflow: hidden;
            width: 100%;
            height: 20px;
            background-color: rgba(0, 0, 0, 0.015);
            position: absolute;
            bottom: 0;
            left: 0;
            cursor: pointer;
            border-top: 1px dashed rgba(75, 97, 217, 0.1);
            text-align: center;
            box-shadow: 0 -6px 40px 0 rgba(74, 97, 217, 0.1);
            &:hover{
                background-color: rgba(0, 0, 0, 0.04);
                border-top: 1px dashed rgba(75, 97, 217, 0.3);
                span{
                    border-right: 2px solid rgba(75, 97, 217, 0.4);
                    border-top: 2px solid rgba(75, 97, 217, 0.4);
                }
            }
            &.slide{
                span{
                    transform: rotate(-45deg);
                    -webkit-transform: rotate(-45deg);
                    -o-transform: rotate(-45deg);
                    -moz-transform: rotate(-45deg);
                    -ms-transform: rotate(-45deg);
                    bottom: -4px;
                }
            }
            span {
                border: 6px solid transparent;
                right: 50%;
                margin-left: 0;
                content: '';
                width: 16px;
                height: 16px;
                border-right: 2px solid rgba(75, 97, 217, 0.1);
                border-top: 2px solid rgba(75, 97, 217, 0.1);
                display: block;
                position: absolute;
                bottom: 6px;
                transform: rotate(-225deg);
                -webkit-transform: rotate(-225deg);
                -o-transform: rotate(-225deg);
                -moz-transform: rotate(-225deg);
                -ms-transform: rotate(-225deg);
            }
        }
    }
</style>