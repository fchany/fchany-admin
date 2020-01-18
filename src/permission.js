import router from './router'
import store from './store'
import NProgress from 'nprogress'
import 'nprogress/nprogress.css'
import { getToken, getUserType } from '@/utils/auth'

NProgress.configure({ showSpinner: false })


function hasPermission(roles, permissionRoles) {
  if (roles.includes('admin')) return true
  if (!permissionRoles) return true
  return roles.some(role => permissionRoles.indexOf(role) >= 0)
}

const whiteList = ['/login', '/auth-redirect']

router.beforeEach((to, from, next) => {
  var flag = getUserType();
  NProgress.start()
  if (getToken()) {
    if (to.path === '/login') {
      next({ path: '/' })
      NProgress.done()
    } else if (to.path === '/404') {
        next();
    } else {
      if (store.getters.roles.length === 0) {
        // 根据用户的角色类型给出不同的访问权限
        var pass = false;
        if (to.meta.roles) {
            for (var i = 0; i < to.meta.roles.length; i++) {
                if (to.meta.roles[i] == flag) {
                    pass = true;
                    break;
                }
            }
            if (pass) {
                next();
            } else {
                next({ path: '/404', replace: true, query: { noGoBack: true }})
            }
        } else {
            next()
        }
      } else {
        // 没有动态改变权限的需求可直接next() 删除下方权限判断 ↓
        if (hasPermission(store.getters.roles, to.meta.roles)) {
          next()
        } else {
          next({ path: '/404', replace: true, query: { noGoBack: true }})
        }
        // 可删 ↑
      }
    }
  } else {
    if (whiteList.indexOf(to.path) !== -1) {
      // 在免登录白名单，直接进入
      next()
    } else {
      next(`/login?redirect=${to.path}`) // 否则全部重定向到登录页
      NProgress.done()
    }
  }
})

router.afterEach(() => {
  NProgress.done()
})
