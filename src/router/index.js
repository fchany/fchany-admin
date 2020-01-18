import Vue from 'vue'
import Router from 'vue-router'

// in development-env not use lazy-loading, because lazy-loading too many pages will cause webpack hot update too slow. so only in production use lazy-loading;
// detail: https://panjiachen.github.io/vue-element-admin-site/#/lazy-loading

Vue.use(Router)

/* Layout */
import Layout from '../views/layout/Layout'

/**
* hidden: true                   if `hidden:true` will not show in the sidebar(default is false)
* alwaysShow: true               if set true, will always show the root menu, whatever its child routes length
*                                if not set alwaysShow, only more than one route under the children
*                                it will becomes nested mode, otherwise not show the root menu
* redirect: noredirect           if `redirect:noredirect` will no redirect in the breadcrumb
* name:'router-name'             the name is used by <keep-alive> (must set!!!)
* meta : {
    title: 'title'               the name show in subMenu and breadcrumb (recommend set)
    icon: 'svg-name'             the icon show in the sidebar
    breadcrumb: false            if false, the item will hidden in breadcrumb(default is true)
  }
**/

export const tree = [
    // 基础配置
    { path: '/login', name: "/login", component: () => import('@/views/login/index'), hidden: true },
    { path: '/404', name: "/404", component: () => import('@/views/404'), hidden: true },

    // 示例路由配置
    {
        path: '/',
        component: Layout,
        redirect: '/pageManage/index',
        name: 'pageManage',
        meta: {
            title: "页面管理", icon: 'dashboard'
        },
        children: [
            {
                path: '/pageManage/index',
                name: 'pageManageIndex',
                component: () => import('@/views/pageManage/index'),
                meta: { 
                    title: '用户管理', noCache: true, affix: true// 固定tabs 不可删除
                }
            },
            {
                path: '/pageManage/index1',
                name: 'pageManageIndex1',
                component: () => import('@/views/pageManage/index'),
                meta: { 
                    title: '用户管理2'
                }
            }
        ]
    },
    {
        path: '/a',
        component: Layout,
        redirect: '/pageManage/index',
        name: 'pageManage',
        meta: {
            title: "页面管理", icon: 'dashboard'
        },
        children: [
            {
                path: 'a/pageManage/index',
                name: 'pageManageIndex',
                component: () => import('@/views/pageManage/index'),
                meta: { 
                    title: '用户管理', noCache: true, affix: true// 固定tabs 不可删除
                }
            },
            {
                path: 'a/pageManage/index1',
                name: 'pageManageIndex1',
                component: () => import('@/views/pageManage/index'),
                meta: { 
                    title: '用户管理2'
                }
            }
        ]
    },
    { path: '*', redirect: '/404', hidden: true }
]


export default new Router({
	// mode: 'history', //后端支持可开
	scrollBehavior: () => ({ y: 0 }),
	routes: tree
})

export const asyncRoutes = [
    
]

