---
title: JS
---

## 布尔操作符
- 逻辑非!运算符：将操作数转为布尔值，再取反
## 其它类型转为布尔值Boolean()函数
1. Boolean()函数返回一个布尔值
- 返回true
   - Boolean类型：true
   - Number类型：非0
   - String类型：非空字符串''
   - Object类型：<mark>任意对象</mark>，包括[]，{}
   - undefined类型：不存在
- 返回flase
   - Boolean类型：false
   - Number类型：0
   - String类型：''
   - Object类型：<mark>null</mark>
   - undefined类型：undefined

```
Boolean([])//true
Boolean({})//true
Boolean(1)//true
Boolean(0)//false
Boolean('')//false
Boolean('x')//true
Boolean(null)//false
Boolean(undefined)//false
Boolean(NaN)//false
```
2. if语句会制动执行将其它类型转为布尔值，v-if="表达式"，表达式的ture/false也是基于此，v-if="[]"是显示的也是这个原理


## 原生 
图表那块记得看
```
<!-- querySelector() 方法返回文档中匹配指定 CSS 选择器的一个元素 -->
 const fooltip = document.querySelector('.f2-tooltip')
  //自定义tooltips
 chart.tooltip({...})
```

## 
## promise
```
getSubTaskList(this.request).then(res => {
            }).catch(err => console.log(err))
```