<template>
    <div>
        <div id="pie"></div>
    </div>

</template>

<script>
import echarts from 'echarts/lib/echarts'
import 'echarts/lib/chart/pie'
import 'echarts/lib/component/tooltip'
import 'echarts/lib/component/title'
import 'echarts/lib/component/legendScroll'
export default {
    data() {
        return {}
    },
    mounted() {
        this.instance = echarts.init(document.getElementById('pie'))
        let option = {
            title: {
                text: '交易对手比例',
                left: 'center',
                textStyle: {
                    color: 'white'
                }
            },
            tooltip: {
                trigger: 'item',
                formatter: '{a} <br/>{b}: {c} ({d}%)'
            },
            legend: {
                orient: 'vertical',
                x: 'left',
                top: 'top',
                left: 'right',
                data: ['德克士', '乡村基', '华莱士', '肯德基', '莱德快'],
                textStyle: {
                    color: 'white'
                }
            },
            series: [
                {
                    name: '交易对手比例',
                    type: 'pie',
                    radius: ['50%', '70%'],
                    avoidLabelOverlap: false,
                    label: {
                        normal: {
                            show: false,
                            position: 'center'
                        },
                        emphasis: {
                            show: true,
                            textStyle: {
                                fontSize: '30',
                                fontWeight: 'bold'
                            },
                            formatter: '{b}: {c}'
                        }
                    },
                    labelLine: {
                        normal: {
                            show: false
                        }
                    },
                    data: [
                        { value: 335, name: '德克士' },
                        { value: 310, name: '乡村基' },
                        { value: 234, name: '华莱士' },
                        { value: 135, name: '肯德基' },
                        { value: 1548, name: '莱德快' }
                    ]
                }
            ]
        }
        this.instance.setOption(option)
        window.addEventListener('resize', this.instance.resize)
    }
}
</script>
<style lang='less'>
#pie {
    width: 100%;
    height: 600px;
    background: url(../../assets/img/blur-bg-blurred.jpg) no-repeat fixed !important;
}
</style>
