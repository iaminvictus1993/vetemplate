/**
 * Service 基础类
 */
import Api from '@/axios/api.js'
export default class BaseService {

    // 基础查询
    query(url, params) {
        return Api.query(url, params)
    }

    // 基础新增
    post(url, params) {

        // 统一新增时传入创建人
        params.CreateUser = params.CreateUser || '张三'
        return Api.save(url, params)
    }

    // 基础修改
    put(url, params) {

        // 统一修改是传入修改人
        params.UpdateUser = params.UpdateUser || '李四'
        return Api.put(url, params)
    }

    // 基础删除
    delete(url, params) {
        return Api.delete(url, params)
    }
}
