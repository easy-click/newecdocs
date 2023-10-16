---
title: 版本记录 
description: EasyClick 自动化脚本 iOS免越狱 iOS免硬件 iOS脚本 版本记录 
keywords: [EasyClick 自动化脚本 iOS免越狱 iOS免硬件 iOS脚本 版本记录  ]
---

## 最新发布版本

### 3.2.0

**发布时间: 2023-10-16**

```text
- 新增脱机版激活器初始化模式2，初始化更快捷
- 新增脱机激活器重置USB功能
- 新增 downloadFile2 断点续传下载文件函数
- 修复 downloadFile 导致的崩溃问题
- 优化部分功能
- [脱机 3.0.0+版本需要的 6.20.0 以上版本的iOS开发插件]
- [建议使用idea配置代码编译期间混淆后[参考ec安卓的混淆配置]]
- 2.0.0+需要配合脱机版激活器使用，详情请看 高级功能 - 脱机激活器教程
```

## 历史版本



### 3.1.0

**发布时间: 2023-10-13**

```text
- 新增网络验证模块
- 修复热更新导致的崩溃卡住问题
- 修复云控链接地址不对导致崩溃问题
- 修复云控获取任务信息函数问题
- 优化sleep函数，防止长时间占用资源
- 优化获取节点时间
- 优化部分功能
- [脱机 3.0.0+版本需要的 6.20.0 以上版本的iOS开发插件]
- [建议使用idea配置代码编译期间混淆后[参考ec安卓的混淆配置]]
- 2.0.0+需要配合脱机版激活器使用，详情请看 高级功能 - 脱机激活器教程
```



### 3.0.0

**发布时间: 2023-10-05**

```text
- 更改iec加密算法,提高iec安全性
- 修复二值化找色问题
- 优化找图找色函数
- 优化findImageByColorEx函数
- [脱机 3.0+版本需要的 6.20.0 以上版本的iOS开发插件]
- [建议使用idea配置代码编译期间混淆后[参考ec安卓的混淆配置]]
- 2.0.0+需要配合脱机版激活器使用，详情请看 高级功能 - 脱机激活器教程
```




### 2.2.0

**发布时间: 2023-09-26**

```text
- 新增脱机版接入云控系统
- 新增脱机版接入云控模块函数
- 新增IDEA打包企业云控版本
- 新增 restartScript 函数
- 新增 setStopCallback 函数
- 新增 setExceptionCallback 函数
- 优化脱机版本授权信息读取
- 优化部分功能
- [建议使用idea配置代码编译期间混淆后[参考ec安卓的混淆配置]]
- 2.0.0+需要配合脱机版激活器使用，详情请看 高级功能 - 脱机激活器教程
```

### 2.1.2

**发布时间: 2023-09-15**

```text
- 修复idMatch函数
- 优化部分功能
- [建议使用idea配置代码编译期间混淆后[参考ec安卓的混淆配置]]
- 2.0.0+需要配合脱机版激活器使用，详情请看 高级功能 - 脱机激活器教程
```

### 2.1.0

**发布时间: 2023-09-10**

```text
- 新增点击、滑动带压力值的函数
- 新增激活器页面换绑和转让授权
- 修复定位闪退问题
- 修复脱机激活器登录登录用户名长度限制问题
- [建议使用idea配置代码编译期间混淆后[参考ec安卓的混淆配置]]
- 2.0.0+需要配合脱机版激活器使用，详情请看 高级功能 - 脱机激活器教程
```
### 2.0.0

**发布时间: 2023-09-06**

```text
- 新增device.getDeviceName2函数
- 实现device.getDeviceId函数
- 新增getDeviceExpTime获取授权时间
- 新增sendDingDingMsg钉钉告警函数
- 新增tjCenter模块
- 修复主程序偶尔启动黑屏问题
- 优化部分功能
- [建议使用idea配置代码编译期间混淆后[参考ec安卓的混淆配置]]
- 2.0.0+需要配合脱机版激活器使用，详情请看 高级功能 - 脱机激活器教程
```

### 1.7.0

**发布时间: 2023-08-31**

```text
- 修复time函数只返回3位数问题
- 优化file.readAllLines问题
- 优化http.request必须加timeout参数问题
- 修复setOrientation函数问题
- 修复http.post参数是数字的问题
- 优化device.getDeviceName函数
- [建议使用idea配置代码编译期间混淆后[参考ec安卓的混淆配置]]
```

### 1.6.0

```text
- 新增setPipCtrlScript函数，用于控制与相机的冲突
- 新增设置页面权限申请功能
- 修复图色ex结尾函数问题
- 修复readAllLines函数问题
- 新增旋转图像函数rotateImage
- 修复图片转base64问题
- [建议使用idea配置代码编译期间混淆后[参考ec安卓的混淆配置]，少量在实际生产中使用，该版本非稳定版本]
```

### 1.5.0

```text
- 修复多线程操作图色同步的问题
- 新增 device.getScreenWidthHeight 同时获取宽高
  - getScreenWidth,getScreenHeight 标记为过期，有临界值问题
- 新增 getOrientation 获取方向函数
- 新增 setOrientation 设置方向函数
- 新增 setLogViewSizeEx,showLogWindow,closeLogWindow 函数
- 优化部分功能
- [建议使用idea配置代码编译期间混淆后[参考ec安卓的混淆配置]，少量在实际生产中使用，该版本非稳定版本]

```

### 1.4.3

```text
- 修复findImageByColor问题
- 修复readResAutoImage资源不存在返回值问题
- 修复saveResToFile保存文件的问题
- 优化部分功能
- 优化部分功能
- [建议使用idea配置代码编译期间混淆后[参考ec安卓的混淆配置]，少量在实际生产中使用，该版本非稳定版本]
```

### 1.4.0

```text
- 新增多worker对节点操作自动隔离功能
- 修复UI在无网络或者4G网络不展示问题
- 修复重复worker名称造成死循环问题
- 优化部分功能
- [建议使用idea配置代码编译期间混淆后[参考ec安卓的混淆配置]，少量在实际生产中使用，该版本非稳定版本]
```

### 1.3.0

```text
- 脱机版本支持12.0+以上版本，均可安装,12 ~ 15范围使用[激活器或中控-年后开发]加持启动代理，15以上可以点击图标启动
    - 注意函数使用:
        - 1、使用apple vision的ocr需要13.0+
        - 2、使用日志悬浮窗需要15.0+
- 新增 require 函数
- 新增boundsFilter节点过滤条件
- 新增worker模块代替多线程
- 新增getCurrentWorkerName函数
- 新增idea抓节点设置boundsFilter属性
- 新增热更新功能
- 新增websocket功能
- 新增设置界面恢复默认脚本、清除所有UI配置功能
- 新增utils.fileMd5函数
- 修复idea找图代码生成的method不对问题
- 修复打包脚本覆盖升级问题
- 修复image.clip函数问题
- 修复lockNode函数问题
- 修复 window.ec.call 报错问题 
- 修复execScript动态执行脚本type函数问题
- 移动ui参数配置到Documents中，可爱思读取备份
- [建议使用idea配置代码编译期间混淆后，少量在实际生产中使用，该版本非稳定版本]
```

### 1.2.0

```text
- 完善ocr功能
- 完善图像二值化函数
- 完善普通版打包功能
- 开放接口配合USB版本的功能，剪切板、打开url、相册操作等
- [建议少量在实际生产中使用，该版本非稳定版本]
```

### 1.1.0

```text
- 完善iOS脱机版本以下函数:
- readResAutoImage
- utils.getRangeInt,random
- http.request
- utils.saveImageToAlbum
- utils.saveImageToAlbumPath
- utils.saveVideoToAlbumPath
- image.isRecycled
- image.saveTo
- image.toBase64Format
- image.clip
- image.pixel
- image.getWidth
- image.getHeight
- image.argb
- [不建议在实际生产中使用，该版本非稳定版本]
```

### 1.0.0

```text
- 初始化版本
- [不建议在实际生产中使用，该版本非稳定版本]
```


