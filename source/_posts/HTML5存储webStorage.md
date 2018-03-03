---
id: 0809004
title: HTML5存储webStorage
date: 2018-02-27 17:56:48
tags: 
    - HTML5
    - sessionStorage
    - localStorage
categories:
---

#### 客户端存储数据的两个对象为：
- `localStorage` - 没有时间限制的数据存储
- `sessionStorage` - 针对一个 session(会话) 的数据存储
> 在使用 web 存储前，应检查浏览器是否支持 localStorage 和sessionStorage :
```
if( typeof(Storage) !== "undefined" )
{
    // 是的! 支持 localStorage  sessionStorage 对象!
    // your code
} else {
    // 抱歉! 不支持 web 存储。
}
```
##### 1. localStorage 对象
- localStorage 对象存储的数据没有时间限制。第二天、第二周或下一年之后，数据依然可用。
> 实例：
```
localStorage.name="yasuo";
document.getElementById("hero").innerHTML="英雄：" + localStorage.name;
```
