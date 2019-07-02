let code = {}

code.type = `
  <template>
    <Row>
        <Col span="12">
            <Date 
            type="date" 
            v-model="date1"
            placeholder="选择单日" 
            style="width: 224px" 
            ></Date>{{date1}}
        </Col>
        <Col span="12">
            <Date 
            type="daterange" 
            v-model="date2"
            placeholder="选择日期范围" 
            style="width: 224px" 
            confirm
            ></Date>{{date2}}
        </Col>
    </Row>
    <Row>
        <Col span="12">
            <Date 
            type="year" 
            v-model="date3"
            placeholder="选择年份" 
            style="width: 224px" 
            ></Date>{{date3}}
        </Col>
        <Col span="12">
            <Date 
            type="month" 
            v-model="date4"
            placeholder="选择月份" 
            style="width: 224px" 
            ></Date>{{date4}}
        </Col>
    </Row>
  </template>
  <script>
  export default {
    data (){
      return {
        date1:'2018-5-17',
        date2:['2018-5-16','2018-5-17'],
        date3:'',
        date4:'',
      }
    }
  }
  </script>
`
code.read = `
  <template>
    <Row>
        <Col span="12">
            <Date 
            type="date" 
            v-model="date1"
            readonly
            placeholder="选择单日" 
            style="width: 224px" 
            ></Date>{{date1}}
        </Col>
        <Col span="12">
            <Date 
            type="date" 
            v-model="date1"
            disabled
            placeholder="选择单日" 
            style="width: 224px" 
            ></Date>{{date1}}
        </Col>
    </Row>
  </template>
  <script>
  export default {
    data (){
      return {
        date1:'2018-5-17',
      }
    }
  }
  </script>
`
code.format = `
  <template>
    <Row>
        <Col span="12">
            <Date 
            type="date" 
            v-model="date1"
            format="yyyy/MM/dd"
            placeholder="选择单日" 
            style="width: 224px" 
            ></Date>{{date1}}
        </Col>
        <Col span="12">
            <Date 
            type="daterange" 
            v-model="date2"
            placement="right"
            format="yyyy年MM月dd"
            placeholder="选择日期范围" 
            style="width: 240px" 
            confirm
            ></Date>{{date2}}
        </Col>
    </Row>
  </template>
  <script>
  export default {
    data (){
      return {
        date1:'2018-5-17',
        date2:['2018-5-16','2018-5-17'],
      }
    }
  }
  </script>
`

code.align = `
  <template>
    <Row>
        <Col span="12">
            <Date 
            type="date" 
            placement="left"
            v-model="date1"
            placeholder="选择单日" 
            style="width: 224px" 
            ></Date>
        </Col>
        <Col span="12">
            <Date 
            type="daterange" 
            v-model="date2"
            placement="right"
            placeholder="选择日期范围" 
            style="width: 224px" 
            confirm
            ></Date>
        </Col>
    </Row>
    <Row>
        <Col span="12">
            <Date 
            type="date" 
            v-model="date1"
            placement="top-start"
            placeholder="选择单日" 
            style="width: 224px" 
            ></Date>
        </Col>
        <Col span="12">
            <Date 
            type="daterange" 
            v-model="date2"
            placement="top-end"
            placeholder="选择日期范围" 
            style="width: 224px" 
            confirm
            ></Date>
        </Col>
    </Row>
  </template>
  <script>
  export default {
    data (){
      return {
        date1:'2018-5-17',
        date2:['2018-5-16','2018-5-17'],
      }
    }
  }
  </script>
`
code.option_example = `
    options:{
        shortcuts:[
        {
            text: '今日',
            disabled:true,
            value () {
                const end = new Date();
                const start = new Date();
                return [start, end];
            },
            onClick: (picker) => {
            }
        },
        {
            text: '昨日',
            value () {
                const end = new Date();
                const start = new Date();
                start.setTime(start.getTime() - 3600 * 1000 * 24 * 1);
                end.setTime(end.getTime() - 3600 * 1000 * 24 * 1);
                return [start, end];
            },
            onClick: (picker) => {
            }
        },
        {
            text: '最近一周',
            value () {
                const end = new Date();
                const start = new Date();
                end.setTime(end.getTime() - 3600 * 1000 * 24 * 1);
                start.setTime(start.getTime() - 3600 * 1000 * 24 * 6);
                return [start, end];
            },
            onClick: (picker) => {
            }
        },
        {
            text: '最近一个月',
            value () {
                const end = new Date();
                const start = new Date();
                end.setTime(end.getTime() - 3600 * 1000 * 24 * 1);
                start.setTime(start.getTime() - 3600 * 1000 * 24 * 29);
                return [start, end];
            }
        },
        {
            text: '最近3个月',
            value () {
                const end = new Date();
                const start = new Date();
                end.setTime(end.getTime() - 3600 * 1000 * 24 * 1);
                start.setTime(start.getTime() - 3600 * 1000 * 24 * 89);
                return [start, end];
            }
        },
        {
            text: '最近半年',
            value () {
                const end = new Date();
                const start = new Date();
                end.setTime(end.getTime() - 3600 * 1000 * 24 * 1);
                start.setTime(start.getTime() - 3600 * 1000 * 24 * 182);
                return [start, end];
            }
        },
        {
            text: '最近1年',
            value () {
                const end = new Date();
                const start = new Date();
                end.setTime(end.getTime() - 3600 * 1000 * 24 * 1);
                start.setTime(start.getTime() - 3600 * 1000 * 24 * 365);
                return [start, end];
            }
        }
    
        ],
        disabledDate (date) {
            //设置不可操作的日期：
            //最小日期：2014年1月1日
            const minDate = new Date(2014,1,1);
            //最大日期，昨天
            const maxDate = new Date();
            maxDate.setTime(maxDate.getTime() - 3600 * 1000 * 24 * 1);
            return date && (
                (date.getTime()<=minDate.getTime())||
                (date.getTime()>=(maxDate.getTime()))
            );
        }
    }
`
code.option = `
  <template>
    <Date 
      type="daterange" 
      v-model="date2"
      :options="options"
      placeholder="选择日期范围" 
      style="width: 224px" 
      confirm
    ></Date>
  </template>
  <script>
  export default {
    data (){
      return {
        date2:['2018-5-16','2018-5-17'],
        options:{
            shortcuts:[
                {
                    text: '今日',
                    value () {
                        const end = new Date();
                        const start = new Date();
                        return [start, end];
                    },
                    onClick: (picker) => {
                    }
                },
                {
                    text: '昨日',
                    value () {
                        const end = new Date();
                        const start = new Date();
                        start.setTime(start.getTime() - 3600 * 1000 * 24 * 1);
                        end.setTime(end.getTime() - 3600 * 1000 * 24 * 1);
                        return [start, end];
                    },
                    onClick: (picker) => {
                    }
                },
                {
                    text: '最近一周',
                    value () {
                        const end = new Date();
                        const start = new Date();
                        start.setTime(start.getTime() - 3600 * 1000 * 24 * 6);
                        return [start, end];
                    },
                    onClick: (picker) => {
                    }
                },
                {
                    text: '最近一个月',
                    value () {
                        const end = new Date();
                        const start = new Date();
                        start.setTime(start.getTime() - 3600 * 1000 * 24 * 29);
                        return [start, end];
                    }
                },
                {
                    text: '最近3个月',
                    value () {
                        const end = new Date();
                        const start = new Date();
                        start.setTime(start.getTime() - 3600 * 1000 * 24 * 89);
                        return [start, end];
                    }
                },
                {
                    text: '最近半年',
                    value () {
                        const end = new Date();
                        const start = new Date();
                        start.setTime(start.getTime() - 3600 * 1000 * 24 * 182);
                        return [start, end];
                    }
                },
                {
                    text: '最近1年',
                    value () {
                        const end = new Date();
                        const start = new Date();
                        start.setTime(start.getTime() - 3600 * 1000 * 24 * 365);
                        return [start, end];
                    }
                }
            ],
            disabledDate (date) {
                const minDate = new Date(2014,1,1);
                const maxDate = new Date();
                return date && ((date.getTime()<=minDate.getTime())||(date.getTime()>=maxDate.getTime()));
            }
        },
      }
    }
  }
  </script>
`
code.piker = `
  <template>
  <div>时间段对比：</div>
       <Date 
      type="daterange" 
      placeholder="Select date" 
      style="width: 224px" 
      placement="left"
      :value="date5.cur"
      :options="date5.options"
      confirm
      piker-type
      compare
      show-time
      show-tip
      :max-range-day=366
      :max-range-month=12
      @on-change="handleDateChange"
      ></Date>{{date5.cur}}
      <br/>
      <br/>
  <div>单个日期对比：</div>
       <Date 
      type="daterange" 
      placeholder="Select date" 
      style="width: 224px" 
      placement="left"
      :value="date5.cur"
      :options="date5.options"
      confirm
      single-date
      piker-type
      compare
      show-time
      show-tip
      :max-range-day=366
      :max-range-month=12
      @on-change="handleDateChange"
      ></Date>
      {{date5.cur}}
  </template>
  <script>
  export default {
    data (){
      return {
        date5:{
          cur:['2018-4-28','2018-5-7'],
          options:{
              shortcuts:[
              {
                  text: '今日',
                  value () {
                      const end = new Date();
                      const start = new Date();
                      return [start, end];
                  },
                  onClick: (picker) => {
                  }
              },
              {
                  text: '昨日',
                  value () {
                      const end = new Date();
                      const start = new Date();
                      start.setTime(start.getTime() - 3600 * 1000 * 24 * 1);
                      end.setTime(end.getTime() - 3600 * 1000 * 24 * 1);
                      return [start, end];
                  },
                  onClick: (picker) => {
                  }
              },
              {
                  text: '最近一周',
                  value () {
                      const end = new Date();
                      const start = new Date();
                      start.setTime(start.getTime() - 3600 * 1000 * 24 * 6);
                      return [start, end];
                  },
                  onClick: (picker) => {
                  }
              },
              {
                  text: '最近一个月',
                  value () {
                      const end = new Date();
                      const start = new Date();
                      start.setTime(start.getTime() - 3600 * 1000 * 24 * 29);
                      return [start, end];
                  }
              },
              {
                  text: '最近3个月',
                  value () {
                      const end = new Date();
                      const start = new Date();
                      start.setTime(start.getTime() - 3600 * 1000 * 24 * 89);
                      return [start, end];
                  }
              },
              {
                  text: '最近半年',
                  value () {
                      const end = new Date();
                      const start = new Date();
                      start.setTime(start.getTime() - 3600 * 1000 * 24 * 182);
                      return [start, end];
                  }
              },
              {
                  text: '最近1年',
                  value () {
                      const end = new Date();
                      const start = new Date();
                      start.setTime(start.getTime() - 3600 * 1000 * 24 * 365);
                      return [start, end];
                  }
              }
          
              ],
              disabledDate (date) {
              const minDate = new Date(2014,1,1);
              const maxDate = new Date();
              return date && ((date.getTime()<=minDate.getTime())||(date.getTime()>=maxDate.getTime()));
              }
          }
        },
      }
    }
  }
  </script>
`

export default code
