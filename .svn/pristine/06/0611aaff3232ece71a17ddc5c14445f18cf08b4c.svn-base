let code = {}

code.verifyMobile = `
/**
    * 方法名：手机号码验证
    * @param {string} mobile - 手机号码
    * 备注：
    *   返回：""：手机号码为空，不进行验证；
    *        true：手机号码正确
    *        false：手机号码错误
    */
    verifyMobile: function(mobile){
        let m_pattern = /^(0|86|17951)?(13[0-9]|15[012356789]|17[0135678]|18[0-9]|19[0-9]|16[0-9]|14[579])[0-9]{8}$/;
        mobile = mobile.replace(/(^\s*)|(\s*$)/g, "");
        if(mobile===""){
            return "";
        }else{
            return m_pattern.test(mobile);
        }
    }
`

code.verifyMail = `
/**
    * 方法名：电子邮箱验证
    * @param {string} mail - 电子邮箱
    * 备注：
    *   返回：""：电子邮箱为空，不进行验证；
    *        true：电子邮箱正确
    *        false：电子邮箱错误
    */
    verifyMail: function(mail){
        let m_pattern = /^(0|86|17951)?(13[0-9]|15[012356789]|17[0135678]|18[0-9]|19[0-9]|16[0-9]|14[579])[0-9]{8}$/;
        mail = mail.replace(/(^\s*)|(\s*$)/g, "");
        if(mail===""){
            return "";
        }else{
            return m_pattern.test(mail);
        }
    }
`
code.isChinese = `
    /* 方法：判断是否全为中文的字符串
    str:要判断的字符串
    比如：
        我dfasdfkl234
        结果：返回 false
        备注：
        */
    isChinese: function (str) {
        var c_pattern = /^[\u3220-\uFA29]+$/
        if (!c_pattern.test(str.replace(/(^\s*)|(\s*$)/g, ''))) {
            return false
        }
        return true
    },
`
code.isNumStr_ = `
    /* 方法：判断是否只包含数字、字母、下划线
    str:要判断的字符串
    比如：
        我dfasdfkl234
        结果：返回 false
        备注：
        */
    isNumStr_: function (str) {
        var s_pattern = /^\w+$/
        if (!s_pattern.test(str.replace(/(^\s*)|(\s*$)/g, ''))) {
            return false
        }
        return true
    },
`

code.isSingleByte = `
    /* 方法：判断是否为单字节字符
    char：要判断的字符
    比如："我"
    返回：false
    备注：
        */
    isSingleByte: function (char) {
        return /^[\u0000-\u00ff]$/.test(char)
    },
`

export default code
