// 布局
import home from '@/pages/home'
const Layout = () => import(/* webpackChunkName: "layouts" */'@/components/layout.vue')
export default [
    {
        path: '/',
        meta: {
            mark: '首页',
            icon: 'el-icon-star-on',
            noSub: true
        },
        component: Layout,
        children: [{
            path: '',
            name: 'DashBoard',
            component: home
        }]
    }, {
        path: '/reportAndMonitor',
        name: 'reportAndMonitor',
        component: Layout,
        meta: {
            mark: '菜单',
            icon: 'el-icon-view',
            groups: ['菜单一组']
        },
        children: [{
            path: 'menu1',
            meta: {
                mark: '菜单一',
                icon: 'el-icon-document',
                group: '菜单一组'
            },
            component: { template: '<h2 style="color: red;height:2000px;">菜单一</h2>' }
        },
        {
            path: 'menu2',
            meta: {
                mark: '菜单二',
                icon: 'el-icon-document',
                group: '菜单一组'
            },
            component: { template: '<h2 style="color: red;height:2000px;">菜单二</h2>' }
        }]
    }
]
