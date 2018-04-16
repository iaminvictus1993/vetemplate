import router from './index'
import NProgress from 'nprogress' // 路由切换进度条
import 'nprogress/nprogress.css'
NProgress.configure({ showSpinner: false })

router.beforeEach((to, from, next) => {
    NProgress.start()
    next()
})
router.afterEach(() => {
    NProgress.done()
})
