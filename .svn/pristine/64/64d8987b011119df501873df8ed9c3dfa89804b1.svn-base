let code = {}

code.formatComma = `
    /**
     * @千分位过滤器
     * @param {float} value - 传入格式化数据.
     * @param {float} n - 小数位设置，默认为2为小数位.
     * @param {int} t - 小数返回的格式：为空表示默认按n的数字返回对应的位数，为“auto”抹去最后的0，表示根据小数的情况动态返回，如：
            当n为2，且isAuto为auto:
            当数字为1.22，返回1.22
            当数字为1.20，返回1.2
            当数字为1.00，返回1   .
    *
    */
    Vue.filter('formatComma', function (s, n, isAuto, flag) {
        if (!s && s !== 0) return '-'
        if (!isNaN(s)) {
            n = n >= 0 && n <= 20 ? n : 2
            if (flag) {
                s = s < 10000 ? parseFloat((s + '').replace(/[^\d\.-]/g, '')).toFixed(0) + '' : parseFloat((s + '').replace(/[^\d\.-]/g, '')).toFixed(n) + ''
            } else {
                s = parseFloat((s + '').replace(/[^\d\.-]/g, '')).toFixed(n) + ''
            }
            var l = s.split('.')[0].split('').reverse(),
            r = s.split('.')[1]
            var t = ''
            for (var i = 0; i < l.length; i++) {
                t += l[i] + ((i + 1) % 3 == 0 && (i + 1) != l.length && (l[i + 1] !== '-') ? ',' : '')
            }
            if (isAuto && (isAuto === 'auto')) { // 判断是否要去掉末位多于的0
                var rTemp = '0.' + r
                rTemp = parseFloat(rTemp) // 去掉多于的小数点
                r = (rTemp) ? String(rTemp).split('.')[1] : ''
            }
            var res = t.split('').reverse().join('') + ((r) ? ('.' + r) : '')
            return res
        }
        return s
    })
`
code.formatRate = `
    /**
     * @百分比过滤器
     * @param {float} value - 传入格式化数据.
     * @param {int} t - 是否保留2位小数.
     * @param {int} u - 是否需要%.
     *
     */
    Vue.filter('formatRate', function (value, t, u) {
        if (value === '-') {
            return value
        }
        if ((!value && value !== 0) || isNaN(value)) return '-'
        var unit = (u === -1) ? '' : '%'
        var isNegati = (value < 0) ? '-' : ''
        if (t === -1) {
            return isNegati + parseFloat(Math.abs(value * 100)) + unit
        }
        return isNegati + parseFloat(Math.abs(value * 100).toFixed(2)) + unit
    })
`


code.formatNum = `  
    /**
     * @数值过滤器
     * @param {float} num - 传入格式化数据.
     * @param {float} type - 返回的类型
     * @param {int} toFixed - 返回的数据小数保留位数
     *
     */
    Vue.filter('formatNum', function (num, type, toFixed, flag) {
        if (num === '-') {
            return type === 'unit' ? '' : num
        }
        var rate = 1
        var unit = ''
        if ((!num && num !== 0) || isNaN(num)) {
            if (type === 'unit') {
            return ''
            } else {
            return '-'
            }
        }
        if (num < 10000) {
            rate = 1
            unit = ''
        } else if (num > 99999999) {
            rate = 100000000
            unit = '亿'
        } else if (num > 9999999) {
            rate = 10000000
            unit = '千万'
        } else {
            rate = 10000
            unit = '万'
        }
        // 判断是否自定义格式化位数
        var tf = toFixed === 0 || toFixed ? toFixed : 2
        // 如果不传type,则返回格式化后的数值+单位
        if (!type) {
            return parseFloat((num / rate).toFixed(tf)) + unit
            // 如果传"value",则只返回值，不返回单位
        } else if (type === 'value') {
            if (flag) {
            if (num < 10000) {
                return parseFloat((num / rate).toFixed(0))
            } else {
                return parseFloat((num / rate).toFixed(tf))
            }
            } else {
            return parseFloat((num / rate).toFixed(tf))
            }
        } else {
            // 如果传 "unit",则只返回单位，不返回值
            return unit
        }
    })
`


code.formatFlow = `
    /**
     * @流量大小过滤器
     * @param {float} num - 传入格式化数据.
     * @param {string} type - 返回的类型
     * @param {string} unit - 当前传入的单位：可为T,G,M,K, 默认为M
     * @param {int} toFixed - 返回的数据小数保留位数
     *
     */
    Vue.filter('formatFlow', function (num, type, unit, toFixed) {
        // 处理“-”和非数值情况
        if (num === '-') {
            return type === 'unit' ? '' : num
        }
        if ((!num && num !== 0) || isNaN(num)) {
            return '-'
        }
        // 初始化比率和单位
        var rate = 1
        var finalUnit = ''
        // 如果传入当前传入单位，进行转化为Mb
        if (unit) {
            switch (unit) {
            case 'K':
                num = num / 1024
                break
            case 'M':
                num = num * 1
                break
            case 'G':
                num = num * 1024
                break
            case 'T':
                num = num * 1024 * 1024
                break
            case 'E':
                num = num * 1024 * 1024 * 1024
                break
            }
        }
        // 如果大于Eb
        if (num >= 1073741824) {
            rate = 1073741824
            finalUnit = 'Eb'
            // 如果大于Tb
        } else if (num >= 1048576) {
            rate = 1048576
            finalUnit = 'Tb'
            // 如果大于Gb
        } else if (num >= 1024) {
            rate = 1024
            finalUnit = 'Gb'
        } else {
            rate = 1
            finalUnit = 'Mb'
        }
        // 判断是否自定义格式化位数
        var tf = toFixed === 0 || toFixed ? toFixed : 2
        // 如果不传type,则返回格式化后的数值+单位
        if (!type) {
            return parseFloat((num / rate).toFixed(tf)) + finalUnit
            // 如果传"value",则只返回值，不返回单位
        } else if (type === 'value') {
            return parseFloat((num / rate).toFixed(tf))
        } else {
            // 如果传 "finalUnit",则只返回单位，不返回值
            return finalUnit
        }
    })
`


code.formatTime = `  
    /**
     * @时间大小过滤器
     * @param {float} num - 传入格式化数据.
     * @param {string} type - 返回的类型
     * @param {string} unit - 当前传入的单位：可为M(分钟),H（小时）,D（天）, 默认为H
     * @param {int} toFixed - 返回的数据小数保留位数
     *
     */
    Vue.filter('formatTime', function (num, type, unit, toFixed) {
        // 处理“-”和非数值情况
        if (num === '-') {
            return type === 'unit' ? '' : num
        }
        if ((!num && num !== 0) || isNaN(num)) {
            return '-'
        }
        // 初始化比率和单位
        var rate = 1
        var finalUnit = ''
        // 如果传入当前传入单位，进行转化为Mb
        if (unit) {
            switch (unit) {
            case 'M':
                num = num / 60
                break
            case 'H':
                num = num * 1
                break
            case 'D':
                num = num * 24
                break
            }
        }
        // 如果大于
        if (num >= 24) {
            rate = 24
            finalUnit = '天'
            // 如果大于Tb
        } else if (num >= 1) {
            rate = 1
            finalUnit = '小时'
            // 如果大于Gb
        } else {
            rate = 1 / 60
            finalUnit = '分钟'
        }
        // 判断是否自定义格式化位数
        var tf = toFixed === 0 || toFixed ? toFixed : 2
        // 如果不传type,则返回格式化后的数值+单位
        if (!type) {
            return parseFloat((num / rate).toFixed(tf)) + finalUnit
            // 如果传"value",则只返回值，不返回单位
        } else if (type === 'value') {
            return parseFloat((num / rate).toFixed(tf))
        } else {
            // 如果传 "finalUnit",则只返回单位，不返回值
            return finalUnit
        }
    })
`



export default code
