<template>
  <div class="other">
    <div class="title1">
      滚动条
    </div>
    <div class="mItem">
      <div class="title2">
          使用：
      </div>
      <div class="wrap">
          <div class="demo-scroll-wrap">
            <Scroll :max-height="100">
                <p v-for="n in 10" :key="n">{{n}}.我是滚动条里面的内容</p>
            </Scroll>
          </div>
          <div class="q-title">说明：
             滚动条使用时，父级元素需要确定height属性,默认鼠标悬浮显示滚动条
          </div>
          <div class="q-title">代码示例：</div>
          <DCode :code="code.base" lang="html"></DCode>
      </div>
      <div class="title2">
          滚动条显示：
      </div>
      <div class="wrap">
          <Row :gutter="16">
              <Col span="8">
                <div>
                  <div>一直显示滚动条</div>
                  <div class="demo-scroll-wrap">
                    <Scroll always :max-height="100">
                        <p v-for="n in 10" :key="n">{{n}}.我是滚动条里面的内容</p>
                    </Scroll>
                  </div>
                </div>
              </Col>
              <Col span="8">
                <div>
                  <div>显示横向滚动条</div>
                  <div class="demo-scroll-wrap">
                    <Scroll show-x :max-height="100">
                        <p v-for="n in 10" :key="n"  style="white-space:nowrap">{{n}}.我是滚动条里面的内容我是滚动条里面的内容我是滚动条里面的内容我是滚动条里面的内容我是滚动条里面的内容我是滚动条里面的内容我是滚动条里面的内容我是滚动条里面的内容我是滚动条里面的内容我是滚动条里面的内容我是滚动条里面的内容我是滚动条里面的内容</p>
                    </Scroll>
                  </div>
                </div>
              </Col>
              <Col span="8">
                <div>
                  <div>隐藏横向滚动条</div>
                  <div class="demo-scroll-wrap">
                    <Scroll :show-y=false  show-x :max-height="100">
                        <p v-for="n in 10" :key="n">{{n}}.我是滚动条里面的内容</p>
                    </Scroll>
                  </div>
                </div>
              </Col>
          </Row>
          <div class="q-title">代码示例：</div>
          <DCode :code="code.show" lang="html"></DCode>
      </div>
      <div class="title2">
          使用原生：
      </div>
      <div class="wrap">
          <div class="demo-scroll-wrap">
            <Scroll native :max-height="100">
                <p v-for="n in 10" :key="n">{{n}}.我是滚动条里面的内容</p>
            </Scroll>
          </div>
          <div class="q-title">说明：
             设置native使用原生滚动条
          </div>
          <div class="q-title">代码示例：</div>
          <DCode :code="code.native" lang="html"></DCode>
      </div>
      <div class="title2">
          API：
      </div>
      <div class="wrap">
          <div class="q-title">Scroll【props】</div>
          <Table type="bordered" :thead="api.thead" :data="api.data">
          </Table>
          <div class="q-title">Scroll【slot】</div>
          <Table type="bordered" :thead="slots.thead" :data="slots.data">
          </Table>
      </div>
    </div>
    <DMenu></DMenu>
  </div>
</template>

<script>
  import Code from '../../../code/component/view/scroll'
  export default {
    data () {
      return {
        code: Code,
        scroll: {
          id: 'J_scroll',
          height: '240px',
          scrollY: {
            visable: true,
            color: '#495060',
            speed: 20,
            propagation: true
          },
          scrollX: {
            visable: true,
            color: '#495060'
          }
        },
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
                    prop:'native',
                    description:'使用原生',
                    type:'Boolean',
                    option:'',
                    default:'false'
                },
                {
                    prop:'always',
                    description:'是否一直显示滚动条',
                    type:'Boolean',
                    option:'-',
                    default:'false'
                },
                {
                    prop:'showX',
                    description:'是否显示横向滚动条',
                    type:'Boolean',
                    option:'-',
                    default:'false'
                },
                {
                    prop:'showY',
                    description:'是否显示纵向滚动条',
                    type:'Boolean',
                    option:'-',
                    default:'false'
                },
                {
                    prop:'disabledX',
                    description:'是否禁止横向滚动条',
                    type:'Boolean',
                    option:'-',
                    default:'false'
                },
                {
                    prop:'maxHeight',
                    description:'容器最大高度',
                    type:'Number',
                    option:'-',
                    default:'-'
                },
                {
                    prop:'wrapStyle',
                    description:'容器样式',
                    type:'String',
                    option:'-',
                    default:'-'
                },
                {
                    prop:'wrapClass',
                    description:'容器类',
                    type:'String',
                    option:'-',
                    default:'-'
                },
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
                    description:'内容',
                }
            ]
        },
      }
    },
    methods: {
      // 滚到最顶端
      scrollStart () {
        console.log('scrollStart')
      },
      // 滚到最底端
      scrollEnd () {
        console.log('scrollEnd')
      },
      // 滚到最右端
      scrollRight () {
        console.log('scrollRight')
      },
      // 滚到最左
      scrollLeft () {
        console.log('scrollLeft')
      }
    },
    mounted () {}
  }
</script>
<style lang="scss" scoped>
.demo-scroll-wrap{
    font-size:14px;
    border:1px solid #ccc;
}
</style>