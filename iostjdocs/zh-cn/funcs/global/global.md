---
title: EasyClick自动化脚本_iOS脚本_iOS免越狱_iOS免硬件_全局模块
hide_title: false 
hide_table_of_contents: false 
sidebar_label: 全局模块
description: EasyClick 自动化脚本 iOS免越狱 全局模块 资源下载 
keywords: [EasyClick自动化脚本,iOS脚本,iOS免越狱,iOS免硬件,全局模块,资源下载 ]
---

# 全局模块

## 说明

全局模块是指直接调用方法就可以使用的模块，无需使用前缀对象名称

## 中控版本

### version 获取应用程序版本

* 获取应用程序版本
* @return 字符串 例如 2.9.0

```javascript
 function main() {
  logd(version())
}

main();
```

## 脚本启停

### exit 退出脚本

```javascript
  exit();
```

### isScriptExit 是否已退出脚本

* 判断EC运行的当前线程是否处于退出状态，可用判断脚本是否退出，或者子线程是否退出
* @return true 已退出

```javascript
function main() {
  try {
    while (true) {
      sleep(1000)
      logd("222")
      if (isScriptExit()) {
        break
      }
    }
    logd("222")
  } catch (e) {
    logd(e)
    if (isScriptExit()) {
      return
    }
  }
}

main();
```

### sleep 暂停执行

* 休眠
* @param miSecond 毫秒

```javascript
function main() {
  sleep(1000);
}

main();
```

### execScript 载入JS

* 执行JS文件或者内容
* eval函数是js自带的，直接传入js内容就行
* @param type 1=文件，2=直接是JS内容
* @param content 路径例如/var/a.js或者js的内容，这个是手机上的路径
* @return 布尔型，true代表执行成功， false代表失败

```javascript
function main() {
  let d = "logd(1)"
  let dx = execScript(2, d);
  while (true) {
    sleep(2000);
    loge("fsadffsad")
  }
}

main();
```

### restartScript 重启脚本 - [未实现]

* 重启脚本，适合无限循环，或者有异常的情况可以再次执行，
* 注意: 该方法威力巨大，请自行控制好是否自动重启，否则只能强杀进程才能停止
* @param path 新的IEC路径，如果不需要可以填写null
* @param stopCurrent 是否停止当前的脚本
* @param delay 延迟多少秒后执行
* @return bool true 代表成功 false 代表失败

```javascript
function main() {
  logd("我是在脚本运行的");
  setStopCallback(function () {
    restartScript(null, false, 3)
  });

//setExceptionCallback(function (){
//    restartScript(null,true,3)
//});
  sleep(1000);
  logd("脚本结束")
}

main();
 ```

##         

## JSON处理

### JSON.stringify 格式化为JSON字符串

* 格式化对象为JSON字符串
* @param 对象
* @return 字符串

> ```javascript
> function main(){
>     var m ={"sss":"a"};
>     var d =JSON.stringify(m);
>     logd(d);
> }
> main();
> ```

### JSON.parse 转换为JSON对象

* 格式化JSON字符串为对象
* @param 字符串
* @return 对象

> ```javascript
> function main(){
>     var m ={"sss":"a"};
>     var d =JSON.stringify(m);
>     d =JSON.parse(d);
>     toast(d);
> }
> main();
> ```

## 监听脚本和服务

### setStopCallback 脚本停止监听 [未实现]

> ```javascript
> function main(){
>     setStopCallback(function (){
>         logd("fdsafsad 我是停止回调")
>      });
>     var result = sleep(1000);
>     if (result){
>         logd("成功");
>     } else {
>         logd("失败");
>     }
> }
> main();
> ```

### setExceptionCallback 脚本异常停止监听 [未实现]

> ```javascript
> function main(){
>     setExceptionCallback(function (msg){
>         logd(" 异常停止消息: "+msg)
>      });
>     var result = sleep(1000);
>     if (result){
>         logd("成功");
>     } else {
>         logd("失败");
>     }
>     //这里有异常抛出
>     result.length();
> }
> main();
> ```

## 日志消息方法

### setLogLevel 设置日志的等级

* 设置日志的等级,可以根据情况关闭或开启日志
* @param level 日志等级，值分别是 debug,info,warn,error,off，排序分别是debug < info < warn < error < off，
* 例如 off代表关闭所有级别日志，debug代表打印包含logd,logi,logw,loge的日志，info代表打印包含logi,logw,loge的日志，warn 代表打印包含logw,loge的日志
* @param displayToast 是否展示toast消息，这个参数未实现
* @return {bool} 布尔型 true代表成功 false代表失败

> ```javascript
>   function main() {
>       setLogLevel("info",false)
>       for (var i = 0; i < 1; i++) {
>           sleep(10);
>           //logd(time()+" debug");
>           logi(time()+" info");
>           //logw(time()+" warn");
>          // loge(time()+" error");
>           logd("--- "+time());
>       }
>       //logd(time()+"  222");
>   }
>   main();
> ```

### logd 调试日志

* 调试日志
* @param msg 消息字符串

> ```javascript
> 
> 
> function main(){
>     logd("msg");
>     //可变参数写法
>     logd("我是消息{},{}","测试1",2)
> }
> main();
> ```

### loge 错误日志

* 错误日志
* @param msg 消息字符串

> ```javascript
> function main(){
>     loge("msg");
>     //可变参数写法
>     loge("我是消息{},{}","测试1",2)
> }
> main();
> ```

### logw 警告日志

* 警告日志
* @param msg 消息字符串

> ```javascript
> function main(){
>     logw("msg");
>     //可变参数写法
>     logw("我是消息{},{}","测试1",2)
> }
> main();
> ```

### logi 信息日志

* 信息日志
* @param msg 消息字符串

> ```javascript
> function main(){
>     logi("msg");
>     //可变参数写法
>     logi("我是消息{},{}","测试1",2)
> }
> main();
> 
> ```

## 读取IEC包资源

### readIECFileAsString 读取IEC内部文件为字符串

* 读取IEC文件中的资源文件，并返回字符串
* @param fileName 文件名称，如果放在某个文件夹下 需要加上文件名称
* @return {string} 如果是null代表没内容

> ```javascript
> function main(){
>     var testData = readIECFileAsString("res/a.txt");
>    logd(testData)
> }
> main();
> 
> ```

### readResString 读取字符串资源

* 读取res文件夹中的资源文件,并返回字符串
* @param fileName 文件名称，不要加res前缀
* @return string 如果是null代表没内容

> ```javascript
> function main(){
>     var testData = readResString("a.txt");
> }
> main();
> 
> ```

### readResAutoImage 读取Image资源

* 读取res文件夹中的资源文件，并返 AutoImage 图片对象
* @param fileName 文件名称，不要加res前缀
* @return string 如果是null代表没内容

> ```javascript
> function main(){
>     var b = readResAutoImage("img/a.png");
> }
> main();
> 
> ```

### saveResToFile 保存资源为文件

* 保存res文件夹中的资源文件到指定的路径
* @param fileName 文件名称，不要加res前缀
* @param path 要保存到的路径地址，例如D:/aa.txt
* @return boolean|布尔型 true代表保存成功

> ```javascript
> function main(){
>     var b = saveResToFile("img/a.png","D:/a.png");
> }
> main();
> 
> ```

### findIECFile 查找IEC的文件

* 查找IEC的文件
* @param dir 文件夹名称，null代表只读res/文件夹，没有默认是res文件夹，可以是类似 res/aaa/这样的文件夹
* @param names 文件名称前缀,null代表不匹配， 例如aaa,多个前缀用|分割，例如 aaa|bb|cc
* @param ext 文件扩展名 ,null代表不匹配，例如.png,多个扩展用|分割，例如 .png|.jpg|.bmp
* @param recursion 是否递归子目录，true代表递归
* @return {array} 文件名称JSON数组

> ```javascript
> function main(){
> 	let res = findIECFile("res/","dd2",".png|.jpg",true)
> 	logd("findIECFile {}",JSON.stringify(res));
> 
> }
> main();
> 
> ```

## 自动化服务相关

### isServiceOk 自动化服务状态

* 自动化服务是否正常
* @return true或者false

> ```javascript
 > function main(){
 >     var result = isServiceOk();
 > }
 > main();
 > ```

### startEnv 启动自动化

* 启动自动化服务环境,这个没有实现，根据函数打印的实际日志操作
* @return true或者false

> ```javascript
 > function main(){
 >     var result = startEnv();
 > }
 > main();
 > ```

## 时间相关

### time 毫秒级当前时间戳

* !!!沙雕提醒!!!默认时间戳是秒,不要直接比较

* 毫秒级当前时间戳
* @return {long} 毫秒级别的long时间

> ```javascript
> function main(){
>    logd(time());
> }
> main();
> ```

### timeFormat 格式化时间

* 格式化时间函数例如：```yyyy-MM-dd HH:mm:ss```
* @return {string} 格式化之后的当前时间

> ```javascript
> function main(){
>    logd(timeFormat("yyyy-MM-dd HH:mm:ss"));
> }
> main();
> ```

### console.time 计时开始

* 计时开始,和timeEnd成对出现计算用时
* @param label 标签
* @return {long} 当前时间

> ```javascript
> function main(){
>     console.time("1");
>     sleep(1000)
>     logd(console.timeEnd("1"))
> }
> main();
> ```

### console.timeEnd 计时结束

* 计时结束,和timeEnd成对出现计算用时
* @param label 标签
* @return {long} 与计时开始的差值

> ```javascript
> function main(){
>     console.time("1");
>     sleep(1000)
>     logd(console.timeEnd("1"))
> }
> main();
> ```

## 其他

### random 随机函数[未实现]

* 取得某个范围的随机值
* @param min 最小值
* @param max 最大值
* @return 整型 在min和max中间的值, 包含最大和最小值

> ```javascript
> function main(){
>  var result = random(100,1000);
>  sleep(result);
> }
> main();
> ```
