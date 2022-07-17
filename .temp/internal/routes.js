/**
 * Generated by "@vuepress/internal-routes"
 */

import { injectComponentOption, ensureAsyncComponentsLoaded } from '@app/util'
import rootMixins from '@internal/root-mixins'
import GlobalLayout from "C:\\Users\\admin\\Desktop\\vue-press\\vuepress-starter\\node_modules\\@vuepress\\core\\lib\\client\\components\\GlobalLayout.vue"

injectComponentOption(GlobalLayout, 'mixins', rootMixins)
export const routes = [
  {
    name: "v-72a0bb5b",
    path: "/company/",
    component: GlobalLayout,
    beforeEnter: (to, from, next) => {
      ensureAsyncComponentsLoaded("Layout", "v-72a0bb5b").then(next)
    },
  },
  {
    path: "/company/index.html",
    redirect: "/company/"
  },
  {
    name: "v-26be5b6c",
    path: "/",
    component: GlobalLayout,
    beforeEnter: (to, from, next) => {
      ensureAsyncComponentsLoaded("Layout", "v-26be5b6c").then(next)
    },
  },
  {
    path: "/index.html",
    redirect: "/"
  },
  {
    name: "v-7483d50a",
    path: "/hole/",
    component: GlobalLayout,
    beforeEnter: (to, from, next) => {
      ensureAsyncComponentsLoaded("Layout", "v-7483d50a").then(next)
    },
  },
  {
    path: "/hole/index.html",
    redirect: "/hole/"
  },
  {
    name: "v-f143086a",
    path: "/tool/",
    component: GlobalLayout,
    beforeEnter: (to, from, next) => {
      ensureAsyncComponentsLoaded("Layout", "v-f143086a").then(next)
    },
  },
  {
    path: "/tool/index.html",
    redirect: "/tool/"
  },
  {
    name: "v-5b3a3c1b",
    path: "/css/",
    component: GlobalLayout,
    beforeEnter: (to, from, next) => {
      ensureAsyncComponentsLoaded("Layout", "v-5b3a3c1b").then(next)
    },
  },
  {
    path: "/css/index.html",
    redirect: "/css/"
  },
  {
    name: "v-06cd5229",
    path: "/js/",
    component: GlobalLayout,
    beforeEnter: (to, from, next) => {
      ensureAsyncComponentsLoaded("Layout", "v-06cd5229").then(next)
    },
  },
  {
    path: "/js/index.html",
    redirect: "/js/"
  },
  {
    name: "v-2d6086db",
    path: "/miniprogram/",
    component: GlobalLayout,
    beforeEnter: (to, from, next) => {
      ensureAsyncComponentsLoaded("Layout", "v-2d6086db").then(next)
    },
  },
  {
    path: "/miniprogram/index.html",
    redirect: "/miniprogram/"
  },
  {
    name: "v-31024b3b",
    path: "/vue/",
    component: GlobalLayout,
    beforeEnter: (to, from, next) => {
      ensureAsyncComponentsLoaded("Layout", "v-31024b3b").then(next)
    },
  },
  {
    path: "/vue/index.html",
    redirect: "/vue/"
  },
  {
    name: "v-b65bf158",
    path: "/%E7%BB%84%E4%BB%B6/",
    component: GlobalLayout,
    beforeEnter: (to, from, next) => {
      ensureAsyncComponentsLoaded("Layout", "v-b65bf158").then(next)
    },
  },
  {
    path: "/组件/",
    redirect: "/%E7%BB%84%E4%BB%B6/"
  },
  {
    path: "/%E7%BB%84%E4%BB%B6/index.html",
    redirect: "/%E7%BB%84%E4%BB%B6/"
  },
  {
    path: "/组件/",
    redirect: "/%E7%BB%84%E4%BB%B6/"
  },
  {
    path: '*',
    component: GlobalLayout
  }
]