---
title: 小程序
---
## navbar去跳转新的页面
```
<!-- '@/plugins/device-tools' -->
class Device {

    /**
     * 应用类型
     */
    private appType: App

    constructor() {
        this.testAppType()
    }

    private testAppType() {
        if (isWorkMiniProgram()) {
            this.appType = App.WorkMiniProgram
        }
        else if (isWork()) {
            this.appType = App.Work
        }
        else if (isMiniProgram()) {
            this.appType = App.MiniProgram
        }
        else if (isWechat()) {
            this.appType = App.Wechat
        }
        else if (isMyNative()) {
            this.appType = App.MyNative
        }
        else {
            this.appType = App.Other
        }
    }
    <!--  -->
import device from '@/plugins/device-tools'

export const gotoMeasureCalendar = query => {
    const routerData = {
        name: 'MeasureCalendar',
        query
    }
    if (device.isMiniProgram()) {
        gotoMiniInsidePage(routerData)
        return
    }
    console.log('routerData', routerData);
    routerPush(routerData)
}
```