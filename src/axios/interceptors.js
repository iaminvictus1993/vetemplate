import axios from 'axios'
import { Message } from 'element-ui'

// Add a request interceptor
axios.interceptors.request.use(function(config) {

    // Do something before request is sent
    return config
}, function(error) {

    // Do something with request error
    return Promise.reject(error)
})

// Add a response interceptor
axios.interceptors.response.use(function(response) {

    // 统一处理post put delet 操作后的反馈
    if (response.config.method !== 'get') {
        if (response.data.Status) {
            Message({
                type: 'success',
                message: '操作成功'
            })
        } else {
            Message({
                type: 'error',
                message: response.data.Error || response.data.Message || '操作失败'
            })
        }
    }
    return response
}, function(error) {
    console.log('拦截器', error)

    // Do something with response error
    return Promise.reject(error)
})
