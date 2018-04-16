import { lrmApiRoot } from '../config'
import axios from 'axios'
import './interceptors.js'
import qs from 'querystring'
export default {

    // 查询
    query(url, params) {
        let config = { params }

        if (params && params.header) {
            config = { params, headers: params.header }
            delete params.header
        }
        return axios.get(lrmApiRoot + url, config).then(data => data.data)
    },

    // 保存
    save(url, params) {
        return axios.post(lrmApiRoot + url, qs.stringify(params)).then(data => data.data)
    },

    // 修改
    put(url, params) {
        return axios.put(lrmApiRoot + url, qs.stringify(params)).then(data => data.data)
    },

    // 删除
    delete(url, params) {
        return axios.delete(lrmApiRoot + url, {
            data: params,
            headers: {
                'Content-Type': 'application/json'
            }
        }).then(data => data.data)
    },

    // 查询全部
    getAllByQuery({table, key, label, where}) {
        return axios.get(lrmApiRoot + `/com/option?TableName=${table}&KeyColumn=${key}&LabelColumn=${label}&Where=${where}`, null).then(data => data.data)
    },

    // 保存数组的时候，请求头为json
    postByJson(url, params) {

        // 统一新增时传入创建人
        params.CreateUser = params.CreateUser || '张三'
        return axios.post(lrmApiRoot + url, params, {
            headers: {
                'Content-Type': 'application/json'
            }
        }).then(data => data.data)
    },

    // 保存数组的时候，请求头为json
    putByJson(url, params) {

        // 统一修改是传入修改人
        params.UpdateUser = params.UpdateUser || '李四'
        return axios.put(lrmApiRoot + url, params, {
            headers: {
                'Content-Type': 'application/json'
            }
        }).then(data => data.data)
    }
}
