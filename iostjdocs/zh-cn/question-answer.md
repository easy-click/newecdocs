---
title: 常见问题 
description: EasyClick 自动化脚本 iOS免越狱 常见问题 
keywords: [EasyClick自动化脚本,iOS免越狱,iOS脚本常见问题 ]
---

## 脚本停止问题

- iOS采用的js引擎与ec的安卓不太一样，在脚本被动停止的时候会将 isScriptExit() 返回值设置为false，需要自己的业务中判断脚本停止
- 尤其是在是使用循环（包括，for，while等）一定要进行判断脚本是否停止，然后进行退出循环
- 如果不进行判断退出循环，容易造成app的cpu直接飙升到100%，正常写代码逻辑也是需要自己判断是否结束的
- 例子:<br/>

```javascript
function main() {
  while (true) {
    // 退出循环
      if (isScriptExit()){
        break;
      }
      sleep(100)
      console.log("d "+ new Date())
  }
}

main()
```

## 自动化启动问题

- iOS脱机版本支持14.6+的iOS系统，安装代理IPA后，点击代理IPA图标，会自动出现Automation Running白色字样即可
- 如果不出现白色字样，可以通过中控或者后续提供的激活器，激活一下代理即可

## 横屏坐标问题

- iOS点击的坐标始终都是竖屏的，在某些情况找图找节点找到的是横屏坐标，所以需要进行坐标系的转变，把横坐标转换为竖坐标才能进行点击
- 以下情况需要进行转换坐标系：
  <br/>
  1、抓取的节点实际为横屏，这个时候程序查找的坐标系就是横屏，需要转换<br/>
  <img src="/iostjimg/node-h-j.png" alt="node-h-j.png" style={{zoom:'30%'}} /><br/>
  2、抓取的图片是横屏，这个时候程序查找的坐标系就是横屏，需要转换<br/>
  <img src="/iostjimg/tj-jt-h.png" alt="t-j.png" style={{zoom:'30%'}} /><br/>
  3、其他情况一律是竖屏坐标系
- 横屏转竖屏坐标系函数是 **convertPointToClickable**，请注意转换


## 多worker模式工作
- iOS的js引擎天生单线程，这个无法避免，所以后续将使用多worker多jsvm模式代替多线程方式
