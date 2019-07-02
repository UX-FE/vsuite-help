let code = {}

code.vueHttp = `
/**
    * 方法名：请求拦截
    * @param 暂无
    * 备注：① 判断接口响应的headers中sessionstatus是否过期，
             以及登录账号是否已更新，从而回到登录页重新登录。
           ② sessionStatus和user：浏览器不一样，大小写不一样。
    */
    var account = (window.user)?window.user.account:'';
    Vue.http.interceptors.push(function (request, next) {
        request.headers.set('Cache-Control','no-cache');
        request.headers.set('If-Modified-Since','0');
        next(function (response) {
            if (process.env.NODE_ENV !== "development") {
                if(
                ( response.headers.map.SESSIONSTATUS && 
                    response.headers.map.SESSIONSTATUS[0] &&
                    response.headers.map.SESSIONSTATUS[0]==='TIMEOUT' ) ||
                ( response.headers.map.Sessionstatus &&
                    response.headers.map.Sessionstatus[0] &&
                    response.headers.map.Sessionstatus[0]==='TIMEOUT' )||
                ( response.headers.map.sessionstatus &&
                    response.headers.map.sessionstatus[0] &&
                    response.headers.map.sessionstatus[0]==='TIMEOUT' ) 
                ){
                    window.location.href ='/login';
                }else if(
                    ( response.headers.map.USER && 
                    response.headers.map.USER[0] && 
                    response.headers.map.USER[0] &&
                    (response.headers.map.USER[0]!==account))||
                    ( response.headers.map.User && 
                    response.headers.map.User[0] && 
                    response.headers.map.User[0] &&
                    (response.headers.map.User[0]!==account))||
                    ( response.headers.map.user && 
                    response.headers.map.user[0] && 
                    response.headers.map.user[0] &&
                    (response.headers.map.user[0]!==account))){
                        window.location.href ='/login';
                }
            }
            return response;
        })
    });
`

code.encodeSpecialURI = `
    /* 方法：针对特定字符进行编码
    str：要进行特殊编码的字符
    比如：测+试"啦'啦/啦
    返回：测%2B试%22啦%27啦%2F啦
    备注：针对+、"、'、/四种特殊字符进行编码
    */
    encodeSpecialURI: function (str) {
        return str.replace(/\+/g, '%2B').replace(/\"/g, '%22').replace(/\'/g, '%27').replace(/\&/g, '%26').replace(/\?/g, '？').replace(/\%/g, '%25').replace(/\=/g, '%3D').replace(/\#/g, '%23')
    },
`
code.getBrowserWidth = `
    getBrowserWidth: function () {
        var broser = {
        winWidth: 0,
        winHeight: 0
        }
        // 获取窗口宽度
        if (window.innerWidth) { broser.winWidth = window.innerWidth } else if ((document.body) && (document.body.clientWidth)) { broser.winWidth = document.body.clientWidth }
        // 获取窗口高度
        if (window.innerHeight) { broser.winHeight = window.innerHeight } else if ((document.body) && (document.body.clientHeight)) { broser.winHeight = document.body.clientHeight }
        // 通过深入 Document 内部对 body 进行检测，获取窗口大小
        if (document.documentElement && document.documentElement.clientHeight && document.documentElement.clientWidth) {
        broser.winHeight = document.documentElement.clientHeight
        broser.winWidth = document.documentElement.clientWidth
        }
        return broser
    },
`
code.getMaxValue = `
    /* 方法：获取数组中的最大值
        d：要对比的数组对象
        比如：["7","sdaf",4,3]
        返回：7
        备注：若为非数字,通过isNaN排除;
            若无数字对比，均返回"-";
        */
    getMaxValue: function (d) {
        var array = d.join(',').split(',')
        var tempA = []
        $.each(array, function (i, item) {
            if (item !== '' && !isNaN(item)) {
                tempA.push(item)
            }
        })
        if (tempA.length === 0) {
            return '-'
        } else {
            return Math.max.apply(null, tempA)
        }
    },
`
code.getMinValue = `
    /* 方法：获取数组中的最小值
        d：要对比的数组对象
        比如：["7","sdaf",4,3]
        返回：3
        备注：若为非数字,通过isNaN排除;
            若无数字对比，均返回"-";
        */
    getMinValue: function (d) {
        var array = d.join(',').split(',')
        var tempA = []
        $.each(array, function (i, item) {
            if (item !== '' && !isNaN(item)) {
                tempA.push(item)
            }
        })
        if (tempA.length === 0) {
            return '-'
        } else {
            return Math.min.apply(null, tempA)
        }
    },
`
code.currentBrowser = `
    /* 方法：判断当前浏览器类型
        返回：浏览器类型
        备注：
        */
    currentBrowser: function () {
    var userAgent = window.navigator.userAgent // 取得浏览器的userAgent字符串
    var isOpera = (userAgent.indexOf('Opera') > -1 || userAgent.indexOf('OPR') > -1) // 判断是否Opera浏览器
    var isIE = /(msie\s|trident.*rv:)([\w.]+)/.exec(userAgent.toLowerCase())
    var isFF = userAgent.indexOf('Firefox') > -1 // 判断是否Firefox浏览器
    var isSafari = userAgent.indexOf('Safari') > -1 && userAgent.indexOf('Chrome') < 1 // 判断是否Safari浏览器
    var isChrome = userAgent.indexOf('Chrome') > -1 // 判断是否Chrome浏览器
    var isWeiXin = userAgent.toLowerCase().match(/MicroMessenger/i) === 'micromessenger'
    if (isWeiXin) {
    return 'WeiXin'
    }
    if (isIE != null) {
    var version = parseInt(isIE[2])
    if (version === 9 && userAgent.indexOf('Trident/6.0') > -1) {
        version = 10
    }
    return 'IE' + version
    }
    if (isOpera) {
    return 'Opera'
    }
    if (isFF) {
    return 'FF'
    }
    if (isSafari) {
    return 'Safari'
    }
    if (isChrome) {
    return 'Chrome'
    }
    return ''
    },
`



code.getShortStr = `
    /* 方法：获取字符串的字节长度
    str：要计算字节长度的字符串
    比如："测试"
    返回：4
    备注：
        */
    getStrByte: function (str) {
        // 字符串的实际字节长度定义
        var len = 0
            // 原始字符串分割成数值格式，每个字符均分割，比如["测","试",....],依次类推
        var strArr = str.split('')
            // 是否为单字节字符变量定义
        var isSigByte = ''
            // 循环字符串中的每一个字符，判断是否为单字节，由此得到字符串字节的长度
        $.each(strArr, function (i) {
                // 获取到当前字符是否为单字节
        isSigByte = Utils.isSingleByte(strArr[i])
                // 单字节字符对应+1，双字节字符对应+2
        len = len + ((isSigByte) ? 1 : 2)
        })
        return len
    },
    /* 方法：获取字符串前/后一定的长度的字符
        str：原始字符串
        比如："哈哈ddd呵呵789哈哈88998哈"
        byte：截取的字符串的字节长度
        比如：10
        invert：是否逆序
        返回："哈哈ddd呵"
        备注：从后往前需要进行逆序
    */
    getFrontLastStr: function (str, byte, invert) {
        // 判断原始字符串为空，则直接返回
        if (str === '') {
        return str
        }
            /* 判断如果字符串的实际字节长度小于等于byte，则直接返回原始字符串 */
        if (Utils.getStrByte(str) <= byte) {
        return str
        }
            // 字符串的实际字节长度定义
        var len = 0
            // 原始字符串分割成数值格式，每个字符均分割，比如["我","的","款",....],依次类推
        var strArr = str.split('')
            // 若从后往前截取，进行逆序
        var str = (invert) ? (strArr.reverse()) : str
            // 是否为单字节字符变量定义
        var isSigByte = ''
            /* 循环字符串中的每一个字符，判断是否为单字节，由此得到字符串字节的前半段 */
            // 定义格式化后的字符串
        var formateStr = ''
        $.each(strArr, function (i) {
                // 获取到当前字符是否为单字节
        isSigByte = Utils.isSingleByte(strArr[i])
                // 单字节字符对应+1，双字节字符对应+2
        len = len + ((isSigByte) ? 1 : 2)
                // 判断如果字节长度小于或等于frontByte，则继续拼接到formateStr中，否则退出循环
        if (len <= byte) {
            formateStr = (invert) ? (strArr[i] + formateStr) : (formateStr + strArr[i])
        } else {

        }
        })
        return formateStr
    },
    /* 方法：获取缩略后的字符串
        str:原始字符串
        比如："哈哈ddd呵呵789哈哈88998哈.xls"
        maxStrByte:字符串允许的最大字节长度（不包括.xls后缀长度）
        比如：20
        frontByte:前半段字符串的允许的最大字节长度（不包括...的长度）
        比如：14
        lastByte:后半段字符串的允许的最大字节长度（不包括...的长度）
        比如：4
        比如："哈哈ddd呵呵789哈哈88998哈.xls"
        返回："哈哈ddd呵呵789...98哈.xls"
        备注：
        */
    getShortStr: function (str, maxStrByte, frontByte, lastByte, lastStr) {
        // 判断原始字符串为空，则直接返回
        if (str === '') {
        return str
        }
            // 获取lastStr之前的字符串
        str = lastStr ? str.substr(0, (str.length - lastStr.length)) : str
            // 定义格式化后的字符串
        var formateStr = ''
            /* 判断如果字符串的实际字节长度小于等于允许的最大字节长度，则直接返回原始字符串 */
        if (Utils.getStrByte(str) <= maxStrByte) {
        formateStr = str + ((lastStr) || '')
        return formateStr
        }
            /* 如果字符串的实际字节长度大于允许的最大字节长度，则通过计算拼接返回格式化后的字符串 */
            // 从前往后循环字符串中的每一个字符，判断是否为单字节，由此得到字符串字节的前半段
        var frontFormateStr = Utils.getFrontLastStr(str, frontByte, false)
            // 从后往前循环字符串中的每一个字符，判断是否为单字节，由此得到字符串字节的后半段（逆序）
        var lastFormateStr = Utils.getFrontLastStr(str, lastByte, true)
            // 得到的各段字符串的拼接,中间用...分隔，代表中间还有n个字符
        formateStr = frontFormateStr + '...' + lastFormateStr + ((lastStr) || '')
        return formateStr
    },
`

export default code
