import Vue from 'vue'
import Router from 'vue-router'
import { normalizeURL, decode } from 'ufo'
import { interopDefault } from './utils'
import scrollBehavior from './router.scrollBehavior.js'

const _515aee44 = () => interopDefault(import('../pages/login.vue' /* webpackChunkName: "pages/login" */))
const _66938f8d = () => interopDefault(import('../pages/SignUp.vue' /* webpackChunkName: "pages/SignUp" */))
const _3084913d = () => interopDefault(import('../pages/dashboard/Bookmarks.vue' /* webpackChunkName: "pages/dashboard/Bookmarks" */))
const _db60b156 = () => interopDefault(import('../pages/dashboard/Followers.vue' /* webpackChunkName: "pages/dashboard/Followers" */))
const _7e910654 = () => interopDefault(import('../pages/dashboard/OrderHistory.vue' /* webpackChunkName: "pages/dashboard/OrderHistory" */))
const _53a27668 = () => interopDefault(import('../pages/dashboard/OrderList.vue' /* webpackChunkName: "pages/dashboard/OrderList" */))
const _621c0071 = () => interopDefault(import('../pages/dashboard/Photos.vue' /* webpackChunkName: "pages/dashboard/Photos" */))
const _0e4d2bc8 = () => interopDefault(import('../pages/dashboard/Review.vue' /* webpackChunkName: "pages/dashboard/Review" */))
const _0cbe046a = () => interopDefault(import('../pages/resturant/FoodMenu.vue' /* webpackChunkName: "pages/resturant/FoodMenu" */))
const _b41e4b0c = () => interopDefault(import('../pages/resturant/ResturantTwoColumn.vue' /* webpackChunkName: "pages/resturant/ResturantTwoColumn" */))
const _b44803e0 = () => interopDefault(import('../pages/resturant/SearchResturant.vue' /* webpackChunkName: "pages/resturant/SearchResturant" */))
const _f09969a6 = () => interopDefault(import('../pages/index.vue' /* webpackChunkName: "pages/index" */))

const emptyFn = () => {}

Vue.use(Router)

export const routerOptions = {
  mode: 'history',
  base: '/',
  linkActiveClass: 'nuxt-link-active',
  linkExactActiveClass: 'nuxt-link-exact-active',
  scrollBehavior,

  routes: [{
    path: "/login",
    component: _515aee44,
    name: "login"
  }, {
    path: "/SignUp",
    component: _66938f8d,
    name: "SignUp"
  }, {
    path: "/dashboard/Bookmarks",
    component: _3084913d,
    name: "dashboard-Bookmarks"
  }, {
    path: "/dashboard/Followers",
    component: _db60b156,
    name: "dashboard-Followers"
  }, {
    path: "/dashboard/OrderHistory",
    component: _7e910654,
    name: "dashboard-OrderHistory"
  }, {
    path: "/dashboard/OrderList",
    component: _53a27668,
    name: "dashboard-OrderList"
  }, {
    path: "/dashboard/Photos",
    component: _621c0071,
    name: "dashboard-Photos"
  }, {
    path: "/dashboard/Review",
    component: _0e4d2bc8,
    name: "dashboard-Review"
  }, {
    path: "/resturant/FoodMenu",
    component: _0cbe046a,
    name: "resturant-FoodMenu"
  }, {
    path: "/resturant/ResturantTwoColumn",
    component: _b41e4b0c,
    name: "resturant-ResturantTwoColumn"
  }, {
    path: "/resturant/SearchResturant",
    component: _b44803e0,
    name: "resturant-SearchResturant"
  }, {
    path: "/",
    component: _f09969a6,
    name: "index"
  }],

  fallback: false
}

export function createRouter (ssrContext, config) {
  const base = (config._app && config._app.basePath) || routerOptions.base
  const router = new Router({ ...routerOptions, base  })

  // TODO: remove in Nuxt 3
  const originalPush = router.push
  router.push = function push (location, onComplete = emptyFn, onAbort) {
    return originalPush.call(this, location, onComplete, onAbort)
  }

  const resolve = router.resolve.bind(router)
  router.resolve = (to, current, append) => {
    if (typeof to === 'string') {
      to = normalizeURL(to)
    }
    return resolve(to, current, append)
  }

  return router
}
