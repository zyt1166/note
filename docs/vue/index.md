---
title: Vue
---
## 过滤器
```

filters: { moneyFormat },
```
## dayjs
- 第三方包的导入是直接名字，就是下面的书写形式
- import dayjs from 'dayjs'

## this.$set是异步的

## computed
-  Unexpected side effect in "*" computed property
   - 计算属性只要单纯的运算，依赖某些值，得到某个值。不要做其他的操作，赋值，修改dom等。
   - 真的需要操作就放到watch里面。
   -Vue 的 计算属性 (computed) 中应当仅包含用于返回值的计算，不应该包含 DOM操作，修改外部变量，异步操作 等。这些操作应该在 侦听器 (watch) 中实现
   - 今天遇到一个场景，使用计算属性，对data里边的数组数据进行排序，然后报了上边那个错误，这个应该属于修改data里边数据吧，后边加了一个json对数据进行深拷贝，然后就好了，谢啦
```
<template>
    <select v-model="selected">
    <option v-for="key in getkeys" v-bind:key="key"> {{ key }}</option
    </select>
</template>

data(){
    return{
    selected: '',
    allKeys: [],
    originalKeys: [],  //e.g. ["ALPHA_MIKE]
    getTranslation: {} //e.g. {"ALPHA_MIKE": "ALPHA MIKE"}
    }
},
computed: {
    getkeys(){
        let tableHeaders = [];
        for( var i=0; i<this.originalKeys.length; i++){
            let translation = this.getTranslation[this.originalKeys[i]];
            tableHeaders.push(translation);
        }
        this.selected = tableHeaders[0]; //unexpected side effect here
        this.allKeys = tableHeaders; //unexpected side effect here.
        return this.allKeys;
    }
}

```
```
<!-- 不能再computed中改变页面变量的值，如果需要改变，请使用watch，修改后的代码如下： -->
computed: {
    getkeys(){
        let tableHeaders = [];
        for( var i=0; i<this.originalKeys.length; i++){
            let translation = this.getTranslation[this.originalKeys[i]];
            tableHeaders.push(translation);
        }
        return tableHeaders;
    }
},
watch: {
  getkeys: {
    deep: true,
    handler: function (newVal) {
      this.selected = newVal[0]
      this.allKeys = newVal
    }
  }
}

```
## data里的数据不能互相引用
![](https://img.jbzj.com/file_images/article/202206/2022060509353814.png)
- 如果需要相互引用，需要使用computed=>尼玛 不可以 报错unexpected side effect
- ue中data属性里的数据不能相互引用，如果必须引用，建议使用computed计算属性关联。
- Vue文档里写道：“Vue将会递归将data的property转换为 getter/setter，从而让 data 的 property 能够响应数据变化。。对象必须是纯粹的对象 (含有零个或多个的 key/value 对)：浏览器 API 创建的原生对象，原型上的 property 会被忽略。大概来说，data 应该只能是数据 - 不推荐观察拥有状态行为的对象。”
## data的数据是响应式的
- 当数据属于基本类型时 ， vue会自动检测并在页面重新渲染
- 如果数据是引用类型 ， 数据改变无法引起页面重新渲染
   - 数据是数组
      - 合并数组到一个新的数组中
      - Vue对数组变更的一些方法进行了封装，`push()、pop()、shift()、unshift()、splice()、sort()、reverse()` , 使用这些方法,可以直接出发视图重新渲染
   - 数据是对象：
      - 使用Vue的 set 方法
      ```
       this.$set(this.configList[0], 'manageDate', res.userTaskStateShowList[0])
                // this.configList[0].manageDate = res.userTaskStateShowList[0]
      ```

## vm.$attrs
- 场景介绍:vue中一个比较令人烦恼的事情是属性只能从父组件传递给子组件。这也就意味着当你想向嵌套层级比较深组件数据传递，只能由父组件传递给子组件，子组件再传递给孙子组件...像下面这样：就这样一层一层的往下传递passdown这个变量，最后才能用`{{passdown}}`。
```
<parent-component :passdown="passdown">

<child-component :passdown="passdown">

<grand-child-component :passdown="passdown">
```
- 假如我们需要传递的属性只有1,2个还行，但是如果我们要传递的有几个或者10来个的情况，这会是什么样的场景，我们会在每个组件不停的props，每个必须写很多遍。有没有其它方便的写法？有，通过vuex的父子组件通信，的确这个是一个方法，但是还有其它的方法，这个就是我们要说的。通过inheritAttrs选项，以及实例属性$attrs
- 子组件继承父组件上没有使用的属性，就算当前组件没有通过props传递进来，子组件依然可以通过$attrs取得

## 传递参数有无：的区别 
## props
### Prop 的大小写 
### 传递静态或动态 Prop
```
//prop 传入一个静态的值
<blog-post title="My journey with Vue"></blog-post>
// prop 可以通过 v-bind 动态赋值
<blog-post v-bind:title="post.title"></blog-post>
```
### Prop 类型
- 数组
```
//字符串数组形式
props: ['title', 'likes', 'isPublished', 'commentIds', 'author']
//指定的值类型
props: {
  title: String,
  likes: Number,
  isPublished: Boolean,
  commentIds: Array,
  author: Object,
  callback: Function,
  contactsPromise: Promise // or any other constructor
}

```
- 对象形式
   - type类型，不用加''，公司项目语法错误抛出的是vue error
   - default 默认值
```
    props: {
        isShowDate: {
            type: Boolean,
            default: false
        },

        minDate: {
            type: Date,
            default: () => {
                return new Date('2021/01/01')
            }
        },
        color: {
            type: String,
            default: '#01BEBF'
        }
```
- props变量有默认值，有些没有
```
props: {
   items: {
      // 必须提供字段 
      required: ture
   },
   unit: {
      // 可选字段，有默认值
      default: 3 
   }
}
```
### props为什么要默认值
- 异步请求数据传给子组件流程
1. 父组件请求数据 — 同时创建子组件
2. 由于数据请求会慢，子组件先初始化，这时候props都是没数据的，如果props有对象但是没有默认值，在模板上面用就会报错。
3. 父组件请求数据回来了，修改了data，由于父组件修改data，她传进去的props也更新，从而子组件的props更新，重新render页面（很快啊，你基本看不出来）
- 所以啊，我们平时不操作数据的情况下，感觉没问题，是因为数据更新导致重新渲染了。 一定要写默认值，不然有时候报错。
- 你也应该想到了，那我等数据回来再加载子组件，那不就完事了么。
`v-if='today.numbers'`
在使用组件的地方判断一下请求到数据了没有就可以了。 至于这样做的坏处好处，我觉得是如果数据请求很久的话，子组件一直没加载导致用户体验不好吧
## 动态绑定样式style
- tip
   - 一个组件根据数据显示不同内容，把数据放到data里面，处理数组形式，v-for渲染
   - 而且不同组件不同的背景处理
```
<!-- template -->
:style="{ backgroundImage: item.backgroundImage }"
//动态绑定style的对象写法，
//style是行内样式！
<!-- data.configList.backgroundImage-->
backgroundImage: `url(${require('@/assets/img/user/weight-manage-entry-bg.png')})`,
```
## 动态绑定样式class

## :src
- 写在data里面的url要使用require()
- background-size: contain;
- background-repeat: no-repeat;

- 

## v-for
- v-for循环的div，点击不同div调用不同方法： 在v-for的盒子上绑定方法，循环字段增加方法名，传入不同方法名作为参数，通过这个调用不同方法
- 

## v-for和v-if不能连用
1. 不能一起用：
- 因为v-for的<mark>优先级</mark>高于v-if，也就是先回去循环，再去查看循环出来的div是否显示，会造成性能浪费
2. 可以嵌套使用，v-for里面嵌套v-if
3. 解决方法：用计算属性去筛选子元素

## template
- 不影响页面结构，作用相对于div
## 路由跳转
- 路由的配置信息
   - path：路由路径
   - name：路由的名字，可以给路由跳转的时候使用
   - props：
   - component
   - meta：{title:'血尿酸录入'},可以用作为顶部栏标题，小程序和浏览器
- 

## 路由跳转携带参数
### 方法一 props
- 配置xx页面路由props要接收的参数a
- 那从某个页面跳到xx页面，携带参数a
- 在xx页面就可以配置props参数，声明a去接收使用
## 拉取项目或者分支报错
- npm install 试试


名称
级别
职称