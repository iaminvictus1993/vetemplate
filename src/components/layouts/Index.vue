<template>
    <div class="layout-container">
        <el-container>
            <el-header class="layout-header" height="6vh">
                <Header :isCollapse.sync="isCollapse"></Header>
            </el-header>
            <el-container class="layout-main">
                <el-aside :class="['layout-main', {aside: !isCollapse, flagClass: isCollapse}]" style="width: auto;">
                    <Aside :isCollapse="isCollapse"></Aside>
                </el-aside>
                <el-main :class="{'content-margin': isCollapse}">
                    <transition name="fade" mode="out-in">
                        <router-view></router-view>
                    </transition>
                </el-main>
            </el-container>
        </el-container>
    </div>
</template>

<script>
import Header from './Header'
import Aside from './Aside'
export default {
    data() {
        return {
            isCollapse: false
        }
    },
    components: {
        Header,
        Aside
    },
    created() {
        const self = this
        this.bus.$on('set-isCollapse', function(bol) {
            self.isCollapse = bol
        })
    },
    computed: {},

    methods: {}
}
</script>
<style lang='less' scoped>
.layout-container {
    background: url(../../assets/img/blur-bg.jpg) no-repeat fixed;
    background-size: cover;
    .layout-main {
        min-height: 94vh;
        .content-margin {
            margin-left: 64px;
        }
        .aside {
            min-width: 300px;
            // position: fixed;
        }
        .el-main {
            width: 100%;
        }
    }
}
.el-container {
    .el-aside {
    float: left;
    }
    .el-main {
        float: right;
        flex: 1;
    }
}
</style>