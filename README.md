
如果yarn install的速度很慢，可以尝试配置淘宝Registry。

```
$ yarn config set registry https://registry.npm.taobao.org
$ yarn start
```

将在浏览器中自动打开http://localhost:3000/


### 本地生产测试启动

使用以下命令在本地模拟生产测试启动

```bash
$ yarn serve --build .
```



## 参与贡献

旧版本文档不再维护，只维护 Current 版。

将 [Rainbond-docs](https://github.com/goodrain/rainbond-docs.git) 仓库 Fork 到自己的仓库，修改文档并提交至自己的仓库，提交  Pull Request 到 [Rainbond-docs](https://github.com/goodrain/rainbond-docs.git)



* 引入视频格式如下

  ```html
  import Bvideo from "@site/src/components/Bvideo";
  <Bvideo src="//player.bilibili.com/player.html?aid=550933549&bvid=BV1Vq4y1w7FQ&cid=492223110&page=1"/>
  ```

* 代码块的使用参考 [Docusaurus 代码块](https://docusaurus.io/zh-CN/docs/markdown-features/code-blocks)

* 文档中如有 "用户须知" 要使用 [Docusaurus 告示](https://docusaurus.io/zh-CN/docs/markdown-features/admonitions)

#### 新增MD文件

如果需要新增文件，在 `docs/` 目录下增加至对应的目录内，并在 `sidebars.js` 中按照顺序填写新增的文件名，可参考 [Docusaurus Sidebar](https://docusaurus.io/zh-CN/docs/sidebar)。



### 文档翻译

文档中文翻译英文，在 `i18n/en/docusaurus-plugin-content-docs/current` 目录下，创建与 `docs` 目录下的一致的文件。

例如：翻译 `docs/quick-install/quick-install.mdx` ，在 `i18n/en/docusaurus-plugin-content-docs/current` 下创建相同目录的相同文件 ``i18n/en/docusaurus-plugin-content-docs/current/quick-install/quick-install.mdx`

#### 本地多语言启动

```bash
$ yarn start -- --locale en 
```

默认为中文，启动英文版本后，在浏览器中自动打开http://localhost:3000/en/
