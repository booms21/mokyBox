## mokyBox

基于 wokoo 搭建的油猴小工具集

网页截图、csdn复制代码、一键看密码、电影天堂直通豆瓣详情页看评分 

https://github.com/booms21/mokyBox.git

## 使用

1.安装油猴插件 

3.插件地址： https://greasyfork.org/zh-CN/scripts/457396 

2.或者打开 https://greasyfork.org/ 油猴市场搜索 mokyBox 进行安装


**基础配置：**

- react
- less
- webpack

## 目录结构

```
.
├── README.md 说明
├── package-lock.json
├── package.json
├── cdn 供发布的cdn文件
├── public 静态文件
│   ├── favicon.ico
│   ├── icon.jpg
│   └── index.html html 文件
├── src
|   ├── utils 工具
|   ├── style 样式
|   ├── page 界面
│   ├── app.jsx
│   └── index.js 项目入口
├── tampermonkey.js 油猴脚本入口文件
├── webpack.config.base.js
└── webpack.config.js webpack 配置
```

## 开发

**启动**
进入项目目录后，在命令行中输入：

```shell
npm run start
```

**调试**

1. 打开浏览器，输入`localhost:8080`，查看页面展示是否正常。（本地调试模式某些网站可能会出现跨域问题）
2. 安装油猴插件
3. 打开油猴插件编辑界面，将 tampermonkey.js 里的内容复制到编辑框中，保存。
4. 打开任意一个网页，比如csdn或电影天堂验证功能，

- 查看油猴 icon 是否有一个 1 的数字标志，如果有说明油猴脚本已经成功激活
- 网页的右上角会出现初始页面

**构建**

```shell
npm run build
```
把build的产物app.bundle中的代码复制到编辑框中并保存。


## 了解更多

如果想了解更多内容，请访问下面的网址：
[油猴脚手架 wokoo 使用说明](https://juejin.cn/post/6922815205575491597)
[油猴脚手架 wokoo git 仓库](https://github.com/kinyaying/wokoo)
