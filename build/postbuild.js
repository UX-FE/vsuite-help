'use strict'
const fs = require('fs');
const path = require('path');
const chalk = require('chalk')
const __dirDist = path.resolve(__dirname, "../dist");
const replaceString = '<script src=js/app';
const targetStr = '<script src=/vsuite-help/js/app';
const replaceString0 = '<script src=js/chunk-vendors';
const targetStr0 = '<script src=/vsuite-help/js/chunk-vendors';
const replaceString1 = '<link href=css/app';
const targetStr1 = '<link href=/vsuite-help/css/app';
const replaceString10 = '<link href=css/chunk-vendors';
const targetStr10 = '<link href=/vsuite-help/css/chunk-vendors';
const replaceString2 = '<link href=js/chunk-vendors';
const targetStr2 = '<link href=/vsuite-help/js/chunk-vendors';
const replaceString20 = '<link href=js/app';
const targetStr20 = '<link href=/vsuite-help/js/app';
const replaceString3 = '<link rel=icon href=favicon.ico';
const targetStr3 = '<link rel=icon href=/vsuite-help/favicon.ico';
fs.readFile( __dirDist +'/index.html','utf-8',(err, data)=>{    
    if(err) {
        console.log('error:' + err);
        return;
    };
    let result = data
    .replace(replaceString, targetStr)
    .replace(replaceString0, targetStr0)
    .replace(replaceString1, targetStr1)
    .replace(replaceString10, targetStr10)
    .replace(replaceString2, targetStr2)
    .replace(replaceString20, targetStr20)
    .replace(replaceString3, targetStr3);
    fs.writeFile(__dirDist + '/index.html', result, 'utf8', function (err) {
        if (err)  console.log(err);
        return;
   });
});
const finishedTime = new Date();
console.log(chalk.yellow(`模板替换完成：${finishedTime.getFullYear()}-${finishedTime.getMonth()+1}-${finishedTime.getDate()} ${finishedTime.getHours()}:${finishedTime.getMinutes()}:${finishedTime.getSeconds()}`)); 