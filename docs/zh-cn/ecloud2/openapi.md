---
title: EasyClick云控文档_安卓云控_iOS云控_抖音云控_快手云控_游戏云控_云控开放API
hide_title: false
hide_table_of_contents: false
sidebar_label: 云控开放API
description: EasyClick 云控平台专门用于用于管理脚本、任务, 安装云控非常简单，使用宝塔一键安装mysql，redis套件，然后复制云控程序到网站目录，更改mysql配置，启动ecloud二进制文件即可
keywords: [EasyClick,手机自动化脚本,自动化软件,云控平台安装,抖音云控,快手云控,游戏云控]
---
# 云控开放API
## 任务控制接口
- 说明：用于对接三方系统控制EC官方云控的接口，包括启停任务、参数设置、设备增减等

POST : 云控地址/openapi/changeTask

例如: http://192.168.1.182:8099/openapi/changeTask

Content-Type: application/json

```json

{
  "dataSecret":"后台配置的API云控通信密钥", // 默认是123456
  "taskId":"1",// 任务ID，在云控建好的
	"status":"0",// 1 停止本地，2 停止远程 0 开启
	"addDevices":"001,002,003",//需要增加执行的设备
    "removeDevices":"007,009",//需要减少执行的设备
	"addParam":{
    //增加的参数 用于下发给脚本，相当于云控中的参数设置功能
    "ke1":["111","222"],
    "ke2":["111","222"]
  },
  "removeParam":["ke1"]
}
```



```flow
title: 下单自动执行流程
participant 客户
participant 下单系统
participant 云控系统
participant 设备

客户->下单系统: 客户下单并支付完成
下单系统->云控系统: 调用(/api/changeTask) 执行任务某个任务，\n并加入某写设备和参数
云控系统->云控系统: 改变任务状态\n参数、设备等
云控系统->设备: 下发任务到设备
设备->设备: 循环执行脚本
设备->云控系统: 调用(/api/changeTask)达到条件\n将自己从任务的设备中移出


```



