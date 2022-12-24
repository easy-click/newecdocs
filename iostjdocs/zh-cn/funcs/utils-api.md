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
  var r = utils.setClipboardText("22222",1);
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

## 随机
### utils.randomInt 随机整型数据 [未实现]

* 随机整型数据
* @param length 位数，要随机产生多少位的整型数据
* @return 整型

```javascript

function main() {
  var r = utils.randomInt(2);
}

main();
```

