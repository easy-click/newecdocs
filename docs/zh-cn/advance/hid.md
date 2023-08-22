---
title: EasyClick安卓文档_安卓手机自动化脚本_HID
hide_title: false
hide_table_of_contents: false
sidebar_label: HID主控用法
description: EasyClick 代码热更新,无需无障碍和USB调试实现自动化
keywords: [EasyClick,手机自动化脚本,自动化软件,脚本热更新,代码热更新,无需无障碍和USB调试实现自动化]
---
# HID主控用法
:::tip
HID全称叫 (Human Interface Device)人机接口设备,这个过程是需要将手机插入电脑，在电脑上启动一个EasyClick HID主控程序
:::
## 下载软件
- 下载EasyClick HID主控程序，并在电脑上运行，下载网盘：https://pan.baidu.com/s/124sTYQAZkedgfnTv3iFTZg 提取码: 7bhy
  - 路径是安卓资源文件夹下的 EasyClick-HID中控-xxx.exe 文件，下载即可运行
- Windows系统请下载libusb-win32驱动程序，地址: http://sourceforge.net/projects/libusb-win32/files/, 也可以到我们的网盘，安卓资源文件夹下载 libusb-win32-devel-filter-1.2.7.3.exe 文件安装
## 运行软件
- 双击exe文件后，会有命令框出现
- 在浏览器打开 http://127.0.0.1:8988 即可看到如下的界面，会列出当前电脑链接的usb设备
<img src='/androidimg/hid-1.png'  />

## 激活HID设备
- 点击HID主控程序的激活HID按钮,会提示正在激活设备
- 如果是第一次激活手机会弹出下图提示<br/>
  <img src='/androidimg/hid-2.png'  width="300"/>
- 请勾选 - 默认情况下用于该USB配件
- 点击确定
- 完成后，在EC 的系统设置中，HID设置可以看到设备序列号，就代表成功
  <br/>
  <img src='/androidimg/hid-3.png'  width="300"/>
## 重置HID设备
- 点击重置HID设备，会取消手机默认的设置，然后需要重新激活设备

:::tip
  - 激活设备后，就可以进入开发脚本阶段，开发脚本第一步就是要设置一下HID主控网址，一般使用局域网地址，例如你的HID主控运行在电脑上，
  电脑ip是 192.168.1.3, 那么主控网址就是 http://192.168.1.3:8988, 也可以使用frp软件将端口映射到外网进行请求
  - 如果将手机数据线拔掉，再次插入，激活设备时手机可能会触发二次授权弹窗，也是需要手动确认的  
:::
