<template>
    <div class="container" :style="{backgroundColor: bgColor}">
        <router-link class="logo" to="/">
            <img class="img" src="../../assets/logo.png" />
            <span class="logoTitle">vetemplate</span>
        </router-link>
        <!-- 仅侧边栏显示 -->
        <BreadCrumb v-if="!isShowDorpDown" :isCollapseToSon.sync="isCollapseToSon"></BreadCrumb>
        <!-- 仅顶部布局显示 -->
        <DorpDown v-if="isShowDorpDown"></DorpDown>
        <div class='rightPart'>
            <el-dropdown @command="handleCommand">
                <span class="el-dropdown-link">
                    <i class="el-icon-lrm-buju"></i>
                    {{isShowDorpDown ? curRoute : '修改布局'}}
                    <i class="el-icon-arrow-down el-icon--right"></i>
                </span>
                <el-dropdown-menu slot="dropdown">
                    <el-dropdown-item divided command="3">{{isShowDorpDown?'侧边布局':'顶部布局'}}</el-dropdown-item>
                </el-dropdown-menu>
            </el-dropdown>
        </div>

    </div>
</template>

<script>
import DorpDown from '../layouts2/DorpDown'
import BreadCrumb from './BreadCrumb.vue'
export default {
    data() {
        return {
            theme: '换肤',
            bgColor: 'rgba(7, 143, 222, 0.9)',
            isShowDorpDown: false
        }
    },
    props: {
        isCollapse: {
            type: Boolean,
            required: true
        }
    },
    computed: {
        curRoute() {
            return this.$route.meta.mark || '修改布局'
        },
        isCollapseToSon: {
            set(val) {
                this.$emit('update:isCollapse', !this.isCollapseToSon)
            },
            get() {
                return this.isCollapse
            }
        }
    },
    created() {
        this.theme = localStorage.getItem('theme') || '换肤'
        if (this.theme === 'style0') {
            this.bgColor = 'rgba(7, 143, 222, 0.9)'
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
        DorpDown,
        BreadCrumb
    },
    methods: {
        handleCommand(command) {
            if (command === '0') {
                this.bgColor = 'rgba(7, 143, 222, 0.9)'
                this.bus.$emit('set-theme', 'style0')
            }
            if (command === 'default') {
                this.bgColor = 'rgba(7, 143, 222, 0.9)'
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
                this.bgColor =
                    scrollTop >= 20
                        ? 'rgba(7, 143, 222, 1)'
                        : 'rgba(7, 143, 222, 0.9)'
            }
        }
    }
}
</script>
<style lang='less' scoped>
@baseColor: white;

.container {
    position: fixed;
    width: 100%;
    z-index: 99;
    height: 56px;
    min-height: 56px;
    min-width: 1366px;
    transition: all ease 0.5s;
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
            color: #fff;
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
        top: 20px;
        right: 20px;
        .el-dropdown {
            color: white;
        }
    }
}
</style>