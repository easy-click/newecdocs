---
title: HID事件 
description: EasyClick 自动化脚本 android免root HID事件 
keywords: [EasyClick 自动化脚本 android免root HID事件  ]
---

## 说明

- HID事件模块运行的所有函数，是需要使用EasyClick HID主控程序激活HID后才可以调用的
- HID主控程序使用请看 高级功能 - HID主控用法 : [HID主控](/docs/zh-cn/advance/hid)
- 代理事件模块的对象前缀是 hidEvent，例如 hidEvent.click 这样调用

### setHidCenter 设置HID主控地址

* 设置HID主控地址
* 适配版本 EC 安卓 9.15.0+
* @param hidCenterUrl HID主控程序运行的网址
* @return {string} null 代表成功，其他代表错误消息

```javascript

function main() {
  let i = initHid()
  if (!i) {
    return
  }
}

function initHid() {
  // 先设置一下局域网内的HID程序地址，也可以通过FRP软件映射到外网，然后填写外网地址
  hidEvent.setHidCenter("http://192.168.2.14:8988")
  hidEvent.closeUsbDevice();
  let init = hidEvent.initUsbDevice()
  if (init == null) {
    logd("初始化HID设备成功")
  } else {
    loge("初始化失败:" + init);
    return false
  }
  // 开始矫正屏幕坐标
  let po = hidEvent.checkFirstPoint()
  if (po == null) {
    logd("矫正坐标成功")
  } else {
    loge("矫正坐标失败:" + init);
    return false
  }
  return true;
}

main();

```

### initUsbDevice 初始化HID设备

* 初始化HID设备
* 适配版本 EC 安卓 9.15.0+
* @return {string} null 代表成功，其他代表错误消息

```javascript

function main() {
  let i = initHid()
  if (!i) {
    return
  }
}

function initHid() {
  // 先设置一下局域网内的HID程序地址，也可以通过FRP软件映射到外网，然后填写外网地址
  hidEvent.setHidCenter("http://192.168.2.14:8988")
  hidEvent.closeUsbDevice();
  let init = hidEvent.initUsbDevice()
  if (init == null) {
    logd("初始化HID设备成功")
  } else {
    loge("初始化失败:" + init);
    return false
  }
  // 开始矫正屏幕坐标
  let po = hidEvent.checkFirstPoint()
  if (po == null) {
    logd("矫正坐标成功")
  } else {
    loge("矫正坐标失败:" + init);
    return false
  }
  return true;
}

main();

```

### checkFirstPoint 矫正HID坐标

* 调用 initUsbDevice 再调用这个函数
* 适配版本 EC 安卓 9.15.0+
* @return {string} null 代表成功，其他代表错误消息

```javascript

function main() {
  let i = initHid()
  if (!i) {
    return
  }
}

function initHid() {
  // 先设置一下局域网内的HID程序地址，也可以通过FRP软件映射到外网，然后填写外网地址
  hidEvent.setHidCenter("http://192.168.2.14:8988")
  hidEvent.closeUsbDevice();
  let init = hidEvent.initUsbDevice()
  if (init == null) {
    logd("初始化HID设备成功")
  } else {
    loge("初始化失败:" + init);
    return false
  }
  // 开始矫正屏幕坐标
  let po = hidEvent.checkFirstPoint()
  if (po == null) {
    logd("矫正坐标成功")
  } else {
    loge("矫正坐标失败:" + init);
    return false
  }
  return true;
}

main();

```

### closeUsbDevice 关闭HID设备

* 关闭HID设备
* 适配版本 EC 安卓 9.15.0+
* @return {string} null 代表成功，其他代表错误消息

```javascript

function main() {
  let i = initHid()
  if (!i) {
    return
  }
}

function initHid() {
  // 先设置一下局域网内的HID程序地址，也可以通过FRP软件映射到外网，然后填写外网地址
  hidEvent.setHidCenter("http://192.168.2.14:8988")
  hidEvent.closeUsbDevice();
  let init = hidEvent.initUsbDevice()
  if (init == null) {
    logd("初始化HID设备成功")
  } else {
    loge("初始化失败:" + init);
    return false
  }
  // 开始矫正屏幕坐标
  let po = hidEvent.checkFirstPoint()
  if (po == null) {
    logd("矫正坐标成功")
  } else {
    loge("矫正坐标失败:" + init);
    return false
  }
  return true;
}

main();

```

### clickPoint 点击坐标

* 适配版本 EC 安卓 9.15.0+
* @param x x坐标
* @param y y坐标
* @return {string} null 代表成功，其他代表错误消息

```javascript
function main() {
  let i = initHid()
  if (!i) {
    return
  }
  // 点击坐标 0,0的地方
  let click = hidEvent.clickPoint(device.getScreenWidth(), device.getScreenHeight())
  if (click == null) {
    logd("点击坐标成功")
  } else {
    console.log("点击坐标失败" + click)
  }
  sleep(1000)
  let doub = hidEvent.doubleClickPoint(300, 400)
  if (doub == null) {
    logd("双击坐标成功")
  } else {
    console.log("双击坐标失败" + doub)
  }

  sleep(1000)
  let ps = hidEvent.press(600, 800, 2000)
  if (ps == null) {
    logd("长按 坐标成功")
  } else {
    console.log("长按 坐标失败" + ps)
  }

  sleep(1000)
  let ps1 = hidEvent.press(device.getScreenWidth(), device.getScreenHeight(), 2000)
  if (ps1 == null) {
    logd("长按 坐标成功")
  } else {
    console.log("长按 坐标失败" + ps1)
  }


  mtouch()


}

function initHid() {
  // 先设置一下局域网内的HID程序地址，也可以通过FRP软件映射到外网，然后填写外网地址
  hidEvent.setHidCenter("http://192.168.2.14:8988")
  hidEvent.closeUsbDevice();
  let init = hidEvent.initUsbDevice()
  if (init == null) {
    logd("初始化HID设备成功")
  } else {
    loge("初始化失败:" + init);
    return false
  }
  // 开始矫正屏幕坐标
  let po = hidEvent.checkFirstPoint()
  if (po == null) {
    logd("矫正坐标成功")
  } else {
    loge("矫正坐标失败:" + init);
    return false
  }
  return true;
}


function mtouch() {
  let data = [
    {
      "action": 0,
      "x": 250,
      "y": 1800,
      "pointer": 1,
      "delay": 100
    },
    {
      "action": 2,
      "x": 250,
      "y": 1700,
      "pointer": 1,
      "delay": 100
    },
    {
      "action": 2,
      "x": 300,
      "y": 1700,
      "pointer": 1,
      "delay": 100
    },
    {
      "action": 2,
      "x": 330,
      "y": 1650,
      "pointer": 1,
      "delay": 200
    },
    {
      "action": 2,
      "x": 400,
      "y": 1650,
      "pointer": 1,
      "delay": 100
    },
    {
      "action": 1,
      "x": 600,
      "y": 400,
      "pointer": 1,
      "delay": 100
    }
  ]

  let tou = hidEvent.multiTouch(data, 1000)
  if (tou == null) {
    logd("多点触摸 成功")
  } else {
    loge("多点触摸 失败:" + tou);
    return false
  }
}


main();


```

### doubleClickPoint 双击坐标

* 适配版本 EC 安卓 9.15.0+
* @param x x坐标
* @param y y坐标
* @return {string} null 代表成功，其他代表错误消息

```javascript
function main() {
  let i = initHid()
  if (!i) {
    return
  }
  // 点击坐标 0,0的地方
  let click = hidEvent.clickPoint(device.getScreenWidth(), device.getScreenHeight())
  if (click == null) {
    logd("点击坐标成功")
  } else {
    console.log("点击坐标失败" + click)
  }
  sleep(1000)
  let doub = hidEvent.doubleClickPoint(300, 400)
  if (doub == null) {
    logd("双击坐标成功")
  } else {
    console.log("双击坐标失败" + doub)
  }

  sleep(1000)
  let ps = hidEvent.press(600, 800, 2000)
  if (ps == null) {
    logd("长按 坐标成功")
  } else {
    console.log("长按 坐标失败" + ps)
  }

  sleep(1000)
  let ps1 = hidEvent.press(device.getScreenWidth(), device.getScreenHeight(), 2000)
  if (ps1 == null) {
    logd("长按 坐标成功")
  } else {
    console.log("长按 坐标失败" + ps1)
  }


  mtouch()


}

function initHid() {
  // 先设置一下局域网内的HID程序地址，也可以通过FRP软件映射到外网，然后填写外网地址
  hidEvent.setHidCenter("http://192.168.2.14:8988")
  hidEvent.closeUsbDevice();
  let init = hidEvent.initUsbDevice()
  if (init == null) {
    logd("初始化HID设备成功")
  } else {
    loge("初始化失败:" + init);
    return false
  }
  // 开始矫正屏幕坐标
  let po = hidEvent.checkFirstPoint()
  if (po == null) {
    logd("矫正坐标成功")
  } else {
    loge("矫正坐标失败:" + init);
    return false
  }
  return true;
}


function mtouch() {
  let data = [
    {
      "action": 0,
      "x": 250,
      "y": 1800,
      "pointer": 1,
      "delay": 100
    },
    {
      "action": 2,
      "x": 250,
      "y": 1700,
      "pointer": 1,
      "delay": 100
    },
    {
      "action": 2,
      "x": 300,
      "y": 1700,
      "pointer": 1,
      "delay": 100
    },
    {
      "action": 2,
      "x": 330,
      "y": 1650,
      "pointer": 1,
      "delay": 200
    },
    {
      "action": 2,
      "x": 400,
      "y": 1650,
      "pointer": 1,
      "delay": 100
    },
    {
      "action": 1,
      "x": 600,
      "y": 400,
      "pointer": 1,
      "delay": 100
    }
  ]

  let tou = hidEvent.multiTouch(data, 1000)
  if (tou == null) {
    logd("多点触摸 成功")
  } else {
    loge("多点触摸 失败:" + tou);
    return false
  }
}


main();


```

### mouseMove 移动鼠标到坐标点

* 适配版本 EC 安卓 9.15.0+
* @param x x坐标
* @param y y坐标
* @return {string} null 代表成功，其他代表错误消息

```javascript
function main() {
  let i = initHid()
  if (!i) {
    return
  }
  // 点击坐标 0,0的地方
  let click = hidEvent.clickPoint(device.getScreenWidth(), device.getScreenHeight())
  if (click == null) {
    logd("点击坐标成功")
  } else {
    console.log("点击坐标失败" + click)
  }
  sleep(1000)
  let doub = hidEvent.mouseMove(300, 400)
  if (doub == null) {
    logd("移动坐标成功")
  } else {
    console.log("移动坐标失败" + doub)
  }
}

function initHid() {
  // 先设置一下局域网内的HID程序地址，也可以通过FRP软件映射到外网，然后填写外网地址
  hidEvent.setHidCenter("http://192.168.2.14:8988")
  hidEvent.closeUsbDevice();
  let init = hidEvent.initUsbDevice()
  if (init == null) {
    logd("初始化HID设备成功")
  } else {
    loge("初始化失败:" + init);
    return false
  }
  // 开始矫正屏幕坐标
  let po = hidEvent.checkFirstPoint()
  if (po == null) {
    logd("矫正坐标成功")
  } else {
    loge("矫正坐标失败:" + init);
    return false
  }
  return true;
}

main();


```

### press 长按坐标

* 长按坐标
* 适配版本 EC 安卓 9.15.0+
* @param x x坐标
* @param y y坐标
* @param delay 按住时间，单位是毫秒
* @return {string} null 代表成功，其他代表错误消息

```javascript
function main() {
  let i = initHid()
  if (!i) {
    return
  }
  // 点击坐标 0,0的地方
  let click = hidEvent.clickPoint(device.getScreenWidth(), device.getScreenHeight())
  if (click == null) {
    logd("点击坐标成功")
  } else {
    console.log("点击坐标失败" + click)
  }
  sleep(1000)
  let doub = hidEvent.doubleClickPoint(300, 400)
  if (doub == null) {
    logd("双击坐标成功")
  } else {
    console.log("双击坐标失败" + doub)
  }

  sleep(1000)
  let ps = hidEvent.press(600, 800, 2000)
  if (ps == null) {
    logd("长按 坐标成功")
  } else {
    console.log("长按 坐标失败" + ps)
  }

  sleep(1000)
  let ps1 = hidEvent.press(device.getScreenWidth(), device.getScreenHeight(), 2000)
  if (ps1 == null) {
    logd("长按 坐标成功")
  } else {
    console.log("长按 坐标失败" + ps1)
  }


  mtouch()


}

function initHid() {
  // 先设置一下局域网内的HID程序地址，也可以通过FRP软件映射到外网，然后填写外网地址
  hidEvent.setHidCenter("http://192.168.2.14:8988")
  hidEvent.closeUsbDevice();
  let init = hidEvent.initUsbDevice()
  if (init == null) {
    logd("初始化HID设备成功")
  } else {
    loge("初始化失败:" + init);
    return false
  }
  // 开始矫正屏幕坐标
  let po = hidEvent.checkFirstPoint()
  if (po == null) {
    logd("矫正坐标成功")
  } else {
    loge("矫正坐标失败:" + init);
    return false
  }
  return true;
}


function mtouch() {
  let data = [
    {
      "action": 0,
      "x": 250,
      "y": 1800,
      "pointer": 1,
      "delay": 100
    },
    {
      "action": 2,
      "x": 250,
      "y": 1700,
      "pointer": 1,
      "delay": 100
    },
    {
      "action": 2,
      "x": 300,
      "y": 1700,
      "pointer": 1,
      "delay": 100
    },
    {
      "action": 2,
      "x": 330,
      "y": 1650,
      "pointer": 1,
      "delay": 200
    },
    {
      "action": 2,
      "x": 400,
      "y": 1650,
      "pointer": 1,
      "delay": 100
    },
    {
      "action": 1,
      "x": 600,
      "y": 400,
      "pointer": 1,
      "delay": 100
    }
  ]

  let tou = hidEvent.multiTouch(data, 1000)
  if (tou == null) {
    logd("多点触摸 成功")
  } else {
    loge("多点触摸 失败:" + tou);
    return false
  }
}


main();


```

### multiTouch 多点触摸

* 多点触摸
* 适配版本 EC 安卓 9.15.0+
* 触摸参数: action :一般情况下 按下为0，弹起为1，移动为2
* x: X坐标
* y: Y坐标
* pointer：设置第几个手指触摸点，分别是 1，2，3等，代表第n个手指
* delay: 该动作延迟多少毫秒执行
* @param touch1
  第1个手指的触摸点数组,例如：[{"action":0,"x":1,"y":1,"pointer":1,"delay":20},{"action":2,"x":1,"y":1,"pointer":1,"delay":20}]
* @param timeout 多点触摸执行的超时时间，单位是毫秒
* @return boolean|布尔型

```javascript
function main() {
  let i = initHid()
  if (!i) {
    return
  }
  // 点击坐标 0,0的地方
  let click = hidEvent.clickPoint(device.getScreenWidth(), device.getScreenHeight())
  if (click == null) {
    logd("点击坐标成功")
  } else {
    console.log("点击坐标失败" + click)
  }
  sleep(1000)
  let doub = hidEvent.doubleClickPoint(300, 400)
  if (doub == null) {
    logd("双击坐标成功")
  } else {
    console.log("双击坐标失败" + doub)
  }

  sleep(1000)
  let ps = hidEvent.press(600, 800, 2000)
  if (ps == null) {
    logd("长按 坐标成功")
  } else {
    console.log("长按 坐标失败" + ps)
  }

  sleep(1000)
  let ps1 = hidEvent.press(device.getScreenWidth(), device.getScreenHeight(), 2000)
  if (ps1 == null) {
    logd("长按 坐标成功")
  } else {
    console.log("长按 坐标失败" + ps1)
  }


  mtouch()


}

function initHid() {
  // 先设置一下局域网内的HID程序地址，也可以通过FRP软件映射到外网，然后填写外网地址
  hidEvent.setHidCenter("http://192.168.2.14:8988")
  hidEvent.closeUsbDevice();
  let init = hidEvent.initUsbDevice()
  if (init == null) {
    logd("初始化HID设备成功")
  } else {
    loge("初始化失败:" + init);
    return false
  }
  // 开始矫正屏幕坐标
  let po = hidEvent.checkFirstPoint()
  if (po == null) {
    logd("矫正坐标成功")
  } else {
    loge("矫正坐标失败:" + init);
    return false
  }
  return true;
}


function mtouch() {
  let data = [
    {
      "action": 0,
      "x": 250,
      "y": 1800,
      "pointer": 1,
      "delay": 100
    },
    {
      "action": 2,
      "x": 250,
      "y": 1700,
      "pointer": 1,
      "delay": 100
    },
    {
      "action": 2,
      "x": 300,
      "y": 1700,
      "pointer": 1,
      "delay": 100
    },
    {
      "action": 2,
      "x": 330,
      "y": 1650,
      "pointer": 1,
      "delay": 200
    },
    {
      "action": 2,
      "x": 400,
      "y": 1650,
      "pointer": 1,
      "delay": 100
    },
    {
      "action": 1,
      "x": 600,
      "y": 400,
      "pointer": 1,
      "delay": 100
    }
  ]

  let tou = hidEvent.multiTouch(data, 1000)
  if (tou == null) {
    logd("多点触摸 成功")
  } else {
    loge("多点触摸 失败:" + tou);
    return false
  }
}


main();


```

