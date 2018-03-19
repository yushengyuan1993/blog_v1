---
id: 0809022
title: JavaScript 闭包 (Closure)
date: 2018-03-09 16:16:25
tags:
  - JavaScript
categories:
---

> 网上很多人对闭包 `closure` 进行了非常多的描述，毫无疑问，他们大多都讲的非常细致，非常棒。但总是觉得赘述部分有点多，有时候会把一个人给绕懵，其实我们可以从最简单的地方入手 闭包的。

#### <a>1、What is `closure`?</a>

- 闭包是指有权访问另一个函数作用域中变量的函数，创建闭包的最常见的方式就是在一个函数内创建另一个函数，通过另一个函数访问这个函数的局部变量,利用闭包可以突破作用链域，`将函数内部的变量和方法传递到外部`。

- `闭包的特征`：
  - 函数内再嵌套函数
  - 内部函数可以引用外层的参数和变量
  - 参数和变量不会被垃圾回收机制回收

#### <a>2、如何实现?</a>

- 一个最简单常见的场景：
  每次点击一个 `li` 元素，打印出该元素对应的索引
  ```html
  <ul id="list">
    <li>item 0</li>
    <li>item 1</li>
    <li>item 2</li>
    <li>item 3</li>
    <li>item 4</li>
  </ul>
  ```
  ```js
  var lists = document.getElementsByTagName("li");
 	for(var i = 0; i < lists.length; i ++){
 	  lists[i].onclick = (function(i){
      return function() {
        console.log(i);
      } //不用闭包的话，值每次都是 5
    })(i);
 	}

  //当然，使用 ES6 也可以这么干
  for(let j = 0; j < lists.length; j ++){
 	  lists[j].onclick = () => {
      console.log(j)
    }
 	}
  ```