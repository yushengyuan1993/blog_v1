---
title: 记一次在公司项目中使用Babel的经历
date: 2018-03-01 09:46:10
tags:
    - Babel
    - es6
    - JavaScript
categories:
---

&emsp;首先，为什么会写这样一篇文章呢？在进入公司几个月后，写业务代码都是使用es5语法，es6，于是想着使用Babel来构建一下。这样既可以愉快的使用ES6了，还能舒心的写代码，何乐而不为。

- Babel的使用是基于Node.js环境的，所以必须先安装Node。
- 我们将采用通过安装babel-cli的方式来使用babel。

#### 1.安装
&emsp;虽然你可以在你的机器上全局安装`Babel CLI`, 但根据单个项目进行本地安装会更好一些。这样做有两个主要的原因：
* 同一机器上的不同的项目可以依赖不同版本的 Babel, 这允许你一次更新一个项目。
* 这意味着在你的工作环境中没有隐含的依赖项。它将使你的项目更方便移植、更易于安装。

> 首先我们需要生成一个package.json文件，进入到项目目录执行`npm init`命令，随后一顿选择回车。

```bash
YSY@SY-YU MINGW64 /d/START/webpack
$ npm init
This utility will walk you through creating a package.json file.
It only covers the most common items, and tries to guess sensible defaults.

See `npm help json` for definitive documentation on these fields
and exactly what they do.

Use `npm install <pkg>` afterwards to install a package and
save it as a dependency in the package.json file.

Press ^C at any time to quit.
package name: (webpack)
```
*最后，目录下会生成一个package.json文件，打开看一下*
```json
{
  "name": "webpack",
  "version": "1.0.0",
  "description": "",
  "main": "index.js",
  "scripts": {
    "test": "echo \"Error: no test specified\" && exit 1"
  },
  "author": "yvshare.cn",
  "license": "ISC"
}
```
*里面都是刚才npm init时自己的配置*

> 我们可以通过以下命令本地安装 Babel CLI:

```bash
// 全局安装
npm install babel-cli -g
// 安装在当前项目中
npm install --save-dev babel-cli
```
我们在当前目录安装babel-cli，随后我们的package.json应该长这个样：
```json
{
  "name": "webpack",
  "version": "1.0.0",
  "description": "",
  "main": "index.js",
  "scripts": {
    "test": "echo \"Error: no test specified\" && exit 1"
  },
  "author": "yvshare.cn",
  "license": "ISC",
  "devDependencies": {
    "babel-cli": "^6.26.0"
  }
}
```

#### 2. 使用
- 我们将把我们的指令放在本地版本的 npm 脚本中，而不是直接通过命令行来运行 Babel.

> 简单的在你的 package.json 中添加一个 "scripts" 属性并将 babel 命令放在它的 build 属性中：

```json
  {
    "name": "webpack",
    "version": "1.0.0",
    "scripts": {
      "test": "echo \"Error: no test specified\" && exit 1",
+     "build": "babel src -d lib"  // 加入这一句命令
    },
    "devDependencies": {
      "babel-cli": "^6.26.0"
    }
  }
```
现在从我们的终端可以运行以下命令：
```bash
npm run build
```
*这会按照和之前一样的方式来运行 Babel 并将输出放在 lib 目录下，唯一不同在于我们现在使用了一个本地拷贝。*
> 值得注意的是在babel的build命令是可以在build属性中自行配置的，上面是把src目录下的脚本打包到lib目录中，你也可以打包单个文件...


---
> [参考文档](https://babeljs.cn/)