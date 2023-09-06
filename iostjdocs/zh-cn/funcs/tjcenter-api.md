---
title: EasyClick自动化脚本_iOS脚本_iOS免越狱_iOS免硬件_激活器函数 
hide_title: false 
hide_table_of_contents: false 
sidebar_label: 激活器函数
description: EasyClick 自动化脚本 iOS免越狱 激活器函数 
keywords: [EasyClick自动化脚本,iOS脚本,iOS免越狱,iOS免硬件,激活器函数 ]
---

# 激活器函数

## 说明

- 激活器模块函数主要是通过运行在电脑设备的激活器对手机进行操作
- 激活器函数模块的对象前缀是 tjCenter
- 调用这个模块，需要手机和激活器程序在同一个局域网，网络互通才行，并且手机通过WIFI或者USB方式链接到电脑
- 脱机激活器 请看 [高级功能 - 脱机激活器教程](/iostjdocs/zh-cn/advance/tjcenter)

## tjCenter.setCenterUrl 设置脱机激活器地址

* 设置脱机激活器所在的地址
* 支持EC iOS脱机版本2.0+
* @param url 激活器地址
* @return {string} null或者"" 代表成功，其他代表错误消息

```javascript

function main() {
  // 一般激活器固定的端口是 8020，只需要修改激活器电脑IP即可
  let xx = tjCenter.setCenterUrl("http://192.168.2.6:8020");
  logd(xx);
}

main();
```

## device.getDeviceName 获取设备名称

* 获取设备名称，就是手机的名称
* @return string

```javascript
function main() {
  var xx = device.getDeviceName();
  logd(xx);
}

main();
```


## device.getDeviceName2 获取设备名称2

* 获取设备名称, 16+ iOS无法获取，请使用这个函数
* EC 脱机 2.0.0+以上可以使用，需要配合脱机版激活器才能正确获取到设备名称
* 请看 [高级功能 - 脱机激活器教程](/iostjdocs/zh-cn/advance/tjcenter)
* @return 字符串

```javascript

function main() {
  var xx = device.getDeviceName2();
  logd(xx);
}

main();
```

## device.getScreenWidthHeight 屏幕宽度高度
* 屏幕宽度高度
* @return 整型

```javascript

function main() {
  let aa = device.getScreenWidthHeight()
  logd("getScreenWidthHeight "+aa)
  let bb = aa.split(",")
  logd("width "+bb[0])
  logd("height "+bb[1])
}

main();
```


## device.getScreenWidth 屏幕宽度
* [已过期]
* 取得屏幕宽度
* @return 整型

```javascript

function main() {
  var width = device.getScreenWidth();
  logd(width);
}

main();
```

## device.getScreenHeight 屏幕高度

* [已过期]
* 取得屏幕高度
* @return 整型

```javascript

function main() {
  var height = device.getScreenHeight();
  logd(height);
}

main();
```

## device.getScale 屏幕缩放比

* 屏幕缩放比
* @return {float}

```javascript

function main() {
  var d = device.getScale();
  logd(d);
}

main();
```

## device.getModel 取得机型

* 取得手机机型
* @return 字符串

```javascript

function main() {
  var model = device.getModel();
  toast(model);
}

main();
```

## device.getOSVersion 取得手机版本号

* @return 字符串

```javascript

function main() {
  var osVersion = device.getOSVersion();
  logd(osVersion);
}

main();
```

## device.getBattery 取得电量

* 取得电量
* @return int型

```javascript

function main() {
  var res = device.getBattery();
  logd(res);
}

main();
```

## device.isCharging 是否正在充电

* 是否正在充电
* @return 布尔型

```javascript

function main() {
  var res = device.isCharging();
  logd(res);
}

main();
```

