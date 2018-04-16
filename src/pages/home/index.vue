<template>
    <div>
        <div class="clearfix">
            <IndicatorUnit v-for="(item, index) in arr" :obj="item" :key="index"></IndicatorUnit>
        </div>
        <Pie></Pie>
    </div>
</template>

<script>
import IndicatorUnit from './indicatorUnit'
import Pie from './Pie'
export default {
    data() {
        return {
            arr: [
                {
                    name: '单价',
                    value: 888888,
                    img: require('../../assets/img/bfj.png')
                },
                {
                    name: '进货价',
                    value: 126456412,
                    img: require('../../assets/img/pred.png')
                },
                {
                    name: '毛利润',
                    value: 888833388,
                    img: require('../../assets/img/leftAmount.png')
                },
                {
                    name: '净利润',
                    value: 1245545145,
                    img: require('../../assets/img/over.png')
                }
            ]
        }
    },

    created() {},
    components: {
        IndicatorUnit,
        Pie
    },
    methods: {}
}
</script>
<style lang='less' scoped>
.clearfix:after {
    content: ''; //设置内容为空
    height: 0; //高度为0
    line-height: 0; //行高为0
    display: block; //将文本转为块级元素
    visibility: hidden; //将元素隐藏
    clear: both//清除浮动 　　　　　;
}
.clearfix {
    zoom: 1;
}
</style>
