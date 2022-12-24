---
title: H5 JS与UI交互 
description: EasyClick 自动化脚本 iOS免越狱 iOS免硬件 iOS脚本 安装开发插件 资源下载
keywords: [EasyClick 自动化脚本 iOS免越狱 iOS免硬件 iOS脚本 安装开发插件 资源下载 ]
---

## 说明

- 本章节主要讲述JS与UI元素进行交互

## 如何使用

- 在工程的layout文件夹下新建一个ui.js和index.html文件，内容为

```javascript
function main() {
  ui.layout("index", "index.html");
}

main();
```

- 以上的操作即可完成一个简单的展示 index.html 的操作

## H5调用ec的函数

- 新建一个iOS脱机版工程，默认的例子都在里面

## EC H5预定义函数

### 自动化服务是否正常 isServiceOk

```javascript
// H5中调用，不是脚本
// 异步回调
window.ec.isServiceOk(function (resp) {
  // resp = true 代表自动化服务正常
});
```

### 启动脚本 start

```javascript
// H5中调用，不是脚本
// 异步回调
window.ec.start(function (resp) {
  // resp = true 代表正常
});
```

### 停止脚本 stopTask

```javascript
// H5中调用，不是脚本
// 异步回调
window.ec.stopTask(function (resp) {
  // resp = true 代表正常
});
```

### 脚本是否运行 isScriptRunning

```javascript
// H5中调用，不是脚本
// 异步回调
window.ec.isScriptRunning(function (resp) {
  // resp = true 代表正常
});
```

### 获取UI配置 getConfig

```javascript
// H5中调用，不是脚本
// 异步回调
window.ec.getConfig("key", function (resp) {
  console.log(resp)
});

```

### 移出UI配置 removeConfig

```javascript
// H5中调用，不是脚本
// 异步回调
window.ec.removeConfig("key", function (resp) {
  console.log(resp)
});

```

### 保存UI配置 saveConfig

```javascript
// H5中调用，不是脚本
// 异步回调
window.ec.saveConfig("key","data", function (resp) {
  console.log(resp)
});

```


### 获取所有UI配置 getAllConfig

```javascript
// H5中调用，不是脚本
// 异步回调
window.ec.getAllConfig(function (resp) {
  console.log(resp)
});

```


## 扩展H5功能

### registeH5Function 向H5注入扩展函数

* 向网页中注入一个JS函数，H5可以调用该函数，以实现脚本和HTML的互通扩展
* @param funcName 注入的函数名称
* @param callback 回调 常见例子
* @return 布尔型 true 代表成功，false 代表失败

```javascript
 // ui.js中的注入
function main() {
  //UI中进行注入新的扩展
  ui.registeH5Function("customFunction", function (data) {
    logd("h5 call-> " + data);
    //返回给网页的数据
    return new Date().toString()
  })
  ui.layout("main", "main.html");
}

main();
  ```

网页中的调用

 ```html
 <!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <title>Title</title>
</head>
<body>
<button onclick="test()">测试扩展函数</button>
<script>
    function test() {
        //调用ui.js注入进来的扩展
        window.ec.call('customFunction',
                JSON.stringify({'action': '111'}),
                function (resp) {
                    console.log("ddd  " + resp)
                });

    }
</script>
</body>
</html>
  ```
