---
title: Company
---

## web-h5-health项目逻辑
- 有userid本人，没有家属
## web-h5-health项目目录
- src
   - api 接口
   - assets 项目需要的静态文件，icon等
   - calculator？
   - components 公共组件
   - config 配置文件夹
      - color.ts 主题色配置
      - dict.ts 字典配置，像 1-8对应不同时间，查字典一样
      - options.ts 选项配置，复杂版字典配置
      - store.ts 缓存相关配置
   - libs 工具类
      - router-utils.js 路由跳转
      - expert-router-utils.js 专家端跳转方法配置
      - rule-list.js校验规则
      - toast.js 弹出框的封装？
      - vue-bus.ts 中央事件总线bus+跨级和兄弟组件通信
   - platform
   - plugins 插件
   - router路由文件夹
   - storages 缓存
   - views 业务页面
   - vuex 
- main.js
   - 全局的自定义指令
## 别名
```
alias: {
            '@': path.resolve(__dirname, './src'),
            '@c': path.resolve(__dirname, './src/components'),
            '@l': path.resolve(__dirname, './src/libs'),
            '@v': path.resolve(__dirname, './src/views')
        } // 别名配置
```
## libs/router-utils.js跳转工具使用注意事项
- 基础语法
- h5 小程序的从navbar主页跳转到其他新页面
```
import router from '@/router/index'
...
export function routerPush(obj) {
    Rollback.setNext()
    router.push(obj)
}
....
export const gotoMeasureCalendar = query => {
    const routerData = {
        name: 'MeasureCalendar',//这里的name就是router路由的名字
        query
    }
    //h5 小程序的从navbar主页跳转到其他新页面
    if (device.isMiniProgram()) {
        gotoMiniInsidePage(routerData)
        return
    }
    console.log('routerData', routerData);
    routerPush(routerData)
}
```
```
<!-- 对应的router/children/user-router.js -->
 {
                path: 'sugar/data/calander',
                name: 'MeasureCalendar',
                props: (route) => ({ ...route.query, ...route.params }),
                component: () => import(/* webpackChunkName: "group-user-sugar" */ '@v/user/sugar/data/measure-calendar.vue'),
                meta: {
                    title: '血糖数据'
                }
            },
```
- tabbar 底部导航栏？ 选项卡
- navbar 导航栏
## 7.11-7.12-家庭页管理工具的迭代
- 新入口
不同van-tab显示不同内容
跳转包裹xxid跳进去

## 7.11-7.15-家庭页管理工具的迭代
1. 血酮血压新入口
- 思路
  - 先处分组件，完成样式
     - manage-tools.vue整个管理工具的大组件
     -  根据有无数据显示不同样式，无数据的样式
     - flex布局+order
  - 处理逻辑，对接接口
     - 点击div跳转不同的记录页面
     - 有无数据来动态显示样式
- 不做推荐，把商城的搬过来
- icon的处理
   - icon park
   - figma切图下载
   - 旧的图标不要删除，可以别处有用
- 划动查询请求数据，更新data不重新渲染？=>this.$set
:style="{ 'order': item.manageDate.data ? order1 : order2 }"
------------------------
2. 健康档案新入口
- 运动和饮食方案
- 饮食方案
- 运动方案
- 消息通知

 gotoUserDeviceSelect
 gotoUserDeviceDetail
gotoUserDeviceList
otoUserDeviceBind

## 跳转
- 注册组件
- 路由配置路径
```
            {
                path: 'message/notice',
                name: 'MessageNotice',
                props: (route) => ({ ...route.query, ...route.params }),
                component: () => import(/* webpackChunkName: "user-message-notice" */ '@v/user/family-new/components/message-notice.vue'),
                meta: {
                    title: '消息通知'
                }
            }
```
- 配置跳转libs/router-utils.js
```
// 跳转消息通知
export const gotoMessageNotice = (query) => {
    router.push({
        name: 'MessageNotice',
        query
    })
}
```
- 由tools页面跳到notice页面 用props跳转携带参数的写法
```
<!-- tool页面 -->
        // 跳转消息通知
        gotoMessageNotice() {
            const data = {
                userId: this.userId
            }
            gotoMessageNotice(data)
        }
```
```
<!-- notice页面 -->
    props: {
        userId: {
            type: String,
            default: ''
        }
    },
```

- query 路径的问号后面
- 
- 当前方案id去获取最新
-------------------------
3. 多师共管
--------------------------
4. 推荐商品
## 待看
```
<span>{{ measureData.measureTime | timeText}}</span>
```


<<<<<<< HEAD
- 饮食方案
- 运动方案
- 消息通知

- 当前方案id去获取最新

18
 left: 66px;
 115

 $alert-color
 $theme-color
 $warn-color
=======
>>>>>>> 070683359b95420ad5e24b5b590e87942ff1c621
