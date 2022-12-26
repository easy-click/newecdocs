---
title: 工具函数 
description: EasyClick 自动化脚本 iOS免越狱 工具函数 
keywords: [EasyClick 自动化脚本 iOS免越狱 工具函数 ]
---

## 说明

## 剪切板

### setClipboardText 设置剪切板

* 设置剪贴板文本，注意：可以开启画中画或者 takeMeToFront 使本程序在前台
* @param text 文本
* @param type 1 文本 2 链接
* @return {boolean} true 代表成功，false 代表失败

```javascript

function main() {
  takeMeToFront()
  var r = utils.setClipboardText("22222", 1);
  logd(r)
}

main();
```

### getClipboardText 读取剪切板

* 读取剪贴板文本，注意：可以开启画中画或者 takeMeToFront 使本程序在前台
* @return {string} 剪切板的数据

```javascript

function main() {
  takeMeToFront()
  var r = utils.getClipboardText();
  logd(r)
}

main();
```

## 打开URL

### openUrl 打开URL

* 打开url，注意：需要重新在前台运行，先调用 takeMeToFront 函数，将本程序放前台
* @param url url地址
* {boolean} true 代表成功 false 代表失败

```javascript

function main() {
  takeMeToFront()
  var r = utils.openUrl("http://baidu.com");
  logd(r)
}

main();
```

## 相册相关

### saveImageToAlbum 保存图像到相册

* 保存图片到相册中去
* @param img AutoImage对象
* {boolean} true 代表成功 false 代表失败

```javascript
function main() {
  let img = image.captureFullScreen()
  logd("img getHeight " + image.getHeight(img))
  logd("img getWidth " + image.getWidth(img))
  var r = utils.saveImageToAlbum(img);
  logd(r)
}

main();
```

### saveImageToAlbumPath 保存图像路径到相册

* 保存图像路径到相册
* @param path 文件的路径
* {boolean} true 代表成功 false 代表失败

```javascript
function main() {
  let url = "http://192.168.2.10:8199/resource/image/wx.png"
  let box = file.getInternalDir("documents")
  logd("sandbox " + box)
  let filex = box + "/bb.png"
  logd("file " + filex)
  let r = http.downloadFile(url, filex, 10000, null)
  logd("download " + r)
  let rx = utils.saveImageToAlbumPath(filex)
  logd("r " + rx)
}

main();
```

### saveVideoToAlbumPath 保存视频路径到相册

* 通过路径保存视频到相册中去
* @param path 视频文件的路径
* {boolean} true 代表成功 false 代表失败

```javascript
function main() {
  let url = "http://192.168.2.10:8199/resource/image/wx.mp4"
  let box = file.getInternalDir("documents")
  logd("sandbox " + box)
  let filex = box + "/bb.mp4"
  logd("file " + filex)
  let r = http.downloadFile(url, filex, 10000, null)
  logd("download " + r)
  let rx = utils.saveVideoToAlbumPath(filex)
  logd("r " + rx)
}

main();
```


## 随机

### utils.randomInt 随机整型数据

* 随机整型数据
* @param length 位数，要随机产生多少位的整型数据
* @return 整型

```javascript

function main() {
  var r = utils.randomInt(2);
}

main();
```

