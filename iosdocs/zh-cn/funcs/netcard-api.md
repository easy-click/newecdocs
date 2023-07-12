---
title: 网络验证函数 
description: EasyClick 自动化脚本 iOS免越狱 网络验证函数 
keywords: [EasyClick 自动化脚本 iOS免越狱 网络验证函数 ]
---

## 说明

- 网络验证模块是官方开放的模块，需要到 [http://uc.ieasyclick.com](http://uc.ieasyclick.com) 用户中心管理后台提取卡密
- 低于6.12.0版本的中控需要单独下载网络验证的SDK包，手动集成到脚本中
- 高于6.12.0版本的，可以直接使用函数调用方式，无需集成，简单易用
- 卡密自带心跳验证无需另外调用
- 卡密自动验证脚本的安全性，增加防破解难度，这个有区别市面上的网络验证平台

## 卡密相关

### netCardBind 绑定卡密

* [网络验证]绑定卡密
* 适配版本 EC iOS 中控 6.12.0+
* @param appId 应用的appId，用户中心后台获取
* @param appSecret 应用的密钥，用户中心后台获取
* @param cardNo 卡号，用户中心后台获取
* @return {null|JSON} 返回JSON对象,{"code":0,"msg":"",}

```javascript

function main() {
  logd(" ssss ==>>> " +new Date())
  // appId 和 appSecret，卡号等请都用户中心后台申请
  let appId="sjfjvkpw"
  let appSecret="ykjscxcs"
  let cardNo="cbwolrftnw"
  let bind = netCardBind(appId,appSecret, cardNo)
  //{"msg":"","code":0,"data":{"expireTime":"2024-07-12 14:05:53","leftDays":366,"leftSeconds":31622400,"status":1}}
  //{"msg":"","code":-1}
  let unddd = netCardUnbind(cardNo,"12323")
  loge("netCardUnbind {}",JSON.stringify(unddd))
  loge("bind {}",JSON.stringify(bind))
  let bindResult=false;
  if (bind != null && bind != undefined && bind["code"] == 0) {
    loge("卡密绑定成功")
    loge("剩余时间："+bind['data']['leftDays']+"天")
    loge("过期时间："+bind['data']['expireTime'])
    bindResult=true;
  }else{
    loge("卡密绑定失败: "+bind["msg"])
  }

  sleep(5000)
  if (!bindResult){
    return
  }

  // 云端变量演示
  let user_ageJson = netCardGetCloudVar("user_age")
  //返回的json数据
  loge("user age=> "+JSON.stringify(user_ageJson))
  //取得对应的值
  loge("user age的字=> "+user_ageJson['data'])

  // 更新user_age的值
  let up = netCardUpdateCloudVar("user_age","12222");
  loge("netCardUpdateCloudVar => "+JSON.stringify(up))
  if (up['code']==0){
    loge("netCardUpdateCloudVar 更新成功")
  }





  while (true){
    sleep(1000)
  }

}
main()
```

### netCardUnbind 解绑卡密

* [网络验证]解绑卡密
* 适配版本 EC iOS 中控 6.12.0+
* @param cardNo 卡号，用户中心后台获取
* @param password 解绑密码 ，如果设置过解绑密码 需要填写
* @return {null|JSON} 返回JSON对象,{"code":0,"msg":"",}

```javascript
function main() {
  logd(" ssss ==>>> " +new Date())
  // appId 和 appSecret，卡号等请都用户中心后台申请
  let appId="sjfjvkpw"
  let appSecret="ykjscxcs"
  let cardNo="cbwolrftnw"
  let bind = netCardBind(appId,appSecret, cardNo)
  //{"msg":"","code":0,"data":{"expireTime":"2024-07-12 14:05:53","leftDays":366,"leftSeconds":31622400,"status":1}}
  //{"msg":"","code":-1}
  let unddd = netCardUnbind(cardNo,"12323")
  loge("netCardUnbind {}",JSON.stringify(unddd))
  loge("bind {}",JSON.stringify(bind))
  let bindResult=false;
  if (bind != null && bind != undefined && bind["code"] == 0) {
    loge("卡密绑定成功")
    loge("剩余时间："+bind['data']['leftDays']+"天")
    loge("过期时间："+bind['data']['expireTime'])
    bindResult=true;
  }else{
    loge("卡密绑定失败: "+bind["msg"])
  }

  sleep(5000)
  if (!bindResult){
    return
  }

  // 云端变量演示
  let user_ageJson = netCardGetCloudVar("user_age")
  //返回的json数据
  loge("user age=> "+JSON.stringify(user_ageJson))
  //取得对应的值
  loge("user age的字=> "+user_ageJson['data'])

  // 更新user_age的值
  let up = netCardUpdateCloudVar("user_age","12222");
  loge("netCardUpdateCloudVar => "+JSON.stringify(up))
  if (up['code']==0){
    loge("netCardUpdateCloudVar 更新成功")
  }





  while (true){
    sleep(1000)
  }

}
main()
```



## 云端变量

### netCardGetCloudVar 获取远程变量
* [网络验证-远程变量]获取远程变量
* 必须使用EC的卡密，才能使用远程变量功能  
* 适配版本 EC iOS 中控 6.12.0+
* @param key 远程变量名称
* @return {null|JSON} 返回JSON对象,{"code":0,"msg":""}
```javascript
function main() {
  logd(" ssss ==>>> " +new Date())
  // appId 和 appSecret，卡号等请都用户中心后台申请
  let appId="sjfjvkpw"
  let appSecret="ykjscxcs"
  let cardNo="cbwolrftnw"
  let bind = netCardBind(appId,appSecret, cardNo)
  //{"msg":"","code":0,"data":{"expireTime":"2024-07-12 14:05:53","leftDays":366,"leftSeconds":31622400,"status":1}}
  //{"msg":"","code":-1}
  let unddd = netCardUnbind(cardNo,"12323")
  loge("netCardUnbind {}",JSON.stringify(unddd))
  loge("bind {}",JSON.stringify(bind))
  let bindResult=false;
  if (bind != null && bind != undefined && bind["code"] == 0) {
    loge("卡密绑定成功")
    loge("剩余时间："+bind['data']['leftDays']+"天")
    loge("过期时间："+bind['data']['expireTime'])
    bindResult=true;
  }else{
    loge("卡密绑定失败: "+bind["msg"])
  }

  sleep(5000)
  if (!bindResult){
    return
  }

  // 云端变量演示
  let user_ageJson = netCardGetCloudVar("user_age")
  //返回的json数据
  loge("user age=> "+JSON.stringify(user_ageJson))
  //取得对应的值
  loge("user age的字=> "+user_ageJson['data'])

  // 更新user_age的值
  let up = netCardUpdateCloudVar("user_age","12222");
  loge("netCardUpdateCloudVar => "+JSON.stringify(up))
  if (up['code']==0){
    loge("netCardUpdateCloudVar 更新成功")
  }



  while (true){
    sleep(1000)
  }

}
main()
```




### netCardUpdateCloudVar 更新远程变量
* [网络验证-远程变量]更新远程变量
* 适配版本 EC iOS 中控 6.12.0+
* @param key 远程变量名称
* @param value 远程变量内容
* @return {null|JSON} 返回JSON对象,{"code":0,"msg":""}
```javascript
function main() {
  logd(" ssss ==>>> " +new Date())
  // appId 和 appSecret，卡号等请都用户中心后台申请
  let appId="sjfjvkpw"
  let appSecret="ykjscxcs"
  let cardNo="cbwolrftnw"
  let bind = netCardBind(appId,appSecret, cardNo)
  //{"msg":"","code":0,"data":{"expireTime":"2024-07-12 14:05:53","leftDays":366,"leftSeconds":31622400,"status":1}}
  //{"msg":"","code":-1}
  let unddd = netCardUnbind(cardNo,"12323")
  loge("netCardUnbind {}",JSON.stringify(unddd))
  loge("bind {}",JSON.stringify(bind))
  let bindResult=false;
  if (bind != null && bind != undefined && bind["code"] == 0) {
    loge("卡密绑定成功")
    loge("剩余时间："+bind['data']['leftDays']+"天")
    loge("过期时间："+bind['data']['expireTime'])
    bindResult=true;
  }else{
    loge("卡密绑定失败: "+bind["msg"])
  }

  sleep(5000)
  if (!bindResult){
    return
  }

  // 云端变量演示
  let user_ageJson = netCardGetCloudVar("user_age")
  //返回的json数据
  loge("user age=> "+JSON.stringify(user_ageJson))
  //取得对应的值
  loge("user age的字=> "+user_ageJson['data'])

  // 更新user_age的值
  let up = netCardUpdateCloudVar("user_age","12222");
  loge("netCardUpdateCloudVar => "+JSON.stringify(up))
  if (up['code']==0){
    loge("netCardUpdateCloudVar 更新成功")
  }



  while (true){
    sleep(1000)
  }

}
main()
```
