<template>
    <div>
        <img v-if="isShowImg" :class="['img', {'rotate': addRotate}]" id="zhankai" src="../../assets/img/zhankai.png" @click="toggole" />
        <div class="breadcrumb">
            <el-breadcrumb separator="/">
                <el-breadcrumb-item class="redirect" to="/">
                    <b class="logoTitle">首页</b>
                </el-breadcrumb-item>
                <!-- v-if为了区分首页 -->
                <el-breadcrumb-item class="noRedirect" v-if="$route.matched.every(item => item.path.length > 1)" v-for="(item, index) in $route.matched" :key="index">{{item.meta.mark}}</el-breadcrumb-item>
            </el-breadcrumb>
        </div>
    </div>
</template>

<script>
export default {
    name: 'BreadCrumb',
    data() {
        return {
            addRotate: false
        }
    },
    props: {
        isCollapseToSon: {
            type: Boolean
        },
        isShowImg: {
            type: Boolean,
            default: true
        }
    },
    created() {},
    components: {},
    computed: {},
    methods: {
        toggole() {
            this.$emit('update:isCollapseToSon', !this.isCollapseToSon) // 改变父组件isCollapse属性
            this.addRotate = !this.addRotate
        }
    }
}
</script>
<style lang='less' scoped>
.rotate {
    transform: rotate(90deg);
}
#zhankai {
    width: 33px;
    height: 33px;
    position: relative;
    top: 10.5px;
    &:hover {
        cursor: pointer;
    }
}
</style>