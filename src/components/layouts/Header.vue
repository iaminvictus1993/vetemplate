<template>
    <div class="container" :style="{backgroundColor: bgColor}">
        <router-link class="logo" to="/">
            <img class="img" src="../../assets/logo.png" />
            <span class="logoTitle">vetemplate</span>
        </router-link>
        <!-- 仅侧边栏显示 -->
        <template v-if="!isShowDorpDown">
            <img :class="['img', {'rotate': addRotate}]" id="zhankai" src="../../assets/img/zhankai.png" @click="toggole" />
            <div class="breadcrumb">
                <el-breadcrumb separator="/">
                    <el-breadcrumb-item class="redirect" to="/">首页</el-breadcrumb-item>
                    <!-- v-if为了区分首页 -->
                    <el-breadcrumb-item class="noRedirect" v-if="$route.matched.every(item => item.path.length > 1)" v-for="(item, index) in $route.matched" :key="index">{{item.meta.mark}}</el-breadcrumb-item>
                </el-breadcrumb>
            </div>
        </template>
        <!-- 仅顶部布局显示 -->
        <DorpDown v-if="isShowDorpDown"></DorpDown>
        <div class='rightPart'>
            <el-dropdown @command="handleCommand">
                <span class="el-dropdown-link">
                    <i class="el-icon-lrm-baitu"></i>
                    {{theme|theme}}
                    <i class="el-icon-arrow-down el-icon--right"></i>
                </span>
                <el-dropdown-menu slot="dropdown">
                    <el-dropdown-item divided command="0">灰白</el-dropdown-item>
                    <el-dropdown-item divided command="default">blur</el-dropdown-item>
                    <el-dropdown-item divided command="3">{{isShowDorpDown?'侧边布局':'顶部布局'}}</el-dropdown-item>
                </el-dropdown-menu>
            </el-dropdown>
        </div>

    </div>
</template>

<script>
import DorpDown from '../layouts2/DorpDown'
export default {
    data() {
        return {
            addRotate: false,
            theme: '换肤',
            bgColor: 'rgba(0, 0, 0, 0.5)',
            isShowDorpDown: false
        }
    },
    props: {
        isCollapse: {
            type: Boolean,
            required: true
        }
    },
    created() {
        this.theme = localStorage.getItem('theme') || '换肤'
        if (this.theme === 'style0') {
            this.bgColor = 'black'
        }
        this.isShowDorpDown = localStorage.getItem('layout') === 'layouts2'
        this.scroll()
    },
    filters: {
        theme(input) {
            const tempObj = {
                style0: '灰白',
                styledefault: 'blur',
                换肤: '换肤'
            }
            return tempObj[input]
        }
    },
    components: {
        DorpDown
    },
    methods: {
        toggole() {
            this.$emit('update:isCollapse', !this.isCollapse) // 改变父组件isCollapse属性
            this.addRotate = !this.addRotate
        },
        handleCommand(command) {
            if (command === '0') {
                this.bgColor = 'black'
                this.bus.$emit('set-theme', 'style0')
            }
            if (command === 'default') {
                this.bgColor = 'rgba(0, 0, 0, 0.5)'
                this.bus.$emit('set-theme', 'styledefault')
            }
            if (command === '3') {
                this.isShowDorpDown = !this.isShowDorpDown
                this.bus.$emit(
                    'set-layout',
                    this.isShowDorpDown ? 'layouts2' : 'layouts'
                )
                return
            }
            const val = 'style' + command
            document.body.className = val
            this.theme = val
            localStorage.setItem('theme', val)
        },

        // 监听滚动距离，改变header的背景色
        scroll() {
            window.onscroll = () => {
                const scrollTop =
                    document.documentElement.scrollTop ||
                    window.pageYOffset ||
                    document.body.scrollTop
                if (this.bgColor !== 'black') {
                    if (scrollTop >= 20) {
                        this.bgColor = 'rgba(0, 0, 0, 0.8)'
                    } else {
                        this.bgColor = 'rgba(0, 0, 0, 0.5)'
                    }
                }
            }
        }
    }
}
</script>
<style lang='less' scoped>
.container {
    position: fixed;
    width: 100%;
    z-index: 99;
    height: 6vh;
    min-width: 1366px;
    .logo {
        width: 180px;
        margin-right: 50px;
        margin-left: 50px;
        text-align: right;
        color: #fff;
        display: block;
        font-size: 24px;
        font-family: Roboto, sans-serif;
        white-space: nowrap;
        float: left;
        line-height: 56px;
        height: 56px;
        .logoTitle {
            color: #2086bf;
        }
        &:hover {
            cursor: pointer;
            color: #2086bf;
        }
        .img {
            display: inline-block;
            background-size: contain;
            width: 70px;
            position: relative;
            top: 2px;
            height: 21px;
            border: none;
        }
    }
    .rightPart {
        position: absolute;
        color: white;
        top: 2vh;
        right: 20px;
        .el-dropdown {
            color: white;
        }
    }
}

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