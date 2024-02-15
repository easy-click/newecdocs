---
title: EasyClick自动化脚本_iOS脚本_iOS免越狱_iOS免硬件_高级功能_热更新
hide_title: false
hide_table_of_contents: false
sidebar_label: 热更新
description: EasyClick 自动化脚本 iOS免越狱 高级功能 代码热更新
keywords: [EasyClick自动化脚本,iOS脚本,iOS免越狱,iOS免硬件,高级功能,热更新 ]
---


# 代码热更新

## 什么是热更新
- 热更新一般用于不用安装程序即可将关键的代码进行更新
- EC的热更新主要用于更新打包后的自动化测试脚本
- 注意: 一定要保持update.json文件和服务端接口返回的版本好一直，否则可能导致异常情况


## EC如何热更新

- 打开工程下面的update.json，内容如下:
- !!![提醒]!!!热更的是编译的iec文件
- !!![提醒]!!!这两句是给沙雕看的,不是让你写进json文件的,json不支持任何注释


```json
{
    "update_url": "http://baidu.com/update",
    "version": "100"
}
```

- 参数解析
    - update_url: 代表服务端的更新接口，需要自己编写服务端接口
    - version: 代表当前脚本的版本号，- version写整数，app会自动做版本大小对比，大于的版本才会提示升级
- 3.15新增参数
:::tip
  3.15.0+版本新增了更多参数<br/>
  如果update_url配置了 http://baidu.com/update，请求地址将会变成
  http://baidu.com/update?ecid=000c109803a&systemVersion=15.2&time=1707107343187&deviceId=6acc090e33f76e&model=iPhone&serialNo=F4GSPUAZHG6W&version=100&deviceName=iPhone7&pkgName=xxx
  - ecid: 设备的ecid，一般改机也不会变化
  - systemVersion: 系统的版本
  - time: 请求时间 毫秒
  - deviceId: 设备的udid
  - model: 机型
  - serialNo: 设备序号
  - deviceName: 设备名称
  - version: 当前的脚本的版本，update.json文件中配置的
  - pkgName: 当前重新的包名，也就是bundleId
  
  
:::
## EC 加载新包

### 客户端请求
- 以上配置好后，打包运行，程序会自动使用GET方式请求 update_url对应的地址并且会带上参数；
  例如 ：http://baidu.com/update?version=100 可以自行在服务端做版本比较，客户端自己也做了版本大小比较

### 服务端返回
- !!![沙雕]!!!热更的是编译的iec文件
- !!![提醒]!!!如无需更新,服务器直接返回空字符串即可,不要返回json
- 服务端返回格式如下：
- 普通更新

```json
  {
    "download_url": "http://baidu.com/aaa.iec",
    "version": "101",
    "dialog":true,
    "msg": "优化部分问题",
    "force": false
  }
```
- 严格方法,校验md5,防止更新失败

```json
  {
    "download_url": "http://baidu.com/aaa.iec",
    "version": "101",
    "dialog":true,
    "msg": "优化部分问题",
    "force": false,
    "md5":"服务器自行校验的iec文件的md5值"
  }
```

- download_url： 代表新包的下载地址
- version：代表新包的版本号
- md5: iec文件的MD5，如果有这个值会强制校验文件的准确性，保证文件一定是完整的
- 返回这样的格式的JSON后，EC会下载最新的IEC包并加载使用。
- dialog: 代表是否用对话框的形式展示，true 代表是对话框，false代表不是
- msg: 对话框中要显示的消息
- force : 代码对话框模式下是否强制更新，true 代表强制更新，无法取消，false 代表不是强制更新

## UI启动更新

- 如果上述配置无误，打开界面会自动更新

## 脚本内热更新
- 脚本执行期间可以做热更新操作，自行编写代码检测
