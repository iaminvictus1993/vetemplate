import Vue from 'vue'
import { customPageSizes } from '@/config'
const bus = new Vue()
export default {
    install(Vue, options) {
        Vue.mixin({
            data() {
                return {
                    bus,
                    initPageSize: 10, // 默认为5
                    customPageSizes
                }
            },
            methods: {

                /**
                 * 生成指定范围随机数
                 * @param {number} min 最小值
                 * @param {number} max 最大值
                 * return {number}
                 */
                rendomValue(min = 1, max = 5) {
                    return Math.floor(Math.random() * (max - min + 1) + min)
                }
            }
        })
    }
}
