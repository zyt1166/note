// 一个 VuePress 网站必要的配置文件是 .vuepress/config.js，
// 它应该导出一个 JavaScript 对象：
module.exports = {
    title: 'NOTE',
    description: '用来学习记录',
    themeConfig: {
        logo: '/assets/img/logo.png'
    },
    themeConfig: {
        sidebar: 'auto', //增加导航栏 Logo
        // 增加一些导航栏链接
        nav: [
            { text: 'Home', link: '/' },
            { text: 'tool', link: '/tool/' },
            { text: 'company', link: '/company/' },
            { text: 'vue', link: '/vue/' },
            { text: 'miniprogram', link: '/miniprogram/' },
            { text: 'js', link: '/js/' },
            { text: 'css', link: '/css/' },
            { text: '踩坑', link: '/hole/' }
        ]
    }
}