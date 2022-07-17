---
title: 踩坑记录
---
## Cannot read properties of undefined (reading 'data')
1. 没有定义这个属性却使用了
2. 数据来源于异步请求，后端返回给你的数据没有这个属性 或者 返回的有的有数据 有的是 null，v-if
```
<div  class="manage-tools-item-data" v-if="item.manageDate">
<div  class="manage-tools-item-data" v-if="item.manageDate.data"> //仍旧报错，因为manageDate没有了，你还再去点一个data，栓q
```
3. 视图未更新 数据还没返回 你就开始使用这个属性 可以加个 this.$nectTick (()=>{//获取数据}) 包裹一下