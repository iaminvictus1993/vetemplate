// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import './elementUi'
import './assets/css/LRM.less'
import './assets/icon/iconfont.css'
import './router/routerGuard'
import extend from './extend'
Vue.use(extend)

Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
    el: '#app',
    router,
    components: { App },
    template: '<App/>'
})
